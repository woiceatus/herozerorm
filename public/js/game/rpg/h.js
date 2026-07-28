/** Transpiled from rpg.h */
import { sleep, JavaRegistry, jEquals } from '../../midp/runtime.js';
import { Image } from '../../midp/Image.js';
import { Graphics } from '../../midp/Graphics.js';
import { Display } from '../../midp/Display.js';
import { Font } from '../../midp/Font.js';
import { RecordStore } from '../../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../../midp/resources.js';

export class h extends (JavaRegistry.get("Object") || class {}) {
  static a = null;
  static __clinit() {

        "V.1.0.0".getBytes();
        h.a = new Int8Array([1, 13, 2, 2]);
    
  }
}

JavaRegistry.set("rpg.h", h);
JavaRegistry.set("h", h);
try { if (typeof h.__clinit === 'function') h.__clinit(); } catch (e) { console.warn('clinit rpg.h', e); }

globalThis.h = h;
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.h = h;
