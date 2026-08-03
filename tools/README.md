# Pronunciation audio pipeline

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
