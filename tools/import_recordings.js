#!/usr/bin/env node
/*
 * Turns the recorder's export into the mp3s the app loads.
 *
 *   node tools/import_recordings.js tigre-recordings.json
 *   node tools/build_manifest.js
 *
 * Each clip gets the same treatment the synthesized ones got — silence trimmed
 * off both ends, loudness matched, a little padding re-added — so a recorded
 * word and a synthesized one sit at the same level and nothing sounds clipped.
 *
 * Recorded clips REPLACE any existing file with the same id, which is what you
 * want: the id is a hash of the Tigre text, so a recording of a word simply
 * takes over from whatever was there before.
 *
 * Loudness matching is peak-based, not ffmpeg's `loudnorm`. loudnorm measures
 * integrated (EBU R128) loudness over ~400ms gated blocks, which needs several
 * seconds of audio for the statistics to mean anything — every alphabet
 * syllable here is 0.4-1.6s. Tried on a real recording measuring a clean
 * -1.8dB peak, it reported the clip as -47.7dB and encoded it accordingly:
 * effectively silent. That held in both single- and two-pass mode, since the
 * corruption happens in R128's own measurement, not in how the result is
 * applied. Peak normalization has no such minimum-length requirement — max
 * sample amplitude is well defined even for a tenth of a second of audio — so
 * it is what actually works for clips this short.
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const AUDIO = path.join(ROOT, "audio");

const src = process.argv[2];
if (!src) {
  console.error("usage: node tools/import_recordings.js <tigre-recordings.json>");
  process.exit(1);
}

const TRIM = "silenceremove=start_periods=1:start_silence=0.03:" +
             "start_threshold=-50dB:detection=peak";
const TRIM_CHAIN = `${TRIM},areverse,${TRIM},areverse`;
const TARGET_PEAK_DB = -1.5;     // matches the true-peak ceiling used elsewhere
const MAX_GAIN_DB = 30;          // safety cap — a clip needing more is empty, not quiet

function run(args) {
  const r = spawnSync("ffmpeg", args, { encoding: "utf8" });
  if (r.status !== 0) throw new Error(r.stderr || `ffmpeg exited ${r.status}`);
  return r.stderr; // ffmpeg's log, including volumedetect's report, goes to stderr
}

function measurePeakDb(input) {
  const stderr = run([
    "-hide_banner", "-i", input,
    "-af", `${TRIM_CHAIN},volumedetect`, "-f", "null", "-",
  ]);
  const m = stderr.match(/max_volume:\s*(-?[\d.]+)\s*dB/);
  if (!m) throw new Error("could not read max_volume from ffmpeg output");
  return parseFloat(m[1]);
}

function encode(input, dest) {
  const peak = measurePeakDb(input);
  const gain = Math.min(TARGET_PEAK_DB - peak, MAX_GAIN_DB);
  run([
    "-hide_banner", "-loglevel", "error", "-y", "-i", input,
    "-af", `${TRIM_CHAIN},volume=${gain}dB,adelay=80:all=1,apad=pad_dur=0.18`,
    "-ar", "22050", "-ac", "1", "-b:a", "48k", dest,
  ]);
}

const payload = JSON.parse(fs.readFileSync(src, "utf8"));
const clips = Object.entries(payload.clips || {});
if (!clips.length) {
  console.error("No clips in that file.");
  process.exit(1);
}
console.log(`${clips.length} clips from ${payload.recordedBy || "(unnamed contributor)"}` +
            (payload.created ? `, recorded ${payload.created.slice(0, 10)}` : ""));

fs.mkdirSync(AUDIO, { recursive: true });
const tmp = fs.mkdtempSync(path.join(require("os").tmpdir(), "tigre-rec-"));

let ok = 0;
const failed = [];
const tooShort = [];

for (const [id, clip] of clips) {
  const raw = path.join(tmp, id + ".bin");
  fs.writeFileSync(raw, Buffer.from(clip.data, "base64"));
  const dest = path.join(AUDIO, id + ".mp3");
  try {
    encode(raw, dest);
    // A clip this small is silence — a mic that was not live, or a word the
    // recorder skipped past. Better to drop it than ship a dead button.
    if (fs.statSync(dest).size < 800) {
      fs.unlinkSync(dest);
      tooShort.push({ id, text: clip.text });
      continue;
    }
    ok++;
  } catch (e) {
    failed.push({ id, text: clip.text, err: String(e.stderr || e.message).slice(0, 200) });
  } finally {
    fs.unlinkSync(raw);
  }
}
fs.rmSync(tmp, { recursive: true, force: true });

console.log(`Imported ${ok} of ${clips.length} recordings into audio/`);
if (tooShort.length) {
  console.log(`\n${tooShort.length} were silent or too short and were skipped — re-record these:`);
  for (const c of tooShort.slice(0, 20)) console.log(`  ${c.id} ${JSON.stringify(c.text)}`);
}
if (failed.length) {
  console.log(`\n${failed.length} failed to convert:`);
  for (const c of failed.slice(0, 10)) console.log(`  ${c.id} ${JSON.stringify(c.text)}: ${c.err}`);
}
console.log("\nNext: node tools/build_manifest.js");
if (failed.length) process.exit(1);
