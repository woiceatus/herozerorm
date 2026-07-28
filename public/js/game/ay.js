/** Transpiled from ay */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ay extends (JavaRegistry.get("q") || class {}) {
  a = null;
  f = null;
  ay() {

        /*super*/(null, 6, 1, 1);
        this.b_f3_Z = true;
        if (di.b_f4_B == this.a_f2_B) {
            this.a_m1_PIIRZ(5, 54);
            while (!this.a_m1_PBRZ) {
                this.a_m1_PIIRZ(5, 54);
            }
        }
        this.a = new ch("/t/j");
        this.f = 0;
        this.b_f1_Ln_ = new bt(this, this.a.a_m0_PIRAB(3), this.a.a_m1_PIIRAAB(10, 11));
        bs.a_m0_PRLbs_();
        bs.e_m1_PRV();
    
  }
  a_m0_PRV() {

        this.a = null;
        df.e_m0_PRV();
        bs.c_f0_Z = true;
    
  }
  a_m1_PIIRZ(n2, n3) {

        if (this.b_f1_Ln_ != null && this.b_f1_Ln_ instanceof bw && this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3) && this.f <= 1 || this.f >= 7) {
            this.a_m0_PRV();
            let true = null;
        }
        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.a_m1_PBRZ) {
                n2 = di.a_f9_Ldo_.a_m28_PRB() * di.l * 100;
                let byArray = g.a_m0_PABABRAB(d.H, ("" + n2).getBytes());
                this.b_f1_Ln_ = new bt(this, g.a_m0_PABABRAB(byArray, d.I), 3, true);
            } else {
                this.b_f1_Ln_ = new br(this, this.a.a_m0_PIRAB(4), '\u0000');
            }
        } else if (n.h(n2, n3)) {
            this.a_f2_B = ((this.a_f2_B - 1 + this.b_f2_B) % this.b_f2_B);
            if (di.b_f4_B == this.a_f2_B) {
                this.a_m1_PIIRZ(n2, n3);
            }
        } else if (n.i(n2, n3)) {
            this.a_f2_B = ((this.a_f2_B + 1) % this.b_f2_B);
            if (di.b_f4_B == this.a_f2_B) {
                this.a_m1_PIIRZ(n2, n3);
            }
        } else {
            let false = null;
        }
        let true = null;
    
  }
  a_m2_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == -1 && by3 == -1) {
            this.b_f1_Ln_ = new br(this, this.a.a_m0_PIRAB(9), '\u0000');
            this.f = 8;
            bs.c_f0_Z = true;
            return;
        }
        if (by2 == -2 && by3 == -2) {
            by2 = 3;
            by3 = 0;
        }
        if (by2 == 3) {
            if (this.f == 0) {
                if (by3 != 0) {
                    this.a_m0_PRV();
                    return;
                }
                if (di.e_f1_I >= 2000) {
                    di.e_f1_I -= 2000;
                    di.a_f9_Ldo_.o_m1_PRV();
                    di.a_f9_Ldo_.p_m0_PRV();
                    this.a_m0_PRV();
                    return;
                }
                if {
                    this.b_f1_Ln_ = new br(this, this.a.a_m0_PIRAB(9), '\u0000');
                    this.f = 8;
                    return;
                }
                this.b_f1_Ln_ = new br(this, this.a.a_m0_PIRAB(9), '\u0000');
                this.f = 8;
                return;
            }
            if (this.f != 1) {
                if (this.f != 6) return;
                this.a_m0_PRV();
                if (by3 != 0) return;
                di.a_m2_PBBRV(6, 1);
                return;
            }
            if (by3 != 0) return;
            by2 = (di.a_f9_Ldo_.a_m28_PRB() * di.l * 100);
            if (di.e_f1_I < by2) {
                if {
                    this.b_f1_Ln_ = new br(this, this.a.a_m0_PIRAB(9), '\u0000');
                    this.f = 7;
                    return;
                }
                this.b_f1_Ln_ = new br(this, this.a.a_m0_PIRAB(9), '\u0000');
                this.f = 7;
                return;
            }
            di.e_f1_I -= by2;
            if (di.l < 99) {
                di.l = (di.l + 1);
            }
            let ay2 = this;
            this.b_f1_Ln_ = new br(ay2, ay2.a.a_m0_PIRAB(7));
            ay2.f = 2;
            return;
        }
        if (this.f != 0) return;
        if (by3 == 0) {
            this.f = 1;
            return;
        }
        this.b_f1_Ln_ = new bt(this, this.a.a_m0_PIRAB(12), 3, true);
    
  }
  a_m3_PLcm_RV(object) {

        if (this.f == 8 || this.b_f1_Ln_ != null && this.b_f1_Ln_ instanceof bw) {
            bs.a_m0_PRLbs_().d_m1_PRV();
        }
        n.a_m0_PLcm_IRV(object, 3);
        if (this.f == 0 || this.f == 8) {
            return;
        }
        let n2 = this.a_m0_PLcm_BRI(object, this.a_f2_B);
        let n3 = n2 + 2;
        (object).a_m2_PIRV(0);
        (object).a_m4_PIIIIRV(this.a_, n2, d.e_, 65);
        (object).a_m2_PIRV(6379080);
        let n4 = rpg.f.b >> 1;
        n.c_m3_PLcm_IIIIRV(object, this.a_ - 1, n3, n4, 47);
        n.c_m3_PLcm_IIIIRV(object, this.a_ - 1 + n4 + 2, n3, n4, 47);
        n2 = n2 + 47 + 4;
        (object).a_m4_PIIIIRV(this.a_, n2, d.e_, 18);
        let n5 = rpg.a.c - (n4 >>= 1);
        l.a_m2_PLcm_BIIIIZZRV(object, di.b_f4_B, n5, n3 + 26, n.a_f0_AI[di.b_f4_B], 0, true, true);
        n4 = rpg.a.c + n4;
        l.a_m2_PLcm_BIIIIZZRV(object, this.a_f2_B, n4, n3 + 26, n.a_f0_AI[this.a_f2_B], 0, true, this.a_m1_PBRZ);
        let n6 = this.a_f2_B;
        let n7 = 2;
        while (n7 > 0) {
            if ((n6 = (n6 - 1 + 6) % 6) == di.b_f4_B) continue;
            --n7;
        }
        for (n7 = 0; n7 < 5; ++n7) {
            l.a_m2_PLcm_BIIIIZZRV(object, n6, this.a_ + 4 + 15 + n7 * 31, n2 + 3, n6 != this.a_f2_B ? 3550755 : n.a_f0_AI[n6], 0xFF0000, n6 == this.a_f2_B, this.a_m1_PBRZ(n6));
            n6 = (n6 + 1) % this.b_f2_B;
            if (n6 != di.b_f4_B) continue;
            n6 = (n6 + 1) % this.b_f2_B;
        }
        (object).a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(object, rpg.a.c, rpg.f.d, this.a.a_m0_PIRAB(0), 0, 1);
        ac.a_m2_PLcm_IIABIIRV(object, n5, n3 + 5, this.a.a_m0_PIRAB(1), 0, 1);
        ac.a_m2_PLcm_IIABIIRV(object, n4, n3 + 5, this.a.a_m0_PIRAB(2), 0, 1);
        (object).a_m1_PLcg_IIIRV(e.m_f0_Lcg_, rpg.a.c, n3 + 18, 17);
        object = this;
        let do_ = di.a_f9_Ldo_;
        switch ((object).f) {
            case 2: {
                break;
            }
            case 3: {
                n3 = di.a_m17_PRZ() ? 1 : 0;
                do_.e_m0_PBRV((object).a_f2_B);
                if (di.a_m17_PRZ() == n3) break;
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_(0));
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_(4));
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_(6));
                break;
            }
            case 4: {
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_(3));
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_(5));
                e.a_f2_Lca_ = e.a_m0_PRLrpg_e_().a_m2_PRLca_();
                break;
            }
            case 5: {
                (object).c_m0_PRV();
                (object).b_f1_Ln_ = new bt(object, (object).a.a_m0_PIRAB(8), 3, true);
                break;
            }
            default: {
                return;
            }
        }
        (object).f = ((object).f + 1);
        (object).d_m0_PRV();
    
  }
}

JavaRegistry.set("ay", ay);
JavaRegistry.set("ay", ay);
try { if (typeof ay.__clinit === 'function') ay.__clinit(); } catch (e) { console.warn('clinit ay', e); }

globalThis.ay = ay;
