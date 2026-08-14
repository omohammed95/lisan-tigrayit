#!/usr/bin/env node
/*
 * Generates tools/recorder.html — a self-contained page for recording the app's
 * pronunciation clips in your own voice.
 *
 *   node tools/build_recorder.js && open tools/recorder.html
 *
 * The word list is inlined rather than fetched, because a page opened over
 * file:// cannot fetch a sibling JSON (CORS), and requiring a server just to
 * read words aloud is friction that stops the recording ever happening.
 *
 * Recordings live in IndexedDB, so the tab can be closed and reopened mid-way.
 * "Export" downloads one JSON of base64 blobs which tools/import_recordings.js
 * turns into audio/<id>.mp3 — the same filenames the app already looks for.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const entries = JSON.parse(
  fs.readFileSync(path.join(__dirname, "tigre_strings.json"), "utf8")
);

// Record in the order the app needs them, not alphabetically: the alphabet is
// the pedagogical core and the shortest list, so it comes first and can be
// finished in one sitting.
const GROUPS = [
  ["alpha", "Alphabet — 25 consonants x 7 vowels"],
  ["level", "Level words — the learning path"],
  ["dict", "Dictionary"],
  ["grammar", "Grammar forms & examples"],
];

const seen = new Set();
const items = [];
for (const [group, label] of GROUPS) {
  for (const e of entries) {
    if (seen.has(e.id) || !e.sources.includes(group)) continue;
    seen.add(e.id);
    items.push({ id: e.id, text: e.text, say: e.say, group, groupLabel: label });
  }
}

const counts = Object.fromEntries(
  GROUPS.map(([g]) => [g, items.filter((i) => i.group === g).length])
);

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Record Tigre pronunciation</title>
<style>
 :root{--bg:#faf6f1;--surface:#fff;--pri:#d4451a;--ok:#1a7a4a;--soft:#9b8f84;--border:#ede5da;--text:#1a1a2e}
 *{box-sizing:border-box;margin:0;padding:0}
 body{font:16px/1.5 system-ui,sans-serif;background:var(--bg);color:var(--text);
      max-width:760px;margin:0 auto;padding:16px}
 h1{font-size:1.25rem;margin-bottom:2px}
 .sub{color:var(--soft);font-size:.85rem;margin-bottom:14px}
 .bar{height:8px;background:var(--border);border-radius:6px;overflow:hidden;margin:10px 0}
 .bar>i{display:block;height:100%;background:var(--ok);width:0;transition:width .2s}
 .card{background:var(--surface);border-radius:16px;padding:22px 18px;text-align:center;
       box-shadow:0 1px 8px rgba(0,0,0,.06);margin-bottom:12px}
 .grp{font-size:.72rem;text-transform:uppercase;letter-spacing:.6px;color:var(--soft);font-weight:800}
 .tg{font-size:3.6rem;font-weight:900;color:var(--pri);margin:10px 0;line-height:1.1;word-break:break-word}
 .say{font-size:.8rem;color:var(--soft);font-family:ui-monospace,monospace}
 .pos{font-size:.8rem;color:var(--soft);margin-top:6px}
 .btns{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:16px}
 button{font:inherit;font-weight:800;border:none;border-radius:12px;padding:12px 20px;
        cursor:pointer;background:var(--border);color:var(--text)}
 button:disabled{opacity:.4;cursor:default}
 .rec{background:var(--pri);color:#fff;min-width:190px}
 .rec.on{background:#c62828;animation:pulse 1s infinite}
 @keyframes pulse{50%{opacity:.65}}
 .done{color:var(--ok);font-weight:800;font-size:.85rem;min-height:1.2em;margin-top:10px}
 .hint{font-size:.78rem;color:var(--soft);text-align:center;margin-top:10px;line-height:1.7}
 kbd{background:var(--border);border-radius:5px;padding:1px 6px;font-size:.72rem;font-weight:700}
 .row{display:flex;gap:8px;align-items:center;justify-content:space-between;flex-wrap:wrap}
 .tools{background:var(--surface);border-radius:14px;padding:14px;box-shadow:0 1px 8px rgba(0,0,0,.06)}
 select,input{font:inherit;padding:8px;border-radius:10px;border:1px solid var(--border);background:#fff}
 .warn{background:#fff8e1;border:1px solid #e89b1c;border-radius:12px;padding:12px;font-size:.85rem;margin-bottom:12px}
 .intro{background:var(--surface);border-radius:14px;padding:16px;margin-bottom:12px;
        box-shadow:0 1px 8px rgba(0,0,0,.06);font-size:.9rem}
 .intro h2{font-size:1rem;margin-bottom:8px}
 .intro ol{margin:0 0 0 18px} .intro li{margin-bottom:5px}
 .intro details{margin-top:10px} .intro summary{cursor:pointer;color:var(--pri);font-weight:700;font-size:.85rem}
</style></head><body>
<h1>Record Tigre pronunciation</h1>
<div class="sub">Help build a Tigre learning app for children by lending your voice.</div>

<div class="intro">
  <h2>What to do</h2>
  <ol>
    <li>Type your name below, so we know whose voice this is.</li>
    <li>Find a <b>quiet room</b>. Hold the microphone a consistent distance away.</li>
    <li>Press <b>Record</b>, say the word once clearly and naturally, press <b>Stop</b>.</li>
    <li>It moves to the next word automatically. Press <b>Play</b> to check any recording.</li>
    <li>When finished, press <b>Export recordings</b> and send the downloaded file back.</li>
  </ol>
  <details>
    <summary>Notes</summary>
    <div style="margin-top:8px;color:var(--soft);line-height:1.7">
      Your progress is saved in this browser, so you can close the tab and come back
      &mdash; but use the <b>same browser on the same device</b>, and export before
      clearing your browsing data.<br>
      Say each word on its own, the way you would in normal speech &mdash; not slowly
      or over-pronounced. Children will copy exactly what they hear.<br>
      If a word looks wrong or you are unsure of it, skip it with <b>Next</b> rather
      than guessing.<br>
      Nothing is uploaded anywhere. The audio stays on your device until you export it.
    </div>
  </details>
</div>

<div class="warn" id="warn" hidden></div>
<div class="row" style="margin-bottom:8px">
  <input id="who" placeholder="Your name" style="flex:1;min-width:160px" autocomplete="name">
</div>
<div class="row">
  <select id="grp"></select>
  <span class="pos" id="stat"></span>
</div>
<div class="bar"><i id="prog"></i></div>
<div class="card">
  <div class="grp" id="glabel"></div>
  <div class="tg" id="tg">&mdash;</div>
  <div class="say" id="say"></div>
  <div class="pos" id="pos"></div>
  <div class="btns">
    <button id="prev">&lsaquo; Prev</button>
    <button id="rec" class="rec">Record</button>
    <button id="play" disabled>Play</button>
    <button id="next">Next &rsaquo;</button>
  </div>
  <div class="done" id="done"></div>
</div>
<div class="hint">
  <kbd>Space</kbd> start / stop recording &nbsp;&middot;&nbsp; <kbd>&rarr;</kbd> next &nbsp;&middot;&nbsp;
  <kbd>&larr;</kbd> previous &nbsp;&middot;&nbsp; <kbd>P</kbd> play back<br>
  Recording auto-advances to the next word. Re-record any word by going back to it.
</div>
<div class="tools" style="margin-top:14px">
  <div class="row">
    <div><b id="ndone">0</b> recorded of <b id="ntotal">${items.length}</b></div>
    <div style="display:flex;gap:8px">
      <button id="export">Export recordings</button>
      <button id="reset">Clear all</button>
    </div>
  </div>
  <div class="hint" style="text-align:left;margin-top:10px">
    Export downloads a <code>.json</code> file containing everything you have recorded.
    Send it back however is convenient &mdash; it is just a file. You can export
    part-way through and again later; a later export includes the earlier words too.
  </div>
</div>

<script>
const ITEMS = ${JSON.stringify(items)};
const COUNTS = ${JSON.stringify(counts)};
const GROUPS = ${JSON.stringify(GROUPS)};

/* ---------- storage: IndexedDB so a closed tab does not lose an hour ------- */
let db;
const openDB = () => new Promise((res, rej) => {
  const r = indexedDB.open("tigre-recordings", 1);
  r.onupgradeneeded = () => r.result.createObjectStore("clips");
  r.onsuccess = () => res(r.result);
  r.onerror = () => rej(r.error);
});
const put = (k, v) => new Promise((res, rej) => {
  const t = db.transaction("clips", "readwrite");
  t.objectStore("clips").put(v, k);
  t.oncomplete = res; t.onerror = () => rej(t.error);
});
const get = (k) => new Promise((res) => {
  const r = db.transaction("clips", "readonly").objectStore("clips").get(k);
  r.onsuccess = () => res(r.result); r.onerror = () => res(null);
});
const keys = () => new Promise((res) => {
  const r = db.transaction("clips", "readonly").objectStore("clips").getAllKeys();
  r.onsuccess = () => res(r.result || []); r.onerror = () => res([]);
});
const clearAll = () => new Promise((res) => {
  const t = db.transaction("clips", "readwrite");
  t.objectStore("clips").clear(); t.oncomplete = res;
});

/* ---------- recording ----------------------------------------------------- */
let stream, recorder, chunks = [], recording = false, mime = "";
let idx = 0, filter = "all", recorded = new Set();

const $ = (id) => document.getElementById(id);
const view = () => filter === "all" ? ITEMS : ITEMS.filter(i => i.group === filter);

function pickMime() {
  for (const m of ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"])
    if (MediaRecorder.isTypeSupported(m)) return m;
  return "";
}

async function ensureMic() {
  if (stream) return true;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { channelCount: 1, echoCancellation: false, noiseSuppression: true, autoGainControl: true }
    });
    mime = pickMime();
    return true;
  } catch (e) {
    $("warn").hidden = false;
    $("warn").textContent = "Microphone unavailable: " + e.message +
      ". If this page was opened from a file:// path and your browser blocks it, run "
      + "python3 -m http.server 8900 in the project and open http://localhost:8900/tools/recorder.html instead.";
    return false;
  }
}

async function toggleRecord() {
  if (recording) { recorder.stop(); return; }
  if (!await ensureMic()) return;
  chunks = [];
  recorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
  recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  recorder.onstop = async () => {
    recording = false;
    $("rec").classList.remove("on"); $("rec").textContent = "Record";
    const blob = new Blob(chunks, { type: mime || "audio/webm" });
    const item = view()[idx];
    await put(item.id, { blob, mime: blob.type, text: item.text, say: item.say });
    recorded.add(item.id);
    $("done").textContent = "\\u2713 saved";
    $("play").disabled = false;
    render();
    setTimeout(() => { if (idx < view().length - 1) { idx++; render(); } }, 320);
  };
  recorder.start();
  recording = true;
  $("rec").classList.add("on"); $("rec").textContent = "Stop (recording\\u2026)";
  $("done").textContent = "";
}

async function playBack() {
  const item = view()[idx];
  const rec = await get(item.id);
  if (!rec) return;
  const a = new Audio(URL.createObjectURL(rec.blob));
  a.play().catch(() => {});
}

/* ---------- export -------------------------------------------------------- */
const blobToB64 = (blob) => new Promise((res) => {
  const r = new FileReader();
  r.onload = () => res(String(r.result).split(",")[1]);
  r.readAsDataURL(blob);
});

async function exportAll() {
  const ks = await keys();
  if (!ks.length) return alert("Nothing recorded yet.");
  const who = ($("who").value || "").trim();
  if (!who && !confirm("No name entered. Export anyway?")) return;
  $("export").textContent = "Exporting\\u2026";
  const out = { created: new Date().toISOString(), recordedBy: who, clips: {} };
  for (const k of ks) {
    const rec = await get(k);
    out.clips[k] = { mime: rec.mime, text: rec.text, say: rec.say, data: await blobToB64(rec.blob) };
  }
  // Name the file after the contributor so several people's exports do not
  // collide in a downloads folder or an inbox.
  const slug = who.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const url = URL.createObjectURL(new Blob([JSON.stringify(out)], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "tigre-recordings" + (slug ? "-" + slug : "") + ".json";
  // The anchor has to be in the document: a detached element's click() is
  // ignored for downloads in several browsers.
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  $("export").textContent = "Export recordings";
}

/* ---------- render -------------------------------------------------------- */
function render() {
  const list = view();
  if (idx >= list.length) idx = Math.max(0, list.length - 1);
  const item = list[idx];
  if (!item) return;
  $("glabel").textContent = item.groupLabel;
  $("tg").textContent = item.text;
  $("say").textContent = item.say !== item.text ? "spoken as: " + item.say : "";
  $("pos").textContent = (idx + 1) + " of " + list.length;
  $("done").textContent = recorded.has(item.id) ? "\\u2713 recorded" : "";
  $("play").disabled = !recorded.has(item.id);
  $("prev").disabled = idx === 0;
  $("next").disabled = idx >= list.length - 1;
  const n = list.filter(i => recorded.has(i.id)).length;
  $("prog").style.width = (list.length ? (n / list.length) * 100 : 0) + "%";
  $("stat").textContent = n + " / " + list.length + " done in this group";
  // Count against what this person was actually asked for. Someone handed a
  // ?group=alpha link should not be told they are 3 of 761 through.
  $("ndone").textContent = n;
  $("ntotal").textContent = list.length;
}

(async () => {
  db = await openDB();
  recorded = new Set(await keys());
  // Remembering the name means a helper coming back for a second sitting does
  // not have to retype it, and cannot accidentally export as nobody.
  const who = $("who");
  who.value = localStorage.getItem("tigre-recorder-name") || "";
  who.oninput = () => localStorage.setItem("tigre-recorder-name", who.value);

  const sel = $("grp");
  sel.innerHTML = '<option value="all">Everything (' + ITEMS.length + ')</option>' +
    GROUPS.map(([g, l]) => '<option value="' + g + '">' + l + ' (' + (COUNTS[g] || 0) + ')</option>').join("");
  // ?group=alpha lets you hand one person a link to just their share of the work.
  const want = new URLSearchParams(location.search).get("group");
  const valid = GROUPS.some(([g]) => g === want) || want === "all";
  sel.value = valid ? want : "alpha";      // default to the alphabet: shortest, highest value
  filter = sel.value;
  sel.onchange = () => { filter = sel.value; idx = 0; render(); };
  $("rec").onclick = toggleRecord;
  $("play").onclick = playBack;
  $("next").onclick = () => { if (idx < view().length - 1) { idx++; render(); } };
  $("prev").onclick = () => { if (idx > 0) { idx--; render(); } };
  $("export").onclick = exportAll;
  $("reset").onclick = async () => {
    if (!confirm("Delete every recording stored in this browser?")) return;
    await clearAll(); recorded = new Set(); render();
  };
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "SELECT") return;
    if (e.code === "Space") { e.preventDefault(); toggleRecord(); }
    else if (e.code === "ArrowRight") { if (idx < view().length - 1) { idx++; render(); } }
    else if (e.code === "ArrowLeft") { if (idx > 0) { idx--; render(); } }
    else if (e.key.toLowerCase() === "p") playBack();
  });
  render();
})();
</script></body></html>
`;

// Always write the local working copy; --publish additionally puts it in the
// two trees GitHub Pages serves from, so a helper can be sent an https:// link.
// That matters: browsers refuse microphone access to a page opened over file://.
const targets = [path.join(__dirname, "recorder.html")];
if (process.argv.includes("--publish")) {
  targets.push(path.join(ROOT, "recorder.html"), path.join(ROOT, "docs", "recorder.html"));
}
for (const t of targets) {
  fs.mkdirSync(path.dirname(t), { recursive: true });
  fs.writeFileSync(t, html);
  console.log(`Wrote ${path.relative(ROOT, t)}`);
}
console.log(`${items.length} items —`, counts);
if (targets.length === 1) {
  console.log("\nPass --publish to also write recorder.html into the site roots,");
  console.log("so it can be shared as https://<your-pages-site>/recorder.html");
}
