#!/usr/bin/env python3
"""
Renders a set of words through OmniVoice in several adult voices, for judging
against the old tigre-vits clips.

    ./tools/omni.sh tools/omni_audition.py
    node tools/build_omni_compare.js

`instruct` is not free text — the model accepts a fixed tag vocabulary and
raises on anything else. The usable adult tags are:

    female  male
    young adult  middle-aged  elderly
    low pitch  moderate pitch  high pitch
    plus accent tags (american, british, indian, ...)

`child` and `teenager` exist too, but this app wants a clear adult voice for
children to copy, so only adult combinations are rendered here.
"""

import io
import json
import os
import subprocess
import time

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "tools", "omni-audition")

VOICES = {
    "f-young":  "female, young adult, moderate pitch",
    "f-mid":    "female, middle-aged, moderate pitch",
    "m-mid":    "male, middle-aged, moderate pitch",
    "m-low":    "male, middle-aged, low pitch",
}

# Letters first — they are the bulk of the app and where every previous
# attempt fell apart.
WORDS = [
    ("ha", "ሀ"), ("lu", "ሉ"), ("mi", "ሚ"), ("qa", "ቃ"),
    ("selam", "ሰላም"), ("merhab", "መርሐበ"), ("harmaz", "ሐርማዝ"),
    ("goodbye", "ደሐን ትትሌከ"),
    ("sentence", "ዝላም ዘልመት ምን ገብእ ይእገይስ።"),
]

FILTERS = ("silenceremove=start_periods=1:start_silence=0.03:start_threshold=-50dB:detection=peak,"
           "areverse,"
           "silenceremove=start_periods=1:start_silence=0.03:start_threshold=-50dB:detection=peak,"
           "areverse,loudnorm=I=-16:TP=-1.5:LRA=11,adelay=80:all=1,apad=pad_dur=0.18")


def encode(wav_path, dest):
    p = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", wav_path,
         "-af", FILTERS, "-ar", "22050", "-ac", "1", "-b:a", "64k", dest],
        stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if p.returncode != 0:
        raise RuntimeError(p.stderr.decode("utf8", "replace"))


def main():
    import numpy as np
    import soundfile as sf
    import torch
    from omnivoice import OmniVoice

    t0 = time.time()
    model = OmniVoice.from_pretrained("k2-fsa/OmniVoice", device_map="cpu", dtype=torch.float32)
    print(f"model loaded in {time.time() - t0:.0f}s", flush=True)

    os.makedirs(OUT, exist_ok=True)
    # Written before generating, not after: on CPU a full run takes half an
    # hour, and the comparison page should be buildable from whatever clips
    # already exist rather than only once everything is finished.
    meta = {"voices": VOICES, "words": [{"slug": s, "tg": t} for s, t in WORDS]}
    with open(os.path.join(OUT, "meta.json"), "w", encoding="utf8") as fh:
        json.dump(meta, fh, ensure_ascii=False, indent=2)
    times = []

    for vk, instruct in VOICES.items():
        vdir = os.path.join(OUT, vk)
        os.makedirs(vdir, exist_ok=True)
        for slug, text in WORDS:
            t = time.time()
            audio = model.generate(text=text, language="tig", instruct=instruct)
            a = np.asarray(audio[0], dtype=np.float32)
            raw = os.path.join(vdir, slug + ".wav")
            sf.write(raw, a, 24000)
            encode(raw, os.path.join(vdir, slug + ".mp3"))
            os.remove(raw)
            dt = time.time() - t
            times.append(dt)
            print(f"  [{vk}] {text}: {len(a) / 24000:.2f}s audio in {dt:.0f}s", flush=True)

    with open(os.path.join(OUT, "meta.json"), "w", encoding="utf8") as fh:
        json.dump(meta, fh, ensure_ascii=False, indent=2)

    avg = sum(times) / len(times)
    print(f"\naverage {avg:.1f}s per clip on CPU")
    print(f"761 clips would take about {avg * 761 / 3600:.1f} hours")


if __name__ == "__main__":
    main()
