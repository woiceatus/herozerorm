/** Transpiled from dy */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dy extends (JavaRegistry.get("Object") || class {}) {
  static e = new Int8Array([4, 1]);
  static f = new Int8Array([0, -1, 0, 1, -1, 0, 1, 0]);
}

JavaRegistry.set("dy", dy);
JavaRegistry.set("dy", dy);
try { if (typeof dy.__clinit === 'function') dy.__clinit(); } catch (dy.e) { console.warn('clinit dy', dy.e); }

globalThis.dy = dy;
