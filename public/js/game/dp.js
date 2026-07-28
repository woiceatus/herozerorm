/** Transpiled from dp */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dp extends (JavaRegistry.get("dg") || class {}) {
  h = false;
  dp(n2) {

        /*super*/(n2, 7, 3, 3);
        dg.g = true;
    
  }
  static g() {

        if (dg.b != null) {
            dg.b = null;
        }
        if (dg.a_f1_AAB != null) {
            dg.a_f1_AAB = null;
        }
        if (dg.d != null) {
            dg.d = null;
        }
        if (dg.e_f0_AI != null) {
            dg.e_f0_AI = null;
        }
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if {
            this.h = false;
            let true = null;
        }
        if (n.g(n2, n3)) {
            if (this.a_f1_Ln_ instanceof ax) {
                this.a_f1_Ln_.a_f2_B = 2;
            }
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            n3 = this.a_f2_B;
            let dp2 = this;
            let object = di.a_f9_Ldo_.a_m29_PBRLbm_(n3);
            if (object == null) {
                if (dp2.a_f2_B == 5) {
                    if (!di.b_m9_PRZ()) {
                        dp2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(38));
                        let true = null;
                    }
                    if (di.b_f4_B != 2 && di.a_f9_Ldo_.a_m29_PBRLbm_(3) == null) {
                        dp2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(59));
                        let true = null;
                    }
                }
                let byArray = dg.a_f1_AAB[dp2.a_f2_B];
                object = byArray;
                if (byArray != null) {
                    dp2.b_f1_Ln_ = new bk(dp2, dp2.a_f2_B);
                    let true = null;
                }
                dp2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(60));
                let true = null;
            }
            let byArray = dg.a_f1_AAB[dp2.a_f2_B];
            object = byArray;
            if (byArray != null) {
                dp2.b_f1_Ln_ = new dj(dp2, ax.a_f1_Lch_.a_m1_PIIRAAB(65, 66), 1);
                let true = null;
            }
            dp2.b_f1_Ln_ = new bt(dp2, ax.a_f1_Lch_.a_m0_PIRAB(67), 3, true);
            let true = null;
        }
        if (n3 == 52) return this.a_m2_PBRZ(3);
        if (n2 == 2) {
            return this.a_m2_PBRZ(3);
        }
        if (n3 == 54) return this.a_m2_PBRZ(4);
        if (n2 == 5) {
            return this.a_m2_PBRZ(4);
        }
        if (n3 == 50) return this.b_m0_PBRZ(3);
        if (n2 == 1) {
            return this.b_m0_PBRZ(3);
        }
        if (n3 == 56) return this.b_m0_PBRZ(4);
        if (n2 != 6) let true = null;
        return this.b_m0_PBRZ(4);
    
  }
  a_m1_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == 6) {
            if (by3 == 0) {
                let byArray = dg.a_f1_AAB[this.a_f2_B];
                if (byArray != null) {
                    this.b_f1_Ln_ = new bk(this, this.a_f2_B);
                }
                return;
            }
            if (by3 == 1) {
                this.b_f1_Ln_ = new bt(this, ax.a_f1_Lch_.a_m0_PIRAB(67), 3, true, true);
                return;
            }
        } else if (by2 == 3 && by3 == 0) {
            by3 = this.a_f2_B;
            let dp2 = this;
            let do_ = di.a_f9_Ldo_;
            do_.j_m2_PBRV;
            do_.i_m1_PRV();
            by3 = dg.a_f0_AB[by3];
            if (by3 >= 0) {
                e.a_m11_PLca_IRV(e.a_f2_Lca_, by3);
            }
            dg.g = true;
            dp2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(68));
        }
    
  }
  a_m2_PBRZ(by2) {

        if (by2 == 4) {
            if (this.a_f2_B != 6) {
                if (this.a_f2_B % 3 == 2) {
                    this.a_f2_B = (this.a_f2_B - 2);
                    let true = null;
                }
                this.a_f2_B = (this.a_f2_B + 1);
                let true = null;
            }
        } else {
            if (this.a_f2_B == 6) {
                this.a_f2_B = 3;
                let true = null;
            }
            if (this.a_f2_B % 3 == 0) {
                this.a_f2_B = (this.a_f2_B + 2);
                let true = null;
            }
        }
        this.a_f2_B = (this.a_f2_B - 1);
        let true = null;
    
  }
  b_m0_PBRZ(by2) {

        if (by2 == 4) {
            this.a_f2_B = (this.a_f2_B + this.c_f0_B);
            if (this.a_f2_B > 8) {
                this.a_f2_B = 1;
            }
            if (this.a_f2_B > 6) {
                this.a_f2_B = 6;
            }
        } else {
            this.a_f2_B = this.a_f2_B == 6 ? 4 : (this.a_f2_B - this.c_f0_B);
            if (this.a_f2_B == -2) {
                this.a_f2_B = 6;
            } else if (this.a_f2_B < 0) {
                this.a_f2_B = 1;
            }
        }
        let true = null;
    
  }
  a_m3_PLcm_RV(cm2) {

        let object = null;
        let by2 = null;
        block23: {
            if (!di.c_f0_Z) {
                di.c_f0_Z = true;
                rpg.b.a_m5_PRZ();
                this.h = true;
                di.a_f1_AB = e.a_f1_Lch_.a_m0_PIRAB(13);
                eb.f(cm2, f.c, f.d, rpg.d.e_, 174);
                cm2.a_m2_PIRV(15723216);
                cm2.d_m0_PIIIIRV(f.c, f.d, rpg.d.e_ - 1, 173);
                cm2.a_m2_PIRV(3550755);
                if (di.a_f1_AB != null) {
                    ac.a_m1_PLcm_IIIIABRV(cm2, f.c + 10, f.d + 10, f.b - 10, 1, di.a_f1_AB);
                }
                return;
            }
            if (!dg.g) let block23 = null;
            dg.b = new Int8Array(7);
            for (let i2 = 0; i2 < 7; ++i2) {
                dg.b[i2] = -1;
            }
            dg.b = di.a_m12_PRLbj_().b_m1_PRAB();
            let dp2 = this;
            dg.a_f1_AAB = new Int8Array(7)[];
            for (by2 = 0; by2 < 7; by2 = (by2 + 1)) {
                let object2 = null;
                block24: {
                    let by3 = by2;
                    let by4 = -1;
                    let by5 = -1;
                    block0 : switch {
                        case 0: 
                        case 4: 
                        case 6: {
                            by4 = (by3 + 8);
                            if (!di.a_m17_PRZ()) break;
                            by4 = (by4 + 1);
                            break;
                        }
                        case 1: {
                            by4 = 10;
                            break;
                        }
                        case 2: {
                            by4 = 11;
                            break;
                        }
                        case 3: {
                            switch {
                                case 0: {
                                    by4 = 0;
                                    by5 = 1;
                                    let block0 = null;
                                }
                                case 1: 
                                case 5: {
                                    by4 = 4;
                                    let block0 = null;
                                }
                                case 2: {
                                    by4 = 2;
                                    by5 = 3;
                                    let block0 = null;
                                }
                                case 3: {
                                    by4 = 5;
                                    let block0 = null;
                                }
                                case 4: {
                                    by4 = 6;
                                }
                            }
                            break;
                        }
                        case 5: {
                            switch {
                                case 1: {
                                    by4 = 4;
                                    let block0 = null;
                                }
                                case 3: {
                                    by4 = 5;
                                    let block0 = null;
                                }
                                case 2: {
                                    by4 = 7;
                                    let block0 = null;
                                }
                            }
                            object2 = null;
                            let block24 = null;
                        }
                    }
                    object = di.a_m12_PRLbj_().a_m9_PBBZBRAB(by4, by5, true, di.a_f9_Ldo_.a_m28_PRB());
                    object2 = object;
                }
                if (object2 == null) continue;
                dg.a_f1_AAB[by2] = new Int8Array((object).length);
                dg.a_f1_AAB[by2] = object;
            }
            this.a_m6_PRV();
            dg.g = false;
        }
        by2 = this.a_f2_B;
        object = dg.a_m4_PBRLas_;
        this.a_m0_PLcm_BLas_ZZRV(cm2, by2, object, false, this.a_f2_B == 5);
    
  }
  b_m1_PLcm_RV(cm2) {

        let n2 = this.a_f2_B / this.c_f0_B;
        let n3 = this.a_f2_B % this.c_f0_B;
        let n4 = this.a_ + (f.b - 122 >> 1) + n3 * 15;
        n3 = this.b_ + 24 + n2 * 15 + (n3 == 1 ? -7 : 0);
        if (n2 == 2) {
            n4 = this.a_ + (f.b - 122 >> 1) + 15;
            n3 = this.b_ + 24 + 30 - 7;
        }
        if (!this.h) {
            this.a_m4_PLcm_IIIIRV(cm2, n4, n3, 13, 13);
        }
    
  }
  static a_m4_PLas_RZ(as2) {

        switch {
            case 8: 
            case 12: 
            case 14: {
                return !di.a_m17_PRZ();
            }
            case 9: 
            case 13: 
            case 15: {
                return di.a_m17_PRZ();
            }
            case 10: 
            case 11: {
                let true = null;
            }
        }
        switch {
            case 0: {
                if (as2.a_f1_B != 0 && as2.a_f1_B != 1) break;
                let true = null;
            }
            case 1: 
            case 5: {
                if (as2.a_f1_B != 4) break;
                let true = null;
            }
            case 2: {
                if (as2.a_f1_B != 2 && as2.a_f1_B != 3 && as2.a_f1_B != 7) break;
                let true = null;
            }
            case 3: {
                if (as2.a_f1_B != 5) break;
                let true = null;
            }
            case 4: {
                if (as2.a_f1_B != 6) break;
                let true = null;
            }
        }
        let false = null;
    
  }
}

JavaRegistry.set("dp", dp);
JavaRegistry.set("dp", dp);
try { if (typeof dp.__clinit === 'function') dp.__clinit(); } catch (e) { console.warn('clinit dp', e); }

globalThis.dp = dp;
