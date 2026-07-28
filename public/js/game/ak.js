/** Transpiled from ak */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ak extends (JavaRegistry.get("at") || class {}) {
  static a = new Int8Array([17, 19, 8, 18, 17, 9, 16, 16, 17, 18, 19, 13]);
  c = (this.a_f0_B - 11);
  d = 1;
  constructor(by2) {
    super();

        super;
        (this).c = this.a_f1_I = e.a_f2_Lca_.a_m3_PBRB(ak.a[this.c]);
    
  }
  constructor(by2, n2) {
    super();

        this;
        (this).c = n2;
    
  }
  constructor(by2, by3) {
    super();

        this;
        if (this.a_f0_B == 15) {
            this.d = by3;
        }
    
  }
  a_m0_PIIRV(n2, n3) {

        e.a_f2_Lca_.a_m2_PBBIIIRI(ak.a[this.c], this.d, this.b_f0_I % this.a_f1_I, n2, n3);
    
  }
  a_m1_PRV() {

        ++this.b_f0_I;
        if (this.b_f0_I >= (this).c) {
            this.a_f2_Z = true;
        }
    
  }
}

JavaRegistry.set("ak", ak);
JavaRegistry.set("ak", ak);
try { if (typeof ak.__clinit === 'function') ak.__clinit(); } catch (e) { console.warn('clinit ak', e); }

globalThis.ak = ak;
