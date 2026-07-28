/** Transpiled from n */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class n extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_AI = new Int32Array([0x660000, 0x3F3F3F, 0x996600, 39168, 39321, 0x990099]);
  static b_f0_AI = new Int32Array([0x990000, 0xFF0000]);
  a_f1_Ln_ = null;
  b_f1_Ln_ = null;
  a_f2_B = null;
  b_f2_B = null;
  c_f0_B = null;
  d_f0_B = null;
  e_f0_B = null;
  e_f1_Z = null;
  a_f3_Z = null;
  b_f3_Z = null;
  a_ = null;
  b_ = null;
  static b_f4_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/sks/ok.png");
  static a_f4_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/sks/back.png");
  static c_f1_Z = false;
  static c_ = 0;
  d_ = -1;
  d_f1_Z = false;
  static a_m0_PLcm_IRV(cm2, n2) {

        let n3 = cm2.a_m6_PRI();
        let n4 = cm2.b_m2_PRI();
        let n5 = cm2.c_m1_PRI();
        let n6 = cm2.d_m1_PRI();
        cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
        try {
            if ((n2 & 1) != 0) {
                cm2.a_m1_PLcg_IIIRV(n.b_f4_Lcg_, 0, a.b_f0_I, 36);
            }
            if ((n2 & 2) != 0) {
                cm2.a_m1_PLcg_IIIRV(n.a_f4_Lcg_, a.a_f0_I, a.b_f0_I, 40);
            }
            if {
                cm2.a_m1_PLcg_IIIRV(e.k_f1_Lcg_, a.a_f0_I < 240 ? -32 : 0, a.b_f0_I, 36);
            }
        }
        catch (exception) {
            let exception2 = exception;
            exception
        }
        cm2.b_m0_PIIIIRV(n3, n4, n5, n6);
    
  }
  /* skip field: abstract boolean a_m1_PIIRZ(int var1, int var2); */
  /* skip field: protected abstract void a_m2_PLcm_RV(cm var1); */
  n(n2, by2, by3, by4) {

        this.a_f1_Ln_ = n2;
        this.b_f1_Ln_ = null;
        this.e_f1_Z = true;
        this.a_f3_Z = true;
        this.b_f3_Z = false;
        this.b_f2_B = by2;
        this.d_f0_B = by3;
        this.c_f0_B = by4;
        this.a_f2_B = 0;
        this.a_ = a.a_f0_I - d.e_ >> 1;
        this.b_ = a.b_f0_I - 174 >> 1;
    
  }
  n(n2, by2) {

        this(null, 8, 1, 1);
    
  }
  a_m3_PBBRV(by2, by3) {

        this.c_m0_PRV();
    
  }
  c_m0_PRV() {

        this.b_f1_Ln_ = null;
        if (bs.a_m0_PRLbs_() != null) {
            bs.a_m0_PRLbs_();
            bs.e_m1_PRV();
        }
        this.d_m0_PRV();
    
  }
  d_m0_PRV() {

        this.a_f3_Z = true;
        if (this.a_f1_Ln_ != null) {
            this.a_f1_Ln_.d_m0_PRV();
        }
    
  }
  e_m0_PRV() {

        while {
            n2.a_f3_Z = true;
            if (n2.b_f1_Ln_ == null) break;
            let n2 = n2.b_f1_Ln_;
        }
    
  }
  c_m1_PLcm_RV(cm2) {

        if {
            this.e_m0_PRV();
            a.a_f1_Z = false;
        }
        this.d_m1_PLcm_RV;
    
  }
  d_m1_PLcm_RV(cm2) {

        let bl2 = false;
        if (this.d_ >= 0) {
            --this.d_;
            if (this.d_ < 0 && this.b_f1_Ln_ == null) {
                this.a_f3_Z = true;
                let bl3 = this.d_f1_Z = !this.d_f1_Z;
            }
        }
        if {
            this.a_f3_Z = false;
            this.a_m2_PLcm_RV;
            bl2 = true;
        }
        if (this.b_f1_Ln_ == null) {
            if {
                if (!bl2) {
                    this.a_m2_PLcm_RV;
                }
                this.e_f1_Z = false;
            }
            if {
                this.b_m1_PLcm_RV;
            }
        } else {
            this.b_f1_Ln_.d_m1_PLcm_RV;
        }
        if {
            this.e_f0_B = (this.e_f0_B + 1);
            this.b_m0_PRV();
        }
    
  }
  b_m0_PRV() {

        if (this.e_f0_B >= n.b_f0_AI.length) {
            this.e_f0_B = 0;
        }
    
  }
  b_m1_PLcm_RV(cm2) {

    
  }
  a_m4_PLcm_IIIIRV(cm2, n2, n3, n4, n5) {

        cm2.a_m2_PIRV(n.b_f0_AI[this.e_f0_B]);
        cm2.d_m0_PIIIIRV(n2, n3, n4, n5);
    
  }
  b_m2_PIIRZ(n2, n3) {

        if (this.b_f1_Ln_ != null && this.b_f1_Ln_.a_m1_PIIRZ(n2, n3)) {
            let true = null;
        }
        this.a_f3_Z = true;
        let false = null;
    
  }
  c_m2_PIIRZ(n2, n3) {

        if (n3 == 50 || n2 == 1) {
            this.b_m3_PBRV(3);
            let true = null;
        }
        if (n3 == 56 || n2 == 6) {
            this.b_m3_PBRV(4);
            let true = null;
        }
        let false = null;
    
  }
  d_m2_PIIRZ(n2, n3) {

        if (n3 == 52 || n2 == 2) {
            this.b_m3_PBRV(3);
            let true = null;
        }
        if (n3 == 54 || n2 == 5) {
            this.b_m3_PBRV(4);
            let true = null;
        }
        let false = null;
    
  }
  e_m1_PIIRZ(n2, n3) {

        if (n3 == 50 || n2 == 1) {
            this.a_m5_PBRV(3);
            let true = null;
        }
        if (n3 == 56 || n2 == 6) {
            this.a_m5_PBRV(4);
            let true = null;
        }
        let false = null;
    
  }
  a_m5_PBRV(by2) {

        if (by2 == 4) {
            this.a_f2_B = (this.a_f2_B + this.c_f0_B);
            if (this.a_f2_B >= this.b_f2_B) {
                this.a_f2_B = (this.a_f2_B - this.c_f0_B * this.d_f0_B);
                if (this.a_f2_B < 0) {
                    this.a_f2_B = 0;
                    return;
                }
            }
        } else {
            this.a_f2_B = (this.a_f2_B - this.c_f0_B);
            if (this.a_f2_B < 0) {
                this.a_f2_B = (this.c_f0_B * this.d_f0_B + this.a_f2_B);
                if (this.a_f2_B >= this.b_f2_B) {
                    this.a_f2_B = (this.b_f2_B - 1);
                }
            }
        }
    
  }
  static f_m0_PIIRZ(n2, n3) {

        let n2 == 8 || n3 == 53 || n2 == -6;
    
  }
  static g(n2, n3) {

        let n3 == 0 || n2 == -7;
    
  }
  static h(n2, n3) {

        let n2 == 2 || n3 == 52;
    
  }
  static i(n2, n3) {

        let n2 == 5 || n3 == 54;
    
  }
  f_m1_PRV() {

        this.b_f3_Z = true;
        this.e_f0_B = 0;
    
  }
  b_m3_PBRV(by2) {

        if (by2 == 4) {
            this.a_f2_B = (this.a_f2_B + 1);
            if (this.a_f2_B >= this.b_f2_B) {
                this.a_f2_B = 0;
                return;
            }
        } else {
            this.a_f2_B = (this.a_f2_B - 1);
            if (this.a_f2_B < 0) {
                this.a_f2_B = (this.b_f2_B - 1);
            }
        }
    
  }
  static b_m4_PLcm_IIIIRV(cm2, n2, n3, n4, n5) {

        n4 = n4 / 20 + 1;
        n5 = n5 / 20 + 1;
        for (let i2 = 0; i2 < n4; ++i2) {
            for (let i3 = 0; i3 < n5; ++i3) {
                cm2.a_m1_PLcg_IIIRV(e.u, n2 + i2 * 20, n3 + i3 * 20, 20);
            }
        }
    
  }
  static c_m3_PLcm_IIIIRV(cm2, n2, n3, n4, n5) {

        cm2.a_m4_PIIIIRV(n2 + 1, n3, n4 - 2, n5);
        cm2.d_m0_PIIIIRV(n2, n3 + 1, n4 - 1, n5 - 3);
    
  }
  static a_m6_PLcm_IIIIIIRV(cm2, n2, n3, n4, n5, n6, n7) {

        cm2.a_m2_PIRV;
        cm2.d_m0_PIIIIRV(n2, n3 - 1, n4 - 1, n5 - 1);
        cm2.d_m0_PIIIIRV(n2 - 1, n3, n4 + 1, n5 - 3);
        cm2.a_m2_PIRV;
        cm2.a_m4_PIIIIRV(n2, n3, n4, n5 - 2);
    
  }
  a_m7_PLcm_ZZZZRV(cm2, bl2, bl3, bl4, bl5) {

        if {
            this.a_m9_PLcm_ABZZRV(cm2, ax.a_f1_Lch_.a_m0_PIRAB, bl4, bl5);
            return;
        }
        this.a_m9_PLcm_ABZZRV(cm2, null, bl4, bl5);
    
  }
  a_m8_PLcm_ZZABZRV(cm2, bl2, bl3, byArray, bl4) {

        this.a_m9_PLcm_ABZZRV(cm2, null, true, bl4);
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, this.b_ - 1, byArray, 0, 1);
    
  }
  a_m9_PLcm_ABZZRV(cm2, byArray, bl2, bl3) {

        if (a.a_f0_I > 120) {
            cm2.b_m0_PIIIIRV(this.a_ - 2, this.b_ - 2, d.e_ + 4, 178);
            cm2.a_m2_PIRV(0);
            cm2.a_m4_PIIIIRV(this.a_ - 2, this.b_ - 2, d.e_ + 4, 178);
        }
        cm2.b_m0_PIIIIRV(this.a_, this.b_, d.e_, 174);
        if {
            b_m4_PLcm_IIIIRV(cm2, this.a_, this.b_ + 13, d.e_ + 14, 161);
        }
        cm2.a_m2_PIRV(3550755);
        cm2.a_m4_PIIIIRV(this.a_, this.b_, d.e_, 13);
        cm2.a_m2_PIRV(15723216);
        cm2.e(this.a_, this.b_ + 13, this.a_ + d.e_, this.b_ + 13);
        if (byArray != null) {
            cm2.a_m2_PIRV(14597755);
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c, this.b_ + -2, byArray, 0, 1);
        }
        if {
            a_m10_PLcm_IIIZRV(cm2, this.a_ + 1, this.b_ + 1, 1, true);
            a_m10_PLcm_IIIZRV(cm2, this.a_ + d.e_ - 2, this.b_ + 1, 3, false);
        }
    
  }
  static a_m10_PLcm_IIIZRV(cm2, n2, n3, n4, bl2) {

        let n5 = null;
        cm2.a_m2_PIRV(13682856);
        for (let i2 = 0; i2 < 2; ++i2) {
            n5 = n2 + (bl2 ? i2 : -i2);
            cm2.e(n5, n3 + 2 - i2, n5, n3 + 9 - 3 + i2);
        }
        n5 = bl2 ? n2 + 2 : n2 - 9 + 1;
        cm2.a_m4_PIIIIRV(n5, n3, 7, 9);
        b_m6_PLcm_IIIIIRV(cm2, n4, n5 + 1, n3 + 1, 4, 0);
    
  }
  a_m11_PLcm_BZIZRV(cm2, by2, bl2, n2, bl3) {

        let n3 = this.b_ + 16;
        let n4 = (a.a_f0_I - 105 >> 1) - 12;
        for (let i2 = 0; i2 < n2; ++i2) {
            let n5 = null;
            let cgArray = null;
            let cm3 = null;
            cm2.a_m2_PIRV(i2 == by2 ? (bl2 ? 0xFF0000 : 15723216) : 3550755);
            let n6 = n3 + i2 * 13;
            cm2.a_m4_PIIIIRV(n4, n6, 11, 11);
            cm2.e(n4 + 11, n6 + 1, n4 + 11, n6 + 11 - 2);
            if {
                cm3 = cm2;
                cgArray = e.b_f1_ALcg_;
                n5 = i2 + (by2 == i2 ? 3 : 0);
            } else {
                cm3 = cm2;
                cgArray = e.b_f1_ALcg_;
                n5 = by2 == i2 ? 3 : 0;
            }
            cm3.a_m1_PLcg_IIIRV(cgArray[n5], n4 + 1, n6 + 1, 20);
        }
    
  }
  static a_m12_PLcm_IIIRV(cm2, n2, n3, n4) {

        cm2.a_m2_PIRV(15723216);
        cm2.d_m0_PIIIIRV(n2, n3 - 1, d.e_ - 1, n4 + 1);
        cm2.a_m2_PIRV(3550755);
        cm2.a_m4_PIIIIRV(n2, n3, d.e_, n4);
    
  }
  b_m5_PLcm_IIIRV(cm2, n2, n3, n4) {

        let n5 = n.a_m13_PIRI;
        a.a_m1_PLcm_RV;
        cm2.a_m1_PLcg_IIIRV(e.t, n2 - n5, n3, 24);
        b_m6_PLcm_IIIIIRV(cm2, n4, n2, n3, 8, 0);
    
  }
  static a_m13_PIRI(n2) {

        let n3 = 1;
        do {
            n3 += 4;
        } while ((n2 /= 10) != 0);
        let n3 = null;
    
  }
  static a_m14_PLcm_IIIIZRV(cm2, n2, n3, n4, n5, bl2) {

        cm2.a_m2_PIRV;
        for (n5 = 0; n5 < 3; ++n5) {
            cm2.e(n2 + n5, n3 - n5, n2 + n5, n3 + n5);
            cm2.e(n2 + n4 - n5 - 1, n3 - n5, n2 + n4 - n5 - 1, n3 + n5);
        }
    
  }
  static c_m4_PLcm_IIIRV(cm2, n2, n3, n4) {

        for (let i2 = 0; i2 < 3; ++i2) {
            cm2.e(n2 - i2, n3 + i2, n2 + i2, n3 + i2);
            cm2.e(n2 - 2 + i2, n3 + n4 + i2, n2 + 2 - i2, n3 + n4 + i2);
        }
    
  }
  static a_m15_PLcm_ABIIIRV(cm2, byArray, n2, n3, n4) {

        let cg2 = e.r;
        let n5 = cg2.a_m5_PRI() / 10;
        let n6 = cg2.b();
        for (let i2 = 0; i2 < 9; ++i2) {
            cm2.b_m0_PIIIIRV(n2 + i2 * n4, n3, n5, n6);
            cm2.a_m1_PLcg_IIIRV(cg2, n2 + i2 * n4 - byArray[9 - i2 - 1] * n5, n3, 20);
        }
        a.a_m1_PLcm_RV;
    
  }
  static d_m3_PLcm_IIIIRV(cm2, n2, n3, n4, n5) {

        let byArray = new Int8Array(9);
        let cg2 = e.r;
        let n6 = cg2.a_m5_PRI() / 10;
        let n7 = cg2.b();
        let n8 = 0;
        do {
            let by2 = (n2 % 10);
            let n9 = n8;
            n8 = (n8 + 1);
            byArray[n9] = by2;
        } while ((n2 /= 10) != 0);
        for (n2 = 0; n2 < 9; ++n2) {
            cm2.b_m0_PIIIIRV(n3 + n2 * 7, n4, n6, n7);
            cm2.a_m1_PLcg_IIIRV(cg2, n3 + n2 * 7 - byArray[9 - n2 - 1] * n6, n4, 20);
        }
        a.a_m1_PLcm_RV;
    
  }
  static d_m4_PLcm_IIIRV(cm2, n2, n3, n4) {

        b_m6_PLcm_IIIIIRV(cm2, n2, n3 + 8, n4, 8, 0);
        cm2.b_m0_PIIIIRV(n3 + 10, n4, 7, 7);
        cm2.a_m1_PLcg_IIIRV(e.w, n3 + 10, n4, 20);
        cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
    
  }
  static b_m6_PLcm_IIIIIRV(cm2, n2, n3, n4, n5, n6) {

        let cg2 = null;
        let byArray = new Int8Array(9);
        let bl2 = false;
        if (n6 == 0) {
            cg2 = e.r;
        } else {
            cg2 = e.h_f1_ALcg_[n6 - 1];
            bl2 = true;
        }
        let n7 = cg2.a_m5_PRI() / 10;
        let n8 = n7 - 1;
        let n9 = cg2.b();
        let n10 = 0;
        do {
            let by2 = (n2 % 10);
            let n11 = n10;
            n10 = (n10 + 1);
            byArray[n11] = by2;
        } while ((n2 /= 10) != 0);
        n2 = n3;
        if (n5 == 1) {
            n2 = n3 - n10 * n8 / 2;
        } else if (n5 == 8) {
            n2 = n3 - n10 * n8;
        }
        for (n3 = 0; n3 < n10; ++n3) {
            if {
                bs.e_m0_PLcm_RV;
                cm2.c_m0_PIIIIRV(n2 + n3 * n8, n4, n7, n9);
            } else {
                cm2.b_m0_PIIIIRV(n2 + n3 * n8, n4, n7, n9);
            }
            cm2.a_m1_PLcg_IIIRV(cg2, n2 + n3 * n8 - byArray[n10 - n3 - 1] * n7, n4, 20);
        }
        if (n6 == 0) {
            a.a_m1_PLcm_RV;
            return;
        }
        bs.e_m0_PLcm_RV;
    
  }
  static c_m5_PLcm_IIIIIRV(cm2, n2, n3, n4, n5, n6) {

        cm2.a_m2_PIRV;
        cm2.a_m4_PIIIIRV(n2, n3 + 1, n4, n5 - 2);
        cm2.e(n2 + 1, n3, n2 + n4 - 2, n3);
        cm2.e(n2 + 1, n3 + n5 - 1, n2 + n4 - 2, n3 + n5 - 1);
    
  }
  static d_m5_PLcm_IIIIIRV(cm2, n2, n3, n4, n5, n6) {

        cm2.a_m2_PIRV(0xFF0000);
        cm2.e(n2, n3 + 1, n2, n3 + 13 - 2);
        cm2.e(n2 + 40 - 1, n3 + 1, n2 + 40 - 1, n3 + 13 - 2);
        cm2.e(n2 + 1, n3, n2 + 40 - 2, n3);
        cm2.e(n2 + 1, n3 + 13 - 1, n2 + 40 - 2, n3 + 13 - 1);
    
  }
  a_m16_PLcm_IIIABZRV(cm2, n2, n3, n4, byArray, bl2) {

        c_m5_PLcm_IIIIIRV(cm2, n2, n3, n4, 14, bl2 ? 0x660000 : 3550755);
        cm2.a_m2_PIRV(13682856);
        ac.a_m2_PLcm_IIABIIRV(cm2, n2 + (n4 >> 1), n3 + 1, byArray, 0, 1);
    
  }
  e_m2_PLcm_IIIIRV(cm2, n2, n3, n4, n5) {

        if (n5 < 2) {
            return;
        }
        n5 = 60 / n5;
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(n2, n3, 4, 60);
        cm2.a_m2_PIRV(0x7F7F7F);
        cm2.d_m0_PIIIIRV(n2, n3, 4, 60);
        cm2.a_m4_PIIIIRV(n2, n3 + n4 * n5, 4, n5);
        c_m4_PLcm_IIIRV(cm2, n2 + 2, n3 - 4, 66);
    
  }
}

JavaRegistry.set("n", n);
JavaRegistry.set("n", n);
try { if (typeof n.__clinit === 'function') n.__clinit(); } catch (e) { console.warn('clinit n', e); }

globalThis.n = n;
