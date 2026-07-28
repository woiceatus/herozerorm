# Heroes Lore: Zero — Web Port

Play the original **Heroes Lore: Zero** J2ME game in the browser.

## How it runs

The original title is a MIDP-2.0 / CLDC-1.1 J2ME MIDlet (`rpg.RPGHeroEx`). Rather than
rely on a lossy source-level transpile of the obfuscated bytecode, the browser build runs
the **original JAR** through a real J2ME runtime, entirely client-side:

- **[CheerpJ](https://cheerpj.com)** — a Java SE → WebAssembly JVM that runs in the browser.
- **[MicroEmulator](https://github.com/barteo/microemu)** — a MIDP-2.0 implementation
  providing the `javax.microedition.*` APIs plus a phone device UI.

CheerpJ executes MicroEmulator (and the game's) bytecode; MicroEmulator draws the emulated
phone. The optional JSR add-ons (`microemu-jsr-120/135/75`, `microemu-nokiaui`) are bundled
because the game touches WMA, MMAPI, FileConnection and the Nokia UI API.

## Run

```bash
npm start
```

Then open http://localhost:4173/ . The first load fetches the CheerpJ runtime from its CDN
and boots straight into the game (EA logo → title → save-slot menu). Give the screen focus
by clicking it.

### Controls

| Input | Action |
|-------|--------|
| Arrow keys | D-pad / navigation |
| `Numpad 5` / `Enter` | OK / fire |
| Number keys `0`–`9`, `*`, `#` | Phone keypad |
| On-screen phone buttons | Same, via mouse/touch |

## Layout

```
public/
  index.html          # page shell + CheerpJ bootstrap
  js/emulator.js       # CheerpJ + MicroEmulator boot (runs the original JAR)
  lib/                 # microemulator + JSR add-on jars + the game jar
original/              # source JAR (canonical copy)
game-src/              # decompiled Java (reference only)
public/js/game/        # earlier regex-transpiled JS (reference only; not used at runtime)
tools/                 # remap + transpile helpers
```

## Note on the JS transpile

`tools/transpile_java.py` + `public/js/game/` are an earlier experiment that machine-translated
the decompiled Java to JavaScript. That output is not runnable (the regex transpiler cannot
preserve Java control flow / semantics) and is kept only for reference. The playable build is
the CheerpJ + MicroEmulator runtime described above.
