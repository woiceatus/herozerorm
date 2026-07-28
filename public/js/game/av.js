/** Transpiled from av */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class av extends (JavaRegistry.get("af") || class {}) {
  Q = null;
  R = null;
  static a_f0_Lav_ = null;
  static a_f1_ALbi_ = null;
  g = null;
  o = null;
  i = false;
  S = new Int8Array([-22, 24, 35, 24]);
  T = new Int8Array([-30, 9, 50, 9]);
  U = new Int8Array([-2, 4, 1, 3]);
  V = new Int8Array([6, 12, 8, 13]);
  av(s2, s3, s4, by2) {

        /*super*/(135, 100, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_);
        this.Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 12);
        this.R = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 14);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 15);
        this.c_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 16);
        this.d_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 17);
        this.a_m0_PABRV;
        this.b_f2_I = -1;
        av.a_f0_Lav_ = this;
        this.c_m0_PBRV(1);
        this.a_m1_PBRV(1);
    
  }
  a_m0_PRV() {

        this.h_f0_B = this.b_f1_B == 3 ? this.R[this.a_f2_B] : 0;
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  a_m1_PIIRV(n2, n3) {

        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, 1, this.c_f1_I, n2, n3);
    
  }
  k() {

        if (this.a_f1_S <= 0 && !this.f_f2_Z) {
            let av2 = this;
            this.b_f2_I = (av2.b_f2_I + 1) % av2.b_f1_AB.length;
            av2.a_f2_B = av2.b_f1_AB[av2.b_f2_I];
            if (av2.a_f2_B == 4 && !av2.i) {
                av2.b_f2_I = (av2.b_f2_I + 1) % av2.b_f1_AB.length;
                av2.a_f2_B = av2.b_f1_AB[av2.b_f2_I];
            }
            switch {
                case 3: {
                    av2.i = false;
                }
            }
            av2.a_m1_PBRV(3);
            this.a_m1_PBRV(3);
        }
    
  }
  l() {

        return this.h_f0_B == 7;
    
  }
  a_m2_PLdo_BIZBBZZZRZ(do_, by2, n2, bl2, by3, by4, bl3, bl4, bl5) {

        if (!this.l()) {
            return super.a_m6_PLdo_BIZBBZZZRZ(do_, by2, -90, bl2, by3, by4, bl3, bl4, bl5);
        }
        return super.a_m6_PLdo_BIZBBZZZRZ(do_, by2, n2, bl2, by3, by4, bl3, bl4, bl5);
    
  }
  a_m3_PIBRZ(n2, by2) {

        if (!this.l()) {
            return super.a_m13_PIBRZ(-90, by2);
        }
        return super.a_m13_PIBRZ(n2, by2);
    
  }
  a_m4_PLal_IBRZ(al2, n2, by2) {

        if (!this.l()) {
            return super.a_m14_PLal_IBRZ(al2, -90, by2);
        }
        return super.a_m14_PLal_IBRZ(al2, n2, by2);
    
  }
  a_m5_PIRZ(n2) {

        switch {
            case 0: 
            case 1: {
                if (n2 == 6) {
                    di.a_f4_Lg_.c_m4_PIIRV(1, 1);
                    if (this.a_f2_B == 0) {
                        new t(0, (this.h + this.S[0]), ((this).i + this.S[1]), this.a_f1_Ls_, 11, false, av.a_f1_ALbi_[0], this.a_m21_PRS(), 2, 1);
                        break;
                    }
                    new t(0, (this.h + this.S[2]), ((this).i + this.S[3]), this.a_f1_Ls_, 11, false, av.a_f1_ALbi_[1], this.a_m21_PRS(), 2, 1);
                    break;
                }
                if (n2 != 7) break;
                di.a_f4_Lg_.c_m4_PIIRV(1, 2);
                break;
            }
            case 2: {
                if (n2 == 6) {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                    new t(0, (this.h + this.S[0]), ((this).i + this.S[1]), this.a_f1_Ls_, 11, false, av.a_f1_ALbi_[0], this.a_m21_PRS(), 2, 1);
                    new t(0, (this.h + this.S[2]), ((this).i + this.S[3]), this.a_f1_Ls_, 12, false, av.a_f1_ALbi_[1], this.a_m21_PRS(), 2, 1);
                    break;
                }
                if (n2 == 7) {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 1);
                    break;
                }
                if (n2 == 8) {
                    di.a_f4_Lg_.c_m4_PIIRV(1, 2);
                    break;
                }
                if (n2 != 9) break;
                di.a_f4_Lg_.c_m4_PIIRV(1, 1);
                break;
            }
            case 3: {
                if (this.i || n2 <= 2) break;
                let do_ = this.a_f1_Ldo_;
                if (do_.j || do_.k) break;
                new t(0, (this.h + this.T[0]), ((this).i + this.T[1]), this.a_f1_Ls_, 13, false, av.a_f1_ALbi_[0], this.a_m21_PRS(), 2, 1);
                new t(0, (this.h + this.T[2]), ((this).i + this.T[3]), this.a_f1_Ls_, 13, false, av.a_f1_ALbi_[1], this.a_m21_PRS(), 2, 1);
                this.i = true;
                this.g = do_.s;
                this.o = do_.t;
                for (let n3 = 1; n3 <= 4; n3 = ((n3 + 1))) {
                    this.a_m7_PBBZRV((this.g + rpg.d.J[n3]), (this.o + rpg.d.K[n3]), false);
                }
                break;
            }
            case 4: {
                if (n2 == 5) {
                    new t(0, (this.g << 4), (this.o << 4), this.a_f1_Ls_, 16, false, this, this.a_m21_PRS(), 2, 1);
                    break;
                }
                if (n2 != 7) break;
                new t(8, (this.g << 4), (this.o << 4), this.a_f1_Ls_, 17, false, this, this.a_m21_PRS(), 2, 1);
                break;
            }
            case 5: {
                if (n2 <= 3 || n2 % 2 != 0) break;
                new t(13, this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_, 15, true, this, this.a_m21_PRS(), 0, 6);
                break;
            }
            case 6: {
                if (n2 != 7) break;
                new t(9, (this.h + 8), (this.t + 4 << 4), this.a_f1_Ls_, 14, true, this, this.a_m21_PRS(), 0, 15);
            }
        }
        let n2 == this.d_f1_AB[this.a_f2_B];
    
  }
  b() {

        let alArray = cd.a_m24_PRALal_();
        switch {
            case 0: 
            case 1: {
                let n2 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % (this.V[1] - this.V[0] + 1) + this.V[0];
                let n3 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % (this.V[3] - this.V[2] + 1) + this.V[2];
                if (g.a_m5_PIIRZ(n2, n3)) break;
                this.a_m7_PBBZRV(n2, n3, true);
                return;
            }
            case 2: {
                for (let i2 = 0; i2 < 2; ++i2) {
                    if (alArray[i2] == null) continue;
                    let al2 = alArray[i2];
                    let av2 = this;
                    if (!(al2.s >= av2.s + av2.U[0] && al2.s <= av2.s + av2.U[1] && al2.t >= av2.t + av2.U[2] && al2.t <= av2.t + av2.U[3])) continue;
                    this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), 2);
                }
                return;
            }
            case 4: {
                for (let i3 = 0; i3 < 2; ++i3) {
                    if (alArray[i3] == null || this.g != alArray[i3].s || this.o != alArray[i3].t) continue;
                    this.b_m5_PLal_IBRZ(alArray[i3], this.a_m21_PRS(), 2);
                }
                let g2 = di.a_f4_Lg_;
                for (let n4 = 1; n4 <= 4; n4 = ((n4 + 1))) {
                    let du2 = g2.a_m22_PIIRLdu_((this.g + rpg.d.J[n4]), (this.o + rpg.d.K[n4]));
                    if (du2 == null || !(du2 instanceof co)) continue;
                    (du2).a_m1_PBRV(6);
                }
                break;
            }
        }
    
  }
  m() {

        di.a_f4_Lg_.d_m2_PLdu_RV;
        this.b_m0_PABRV;
        av.a_f1_ALbi_[0].m();
        av.a_f1_ALbi_[1].m();
        av.a_f1_ALbi_ = null;
    
  }
  static a_m6_PLbi_RV(bi2) {

        if (av.a_f1_ALbi_ == null) {
            av.a_f1_ALbi_ = new bi[2];
        }
        av.a_f1_ALbi_[av.a_f1_ALbi_[0] == null ? 0 : 1] = bi2;
        if (av.a_f1_ALbi_[0] != null && av.a_f1_ALbi_[1] != null && av.a_f1_ALbi_[0].s > av.a_f1_ALbi_[1].s) {
            av.a_f1_ALbi_[1] = av.a_f1_ALbi_[0];
            av.a_f1_ALbi_[0] = bi2;
        }
    
  }
  a_m7_PBBZRV(by2, by3, bl2) {

        let alArray = cd.a_m24_PRALal_();
        for (let i2 = 0; i2 < 2; ++i2) {
            if (alArray[i2] == null || alArray[i2].s != by2 || alArray[i2].t != by3) continue;
            alArray[i2].b_m4_PBRV(2);
        }
        new co((by2 << 4), (by3 << 4), bl2);
    
  }
}

JavaRegistry.set("av", av);
JavaRegistry.set("av", av);
try { if (typeof av.__clinit === 'function') av.__clinit(); } catch (e) { console.warn('clinit av', e); }

globalThis.av = av;
