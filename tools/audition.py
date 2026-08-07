#!/usr/bin/env python3
"""
Builds tools/audition/index.html — a labelled A/B page for judging which
inference settings actually sound clear, and whether this model can handle
isolated words at all.

    ./tools/audition.sh

The decisive question it answers: the model was trained LJSpeech-style on
sentences with no phonemizer, so it may simply not know how to pronounce a bare
one-syllable input. Each word is therefore rendered three ways — alone, alone
but slowed, and embedded in a carrier phrase — so a sentence-level rendering can
be compared directly against the same word in isolation.
"""

import base64
import io
import os
import subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "tools", "audition")
MODEL_ID = os.environ.get("MODEL_REPO_ID", "BeitTigreAI/tigre-vits")

SENTENCE = "ዝላም ዘልመት ምን ገብእ ይእገይስ።"

# (label, text, length_scale, noise, noise_dp, note)
CASES = [
    ("Sentence — model defaults", SENTENCE, 1.0, 0.667, 1.0,
     "Baseline. If this is clear but the single words are not, the model simply cannot do isolated words."),
    ("Sentence — tuned", SENTENCE, 1.4, 0.35, 0.0,
     "Same sentence with the settings now in the pipeline."),

    ("ሰላም (peace/hello) — ORIGINAL, what you heard", "ሰላም", 1.0, 0.667, 1.0,
     "The settings the committed clips used."),
    ("ሰላም — TUNED, what is rendering now", "ሰላም", 1.55, 0.35, 0.0,
     "Slower, deterministic timing, less acoustic noise."),
    ("ሰላም — slower still", "ሰላም", 1.9, 0.35, 0.0,
     "Checks whether more stretching helps or turns mushy."),
    ("ሰላም — in a carrier phrase", "ሰላም ሰላም ሰላም።", 1.3, 0.35, 0.0,
     "Repeated inside an utterance. If THIS is clear, the fix is to synthesize in context."),

    ("ሀ (letter ha) — ORIGINAL", "ሀ", 1.0, 0.667, 1.0, "The committed version."),
    ("ሀ — TUNED", "ሀ", 1.7, 0.35, 0.0, "Deterministic timing, no pre-click."),
    ("ሀ — in a carrier phrase", "ሀ ሀ ሀ።", 1.3, 0.35, 0.0,
     "Same letter spoken inside an utterance."),

    ("ደሐን ትትሌከ (goodbye) — ORIGINAL", "ደሐን ትትሌከ", 1.0, 0.667, 1.0, ""),
    ("ደሐን ትትሌከ — TUNED", "ደሐን ትትሌከ", 1.4, 0.35, 0.0, ""),
]

TRIM = ("silenceremove=start_periods=1:start_silence=0.03:"
        "start_threshold=-50dB:detection=peak")
FILTERS = (f"{TRIM},areverse,{TRIM},areverse,"
           "loudnorm=I=-16:TP=-1.5:LRA=11,adelay=80:all=1,apad=pad_dur=0.18")


def encode(wav_bytes):
    p = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
         "-f", "wav", "-i", "pipe:0", "-af", FILTERS,
         "-ar", "22050", "-ac", "1", "-b:a", "64k", "-f", "mp3", "pipe:1"],
        input=wav_bytes, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if p.returncode != 0:
        raise RuntimeError(p.stderr.decode("utf8", "replace"))
    return p.stdout


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
        use_cuda=False,
    )
    m, rate = synth.tts_model, synth.output_sample_rate
    os.makedirs(OUT, exist_ok=True)

    rows = []
    for label, text, ls, ns, ndp, note in CASES:
        m.length_scale, m.inference_noise_scale, m.inference_noise_scale_dp = ls, ns, ndp
        wav = np.asarray(synth.tts(text), dtype=np.float32)
        buf = io.BytesIO()
        scipy.io.wavfile.write(buf, rate=rate, data=wav)
        mp3 = encode(buf.getvalue())
        rows.append((label, text, ls, ns, ndp, note,
                     base64.b64encode(mp3).decode("ascii")))
        print(f"  {label}: {len(wav) / rate:.2f}s raw, {len(mp3) / 1024:.0f} kB")

    html = ["""<!doctype html><meta charset="utf-8">
<title>Tigre TTS audition</title>
<style>
 body{font:16px/1.6 system-ui,sans-serif;max-width:820px;margin:2rem auto;padding:0 1rem;
      background:#faf6f1;color:#1a1a2e}
 h1{font-size:1.5rem} h2{font-size:1rem;margin:2rem 0 .5rem;color:#b33510}
 .row{background:#fff;border:1px solid #ede5da;border-radius:12px;padding:14px 16px;margin:10px 0}
 .lbl{font-weight:700;margin-bottom:2px}
 .tg{font-size:1.5rem;font-weight:800;color:#d4451a;margin:4px 0}
 .meta{font-size:.78rem;color:#9b8f84;font-family:ui-monospace,monospace}
 .note{font-size:.85rem;color:#5a5a6e;margin-top:6px}
 audio{width:100%;margin-top:8px}
 .q{background:#fff8e1;border:1px solid #e89b1c;border-radius:12px;padding:14px 16px;margin:1.5rem 0}
</style>
<h1>Which of these is actually understandable?</h1>
<div class="q"><b>What to listen for.</b> Compare each <b>ORIGINAL</b> against its
<b>TUNED</b> pair. Then compare the single words against the sentence and the
carrier-phrase versions. If the sentence is clear but no single word ever is,
the model cannot pronounce isolated words and no amount of tuning will fix
that — we would switch approach.</div>
"""]
    for label, text, ls, ns, ndp, note, b64 in rows:
        html.append(f'<div class="row"><div class="lbl">{label}</div>'
                    f'<div class="tg">{text}</div>'
                    f'<div class="meta">length_scale={ls} &nbsp; noise={ns} &nbsp; noise_dp={ndp}</div>'
                    + (f'<div class="note">{note}</div>' if note else "")
                    + f'<audio controls preload="none" src="data:audio/mpeg;base64,{b64}"></audio></div>')

    path = os.path.join(OUT, "index.html")
    with open(path, "w", encoding="utf8") as fh:
        fh.write("\n".join(html))
    print(f"\nWrote {path} ({os.path.getsize(path) / 1024:.0f} kB)")


if __name__ == "__main__":
    main()
