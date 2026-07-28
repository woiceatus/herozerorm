/** Transpiled from bp */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bp extends (JavaRegistry.get("b") || class {}) {
  static a_f0_AB = new Int8Array([8, 8, 2]);
  static f_f0_B = 2;
  static g_f0_B = (4 * bp.f_f0_B);
  h_f0_B = ((f.b >> 1) - 4);
  i_f0_B = 25;
  e_f0_I = 0;
  e_f1_Z = true;
  f_f1_Z = false;
  g_f1_Z = null;
  j = null;
  a_f1_Lch_ = null;
  h_f1_Z = null;
  i_f1_Z = null;
  b = null;
  k = null;
  a_f2_Ldo_ = di.a_f9_Ldo_;
  /* skip field: abstract void g(); */
  /* skip field: abstract void a_m0_PRV(); */
  /* skip field: abstract byte a_m1_PBZRB(byte var1, boolean var2); */
  /* skip field: abstract byte a_m2_PBRB(byte var1); */
  /* skip field: abstract boolean a_m3_PBRZ(byte var1); */
  /* skip field: protected abstract void c(byte var1); */
  /* skip field: protected abstract void b_m0_PBBRV(byte var1, byte var2); */
  /* skip field: protected abstract void h(); */
  /* skip field: protected abstract void a_m4_PLcm_BIIRV(cm var1, byte var2, int var3, int var4); */
  bp(n2, by2, by3, by4) {

        /*super*/(n2, by2, 4, by4);
        this.i_f1_Z = this.a_f2_Ldo_.b_f3_S > 0;
        this.g_f1_Z = true;
        this.b_f3_Z = true;
        this.h_f1_Z = false;
        this.k = 3;
        this.g();
    
  }
  a_m5_PIIBRZ(n2, n3, by2) {

        if (n.h(n2, n3)) {
            this.e_f0_I = (this.e_f0_I + by2 - 1) % by2;
            this.g_f1_Z = true;
        } else if (n.i(n2, n3)) {
            this.e_f0_I = (this.e_f0_I + 1) % by2;
            this.g_f1_Z = true;
        } else if (n2 == 6 || n2 == 8 || n3 == 56 || n3 == 53) {
            this.a_f2_B = 0;
            this.e_f1_Z = false;
        } else {
            let false = null;
        }
        let true = null;
    
  }
  b_m1_PIIBRZ(n2, n3, by2) {

        if (n.h(n2, n3)) {
            this.j = ((this.j + by2 - 1) % by2);
        } else if (n.i(n2, n3)) {
            this.j = ((this.j + 1) % by2);
        } else if (n2 == 6 || n3 == 56) {
            this.f_f1_Z = false;
            this.e_f1_Z = true;
        } else {
            let false = null;
        }
        let true = null;
    
  }
  a_m6_PLcm_IIBRV(cm2, n2, n3, by2) {

        let n4 = null;
        let n5 = null;
        if {
            this.a_m0_PRV();
        }
        by2 = (by2 >> 1);
        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        let n6 = a.c - 70;
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(n6, n2, 140, 16);
        if (!this.e_f1_Z) {
            n.a_m14_PLcm_IIIIZRV(cm2, n6 - 4, n2 + 7, 148, 0, false);
        }
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n2 + 1, ax.a_f1_Lch_.a_m0_PIRAB(20 + this.e_f0_I), 0, 1);
        cm2.a_m2_PIRV(15723216);
        cm2.e(this.a_, n3 + 1, this.a_ + d.e_ - 1, n3 + 1);
        cm2.e(this.a_, n3 + 120, this.a_ + d.e_ - 1, n3 + 120);
        for (n6 = 0; n6 < by2; ++n6) {
            for (n5 = 0; n5 < bp.f_f0_B; ++n5) {
                n2 = (n5 + n6 * bp.f_f0_B);
                n2 = this.a_m1_PBZRB(n2, true);
                this.a_m8_PLcm_IIBZRV(cm2, this.a_ + 2 + n5 * (d.e_ >> 1), n3 + 10 + n6 * 29, n2, true);
            }
        }
        if (this.e_f0_I != 2) {
            n6 = n3 + 1 + by2 * 30;
            cm2.a_m2_PIRV(3550755);
            cm2.a_m4_PIIIIRV(this.a_, n6, d.e_, 30 * (4 - by2) - 1);
            n5 = 4 - by2;
            for (n6 = 0; n6 < n5; ++n6) {
                for (n4 = 0; n4 < bp.f_f0_B; ++n4) {
                    n2 = (n4 + n6 * bp.f_f0_B);
                    n2 = this.a_m1_PBZRB(n2, false);
                    this.a_m8_PLcm_IIBZRV(cm2, this.a_ + 2 + n4 * (d.e_ >> 1), n3 + 10 + (n6 + by2) * 29, n2, this.a_m3_PBRZ(n2));
                }
            }
        }
        if {
            n6 = this.a_ + d.e_ - 30 - 1;
            n4 = this.b_ + 174 - 10 - 1;
            cm2.a_m2_PIRV(3550755);
            cm2.a_m4_PIIIIRV(n6, n4, 30, 10);
            cm2.a_m1_PLcg_IIIRV(e.c_f1_ALcg_[1], n6 + 4, n4 + 1, 20);
            n.b_m6_PLcm_IIIIIRV(cm2, this.a_f2_Ldo_.b_f3_S, n6 + 30 - 4, n4 + 1, 8, 0);
        }
    
  }
  b_m2_PLcm_RV(cm2) {

        let n2 = this.b_ + 13;
        if {
            let n3 = a.c - 70;
            n.a_m14_PLcm_IIIIZRV(cm2, n3 - 4, n2 + 5, 148, this.e_f1_Z ? n.b_f0_AI[this.e_f0_B] : 0, false);
            cm2.d_m0_PIIIIRV(n3 + 1, n2 + 1, 137, 13);
            return;
        }
        if {
            let n4 = this.a_ + 1;
            let n5 = this.b_ + 174 - 14 - 2;
            cm2.a_m2_PIRV(n.b_f0_AI[this.e_f0_B]);
            cm2.d_m0_PIIIIRV(n4, n5, 60, 14);
            return;
        }
        let n6 = this.a_f2_B / bp.f_f0_B;
        let n7 = this.a_f2_B % bp.f_f0_B;
        let n8 = n7 == 0 ? 0 : 4;
        n7 = this.a_ + 2 + (n7 * this.h_f0_B + n8);
        n2 = n2 + 16 + 10 + n6 * 29;
        a_m7_PLcm_IIBBBBIRV(cm2, n7, n2, this.h_f0_B, 14, (this.i_f0_B + 2), 4, n.b_f0_AI[this.e_f0_B]);
    
  }
  static a_m7_PLcm_IIBBBBIRV(cm2, n2, n3, by2, by3, by4, by5, n4) {

        by3 = (n2 + (by2 - by4 >> 1));
        let n5 = n3 + 14 - 1;
        cm2.a_m2_PIRV;
        by2 = (by2 - 1);
        n4 = by4 - 1;
        cm2.e(n2, n3, n2 + by2, n3);
        cm2.e(by3, n5 + by5, by3 + n4, n5 + by5);
        for (let i2 = 0; i2 < 2; ++i2) {
            cm2.e(n2 + i2 * by2, n3, n2 + i2 * by2, n5);
            cm2.e(by3 + i2 * n4, n5, by3 + i2 * n4, n5 + by5 - 1);
        }
        cm2.e(n2, n5, by3, n5);
        cm2.e(by3 + by4, n5, n2 + by2, n5);
    
  }
  a_m8_PLcm_IIBZRV(cm2, n2, n3, by2, by3) {

        let by4 = null;
        let n4 = n2 + (this.h_f0_B - this.i_f0_B >> 1);
        let n5 = n3 + 14;
        if (by2 == -2) {
            a_m7_PLcm_IIBBBBIRV(cm2, n2, n3, this.h_f0_B, 14, this.i_f0_B, 3, 0);
            return;
        }
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(n2, n3, this.h_f0_B, 14);
        cm2.a_m4_PIIIIRV(n4, n5, this.i_f0_B, 3);
        if (by2 < 0) {
            return;
        }
        let by5 = this.a_m2_PBRB;
        if (by5 > 0) {
            by4 = this.k == 3 ? 7 : 4;
            cm2.a_m2_PIRV(by3 != 0 ? 16755968 : 9531436);
            for (by3 = 0; by3 < by5; by3 = (by3 + 1)) {
                cm2.a_m4_PIIIIRV(n4 + 1 + by3 * (by4 + 1), n5, by4, 2);
            }
        } else {
            if (by5 == -1) {
                cm2.a_m1_PLcg_IIIRV(e.h_f2_Lcg_, n2 + (this.h_f0_B >> 1), n3 + 1, 17);
                return;
            }
            if (by5 < -1) {
                return;
            }
        }
        cm2.a_m2_PIRV(by5 > 0 ? 0xFFFFFF : 0x7F7F7F);
        by4 = this.b_m3_PBRB;
        by2 = (n2 + (this.h_f0_B >> 1));
        if (this.e_f0_I == 0) {
            this.a_m4_PLcm_BIIRV(cm2, by4, n2 + 1, n3 + 1);
            a.a_m1_PLcm_RV;
            by2 = (by2 + 7);
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, by2, n3, this.a_f1_Lch_.a_m0_PIRAB(by4 << 1), 1, 1);
    
  }
  a_m9_PLcm_BRV(cm2, by2) {

        let n2 = this.a_ + 1;
        let n3 = this.b_ + 174 - 14 - 1;
        cm2.a_m2_PIRV(3550755);
        cm2.a_m4_PIIIIRV(n2, n3, 60, 14);
        cm2.a_m2_PIRV(14597755);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 29, n3, e.b_f0_Lch_.a_m0_PIRAB(4), 0);
        this.a_m0_PLcm_IIIIIRV(cm2, n2 + 8, n3 + 1, this.j + 1, by2, 4);
        n.a_m14_PLcm_IIIIZRV(cm2, n2 + 2, n3 + 4, 56, 0xFFFFFF, false);
    
  }
  a_m10_PAABRV(byArray) {

        let n2 = this.e_f0_I == 2 ? (this.a_f2_B % 2 == 1 ? 8 : 4) : (this.a_f2_B % 2 == 0 ? 8 : 4);
        this.b_f1_Ln_ = new dj(this, byArray, n2);
    
  }
  a_m11_PBBZZRV(by2, by3, bl2, bl3) {

        if {
            by2 = (by2 - 4);
        }
        this.b_f1_Ln_ = new dz(this, by2, this.e_f0_I, by3, bl3 ? 3 : 5);
    
  }
  b_m3_PBRB(by2) {

        let by2 = null;
    
  }
  a_m12_PIIIZRZ(n2, n3, n4, bl2) {

        if (n3 == 50 || n2 == 1) {
            if (this.a_f2_B == 0 || this.a_f2_B == 1) {
                this.e_f1_Z = true;
            } else {
                this.a_f2_B = (this.a_f2_B - 2);
            }
            let true = null;
        }
        if (n3 == 56 || n2 == 6) {
            if (this.a_f2_B >= n4 - 2) {
                if {
                    this.f_f1_Z = true;
                } else {
                    this.e_f1_Z = true;
                }
            } else {
                this.a_f2_B = (this.a_f2_B + bp.f_f0_B);
            }
            let true = null;
        }
        let false = null;
    
  }
  a_m13_PZBRZ(bl2, by2) {

        let n2 = null;
        let by3 = this.a_f2_B < by2 ? 1 : 0;
        let by4 = (by3 != 0 ? this.a_f2_B : this.a_f2_B - by2);
        if ((by3 = this.a_m1_PBZRB(by4, by3 != 0)) < 0) {
            let true = null;
        }
        by4 = this.a_m2_PBRB;
        if (by4 < 0) {
            let true = null;
        }
        let n3 = n2 = bl2 ? 2 : 0;
        if (this.a_f2_B < by2) {
            if (this.i_f1_Z && by4 < this.k) {
                this.a_m10_PAABRV(ax.a_f1_Lch_.a_m2_PIIIRAAB(24, 28, 25));
            } else {
                this.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(28, 25));
            }
        } else if (this.i_f1_Z && by4 < this.k) {
            if (by4 == 0) {
                this.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(24, 25));
            } else {
                this.a_m10_PAABRV(ax.a_f1_Lch_.a_m3_PIIIIRAAB(24, n2 + 29, n2 + 30, 25));
            }
        } else if (by4 == 0) {
            this.a_m11_PBBZZRV(by3, by4, !bl2, !bl2);
        } else {
            this.a_m10_PAABRV(ax.a_f1_Lch_.a_m2_PIIIRAAB(n2 + 29, n2 + 30, 25));
        }
        let true = null;
    
  }
  a_m14_PBBBBZRV(by2, by3, by4, by5, bl2) {

        if (this.a_f2_B < by5) {
            if (this.i_f1_Z && by4 < this.k) {
                if (by2 == 0) {
                    this.c;
                    return;
                }
                if (by4 > 0 && by2 == 1) {
                    di.a_m15_PBZRV(this.a_f2_B, bl2);
                    return;
                }
                this.a_m11_PBBZZRV(by3, by4, bl2, bl2);
                return;
            }
            if (by2 == 0) {
                di.a_m15_PBZRV(this.a_f2_B, bl2);
                return;
            }
            this.a_m11_PBBZZRV(by3, by4, bl2, bl2);
            return;
        }
        if (this.i_f1_Z && by4 < this.k) {
            if (by2 == 0) {
                this.c;
                return;
            }
            if (by4 > 0 && (by2 == 1 || by2 == 2)) {
                di.d_m2_PIBRV(by2 - 1 + (bl2 ? 0 : 2), by3);
                return;
            }
            this.a_m11_PBBZZRV(by3, by4, bl2, bl2);
            return;
        }
        if (by2 == 0 || by2 == 1) {
            di.d_m2_PIBRV(by2 + (bl2 ? 0 : 2), by3);
            return;
        }
        this.a_m11_PBBZZRV(by3, by4, bl2, bl2);
    
  }
  b_m4_PBBBBZRV(by2, by3, by4, by5, bl2) {

        if (this.a_f2_B < by5) {
            if (this.i_f1_Z && by4 < this.k) {
                if (by2 == 0) {
                    this.c;
                    return;
                }
                if (by2 == 1) {
                    this.h();
                    return;
                }
                this.a_m11_PBBZZRV(by3, by4, false, bl2);
                return;
            }
            if (by2 == 0) {
                this.h();
                return;
            }
            this.a_m11_PBBZZRV(by3, by4, false, bl2);
            return;
        }
        if (this.i_f1_Z && by4 < this.k) {
            if (by2 == 0) {
                this.c;
                return;
            }
            if (by4 > 0 && by2 > 0 && by2 <= by5) {
                this.b_m0_PBBRV((by2 - 1), by3);
                return;
            }
            this.a_m11_PBBZZRV(by3, by4, false, bl2);
            return;
        }
        if (by2 >= 0 && by2 <= by5 - 1) {
            this.b_m0_PBBRV(by2, by3);
            return;
        }
        this.a_m11_PBBZZRV(by3, by4, false, bl2);
    
  }
  i() {

        this.a_f2_Ldo_.b_f3_S = (this.a_f2_Ldo_.b_f3_S - 1);
        this.i_f1_Z = this.a_f2_Ldo_.b_f3_S > 0;
        this.h_f1_Z = true;
    
  }
}

JavaRegistry.set("bp", bp);
JavaRegistry.set("bp", bp);
try { if (typeof bp.__clinit === 'function') bp.__clinit(); } catch (e) { console.warn('clinit bp', e); }

globalThis.bp = bp;
