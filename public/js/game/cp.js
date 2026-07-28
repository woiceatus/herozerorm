/** Transpiled from cp */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cp extends (JavaRegistry.get("n") || class {}) {
  e = 0;
  a = null;
  cp(n2, by2, by3, n3, bl2, byArray) {

        /*super*/(n2, by2, 0, 0);
        let by4 = di.e_f1_I > n3 * 99 ? 99 : (di.e_f1_I / n3);
        this.b_f2_B = (this.b_f2_B < 0 || this.b_f2_B > 99 ? 99 : this.b_f2_B);
        let by5 = by4 = by4 < 0 || by4 > 99 ? 99 : by4;
        if {
            this.b_f2_B = this.b_f2_B > by4 ? by4 : this.b_f2_B;
        }
        this.e = n3;
        this.a = byArray;
        this.a_f2_B = 1;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (n.g(n2, n3)) {
            this.a_f1_Ln_.a_m3_PBBRV(0, 0);
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.a_m3_PBBRV(0, this.a_f2_B);
        } else if (n2 == 1 || n3 == 50) {
            if (this.a_f2_B < this.b_f2_B) {
                this.a_f2_B = (this.a_f2_B + 10);
            }
            if (this.a_f2_B > this.b_f2_B) {
                this.a_f2_B = this.b_f2_B;
            }
        } else if (n2 == 6 || n3 == 56) {
            if (this.a_f2_B == 1) {
                this.a_f2_B = this.b_f2_B;
            } else if (this.a_f2_B > 10) {
                this.a_f2_B = (this.a_f2_B - 10);
            }
        } else if (n2 == 2 || n3 == 52) {
            if (this.a_f2_B > 1) {
                this.a_f2_B = (this.a_f2_B - 1);
            }
        } else if ((n2 == 5 || n3 == 54) && this.a_f2_B < this.b_f2_B) {
            this.a_f2_B = (this.a_f2_B + 1);
        }
        this.d_m0_PRV();
        let true = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        let n2 = 56;
        let cm3 = cm2;
        let n3 = rpg.a.b_f0_I - 56 >> 1;
        let n4 = rpg.a.a_f0_I - 150 >> 1;
        cm3.b_m0_PIIIIRV(n4, n3, 150, 56);
        n.b_m4_PLcm_IIIIRV(cm3, n4, n3, 150, 56);
        cm3.a_m2_PIRV(0);
        cm3.d_m0_PIIIIRV(n4, n3, 150, 56);
        cm3.a_m2_PIRV(15723216);
        cm3.d_m0_PIIIIRV(n4 + 1, n3 + 1, 148, 54);
        let n5 = n3;
        cm2.a_m2_PIRV(0);
        if (this.a != null) {
            ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n5 + 5, this.a, 1, 1);
        }
        n3 = rpg.a.c - 21;
        n.c_m5_PLcm_IIIIIRV(cm2, n3, n5 += 28, 42, 15, 0);
        n.d_m5_PLcm_IIIIIRV(cm2, n3 + 1, n5 + 1, 40, 13, 0xFF0000);
        n.a_m14_PLcm_IIIIZRV(cm2, n3 - 5, n5 + 6, 51, 0, false);
        n.c_m4_PLcm_IIIRV(cm2, rpg.a.c, n5 - 5, 22);
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c + 1, n5 + 1, ("" + this.a_f2_B).getBytes(), 0, 1);
        if (this.e > 0) {
            this.b_m5_PLcm_IIIRV(cm2, rpg.a.c + 40, n5 + 19, this.e * this.a_f2_B);
        }
    
  }
}

JavaRegistry.set("cp", cp);
JavaRegistry.set("cp", cp);
try { if (typeof cp.__clinit === 'function') cp.__clinit(); } catch (e) { console.warn('clinit cp', e); }

globalThis.cp = cp;
