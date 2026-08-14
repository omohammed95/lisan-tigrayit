#!/usr/bin/env python3
"""
Renders the app's words with k2-fsa/OmniVoice, a zero-shot multilingual TTS
that covers Tigre (tig) on top of ~581k hours of multilingual training.

    node tools/extract_tigre.js
    ./tools/omni.sh tools/generate_omni.py              # 574 words, ~7h
    ./tools/omni.sh tools/generate_omni.py --singles    # 187 letters, ~2.4h
    ./tools/omni.sh tools/generate_omni.py --install    # copy into audio/
    node tools/build_manifest.js

The two passes exist because single characters behave differently from words.
No speech corpus contains isolated syllables, so every TTS tried on this
project has struggled with them, and OmniVoice fails in a way no automated
check catches: the same letter renders correctly in one voice and comes out as
noise at full volume in another, and once it returned an empty array outright.
Words are therefore rendered in the middle-aged voice and single characters in
the low-pitch one, which was audible on the letters the other voice lost.

That makes --singles a workaround, not a fix. The letters are worth listening
to before shipping; whatever still sounds wrong is a candidate for recording
with tools/build_recorder.js, which drops recordings into the same filenames.

Clips are staged in tools/.omni-out rather than written straight to audio/, so
an interrupted run resumes, and so the previous engine's output is only
replaced once a full set exists.
"""

import argparse
import os
import shutil
import subprocess
import time

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STAGE = os.path.join(REPO, "tools", ".omni-out")
AUDIO = os.path.join(REPO, "audio")
WORKLIST = os.path.join(REPO, "tools", "tigre_strings.json")

MODEL_ID = "k2-fsa/OmniVoice"
LANG = "tig"

# `instruct` takes a fixed tag vocabulary, not free text. Both voices were
# picked by ear from tools/omni-audition.
#
# Words render best in the middle-aged voice. Single characters are unreliable
# in it — some come out as noise at full volume — but the same letters were
# audible in the low-pitch voice, so the alphabet is rendered separately with
# that one. It is not a fix so much as a workaround for a model that was never
# trained on isolated syllables; expect to spot-check the letters by ear.
VOICE = "male, middle-aged, moderate pitch"
VOICE_SINGLE = "male, middle-aged, low pitch"

# Same chain the recordings get, so synthesized and recorded clips sit at the
# same level and neither sounds clipped next to the other.
TRIM = ("silenceremove=start_periods=1:start_silence=0.03:"
        "start_threshold=-50dB:detection=peak")
FILTERS = (f"{TRIM},areverse,{TRIM},areverse,"
           "loudnorm=I=-16:TP=-1.5:LRA=11,adelay=80:all=1,apad=pad_dur=0.18")


def encode(wav_path, dest):
    p = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", wav_path,
         "-af", FILTERS, "-ar", "22050", "-ac", "1", "-b:a", "48k", dest],
        stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if p.returncode != 0:
        raise RuntimeError(p.stderr.decode("utf8", "replace").strip())


def install():
    """Copy the staged clips over the live set."""
    staged = [f for f in os.listdir(STAGE) if f.endswith(".mp3")] if os.path.isdir(STAGE) else []
    if not staged:
        print("Nothing staged in tools/.omni-out — run without --install first.")
        return 1
    os.makedirs(AUDIO, exist_ok=True)
    for f in staged:
        shutil.copy2(os.path.join(STAGE, f), os.path.join(AUDIO, f))
    print(f"Installed {len(staged)} clips into audio/")
    print("Next: node tools/build_manifest.js")
    return 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="render only the first N")
    ap.add_argument("--install", action="store_true", help="copy staged clips into audio/ and exit")
    ap.add_argument("--retries", type=int, default=2, help="attempts per utterance")
    ap.add_argument("--singles", action="store_true",
                    help="render the single characters (alphabet + suffixes) instead of the words")
    args = ap.parse_args()

    if args.install:
        raise SystemExit(install())

    import json
    import numpy as np
    import soundfile as sf
    import torch
    from omnivoice import OmniVoice

    with open(WORKLIST, encoding="utf8") as fh:
        entries = json.load(fh)

    if args.singles:
        todo_entries = [e for e in entries if len(e["say"]) == 1]
        voice = VOICE_SINGLE
        print(f"{len(todo_entries)} single characters, voice: {voice}")
    else:
        todo_entries = [e for e in entries if len(e["say"]) > 1]
        voice = VOICE
        print(f"{len(todo_entries)} words to synthesize, voice: {voice}")

    # Several ids share an utterance once synonym lists collapse to their first
    # form; generate each distinct utterance once and copy it to every id.
    by_say = {}
    for e in todo_entries:
        by_say.setdefault(e["say"], []).append(e["id"])

    os.makedirs(STAGE, exist_ok=True)
    pending = [(say, ids) for say, ids in by_say.items()
               if not all(os.path.exists(os.path.join(STAGE, i + ".mp3")) for i in ids)]
    # Counted before --limit truncates, otherwise a small test run reports the
    # work it is skipping as work already finished.
    done_already = len(by_say) - len(pending)
    if args.limit:
        pending = pending[:args.limit]

    if not pending:
        print(f"All {len(by_say)} utterances already staged. Run --install to apply.")
        return
    print(f"{len(pending)} utterances to render ({done_already} already staged)")

    model = OmniVoice.from_pretrained(MODEL_ID, device_map="cpu", dtype=torch.float32)
    print(f"Voice: {voice}\n", flush=True)

    started = time.time()
    failures = []
    for n, (say, ids) in enumerate(pending, 1):
        tmp = os.path.join(STAGE, "_tmp.wav")
        ok = False
        for attempt in range(1, args.retries + 1):
            try:
                audio = model.generate(text=say, language=LANG, instruct=voice)
                a = np.asarray(audio[0], dtype=np.float32)
                # The model occasionally returns nothing at all; treat a clip
                # too short to be speech as a failed attempt and try again.
                if a.size < 24000 * 0.15:
                    raise RuntimeError(f"returned {a.size} samples")
                sf.write(tmp, a, 24000)
                for i in ids:
                    encode(tmp, os.path.join(STAGE, i + ".mp3"))
                ok = True
                break
            except Exception as exc:
                if attempt == args.retries:
                    failures.append((say, str(exc)))
                    print(f"  FAILED {say!r}: {exc}", flush=True)
        if os.path.exists(tmp):
            os.remove(tmp)

        if n % 10 == 0 or n == len(pending):
            per = (time.time() - started) / n
            left = per * (len(pending) - n) / 3600
            print(f"  [{n}/{len(pending)}] {per:.0f}s/clip, ~{left:.1f}h left", flush=True)

    total = sum(os.path.getsize(os.path.join(STAGE, f))
                for f in os.listdir(STAGE) if f.endswith(".mp3"))
    print(f"\nStaged {len(os.listdir(STAGE))} files, {total / 1e6:.1f} MB")
    if failures:
        print(f"{len(failures)} utterances failed after {args.retries} attempts:")
        for say, err in failures[:20]:
            print(f"  {say!r}: {err}")
        print("Re-run to retry only those.")
    print("\nWhen happy: ./tools/omni.sh tools/generate_omni.py --install")


if __name__ == "__main__":
    main()
