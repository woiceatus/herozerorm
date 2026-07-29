# AGENTS.md

## Cursor Cloud specific instructions

### What this is
Single client-side product: **Heroes Lore: Zero — Web Port** (`herozerorm-web`), a native
JS/HTML5-Canvas port of a J2ME RPG. No backend, no database; save state uses browser
`localStorage`. All standard commands live in `package.json` and `README.md`.

### Services
There is exactly one service: a static HTTP server for `public/`.

| Task | Command | Notes |
|------|---------|-------|
| Run (dev) | `npm start` | Serves `public/` at http://localhost:4173 via `npx --yes serve`. Same as `npm run serve`. |
| Rebuild game code (optional) | `npm run transpile` | `python3 tools/transpile_java.py`: regenerates `public/js/game/*.js` from `game-src/`. Not needed just to serve. |
| Full JAR rebuild (optional) | `tools/rebuild.sh` | Java remap + CFR decompile + transpile. Needs `java`. Rarely required. |

There are **no lint or automated test commands** in this repo (no linter/test config committed).

### Non-obvious caveats
- `npm start` pulls `serve` through `npx --yes` (no lockfile, `node_modules` is gitignored).
  The npx cache is warmed by the update script so the server can start without a fresh download.
- The dev server has **no live reload**. After editing files under `public/` (or re-running
  `npm run transpile`), just refresh the browser; no server restart needed.
- **Known pre-existing blocker (not an environment issue):** the transpiled
  `public/js/game/*.js` modules currently fail to load in the browser as ES modules. The
  console shows many `SyntaxError`s (e.g. "Unexpected strict mode reserved word", "'super'
  keyword unexpected here", "A class may only have one constructor", "Identifier ... already
  declared"). `public/js/main.js` imports each game module inside a `try/catch`, so the app
  *shell* (header, canvas, keypad/D-pad) renders fine, but `rpg.RPGHeroEx` never initializes,
  leaving the game canvas black. This reproduces even after re-running `npm run transpile`
  (the regex-based transpiler in `tools/transpile_java.py` emits invalid strict-mode JS), so
  it is a code-generation bug in the port, not a setup/dependency problem.
