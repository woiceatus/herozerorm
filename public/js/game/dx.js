/** Transpiled from dx */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dx extends (JavaRegistry.get("du") || class {}) {
  a_f0_B = null;
  a_f1_I = -1;
  constructor(by2, s2, s3) {
    super();

        /*super*/(s2, s3, 0, 0);
        this.a_f0_B = by2;
        this.a_f1_I = di.a_f4_Lg_.a_m1_PIIRI(s2 - 8 >> 4, s3 - 16 >> 4);
        if (this.a_f1_I != -1 && this.a_f1_I < 0) {
            this.a_f1_I += 256;
        }
    
  }
  b(n2, n3) {

        if (g.b_f6_Z || !this.l) {
            return;
        }
        if ((n3 = n3 + this.i + this.r) + 16 < 0) {
            return;
        }
        n2 = n2 + this.h + this.q;
        let dx2 = this;
        let bl2 = dx2.a_f1_I >= 19 && dx2.a_f1_I <= 21 || dx2.a_f1_I == 9 ? di.a_m11_PBRLbj_(19).a_m10_PBBRI(19, dx2.a_f1_I) > 0 : dx2.a_f1_I > 0 && di.a_m8_PIRZ;
        if {
            g.a_m0_PIIRV(n2, n3);
            return;
        }
        di.a_f4_Lg_.a_m10_PBIIRV(this.a_f0_B, n2, n3);
    
  }
}

JavaRegistry.set("dx", dx);
JavaRegistry.set("dx", dx);
try { if (typeof dx.__clinit === 'function') dx.__clinit(); } catch (e) { console.warn('clinit dx', e); }

globalThis.dx = dx;
