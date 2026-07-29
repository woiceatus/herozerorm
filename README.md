# Heroes Lore: Zero — Web Port (TeaVM)

Native **TeaVM AOT** port of the J2ME RPG: original game bytecode compiled to JavaScript with MIDP→Canvas adapters. **Not an emulator.**

## Approach

1. Remap colliding fields in the original JAR (`RemapFieldsOnly`) so TeaVM can compile it.
2. ASM-patch browser blockers (game loop, resources, threads, SMS gate, splash sync, buffer size, alpha reset).
3. MIDP stubs (`javax.microedition.*`) draw to a DOM canvas; assets load from `/res`.
4. TeaVM emits `public/js/teavm/game.js` (ES module).

## Run

```bash
npm run build   # remap + patch + mvn package → public/js/teavm/game.js
npm start       # serve public on :4173
```

Open http://127.0.0.1:4173/ — use on-screen keypad/D-pad or keyboard.

## Layout

| Path | Role |
|------|------|
| `original/` | Original + field-remapped JARs |
| `teavm-port/` | Maven/TeaVM project, MIDP adapters, ASM patches |
| `public/res/` | Original game assets |
| `public/js/teavm/game.js` | Compiled game |
| `tools/build-teavm.sh` | Full rebuild |
| `task.md` | Task checklist |
