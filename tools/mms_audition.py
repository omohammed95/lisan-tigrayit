#!/usr/bin/env python3
"""
Renders the test words through the Meta MMS voices for related languages, so
Tigrinya and Amharic can be compared against the Tigre model side by side.

    ./tools/mms_audition.sh

Tigre, Tigrinya and Amharic all use the Ge'ez syllabary, so a well-trained
neighbour reads the same characters plausibly. These are `uroman` models — the
tokenizer vocabulary is ~27 Latin letters, not Ge'ez — so text is romanized
before synthesis, which is also what they were trained on.

Writes tools/audition-mms/<engine>/<slug>.mp3 and prints the romanizations so
the transliteration can be sanity-checked independently of the audio.
"""

import io
import json
import os
import subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "tools", "audition-mms")

ENGINES = {
    "mms-tir": "facebook/mms-tts-tir",   # Tigrinya — closest relative of Tigre
    "mms-amh": "facebook/mms-tts-amh",   # Amharic — best resourced of the three
}

# Letters first (the bulk of the app), then words, then a phrase.
WORDS = [
    ("ha", "ሀ"),
    ("lu", "ሉ"),
    ("mi", "ሚ"),
    ("selam", "ሰላም"),
    ("merhab", "መርሐበ"),
    ("harmaz", "ሐርማዝ"),
    ("goodbye", "ደሐን ትትሌከ"),
    ("sentence", "ዝላም ዘልመት ምን ገብእ ይእገይስ።"),
]

FILTERS = ("loudnorm=I=-16:TP=-1.5:LRA=11,adelay=80:all=1,apad=pad_dur=0.18")


def encode(wav_bytes, dest):
    p = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
         "-f", "wav", "-i", "pipe:0", "-af", FILTERS,
         "-ar", "22050", "-ac", "1", "-b:a", "64k", dest],
        input=wav_bytes, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if p.returncode != 0:
        raise RuntimeError(p.stderr.decode("utf8", "replace"))


def main():
    import numpy as np
    import scipy.io.wavfile
    import torch
    import uroman as ur
    from transformers import VitsModel, AutoTokenizer

    roman = ur.Uroman()
    # MMS was trained on uroman output, so feed it exactly that.
    romanized = {slug: roman.romanize_string(tg) for slug, tg in WORDS}
    print("Romanization (what the model actually receives):")
    for slug, tg in WORDS:
        print(f"  {tg}  ->  {romanized[slug]}")
    print()

    os.makedirs(OUT, exist_ok=True)
    meta = {"words": [{"slug": s, "tg": t, "roman": romanized[s]} for s, t in WORDS],
            "engines": {}}

    for name, repo in ENGINES.items():
        print(f"Loading {repo} ...")
        model = VitsModel.from_pretrained(repo)
        tok = AutoTokenizer.from_pretrained(repo)
        model.eval()
        # Same knobs as any VITS: slow it down a little and take the noise off
        # the duration predictor, which is what made isolated words unstable.
        model.speaking_rate = 0.8
        model.noise_scale_duration = 0.0
        vdir = os.path.join(OUT, name)
        os.makedirs(vdir, exist_ok=True)
        for slug, tg in WORDS:
            inputs = tok(romanized[slug], return_tensors="pt")
            with torch.no_grad():
                out = model(**inputs).waveform[0].cpu().numpy().astype("float32")
            buf = io.BytesIO()
            scipy.io.wavfile.write(buf, rate=model.config.sampling_rate, data=out)
            encode(buf.getvalue(), os.path.join(vdir, slug + ".mp3"))
            print(f"  {name} {tg}: {len(out) / model.config.sampling_rate:.2f}s")
        meta["engines"][name] = repo

    with open(os.path.join(OUT, "meta.json"), "w", encoding="utf8") as fh:
        json.dump(meta, fh, ensure_ascii=False, indent=2)
    print(f"\nWrote {OUT}")


if __name__ == "__main__":
    main()
