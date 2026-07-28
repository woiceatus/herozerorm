# AGENTS.md

## Cursor Cloud specific instructions

### What this is
A browser build of the J2ME game **Heroes Lore: Zero**. The playable runtime is
**CheerpJ (Java→WASM) + MicroEmulator (MIDP-2.0)** running the original JAR
(`original/heroes-lore-zero.jar`); see `README.md` for the design. There is no build step.

### Run it
- `npm start` serves `public/` on http://localhost:4173/ via `npx serve` (see `package.json`).
- The page auto-boots the MIDlet (`public/js/emulator.js`): EA logo → title → save-slot menu.
- Controls: arrow keys = D-pad, `Numpad 5` / `Enter` = OK/fire, number keys = phone keypad,
  or click the on-screen phone buttons. Click the screen first to give it focus.

### Non-obvious gotchas
- **CheerpJ loads from its CDN** (`cjrtnc.leaningtech.com`) at runtime, so the browser needs
  network access. First boot takes ~15–60s while the runtime initialises; be patient.
- **No audio in the VM.** The game logs `IllegalArgumentException: No line matching interface
  Clip …` (and MicroEmulator prints it as "error MIDlet caught"). This is expected/non-fatal —
  the game catches it and continues. Do not chase it as a bug.
- **`public/js/game/*.js` is dead code.** It is the output of `tools/transpile_java.py`, a
  regex Java→JS transpiler whose result is not runnable (most files don't even parse as ES
  modules). It is kept for reference only and is NOT loaded by `index.html`. Do not try to
  "fix the black screen" by editing those files.
- The MIDlet APIs come from the bundled `public/lib/microemu-*.jar`. The JSR-120 add-on is
  required (the game uses `javax.wireless.messaging`), so keep those jars on the classpath in
  `public/js/emulator.js`.

### Testing
- Manual GUI test only: open Chrome at http://localhost:4173/ (use the `computerUse` subagent).
  Wait for the phone skin + game to appear, then drive it with the keyboard / on-screen keys.
- Optional desktop cross-check with the same runtime (a real JVM, `DISPLAY=:1`):
  `java -cp "<microemulator.jar>:<jsr-mod-jars>" org.microemu.app.Main --appclasspath original/heroes-lore-zero.jar rpg.RPGHeroEx`
