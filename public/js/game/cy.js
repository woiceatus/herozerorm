/** Transpiled from cy */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cy extends (JavaRegistry.get("p") || class {}) {
  a_f0_Lbj_ = null;
  a_f1_Las_ = null;
  f = null;
  e = null;
  g = null;
  cy(n2, by2) {

        /*super*/(n2, 28, 4, 7);
        switch {
            case 0: {
                this.a_f0_Lbj_ = di.a_m12_PRLbj_();
                break;
            }
            case 2: {
                this.a_f0_Lbj_ = di.b_m6_PRLbj_();
                break;
            }
            case 1: {
                this.a_f0_Lbj_ = di.c_m7_PRLbj_();
            }
        }
        this.g = this.f = by2;
        this.e = true;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if {
            if (n3 == 50 || n2 == 1) {
                this.g = ((this.g + 2) % 3);
            } else if (n3 == 56 || n2 == 6) {
                this.g = ((this.g + 1) % 3);
            } else {
                if (n3 == 54 || n2 == 5 || n.f_m0_PIIRZ(n2, n3)) {
                    this.a_f2_B = 0;
                    this.e = false;
                    let true = null;
                }
                let true = null;
            }
            this.a_f1_Ln_.b_f1_Ln_ = new cy(this.a_f1_Ln_, this.g);
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Las_ = this.a_f0_Lbj_.a_m1_PIRLas_;
            if (this.a_f1_Las_ == null) {
                let true = null;
            }
            if (this.a_f1_Las_.a_m11_PRZ()) {
                this.b_f1_Ln_ = new dj(this, ax.a_f1_Lch_.a_m3_PIIIIRAAB(43, 44, 42, 25));
            } else if (this.a_f1_Las_.b() && !this.a_f1_Las_.c() && dp.a_m4_PLas_RZ) {
                this.b_f1_Ln_ = new dj(this, ax.a_f1_Lch_.a_m2_PIIIRAAB(65, 42, 25));
            } else if (cy.a_m4_PLas_RZ) {
                this.b_f1_Ln_ = new dj(this, ax.a_f1_Lch_.a_m2_PIIIRAAB(41, 42, 25));
            } else if (this.a_f1_Las_.d()) {
                this.b_f1_Ln_ = new dj(this, ax.a_f1_Lch_.a_m1_PIIRAAB(42, 25));
            } else {
                this.a_m9_PLas_RV;
            }
            let true = null;
        }
        if ((n3 == 52 || n2 == 2) && this.a_f2_B % 7 == 0) {
            this.e = true;
            let true = null;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        this.e_m1_PIIRZ(n2, n3);
        let true = null;
    
  }
  a_m1_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == 6) {
            let cy2 = this;
            if (cy2.a_f1_Las_.a_m11_PRZ()) {
                switch {
                    case 0: 
                    case 1: {
                        di.a_m13_PZBRV(by3 == 0, cy2.a_f1_Las_.b_f0_B);
                        return;
                    }
                    case 2: {
                        cy2.a_m2_PRV();
                        return;
                    }
                    case 3: {
                        cy2.a_m9_PLas_RV;
                    }
                }
                return;
            }
            if (cy2.a_f1_Las_.b() && !cy2.a_f1_Las_.c() && dp.a_m4_PLas_RZ) {
                if (by3 == 0) {
                    cy2.b_f1_Ln_ = let dp = null;
                    return;
                }
                if (by3 == 1) {
                    cy2.a_m2_PRV();
                    return;
                }
                if (by3 != 2) return;
                cy2.a_m9_PLas_RV;
                return;
            }
            if (cy.a_m4_PLas_RZ) {
                if (by3 == 0) {
                    if {
                        cy2.b_f1_Ln_ = new bt(cy2, ax.a_f1_Lch_.a_m0_PIRAB(48), 5, true);
                        return;
                    }
                    cy2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(45));
                    return;
                }
                if (by3 == 1) {
                    cy2.a_m2_PRV();
                    return;
                }
                if (by3 != 2) return;
                cy2.a_m9_PLas_RV;
                return;
            }
            if (!cy2.a_f1_Las_.d()) return;
            if (by3 == 0) {
                cy2.a_m2_PRV();
                return;
            }
            if (by3 != 1) return;
            cy2.a_m9_PLas_RV;
            return;
        }
        if (by2 == 4 && by3 == 0) {
            this.a_f0_Lbj_.a_m7_PIRV;
            bs.d_f0_Z = true;
            return;
        }
        if (by2 != 5) return;
        if (by3 != 0) return;
        this.a_f0_Lbj_.a_m6_PIIRV(this.a_f2_B, 1);
        di.a_m2_PBBRV(7, 2);
    
  }
  a_m2_PRV() {

        if (this.a_f1_Las_.c()) {
            this.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(47));
            return;
        }
        this.b_f1_Ln_ = new bt(this, ax.a_f1_Lch_.a_m0_PIRAB(46), 4, true, true);
    
  }
  a_m3_PLcm_RV(cm2) {

        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        this.a_m11_PLcm_BZIZRV(cm2, this.f, this.e, 3, true);
        this.a_m10_PLcm_Lbj_BZBBIRV(cm2, this.a_f0_Lbj_, this.f, this.e, 7, 4, di.e_f1_I);
    
  }
  static a_m4_PLas_RZ(as2) {

        return as2.a_f1_B == 20 && as2.b_f0_B == 1;
    
  }
}

JavaRegistry.set("cy", cy);
JavaRegistry.set("cy", cy);
try { if (typeof cy.__clinit === 'function') cy.__clinit(); } catch (e) { console.warn('clinit cy', e); }

globalThis.cy = cy;
