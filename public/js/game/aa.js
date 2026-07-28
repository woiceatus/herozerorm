/** Transpiled from aa */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class aa extends (JavaRegistry.get("at") || class {}) {
  a = null;
  c = 0;
  constructor(s2, by2) {
    super();

        /*super*/(-20);
        this.a = s2;
        this.c = by2;
        this.a_f1_I = this.a.a_m3_PBRB;
        (this).c = 1;
    
  }
  a_m0_PIIRV(n2, n3) {

        this.a.a_m2_PBBIIIRI(this.c, 1, this.b_f0_I % this.a_f1_I, n2, n3);
    
  }
  a_m1_PRV() {

        ++this.b_f0_I;
        if (this.b_f0_I >= this.a_f1_I) {
            this.a_f2_Z = true;
        }
    
  }
}

JavaRegistry.set("aa", aa);
JavaRegistry.set("aa", aa);
try { if (typeof aa.__clinit === 'function') aa.__clinit(); } catch (e) { console.warn('clinit aa', e); }

globalThis.aa = aa;
