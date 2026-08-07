#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p tools/.hf-mms
docker run --rm -v "$PWD:/work" -v "$PWD/tools/.hf-mms:/hf" \
  -e HF_HOME=/hf -u "$(id -u):$(id -g)" -e HOME=/tmp \
  -w /work tigre-tts-mms python3 tools/mms_audition.py "$@"
