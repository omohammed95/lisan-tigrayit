#!/usr/bin/env bash
# Builds the A/B audition page (see audition.py) inside the render container.
set -euo pipefail
cd "$(dirname "$0")/.."
docker run --rm -v "$PWD:/work" -u "$(id -u):$(id -g)" \
  -e NUMBA_CACHE_DIR=/tmp/numba -e MPLCONFIGDIR=/tmp/mpl -e HOME=/tmp \
  -w /work tigre-tts-gen:latest python3 tools/audition.py "$@"
