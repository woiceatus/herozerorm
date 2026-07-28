/** Transpiled from dm */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dm extends (JavaRegistry.get("cr") || class {}) {
  d = null;
  e = null;
  constructor(by2, by3, n2, n3, n4, bl2) {
    super();

        /*super*/(by2, by3, n2);
        this.d = n3 + 8;
        this.e = n4 + 8;
        this.b_f2_Z = bl2;
    
  }
  a(n2, n3) {

        if (this.a_f0_Ls_ == null) {
            this.a_f2_Z = true;
            return;
        }
        this.a_f0_Ls_.a_m2_PBBIIIRI(this.c, 1, this.b_f0_I % this.a_f1_I, n2 += this.d, n3 += this.e);
    
  }
}

JavaRegistry.set("dm", dm);
JavaRegistry.set("dm", dm);
try { if (typeof dm.__clinit === 'function') dm.__clinit(); } catch (e) { console.warn('clinit dm', e); }

globalThis.dm = dm;
