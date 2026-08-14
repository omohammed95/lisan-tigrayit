#!/usr/bin/env bash
# Runs a script inside the OmniVoice container with a persistent model cache.
#   ./tools/omni.sh tools/omni_audition.py
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p tools/.hf-omni
docker run --rm \
  -v "$PWD:/work" -v "$PWD/tools/.hf-omni:/hf" \
  -e HF_HOME=/hf -e HOME=/tmp -e OMP_NUM_THREADS="$(nproc)" \
  -u "$(id -u):$(id -g)" -w /work \
  tigre-omni python3 "$@"
