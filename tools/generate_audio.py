#!/usr/bin/env python3
"""
Renders every Tigre string in tools/tigre_strings.json to audio/<id>.mp3 using
the BeitTigreAI/tigre-vits model, so the published site needs no TTS server.

    node tools/extract_tigre.js
    python3 tools/generate_audio.py --limit 12 --outdir tools/sample   # audition
    python3 tools/generate_audio.py                                    # full run
    node tools/build_manifest.js

Existing clips are kept, so an interrupted run resumes where it stopped; pass
--force to re-render. Requires ffmpeg on PATH and the coqui-tts package.
"""

import argparse
import io
import json
import os
import subprocess
import sys
import time

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORKLIST = os.path.join(REPO, "tools", "tigre_strings.json")
MODEL_ID = os.environ.get("MODEL_REPO_ID", "BeitTigreAI/tigre-vits")

# Speech at 22.05 kHz mono: 48 kbps mp3 is transparent enough and keeps the
# whole set to a handful of MB. mp3 (not opus) because every browser plays it.
BITRATE = "48k"

# Trim leading/trailing silence from both ends, then even out level across
# clips so a one-syllable letter is not quieter than a full sentence.
TRIM = (
    "silenceremove=start_periods=1:start_silence=0.03:"
    "start_threshold=-50dB:detection=peak"
)
FILTERS = f"{TRIM},areverse,{TRIM},areverse,loudnorm=I=-16:TP=-1.5:LRA=11"


def encode(wav_bytes, dest):
    """Pipe a WAV through ffmpeg into a trimmed, level-matched mp3."""
    proc = subprocess.run(
        [
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-f", "wav", "-i", "pipe:0",
            "-af", FILTERS,
            "-ar", "22050", "-ac", "1", "-b:a", BITRATE,
            dest,
        ],
        input=wav_bytes,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr.decode("utf8", "replace").strip())


VOCAB_CACHE = os.path.join(REPO, "tools", "model_vocab.json")


def save_vocab(vocab):
    with open(VOCAB_CACHE, "w", encoding="utf8") as fh:
        json.dump({"characters": "".join(sorted(vocab))}, fh, ensure_ascii=False, indent=2)


def load_cached_vocab():
    if not os.path.exists(VOCAB_CACHE):
        return None
    with open(VOCAB_CACHE, encoding="utf8") as fh:
        return set(json.load(fh)["characters"])


def drop_unsupported(entries, vocab, outdir):
    """Remove entries the model cannot pronounce, and delete any stale clips.

    The model was trained on a subset of Ge'ez — ፐ/ፑ/ፒ/ፓ and most of the ቸ row
    are absent — and coqui silently DISCARDS unknown characters instead of
    failing. A fully-unsupported string encodes to an empty file; a partly
    unsupported one becomes a word with a consonant missing. Teaching a child
    the wrong pronunciation is worse than showing no speaker button, so both are
    dropped: build_manifest.js then omits them and the UI hides the control.
    """
    unsupported = [e for e in entries if set(e["say"]) - vocab]
    if not unsupported:
        return entries

    missing = sorted({c for e in unsupported for c in set(e["say"]) - vocab})
    print(f"Skipping {len(unsupported)} strings using {len(missing)} character(s) "
          f"absent from the model vocabulary: {' '.join(missing)}")
    for e in unsupported:
        print(f"  {e['id']} {e['text']!r}")
        stale = os.path.join(outdir, e["id"] + ".mp3")
        if os.path.exists(stale):
            os.remove(stale)
            print(f"    removed stale clip {e['id']}.mp3")
    print()
    return [e for e in entries if not set(e["say"]) - vocab]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--outdir", default=os.path.join(REPO, "audio"))
    ap.add_argument("--limit", type=int, default=0, help="render only the first N (audition)")
    ap.add_argument("--force", action="store_true", help="re-render clips that already exist")
    args = ap.parse_args()

    with open(WORKLIST, encoding="utf8") as fh:
        entries = json.load(fh)
    if args.limit:
        # Spread the sample across the set rather than taking 12 alphabet cells.
        step = max(1, len(entries) // args.limit)
        entries = entries[::step][: args.limit]

    os.makedirs(args.outdir, exist_ok=True)

    # The vocabulary is cached from the last model load so a re-run can drop
    # unsupported strings without paying to load the model again.
    vocab = load_cached_vocab()
    if vocab is not None:
        entries = drop_unsupported(entries, vocab, args.outdir)

    todo = [e for e in entries if args.force
            or not os.path.exists(os.path.join(args.outdir, e["id"] + ".mp3"))]
    # With no cached vocabulary there is no way to know which strings are
    # unrenderable without loading the model, so fall through even with an empty
    # worklist — that first load is what seeds the cache.
    if not todo and vocab is not None:
        print(f"All {len(entries)} clips already present in {args.outdir}")
        return
    if todo:
        print(f"{len(todo)} of {len(entries)} clips to render into {args.outdir}")

    # Imported here so --help stays instant and the model only loads on a real run.
    import numpy as np
    import scipy.io.wavfile
    import torch
    from huggingface_hub import hf_hub_download
    from TTS.utils.synthesizer import Synthesizer

    print(f"Loading {MODEL_ID} ...")
    synthesizer = Synthesizer(
        tts_checkpoint=hf_hub_download(repo_id=MODEL_ID, filename="best_model.pth"),
        tts_config_path=hf_hub_download(repo_id=MODEL_ID, filename="config.json"),
        use_cuda=torch.cuda.is_available(),
    )
    rate = synthesizer.output_sample_rate
    print(f"Loaded on {'cuda' if torch.cuda.is_available() else 'cpu'}, {rate} Hz")

    if vocab is None:
        chars = synthesizer.tts_config.characters
        vocab = set(chars.characters) | set(chars.punctuations or "") | set(" ")
        save_vocab(vocab)
        entries = drop_unsupported(entries, vocab, args.outdir)
        todo = [e for e in todo if not set(e["say"]) - vocab]

    # Several display strings collapse to the same utterance once synonym lists
    # are reduced to their primary form ("ሐዘነ/ገሀ" and "ሐዘነ" both say "ሐዘነ") —
    # synthesize each distinct utterance once and re-encode it for each id.
    rendered = {}
    failures = []
    started = time.time()

    for n, entry in enumerate(todo, 1):
        say, dest = entry["say"], os.path.join(args.outdir, entry["id"] + ".mp3")
        try:
            if say not in rendered:
                wav = np.asarray(synthesizer.tts(say), dtype=np.float32)
                buf = io.BytesIO()
                scipy.io.wavfile.write(buf, rate=rate, data=wav)
                rendered[say] = buf.getvalue()
            encode(rendered[say], dest)
        except Exception as exc:  # keep going; report the stragglers at the end
            failures.append((entry["id"], say, str(exc)))
            print(f"  [{n}/{len(todo)}] FAILED {say!r}: {exc}", file=sys.stderr)
            continue
        if n % 25 == 0 or n == len(todo):
            per = (time.time() - started) / n
            print(f"  [{n}/{len(todo)}] {per:.2f}s/clip, "
                  f"~{per * (len(todo) - n) / 60:.1f} min left")

    total = sum(os.path.getsize(os.path.join(args.outdir, f))
                for f in os.listdir(args.outdir) if f.endswith(".mp3"))
    print(f"\nDone: {len(todo) - len(failures)} rendered, {len(failures)} failed")
    print(f"{args.outdir} now holds {total / 1e6:.1f} MB")
    if failures:
        print("\nFailed entries:")
        for fid, say, err in failures:
            print(f"  {fid} {say!r}: {err}")
        sys.exit(1)


if __name__ == "__main__":
    main()
