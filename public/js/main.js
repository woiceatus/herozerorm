/**
 * Boot Heroes Lore Zero — TeaVM AOT (Java bytecode → JS) + MIDP Canvas adapters.
 * Original game classes + assets; no J2ME emulator.
 */
import { installControls } from './touch/controls.js';

const SCREEN = { w: 240, h: 320 };

function fitCanvas(canvas) {
  const wrap = canvas.parentElement;
  const maxW = wrap.clientWidth;
  const maxH = wrap.clientHeight;
  const scale = Math.min(maxW / SCREEN.w, maxH / SCREEN.h);
  canvas.style.width = `${Math.floor(SCREEN.w * scale)}px`;
  canvas.style.height = `${Math.floor(SCREEN.h * scale)}px`;
}

async function preloadAllResources() {
  window.__hlzResources = window.__hlzResources || {};
  let paths = [];
  try {
    const res = await fetch('/res-manifest.txt');
    const text = await res.text();
    paths = text.split('\n').map((l) => l.trim()).filter(Boolean);
  } catch (_) {
    paths = ['/res/title.png', '/res/ealogo.png', '/res/icon.png', '/res/cpid.txt', '/res/dotFontSmall.dat'];
  }
  const status = document.getElementById('status');
  let done = 0;
  const concurrency = 16;
  let i = 0;
  async function worker() {
    while (i < paths.length) {
      const idx = i++;
      const p = paths[idx];
      try {
        const r = await fetch(p);
        if (r.ok) {
          const buf = new Uint8Array(await r.arrayBuffer());
          const bare = p.startsWith('/res') ? p.slice(4) : p;
          window.__hlzResources[p] = buf;
          window.__hlzResources[bare] = buf;
          if (bare.startsWith('/')) window.__hlzResources[bare] = buf;
          else window.__hlzResources['/' + bare] = buf;
        }
      } catch (_) {}
      done++;
      if (done % 40 === 0 || done === paths.length) {
        status.textContent = `Loading assets… ${done}/${paths.length}`;
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
}

async function main() {
  const status = document.getElementById('status');
  const canvas = document.getElementById('game');
  canvas.width = SCREEN.w;
  canvas.height = SCREEN.h;
  fitCanvas(canvas);
  window.addEventListener('resize', () => fitCanvas(canvas));

  status.textContent = 'Loading assets…';
  await preloadAllResources();

  installControls(() => ({
    getWidth: () => SCREEN.w,
    getHeight: () => SCREEN.h,
    keyPressed: (kc) => window.__hlzInput?.keyDown?.(kc),
    keyReleased: (kc) => window.__hlzInput?.keyUp?.(kc),
    injectKeyPressed: (kc) => window.__hlzInput?.keyDown?.(kc),
    injectKeyReleased: (kc) => window.__hlzInput?.keyUp?.(kc),
    pointerPressed: (x, y) => window.__hlzInput?.ptrDown?.(x, y),
    pointerReleased: (x, y) => window.__hlzInput?.ptrUp?.(x, y),
    pointerDragged: (x, y) => window.__hlzInput?.ptrDrag?.(x, y),
  }));

  status.textContent = 'Starting game…';
  try {
    const mod = await import('./teavm/game.js');
    // Don't block UI on TeaVM main completion — game loop is timer-driven
    mod.main([], (err) => {
      if (err instanceof Error) {
        console.error(err);
        status.textContent = 'Start error: ' + err.message;
      }
    });
    // Give startApp a moment, then clear overlay
    setTimeout(() => {
      if (status.textContent === 'Starting game…') status.textContent = '';
    }, 500);
  } catch (e) {
    console.error(e);
    status.textContent = 'Start error: ' + (e && e.message ? e.message : e);
  }
}

main();
