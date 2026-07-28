/** Transpiled from cc */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cc extends (JavaRegistry.get("bo") || class {}) {
  g = 0;
  b_f0_AB = null;
  h = 1;
  i = 0;
  j = 0;
  static a_f0_ALbj_ = new bj[2];
  e = null;
  a_f1_Las_ = null;
  b_f1_Lch_ = new ch("/t/ni");
  cc(n2) {

        super;
        this.a_m0_PRV();
        cc.a_f0_ALbj_[1] = di.a_m11_PBRLbj_(0);
        this.e = false;
    
  }
  a_m0_PRV() {

        this.g = 0;
        this.d();
        this.b_f1_Ln_ = new bt(this, this.b_f1_Lch_.a_m0_PIRAB(0), this.b_f1_Lch_.a_m1_PIIRAAB(1, 2));
    
  }
  d() {

        super.d_m0_PRV();
        a.a_f1_Z = true;
    
  }
  g() {

        this.b_f0_AB = this.b_f1_Lch_.a_m0_PIRAB(3 + this.h);
    
  }
  static a_m1_PBIRV(by2, n2) {

        for (let i2 = 0; i2 <= n2; ++i2) {
            cc.a_f0_ALbj_[0].a_m5_PLas_IRI(as.a_m0_PBBRLas_(by2, i2), 1);
        }
    
  }
  h() {

        cc.a_f0_ALbj_[0] = null;
        cc.a_f0_ALbj_[0] = new bj(28);
        switch {
            case 0: {
                this.j = 5;
                if (this.i > this.j) {
                    this.i = (this.j - 1);
                }
                if (this.i == 0) {
                    a_m1_PBIRV(0, 13);
                    a_m1_PBIRV(1, 13);
                    return;
                }
                if (this.i == 1) {
                    a_m1_PBIRV(2, 13);
                    a_m1_PBIRV(3, 13);
                    return;
                }
                if (this.i == 2) {
                    a_m1_PBIRV(4, 13);
                    return;
                }
                if (this.i == 3) {
                    a_m1_PBIRV(5, 13);
                    return;
                }
                a_m1_PBIRV(6, 13);
                return;
            }
            case 1: {
                this.j = 5;
                if (this.i > this.j) {
                    this.i = (this.j - 1);
                }
                if (this.i == 0) {
                    a_m1_PBIRV(10, 13);
                    return;
                }
                if (this.i == 1) {
                    a_m1_PBIRV(12, 13);
                    a_m1_PBIRV(13, 13);
                    return;
                }
                if (this.i == 2) {
                    a_m1_PBIRV(8, 13);
                    a_m1_PBIRV(9, 13);
                    return;
                }
                if (this.i == 3) {
                    a_m1_PBIRV(14, 13);
                    a_m1_PBIRV(15, 13);
                    return;
                }
                a_m1_PBIRV(7, 13);
                return;
            }
            case 2: {
                this.j = 3;
                if (this.i > this.j) {
                    this.i = (this.j - 1);
                }
                if (this.i == 0) {
                    a_m1_PBIRV(20, 8);
                    return;
                }
                if (this.i == 1) {
                    a_m1_PBIRV(16, 11);
                    return;
                }
                a_m1_PBIRV(17, 15);
                return;
            }
            case 3: {
                this.j = 3;
                if (this.i > this.j) {
                    this.i = (this.j - 1);
                }
                if (this.i == 0) {
                    cc.a_f0_ALbj_[1] = di.a_m11_PBRLbj_(0);
                    return;
                }
                if (this.i == 1) {
                    cc.a_f0_ALbj_[1] = di.a_m11_PBRLbj_(18);
                    return;
                }
                cc.a_f0_ALbj_[1] = di.a_m11_PBRLbj_(19);
            }
        }
    
  }
  a_m2_PLas_BRV(as2, by2) {

        as2 = as.a_m0_PBBRLas_(as2.a_f1_B, as2.b_f0_B);
        if (di.a_m11_PBRLbj_.a_m5_PLas_IRI(as2, by2) <= 0) {
            this.f = 15;
            this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(6);
            return;
        }
        this.f = 15;
        this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(21);
        di.e_m1_PIRV(0 - as2.a_f2_I * by2);
    
  }
  a_m3_PBBRV(by2, by3) {

        this.c_m0_PRV();
        this.d();
        if (by2 == -1 && by3 == -1) {
            this.f = 15;
            this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(20);
            return;
        }
        if (by2 == -2 && by3 == -2) {
            by3 = 0;
        }
        if (this.g == 0) {
            this.g = 1;
            this.e = false;
            this.i = 0;
            this.a_f2_B = 0;
            this.h = by3 == 0 ? 0 : 3;
            this.g();
            this.h();
            return;
        }
        if (this.g == 2) {
            if (by3 == 0) {
                if (this.h < 3) {
                    if (di.e_f1_I < this.a_f1_Las_.a_f2_I) {
                        if {
                            this.f = 15;
                            this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(20);
                        } else {
                            this.f = 15;
                            this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(20);
                        }
                    } else if (this.a_f1_Las_.a_f1_B == 20) {
                        this.b_f1_Ln_ = new cp(this, 99, 1, this.a_f1_Las_.a_f2_I, true, this.a_f0_Lch_.a_m0_PIRAB(7));
                        this.g = 3;
                    } else {
                        this.a_m2_PLas_BRV(this.a_f1_Las_, 1);
                    }
                } else {
                    if (this.a_f1_Las_.c > 1) {
                        this.b_f1_Ln_ = new cp(this, this.a_f1_Las_.c, 1, this.a_f1_Las_.a_f2_I / 10, false, this.a_f0_Lch_.a_m0_PIRAB(7));
                        this.g = 3;
                    } else {
                        di.a_m11_PBRLbj_.b_m0_PBBIRZ(this.a_f1_Las_.a_f1_B, this.a_f1_Las_.b_f0_B, 1);
                        di.e_m1_PIRV(this.a_f1_Las_.a_f2_I / 10);
                        this.f = 15;
                        this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(22);
                    }
                    if (this.a_f1_Las_.a_f1_B == 20) {
                        bs.d_f0_Z = true;
                    }
                }
                this.d();
            }
            return;
        }
        if (this.g == 3) {
            if (by3 > 0) {
                if (this.h < 3) {
                    this.a_m2_PLas_BRV(this.a_f1_Las_, by3);
                } else {
                    di.a_m11_PBRLbj_.b_m0_PBBIRZ(this.a_f1_Las_.a_f1_B, this.a_f1_Las_.b_f0_B, by3);
                    while (by3 > 0) {
                        di.e_m1_PIRV(this.a_f1_Las_.a_f2_I / 10);
                        by3 = (by3 - 1);
                    }
                    this.f = 15;
                    this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(22);
                }
                bs.d_f0_Z = true;
                this.d();
            }
            return;
        }
        df.e_m0_PRV();
        this.d();
    
  }
  a_m4_PIIRZ(n2, n3) {

        if (this.f > 0) {
            this.f = 0;
            this.a_f1_AB = null;
            bs.c_f0_Z = true;
            let true = null;
        }
        if (n.g(n2, n3)) {
            bs.c_f0_Z = true;
            if (this.g == 0) {
                if (this.a_f1_Ln_ != null) {
                    this.a_f1_Ln_.c_m0_PRV();
                    let true = null;
                }
                df.e_m0_PRV();
                this.d();
                let true = null;
            }
            if (this.g == 2 || this.g == 3) {
                if (this.b_f1_Ln_ != null && this.b_f1_Ln_ instanceof bw && this.b_m2_PIIRZ(n2, n3)) {
                    let true = null;
                }
                this.g = 1;
                this.c_m0_PRV();
                let true = null;
            }
        }
        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_m0_PRV();
            this.d();
            let true = null;
        }
        if (n3 == 49) {
            if (this.h < 3) {
                this.h = ((this.h + 3 - 1) % 3);
            }
            this.h();
            this.g();
            let true = null;
        }
        if (n3 == 51) {
            if (this.h < 3) {
                this.h = ((this.h + 1) % 3);
            }
            this.h();
            this.g();
            let true = null;
        }
        if {
            if (n.i(n2, n3)) {
                this.e = false;
            } else if (n2 == 1 || n3 == 50) {
                this.i = ((this.i + this.j - 1) % this.j);
                this.h();
            } else if (n2 == 6 || n3 == 56) {
                this.i = ((this.i + 1) % this.j);
                this.h();
            }
        } else {
            if (n.f_m0_PIIRZ(n2, n3)) {
                this.a_f1_Las_ = cc.a_f0_ALbj_[this.h < 3 ? 0 : 1].a_m1_PIRLas_;
                if (this.a_f1_Las_ == null) {
                    let true = null;
                }
                if (this.a_f1_Las_.c()) {
                    this.f = 15;
                    this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(23);
                    this.d();
                } else {
                    byte[][] byArrayArray = new Int8Array(2)[];
                    byte[][] byArrayArray2 = byArrayArray;
                    byArrayArray[0] = d.l;
                    byArrayArray2[1] = d.m;
                    let byArray = this.b_f1_Lch_.a_m0_PIRAB(this.h < 3 ? 18 : 19);
                    if (this.h < 3 && this.a_f1_Las_ instanceof bm && !dp.a_m4_PLas_RZ) {
                        byArray = rpg.g.a_m0_PABABRAB(d.v, byArray);
                    }
                    this.b_f1_Ln_ = new bt(this, byArray, byArrayArray2);
                    this.g = 2;
                    this.d();
                }
                bs.c_f0_Z = true;
                let true = null;
            }
            this.e_m1_PIIRZ(n2, n3);
            if (this.a_f2_B % this.c_f0_B == 0 && this.j > 1 && n.h(n2, n3)) {
                this.e = true;
                let true = null;
            }
            this.d_m2_PIIRZ(n2, n3);
        }
        let true = null;
    
  }
  a_m5_PLcm_RV(cm2) {

        di.a_f4_Lg_.c_m2_PRV();
        n.a_m0_PLcm_IRV(cm2, 3);
        if (this.g == 0) {
            return;
        }
        this.a_m8_PLcm_ZZABZRV(cm2, false, true, this.b_f0_AB, this.h < 3);
        if (this.h < 3) {
            this.a_m2_PLcm_BBZRV(cm2, this.j, this.i, this.e);
        } else {
            this.a_m11_PLcm_BZIZRV(cm2, this.i, this.e, this.j, true);
        }
        let n2 = this.b_ + 80;
        let n3 = this.a_ + 8;
        n.a_m12_PLcm_IIIRV(cm2, this.a_, n2, 15);
        this.a_m1_PLcm_Lbj_RV(cm2, cc.a_f0_ALbj_[this.h < 3 ? 0 : 1]);
        let n4 = this.b_ + 174 - 11;
        let as2 = cc.a_f0_ALbj_[this.h < 3 ? 0 : 1].a_m1_PIRLas_;
        if (!this.e) {
            this.b_m0_PLcm_RV;
        }
        if (as2 != null) {
            this.a_m6_PLcm_IILas_RV(cm2, this.a_, n2 + 2, as2);
        }
        cm2.a_m2_PIRV(3550755);
        cm2.a_m4_PIIIIRV(n3, n4, 55, 11);
        cm2.a_m4_PIIIIRV(n3 + 1, n4 - 1, 53, 1);
        if (as2 != null) {
            this.b_m5_PLcm_IIIRV(cm2, n3 + 55 - 4, n4 + 2, this.h >= 3 ? as2.a_f2_I / 10 : as2.a_f2_I);
        }
        cm2.b_m0_PIIIIRV(this.a_, this.b_, d.e_, 174);
        cm2.a_m2_PIRV(3550755);
        this.b_m5_PLcm_IIIRV(cm2, this.a_ + 111, n4 + 2, di.e_f1_I);
        if (this.f > 0) {
            bo.a_m3_PLcm_IIABIRV(cm2, this.a_, this.b_, this.a_f1_AB, 1);
            this.d();
        }
    
  }
}

JavaRegistry.set("cc", cc);
JavaRegistry.set("cc", cc);
try { if (typeof cc.__clinit === 'function') cc.__clinit(); } catch (e) { console.warn('clinit cc', e); }

globalThis.cc = cc;
