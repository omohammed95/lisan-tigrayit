#!/usr/bin/env node
/*
 * Post-render sanity check: does every Tigre string the app renders resolve to
 * a clip that actually exists on disk?
 *
 *   node tools/check_audio.js
 *
 * Exercises audio-manifest.js the same way the browser does, so a drift between
 * the hash the page computes and the filenames on disk fails here, not in a
 * user's hands.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

// Evaluate the generated manifest exactly as a browser <script> would.
const manifest = fs.readFileSync(path.join(ROOT, "audio-manifest.js"), "utf8");
const sandbox = {};
new Function("exports", manifest + "\n;exports.tgAudioSrc=tgAudioSrc;exports.AUDIO_SET=AUDIO_SET;")(sandbox);
const { tgAudioSrc, AUDIO_SET } = sandbox;

const worklist = JSON.parse(
  fs.readFileSync(path.join(__dirname, "tigre_strings.json"), "utf8")
);

let ok = 0;
const unresolved = [];
const broken = [];

for (const entry of worklist) {
  const src = tgAudioSrc(entry.text);
  if (!src) {
    unresolved.push(entry);
    continue;
  }
  if (!fs.existsSync(path.join(ROOT, src))) {
    broken.push({ ...entry, src });
    continue;
  }
  ok++;
}

// Every id the manifest advertises must be a real, playable file. A string made
// entirely of characters outside the model vocabulary encodes to a ~226 byte
// header with no audio frames; the shortest genuine clip is ~1.4 kB, so a
// threshold in between catches those without flagging short syllables.
const MIN_PLAYABLE_BYTES = 800;
const empty = [...AUDIO_SET].filter((id) => {
  const f = path.join(ROOT, "audio", id + ".mp3");
  return !fs.existsSync(f) || fs.statSync(f).size < MIN_PLAYABLE_BYTES;
});

console.log(`${ok}/${worklist.length} strings resolve to a clip on disk`);
if (unresolved.length) {
  console.log(`\n${unresolved.length} with no clip:`);
  for (const e of unresolved.slice(0, 10)) console.log(`  ${e.id} ${JSON.stringify(e.text)}`);
}
if (broken.length) {
  console.log(`\n${broken.length} manifest entries pointing at a missing file:`);
  for (const e of broken.slice(0, 10)) console.log(`  ${e.src} for ${JSON.stringify(e.text)}`);
}
if (empty.length) console.log(`\n${empty.length} clips are missing or suspiciously small: ${empty.slice(0, 10).join(", ")}`);

process.exit(broken.length || empty.length ? 1 : 0);
