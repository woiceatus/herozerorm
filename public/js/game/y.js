/** Transpiled from y */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class y extends (JavaRegistry.get("bp") || class {}) {
  c = new Int8Array([2, 4, 2]);
  y(n2) {

        /*super*/(n2, bp.g_f0_B, 4, bp.f_f0_B);
        this.j = 0;
        let by2 = di.b_f4_B;
        for (let by3 = 0; by3 < by2; by3 = (by3 + 1)) {
            this.j = (this.j + (do.g_m5_PBRZ? 4 : 2));
        }
        this.j = (this.j / 4);
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            let y2 = this;
            if {
                y2.a_f2_Ldo_.a_m6_PRV();
                y2.a_f2_Ldo_.i_m1_PRV();
                y2.h_f1_Z = false;
            }
            this.a_f1_Ln_.a_f2_B = 3;
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if {
            if ((n2 == 1 || n3 == 50) && this.e_f0_I == 1) {
                this.e_f1_Z = false;
                this.f_f1_Z = true;
            } else if (!this.a_m5_PIIBRZ(n2, n3, 3)) {
                let true = null;
            }
            let true = null;
        }
        if {
            if (n2 == 1 || n2 == 8 || n3 == 50 || n3 == 53) {
                this.a_f2_B = (bp.a_f0_AB[this.e_f0_I] - 2);
                this.f_f1_Z = false;
            } else {
                this.b_m1_PIIBRZ(n2, n3, 5);
            }
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.e_f0_I == 2) {
                let y3 = this;
                n3 = y3.a_m5_PBZRB(y3.a_f2_B, false);
                let by2 = di.a_f9_Ldo_.a_m2_PBRB;
                if (y3.i_f1_Z && by2 < y3.k) {
                    y3.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(24, 25));
                } else {
                    y3.a_m11_PBBZZRV(n3, by2, true, true);
                }
                let true = null;
            }
            if (this.e_f0_I == 0) {
                return this.a_m13_PZBRZ(false, this.c[this.e_f0_I]);
            }
            let y4 = this;
            n3 = y4.a_f2_B < y4.c[y4.e_f0_I] ? 1 : 0;
            let by3 = (n3 != 0 ? y4.a_f2_B : y4.a_f2_B - y4.c[y4.e_f0_I]);
            let by4 = y4.a_m5_PBZRB(by3, n3 != 0);
            n3 = by4;
            if (by4 >= 0 && (by3 = y4.a_f2_Ldo_.b_m13_PBRB) >= 0) {
                if (y4.a_f2_B < y4.c[y4.e_f0_I]) {
                    if (y4.i_f1_Z && by3 < y4.k) {
                        y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m2_PIIIRAAB(24, 28, 25));
                    } else {
                        y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(28, 25));
                    }
                } else if (y4.i_f1_Z && by3 < y4.k) {
                    if (by3 == 0) {
                        y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(24, 25));
                    } else {
                        y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m4_PAIRAAB(new Int32Array([24, 33, 34, 35, 36, 25])));
                    }
                } else if (by3 == 0) {
                    y4.a_m11_PBBZZRV(n3, by3, false, true);
                } else {
                    y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m4_PAIRAAB(new Int32Array([33, 34, 35, 36, 25])));
                }
            }
            let true = null;
        }
        if (this.a_m12_PIIIZRZ(n2, n3, bp.a_f0_AB[this.e_f0_I], this.e_f0_I == 1)) {
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
            if (this.e_f0_I == 2) {
                by2 = this.a_m5_PBZRB(this.a_f2_B, false);
                if (by3 == 0) {
                    this.c;
                    return;
                }
                this.a_m11_PBBZZRV(by2, this.a_f2_Ldo_.a_m2_PBRB, true, true);
                return;
            }
            by2 = this.a_f2_B < this.c[this.e_f0_I] ? 1 : 0;
            let by4 = this.a_f2_B;
            if (by2 == 0) {
                by4 = (by4 - this.c[this.e_f0_I]);
            }
            by2 = this.a_m5_PBZRB(by4, by2 != 0);
            if (this.e_f0_I == 0) {
                by4 = di.a_f9_Ldo_.a_m2_PBRB;
                this.a_m14_PBBBBZRV(by3, by2, by4, this.c[this.e_f0_I], true);
                return;
            }
            by4 = this.a_f2_Ldo_.b_m13_PBRB;
            this.b_m4_PBBBBZRV(by3, by2, by4, this.c[this.e_f0_I], true);
        }
    
  }
  c(by2) {

        this.i();
        if (this.e_f0_I != 1) {
            di.a_f9_Ldo_.a_m3_PBBRV(di.b_f4_B, by2);
            return;
        }
        di.a_f9_Ldo_.a_m5_PIRV;
    
  }
  a_m2_PLcm_RV(cm2) {

        let n2 = this.b_ + 13;
        let n3 = n2 + 16;
        this.a_m6_PLcm_IIBRV(cm2, n2, n3, this.c[this.e_f0_I]);
        if (this.e_f0_I == 0) {
            for (n2 = 0; n2 < 2; ++n2) {
                if (di.b_f5_AB[n2] <= 0) continue;
                n.b_m6_PLcm_IIIIIRV(cm2, 1 + (n2 << 1), this.a_ + 1 + n2 * (d.e_ >> 1), n3 + 10, 4, 0);
            }
        }
        if (this.e_f0_I == 2) {
            for (n2 = 1; n2 < 4; ++n2) {
                for (let i2 = 0; i2 < bp.f_f0_B; ++i2) {
                    let n4 = n3 + 10 + n2 * 29;
                    let n5 = this.a_ + 2 + i2 * (d.e_ >> 1);
                    let cm3 = cm2;
                    let y2 = this;
                    bp.a_m7_PLcm_IIBBBBIRV(cm3, n5, n4, y2.h_f0_B, 14, y2.i_f0_B, 3, 15723216);
                }
            }
        }
        if (this.e_f0_I == 1) {
            this.a_m9_PLcm_BRV(cm2, 5);
        }
    
  }
  a_m3_PBRZ(by2) {

        if (this.e_f0_I == 0) {
            return di.a_m16_PBZRZ(by2, true);
        }
        return this.a_f2_Ldo_.f_m3_PBRZ;
    
  }
  a_m4_PBRB(by2) {

        if (this.e_f0_I == 1) {
            return this.a_f2_Ldo_.b_m13_PBRB;
        }
        return this.a_f2_Ldo_.a_m2_PBRB;
    
  }
  a_m5_PBZRB(by2, bl2) {

        let var2_8 = null;
        if (bl2 && this.e_f0_I != 2) {
            return this.b[by2];
        }
        let by3 = by2;
        switch {
            case 0: {
                let by4 = (by2 + 4);
                break;
            }
            case 1: {
                let n2 = bp.a_f0_AB[this.e_f0_I] - this.c[this.e_f0_I];
                let by5 = (by2 + this.j * n2);
                break;
            }
            case 2: {
                let by6 = (by2 + 10);
            }
        }
        let var2_8 = null;
    
  }
  b_m0_PBRB(by2) {

        if (this.e_f0_I != 1) {
            by2 = (by2 - 4);
        }
        let by2 = null;
    
  }
  a_m6_PRV() {

        this.b_f2_B = bp.g_f0_B = bp.a_f0_AB[this.e_f0_I];
        this.d_f0_B = 4;
        this.b = this.e_f0_I == 0 ? di.b_f5_AB : this.a_f2_Ldo_.a_f1_AB;
        this.a_f1_Lch_ = this.e_f0_I == 1 ? ax.c : ax.b;
        this.g_f1_Z = false;
    
  }
  g() {

        ax.b = new ch("/t/s" + di.b_f4_B);
        ax.c = new ch("/t/ps");
    
  }
  b_m1_PBBRV(by2, by3) {

        this.a_f2_Ldo_.a_m34_PIBRV(by2, by3);
        this.h_f1_Z = true;
    
  }
  h() {

        this.a_f2_Ldo_.l_m0_PIRV;
        this.h_f1_Z = true;
    
  }
  a_m7_PLcm_BIIRV(cm2, by2, n2, n3) {

        bs.a_m8_PIIIRV(by2 + 4, n2, n3);
    
  }
}

JavaRegistry.set("y", y);
JavaRegistry.set("y", y);
try { if (typeof y.__clinit === 'function') y.__clinit(); } catch (e) { console.warn('clinit y', e); }

globalThis.y = y;
