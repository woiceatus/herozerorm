/**
 * Heroes Lore: Zero — browser runtime.
 *
 * The original title is a MIDP-2.0 / CLDC-1.1 J2ME MIDlet (rpg.RPGHeroEx).
 * Instead of a lossy source-level transpile, we run the *original* JAR with a
 * real J2ME runtime in the browser:
 *
 *   CheerpJ (Java SE -> WebAssembly)  +  MicroEmulator (MIDP-2.0 implementation)
 *
 * MicroEmulator provides the javax.microedition.* APIs and a phone device UI;
 * CheerpJ executes its (and the game's) Java bytecode client-side. The optional
 * JSR add-ons are required because the game touches WMA (JSR-120), MMAPI
 * (JSR-135), FileConnection/PIM (JSR-75) and the Nokia UI API.
 */

const LIB = '/app/lib';
const CLASSPATH = [
  `${LIB}/microemulator-2.0.4.jar`,
  `${LIB}/microemu-jsr-120-2.0.4.jar`,
  `${LIB}/microemu-jsr-135-2.0.4.jar`,
  `${LIB}/microemu-jsr-75-2.0.4.jar`,
  `${LIB}/microemu-nokiaui-2.0.4.jar`,
].join(':');

const GAME_JAR = `${LIB}/heroes-lore-zero.jar`;
const MIDLET_CLASS = 'rpg.RPGHeroEx';

function setStatus(text, isError) {
  const el = document.getElementById('status');
  if (!el) return;
  el.textContent = text;
  el.classList.toggle('error', !!isError);
  el.style.display = text ? '' : 'none';
}

// Hide the status overlay once the emulator has painted something into the
// CheerpJ display (a <canvas> with a non-empty backing store shows up there).
function watchForFirstPaint() {
  const stage = document.getElementById('stage');
  let ticks = 0;
  const timer = setInterval(() => {
    ticks++;
    const canvas = stage.querySelector('canvas');
    if (canvas && canvas.width > 1 && canvas.height > 1) {
      setStatus('');
      clearInterval(timer);
    } else if (ticks > 90) {
      clearInterval(timer);
    }
  }, 1000);
}

async function boot() {
  const stage = document.getElementById('stage');

  if (typeof cheerpjInit !== 'function') {
    setStatus(
      'Runtime failed to load. CheerpJ (cjrtnc.leaningtech.com) could not be reached — check the network connection.',
      true,
    );
    return;
  }

  setStatus('Loading Java runtime (CheerpJ)…');
  console.log('[hlz] cheerpjInit start');
  try {
    await cheerpjInit({ status: 'none' });
  } catch (e) {
    console.error(e);
    setStatus('Failed to initialise the Java runtime: ' + (e && e.message ? e.message : e), true);
    return;
  }
  console.log('[hlz] cheerpjInit done');

  setStatus('Starting emulator…');

  // Size the virtual screen to the stage. Passing explicit pixel dimensions and
  // the parent element is required — (-1, -1) only works when CheerpJ can read
  // the parent size, which it cannot without a parent argument.
  const rect = stage.getBoundingClientRect();
  const w = Math.max(320, Math.floor(rect.width));
  const h = Math.max(320, Math.floor(rect.height));
  console.log('[hlz] creating display', w, 'x', h);
  const display = cheerpjCreateDisplay(w, h, stage);
  if (display) {
    display.tabIndex = 0;
    display.style.outline = 'none';
    setTimeout(() => display.focus(), 0);
    stage.addEventListener('click', () => display.focus());
  }

  watchForFirstPaint();
  // Fallback: drop the overlay after a while even if canvas detection misses.
  setTimeout(() => {
    const s = document.getElementById('status');
    if (s && !s.classList.contains('error')) setStatus('');
  }, 15000);

  console.log('[hlz] launching MicroEmulator');
  try {
    // --appclasspath <gameJar> <MIDletClass> auto-starts the MIDlet (no launcher menu).
    // cheerpjRunMain does not return until the app exits, so keep it last.
    await cheerpjRunMain(
      'org.microemu.app.Main',
      CLASSPATH,
      '--appclasspath',
      GAME_JAR,
      MIDLET_CLASS,
    );
    console.log('[hlz] MicroEmulator main returned');
  } catch (e) {
    console.error(e);
    setStatus('Emulator exited: ' + (e && e.message ? e.message : e), true);
  }
}

boot();
