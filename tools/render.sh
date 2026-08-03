#!/usr/bin/env bash
# Renders the Tigre audio clips inside the tigre-tts-gen container.
# Any arguments are passed straight through to generate_audio.py, e.g.
#   ./tools/render.sh --limit 12 --outdir tools/sample
set -euo pipefail

cd "$(dirname "$0")/.."

docker image inspect tigre-tts-gen:latest >/dev/null 2>&1 || {
  echo "tigre-tts-gen missing — build it with:" >&2
  echo "  docker build -t tigre-tts ../tts-model" >&2
  echo "  docker build -f tools/Dockerfile.gen -t tigre-tts-gen tools/" >&2
  exit 1
}

node tools/extract_tigre.js

# Run as the invoking user so the generated mp3s are not root-owned. That makes
# site-packages unwritable, so numba/matplotlib get cache dirs under /tmp.
docker run --rm \
  -v "$PWD:/work" \
  -u "$(id -u):$(id -g)" \
  -e NUMBA_CACHE_DIR=/tmp/numba \
  -e MPLCONFIGDIR=/tmp/mpl \
  -e HOME=/tmp \
  -w /work \
  tigre-tts-gen:latest \
  python3 tools/generate_audio.py "$@"

node tools/build_manifest.js
