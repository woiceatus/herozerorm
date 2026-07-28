/** javax.microedition.lcdui.Display / Displayable */
export class Displayable {
  constructor() {
    this._commands = [];
  }
}

export class Display {
  constructor(midlet) {
    this._midlet = midlet;
    this._current = null;
    this._dom = null;
  }

  static getDisplay(midlet) {
    if (!midlet._display) midlet._display = new Display(midlet);
    return midlet._display;
  }

  setCurrent(displayable) {
    this._current = displayable;
    if (displayable && typeof displayable.attach === 'function' && this._dom) {
      displayable.attach(this._dom, this);
      displayable.repaint();
    }
  }

  getCurrent() {
    return this._current;
  }

  /** Host page binds the HTML canvas once */
  bindDomCanvas(canvasEl) {
    this._dom = canvasEl;
    if (this._current && typeof this._current.attach === 'function') {
      this._current.attach(canvasEl, this);
      this._current.repaint();
    }
  }

  callSerially(r) {
    queueMicrotask(() => {
      try {
        r.run ? r.run() : r();
      } catch (e) {
        console.error(e);
      }
    });
  }

  vibrate(duration) {
    if (navigator.vibrate) navigator.vibrate(duration);
  }

  flashBacklight(_duration) {}
}
