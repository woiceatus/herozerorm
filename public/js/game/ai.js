/** Transpiled from ai */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ai extends (JavaRegistry.get("b") || class {}) {
  f = null;
  a = null;
  b = null;
  c = null;
  d = null;
  e = null;
  ai(n2) {

        /*super*/(n2, 0);
        let n3 = null;
        this.b_f2_B = 0;
        this.a_f2_B = 0;
        let by2 = 0;
        this.a = new Int8Array(63);
        for (n3 = 0; n3 < 35; n3 = ((n3 + 1))) {
            if (di.a_m9_PIRB(n3 + 1) != 1) continue;
            this.a[by2] = n3;
            by2 = (by2 + 1);
        }
        this.f = by2;
        for (n3 = 0; n3 < 28; n3 = ((n3 + 1))) {
            if (di.a_m9_PIRB(n3 + 51) != 1) continue;
            this.a[by2] = n3;
            by2 = (by2 + 1);
        }
        this.b_f2_B = by2;
        this.e = true;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3) || n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = 5;
            this.a_f1_Ln_.c_m0_PRV();
        } else if (this.d_m2_PIIRZ(n2, n3)) {
            this.e = true;
        }
        let true = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        let n2 = null;
        let n3 = null;
        let by2 = this.a_f2_B;
        let ai2 = this;
        if {
            if (ai2.b_f2_B <= 0) {
                ai2.c = ax.a_f1_Lch_.a_m0_PIRAB(62);
            } else {
                n3 = ai2.a[by2];
                if (n3 >= 0) {
                    let ch2 = by2 < ai2.f ? rpg.e.j_f0_Lch_ : rpg.e.k_f0_Lch_;
                    n2 = n3 << 1;
                    ai2.b = ch2.a_m0_PIRAB;
                    ai2.c = ch2.a_m0_PIRAB(n2 + 1);
                    ai2.d = ax.a_f1_Lch_.a_m0_PIRAB(by2 < ai2.f ? 63 : 64);
                    if (by2 >= ai2.f) {
                        switch {
                            case 1: {
                                ai2.a_m2_PBBIABRV(20, 0, 10, rpg.d.g_f0_AB);
                                break;
                            }
                            case 5: {
                                ai2.a_m2_PBBIABRV(19, 16, 10, rpg.d.h_f0_AB);
                                break;
                            }
                            case 15: {
                                ai2.a_m2_PBBIABRV(16, 0, 10, rpg.d.i_f0_AB);
                                ai2.a_m2_PBBIABRV(16, 5, 10, rpg.d.j);
                            }
                        }
                    }
                }
            }
        }
        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        let n4 = (rpg.d.e_ - 96 >> 1) + this.a_;
        let n5 = n2 = this.b_ + 13 + 1;
        n3 = n4;
        let cm3 = cm2;
        let ai3 = this;
        cm3.a_m2_PIRV(0);
        cm3.a_m4_PIIIIRV(n3, n5, 96, 11);
        cm3.a_m2_PIRV(0xFF0000);
        cm3.d_m0_PIIIIRV(n3 + 1, n5 + 1, 93, 8);
        n.a_m14_PLcm_IIIIZRV(cm3, n3 - 4, n5 + 5, 104, 0, false);
        ai3.a_m0_PLcm_IIIIIRV(cm3, n3 + 48, n5 + 2, ai3.b_f2_B <= 0 ? 0 : ai3.a_f2_B + 1, ai3.b_f2_B, 1);
        let n6 = rpg.f.a - 10;
        let n7 = (rpg.d.e_ - n6 >> 1) + this.a_;
        n3 = n2 + 11 + 2;
        n.c_m3_PLcm_IIIIRV(cm2, n7, n3, n6, 14);
        n5 = n3 + 14 + 3;
        n.c_m3_PLcm_IIIIRV(cm2, n7, n5, n6, 120);
        cm2.a_m2_PIRV(15723216);
        cm2.e(this.a_, n2 + 11, this.a_ + rpg.d.e_ - 1, n2 + 11);
        cm2.e(this.a_, n5 - 2, this.a_ + rpg.d.e_ - 1, n5 - 2);
        if (this.b != null) {
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m2_PLcm_IIABIIRV(cm2, n7 + 6, n3 + 1, this.b, 1, 4);
            cm2.a_m2_PIRV(this.a_f2_B < this.f ? 14597755 : 0xCCCCCC);
            ac.a_m2_PLcm_IIABIIRV(cm2, n7 + n6 - 6 + 2, n3 + 1, this.d, 1, 8);
        } else {
            b.a_m1_PLcm_IIRV(cm2, rpg.a.c - 6, n3 + 6);
        }
        if (this.c != null) {
            cm2.a_m2_PIRV(0xCCCCCC);
            ac.a_m1_PLcm_IIIIABRV(cm2, n7 + 6 - 2, n5 + 6, rpg.d.e_ - 14, 1, this.c);
        }
    
  }
  a_m2_PBBIABRV(by2, by3, n2, byArray) {

        let bj2 = di.a_m11_PBRLbj_;
        let n3 = bj2.a_m10_PBBRI(by2, by3);
        by2 = n3;
        if (n3 > 10) {
            by2 = 10;
        }
        let byArray2 = g.a_m0_PABABRAB(";&".getBytes(), byArray);
        byArray2 = g.a_m0_PABABRAB(byArray2, ("(" + by2 + "/" + 10 + ")").getBytes());
        this.c = g.a_m0_PABABRAB(this.c, byArray2);
    
  }
}

JavaRegistry.set("ai", ai);
JavaRegistry.set("ai", ai);
try { if (typeof ai.__clinit === 'function') ai.__clinit(); } catch (e) { console.warn('clinit ai', e); }

globalThis.ai = ai;
