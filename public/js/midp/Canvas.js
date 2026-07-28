import { Graphics } from './Graphics.js';

/** javax.microedition.lcdui.Canvas */
export class Canvas {
  constructor() {
    this._full = false;
    this._shown = false;
    this._w = 240;
    this._h = 320;
    this._display = null;
    this._surface = null;
    this._g = null;
  }

  setFullScreenMode(v) {
    this._full = !!v;
  }

  getWidth() {
    return this._w;
  }
  getHeight() {
    return this._h;
  }

  isShown() {
    return this._shown;
  }

  /** Bind to DOM canvas element */
  attach(domCanvas, display) {
    this._surface = domCanvas;
    this._display = display;
    this._w = domCanvas.width;
    this._h = domCanvas.height;
    this._g = new Graphics(domCanvas.getContext('2d'), this._w, this._h);
    this._shown = true;
    if (typeof this.showNotify === 'function') this.showNotify();
  }

  setSize(w, h) {
    this._w = w;
    this._h = h;
    if (this._surface) {
      this._surface.width = w;
      this._surface.height = h;
      this._g = new Graphics(this._surface.getContext('2d'), w, h);
    }
  }

  repaint(_x, _y, _w, _h) {
    // schedule paint
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      if (!this._g) return;
      try {
        this.paint(this._g);
      } catch (e) {
        console.error('[Canvas.paint]', e);
      }
    });
  }

  serviceRepaints() {
    if (this._raf) {
      cancelAnimationFrame(this._raf);
      this._raf = 0;
    }
    if (this._g) this.paint(this._g);
  }

  paint(_g) {}
  keyPressed(_kc) {}
  keyReleased(_kc) {}
  pointerPressed(_x, _y) {}
  pointerReleased(_x, _y) {}
  pointerDragged(_x, _y) {}
  showNotify() {}
  hideNotify() {}

  /**
   * Map keyCode to game action (Nokia-ish defaults).
   * FIRE=8, UP=1, DOWN=6, LEFT=2, RIGHT=5
   */
  getGameAction(keyCode) {
    switch (keyCode) {
      case -1:
      case 50:
        return 1; // UP
      case -2:
      case 56:
        return 6; // DOWN
      case -3:
      case 52:
        return 2; // LEFT
      case -4:
      case 54:
        return 5; // RIGHT
      case -5:
      case 53:
        return 8; // FIRE
      default:
        return 0;
    }
  }

  /** Softkey / keypad injection from touch layer */
  injectKeyPressed(kc) {
    this.keyPressed(kc);
  }
  injectKeyReleased(kc) {
    this.keyReleased(kc);
  }
}
