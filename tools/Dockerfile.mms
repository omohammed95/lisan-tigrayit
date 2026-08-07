# Render environment for the Meta MMS TTS voices (Tigrinya / Amharic).
#
# These are ungated VITS checkpoints served through transformers, unlike the
# gated BeitTigreAI model, so nothing needs baking in at build time.
#
# They are uroman models: the tokenizer vocabulary is ~27 Latin characters, so
# Ge'ez text must be romanized before it reaches them. uroman does that.
#
#   docker build -f tools/Dockerfile.mms -t tigre-tts-mms tools/
#   ./tools/render.sh --engine mms-tir

FROM python:3.10-slim

RUN apt-get update && apt-get install -y --no-install-recommends ffmpeg \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir torch==2.5.1 --index-url https://download.pytorch.org/whl/cpu

RUN pip install --no-cache-dir \
    "transformers>=4.45,<5" \
    huggingface_hub \
    scipy \
    uroman

WORKDIR /work
