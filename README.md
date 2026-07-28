# Heroes Lore: Zero — Web Port

Native **JavaScript / Canvas** port of the J2ME RPG (not an emulator).

## Approach

1. Remap obfuscated bytecode (unique field/method names)
2. Decompile → transpile game logic to ES modules
3. MIDP shims (`Canvas`, `Graphics`, `Image`, `RMS`, …) on HTML5 Canvas
4. **Original** dialog (`.m`), maps, sprites, and other assets from the JAR under `public/res/`
5. On-screen **touch keypad** + keyboard

## Run

```bash
npm start
```

Open http://localhost:4173/

### Controls

| Input | Action |
|-------|--------|
| On-screen D-pad / OK / L / R | Softkeys & navigation |
| Touch the game screen | Pointer |
| Arrow keys / Enter | D-pad / OK |
| Q / W | Left / right soft key |

## Layout

```
original/          # source JAR (+ remapped)
game-src/          # decompiled Java
public/
  index.html       # touch UI shell
  res/             # original assets & dialogue
  js/midp/         # MIDP → Canvas runtime
  js/game/         # transpiled game code
tools/             # remap + transpile
```

## Status

This is an in-progress native port of the full engine. Boot path, assets, dialogue data,
and touch input are wired; some obfuscated edge cases may still need fixes while playing.
