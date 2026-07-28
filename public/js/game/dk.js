/** Transpiled from dk */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dk extends (JavaRegistry.get("de") || class {}) {
  f = null;
  g_f0_Z = null;
  h_f0_Z = false;
  g_f1_B = 0;
  h_f1_B = 1;
  a_f0_Lbj_ = null;
  a_f1_Las_ = null;
  dk(n2, by2) {

        /*super*/(n2, 28, 4, 7);
        this.f = by2;
        this.g_f0_Z = this.f == 0;
        this.c(0);
        this.a_f2_B = 0;
        this.f_m1_PRV();
    
  }
  c(by2) {

        this.g_f1_B = by2;
        this.a_f2_B = 0;
        if {
            this.h_f1_B = 3;
            this.a_f0_Lbj_ = by2 == 0 ? di.a_m12_PRLbj_() : (by2 == 2 ? di.b_m6_PRLbj_() : di.c_m7_PRLbj_());
        } else {
            this.h_f1_B = de.a_f1_ALbj_.length;
            this.a_f0_Lbj_ = de.a_f1_ALbj_[this.g_f1_B];
        }
        let dk2 = this;
        this.d_f0_B = (dk2.a_f0_Lbj_.a_f1_B / 7);
        dk2.b_f2_B = (dk2.d_f0_B * dk2.c_f0_B);
        if (dk2.a_f2_B > dk2.b_f2_B) {
            dk2.a_f2_B = Math.min(dk2.b_f2_B - 1, 0);
        }
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if ((n3 == 49 || n3 == 51) && this.f == 0) {
            let dk2 = this;
            this.g_f0_Z = !dk2.g_f0_Z;
            dk2.c(0);
            let true = null;
        }
        if {
            if (n3 == 50 || n2 == 1) {
                this.g_f1_B = ((this.g_f1_B + (this.h_f1_B - 1)) % this.h_f1_B);
            } else if (n3 == 56 || n2 == 6) {
                this.g_f1_B = ((this.g_f1_B + 1) % this.h_f1_B);
            } else {
                if (n3 == 54 || n2 == 5) {
                    this.a_f2_B = 0;
                    this.h_f0_Z = false;
                    let true = null;
                }
                let true = null;
            }
            this.c;
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Las_ = this.a_f0_Lbj_.a_m1_PIRLas_;
            if (this.f == 1) {
                (this.a_f1_Ln_).a = this.a_f1_Las_;
                this.a_f1_Ln_.c_m0_PRV();
            } else if (this.a_f1_Las_ != null) {
                this.b_f1_Ln_ = this.g_f0_Z ? new dj(this, rpg.e.h_f0_Lch_.a_m2_PIIIRAAB(48, 50, 16)) : new dj(this, rpg.e.h_f0_Lch_.a_m2_PIIIRAAB(49, 50, 16));
            }
            let true = null;
        }
        if ((n3 == 52 || n2 == 2) && this.a_f2_B % this.c_f0_B == 0) {
            this.h_f0_Z = true;
            let true = null;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        return this.e_m1_PIIRZ(n2, n3);
    
  }
  a_m1_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == 6) {
            if {
                switch {
                    case 0: {
                        if (this.a_f1_Las_.c()) {
                            this.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(52));
                        }
                        if (!de.a_f1_ALbj_[this.g_f1_B].a_m4_PBBIRZ(this.a_f1_Las_.a_f1_B, this.a_f1_Las_.b_f0_B, this.a_f1_Las_.c)) {
                            this.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(55));
                            return;
                        }
                        if (this.a_f1_Las_.c()) return;
                        if (de.a_f1_ALbj_[this.g_f1_B].a_m5_PLas_IRI(this.a_f1_Las_, this.a_f1_Las_.c) <= 0) return;
                        de.i();
                        this.a_f0_Lbj_.a_m7_PIRV;
                        this.a_f1_Las_ = null;
                        this.a_m0_PRV();
                        this.b_f1_Ln_ = new br(this, rpg.e.a_f1_Lch_.a_m0_PIRAB(29), 1);
                        return;
                    }
                    case 1: {
                        let dk2 = this;
                        if (dk2.a_f1_Las_.c()) {
                            dk2.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(52));
                            break;
                        }
                        if (dk2.a_f1_Las_.d()) {
                            dk2.b_f1_Ln_ = new bt(dk2, rpg.e.h_f0_Lch_.a_m0_PIRAB(51), 4, true, true);
                            return;
                        }
                        dk2.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(56));
                        break;
                    }
                    case 2: {
                        this.a_m9_PLas_RV;
                    }
                }
                return;
            }
            switch {
                case 0: {
                    let bj2 = di.a_m11_PBRLbj_;
                    if (!bj2.a_m4_PBBIRZ(this.a_f1_Las_.a_f1_B, this.a_f1_Las_.b_f0_B, this.a_f1_Las_.c)) {
                        this.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(55));
                        return;
                    }
                    if (bj2.a_m5_PLas_IRI(this.a_f1_Las_, this.a_f1_Las_.c) <= 0) return;
                    de.a_f1_ALbj_[this.g_f1_B].a_m7_PIRV;
                    this.a_m0_PRV();
                    de.i();
                    this.a_f1_Las_ = null;
                    return;
                }
                case 1: {
                    this.b_f1_Ln_ = new bt(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(51), 4, true, true);
                    return;
                }
                case 2: {
                    this.a_m9_PLas_RV;
                }
            }
            return;
        }
        if (by2 != 4) return;
        if (by3 != 0) return;
        if {
            this.a_f0_Lbj_.a_m7_PIRV;
            this.a_m0_PRV();
            return;
        }
        de.a_f1_ALbj_[this.g_f1_B].a_m7_PIRV;
        de.i();
    
  }
  a_m2_PLcm_RV(cm2) {

        this.a_m9_PLcm_ABZZRV(cm2, rpg.e.h_f0_Lch_.a_m0_PIRAB(this.g_f0_Z ? 47 : 0), true, this.f == 0);
        this.a_m11_PLcm_BZIZRV(cm2, this.g_f1_B, this.h_f0_Z, this.g_f0_Z ? 3 : de.a_f1_ALbj_.length, this.g_f0_Z);
        this.a_m10_PLcm_Lbj_BZBBIRV(cm2, this.a_f0_Lbj_, this.g_f0_Z ? this.g_f1_B : 0, this.h_f0_Z, this.c_f0_B, this.d_f0_B, this.g_f0_Z ? di.e_f1_I : de.f_f0_I);
    
  }
  a_m3_PLcm_BIIZRV(cm2, by2, n2, n3, bl2) {

        cm2.a_m2_PIRV(0xFFFFFF);
        let byArray = g.a_m0_PABABRAB(d.n, (" " + by2).getBytes());
        byArray = g.a_m0_PABABRAB(byArray, d.k);
        ac.a_m0_PLcm_IIABIRV(cm2, n2, n3, byArray, 1);
    
  }
  b(cm2) {

        if (!this.h_f0_Z) {
            this.e;
        }
    
  }
}

JavaRegistry.set("dk", dk);
JavaRegistry.set("dk", dk);
try { if (typeof dk.__clinit === 'function') dk.__clinit(); } catch (e) { console.warn('clinit dk', e); }

globalThis.dk = dk;
