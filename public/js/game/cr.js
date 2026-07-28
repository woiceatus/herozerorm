/** Transpiled from cr */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cr extends (JavaRegistry.get("at") || class {}) {
  c = null;
  a_f0_Ls_ = null;
  d = null;
  static a_f1_AB = new Int8Array([0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 1]);
  constructor(by2, by3, n2) {
    super();

        super;
        (this).c = n2;
        this.c = cr.a_f1_AB[by2 - 30];
        this.d = by3;
        this.a_f0_Ls_ = e.a_f3_ALs_[this.d];
        this.a_f1_I = this.a_f0_Ls_.a_m3_PBRB;
        if (by2 == 41 || by2 == 37) {
            this.b_f2_Z = false;
        }
    
  }
  a(n2, n3) {

        if (this.a_f0_Ls_ == null) {
            this.a_f2_Z = true;
            return;
        }
        this.a_f0_Ls_.a_m2_PBBIIIRI(this.c, 1, this.b_f0_I % this.a_f1_I, n2, n3);
    
  }
}

JavaRegistry.set("cr", cr);
JavaRegistry.set("cr", cr);
try { if (typeof cr.__clinit === 'function') cr.__clinit(); } catch (e) { console.warn('clinit cr', e); }

globalThis.cr = cr;
