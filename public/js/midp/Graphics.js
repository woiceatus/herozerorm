/** javax.microedition.lcdui.Graphics — Canvas2D backend */
export class Graphics {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this._w = width;
    this._h = height;
    this._color = '#000000';
    this._font = '12px monospace';
    this._tx = 0;
    this._ty = 0;
    // MIDP anchors
    this.HCENTER = 1;
    this.VCENTER = 2;
    this.LEFT = 4;
    this.RIGHT = 8;
    this.TOP = 16;
    this.BOTTOM = 32;
    this.BASELINE = 64;
  }

  setColor(rgb) {
    const n = rgb >>> 0;
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    this._color = `rgb(${r},${g},${b})`;
    this.ctx.fillStyle = this._color;
    this.ctx.strokeStyle = this._color;
  }

  setFont(font) {
    if (!font) return;
    const size = font.height || 12;
    const face = font.face === 1 ? 'serif' : 'sans-serif';
    const style = font.style & 1 ? 'bold' : 'normal';
    this._font = `${style} ${size}px ${face}`;
    this.ctx.font = this._font;
  }

  setClip(x, y, w, h) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(x + this._tx, y + this._ty, w, h);
    this.ctx.clip();
  }

  clipRect(x, y, w, h) {
    this.setClip(x, y, w, h);
  }

  translate(x, y) {
    this._tx += x;
    this._ty += y;
  }

  fillRect(x, y, w, h) {
    this.ctx.fillStyle = this._color;
    this.ctx.fillRect(x + this._tx, y + this._ty, w, h);
  }

  drawRect(x, y, w, h) {
    this.ctx.strokeStyle = this._color;
    this.ctx.strokeRect(x + this._tx + 0.5, y + this._ty + 0.5, w, h);
  }

  drawLine(x1, y1, x2, y2) {
    this.ctx.strokeStyle = this._color;
    this.ctx.beginPath();
    this.ctx.moveTo(x1 + this._tx + 0.5, y1 + this._ty + 0.5);
    this.ctx.lineTo(x2 + this._tx + 0.5, y2 + this._ty + 0.5);
    this.ctx.stroke();
  }

  drawString(str, x, y, anchor = 0) {
    if (str == null) return;
    this.ctx.fillStyle = this._color;
    this.ctx.font = this._font;
    let ax = x + this._tx;
    let ay = y + this._ty;
    const metrics = this.ctx.measureText(String(str));
    const h = parseInt(this._font, 10) || 12;
    if (anchor & 1) ax -= metrics.width / 2; // HCENTER
    if (anchor & 8) ax -= metrics.width; // RIGHT
    if (anchor & 2) ay += h / 2; // VCENTER rough
    if (anchor & 32) ay += 0; // BOTTOM — baseline-ish
    if (!(anchor & (2 | 32 | 64))) ay += h; // TOP default → baseline
    this.ctx.fillText(String(str), ax, ay);
  }

  drawImage(img, x, y, anchor = 20) {
    if (!img || !img._el) return;
    let ax = x + this._tx;
    let ay = y + this._ty;
    const w = img.getWidth();
    const h = img.getHeight();
    // default TOP|LEFT = 20 in MIDP? actually TOP=16 LEFT=4 → 20
    if (anchor & 1) ax -= w / 2;
    if (anchor & 8) ax -= w;
    if (anchor & 2) ay -= h / 2;
    if (anchor & 32) ay -= h;
    this.ctx.drawImage(img._el, ax, ay);
  }

  drawRegion(src, x_src, y_src, width, height, transform, x_dest, y_dest, anchor) {
    if (!src || !src._el) return;
    let ax = x_dest + this._tx;
    let ay = y_dest + this._ty;
    if (anchor & 1) ax -= width / 2;
    if (anchor & 8) ax -= width;
    if (anchor & 2) ay -= height / 2;
    if (anchor & 32) ay -= height;
    this.ctx.drawImage(src._el, x_src, y_src, width, height, ax, ay, width, height);
  }

  fillTriangle(x1, y1, x2, y2, x3, y3) {
    this.ctx.fillStyle = this._color;
    this.ctx.beginPath();
    this.ctx.moveTo(x1 + this._tx, y1 + this._ty);
    this.ctx.lineTo(x2 + this._tx, y2 + this._ty);
    this.ctx.lineTo(x3 + this._tx, y3 + this._ty);
    this.ctx.closePath();
    this.ctx.fill();
  }
}
