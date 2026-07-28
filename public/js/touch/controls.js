/**
 * Touch / on-screen keypad for Heroes Lore Zero web port.
 * Emits MIDP/Nokia-style keyCodes into the active Canvas.
 */
const KEY = {
  UP: -1,
  DOWN: -2,
  LEFT: -3,
  RIGHT: -4,
  FIRE: -5,
  SOFT_LEFT: -6,
  SOFT_RIGHT: -7,
  NUM0: 48,
  NUM1: 49,
  NUM2: 50,
  NUM3: 51,
  NUM4: 52,
  NUM5: 53,
  NUM6: 54,
  NUM7: 55,
  NUM8: 56,
  NUM9: 57,
  STAR: 42,
  POUND: 35,
};

const KB_MAP = {
  ArrowUp: KEY.UP,
  ArrowDown: KEY.DOWN,
  ArrowLeft: KEY.LEFT,
  ArrowRight: KEY.RIGHT,
  Enter: KEY.FIRE,
  ' ': KEY.FIRE,
  KeyQ: KEY.SOFT_LEFT,
  KeyW: KEY.SOFT_RIGHT,
  F1: KEY.SOFT_LEFT,
  F2: KEY.SOFT_RIGHT,
  Digit0: KEY.NUM0,
  Digit1: KEY.NUM1,
  Digit2: KEY.NUM2,
  Digit3: KEY.NUM3,
  Digit4: KEY.NUM4,
  Digit5: KEY.NUM5,
  Digit6: KEY.NUM6,
  Digit7: KEY.NUM7,
  Digit8: KEY.NUM8,
  Digit9: KEY.NUM9,
};

export function installControls(getCanvas) {
  const root = document.getElementById('touch-pad');
  const pressed = new Set();

  function target() {
    const c = getCanvas();
    return c;
  }

  function down(kc) {
    if (pressed.has(kc)) return;
    pressed.add(kc);
    const c = target();
    if (c && typeof c.injectKeyPressed === 'function') c.injectKeyPressed(kc);
    else if (c && typeof c.keyPressed === 'function') c.keyPressed(kc);
  }
  function up(kc) {
    if (!pressed.has(kc)) return;
    pressed.delete(kc);
    const c = target();
    if (c && typeof c.injectKeyReleased === 'function') c.injectKeyReleased(kc);
    else if (c && typeof c.keyReleased === 'function') c.keyReleased(kc);
  }

  function bindBtn(el) {
    const kc = Number(el.dataset.key);
    const start = (e) => {
      e.preventDefault();
      el.classList.add('active');
      down(kc);
    };
    const end = (e) => {
      e.preventDefault();
      el.classList.remove('active');
      up(kc);
    };
    el.addEventListener('pointerdown', start);
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('pointerleave', end);
  }

  root.querySelectorAll('[data-key]').forEach(bindBtn);

  // Pointer on game canvas → pointer events
  const surface = document.getElementById('game');
  surface.addEventListener(
    'pointerdown',
    (e) => {
      const c = target();
      if (!c || !c.pointerPressed) return;
      const r = surface.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * c.getWidth();
      const y = ((e.clientY - r.top) / r.height) * c.getHeight();
      c.pointerPressed(x | 0, y | 0);
    },
    { passive: true }
  );
  surface.addEventListener(
    'pointerup',
    (e) => {
      const c = target();
      if (!c || !c.pointerReleased) return;
      const r = surface.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * c.getWidth();
      const y = ((e.clientY - r.top) / r.height) * c.getHeight();
      c.pointerReleased(x | 0, y | 0);
    },
    { passive: true }
  );

  window.addEventListener('keydown', (e) => {
    const kc = KB_MAP[e.code];
    if (kc == null) return;
    e.preventDefault();
    down(kc);
  });
  window.addEventListener('keyup', (e) => {
    const kc = KB_MAP[e.code];
    if (kc == null) return;
    e.preventDefault();
    up(kc);
  });

  return { KEY, down, up };
}
