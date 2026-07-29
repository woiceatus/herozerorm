# Task: Port Heroes Lore Zero (J2ME) to web

## Done
- [x] Commit baseline / branch with model+agent prefix
- [x] Decompile / remap original JAR (field collisions only for TeaVM)
- [x] MIDP adapters (Canvas, Graphics, Image, Display, RMS, media, WMA stubs)
- [x] Compile game bytecode → JS via TeaVM (no emulator)
- [x] Original assets under `public/res/`, touch + keyboard UI
- [x] Sync PNG decode (UPNG), getRGB/drawRGB/createRGBImage
- [x] Browser-test: title splash, menus, in-game world rendering & input

## Follow-ups
- Dialogue/menu text polish if any glyph path still misses
- Optional: TeaVM WASM target
