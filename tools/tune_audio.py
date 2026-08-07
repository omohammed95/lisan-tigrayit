#!/usr/bin/env python3
"""
Renders a few words across a matrix of VITS inference settings so the clearest
combination can be picked by ear before committing to a full re-render.

    ./tools/tune.sh

Writes tools/tuning/<variant>/<word>.mp3 plus a variants.md listing what each
one changed. Nothing here touches audio/ or the app.

The knobs that matter for this model:

  length_scale            speech rate; >1 is slower. Default 1.0.
  inference_noise_scale_dp  stochastic duration-predictor noise. The shipped
                          config uses 1.0, which is high — it makes syllable
                          timing erratic and words feel rushed. Lower is steadier.
  inference_noise_scale   acoustic variation. 0.667 is the usual default.

`raw` variants skip the silence trim + loudnorm chain entirely, to check whether
that post-processing is what is clipping the attack of a word.
"""

import io
import json
import os
import subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTDIR = os.path.join(REPO, "tools", "tuning")
MODEL_ID = os.environ.get("MODEL_REPO_ID", "BeitTigreAI/tigre-vits")

# A single letter, a short greeting, a two-word phrase, and a full sentence —
# if a setting only helps long utterances it is no use for the alphabet chart.
WORDS = {
    "ha": "ሀ",
    "selam": "ሰላም",
    "goodbye": "ደሐን ትትሌከ",
    "sentence": "ዝላም ዘልመት ምን ገብእ ይእገይስ።",
}

# (name, length_scale, noise_dp, noise, trim, suffix)
VARIANTS = [
    ("00-current",        1.00, 1.000, 0.667, True,  ""),
    ("01-raw-notrim",     1.00, 1.000, 0.667, False, ""),
    ("02-slow-1.3",       1.30, 1.000, 0.667, True,  ""),
    ("03-steady-dp0.6",   1.00, 0.600, 0.667, True,  ""),
    ("04-slow-steady",    1.30, 0.600, 0.667, True,  ""),
    ("05-slower-steady",  1.50, 0.600, 0.667, True,  ""),
    ("06-slow-dp0.3",     1.30, 0.300, 0.667, True,  ""),
    ("07-slow-dp0",       1.30, 0.000, 0.667, True,  ""),
    ("08-clean-noise0.4", 1.30, 0.300, 0.400, True,  ""),
    ("09-period",         1.30, 0.300, 0.667, True,  "።"),
    ("10-best-notrim",    1.30, 0.300, 0.667, False, ""),
]

TRIM = ("silenceremove=start_periods=1:start_silence=0.03:"
        "start_threshold=-50dB:detection=peak")
FILTERS = f"{TRIM},areverse,{TRIM},areverse,loudnorm=I=-16:TP=-1.5:LRA=11"


def encode(wav_bytes, dest, trim):
    # Pad both ends so a player's start-up does not swallow the first phoneme.
    chain = (FILTERS + ",") if trim else ""
    chain += "adelay=120|120,apad=pad_dur=0.25"
    proc = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
         "-f", "wav", "-i", "pipe:0", "-af", chain,
         "-ar", "22050", "-ac", "1", "-b:a", "64k", dest],
        input=wav_bytes, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr.decode("utf8", "replace").strip())


def main():
    import numpy as np
    import scipy.io.wavfile
    import torch
    from huggingface_hub import hf_hub_download
    from TTS.utils.synthesizer import Synthesizer

    print(f"Loading {MODEL_ID} ...")
    synth = Synthesizer(
        tts_checkpoint=hf_hub_download(repo_id=MODEL_ID, filename="best_model.pth"),
        tts_config_path=hf_hub_download(repo_id=MODEL_ID, filename="config.json"),
        use_cuda=torch.cuda.is_available(),
    )
    model = synth.tts_model
    rate = synth.output_sample_rate

    print("tunable attributes present on the model:")
    for attr in ("length_scale", "inference_noise_scale",
                 "inference_noise_scale_dp", "noise_scale", "noise_scale_dp"):
        print(f"  {attr}: {getattr(model, attr, '<absent>')}")

    os.makedirs(OUTDIR, exist_ok=True)
    rows = []
    for name, ls, ndp, ns, trim, suffix in VARIANTS:
        model.length_scale = ls
        model.inference_noise_scale = ns
        model.inference_noise_scale_dp = ndp
        vdir = os.path.join(OUTDIR, name)
        os.makedirs(vdir, exist_ok=True)
        durs = []
        for key, text in WORDS.items():
            wav = np.asarray(synth.tts(text + suffix), dtype=np.float32)
            buf = io.BytesIO()
            scipy.io.wavfile.write(buf, rate=rate, data=wav)
            dest = os.path.join(vdir, key + ".mp3")
            encode(buf.getvalue(), dest, trim)
            durs.append(f"{key} {len(wav) / rate:.2f}s")
        rows.append((name, ls, ndp, ns, trim, suffix, durs))
        print(f"  {name}: " + ", ".join(durs))

    with open(os.path.join(OUTDIR, "variants.md"), "w", encoding="utf8") as fh:
        fh.write("# Tuning variants\n\n")
        fh.write("| variant | length_scale | noise_dp | noise | trimmed | suffix | raw durations |\n")
        fh.write("|---|---|---|---|---|---|---|\n")
        for name, ls, ndp, ns, trim, suffix, durs in rows:
            fh.write(f"| {name} | {ls} | {ndp} | {ns} | {'yes' if trim else 'no'} "
                     f"| {suffix or '—'} | {', '.join(durs)} |\n")
    print(f"\nWrote {len(VARIANTS)} variants to {OUTDIR}")


if __name__ == "__main__":
    main()
