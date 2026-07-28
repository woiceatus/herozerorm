/**
 * Boot Heroes Lore Zero native JS port.
 * Loads transpiled game modules (original logic) + assets (original dialog/art).
 */
import { Display } from './midp/Display.js';
import { JavaRegistry } from './midp/runtime.js';
import { installResourceHooks, preloadResources } from './midp/resources.js';
import { installControls } from './touch/controls.js';

const SCREEN = { w: 240, h: 320 };

async function loadManifest() {
  const res = await fetch('/res-manifest.txt');
  const text = await res.text();
  return text.split('\n').map((l) => l.trim()).filter(Boolean);
}

async function importAllGameModules() {
  // Prefer a generated list; fall back to known boot graph + glob via manifest of js files
  const listRes = await fetch('/js/game-modules.json');
  const modules = await listRes.json();
  for (const path of modules) {
    try {
      await import(path);
    } catch (e) {
      console.warn('module load failed', path, e);
    }
  }
}

function exposeGlobals() {
  // Default-package classes are referenced unqualified from rpg.* 
  for (const [name, cls] of Object.entries(JavaRegistry._map)) {
    if (!name.includes('.')) {
      globalThis[name] = cls;
    }
  }
  // Also common packages
  globalThis.rpg = globalThis.rpg || {};
  for (const [name, cls] of Object.entries(JavaRegistry._map)) {
    if (name.startsWith('rpg.')) {
      globalThis.rpg[name.slice(4)] = cls;
    }
  }
}

function fitCanvas(canvas) {
  const wrap = canvas.parentElement;
  const maxW = wrap.clientWidth;
  const maxH = wrap.clientHeight;
  const scale = Math.min(maxW / SCREEN.w, maxH / SCREEN.h);
  canvas.style.width = `${Math.floor(SCREEN.w * scale)}px`;
  canvas.style.height = `${Math.floor(SCREEN.h * scale)}px`;
}

async function main() {
  const status = document.getElementById('status');
  const canvas = document.getElementById('game');
  canvas.width = SCREEN.w;
  canvas.height = SCREEN.h;
  fitCanvas(canvas);
  window.addEventListener('resize', () => fitCanvas(canvas));

  status.textContent = 'Loading assets…';
  installResourceHooks();
  const paths = await loadManifest();
  // Preload critical small assets first; rest on demand
  const critical = paths.filter((p) =>
    /\/(title|icon|ealogo|en\/|m\/m\/0|dotFont|cpid)/.test(p)
  );
  await preloadResources(critical.length ? critical : paths.slice(0, 80));
  // Background preload remaining
  preloadResources(paths);

  status.textContent = 'Loading game code…';
  await importAllGameModules();
  exposeGlobals();

  const RPGHeroEx = JavaRegistry.get('rpg.RPGHeroEx');
  if (!RPGHeroEx) {
    status.textContent = 'Boot failed: RPGHeroEx missing';
    return;
  }

  const midlet = new RPGHeroEx();
  const display = Display.getDisplay(midlet);
  display.bindDomCanvas(canvas);

  let activeCanvas = null;
  installControls(() => {
    const ctCls = JavaRegistry.get('ct');
    const bound = ctCls?.a_f2_Ljavax_microedition_lcdui_Canvas_;
    if (bound && typeof bound.keyPressed === 'function') {
      activeCanvas = bound;
      return bound;
    }
    const cur = display.getCurrent();
    if (cur && typeof cur.keyPressed === 'function') {
      activeCanvas = cur;
      return cur;
    }
    return activeCanvas;
  });

  status.textContent = 'Starting…';
  try {
    midlet.startApp();
    status.textContent = '';
  } catch (e) {
    console.error(e);
    status.textContent = 'Start error: ' + (e && e.message ? e.message : e);
  }
}

main();
