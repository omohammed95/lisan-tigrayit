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
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const AUDIO = path.join(ROOT, "audio");

const src = process.argv[2];
if (!src) {
  console.error("usage: node tools/import_recordings.js <tigre-recordings.json>");
  process.exit(1);
}

const TRIM = "silenceremove=start_periods=1:start_silence=0.03:" +
             "start_threshold=-50dB:detection=peak";
const FILTERS = `${TRIM},areverse,${TRIM},areverse,` +
                "loudnorm=I=-16:TP=-1.5:LRA=11,adelay=80:all=1,apad=pad_dur=0.18";

const payload = JSON.parse(fs.readFileSync(src, "utf8"));
const clips = Object.entries(payload.clips || {});
if (!clips.length) {
  console.error("No clips in that file.");
  process.exit(1);
}

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
    execFileSync("ffmpeg", [
      "-hide_banner", "-loglevel", "error", "-y",
      "-i", raw, "-af", FILTERS,
      "-ar", "22050", "-ac", "1", "-b:a", "48k", dest,
    ]);
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
