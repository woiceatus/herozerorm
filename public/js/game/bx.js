/** Transpiled from bx */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bx extends (JavaRegistry.get("Object") || class {}) {
  a = null;
  constructor() {
    super();

    
  }
}

JavaRegistry.set("bx", bx);
JavaRegistry.set("bx", bx);
try { if (typeof bx.__clinit === 'function') bx.__clinit(); } catch (e) { console.warn('clinit bx', e); }

globalThis.bx = bx;
