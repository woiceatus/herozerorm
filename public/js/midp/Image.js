import { Graphics } from './Graphics.js';

/** javax.microedition.lcdui.Image */
export class Image {
  constructor(el, w, h) {
    this._el = el;
    this._w = w;
    this._h = h;
  }

  getWidth() {
    return this._w;
  }
  getHeight() {
    return this._h;
  }

  getGraphics() {
    if (!this._el || !this._el.getContext) {
      const c = document.createElement('canvas');
      c.width = this._w;
      c.height = this._h;
      this._el = c;
    }
    return new Graphics(this._el.getContext('2d'), this._w, this._h);
  }

  static createImage(a, b, c) {
    // overloads: (w,h) | (path) | (bytes,offset,len) | (Image,x,y,w,h,transform)
    if (typeof a === 'number' && typeof b === 'number') {
      const canvas = document.createElement('canvas');
      canvas.width = a;
      canvas.height = b;
      return new Image(canvas, a, b);
    }
    if (typeof a === 'string') {
      return Image._fromPath(a);
    }
    if (a instanceof Uint8Array || a instanceof Int8Array || Array.isArray(a)) {
      return Image._fromBytes(a, b || 0, c != null ? c : a.length);
    }
    if (a && a._el) {
      // Image.createImage(img, x, y, w, h, transform)
      const x = b || 0,
        y = c || 0;
      // remaining args ignored for now — full blit handled by drawRegion callers
      return a;
    }
    return Image.createImage(16, 16);
  }

  static _fromPath(path) {
    let p = path.startsWith('/') ? path : '/' + path;
    // Assets live under /res
    if (!p.startsWith('/res')) p = '/res' + p;
    const img = new window.Image();
    img.src = p;
    // Sync-ish stub: return placeholder sized later on load
    const wrapper = new Image(img, 16, 16);
    img.onload = () => {
      wrapper._w = img.naturalWidth;
      wrapper._h = img.naturalHeight;
    };
    // For games that need sync dimensions, try decode via cache
    Image._cache = Image._cache || Object.create(null);
    if (Image._cache[p]) {
      const cached = Image._cache[p];
      wrapper._el = cached;
      wrapper._w = cached.naturalWidth || cached.width;
      wrapper._h = cached.naturalHeight || cached.height;
    } else {
      Image._cache[p] = img;
    }
    return wrapper;
  }

  static _fromBytes(bytes, off, len) {
    const u8 = bytes instanceof Uint8Array ? bytes.subarray(off, off + len) : Uint8Array.from(bytes).subarray(off, off + len);
    const blob = new Blob([u8], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    const img = new window.Image();
    img.src = url;
    const wrapper = new Image(img, 16, 16);
    img.onload = () => {
      wrapper._w = img.naturalWidth;
      wrapper._h = img.naturalHeight;
    };
    return wrapper;
  }

  static createRGBImage(rgb, width, height, processAlpha) {
    const c = document.createElement('canvas');
    c.width = width;
    c.height = height;
    const ctx = c.getContext('2d');
    const data = ctx.createImageData(width, height);
    for (let i = 0; i < width * height; i++) {
      const v = rgb[i] >>> 0;
      const o = i * 4;
      data.data[o] = (v >> 16) & 255;
      data.data[o + 1] = (v >> 8) & 255;
      data.data[o + 2] = v & 255;
      data.data[o + 3] = processAlpha ? (v >> 24) & 255 : 255;
    }
    ctx.putImageData(data, 0, 0);
    return new Image(c, width, height);
  }
}
