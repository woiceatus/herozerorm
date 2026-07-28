/** javax.microedition.midlet.MIDlet */
export class MIDlet {
  constructor() {
    this._props = Object.create(null);
    this._destroyed = false;
  }
  getAppProperty(key) {
    return this._props[key] ?? null;
  }
  notifyDestroyed() {
    this._destroyed = true;
    console.info('[MIDlet] destroyed');
  }
  platformRequest(url) {
    if (url) window.open(url, '_blank');
  }
  // subclass hooks
  startApp() {}
  pauseApp() {}
  destroyApp(_unconditional) {}
}
