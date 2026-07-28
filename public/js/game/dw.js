/** Transpiled from dw */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dw extends (JavaRegistry.get("bo") || class {}) {
  static e_f0_I = d.e_ - 80 - 6 - 2;
  a_f0_Las_ = null;
  f = 0;
  j = 0;
  k = 0;
  e_f1_Z = false;
  g = 0;
  a_f1_Lbj_ = null;
  a_f2_J = 0;
  b_f0_AB = null;
  b_f1_Lch_ = new ch("/t/nb");
  dw(n2) {

        super;
        this.a_f1_Lbj_ = di.a_m12_PRLbj_();
        this.b_f0_AB = this.b_f1_Lch_.a_m0_PIRAB(0);
        this.k = di.a_m11_PBRLbj_(20).a_m10_PBBRI(20, 0);
        bs.c_f0_Z = true;
    
  }
  a_m0_PLas_RZ(as2) {

        if (as2 != null) {
            return as2.b();
        }
        let false = null;
    
  }
  static a_m1_PLas_RI(as2) {

        as2 = as2;
        for (let i2 = 0; i2 < (as2).c_f1_AB.length && (as2).c_f1_AB[i2] != -3; ++i2) {
            if ((as2).c_f1_AB[i2] != -2) continue;
            return (i2 + 1) * (i2 + 1);
        }
        return -1;
    
  }
  static b(as2) {

        as2 = as2;
        for (let i2 = 0; i2 < (as2).c_f1_AB.length && (as2).c_f1_AB[i2] != -3; ++i2) {
            if ((as2).c_f1_AB[i2] != -2) continue;
            return (i2 + 1) * 100 * ((as2).e + 1);
        }
        return -1;
    
  }
  a_m2_PBBRV(by2, by3) {

        this.c_m0_PRV();
        this.d();
        if (by2 == -1 && by3 == -1) {
            (this).f = 15;
            this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
            return;
        }
        if (by2 == -2 && by3 == -2) {
            if (this.f > di.e_f1_I) {
                if {
                    (this).f = 15;
                    this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
                    return;
                }
                (this).f = 15;
                this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
                return;
            }
            if (this.j > this.k) {
                (this).f = 15;
                this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(4);
                return;
            }
            let bm2 = this.a_f0_Las_;
            by3 = 0;
            for (let i2 = 0; i2 < bm2.c_f1_AB.length; ++i2) {
                if (bm2.c_f1_AB[i2] != -2) continue;
                by3 = 1;
            }
            if (by3 != 0) {
                this.a_f2_J = 15;
                this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(5);
                return;
            }
            (this).f = 15;
            this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(8);
        }
    
  }
  a_m3_PIIRZ(n2, n3) {

        if (this.b_f1_Ln_ != null && this.b_f1_Ln_ instanceof bw && this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (this.a_f2_J > 0) {
            let true = null;
        }
        if ((this).f > 0) {
            this.a_f1_AB = null;
            this.a_f2_J = 0;
            (this).f = 0;
            this.d();
            let true = null;
        }
        this.d();
        if {
            if (n.g(n2, n3)) {
                this.e_f1_Z = false;
                let true = null;
            }
            if (n.f_m0_PIIRZ(n2, n3)) {
                this.a_f0_Las_ = this.a_f1_Lbj_.a_m1_PIRLas_;
                if (!this.a_m0_PLas_RZ) {
                    this.a_f0_Las_ = null;
                    let true = null;
                }
                if (this.a_f0_Las_ != null) {
                    this.f = dw.b;
                    this.j = dw.a_m1_PLas_RI;
                }
                this.e_f1_Z = false;
                let true = null;
            }
            this.d_m2_PIIRZ(n2, n3);
            this.e_m1_PIIRZ(n2, n3);
        } else {
            if (n3 == 50 || n2 == 1) {
                this.g = ((this.g + 1) % 2);
            } else if (n3 == 56 || n2 == 6) {
                this.g = ((this.g + 1) % 2);
            }
            if (n.f_m0_PIIRZ(n2, n3)) {
                if (this.g == 0) {
                    this.e_f1_Z = true;
                } else if (this.a_f0_Las_ == null) {
                    (this).f = 15;
                    this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(6);
                } else if (this.f > di.e_f1_I) {
                    if {
                        (this).f = 15;
                        this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
                    } else {
                        (this).f = 15;
                        this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
                    }
                } else if (this.j > this.k) {
                    (this).f = 15;
                    this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(4);
                } else {
                    let bm2 = this.a_f0_Las_;
                    n3 = 0;
                    for (let i2 = 0; i2 < bm2.c_f1_AB.length; ++i2) {
                        if (bm2.c_f1_AB[i2] != -2) continue;
                        n3 = 1;
                    }
                    if (n3 != 0) {
                        this.a_f2_J = 15;
                        this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(5);
                    } else {
                        (this).f = 15;
                        this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(8);
                    }
                }
            } else if (n.g(n2, n3)) {
                df.e_m0_PRV();
                bs.c_f0_Z = true;
            }
        }
        let true = null;
    
  }
  d() {

        super.d_m0_PRV();
        a.a_f1_Z = true;
    
  }
  a_m4_PLcm_RV(cm2) {

        let n2 = null;
        di.a_f4_Lg_.c_m2_PRV();
        this.a_m8_PLcm_ZZABZRV(cm2, false, true, this.b_f0_AB, false);
        n.a_m0_PLcm_IRV(cm2, 3);
        if {
            this.a_m11_PLcm_BZIZRV(cm2, 0, false, 1, true);
            let n3 = this.b_ + 80;
            n.a_m12_PLcm_IIIRV(cm2, this.a_, n3, 15);
            this.a_m1_PLcm_Lbj_RV(cm2, this.a_f1_Lbj_);
            n2 = this.b_ + 174 - 11;
            this.b_m0_PLcm_RV;
            let as2 = this.a_f1_Lbj_.a_m1_PIRLas_;
            if (as2 != null) {
                this.a_m6_PLcm_IILas_RV(cm2, this.a_, n3 + 2, as2);
            }
            cm2.b_m0_PIIIIRV(this.a_, this.b_, d.e_, 174);
            cm2.a_m2_PIRV(3550755);
            this.b_m5_PLcm_IIIRV(cm2, this.a_ + 111, n2 + 2, di.e_f1_I);
        } else {
            n.c_m5_PLcm_IIIIIRV(cm2, this.a_ + (d.e_ - 14 >> 1), this.b_ + 15, 14, 14, 0);
            if (this.a_f0_Las_ != null) {
                this.a_f0_Las_.a_m9_PLcm_IIRV(cm2, this.a_ + (d.e_ - 14 >> 1), this.b_ + 15);
            }
            if (this.g == 0) {
                bo.b_m1_PLcm_IIRV(cm2, this.a_ + (d.e_ - 14 >> 1), this.b_ + 15);
            }
            n.a_m12_PLcm_IIIRV(cm2, this.a_, this.b_ + 31, 15);
            this.a_m6_PLcm_IILas_RV(cm2, this.a_, this.b_ + 31 + 2, this.a_f0_Las_);
            this.a_m5_PLcm_IIABIIRV(cm2, this.a_, this.b_ + 31 + 2 + 80, this.b_f1_Lch_.a_m0_PIRAB(1), this.k, this.j);
            this.a_m5_PLcm_IIABIIRV(cm2, this.a_, this.b_ + 31 + 2 + 80 + 15, this.b_f1_Lch_.a_m0_PIRAB(2), di.e_f1_I, this.f);
            this.a_m16_PLcm_IIIABZRV(cm2, this.a_ + 3, this.b_ + 174 - 16, d.e_ - 6, this.b_f1_Lch_.a_m0_PIRAB(3), this.g == 1);
        }
        if (this.a_f2_J > 0 || (this).f > 0) {
            if (this.a_f2_J == 1) {
                let n4 = null;
                block10: {
                    let as3 = this.a_f0_Las_;
                    as3 = as3;
                    for (n2 = 0; n2 < (as3).c_f1_AB.length && (as3).c_f1_AB[n2] != -3; ++n2) {
                        if ((as3).c_f1_AB[n2] != -2) continue;
                        (as3).c_f1_AB[n2] = -1;
                        n4 = 0;
                        let block10 = null;
                    }
                    n4 = 5;
                }
                let n5 = n4;
                this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(n5 + 3);
                di.a_m11_PBRLbj_(20).b_m0_PBBIRZ(20, 0, this.j);
                this.k = di.a_m11_PBRLbj_(20).a_m10_PBBRI(20, 0);
                di.e_f1_I -= this.f;
                this.f = dw.b;
                this.j = dw.a_m1_PLas_RI;
                this.a_f2_J = 0;
                (this).f = 15;
            } else if (this.a_f2_J > 0) {
                --this.a_f2_J;
            }
            bo.a_m3_PLcm_IIABIRV(cm2, this.a_, this.b_, this.a_f1_AB, 1);
            this.d();
        }
    
  }
  a_m5_PLcm_IIABIIRV(cm2, n2, n3, byArray, n4, n5) {

        n.c_m5_PLcm_IIIIIRV(cm2, n2 + 3, n3, 120, 14, 3550755);
        cm2.a_m2_PIRV(15723216);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 3 + 2, n3, byArray, 0);
        if (n5 > 0) {
            cm2.a_m2_PIRV(n4 < n5 ? 0xFF0000 : 15723216);
            n.b_m6_PLcm_IIIIIRV(cm2, n4, n2 + 80 + 30, n3 + 2, 8, 0);
        } else {
            ac.a_m2_PLcm_IIABIIRV(cm2, n2 + 80 + 30, n3 + 2, this.a_f0_Lch_.a_m0_PIRAB(2), 0, 8);
        }
        n.c_m5_PLcm_IIIIIRV(cm2, n2 + 3 + 80 + 42, n3, dw.e_f0_I - 42, 14, 3550755);
        cm2.a_m2_PIRV(15723216);
        if (n5 > 0) {
            n.b_m6_PLcm_IIIIIRV(cm2, n5, n2 + 3 + 80 + 2 + dw.e_f0_I - 3, n3 + 2, 8, 0);
            return;
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, n2 + 3 + 80 + 2 + dw.e_f0_I - 3, n3 + 2, this.a_f0_Lch_.a_m0_PIRAB(2), 0, 8);
    
  }
}

JavaRegistry.set("dw", dw);
JavaRegistry.set("dw", dw);
try { if (typeof dw.__clinit === 'function') dw.__clinit(); } catch (e) { console.warn('clinit dw', e); }

globalThis.dw = dw;
