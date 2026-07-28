/** Transpiled from dc */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dc extends (JavaRegistry.get("l") || class {}) {
  e_f0_Z = null;
  a = di.a_f9_Ldo_;
  e_f1_I = 0;
  dc(n2) {

        /*super*/(n2, 4, 2, 2);
        this.a.i_m1_PRV();
        if (this.a.a_f8_S > 0) {
            this.e_f0_Z = true;
        }
        this.b_f3_Z = true;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = 0;
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if {
                let dc2 = this;
                if (dc2.e_f0_Z && dc2.a_f2_B >= 0 && dc2.a_f2_B < 4) {
                    dc2.a.a_f8_S = (dc2.a.a_f8_S - 1);
                    if (dc2.a.a_f8_S <= 0) {
                        dc2.e_f0_Z = false;
                    }
                    dc2.a.h_m2_PBRV;
                    dc2.a.i_m1_PRV();
                    let true = null;
                }
                let false = null;
            }
            this.a_f1_Ln_.a_f2_B = 0;
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (!this.e_f0_Z) {
            let true = null;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        this.e_m1_PIIRZ(n2, n3);
        let true = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        let n2 = null;
        let n3 = this.a_m0_PLcm_ZZZZRI(cm2, false, true, true, false);
        for (n2 = 0; n2 < 2; ++n2) {
            cm2.a_m2_PIRV(3550755);
            cm2.a_m4_PIIIIRV(rpg.a.a_f0_I - d.e_ >> 1, n3 + n2 * 77, d.e_, 22);
            cm2.a_m2_PIRV(15723216);
            cm2.d_m0_PIIIIRV(rpg.a.a_f0_I - d.e_ >> 1, n3 + n2 * 77 - 1, d.e_ - 1, 23);
        }
        n2 = this.a_ + 23;
        n3 = this.b_ + 29;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[0], n2, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, this.a.a_m28_PRB(), n2 + 42, n3 + 5, 8, 1);
        let n4 = this.a.e_m3_PBRI(2);
        let n5 = this.a.f_m2_PBRI(2);
        let n6 = d.e_ - 46;
        n2 = this.a_ + 84;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[1], n2, n3, 20);
        this.b_m0_PLcm_IIIIIIRV(cm2, this.a_ + d.e_ - 3, n3 + 5, n4, n5, 8, 1);
        a_m4_PLcm_IIIIIIBRV(cm2, this.a_ + 23, n3 + 17, 14597755, n6, n4, n5, 2);
        n6 = d.e_ - 3 >> 1;
        n4 = this.a.e_m3_PBRI(0);
        n5 = this.a.f_m2_PBRI(0);
        n2 = this.a_ + 23;
        n3 = this.b_ + 107;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[2], n2, n3, 20);
        this.b_m0_PLcm_IIIIIIRV(cm2, rpg.a.c - 23, n3 + 5, n4, n5, 8, 1);
        a_m4_PLcm_IIIIIIBRV(cm2, this.a_ + 1, n3 + 18, 16737370, n6, n4, n5, 0);
        n4 = this.a.e_m3_PBRI(1);
        n5 = this.a.f_m2_PBRI(1);
        n2 = rpg.a.c + 23;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[3], n2, n3, 20);
        this.b_m0_PLcm_IIIIIIRV(cm2, this.a_ + d.e_ - 23, n3 + 5, n4, n5, 8, 1);
        a_m4_PLcm_IIIIIIBRV(cm2, rpg.a.c + 1, n3 + 18, 6707967, n6, n4, n5, 1);
        n4 = this.a_ + 31;
        n3 = this.b_ + 132;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[4], n4, n3, 20);
        if (di.b_m9_PRZ()) {
            this.b_m0_PLcm_IIIIIIRV(cm2, n4 + 43 + 1, n3 + 5, this.a.b_m5_PZRI, this.a.b_m5_PZRI, 4, 1);
        } else {
            n.b_m6_PLcm_IIIIIRV(cm2, this.a.b_m5_PZRI, n4 + 43 + 8, n3 + 5, 4, 1);
        }
        n5 = rpg.a.c + 15;
        n2 = this.a_ + n5;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[5], n2 + 10, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, this.a.a_f7_I, n2 + 43 + 10, n3 + 5, 4, 1);
        n3 = this.b_ + 152;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[6], n4, n3, 20);
        f(cm2, this.a.b_m10_PBRI(2), this.a_ + 43 + 40, n3 + 5, 1);
        n2 = this.a_ + n5;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[7], n2 + 10, n3, 20);
        f(cm2, this.a.b_m10_PBRI(0), n2 + 43 + 10, n3 + 5, 1);
        n2 = this.a_ + 45;
        n3 = this.b_ + 59;
        this.a_m2_PLcm_IIBRV(cm2, n2 + 20, n3, 0);
        this.a_m2_PLcm_IIBRV(cm2, rpg.a.c + 30, n3, 1);
        this.a_m2_PLcm_IIBRV(cm2, n2 + 20, n3 += 18, 2);
        this.a_m2_PLcm_IIBRV(cm2, rpg.a.c + 30, n3, 3);
    
  }
  a_m2_PLcm_IIBRV(cm2, n2, n3, by2) {

        let n4 = (by2 + 3) % 4;
        cm2.b_m0_PIIIIRV(n2, n3, 18, 12);
        cm2.a_m1_PLcg_IIIRV(e.v, n2 - n4 * 18, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, this.a.a_m22_PBRI, n2 + 46, n3 + 3, 8, 1);
    
  }
  b_m0_PLcm_IIIIIIRV(cm2, n2, n3, n4, n5, n6, n7) {

        n7 = dc.a_m3_PIIRI(n4, 1);
        let n8 = n2;
        if (n6 == 8) {
            n8 = n2 - (n7 + 7 + dc.a_m3_PIIRI(n5, 1));
        } else if (n6 == 1) {
            n8 = n2 - (n7 + 7 + dc.a_m3_PIIRI(n5, 1) >> 1);
        }
        n.b_m6_PLcm_IIIIIRV(cm2, n4, n8, n3, 4, 1);
        cm2.b_m0_PIIIIRV(n8 + n7, n3, 7, 7);
        cm2.a_m1_PLcg_IIIRV(e.w, n8 + n7 - 7, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, n5, n8 + n7 + 7, n3, 4, 1);
    
  }
  static a_m3_PIIRI(n2, n3) {

        let cg2 = n3 == 0 ? e.r : e.h_f1_ALcg_[n3 - 1];
        let n4 = cg2.a_m5_PRI() / 10 - 1;
        let n5 = 0;
        do {
            n5 += n4;
        } while ((n2 /= 10) != 0);
        let n5 = null;
    
  }
  static f(cm2, n2, n3, n4, n5) {

        n.b_m6_PLcm_IIIIIRV(cm2, n2, n3 + 8, n4, 8, 1);
        cm2.b_m0_PIIIIRV(n3 + 10, n4, 7, 7);
        cm2.a_m1_PLcg_IIIRV(e.w, n3 + 10, n4, 20);
        cm2.b_m0_PIIIIRV(0, 0, rpg.a.a_f0_I, rpg.a.b_f0_I);
    
  }
  static a_m4_PLcm_IIIIIIBRV(cm2, n2, n3, n4, n5, n6, n7, by2) {

        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(n2, n3, n5, 3);
        n5 = (n5 - 2 - 6) * n6 / n7;
        if (n5 > 0) {
            cm2.a_m2_PIRV;
            cm2.e(n2 + 1, n3 + 1, n2 + 1 + n5, n3 + 1);
        }
        cm2.a_m1_PLcg_IIIRV(e.m_f1_ALcg_[by2], n2 + 1 + n5, n3, 20);
    
  }
  b_m1_PLcm_RV(cm2) {

        let n2 = null;
        let n3 = null;
        if {
            n3 = this.a_f2_B / 2;
            n2 = this.a_f2_B % 2;
            this.a_m4_PLcm_IIIIRV(cm2, this.a_ + 45 + n2 * 80 + 30 + 23, this.b_ + 59 + n3 * 18 + 1, 18, 11);
        }
        cm2.b_m0_PIIIIRV(this.a_ + 40 - 24, this.b_ + 80 - 26, 40, 50);
        n.b_m4_PLcm_IIIIRV(cm2, this.a_, this.b_ + 13, d.e_, 161);
        n3 = this.a_ + 40;
        n2 = this.b_ + 80;
        cm2.a_m1_PLcg_IIIRV(e.e_f0_ALcg_[0], n3, n2 + 6, 33);
        this.e_f1_I = e.a_f2_Lca_.a_m2_PBBIIIRI(this.a.a_f0_B, 2, this.e_f1_I, n3, n2) + 1;
        if {
            cm2.a_m2_PIRV(3550755);
            cm2.a_m4_PIIIIRV(n3 -= 13, n2 += 10, 26, 12);
            cm2.a_m2_PIRV(15723216);
            cm2.d_m0_PIIIIRV(n3, n2, 26, 12);
            cm2.a_m1_PLcg_IIIRV(e.c_f1_ALcg_[0], n3 + 2, n2 + 2, 20);
            n.b_m6_PLcm_IIIIIRV(cm2, this.a.a_f8_S, n3 + 26 - 2, n2 + 3, 8, 0);
        }
    
  }
}

JavaRegistry.set("dc", dc);
JavaRegistry.set("dc", dc);
try { if (typeof dc.__clinit === 'function') dc.__clinit(); } catch (e) { console.warn('clinit dc', e); }

globalThis.dc = dc;
