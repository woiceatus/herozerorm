/** Transpiled from bb */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bb extends (JavaRegistry.get("br") || class {}) {
  a = new Int8Array(9);
  m = 0;
  bb(dd2, byArray) {

        /*super*/(dd2, byArray, '\u0000');
        this.c_f0_B = 1;
        this.d_f0_B = 10;
        this.b_f2_B = 10;
        this.a_m0_PIRV(this.l + 3);
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            let bb2 = this;
            n3 = 0;
            for (let i2 = bb2.a.length - 1; i2 >= 0; --i2) {
                n3 = n3 * 10 + bb2.a[i2];
            }
            let n4 = n3;
            if (n4 > de.f_f0_I) {
                this.b_f1_Ln_ = new br(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(25), '\u0000');
            } else {
                (this.a_f1_Ln_).e = n4;
                this.a_f1_Ln_.c_m0_PRV();
            }
            let true = null;
        }
        if (n3 == 52 || n2 == 2) {
            ++this.m;
            if (this.m > 8) {
                this.m = 0;
            }
            this.a_f2_B = this.a[this.m];
            let true = null;
        }
        if (n3 == 54 || n2 == 5) {
            --this.m;
            if (this.m < 0) {
                this.m = 8;
            }
            this.a_f2_B = this.a[this.m];
            let true = null;
        }
        return this.e(n2, n3);
    
  }
  e(n2, n3) {

        if (n3 == 50 || n2 == 1) {
            this.a_m5_PBRV(4);
            this.a[this.m] = this.a_f2_B;
            let true = null;
        }
        if (n3 == 56 || n2 == 6) {
            this.a_m5_PBRV(3);
            this.a[this.m] = this.a_f2_B;
            let true = null;
        }
        let false = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        super.a_m2_PLcm_RV;
        let n2 = this.f_f1_I + 25;
        let n3 = (this).e + 20;
        n.a_m15_PLcm_ABIIIRV(cm2, this.a, n3, n2 + 16, 8);
        n.a_m14_PLcm_IIIIZRV(cm2, n3 - 8, n2 + 19, 86, 3550755, false);
        n.c_m4_PLcm_IIIRV(cm2, n3 + 2 + (8 - this.m << 3), n2 + 12, 12);
        ac.a_m0_PLcm_IIABIRV(cm2, (this).e + 10, n2 + 33, rpg.e.b_f0_Lch_.a_m0_PIRAB(31), 0);
        this.b_m5_PLcm_IIIRV(cm2, (this).e + 105, n2 + 34, de.f_f0_I);
    
  }
}

JavaRegistry.set("bb", bb);
JavaRegistry.set("bb", bb);
try { if (typeof bb.__clinit === 'function') bb.__clinit(); } catch (e) { console.warn('clinit bb', e); }

globalThis.bb = bb;
