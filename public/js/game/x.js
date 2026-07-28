/** Transpiled from x */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class x extends (JavaRegistry.get("ea") || class {}) {
  a_f0_I = 0;
  b = null;
  a_f1_AI = new Int32Array([1, 2, 3]);
  /* skip field: private byte[][] a_f2_AAB = new byte[][]{"[A]".getBytes(), "[a]".getBytes(), "[1 */
  x(n2) {

        /*super*/("");
        this.a_f0_I = n2;
        this.b = 0;
    
  }
  a_m0_PRLjava_lang_String_() {

        return super.a_m0_PRLjava_lang_String_();
    
  }
  a_m1_PIIRZ(n2, n3) {

        if (n2 == -6) {
            let x2 = this;
            this.b = (x2.b + 1) % x2.a_f1_AI.length;
        }
        let true = null;
    
  }
  a_m2_PRAB() {

        return this.a_f2_AAB[this.b];
    
  }
}

JavaRegistry.set("x", x);
JavaRegistry.set("x", x);
try { if (typeof x.__clinit === 'function') x.__clinit(); } catch (e) { console.warn('clinit x', e); }

globalThis.x = x;
