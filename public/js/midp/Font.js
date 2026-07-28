/** javax.microedition.lcdui.Font */
export class Font {
  constructor(face, style, size) {
    this.face = face || 0;
    this.style = style || 0;
    this.size = size || 0;
    this.height = size === 8 ? 16 : size === 16 ? 20 : 12;
  }
  static getFont(face, style, size) {
    return new Font(face, style, size);
  }
  static getDefaultFont() {
    return new Font(0, 0, 0);
  }
  getHeight() {
    return this.height;
  }
  stringWidth(s) {
    return String(s || '').length * (this.height * 0.6);
  }
  charWidth(_c) {
    return this.height * 0.6;
  }
  substringWidth(s, off, len) {
    return this.stringWidth(String(s).substring(off, off + len));
  }
}
