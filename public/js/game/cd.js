/** Transpiled from cd */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cd extends (JavaRegistry.get("k") || class {}) {
  c_f0_S = null;
  a_f0_Ldt_ = null;
  a_f1_Ls_ = null;
  h_f0_B = null;
  f_f0_I = null;
  static c_f1_Ljava_util_Vector_ = new Vector();
  b_f0_S = 0;
  a_f2_Lal_ = null;
  i = null;
  a_f3_B = null;
  j_f0_B = null;
  k_f0_B = null;
  l = 0;
  m = 0;
  j_f1_S = this.s;
  k_f1_S = this.t;
  n = null;
  j_f2_I = null;
  k_f2_I = null;
  d = null;
  e_f0_S = null;
  f_f1_S = null;
  g_f0_S = null;
  f_f2_Z = false;
  b_f1_Z = false;
  g_f1_Z = false;
  h_f1_Z = false;
  b_f2_I = 0;
  g_f2_B = 0;
  e_f1_I = 0;
  a_f4_AB = null;
  static a_m0_PSSBBRV(s2, s3, by2, by3) {

        let s4 = by2;
        by2 = s4;
        if (s4 < 0) {
            by2 = (by2 + 256);
        }
        switch {
            case 100: 
            case 123: {
                ck.a = by3;
                ck.b_f0_S = by2;
                return;
            }
            case 99: 
            case 122: {
                new v(s2, s3, by2, by3);
                return;
            }
            case 101: 
            case 124: {
                new cs(149, 52, by2, by3);
                return;
            }
            case 102: 
            case 125: {
                new cq(100, 85, by2, by3);
                return;
            }
            case 103: 
            case 126: {
                new cq(148, 70, by2, by3);
                return;
            }
            case 104: 
            case 127: {
                new cq(198, 81, by2, by3);
                return;
            }
            case 105: 
            case 128: {
                new an(1, 1, by2, by3);
                return;
            }
            case 106: 
            case 129: {
                new by(168, 56, by2, by3);
                return;
            }
            case 107: 
            case 130: {
                new by(216, 72, by2, by3);
                return;
            }
            case 108: 
            case 131: {
                new by(248, 120, by2, by3);
                return;
            }
            case 119: {
                new av(135, 100, by2, by3);
                return;
            }
            case 120: {
                new bi(s2, s3, by2, by3);
                return;
            }
            case 121: {
                co.a = by3;
                co.b_f0_S = by2;
                return;
            }
            case 109: 
            case 111: 
            case 113: {
                new ap(s2, s3, by2, by3);
                return;
            }
            case 110: 
            case 112: 
            case 114: {
                new cw(s2, s3, by2, by3);
                return;
            }
            case 115: {
                new bc(s2, s3, by2, by3);
                return;
            }
            case 116: {
                bc.b = by2;
                bc.g = by3;
                return;
            }
            case 117: 
            case 118: {
                new e(s2, s3, by2, by3);
                return;
            }
        }
        if (dt.a_f0_ALdt_[by3].a_f3_B == 4) {
            new ag(s2, s3, by2, by3);
            return;
        }
        if (dt.a_f0_ALdt_[by3].a_f3_B == 5) {
            new ci(s2, s3, by2, by3);
            return;
        }
        new cd(s2, s3, by2, by3, dt.a_f0_ALdt_[by3].a_f1_Ls_, false);
    
  }
  cd(s2, s3) {

        /*super*/(s2, s3, 8, 7);
        this.c_m0_PBRV(2);
    
  }
  cd(s2, s3, s4, by2, s5, bl2) {

        this(s2, s3);
        this.c_f0_S = s4;
        this.a_f0_Ldt_ = dt.a_f0_ALdt_[by2];
        this.a_f1_Ls_ = s5;
        this.i = this.a_f0_Ldt_.j;
        this.a_f3_B = this.a_f0_Ldt_.g;
        this.j_f0_B = this.a_f0_Ldt_.c_f1_B;
        this.k_f0_B = this.a_f0_Ldt_.b_f0_B;
        this.u = (this.a_f0_Ldt_.e_f1_B + 1);
        this.d_m3_PBRV;
        if (this.f <= 0) {
            this.b_m0_PIRV(-1);
        }
        if {
            this.a_m6_PBBRZ(0, this.a_f0_Ldt_ == null || this.a_f0_Ldt_.d_f3_Z ? 8 : 0);
            this.i();
            return;
        }
        this.b_f0_S = 0;
        cd.a_m5_PLcd_RV;
    
  }
  a_m1_PBRV(by2) {

        super.a_m0_PBRV;
        if (this.b_f1_B == 7 && this.c_f0_S != -1) {
            di.c_m5_PIBRV(this.c_f0_S, this.a_f0_Ldt_ != null ? this.a_f0_Ldt_.f_f1_B : -1);
        } else if (this.b_f1_B == 6) {
            this.i();
        }
        this.a_m4_PRV();
    
  }
  i() {

        let cd2 = null;
        let n2 = null;
        super.i();
        if (this.a_f0_Ldt_ != null && this.a_f0_Ldt_.a_f5_Z) {
            n2 = 0;
            cd2 = this;
            (this).l = n2;
        }
        this.p();
        cd2 = this;
        n2 = di.h_f1_B > 2 ? 2 : di.h_f1_B;
        if (n2 != 0) {
            let by2 = cd2.n;
            cd2.n = ((n2 + 1) * by2 / 5 + (n2 == 1 ? 40 : 60));
            cd2.d = (cd2.d * cd2.n / by2);
            cd2.e_f0_S = (cd2.e_f0_S * cd2.n / by2);
            cd2.k_f2_I = cd2.j_f2_I = (cd2.j_f2_I - 70) * (cd2.n + (n2 == 1 ? 20 : 40)) / by2;
            cd2.f_f1_S = ((cd2.f_f1_S - 13) * cd2.n / by2 + (n2 == 1 ? 20 : 40));
            cd2.g_f0_S = ((cd2.g_f0_S - 10) * cd2.n / by2);
        }
        this.q();
        this.a_f2_Lal_ = null;
        this.a_f4_AB = null;
        this.e_f1_I = 0;
        this.b_f1_Z = false;
        this.g_f1_Z = false;
        this.f_f2_Z = false;
        this.g_f2_B = 0;
        this.b_f2_I = 0;
        this.h_f1_Z = false;
    
  }
  p() {

        this.n = this.a_f0_Ldt_.d_f1_B;
        let s2 = this.a_f0_Ldt_.d_f2_S;
        this.j_f2_I = s2;
        this.k_f2_I = s2;
        this.d = this.a_f0_Ldt_.b_f1_S;
        this.e_f0_S = this.a_f0_Ldt_.c_f2_S;
        this.f_f1_S = this.a_f0_Ldt_.e_f0_S;
        this.g_f0_S = this.a_f0_Ldt_.f_f0_S;
    
  }
  q() {

        let n2 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 3;
        this.n = (this.n + n2);
        this.j_f2_I += n2 * 20;
        this.k_f2_I = this.j_f2_I;
        this.f_f1_S = (this.f_f1_S + n2 * 3);
    
  }
  c_m0_PRI() {

        return this.k_f2_I;
    
  }
  d_m0_PRI() {

        return this.j_f2_I;
    
  }
  b_m0_PIIRV(n2, n3) {

        n2 = n2 + this.h + this.q + (this.u - 1 << 3);
        n3 = n3 + (this).i + this.r + 1;
        if (this.l > 0) {
            this.l = (this.l - 1);
            n2 += rpg.d.J[this.m] * dy.e[this.l];
            n3 += rpg.d.K[this.m] * dy.e[this.l];
        }
        if (n2 < -16 || n3 < 0 || n2 > bs.j + 16 || n3 > bs.k + 32) {
            this.b_m3_PIIZRV(n2, n3 - (this.a_f0_Ldt_ != null ? this.a_f0_Ldt_.h : 0), true);
            this.d_m2_PIIRV(n2, n3);
            this.a_f0_Z = false;
            if (!this.c_m1_PRZ()) {
                return;
            }
        }
        this.a_f0_Z = true;
        if (!(this).l && !this.c_m1_PRZ()) {
            return;
        }
        this.a_m4_PIIZRV(n2, n3, this.f_f2_Z);
        n3 = this.a_m2_PIRI;
        this.a_m3_PIIRV(n2, n3);
        this.b_m3_PIIZRV(n2, n3, true);
        this.d_m2_PIIRV(n2, n3);
    
  }
  a_m2_PIRI(n2) {

        if {
            if (this.e_f1_I >= this.a_f4_AB.length) {
                let cd2 = this;
                this.f_f2_Z = false;
                cd2.e_f1_I = 0;
                cd2.a_f4_AB = null;
                cd2.a_m17_PRZ();
            } else {
                n2 -= this.a_f4_AB[this.e_f1_I];
                ++this.e_f1_I;
            }
        }
        let n2 = null;
    
  }
  c_m1_PRZ() {

        let false = null;
    
  }
  a_m3_PIIRV(n2, n3) {

        switch {
            case 6: {
                rpg.e.a_f4_Ls_.a_m2_PBBIIIRI(0, 1, this.c_f1_I, n2, n3);
                return;
            }
        }
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.c_f0_B, this.c_f1_I, n2, n3);
    
  }
  a_m4_PRV() {

        let n2 = null;
        let cd2 = null;
        if (this.a_f1_Ls_ == null) {
            cd2 = this;
            n2 = 0;
        } else {
            switch {
                case 0: 
                case 1: 
                case 5: {
                    this.h_f0_B = 0;
                    break;
                }
                case 2: {
                    this.h_f0_B = 1;
                    break;
                }
                case 3: {
                    this.h_f0_B = 2;
                    break;
                }
                case 4: {
                    this.h_f0_B = 3;
                    break;
                }
                case 6: {
                    this.h_f0_B = 0;
                    break;
                }
                default: {
                    this.f_f0_I = 0;
                }
            }
            cd2 = this;
            n2 = this.b_f1_B == 6 ? rpg.e.a_f4_Ls_.a_m3_PBRB: this.a_f1_Ls_.a_m3_PBRB;
        }
        cd2.f_f0_I = n2;
    
  }
  c_m2_PRV() {

        super.c_m2_PRV();
        ++this.c_f1_I;
        this.t();
        this.l();
        if (this.c_f1_I < 0) {
            this.c_f1_I = 0;
        }
        this.d_m0_PIRV;
        if (this.a_f1_S > 0) {
            this.a_f1_S = (this.a_f1_S - 1);
        }
        if (this.a_f2_I > 0) {
            --this.a_f2_I;
        }
    
  }
  h_m0_PRV() {

        if (this.a_f1_S > 0 && this.f_m0_PRZ()) {
            this.d_m1_PRZ();
            return;
        }
        this.a_m2_PIRV(this.k_f0_B + this.g_f2_B);
    
  }
  static a_m5_PLcd_RV(cd2) {

        cd2.s();
        cd.c_f1_Ljava_util_Vector_.addElement;
    
  }
  static B() {

        cd.c_f1_Ljava_util_Vector_.removeAllElements();
    
  }
  static C() {

        for (let i2 = cd.c_f1_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            let cd2 = cd.c_f1_Ljava_util_Vector_.elementAt;
            if (cd2.b_f0_S == 0) {
                if (cd2.a_m6_PBBRZ(0, cd2.a_f0_Ldt_ == null || cd2.a_f0_Ldt_.d_f3_Z ? 8 : 0)) {
                    cd2.i();
                    cd.c_f1_Ljava_util_Vector_.removeElementAt;
                    continue;
                }
                cd2.b_f0_S = 10;
                continue;
            }
            if (cd2.b_f0_S <= 0) continue;
            cd2.b_f0_S = (cd2.b_f0_S - 1);
        }
    
  }
  a_m6_PBBRZ(by2, by3) {

        if (this.a_m18_PSSBBRZ(this.j_f1_S, this.k_f1_S, by2, by3)) {
            di.a_f4_Lg_.a_m3_PLdu_RV;
            let true = null;
        }
        let false = null;
    
  }
  o() {

        let by2 = null;
        if (this.c_f0_S == 0) {
            return;
        }
        let byArray = this.a_f0_Ldt_.b_f3_AB;
        let by3 = this.a_m19_PRB();
        let n2 = Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) % 65535;
        if (n2 < 52428) {
            di.a_f4_Lg_.a_m18_PBBIRV(this.b_m1_PRB(), this.t, by3 * 6 + 20 >> 1);
        }
        for (let i2 = 0; i2 < 4; ++i2) {
            by2 = -1;
            let by4 = -1;
            let n3 = rpg.g.a_m2_PABIRI(byArray, i2 * 6 + 2);
            if (n2 >= n3) continue;
            switch {
                case 0: 
                case 1: {
                    by4 = rpg.g.a_m8_PLjava_util_Random_IIRI(al.a_f1_Ljava_util_Random_, byArray[i2 * 6], byArray[i2 * 6 + 1]);
                    by2 = Math.min(by3 / 4, 14);
                    break;
                }
                case 2: {
                    if (by3 <= 13) {
                        by2 = -1;
                        by4 = -1;
                        break;
                    }
                    by4 = rpg.g.a_m8_PLjava_util_Random_IIRI(al.a_f1_Ljava_util_Random_, byArray[i2 * 6], byArray[i2 * 6 + 1]);
                    by2 = Math.min(by3 / 5 + 13, 28);
                    break;
                }
                case 3: {
                    by4 = byArray[i2 * 6];
                    by2 = byArray[i2 * 6 + 1];
                }
            }
            if (by4 == -1 || by2 == -1) continue;
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, by4, by2);
            return;
        }
        if (n2 < 14500) {
            return;
        }
        if (n2 < 20000) {
            by2 = by3 < 20 ? 2 : 6;
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, 20, by2);
            return;
        }
        if (n2 < 25000 && this.c_f0_S < 81) {
            by2 = Math.min(6 * this.c_f0_S / 40, 11);
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, 16, by2);
            return;
        }
        if (n2 < 35000) {
            let cfr_ignored_0 = n2 - (n2 / 2 << 1);
            by2 = false ? 1 : 0;
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, 20, by2);
            return;
        }
        if (n2 < 36500) {
            by2 = Math.min(3 * this.c_f0_S / 10, 27);
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, 18, by2);
            return;
        }
        if (n2 < 38000) {
            let by5 = Math.min(this.c_f0_S / 6, 15);
            by2 = by5;
            if (by5 > by3 / 5) {
                by2 = Math.min(by3 / 5, 15);
            }
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, 17, by2);
            return;
        }
    
  }
  b_m1_PRB() {

        if (this.u == 1) {
            return this.s;
        }
        return (this.s + (al.a_f1_Ljava_util_Random_.nextInt() & 1));
    
  }
  l() {

        let bl2 = null;
        let bl3 = bl2 = !this.j && !this.k;
        if (this.b_f1_B == 6) {
            this.y();
            return;
        }
        if (!this.a_f0_Z && !this.c_m1_PRZ()) {
            this.a_f2_Lal_ = null;
            return;
        }
        switch {
            case 0: 
            case 1: {
                if (this.g_f1_Z || !bl2 && this.a_f2_I != -1) break;
                this.k_m0_PRV();
                return;
            }
            case 2: {
                if (this.a_f2_I != 0 && bl2) {
                    this.a_m2_PIRV(this.k_f0_B + this.g_f2_B);
                    return;
                }
                if (bl2 && this.g_f1_Z) {
                    this.a_m2_PIRV(this.k_f0_B + this.g_f2_B);
                    return;
                }
                if (this.a_f1_S == 0 && bl2) {
                    this.h_m0_PRV();
                    return;
                }
                this.j();
                return;
            }
            case 3: {
                if (this.a_m9_PIRZ) {
                    this.b_m2_PRV();
                }
                if (!this.j()) break;
                this.e();
                return;
            }
            case 4: {
                if (!this.j()) break;
                this.a_m1_PBRV(1);
                return;
            }
            case 8: {
                this.d_m1_PRV();
            }
        }
    
  }
  j() {

        return this.f_f0_I - this.c_f1_I <= 0;
    
  }
  k_m0_PRV() {

        if (this.a_f1_S <= 0 && !this.f_f2_Z && di.d_f3_B == 3) {
            if (this.a_f2_Lal_ == null || this.a_f2_Lal_.b_f1_B == 6 || this.a_f2_Lal_.b_f1_B == 7) {
                this.f();
            }
            if (this.a_f2_Lal_ == null) {
                if (this.a_f2_I == 0) {
                    this.a_m0_PZRV;
                    return;
                }
            } else if (!this.a_m3_PLdu_BRZ(this.a_f2_Lal_, this.i)) {
                if (this.a_m8_PLdu_RZ) {
                    this.a_m1_PBRV(3);
                    return;
                }
                this.a_f2_Lal_ = null;
            }
        }
    
  }
  b_m2_PRV() {

        switch {
            case 0: {
                if (this.i == 1) {
                    if (this.a_f2_Lal_ == di.a_f9_Ldo_ || this.a_f2_Lal_ == di.a_f10_Lh_) {
                        if (di.a_f9_Ldo_ == this.a_m5_PBLdu_RLdu_(this.c_f0_B, di.a_f9_Ldo_)) {
                            this.b_m5_PLal_IBRZ(di.a_f9_Ldo_, this.a_m21_PRS(), this.c_f0_B);
                        }
                        if (di.a_f10_Lh_ == null || di.a_f10_Lh_ != this.a_m5_PBLdu_RLdu_(this.c_f0_B, di.a_f10_Lh_)) break;
                        this.b_m5_PLal_IBRZ(di.a_f10_Lh_, this.a_m21_PRS(), this.c_f0_B);
                        return;
                    }
                    if (this.a_f2_Lal_ != this.a_m5_PBLdu_RLdu_(this.c_f0_B, this.a_f2_Lal_)) break;
                    this.b_m5_PLal_IBRZ(this.a_f2_Lal_, this.a_m21_PRS(), this.c_f0_B);
                    return;
                }
                if (this.i <= 1 || !this.a_m8_PLdu_RZ) break;
                this.b_m5_PLal_IBRZ(this.a_f2_Lal_, this.a_m21_PRS(), this.c_f0_B);
                return;
            }
            case 1: {
                new t(3, this.h, (this).i, this.a_f1_Ls_, 4, false, this, this.a_m21_PRS(), this.d_f0_B, this.i);
                return;
            }
            case 2: {
                let n2 = this.s + rpg.d.J[this.d_f0_B];
                let n3 = this.t + rpg.d.K[this.d_f0_B];
                if (g.a_m5_PIIRZ(n2, n3)) break;
                new t(14, (n2 << 4), (n3 << 4), this.a_f1_Ls_, 4, false, this, this.a_m21_PRS(), this.d_f0_B, this.i);
                return;
            }
            case 3: {
                if (!this.a_m8_PLdu_RZ) break;
                new t(13, this.a_f2_Lal_.h, this.a_f2_Lal_.i, this.a_f1_Ls_, 4, true, this, this.a_m21_PRS(), this.d_f0_B, 1);
            }
        }
    
  }
  e() {

        this.a_f2_Lal_ = null;
        this.a_m2_PIRV;
    
  }
  d_m1_PRV() {

    
  }
  g_m0_PRV() {

        this.a_m1_PBRV(7);
        let s2 = this.a_f0_Ldt_.a_f4_S;
        let cd2 = this;
        this.b_f0_S = s2;
        this.o();
        this.n();
        this.m();
        if (this.b_f0_S > 0) {
            cd.a_m5_PLcd_RV;
        }
    
  }
  m() {

        this.a_f2_Lal_ = null;
        di.a_f4_Lg_.d_m2_PLdu_RV;
    
  }
  a_m7_PSRV(s2) {

        this.b_f0_S = s2;
    
  }
  y() {

        if (this.j()) {
            this.g_m0_PRV();
        }
    
  }
  n() {

        if (this.c_f0_S >= 81 && this.c_f0_S <= 97) {
            di.a_f9_Ldo_.j_m0_PIRV(100);
            return;
        }
        let n2 = 20 + this.a_m19_PRB() - di.a_f9_Ldo_.a_m28_PRB();
        if (n2 < 0) {
            n2 = 0;
        } else if (n2 > 30) {
            n2 = 30;
        }
        di.a_f9_Ldo_.j_m0_PIRV(18 * this.a_m19_PRB() * n2 / 20);
    
  }
  f() {

        let al2 = di.a_f10_Lh_;
        if (al2 != null && this.b_m3_PLdu_RZ) {
            this.a_f2_Lal_ = al2;
            return;
        }
        al2 = di.a_f9_Ldo_;
        if (al2 != null && this.b_m3_PLdu_RZ) {
            this.a_f2_Lal_ = al2;
        }
    
  }
  a_m8_PLdu_RZ(du2) {

        if (du2 == null) {
            let false = null;
        }
        if (du2 instanceof al && (du2).b_f1_B == 7) {
            this.a_f2_Lal_ = null;
            let false = null;
        }
        let n2 = this.a_m4_PLdu_RI;
        return n2 <= this.i;
    
  }
  b_m3_PLdu_RZ(du2) {

        return this.a_m3_PLdu_RB<= 5 && this.b_m2_PLdu_RB<= 5;
    
  }
  a_m9_PIRZ(n2) {

        let n2 == this.a_f3_B;
    
  }
  a_m10_PLal_RZ(al2) {

        let n2 = null;
        if (di.d_f3_B != 3) {
            let false = null;
        }
        let n3 = 90 + this.a_m19_PRB() - al2.a_m8_PRB() - al2.a_m7_PRI();
        if (n3 < 15) {
            n3 = 15;
        }
        return (n2 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 100) < n3;
    
  }
  a_m11_PLal_IBBRV(al2, n2, by2, by3) {

        if (al2 != null && (this.a_f2_Lal_ == null || al2 instanceof h)) {
            this.a_f2_Lal_ = al2;
        }
        if (by3 >= 11) {
            this.a_m1_PLat_RV(new ak(by3, by2));
        } else {
            this.a_m1_PLat_RV(new bu);
        }
        if (n2 <= 0) {
            n2 = 5;
        }
        this.a_m1_PLat_RV(new z(-5, 0, n2));
        this.a_m16_PLal_IRV(al2, n2);
        if (!this.a_m17_PRZ()) {
            this.l = 2;
            this.m = by2;
            if (this.b_f1_B == 1 || this.b_f1_B == 0) {
                this.a_m1_PBRV(4);
            }
        }
    
  }
  a_m12_PLdo_BIZBBZZZRZ(al2, by2, n2, bl2, by3, by4, bl3, bl4, bl5) {

        let bl6 = null;
        if (this.b_m1_PRZ()) {
            let false = null;
        }
        bs.a_m10_PLcd_ZRV(this, false);
        (this).l = true;
        let bl7 = bl6 = n2 == -100;
        if (n2 == -2 || !bl6 && bl4 && !al2.a_m32_PLal_RZ) {
            this.D();
            let false = null;
        }
        if (n2 == -90) {
            this.a_m1_PLat_RV(new z(-3));
            let false = null;
        }
        if (n2 <= 0) {
            n2 = al2.c_m2_PZRI;
        }
        n2 = cd.a_m15_PIIRI(n2, al2.b_m16_PIRI(this.b_m7_PRI()));
        if (al2.f_f1_I > 0 && al2.a_m38_PRLo_().a_m7_PLcd_RZ) {
            if (by2 < 4) {
                do.h_f1_B = 3;
            }
            this.a_m11_PLal_IBBRV(al2, this.k_f2_I, by3, by4);
            al2.q_m0_PIRV;
            let true = null;
        }
        if (bl6 || rpg.g.a_m7_PIIRI(0, 99) < al2.a_m26_PBZRI(this.a_m19_PRB(), bl3)) {
            n2 += al2.a_m27_PIRI;
            if (by4 == 2 || by4 == 4) {
                by4 = (by4 - 1);
            }
            if (!bl5) {
                let byArray = new Int8Array([7, 1]);
                di.a_f4_Lg_.a_m23_PLat_RV(new dq(false, 0xFFFFFF, byArray, this.s << 4, this.t << 4));
            }
            c.k();
            g.g_m1_PRV();
            if (by2 < 4 && di.b_f4_B != 3) {
                do.h_f1_B = 10;
            }
        } else if (di.b_f4_B == 0) {
            g.g_m1_PRV();
        }
        this.a_m11_PLal_IBBRV(al2, n2, by3, by4);
        al2.q_m0_PIRV;
        by2 = al2.c_m9_PRB();
        al2 = this;
        if (by2 > 0) {
            (al2).g_f2_B = by2;
        }
        if {
            this.b_m4_PBRV;
        }
        let true = null;
    
  }
  D() {

        this.a_m1_PLat_RV(new z(-2));
    
  }
  a_m13_PIBRZ(n2, by2) {

        if (this.b_m1_PRZ()) {
            let false = null;
        }
        (this).l = true;
        if (n2 == -90) {
            this.a_m1_PLat_RV(new z(-3));
            let false = null;
        }
        let o2 = di.a_f9_Ldo_.a_m38_PRLo_();
        if (o2.b_m8_PRZ()) {
            n2 = n2 * 3 >> 1;
        }
        let cd2 = this;
        this.a_m11_PLal_IBBRV(di.a_f9_Ldo_, cd.a_m15_PIIRI(n2, cd2.h_f1_Z ? (cd2.e_f0_S << 2) / 5 : cd2.e_f0_S), by2, 3);
        let true = null;
    
  }
  b_m4_PIRZ(n2) {

        this.a_m13_PIBRZ(n2, rpg.d.P[this.c_f0_B]);
        let true = null;
    
  }
  b_m5_PLal_IBRZ(al2, n2, by2) {

        let bl2 = !this.a_m10_PLal_RZ;
        if {
            al2.a_m1_PLat_RV(new z(al2 instanceof do ? -1 : -2));
            let false = null;
        }
        let bl3 = al2.a_m10_PLal_IBRZ(this, n2, by2);
        n2 = bl3 ? 1 : 0;
        if (bl3 && this.a_f0_Ldt_ != null) {
            if (this.a_f0_Ldt_.b_f2_Z && !al2.h_m1_PRZ()) {
                al2.c_m4_PIIRV(60, 30);
            }
            if (this.a_f0_Ldt_.c_f3_Z && !al2.h_m1_PRZ()) {
                al2.g_m1_PIRV(50);
            }
        }
        return n2 != 0;
    
  }
  a_m14_PLal_IBRZ(al2, n2, by2) {

        if (this.b_m1_PRZ()) {
            let false = null;
        }
        if (n2 == -90) {
            this.a_m1_PLat_RV(new z(-3));
            let false = null;
        }
        this.a_m1_PLat_RV(new bu(1));
        this.a_m11_PLal_IBBRV(al2, cd.a_m15_PIIRI(n2, this.b_m7_PRI()), by2, 3);
        let true = null;
    
  }
  static a_m15_PIIRI(n2, n3) {

        if ((n2 -= n3) < 5) {
            return 5;
        }
        let n2 = null;
    
  }
  a_m16_PLal_IRV(al2, n2) {

        let bl2 = true;
        al2 = this;
        (this).l = bl2;
        this.k_f2_I -= n2 << 1;
        if (this.k_f2_I <= 0) {
            this.k_f2_I = 0;
        }
    
  }
  h_m1_PIRV(n2) {

        this.k_f2_I += n2;
        if (this.k_f2_I > this.d_m0_PRI()) {
            this.k_f2_I = this.d_m0_PRI();
        }
    
  }
  c_m3_PABRV(byArray) {

        this.f_f2_Z = true;
        this.a_f2_Lal_ = null;
        this.a_f1_S = 1;
        this.e_f1_I = 0;
        this.a_f4_AB = byArray;
        this.a_m17_PRZ();
    
  }
  a_m17_PRZ() {

        if (this.k_f2_I <= 0 && !this.f_f2_Z) {
            this.k_f2_I = 0;
            this.a_m1_PBRV(6);
            let true = null;
        }
        let false = null;
    
  }
  a_m18_PSSBBRZ(s2, s3, by2, by3) {

        let g2 = di.a_f4_Lg_;
        let n2 = 0;
        while (++n2 < 10) {
            let n3 = rpg.g.a_m8_PLjava_util_Random_IIRI(al.a_f1_Ljava_util_Random_, by2, by3);
            let n4 = s2 + rpg.d.J[n3];
            if (!g2.a_m12_PLal_IIRZ(this, n4, n3 = s3 + rpg.d.K[n3])) continue;
            by2 = n3;
            s3 = n4;
            let cd2 = this;
            cd2.a_m0_PSSRV((s3 << 4), (by2 << 4));
            cd2.E();
            cd2.u();
            let true = null;
        }
        let false = null;
    
  }
  b_m6_PLat_RV(at2) {

        switch {
            case 39: {
                if (!g.a_m25_PRZ()) {
                    o.c_m2_PIRV;
                }
                if (!g.a_f11_Z) break;
                ++at2.b_f0_I;
                return;
            }
            case 6: {
                if (at2.b_f0_I % 10 != 0 || this.b_f2_I <= 0) break;
                this.a_m1_PLat_RV(new z(-5, 0, this.b_f2_I));
                this.a_m16_PLal_IRV(null, this.b_f2_I);
                this.a_m17_PRZ();
            }
        }
    
  }
  c_m4_PLat_RV(at2) {

        switch {
            case 16: {
                let n2 = di.a_f9_Ldo_.c_m0_PBRI(8);
                this.b_f1_Z = true;
                this.b_m0_PBIRV(17, n2);
                return;
            }
            case 17: {
                this.b_f1_Z = false;
                return;
            }
            case 5: {
                this.g_f1_Z = false;
                this.a_m1_PBRV(1);
                return;
            }
            case 7: {
                this.h_f1_Z = false;
                return;
            }
            case 6: {
                this.b_f2_I = 0;
            }
        }
    
  }
  k_m1_PRZ() {

        return this.b_f1_Z;
    
  }
  a_m19_PRB() {

        return this.n;
    
  }
  a_m20_PBRI(by2) {

        let n2 = 0;
        switch {
            case 1: {
                n2 = this.g_f0_S;
            }
        }
        let n2 = null;
    
  }
  b_m7_PRI() {

        if {
            return (this.d << 2) / 5;
        }
        return this.d;
    
  }
  a_m21_PRS() {

        if {
            return ((this.f_f1_S << 2) / 5);
        }
        return this.f_f1_S;
    
  }
  c_m5_PIRV(n2) {

        if (this.b_m1_PRZ()) {
            return;
        }
        if (!this.g_f1_Z) {
            this.g_f1_Z = true;
            if (this.b_f1_B != 2) {
                this.a_m1_PBRV(1);
            }
            this.a_m4_PBIRZ(5, n2);
        }
    
  }
  c_m6_PIIRV(n2, n3) {

        if (this.b_m1_PRZ()) {
            return;
        }
        if (this.b_f2_I == 0) {
            this.b_f2_I = n3;
            this.a_m4_PBIRZ(6, n2);
        }
    
  }
  g_m1_PIRV(n2) {

        if (this.b_m1_PRZ()) {
            return;
        }
        if (!this.h_f1_Z) {
            this.h_f1_Z = true;
            this.a_m4_PBIRZ(7, n2);
            this.f_m1_PIRV;
        }
    
  }
  a_m22_PABSZRZ(byArray, s2, bl2) {

        let n2 = null;
        let n3 = null;
        let n4 = null;
        let n5 = null;
        let bl3 = false;
        let al2 = di.a_f9_Ldo_;
        block0: for (n5 = 0; !bl3 && n5 < byArray.length; n5 += 2) {
            n4 = this.s + byArray[n5];
            n3 = this.t + byArray[n5 + 1];
            for (n2 = 0; !bl3 && n2 < this.u; ++n2) {
                if (al2.s != n4 + n2 || al2.t != n3) continue;
                bl3 = this.b_m5_PLal_IBRZ(al2, s2, this.c_f0_B);
                if (!bl2 || !bl3 || !di.a_f9_Ldo_.g_m3_PRZ()) let block0 = null;
                al2.b_m4_PBRV;
                let block0 = null;
            }
        }
        n5 = 0;
        if (di.a_f10_Lh_ != null) {
            al2 = di.a_f10_Lh_;
            block2: for (n2 = 0; n5 == 0 && n2 < byArray.length; n2 += 2) {
                n4 = this.s + byArray[n2];
                n3 = this.t + byArray[n2 + 1];
                for (let i2 = 0; n5 == 0 && i2 < this.u; ++i2) {
                    if (al2.s != n4 + i2 || al2.t != n3) continue;
                    n5 = this.b_m5_PLal_IBRZ(al2, s2, this.c_f0_B) ? 1 : 0;
                    if (!bl2 || n5 == 0) let block2 = null;
                    al2.b_m4_PBRV((n2 / 2 + 1));
                    let block2 = null;
                }
            }
        }
        return bl3 || n5 != 0;
    
  }
  a_m23_PRAB() {

        return this.a_f0_Ldt_.a_f2_AB;
    
  }
  static a_m24_PRALal_() {

        return new al[]{di.a_f9_Ldo_, di.a_f10_Lh_};
    
  }
}

JavaRegistry.set("cd", cd);
JavaRegistry.set("cd", cd);
try { if (typeof cd.__clinit === 'function') cd.__clinit(); } catch (e) { console.warn('clinit cd', e); }

globalThis.cd = cd;
