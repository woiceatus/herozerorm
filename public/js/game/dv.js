/** Transpiled from dv */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dv extends (JavaRegistry.get("as") || class {}) {
  c = new Int8Array([-1, -1]);
  d = new Int8Array([-1, -1, -1, -1, -1, -1]);
  dv(by2, by3) {

        /*super*/(by2, by3);
    
  }
  a(byArray, n2) {

        n2 = super.a_m7_PABIRI(byArray, n2);
        System.arraycopy(byArray, n2, this.d, 0, 6);
        System.arraycopy(byArray, n2 += 6, this.c, 0, 2);
        return n2 += 2;
    
  }
}

JavaRegistry.set("dv", dv);
JavaRegistry.set("dv", dv);
try { if (typeof dv.__clinit === 'function') dv.__clinit(); } catch (e) { console.warn('clinit dv', e); }

globalThis.dv = dv;
