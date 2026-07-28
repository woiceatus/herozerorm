/** Transpiled from ce */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ce extends (JavaRegistry.get("bp") || class {}) {
  static c = new Int8Array([4, 6]);
  a = null;
  ce(n2) {

        /*super*/(n2, bp.g_f0_B, 4, bp.f_f0_B);
        this.e_f0_I = 0;
        this.a = this.a_f2_Ldo_.a_m38_PRLo_();
        this.j = 0;
        this.k = 5;
        this.i_f0_B = (this.i_f0_B + 1);
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            if {
                this.h_f1_Z = false;
                this.a_f2_Ldo_.i_m1_PRV();
            }
            this.a_f1_Ln_.a_f2_B = 4;
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if {
            if (n2 == 1 || n3 == 50) {
                this.e_f1_Z = false;
                this.f_f1_Z = true;
            } else if (!this.a_m5_PIIBRZ(n2, n3, 2)) {
                let true = null;
            }
            let true = null;
        }
        if {
            if (n2 == 1 || n2 == 8 || n3 == 50 || n3 == 53) {
                this.a_f2_B = ce.c[this.j];
                this.f_f1_Z = false;
                let true = null;
            }
            return this.b_m1_PIIBRZ(n2, n3, 2);
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.e_f0_I == 0) {
                return this.a_m13_PZBRZ(true, 2);
            }
            let ce2 = this;
            n3 = ce2.a_f2_B < 2 ? 1 : 0;
            let by2 = (n3 != 0 ? ce2.a_f2_B : ce2.a_f2_B - 2);
            let by3 = ce2.a_m3_PBZRB(by2, n3 != 0);
            n3 = by3;
            if (by3 >= 0 && (by2 = ce2.a.b_m1_PBRB) >= 0) {
                if (ce2.a_f2_B < 2) {
                    if (ce2.i_f1_Z && by2 < ce2.k) {
                        ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m2_PIIIRAAB(24, 28, 25));
                    } else {
                        ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(28, 25));
                    }
                } else if (ce2.i_f1_Z && by2 < ce2.k) {
                    if (by2 == 0) {
                        ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(24, 25));
                    } else {
                        ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m4_PAIRAAB(new Int32Array([24, 33, 34, 25])));
                    }
                } else if (by2 == 0) {
                    ce2.a_m11_PBBZZRV(n3, by2, false, false);
                } else {
                    ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m4_PAIRAAB(new Int32Array([33, 34, 25])));
                }
            }
            let true = null;
        }
        if (this.a_m12_PIIIZRZ(n2, n3, ce.c[this.j] + 2, true)) {
            let true = null;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        let true = null;
    
  }
  a_m1_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == 6) {
            by2 = this.a_f2_B < 2 ? 1 : 0;
            let by4 = this.a_f2_B;
            if (by2 == 0) {
                by4 = (by4 - 2);
            }
            by2 = this.a_m3_PBZRB(by4, by2 != 0);
            by4 = this.a_m4_PBRB;
            if (this.e_f0_I == 0) {
                this.a_m14_PBBBBZRV(by3, by2, by4, 2, false);
                return;
            }
            this.b_m4_PBBBBZRV(by3, by2, by4, 2, false);
        }
    
  }
  a_m2_PLcm_RV(cm2) {

        let n2 = this.b_ + 13;
        let n3 = n2 + 16;
        this.a_m6_PLcm_IIBRV(cm2, n2, n3, 2);
        if (this.e_f0_I == 0) {
            for (n2 = 0; n2 < 2; ++n2) {
                if (di.b_f5_AB[n2 + 2] < 0) continue;
                n.b_m6_PLcm_IIIIIRV(cm2, 7 + (n2 << 1), this.a_ + 1 + n2 * (d.e_ >> 1), n3 + 10, 4, 0);
            }
        }
        n2 = this.a_ + 65;
        n3 = this.b_ + 174 - 14 - 1;
        cm2.a_m2_PIRV(0);
        n.c_m3_PLcm_IIIIRV(cm2, n2, n3, 35, 14);
        cm2.a_m2_PIRV(16755968);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 3, n3, g.a_m0_PABABRAB(d.n, ("" + (this.j + 1)).getBytes()), 0);
        this.a_m9_PLcm_BRV(cm2, 2);
    
  }
  a_m3_PBZRB(by2, bl2) {

        if (!bl2) {
            if (by2 < ce.c[this.j]) {
                return (by2 + this.j * ce.c[0]);
            }
            return -2;
        }
        if (this.e_f0_I == 0) {
            return this.b[by2 + 2];
        }
        return this.b[by2];
    
  }
  a_m4_PBRB(by2) {

        if (this.e_f0_I == 1) {
            return this.a.b_m1_PBRB;
        }
        return this.a.a_m2_PBRB;
    
  }
  a_m5_PBRZ(by2) {

        if (by2 < 0) {
            let false = null;
        }
        if (this.e_f0_I == 0) {
            return di.a_m16_PBZRZ(by2, false);
        }
        return this.a.c_m0_PBRZ;
    
  }
  a_m6_PRV() {

        this.b = this.e_f0_I == 0 ? di.b_f5_AB : this.a.a_f1_AB;
        this.a_f1_Lch_ = this.e_f0_I == 1 ? ax.c : ax.b;
        this.g_f1_Z = false;
    
  }
  g() {

        ax.b = new ch("/t/sa");
        ax.c = new ch("/t/sp");
    
  }
  c(by2) {

        this.i();
        by2 = this.e_f0_I == 0 ? (this.a.a_m3_PBRZ? 1 : 0) : (this.a.b_m2_PBRZ? 1 : 0);
        if (by2 != 0) {
            this.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(58));
        }
    
  }
  b(by2, by3) {

        this.a.a_m4_PIBRV(by2, by3);
        this.h_f1_Z = true;
    
  }
  h() {

        this.a.a_m5_PIRV;
        this.h_f1_Z = true;
    
  }
  a_m7_PLcm_BIIRV(cm2, by2, n2, n3) {

        cm2.a_m1_PLcg_IIIRV(e.g_f1_ALcg_[by2], n2, n3, 20);
    
  }
}

JavaRegistry.set("ce", ce);
JavaRegistry.set("ce", ce);
try { if (typeof ce.__clinit === 'function') ce.__clinit(); } catch (e) { console.warn('clinit ce', e); }

globalThis.ce = ce;
