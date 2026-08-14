# Pronunciation audio pipeline

The clips in `audio/` are rendered by **[OmniVoice](https://github.com/k2-fsa/OmniVoice)**
(`k2-fsa/OmniVoice`), a zero-shot multilingual TTS covering Tigre. Regenerate
after editing `data.js`:

```bash
node tools/extract_tigre.js
nohup ./tools/run_all_omni.sh > /tmp/omni_all.log 2>&1 &   # ~9h, unattended
```

That chains both passes, installs into `audio/`, and rebuilds the manifest.
Each pass skips whatever is already staged in `tools/.omni-out`, so adding ten
words costs ten clips rather than a full re-render.

**Two voices, on purpose.** Words use `male, middle-aged, moderate pitch`.
Single characters use `male, middle-aged, low pitch`, because the first voice
renders some isolated letters as noise at full volume — no speech corpus
contains lone syllables, so every TTS tried here has been unreliable on them.
The failure is not detectable from the waveform; only listening catches it.

## Why not the Tigre-specific model

`BeitTigreAI/tigre-vits` was trained on ~11 hours across 151 speakers — about 4
minutes per voice, where single-speaker TTS wants 10–24 hours from one. It was
not intelligible and no inference tuning fixed it. It also silently dropped 13
Ge'ez characters missing from its vocabulary. `tools/generate_audio.py` still
drives it, kept for reference.

`tools/corpus_coverage.js` measures a third option — extracting real speech
from that model's training corpus. 40% of the vocabulary appears somewhere in
the 6,767 utterances, but only 26% within any single speaker, and just 32 of
175 alphabet syllables. Not enough.

## Recording over the top

Recordings are still the highest-quality option for anything synthesis gets
wrong, and they drop into the same filenames — so a recorded word simply
replaces its generated clip, one group at a time.

```bash
node tools/build_recorder.js        # writes tools/recorder.html
python3 -m http.server 8900         # some browsers block the mic on file://
# open http://localhost:8900/tools/recorder.html
```

### Asking someone else to record

```bash
node tools/build_recorder.js --publish   # also writes ./recorder.html and docs/recorder.html
git add recorder.html docs/recorder.html && git commit && git push
```

Then send them `https://<your-pages-site>/recorder.html`. It must be an
**https link** — browsers refuse microphone access over `file://`, and emailing
the file will not work.

Add `?group=` to split the work between people:

| Link | Their share |
|---|---|
| `recorder.html?group=alpha` | the 175 alphabet syllables |
| `recorder.html?group=level` | the level words |
| `recorder.html?group=dict` | the dictionary |
| `recorder.html?group=grammar` | grammar forms and examples |

The page carries its own instructions, asks for the contributor's name, and
names the export after them (`tigre-recordings-amina-t.json`) so several
people's files do not collide. Nothing is uploaded — audio stays in their
browser until they export and send the file back. Import each file in turn;
`import_recordings.js` prints who recorded it.

Recordings are stored per-browser, so tell them to finish on the **same device
and browser**, and to export before clearing browsing data.

Read each word aloud; `Space` starts and stops, and it auto-advances. It opens on
the alphabet — 175 syllables, one sitting. Progress lives in IndexedDB so the tab
can be closed and reopened.

Then **Export**, and:

```bash
node tools/import_recordings.js tigre-recordings.json
node tools/build_manifest.js
```

Recordings get the same trim/loudness treatment as synthesized clips and replace
any existing file with the same id, so you can convert the app to real speech a
group at a time. Anything silent or under 800 bytes is reported for re-recording
rather than shipped as a dead button.

## Synthesizing instead (not recommended)

The app plays pre-rendered clips, so the published GitHub Pages site stays fully
static — **no TTS server, no API keys, no runtime cost**. Every Tigre string in
`data.js` is synthesized offline with the `BeitTigreAI/tigre-vits` model and
committed as a small mp3.

## Regenerating after editing data.js

```bash
docker build -t tigre-tts ../../tts-model          # once — bakes in the model
docker build -f tools/Dockerfile.gen -t tigre-tts-gen tools/
./tools/render.sh
```

`render.sh` runs all three steps and only synthesizes what is missing, so adding
ten words to `data.js` costs ten clips, not a full re-render. Pass `--force` to
re-render everything.

## The steps

| Step | Does |
|---|---|
| `extract_tigre.js` | Walks `data.js` (ALPHA, LEVELS, DICTIONARY, GRAMMAR) and writes `tigre_strings.json` |
| `generate_audio.py` | Synthesizes each entry, trims silence, level-matches, encodes to `audio/<id>.mp3` |
| `build_manifest.js` | Writes `audio-manifest.js`, the index the browser uses to find clips |

`tigre_audio.js` holds the normalize + hash functions. `build_manifest.js`
embeds them into `audio-manifest.js` via `Function.prototype.toString()`, so the
filenames on disk and the browser's lookup can never disagree.

## Display text vs spoken text

The string shown is not always one utterance, so each entry carries both:

- `text` — exactly what `data.js` displays; hashing it gives the clip id
- `say` — what the model is asked to read

They differ when an entry is a synonym list (`ሐዘነ/ገሀ` → the model reads `ሐዘነ`)
or carries a tatweel marking a bound suffix (`ـኦም` → `ኦም`). Entries containing
`→` are skipped: those are grammar derivations, not words.

## Adding a word with no audio yet

Nothing breaks. `tgAudioSrc()` returns `null` for an unknown string and the
`Speak` button renders nothing, so the word simply appears without a speaker
until the next `render.sh`.
