#!/usr/bin/env bash
# Chains the whole OmniVoice render so it finishes without supervision:
#   words (~7h) -> single characters (~2.4h) -> install -> rebuild manifest
#
# Waits for any render already in flight rather than competing with it for the
# CPU. Safe to re-run: each pass skips whatever is already staged.
#
#   nohup ./tools/run_all_omni.sh > /tmp/omni_all.log 2>&1 &
set -uo pipefail
cd "$(dirname "$0")/.."

export PATH="$HOME/.nvm/versions/node/v24.15.0/bin:$PATH"
log() { echo "[$(date '+%H:%M:%S')] $*"; }

log "waiting for any running render to finish"
while docker ps --format '{{.Image}}' | grep -q tigre-omni; do sleep 60; done

log "pass 1/2 — words"
./tools/omni.sh tools/generate_omni.py || log "words pass exited non-zero, continuing"
log "words done: $(ls tools/.omni-out/*.mp3 2>/dev/null | wc -l) clips staged"

log "pass 2/2 — single characters"
./tools/omni.sh tools/generate_omni.py --singles || log "singles pass exited non-zero, continuing"
log "singles done: $(ls tools/.omni-out/*.mp3 2>/dev/null | wc -l) clips staged total"

log "installing into audio/"
./tools/omni.sh tools/generate_omni.py --install

log "rebuilding manifest"
node tools/build_manifest.js
node tools/check_audio.js || true

log "ALL DONE — listen with: python3 -m http.server 8900"
