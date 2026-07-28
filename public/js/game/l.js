/** Transpiled from l */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class l extends (JavaRegistry.get("b") || class {}) {
  constructor(n2, by2, by3, by4) {
    super();

        /*super*/(n2, by2, by3, by4);
    
  }
  a_m0_PLcm_ZZZZRI(cm2, bl2, bl3, bl4, bl5) {

        return this.a_m1_PLcm_ZZZZZRI(cm2, false, true, true, false, false);
    
  }
  a_m1_PLcm_ZZZZZRI(cm2, bl2, bl3, bl4, bl5, bl6) {

        let var2_4 = null;
        let n2 = null;
        let n3 = null;
        let n4 = null;
        let n5 = null;
        let var3_7 = null;
        let var6_17 = null;
        let var5_14 = null;
        let var4_10 = null;
        let var3_5 = null;
        this.a_m7_PLcm_ZZZZRV(cm2, bl2, var3_5, var4_10, var5_14);
        e.e_f2_Lcg_ = null;
        e.a_f6_Lcg_ = null;
        let n6 = this.b_ + 13;
        let n7 = n6 + 1;
        if (var6_17 != false) {
            var3_7 += 13;
        }
        a_m2_PLcm_BIIIIZZRV(cm2, di.b_f4_B, a.c, var3_7, n.a_f0_AI[di.b_f4_B], 15723216, true, true);
        cm2.a_m2_PIRV(0);
        let n8 = this.a_ + 12;
        let n9 = 4;
        if (var6_17 != false) {
            n5 = a.c;
            n4 = 1;
        }
        let n10 = n6;
        if (var6_17 != false) {
            n3 = n6 + 28;
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, n5, n6, e.d_f0_Lch_.a_m0_PIRAB(0), 1, n4);
        if (var6_17 == false) {
            n2 = this.a_ + d.e_ - 30 + 7;
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, (n2 - 10), n3, e.d_f0_Lch_.a_m0_PIRAB(1 + di.b_f4_B), 1, 1);
        cm2.a_m2_PIRV(15723216);
        cm2.e(this.a_, (var2_4 += 13), this.a_ + d.e_ - 1, var2_4);
        if (var6_17 != false) {
            cm2.e(this.a_, (var2_4 + 13), this.a_ + d.e_ - 1, (var2_4 + 13));
        }
        return (var2_4 + true);
    
  }
  static a_m2_PLcm_BIIIIZZRV(cm2, by2, n2, n3, n4, n5, bl2, bl3) {

        let n6 = n2 - 15 - 1;
        if {
            cm2.a_m2_PIRV;
            cm2.d_m0_PIIIIRV(n6 + 1, n3 - 1, 27, 13);
            cm2.d_m0_PIIIIRV(n6, n3, 29, 11);
        }
        cm2.a_m2_PIRV;
        n.c_m3_PLcm_IIIIRV(cm2, n6 + 1, n3, 28, 12);
        cm2.a_m1_PLcg_IIIRV(bl3 ? e.d_f1_ALcg_[by2] : e.h_f2_Lcg_, n2, n3 + 1, 17);
    
  }
  l(n2, by2) {

        /*super*/(n2, by2);
    
  }
  a_m3_PLcm_IIZRI(cm2, n2, n3, bl2) {

        let n4 = null;
        let n5 = this.b_f2_B;
        let n6 = this.b_ + 3;
        let n7 = a.c - (n3 >> 1);
        let n8 = a.c + (bl2 ? 5 : 0);
        let n9 = n6 = n6 + 24 + 4;
        for (n4 = 0; n4 < n5; ++n4) {
            let by2 = this.a_f2_B;
            cm2.a_m2_PIRV(n4 != by2 ? 7027456 : 0x810000);
            n.c_m3_PLcm_IIIIRV(cm2, n7, n9, n3, 14);
            cm2.a_m2_PIRV(n4 != by2 ? 3550755 : 0x660000);
            cm2.a_m4_PIIIIRV(n7 + 1, n9 + 1, n3 - 2, 12);
            n9 += 15;
        }
        for (n4 = n5; n4 < 8; ++n4) {
            let n10 = 14;
            let n11 = n3;
            let n12 = n9;
            let n13 = n7;
            let cm3 = cm2;
            cm3.a_m2_PIRV(15723216);
            cm3.e(n13 + 1, n12, n13 + n11 - 2, n12);
            cm3.e(n13 + 1, n12 + 14 - 1, n13 + n11 - 2, n12 + 14 - 1);
            cm3.e(n13, n12 + 1, n13, n12 + 14 - 2);
            cm3.e(n13 + n11 - 1, n12 + 1, n13 + n11 - 1, n12 + 14 - 2);
            n9 += 15;
        }
        if (n2 >= 0) {
            n9 = n6 + 1;
            for (n4 = 0; n4 < n5; ++n4) {
                if (n4 != this.a_f2_B) {
                    if (!(bl2 && (n4 == -1 && eb.f_f2_Z || n4 == -2 && !ax.h_f0_Z || n4 == 4 && !ax.e))) {
                        cm2.a_m2_PIRV(12630160);
                    }
                    ac.a_m2_PLcm_IIABIIRV(cm2, n8, n9, ax.a_f1_Lch_.a_m0_PIRAB(n2 + n4), 0, 1);
                    if {
                        ac.a_m2_PLcm_IIABIIRV(cm2, n7 + 5, n9, ("" + (n4 == 9 ? 0 : n4 + 1) + ".").getBytes(), 0, 4);
                    }
                }
                if {
                    if (n4 == 0 && di.a_f9_Ldo_.a_f8_S > 0) {
                        if (this.d_ < 0) {
                            this.d_ = 10;
                        }
                        if {
                            cm2.a_m1_PLcg_IIIRV(e.c_f1_ALcg_[0], n8 + 50, n9 + 2, 20);
                        }
                    } else if ((n4 == 3 || n4 == 4 && ax.e) && di.a_f9_Ldo_.b_f3_S > 0) {
                        if (this.d_ < 0) {
                            this.d_ = 10;
                        }
                        if {
                            cm2.a_m1_PLcg_IIIRV(e.c_f1_ALcg_[1], n8 + 50, n9 + 2, 20);
                        }
                    }
                }
                n9 += 15;
            }
            cm2.a_m2_PIRV(0xFFFFFF);
            n9 = n6 + 1 + 15 * this.a_f2_B;
            ac.a_m2_PLcm_IIABIIRV(cm2, n8, n9, ax.a_f1_Lch_.a_m0_PIRAB(n2 + this.a_f2_B), 0, 1);
            if {
                ac.a_m2_PLcm_IIABIIRV(cm2, n7 + 5, n9, ("" + (this.a_f2_B == 9 ? 0 : this.a_f2_B + 1) + ".").getBytes(), 0, 4);
            }
        }
        let n6 = null;
    
  }
}

JavaRegistry.set("l", l);
JavaRegistry.set("l", l);
try { if (typeof l.__clinit === 'function') l.__clinit(); } catch (e) { console.warn('clinit l', e); }

globalThis.l = l;
