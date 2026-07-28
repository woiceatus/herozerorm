/** Transpiled from do */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class do extends (JavaRegistry.get("al") || class {}) {
  i_f0_B = null;
  j_f0_B = 2;
  a_f0_B = 0;
  b_f0_AB = null;
  c_f0_AB = null;
  a_f1_AB = null;
  a_f2_AZ = null;
  b_f1_AZ = null;
  d_f0_AB = null;
  a_f3_Lcl_ = null;
  a_f4_Lo_ = null;
  d_f1_Z = null;
  e_f0_Z = null;
  g_f0_B = null;
  Q = null;
  k_f0_B = null;
  l_f0_B = null;
  m_f0_B = null;
  n_f0_B = null;
  a_f5_AI = null;
  b_f2_AI = null;
  a_f6_AS = null;
  c_f1_AI = null;
  R = null;
  c_f2_S = null;
  o_f0_B = null;
  k_f1_I = null;
  l_f1_I = null;
  a_f7_I = null;
  p_f0_B = null;
  v = null;
  a_f8_S = null;
  b_f3_S = null;
  a_f9_ALbm_ = null;
  w = 0;
  x = null;
  f_f0_Z = false;
  y = -1;
  b_f4_I = -1;
  m_f1_I = -1;
  g_f1_Z = false;
  h_f0_Z = false;
  e_f1_I = -1;
  a_f10_Z = false;
  f_f1_I = -1;
  b_f5_Z = false;
  n_f1_I = 0;
  j_f1_I = 0;
  static h_f1_B = -1;
  o_f1_I = null;
  z = 0;
  i_f1_Z = true;
  static p_f1_I = 5;
  q = 0;
  static a_f11_J = 0;
  static c_f3_Z = false;
  A = 0;
  c_f4_Ljava_util_Vector_ = null;
  do(s2, s3, by2, by3) {

        /*super*/(0, 0, 8, 9);
    
  }
  static a_m0_PBRLdo_(by2) {

        let n2 = null;
        let n3 = null;
        let do_ = null;
        let do_2 = do_ = new do(0, 0, 8, 9);
        do_.n_f0_B = 1;
        do_2.b_f3_S = 0;
        do_2.a_f8_S = 0;
        do_2.b_f0_AB = rpg.e.a_m6_PLjava_lang_String_RAB("/hero/hsd2");
        do_2.a_f9_ALbm_ = new bm[7];
        do_2.a_f6_AS = new Int16Array(4);
        do_2.c_f1_AI = new Int32Array(4);
        do_2.R = new Int8Array(6);
        do_2.a_f5_AI = new Int32Array(4);
        do_2.b_f2_AI = new Int32Array(4);
        bs.a_f0_AZ = new Array(4).fill(false);
        for (n3 = 0; n3 < 4; ++n3) {
            bs.a_f0_AZ[n3] = false;
        }
        do_2.v = 100;
        do_2.p_f0_B = 100;
        do_2.d_f0_AB = new Int8Array(48);
        do_2.c_f0_AB = new Int8Array(20);
        do_2.I();
        n3 = do_2.d_f0_AB.length;
        for (n2 = 0; n2 < n3; ++n2) {
            do_2.d_f0_AB[n2] = -1;
        }
        n3 = do_2.c_f0_AB.length;
        for (n2 = 0; n2 < n3; ++n2) {
            do_2.c_f0_AB[n2] = -1;
        }
        do_2.l = true;
        do_2.z();
        do_2.k_f0_B = 1;
        do_2.k_f1_I = 1;
        do_2.m_f0_B = 0;
        do_2.m_f1_I = -1;
        do_2.b_f4_I = -1;
        do_2.y();
        do_2.J();
        v0.z = 0;
        do_.m_m0_PBRV;
        do_2 = do_;
        let o2 = let o = null;
        o2.a_m0_PRV();
        o2.f();
        for (n2 = 0; n2 < 2; ++n2) {
            o2.b_m3_PIRV(n2 + 2);
        }
        o2.d_m0_PRV();
        do_2.a_f4_Lo_ = o2;
        let do_ = null;
    
  }
  m_m0_PBRV(by2) {

        let cl2 = null;
        switch {
            case 0: {
                cl2 = let ab = null;
                break;
            }
            case 1: {
                cl2 = let cu = null;
                break;
            }
            case 2: {
                cl2 = let d = null;
                break;
            }
            case 3: {
                cl2 = let ad = null;
                break;
            }
            case 4: {
                cl2 = let ao = null;
                break;
            }
            case 5: {
                cl2 = let dr = null;
            }
        }
        cl2.b_m1_PBRV;
        bq.h();
        this.a_f3_Lcl_ = cl2;
    
  }
  e_m0_PBRV(by2) {

        for (let by3 = 0; by3 < 2; by3 = (by3 + 1)) {
            di.a_m15_PBZRV(by3, true);
        }
        di.b_f4_B = by2;
        this.m_m0_PBRV;
        this.a_m1_PZRV;
        rpg.e.d();
    
  }
  a_m1_PZRV(bl2) {

        let n2 = null;
        let n3 = di.b_f4_B;
        let do_ = this;
        let n4 = n3;
        let do_2 = do_;
        let n5 = 0;
        for (n2 = 0; n2 < n4; ++n2) {
            n5 += 8;
        }
        if (do_2.d_f0_AB[n5] < 0) {
            do_2.d_f0_AB[n5] = 0;
        }
        if (!do.g_m5_PBRZ(n4)) {
            for (n2 = 2; n2 < 6; ++n2) {
                do_2.d_f0_AB[n5 + n2] = -2;
            }
        }
        n2 = n5 + 6;
        for (n4 = 0; n4 < 2; ++n4) {
            if (do_2.d_f0_AB[n2 += n4] >= 0) continue;
            do_2.d_f0_AB[n2] = 0;
        }
        n4 = n3;
        do_2 = do_;
        n5 = 0;
        for (n2 = 0; n2 < n4; n2 = (n2 + 1)) {
            n5 += do.g_m5_PBRZ(n2) ? 4 : 2;
        }
        n2 = do.g_m5_PBRZ(n4) ? 4 : 2;
        for (n4 = 0; n4 < n2; ++n4) {
            if (do_2.c_f0_AB[n5 + n4] >= 0) continue;
            do_2.c_f0_AB[n5 + n4] = 0;
        }
        do_.a_m6_PRV();
        di.j();
        this.J();
        this.a_f4_Lo_.c_m1_PRV();
        this.i_m1_PRV();
        if {
            if (di.b_f4_B == 4 || di.b_f4_B == 5) {
                this.n_f0_B = 40;
                this.a_f8_S = (this.a_f8_S + 156);
                this.b_f3_S = (this.b_f3_S + 20);
            }
            let n6 = 0;
            let do_3 = this;
            n3 = do_3.b_f2_AI[n6];
            n6 = 0;
            do_3 = this;
            do_3.a_f5_AI[n6] = n3;
            n6 = 1;
            do_3 = this;
            n3 = do_3.b_f2_AI[n6];
            n6 = 1;
            do_3 = this;
            do_3.a_f5_AI[n6] = n3;
            n6 = 3;
            do_3 = this;
            n3 = do_3.b_f2_AI[n6];
            n6 = 3;
            do_3 = this;
            do_3.a_f5_AI[n6] = n3;
        }
    
  }
  y() {

        for (let i2 = 0; i2 < 6; ++i2) {
            let n2 = i2 * 8 + 6;
            this.d_f0_AB[n2] = 3;
            this.d_f0_AB[n2 + 1] = 3;
        }
    
  }
  a_m2_PBRB(by2) {

        by2 = ((di.b_f4_B << 3) + by2 - 4);
        return this.d_f0_AB[by2];
    
  }
  a_m3_PBBRV(by2, by3) {

        let n2 = null;
        let by4 = by2 = ((by2 << 3) + by3 - 4);
        this.d_f0_AB[by4] = (this.d_f0_AB[by4] + 1);
        by3 = by2;
        let do_ = this;
        let n3 = n2 = do.g_m5_PBRZ? 6 : 2;
        if (by3 % 8 < n2 - 1 && do_.d_f0_AB[by3 + 1] == -1) {
            do_.d_f0_AB[by3 + 1] = 0;
        }
    
  }
  c_m0_PBRI(by2) {

        return this.a_f3_Lcl_.c_m0_PBRI;
    
  }
  a_m4_PBIZRI(by2, n2, bl2) {

        return this.a_f3_Lcl_.a_m5_PBIZRI(by2, n2, false);
    
  }
  a_m5_PIRV(n2) {

        let n3 = n2;
        this.c_f0_AB[n3] = (this.c_f0_AB[n3] + 1);
    
  }
  s_m0_PRV() {

        super.s();
        this.A();
    
  }
  b_m0_PZRV(bl2) {

        this.r();
        this.A();
        if {
            let do_ = this;
            do_.z();
            do_.s_m0_PRV();
            let do_2 = do_;
            if (do_2.b_f4_I > 0) {
                do_2.b_f4_I = -1;
                do_2.K();
            }
            if (do_2.m_f1_I > 0) {
                do_2.m_f1_I = -1;
                do_2.L();
            }
            do_.P();
            do_.i_m1_PRV();
        }
    
  }
  z() {

        this.f_f0_Z = false;
        this.y = -1;
        this.g_f1_Z = false;
        this.h_f0_Z = false;
        this.a_f10_Z = false;
        this.b_f5_Z = false;
        this.n_f1_I = 0;
        this.f_f1_I = -1;
        this.d_f1_I = -1;
    
  }
  A() {

        this.Q = new Int8Array((di.b_f4_B == 5 ? 6 : 4) + 2);
        this.B();
        this.d_f1_Z = false;
        this.e_f0_Z = false;
        this.w = 0;
        this.x = 0;
        do.h_f1_B = -1;
        if (this.a_f4_Lo_ != null) {
            this.a_f4_Lo_.a_m1_PZRV;
        }
        let do_ = this;
        this.z = 0;
    
  }
  B() {

        for (let i2 = 0; i2 < this.Q.length; ++i2) {
            this.Q[i2] = -1;
        }
        this.l_f0_B = -1;
    
  }
  a_m6_PRV() {

        this.k_f0_B = this.a_f3_Lcl_.b_m4_PRB();
    
  }
  b_m1_PIIRV(n2, n3) {

        block15: {
            if (do.a_f11_J > 0) {
                ++this.q;
                if (this.q > 5) {
                    this.q = 0;
                } else if (this.q < 2) {
                    return;
                }
            }
            if (!this.l) {
                return;
            }
            n2 = n2 + this.h + (this).q;
            n3 = n3 + this.i + this.r - 1;
            if (this.w == 1) {
                n2 += rpg.d.J[this.x] * 3;
                n3 += rpg.d.K[this.x] * 3;
                this.w = (this.w - 1);
            }
            this.b_m3_PIIZRV(n2, n3, false);
            let cm2 = rpg.a.a_f3_Lcm_;
            cm2.a_m1_PLcg_IIIRV(rpg.e.e_f0_ALcg_[this.e_f0_Z ? 1 : 0], n2, n3 + 6, 33);
            switch {
                case 3: {
                    if (this.l_f0_B < 0) break;
                    this.b_m2_PIIIRV(this.Q[this.l_f0_B] + 6, n2, n3);
                    let block15 = null;
                }
                case 2: {
                    this.b_m2_PIIIRV(this.j_f0_B, n2, n3);
                    let block15 = null;
                }
                case 7: {
                    this.c_f1_I = 8;
                }
                case 6: {
                    a_m7_PIIIRV(n2, n3, this.c_f1_I);
                    let block15 = null;
                }
                case 9: {
                    this.b_m2_PIIIRV(7, n2, n3);
                    let block15 = null;
                }
                case 10: {
                    this.b_m2_PIIIRV(5, n2, n3);
                    let block15 = null;
                }
                case 99: {
                    this.b_m2_PIIIRV(this.i_f0_B, n2, n3);
                    let block15 = null;
                }
            }
            this.b_m2_PIIIRV(this.a_f0_B, n2, n3);
        }
        this.b_m3_PIIZRV(n2, n3, true);
        this.d_m2_PIIRV(n2, n3);
    
  }
  b_m2_PIIIRV(n2, n3, n4) {

        this.c_f1_I = rpg.e.a_f2_Lca_.a_m2_PBBIIIRI(n2, this.c_f0_B, this.c_f1_I, n3, n4);
    
  }
  static a_m7_PIIIRV(n2, n3, n4) {

        rpg.e.a_f2_Lca_.a_m2_PBBIIIRI(4, 1, n4, n2, n3);
    
  }
  c_m1_PRV() {

        let by2 = null;
        let n2 = null;
        super.c_m2_PRV();
        if (do.a_f11_J > 0) {
            do.c_f3_Z = true;
        }
        ++this.c_f1_I;
        if (di.d_f3_B == 3) {
            if (this.m_f0_B > 0) {
                this.m_f0_B = (this.m_f0_B - 1);
            }
            if (this.f_f1_I > 0) {
                --this.f_f1_I;
            }
            let do_ = this;
            switch {
                case 1: {
                    do_.p_f0_B = (do_.p_f0_B - 2);
                    do_.v = (do_.v - 2);
                    break;
                }
                case 2: {
                    do_.p_f0_B = (do_.p_f0_B - 1);
                    do_.v = (do_.v - 1);
                }
            }
            if (do_.p_f0_B <= 0) {
                do_.c_m5_PIRV;
                do_.p_f0_B = 100;
            }
            if (do_.v <= 0) {
                n2 = do_.o_f1_I;
                let do_2 = do_;
                do_2.c_m6_PBIRV(1, n2);
                do_.v = 100;
            }
            for (by2 = 0; by2 < 5; by2 = (by2 + 1)) {
                if (di.a_f11_AI[by2] < 0) continue;
                let by3 = by2;
                di.a_f11_AI[by3] = di.a_f11_AI[by3] - 1;
            }
            do_ = this;
            if (do_.b_f4_I > 0) {
                --do_.b_f4_I;
                if (do_.b_f4_I == 0) {
                    do_.K();
                }
            }
            if (do_.m_f1_I > 0 && do_.b_f1_B != 10) {
                --do_.m_f1_I;
                if (do_.m_f1_I == 0) {
                    do_.L();
                }
            }
            this.a_f4_Lo_.b_m0_PRV();
        }
        this.t();
        this.C();
        let by4 = this.b_f1_B;
        if (this.d_m1_PRZ()) {
            this.d_f1_Z = false;
        }
        by2 = by4;
        let do_ = this;
        n2 = 0;
        if (do_.b_f1_B != 3 && !do_.d_f1_Z) {
            n2 = df.a_m7_PLdo_RZ? 1 : 0;
            do_.d_f1_Z = true;
        }
        if (n2 == 0 && by2 == 2 && do_.b_f1_B == 1) {
            n2 = df.d_m1_PRZ() ? 1 : 0;
        }
        if (n2 != 0) {
            do_.a_m0_PBRV(1);
            do_.e = 0;
            do_.c_f1_I = 0;
        }
    
  }
  b_m3_PRV() {

        this.A = 1;
    
  }
  d_m0_PRV() {

        do.a_f11_J = 5000;
        this.A = 2;
        let n2 = 0;
        let do_ = this;
        let n3 = do_.b_f2_AI[n2];
        n2 = 0;
        do_ = this;
        do_.a_f5_AI[n2] = n3;
        n2 = 1;
        do_ = this;
        n3 = do_.b_f2_AI[n2];
        n2 = 1;
        do_ = this;
        do_.a_f5_AI[n2] = n3;
        n2 = 3;
        do_ = this;
        n3 = do_.b_f2_AI[n2];
        n2 = 3;
        do_ = this;
        do_.a_f5_AI[n2] = n3;
    
  }
  C() {

        switch {
            case 2: {
                let do_ = this;
                this.z = 0;
                this.w();
                this.d_m0_PIRV(4);
                return;
            }
            case 3: {
                let do_ = this;
                if (do_.l_f0_B < 0) {
                    do_.l_f0_B = 0;
                }
                if (do_.Q[do_.l_f0_B] < 100 && do_.c_f1_I == do.a_m8_PIRB(6 + do_.Q[do_.l_f0_B])) {
                    if (do_.l_f0_B + 1 >= do_.k_f0_B && do_.Q[do_.l_f0_B + 1] < 4 || do_.Q[do_.l_f0_B + 1] == -1) {
                        do_.b_m4_PIRV;
                        return;
                    }
                    do_.l_f0_B = (do_.l_f0_B + 1);
                    do_.c_f1_I = 0;
                }
                let n2 = do_.Q[do_.l_f0_B];
                if (do_.c_f1_I <= 0) {
                    let bl2 = null;
                    if (do_.z > 0 && n2 < 4) {
                        do_.b_m4_PIRV;
                        return;
                    }
                    if (n2 >= 100) {
                        n2 = (do_.Q[do_.l_f0_B] - 100);
                        if (do_.a_f4_Lo_.d_m2_PBRZ(n2)) {
                            do_.B();
                            return;
                        }
                        do_.b_m4_PIRV;
                        return;
                    }
                    if (!do_.a_f3_Lcl_.a_m0_PBRZ(n2)) {
                        do_.b_m4_PIRV;
                        do_.k_m2_PBRV(6);
                        return;
                    }
                    let n3 = n2;
                    let do_2 = do_;
                    n3 = do_2.a_f3_Lcl_.b_m2_PBRI(n3);
                    let n4 = 0;
                    let do_3 = do_2;
                    n3 = do_3.a_f2_AZ[n4] ? do_2.b_m12_PBIRI(0, n3) : n3;
                    n4 = 1;
                    do_3 = do_2;
                    if (n3 > do_3.a_f5_AI[n4]) {
                        bl2 = false;
                    } else {
                        if (n3 > 0) {
                            n4 = -n3;
                            do_3 = do_2;
                            do_3.c_m6_PBIRV(1, n4);
                        }
                        bl2 = true;
                    }
                    if (!bl2) {
                        do_.b_m4_PIRV;
                        do_.k_m2_PBRV(2);
                        return;
                    }
                    di.b_m8_PBZRV(n2, true);
                    if (do_.a_f3_Lcl_.b_m0_PBRZ(n2)) {
                        do_.f_m1_PRV();
                    }
                }
                if (do_.a_f3_Lcl_.a_m1_PBIRZ(n2, do_.c_f1_I)) return;
                bq.a_m2_PBRV(11);
                return;
            }
            case 6: {
                if (this.c_f1_I < 8) return;
                this.a_m0_PBRV(7);
                if (!df.e_m1_PRZ()) return;
                if {
                    bq.f();
                    di.a_m3_PBRV(9);
                    return;
                }
                di.d_f3_B = 5;
                ax.a_m0_PRLax_().a_m1_PRV();
                ax.a_m0_PRLax_().c(3);
                ax.a_m0_PRLax_();
                bw.a_m4_PRV();
                return;
            }
            case 7: {
                if (this.A == 1) {
                    bq.f();
                    di.a_m3_PBRV(9);
                    this.A = 0;
                    return;
                }
                if (this.A != 2) return;
                this.a_f5_AI[0] = this.b_f2_AI[0];
                this.a_m0_PBRV(1);
                this.B();
                this.A = 0;
                return;
            }
            case 0: {
                let do_ = this;
                this.z = 0;
                return;
            }
            case 1: {
                this.e = 0;
                this.d_m0_PIRV(do.a_m8_PIRB);
                return;
            }
            case 9: {
                if (this.c_f1_I < 4) return;
                let by2 = this.z;
                this.z = 0;
                if (by2 > 0) {
                    di.b_m4_PBBRV(2, by2);
                    di.c_m2_PBBRV(0, 0);
                    return;
                }
                this.D();
                return;
            }
            case 99: {
                this.d_m0_PIRV(do.a_m8_PIRB);
                return;
            }
            case 10: {
                if (this.c_f1_I >= do.a_m8_PIRB(5)) {
                    this.a_f4_Lo_.e_m1_PRV();
                    this.D();
                    return;
                }
                if (this.c_f1_I != 0) return;
                bq.a_m2_PBRV(0);
                return;
            }
        }
    
  }
  D() {

        let by2 = di.c_f5_B;
        switch {
            case 1: 
            case 3: 
            case 9: 
            case 10: {
                this.a_m0_PBRV;
                di.c_m2_PBBRV(0, 0);
                this.c_f1_I = 0;
                this.C();
                return;
            }
        }
        this.a_m0_PBRV(1);
    
  }
  static a_m8_PIRB(n2) {

        return rpg.e.a_f2_Lca_.a_m3_PBRB(n2);
    
  }
  d_m1_PBRI(by2) {

        let n2 = this.a_m33_PBIRI(1, by2 = this.a_f3_Lcl_.a_m4_PBRI);
        if (n2 > 0) {
            let n2 = null;
        }
        let by2 = null;
    
  }
  h_m0_PRV() {

        if (this.f_m0_PRZ()) {
            this.c_f1_I = 0;
            this.e_m1_PIRV;
        }
    
  }
  d_m2_PBRZ(by2) {

        if (this.m_f0_B > 0 || this.l_f0_B + 1 >= this.k_f0_B) {
            let false = null;
        }
        if (this.Q[this.l_f0_B + 1] < 4) {
            if (by2 > 0) {
                if (this.l_f0_B >= 0 && this.Q[this.l_f0_B] == by2) {
                    let false = null;
                }
                this.Q[this.l_f0_B + 1] = by2;
                let true = null;
            }
            let do_ = this;
            let bl2 = do_.b_f4_I > 0 ? (do_.l_f0_B >= 0 && do_.Q[do_.l_f0_B] >= 4 && do_.Q[do_.l_f0_B] < 6 ? false : do_.l_f0_B < 0 || do_.Q[do_.l_f0_B] < 11) : do_.l_f0_B < 0 || do_.Q[do_.l_f0_B] < 4;
            if {
                switch {
                    case 3: {
                        this.Q[this.l_f0_B + 1] = 0;
                        break;
                    }
                    case 5: {
                        if (this.b_f4_I > 0) {
                            this.Q[this.l_f0_B + 1] = (this.l_f0_B + 1 + 6);
                            let true = null;
                        }
                    }
                    default: {
                        this.Q[this.l_f0_B + 1] = (this.l_f0_B + 1);
                    }
                }
                let true = null;
            }
        }
        let false = null;
    
  }
  f_m0_PBRV(by2) {

        this.Q[this.l_f0_B + 1] = by2;
    
  }
  b_m4_PIRV(n2) {

        this.m_f0_B = n2 < 2 && this.Q[n2] <= 0 ? 2 : 4;
        n2 = this.z;
        if (di.b_f4_B == 3) {
            this.a_m0_PBRV(9);
        } else if (n2 > 0) {
            let do_ = this;
            this.z = 0;
            di.b_m4_PBBRV(2, n2);
            di.c_m2_PBBRV(0, 0);
        } else {
            this.a_m0_PBRV(1);
        }
        this.c_f1_I = 0;
        this.B();
    
  }
  g_m0_PBRV(by2) {

        this.z = by2;
    
  }
  e_m1_PRV() {

        this.z = 0;
    
  }
  f_m1_PRV() {

        this.c_m0_PBRV(this.b_m8_PRB());
    
  }
  a_m9_PZRI(bl2) {

        let n2 = (bl2 = bl2 ? this.l_f1_I : this.k_f1_I) ? 1 : 0;
        if {
            return (bl2 << 2) / 5;
        }
        return bl2 ? 1 : 0;
    
  }
  b_m5_PZRI(bl2) {

        let n2 = null;
        let bm2 = bl2 ? this.a_m29_PBRLbm_(5) : this.a_m29_PBRLbm_(3);
        let n3 = this.a_m9_PZRI;
        if (bm2 != null) {
            n2 = n3 + (bm2.c_f0_S - bm2.b);
        }
        let n2 = null;
    
  }
  c_m2_PZRI(bl2) {

        let var1_6 = null;
        let n2 = null;
        let bm2 = bl2 ? this.a_m29_PBRLbm_(5) : this.a_m29_PBRLbm_(3);
        let do_ = this.a_m9_PZRI;
        if (bm2 != null) {
            let n3 = rpg.g.a_m7_PIIRI(1, 100) + this.a_f4_Lo_.a_m11_PBRI(4);
            if (n3 > 100) {
                n3 = 100;
            }
            n2 = do_ + (bm2.c_f0_S - bm2.b) * n3 / 100;
        }
        if (this.b_f4_I > 0) {
            let n4 = 3;
            let do_2 = this;
            let var1_5 = n2 + do_2.c_f1_AI[n4];
        }
        let var1_6 = null;
    
  }
  a_m10_PLcd_BIBBZZZRZ(cd2, by2, n2, by3, by4, bl2, bl3, bl4) {

        if (cd2 != null) {
            return cd2.a_m12_PLdo_BIZBBZZZRZ(this, by2, n2, bl2, by3, by4, bl3, true, bl4);
        }
        let false = null;
    
  }
  a_m11_PBIBZZZRZ(by2, n2, by3, bl2, bl3, bl4) {

        let cd2 = this.a_m16_PRLcd_();
        return this.a_m10_PLcd_BIBBZZZRZ(cd2, by2, n2, this.c_f0_B, by3, bl2, false, false);
    
  }
  a_m12_PBIBZZRZ(by2, n2, by3, bl2, bl3) {

        by2 = 0;
        let by4 = this.c_f0_B;
        let by42 = this.a_m12_PBRLcd_;
        if (by42 != null) {
            by2 = this.a_m10_PLcd_BIBBZZZRZ(by42, 7, n2, by4, by3, false, bl2, false) ? 1 : 0;
        }
        for (let by5 = 1; by5 <= 3; by5 = (by5 + 1)) {
            if (this.a_m13_PBBBBIBZZRZ(by4, by4, by5, 7, n2, by3, bl2, false)) {
                by2 = 1;
            }
            if (this.a_m13_PBBBBIBZZRZ(rpg.d.M[by4], by4, by5, 7, n2, by3, bl2, false)) {
                by2 = 1;
            }
            if (!this.a_m13_PBBBBIBZZRZ(rpg.d.L[by4], by4, by5, 7, n2, by3, bl2, false)) continue;
            by2 = 1;
        }
        return by2 != 0;
    
  }
  a_m13_PBBBBIBZZRZ(by2, by3, by4, by5, n2, by6, bl2, bl3) {

        let cd2 = this.a_m14_PBBIRLcd_(by2, by3, by4);
        if (cd2 != null) {
            return this.a_m10_PLcd_BIBBZZZRZ(cd2, by5, n2, by3, by6, bl3, bl2, false);
        }
        let false = null;
    
  }
  a_m14_PBBIRLcd_(by2, by3, n2) {

        let du2 = this.a_m1_PBBBRLdu_(by2, by3, n2);
        if (du2 != null && du2 instanceof cd) {
            let du2 = null;
        }
        let null = null;
    
  }
  b_m6_PBRLcd_(by2) {

        let du2 = du.a_m2_PBBBBBRLdu_(this.s, this.t, by2, 0, 0);
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h)) {
            let du2 = null;
        }
        let null = null;
    
  }
  a_m15_PBIBRZ(by2, n2, by3) {

        by2 = 0;
        for (let by4 = 1; by4 <= 12; by4 = (by4 + 1)) {
            let cd2 = this.b_m6_PBRLcd_;
            if (cd2 == null || !this.a_m10_PLcd_BIBBZZZRZ(cd2, 9, n2, by4, by3, false, false, false)) continue;
            by2 = 1;
        }
        return by2 != 0;
    
  }
  a_m16_PRLcd_() {

        let du2 = this.a_m5_PBLdu_RLdu_(this.c_f0_B, null);
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h) && !(du2).b_m1_PRZ()) {
            let du2 = null;
        }
        let null = null;
    
  }
  a_m17_PLcd_RV(cd2) {

        if (cd2 != null) {
            this.c_f4_Ljava_util_Vector_.addElement;
        }
    
  }
  b_m7_PBRLjava_util_Vector_(by2) {

        this.c_f4_Ljava_util_Vector_ = new Vector(0);
        switch {
            case 0: {
                this.a_m17_PLcd_RV(this.a_m16_PRLcd_());
                break;
            }
            case 1: {
                this.a_m17_PLcd_RV(this.a_m16_PRLcd_());
                this.a_m17_PLcd_RV(this.a_m12_PBRLcd_((this.c_f0_B + 8)));
                break;
            }
            case 2: {
                this.a_m17_PLcd_RV(this.a_m12_PBRLcd_(rpg.d.O[this.c_f0_B]));
                this.a_m17_PLcd_RV(this.a_m16_PRLcd_());
                this.a_m17_PLcd_RV(this.a_m12_PBRLcd_(rpg.d.N[this.c_f0_B]));
                break;
            }
            case 3: {
                this.a_m17_PLcd_RV(this.a_m12_PBRLcd_(rpg.d.O[this.c_f0_B]));
                this.a_m17_PLcd_RV(this.a_m12_PBRLcd_(rpg.d.M[this.c_f0_B]));
                this.a_m17_PLcd_RV(this.a_m16_PRLcd_());
                this.a_m17_PLcd_RV(this.a_m12_PBRLcd_(rpg.d.L[this.c_f0_B]));
                this.a_m17_PLcd_RV(this.a_m12_PBRLcd_(rpg.d.N[this.c_f0_B]));
                break;
            }
            case 4: {
                for (by2 = 0; by2 < 3; by2 = (by2 + 1)) {
                    this.a_m17_PLcd_RV(this.a_m14_PBBIRLcd_(rpg.d.O[this.c_f0_B], this.c_f0_B, by2 + 1));
                    this.a_m17_PLcd_RV(this.a_m14_PBBIRLcd_(0, this.c_f0_B, by2 + 1));
                    this.a_m17_PLcd_RV(this.a_m14_PBBIRLcd_(rpg.d.N[this.c_f0_B], this.c_f0_B, by2 + 1));
                }
                break;
            }
        }
        return this.c_f4_Ljava_util_Vector_;
    
  }
  b_m8_PRB() {

        let cd2 = this.a_m16_PRLcd_();
        if (cd2 == null) {
            if (this.a_m12_PBRLcd_(rpg.d.O[this.c_f0_B]) != null) {
                return rpg.d.O[this.c_f0_B];
            }
            if (this.a_m12_PBRLcd_(rpg.d.N[this.c_f0_B]) != null) {
                return rpg.d.N[this.c_f0_B];
            }
            if (this.a_m12_PBRLcd_(rpg.d.P[this.c_f0_B]) != null) {
                return rpg.d.P[this.c_f0_B];
            }
        }
        return this.c_f0_B;
    
  }
  b_m9_PRLcd_() {

        let cd2 = this.c_m3_PBRLcd_;
        if (cd2 != null) {
            let cd2 = null;
        }
        cd2 = this.c_m3_PBRLcd_(rpg.d.O[this.c_f0_B]);
        if (cd2 != null) {
            this.c_m0_PBRV(rpg.d.O[this.c_f0_B]);
            let cd2 = null;
        }
        cd2 = this.c_m3_PBRLcd_(rpg.d.N[this.c_f0_B]);
        if (cd2 != null) {
            this.c_m0_PBRV(rpg.d.N[this.c_f0_B]);
            let cd2 = null;
        }
        cd2 = this.c_m3_PBRLcd_(rpg.d.P[this.c_f0_B]);
        if (cd2 != null) {
            this.c_m0_PBRV(rpg.d.P[this.c_f0_B]);
            let cd2 = null;
        }
        let cd2 = null;
    
  }
  c_m3_PBRLcd_(by2) {

        let cd2 = this.a_m12_PBRLcd_;
        if (cd2 == null) {
            for (let n2 = 0; n2 < 3 && (cd2 = this.a_m14_PBBIRLcd_(by2, by2, n2)) == null && (cd2 = this.a_m14_PBBIRLcd_(rpg.d.M[by2], by2, n2)) == null && (cd2 = this.a_m14_PBBIRLcd_(rpg.d.L[by2], by2, n2)) == null; n2 = ((n2 + 1))) {
            }
        }
        if (cd2 != null && cd2.b_m1_PRZ()) {
            let null = null;
        }
        let cd2 = null;
    
  }
  c_m4_PZRV(bl2) {

        this.e_f0_Z = bl2;
    
  }
  a_m18_PBBBIRZ(by2, by3, by4, n2) {

        let bl2 = false;
        this.g_f0_B = this.a_m19_PBZBRI(by3, true, this.c_f0_B);
        if (this.g_f0_B > 0) {
            if (n2 > 0 || n2 == -1 || n2 == -100) {
                if (this.a_m11_PBIBZZZRZ(by2, n2, by4, false, false, false)) {
                    bl2 = true;
                }
                if (this.g_f0_B != 1) {
                    let cd2 = null;
                    let by5 = by4;
                    by4 = this.c_f0_B;
                    by3 = by2;
                    let do_ = this;
                    let cd3 = do_.a_m12_PBRLcd_((by4 + 8));
                    if (cd3 != null && (cd2 = do_.a_m12_PBRLcd_) != cd3 ? do_.a_m10_PLcd_BIBBZZZRZ(cd3, by3, n2, do_.c_f0_B, by5, false, false, false) : false) {
                        bl2 = true;
                    }
                }
            }
            this.e_m1_PIRV(16 * this.g_f0_B);
        } else if (this.a_m11_PBIBZZZRZ(by2, n2, by4, false, false, false)) {
            bl2 = true;
            this.g_f0_B = 0;
        }
        let bl2 = null;
    
  }
  e_m2_PBRZ(by2) {

        this.g_f0_B = this.a_m19_PBZBRI(3, false, this.c_f0_B);
        if (this.g_f0_B > 0) {
            this.e_m1_PIRV(16 * this.g_f0_B);
        }
        return this.g_f0_B != 3;
    
  }
  a_m19_PBZBRI(n2, bl2, by2) {

        let g2 = di.a_f4_Lg_;
        let n3 = this.s;
        let n4 = this.t;
        let n5 = 0;
        for (let i2 = 1; i2 <= n2; ++i2) {
            if ((n3 += rpg.d.J[by2]) < 0 || (n4 += rpg.d.K[by2]) < 0 || n3 >= g.c_f3_B || n4 >= g.d_f2_B) continue;
            if (g2.a_m11_PLdu_IIRZ(this, n3, n4)) {
                let continue = null;
                let n5 = null;
            }
            if (g2.b_m2_PIIRZ(n3, n4) || g2.c_m3_PIIRZ(n3, n4)) {
                let n5 = null;
            }
            n5 = i2;
        }
        let n5 = null;
    
  }
  c_m5_PIRV(n2) {

        if (n2 < 0) {
            n2 = au.e < 20 ? (n2 /= 2) : (n2 /= 3);
        }
        if (do.a_f11_J > 0 && n2 < 0) {
            n2 = 0;
        }
        this.c_m6_PBIRV(0, bs.b_f1_Z ? 0 : n2);
        if (this.a_f5_AI[0] <= 0) {
            this.a_m0_PBRV(6);
            this.c_f1_I = 0;
        }
    
  }
  h_m1_PIRV(n2) {

        this.c_m6_PBIRV(1, n2);
    
  }
  i_m0_PIRV(n2) {

        this.c_m6_PBIRV(3, n2);
    
  }
  F() {

        let n2 = null;
        let n3 = n2 = di.b_f4_B == 5 ? this.c_m0_PBRI(10) : 2;
        let do_ = this;
        do_.c_m6_PBIRV(3, n3);
    
  }
  g_m1_PRV() {

        let do_ = this;
        if (do_.n_f0_B > 99 - do.p_f1_I) {
            this.n_f0_B = 99;
            this.a_f8_S = (this.a_f8_S + (4 * (99 - this.n_f0_B)));
            this.b_f3_S = (this.b_f3_S + 1 * (99 - this.n_f0_B >> 1));
        } else {
            this.n_f0_B = (this.n_f0_B + do.p_f1_I);
            this.a_f8_S = (this.a_f8_S + (4 * do.p_f1_I));
            this.b_f3_S = (this.b_f3_S + 1 * (do.p_f1_I >> 1));
        }
        this.i_m1_PRV();
        let n2 = 0;
        do_ = this;
        let n3 = do_.b_f2_AI[n2];
        n2 = 0;
        do_ = this;
        do_.a_f5_AI[n2] = n3;
        n2 = 1;
        do_ = this;
        n3 = do_.b_f2_AI[n2];
        n2 = 1;
        do_ = this;
        do_.a_f5_AI[n2] = n3;
        n2 = 3;
        do_ = this;
        n3 = do_.b_f2_AI[n2];
        n2 = 3;
        do_ = this;
        do_.a_f5_AI[n2] = n3;
    
  }
  j_m0_PIRV(n2) {

        if (ax.i_f0_Z || eb.f_f2_Z && this.n_f0_B < 20) {
            n2 <<= 1;
        }
        this.a_f5_AI[2] = this.a_f5_AI[2] + (n2 < 0 ? -n2 : n2);
        while (this.a_f5_AI[2] >= this.b_f2_AI[2]) {
            this.a_f5_AI[2] = this.a_f5_AI[2] - this.b_f2_AI[2];
            if (this.n_f0_B < 99) {
                this.n_f0_B = (this.n_f0_B + 1);
                this.i_m1_PRV();
                this.a_f8_S = (this.a_f8_S + 4);
                if (this.n_f0_B % 2 == 0) {
                    this.b_f3_S = (this.b_f3_S + 1);
                }
                this.a_m1_PLat_RV(new bu(8));
                if (!di.a_f0_Z) {
                    di.a_f0_Z = true;
                    rpg.b.a_m5_PRZ();
                    di.f_f0_Z = true;
                    di.a_f1_AB = rpg.e.a_f1_Lch_.a_m0_PIRAB(11);
                }
            }
            this.k_m0_PIRV(100);
            this.r(100);
            this.a_f5_AI[3] = 100;
            bs.a_f0_AZ[2] = true;
        }
        bs.a_f0_AZ[2] = true;
    
  }
  k_m0_PIRV(n2) {

        n2 = this.b_f2_AI[0] * n2 / 100;
        this.c_m5_PIRV;
    
  }
  r(n2) {

        let n3 = n2 = this.b_f2_AI[1] * n2 / 100;
        let do_ = this;
        do_.c_m6_PBIRV(1, n3);
    
  }
  c_m6_PBIRV(by2, n2) {

        let by3 = by2;
        this.a_f5_AI[by3] = this.a_f5_AI[by3] + n2;
        if (this.a_f5_AI[by2] > this.b_f2_AI[by2]) {
            this.a_f5_AI[by2] = this.b_f2_AI[by2];
        } else if (this.a_f5_AI[by2] < 0) {
            this.a_f5_AI[by2] = 0;
        }
        bs.a_f0_AZ[by2] = true;
    
  }
  i_m1_PRV() {

        let n2 = null;
        let n3 = null;
        let n4 = null;
        let bm2 = null;
        let n5 = null;
        let n6 = null;
        this.i_f1_Z = false;
        let object = this;
        this.b_f1_AZ = new Array(7).fill(false);
        for (n6 = 0; n6 < 7; ++n6) {
            (object).b_f1_AZ[n6] = false;
        }
        (object).P();
        n6 = 0;
        if ((object).a_m40_PIRZ(2)) {
            (object).s_m1_PIRV(2);
            n6 = 1;
            (object).O();
        }
        let n7 = n6 = n6 != 0 ? 3 : 0;
        while (n6 < 6) {
            if (n6 != 2 && super.a_m40_PIRZ) {
                super.s_m1_PIRV;
                break;
            }
            ++n6;
        }
        object = new Int32Array(4);
        n6 = 10 + (this.b_f1_AZ[0] ? 4 : 0);
        for (let i2 = 0; i2 < 4; ++i2) {
            object[i2] = n6 + this.a_f6_AS[i2];
        }
        let bmArray = this.a_f9_ALbm_;
        for (n6 = 0; n6 < 7; ++n6) {
            if (bmArray[n6] == null) continue;
            for (n5 = 0; n5 < 4; ++n5) {
                let object2 = object;
                let n8 = n5 + 0;
                object2[n8] = object2[n8] + bmArray[n6].a_m4_PIRI(n5 + 0);
                let object3 = object;
                let n9 = n5 + 0;
                object3[n9] = object3[n9] + bmArray[n6].a_m4_PIRI(n5 + 10);
                let object4 = object;
                let n10 = n5 + 0;
                object4[n10] = object4[n10] + bmArray[n6].a_m4_PIRI(15);
            }
        }
        this.c_f1_AI[0] = (object[0] + this.a_m33_PBIRI(3, object[0]) + this.a_f4_Lo_.a_m12_PBIRI(7, object[0]));
        this.c_f1_AI[1] = (object[1] + this.a_m33_PBIRI(13, object[1]) + this.a_f4_Lo_.a_m12_PBIRI(7, object[1]));
        this.c_f1_AI[2] = (object[2] + this.a_m33_PBIRI(8, object[2]) + this.a_f4_Lo_.a_m12_PBIRI(7, object[2]));
        this.c_f1_AI[3] = (object[3] + this.a_f4_Lo_.a_m12_PBIRI(7, object[3]));
        if (di.b_f4_B == 5) {
            this.c_f1_AI[3] = this.c_f1_AI[3] + this.a_m4_PBIZRI(11, object[3], false);
        }
        n5 = (bm2 = this.a_m29_PBRLbm_(3)) != null ? 1 : 0;
        object = this.a_m29_PBRLbm_(5);
        let n11 = object != null ? 1 : 0;
        let n12 = this.c_f1_AI[0] + this.c_f1_AI[1] / 4 + this.g_m2_PBRI(6);
        switch {
            case 1: {
                n12 += this.c_f1_AI[1] / 6 - this.c_f1_AI[0] / 3;
                break;
            }
            case 2: {
                n12 -= this.c_f1_AI[0] / 2;
                break;
            }
            case 3: {
                n12 -= this.c_f1_AI[1] / 6 + this.c_f1_AI[0] / 2;
            }
        }
        let n13 = bs.b_f1_Z ? 9999 : this.a_m33_PBIRI(15, this.c_f1_AI[1]) + this.a_f4_Lo_.a_m11_PBRI(1);
        this.k_f1_I = n12 + n13;
        this.l_f1_I = 0;
        switch {
            case 0: {
                if (n5 == 0) break;
                this.k_f1_I += this.a_m4_PBIZRI(11, bm2.c_f0_S, false);
                break;
            }
            case 2: {
                if (n11 == 0) break;
                this.l_f1_I = n12 + n13;
                this.i_f1_Z = true;
                break;
            }
            case 1: 
            case 3: {
                if (n11 == 0) break;
                this.l_f1_I = this.a_m4_PBIZRI(11, n12, false) + n13 + (object).b;
                this.i_f1_Z = true;
            }
        }
        if (n5 != 0) {
            this.k_f1_I += bm2.b;
            this.i_f1_Z = true;
        }
        this.m_m2_PRV();
        let n14 = this.h_m3_PBRI(1) + this.h_m3_PBRI(4) + this.h_m3_PBRI(6) + this.h_m3_PBRI(0) + this.g_m2_PBRI(7);
        if (di.b_f4_B == 2) {
            n14 += this.h_m3_PBRI(5);
        } else if (di.b_f4_B == 0) {
            n14 += this.c_f1_AI[0] / 12;
        }
        this.a_f7_I = n14 + this.a_m33_PBIRI(9, n14) + this.a_f4_Lo_.a_m11_PBRI(0);
        this.G();
        this.H();
        let by2 = (90 + this.g_m2_PBRI(14));
        n14 = by2;
        if (by2 > 95) {
            n14 = 95;
        }
        this.a_m24_PBIZRV(1, n14 += this.i_m3_PBRI(2), false);
        this.a_m24_PBIZRV(1, n14, true);
        this.c_f2_S = (10 + this.c_f1_AI[2] / 10 + this.i_m3_PBRI(10));
        this.o_f0_B = 0;
        if (di.b_f4_B == 2 && this.a_m29_PBRLbm_(5) != null) {
            this.o_f0_B = (5 + this.c_f1_AI[0] / 5 + (this.h_m3_PBRI(5) >> 1));
            if (this.o_f0_B > 75) {
                this.o_f0_B = 75;
            }
            this.o_f0_B = (this.o_f0_B + this.c_m0_PBRI(11));
        }
        n11 = n14 = this.n_f0_B * this.n_f0_B * this.n_f0_B - this.n_f0_B * this.n_f0_B + 80 * this.n_f0_B;
        let n15 = 2;
        let do_ = this;
        do_.b_f2_AI[n15] = n11;
        n11 = n4 = 5 * this.n_f0_B + 10 * this.c_f1_AI[3] + this.g_m2_PBRI(4);
        n15 = 1;
        let do_2 = this;
        do_2.b_f2_AI[n15] = n11;
        let n16 = 10 * this.n_f0_B + 12 * this.c_f1_AI[2] + this.g_m2_PBRI(9);
        n16 += this.a_f4_Lo_.a_m11_PBRI(2);
        if (di.b_f4_B == 2) {
            n16 += this.c_f1_AI[2] / 5;
        }
        n11 = n16;
        n15 = 0;
        let do_3 = this;
        do_3.b_f2_AI[n15] = n11;
        n11 = n3 = 100 + this.i_m3_PBRI(19);
        n15 = 3;
        let do_4 = this;
        do_4.b_f2_AI[n15] = n11;
        for (n2 = 0; n2 < 2; ++n2) {
            if (this.a_f5_AI[n2] <= this.b_f2_AI[n2]) continue;
            this.a_f5_AI[n2] = this.b_f2_AI[n2];
        }
        for (n2 = 0; n2 < 3; ++n2) {
            if (this.R[n2] <= 100) continue;
            this.R[n2] = 100;
        }
        this.o_f1_I = this.c_f1_AI[3] + this.a_f4_Lo_.a_m11_PBRI(3);
        bs.c_f0_Z = true;
    
  }
  G() {

        let bm2 = this.a_m29_PBRLbm_(3);
        let n2 = bm2 != null ? 1 : 0;
        let bm3 = this.a_m29_PBRLbm_(5);
        let bl2 = bm3 != null;
        let n3 = (this.c_f1_AI[1] >> 3) + this.g_m2_PBRI(5);
        if (di.b_f4_B == 3) {
            n3 += this.c_f1_AI[1] >> 4;
        }
        if (n3 > 50) {
            n3 = 50;
        }
        let n4 = (n3 += this.i_m3_PBRI(5)) + (n2 != 0 ? bm2.h : 0);
        n2 = n3 + (bl2 ? bm3.h : 0);
        if (n4 > 70) {
            n4 = 70;
        }
        if (n2 > 70) {
            n2 = 70;
        }
        if {
            n3 = this.a_f4_Lo_.b_m5_PBRI(1);
            n4 += n3;
            n2 += n3;
        }
        this.a_m24_PBIZRV(2, n4, false);
        this.a_m24_PBIZRV(2, n2, true);
    
  }
  H() {

        let n2 = this.c_f1_AI[1] / 5 + this.g_m2_PBRI(8);
        if (di.b_f4_B == 1) {
            n2 += this.c_f1_AI[1] / 10;
        } else if (di.b_f4_B == 2) {
            n2 -= this.c_f1_AI[1] / 10;
        }
        if (n2 > 75) {
            n2 = 75;
        }
        if ((n2 += this.i_m3_PBRI(4)) > 80) {
            n2 = 80;
        }
        if {
            n2 += this.a_f4_Lo_.b_m5_PBRI(2);
        }
        if (n2 > 85) {
            n2 = 85;
        }
        this.a_m24_PBIZRV(0, n2, false);
        this.a_m24_PBIZRV(0, n2, true);
    
  }
  a_m20_PLal_IBRZ(al2, n2, by2) {

        let bl2 = null;
        let n3 = null;
        if (this.b_f1_B == 7 || this.b_f1_B == 6) {
            let false = null;
        }
        if (al2 instanceof cd) {
            bs.a_m10_PLcd_ZRV(al2, true);
        }
        if (di.b_f4_B == 2) {
            if (this.y > 1) {
                this.a_m1_PLat_RV(new ak(19));
                if ((n2 *= this.y / 10) <= 0) {
                    n2 = 5;
                }
            }
            if {
                n3 = this.a_m4_PBIZRI(7, this.a_m9_PZRI, false);
                this.a_m1_PLat_RV(new ak(18));
                al2.a_m13_PLal_IBBRV(this, n3, 0, 3);
            }
            if (this.o_f0_B > 0 && rpg.g.a_m7_PIIRI(1, 100) > 100 - this.o_f0_B) {
                this.a_m1_PLat_RV(new z(-3));
                let false = null;
            }
        }
        if ((n3 = n2 * (rpg.g.a_m7_PIIRI(0, 2) + 10) / 10 - this.b_m11_PRI()) <= 0) {
            n3 = 5;
        }
        let al3 = this;
        n2 = al2.a_m9_PBRI(1) / 8 + al2.a_m8_PRB() - al3.n_f0_B;
        al2 = this;
        let n4 = n2;
        let by3 = 14;
        al3 = al2;
        if (al3.a_f2_AZ[by3]) {
            by3 = 14;
            al3 = al2;
            n4 = n2 - super.b_m12_PBIRI(by3, 1);
        }
        if (bl2 = rpg.g.a_m7_PIIRI(1, 99) < n4) {
            n3 += n3 / 2;
        }
        if (this.e_f1_I > 0) {
            this.e_f1_I = 0;
            if ((n3 -= this.e_f1_I) <= 0) {
                this.e_f1_I = -n3;
                n3 = 0;
            }
        }
        if ((n3 /= 3) <= 0) {
            n3 = 1;
        }
        this.j_f1_I = n3;
        this.c_m5_PIRV(-n3);
        this.F();
        this.a_m1_PLat_RV(new z(-4, -1, n3));
        this.a_m1_PLat_RV(new bu(bl2 ? 3 : 4));
        this.w = 1;
        this.x = by2;
        let true = null;
    
  }
  a_m21_PLal_IBBRV(al2, n2, by2, by3) {

        this.c_m5_PIRV(-n2);
        this.a_m1_PLat_RV(new z(-4, -1, n2));
        this.a_m1_PLat_RV(new bu(2));
    
  }
  h_m2_PBRV(by2) {

        let by3 = by2;
        this.a_f6_AS[by3] = (this.a_f6_AS[by3] + 1);
    
  }
  a_m22_PBRI(by2) {

        return this.c_f1_AI[by2];
    
  }
  a_m23_PBIRV(by2, n2) {

        this.a_f5_AI[by2] = n2;
    
  }
  e_m3_PBRI(by2) {

        return this.a_f5_AI[by2];
    
  }
  c_m7_PRI() {

        return this.a_f5_AI[3];
    
  }
  f_m2_PBRI(by2) {

        return this.b_f2_AI[by2];
    
  }
  b_m10_PBRI(by2) {

        return this.R[by2];
    
  }
  a_m24_PBIZRV(by2, n2, bl2) {

        this.R[by2 + (bl2 ? 3 : 0)] = n2;
    
  }
  a_m25_PRI() {

        let n2 = 0;
        let do_ = this;
        return do_.R[n2];
    
  }
  a_m26_PBZRI(by2, bl2) {

        let by3 = null;
        if {
            let do_ = 2;
            let n4 = this;
            by3 = n4.R[5];
        } else {
            let n2 = 2;
            let do_ = this;
            by3 = do_.R[n2];
        }
        let by4 = by3;
        let n3 = by3 + (this.n_f0_B - by2);
        if (n3 > 90) {
            return 90;
        }
        let n3 = null;
    
  }
  a_m27_PIRI(n2) {

        let n3 = 6;
        let do_ = this;
        if (do_.a_f2_AZ[n3]) {
            return n2 + this.b_m12_PBIRI(6, n2);
        }
        let n2 = null;
    
  }
  b_m11_PRI() {

        if {
            return (this.a_f7_I << 2) / 5;
        }
        return this.a_f7_I;
    
  }
  i_m2_PBRV(by2) {

        let cd2 = this.a_m12_PBRLcd_;
        if (cd2 != null) {
            cd2.b_m4_PBRV;
        }
    
  }
  j_m1_PRV() {

        let bj2 = di.a_m12_PRLbj_();
        let n2 = 0;
        let n3 = bj2.a_m0_PRI();
        for (let n4 = 0; n4 < n3; n4 = ((n4 + 1))) {
            let as2 = bj2.a_m1_PIRLas_;
            if (!(as2 instanceof bm) || (as2).i < 0) continue;
            this.a_f9_ALbm_[(as2).i] = as2;
            let by2 = (n2 + 1);
            n2 = by2;
            if (by2 == 7) break;
        }
    
  }
  g_m2_PBRI(by2) {

        let n2 = 0;
        let bmArray = this.a_f9_ALbm_;
        for (let i2 = 0; i2 < 7; ++i2) {
            if (bmArray[i2] == null) continue;
            n2 += bmArray[i2].a_m4_PIRI;
        }
        let n2 = null;
    
  }
  a_m28_PRB() {

        return this.n_f0_B;
    
  }
  h_m3_PBRI(by2) {

        if (this.a_f9_ALbm_[by2] != null) {
            return this.a_f9_ALbm_[by2].d_f1_S;
        }
        return 0;
    
  }
  a_m29_PBRLbm_(by2) {

        if (by2 < 0) {
            let null = null;
        }
        return this.a_f9_ALbm_[by2];
    
  }
  a_m30_PBLbm_RV(by2, bm2) {

        if (bm2 != null) {
            this.j_m2_PBRV;
            this.a_f9_ALbm_[by2] = bm2;
            bm2.i = by2;
        }
    
  }
  j_m2_PBRV(by2) {

        let bm2 = this.a_m29_PBRLbm_;
        if (bm2 != null) {
            this.a_m31_PLbm_RV;
        }
    
  }
  a_m31_PLbm_RV(bm2) {

        if (bm2 != null && bm2.i >= 0) {
            this.a_f9_ALbm_[bm2.i] = null;
            bm2.i = -1;
        }
    
  }
  a_m32_PLal_RZ(al2) {

        let do_ = this;
        let n2 = 1;
        let do_2 = do_;
        do_2 = this;
        let n3 = do_.R[n2] + do_2.n_f0_B - al2.a_m8_PRB() - al2.a_m9_PBRI(1) / 5;
        if (this.b_f1_AZ[4]) {
            n3 += n3 * 5 / 100;
        }
        return (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 100 < n3;
    
  }
  i_m3_PBRI(by2) {

        let by3 = by2;
        let do_ = this;
        if (do_.a_f2_AZ[by3]) {
            by3 = by2;
            do_ = this;
            return do_.b_m12_PBIRI(by3, 1);
        }
        return 0;
    
  }
  a_m33_PBIRI(by2, n2) {

        let by3 = by2;
        let do_ = this;
        if (do_.a_f2_AZ[by3]) {
            return this.b_m12_PBIRI(by2, n2);
        }
        return 0;
    
  }
  b_m12_PBIRI(by2, n2) {

        let n3 = by2 * 3;
        by2 = (this.c_f0_AB[by2] + this.a_f4_Lo_.a_m11_PBRI(5));
        return n2 * (this.b_f0_AB[n3] + this.b_f0_AB[n3 + 1] * by2) / this.b_f0_AB[n3 + 2];
    
  }
  b_m13_PBRB(by2) {

        return this.c_f0_AB[by2];
    
  }
  a_m34_PIBRV(n2, by2) {

        for (let i2 = 0; i2 < 4; ++i2) {
            if (this.a_f1_AB[i2] != by2) continue;
            this.a_f1_AB[i2] = -1;
        }
        this.l_m0_PIRV;
        this.a_f1_AB[n2] = by2;
        this.a_f2_AZ[by2] = true;
        if (by2 == 1) {
            di.j();
        }
    
  }
  l_m0_PIRV(n2) {

        let by2 = this.a_f1_AB[n2];
        if (by2 >= 0) {
            this.a_f2_AZ[by2] = false;
        }
        this.a_f1_AB[n2] = -1;
    
  }
  I() {

        this.a_f1_AB = new Int8Array(4);
        for (let i2 = 0; i2 < 4; ++i2) {
            this.a_f1_AB[i2] = -1;
        }
    
  }
  f_m3_PBRZ(by2) {

        return this.a_f2_AZ[by2];
    
  }
  J() {

        let n2 = null;
        this.a_f2_AZ = new Array(20).fill(false);
        for (n2 = 0; n2 < 20; ++n2) {
            this.a_f2_AZ[n2] = false;
        }
        for (n2 = 0; n2 < 4; ++n2) {
            if (this.a_f1_AB[n2] < 0) continue;
            this.a_f2_AZ[this.a_f1_AB[n2]] = true;
        }
    
  }
  k_m1_PRV() {

        this.b_m0_PBIRV(20, 100);
        this.f_f0_Z = true;
    
  }
  b_m14_PBBRV(by2, by3) {

        this.b_m0_PBIRV(21, 80);
        this.y = by3;
    
  }
  d_m3_PBIRV(by2, n2) {

        if (this.b_m1_PBRZ) {
            this.b_f0_Ljava_util_Vector_.addElement(new dn(by2, 10, -1));
        }
    
  }
  b_m15_PLat_RV(at2) {

        switch {
            case 41: 
            case 42: {
                if (this.e_f1_I > 0) break;
                at2.a_f2_Z = true;
                return;
            }
            case 37: 
            case 38: {
                if (this.f_f1_I > 0) break;
                at2.a_f2_Z = true;
                return;
            }
            case 6: {
                if (at2.b_f0_I % 10 != 0) break;
                if (this.b_f1_B == 7 || this.b_f1_B == 6) {
                    at2.a_f2_Z = true;
                    return;
                }
                if (di.d_f3_B != 3) break;
                this.c_m5_PIRV(-this.n_f1_I);
            }
        }
    
  }
  c_m8_PLat_RV(at2) {

        switch {
            case 20: {
                this.f_f0_Z = false;
                return;
            }
            case 21: {
                this.y = -1;
                return;
            }
            case 31: {
                let n2 = this.a_f4_Lo_.c_m3_PBRI(1);
                this.a_m2_PBBIRV(32, 1, n2);
                this.g_f1_Z = true;
                return;
            }
            case 32: {
                this.g_f1_Z = false;
                this.G();
                return;
            }
            case 33: {
                let n3 = this.a_f4_Lo_.c_m3_PBRI(2);
                this.a_m2_PBBIRV(34, 2, n3);
                this.h_f0_Z = true;
                return;
            }
            case 34: {
                this.h_f0_Z = false;
                this.H();
                return;
            }
            case 44: {
                this.a_f10_Z = false;
                return;
            }
            case 7: {
                this.b_f5_Z = false;
                if (this.d_f1_I <= 1) break;
                this.d_f1_I = 1;
                return;
            }
            case 6: {
                this.n_f1_I = 0;
            }
        }
    
  }
  h_m4_PBRZ(by2) {

        let n2 = null;
        for (let i2 = n2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            let at2 = this.b_f0_Ljava_util_Vector_.elementAt;
            if (at2.a_f0_B != by2) continue;
            this.c_m8_PLat_RV;
            this.b_f0_Ljava_util_Vector_.removeElementAt;
        }
        let false = null;
    
  }
  a_m35_PZRZ(bl2) {

        block13: {
            if (this.b_f1_B == 7 || this.b_f1_B == 6) {
                let false = null;
            }
            if (di.a_f11_AI[4] > 0) {
                let true = null;
            }
            let object = di.a_m14_PZRLas_;
            if (object == null) {
                let false = null;
            }
            let as2 = object;
            object = this;
            if (as2 != null && as2.a_f1_B == 20) {
                let n2 = as2.b_f0_B;
                switch {
                    case 2: {
                        (object).c_m5_PIRV(100);
                        break;
                    }
                    case 8: {
                        n2 = 300;
                        super.c_m6_PBIRV(1, n2);
                        break;
                    }
                    case 4: {
                        super.h_m4_PBRZ(7);
                        break;
                    }
                    case 5: {
                        super.h_m4_PBRZ(6);
                        break;
                    }
                    case 6: {
                        (object).c_m5_PIRV(600);
                        break;
                    }
                    case 7: {
                        (object).c_m5_PIRV(1000);
                    }
                    case 3: {
                        n2 = 80;
                        super.c_m6_PBIRV(1, n2);
                        break;
                    }
                    default: {
                        let block13 = null;
                    }
                }
                object = di.a_m11_PBRLbj_;
                let n3 = (object).a_m2_PLas_RI;
                (object).a_m6_PIIRV(n3, 1);
                di.i();
            }
        }
        let true = null;
    
  }
  l_m1_PRV() {

        let by2 = di.b_f4_B;
        let do_ = this;
        let bj2 = di.a_m11_PBRLbj_(20);
        bj2.a_m5_PLas_IRI(as.a_m0_PBBRLas_(20, 2), 5);
        di.a_m13_PZBRV(true, 2);
        let by3 = di.a_m17_PRZ() ? 13 : 12;
        let object = as.a_m0_PBBRLas_(by3, 0);
        di.a_m12_PRLbj_().a_m5_PLas_IRI(object, 1);
        do_.a_m30_PBLbm_RV(4, object);
        let byArray = new Int8Array([1, 4, 2, 5, 6, 4]);
        object = byArray;
        object = as.a_m0_PBBRLas_(byArray[by2], 0);
        di.a_m12_PRLbj_().a_m5_PLas_IRI(object, 1);
        do_.a_m30_PBLbm_RV(3, object);
        let byArray2 = new Int8Array([-1, 4, 7, 5, -1, -1]);
        object = byArray2;
        by2 = byArray2[by2];
        if (by2 >= 0) {
            object = as.a_m0_PBBRLas_(by2, 0);
            di.a_m12_PRLbj_().a_m5_PLas_IRI(object, 1);
            do_.a_m30_PBLbm_RV(5, object);
        }
        this.j_m1_PRV();
    
  }
  m_m1_PIRV(n2) {

        let by2 = this.c_f0_B;
        if (by2 == 1 || by2 == 2) {
            di.a_f4_Lg_.c_m4_PIIRV(n2, by2);
            return;
        }
        di.a_f4_Lg_.b_m4_PIIRV(n2, by2);
    
  }
  m_m2_PRV() {

        let n2 = null;
        let do_ = null;
        if (!g.c_f5_Z || !this.i_f1_Z) {
            this.a_f0_B = 1;
            do_ = this;
            n2 = 3;
        } else {
            this.a_f0_B = (this.b_f4_I > 0 ? 8 : 0);
            do_ = this;
            n2 = this.b_f4_I > 0 ? 9 : 2;
        }
        do_.j_f0_B = n2;
    
  }
  n_m0_PIRV(n2) {

        this.b_f4_I = n2;
        if (this.b_f1_AZ[6]) {
            this.b_f4_I += n2 * 50 / 100;
        }
        this.O();
        this.a_f0_B = 8;
        this.j_f0_B = 9;
        this.a_m6_PRV();
        rpg.e.a_f2_Lca_.a_m1_PZRV;
        this.N();
        this.a_m1_PLat_RV(new bu(9));
    
  }
  K() {

        this.b_f4_I = -1;
        this.P();
        this.a_f0_B = g.c_f5_Z ? 0 : 1;
        this.j_f0_B = (g.c_f5_Z ? 2 : 3);
        this.a_m6_PRV();
        rpg.e.a_f2_Lca_.a_m1_PZRV;
        if (this.m_f1_I > 0) {
            this.M();
            rpg.e.a_f2_Lca_.a_m1_PZRV;
            return;
        }
        this.a_m1_PLat_RV(new bu(10));
    
  }
  n_m1_PRV() {

        this.a_f4_Lo_.e_m1_PRV();
        if (this.b_f4_I > 0) {
            return;
        }
        this.M();
        rpg.e.a_f2_Lca_.a_m1_PZRV;
    
  }
  L() {

        this.N();
        if (this.b_f4_I > 0) {
            return;
        }
        rpg.e.a_f2_Lca_.a_m1_PZRV;
    
  }
  o_m0_PIRV(n2) {

        if (this.m_f1_I < n2) {
            this.m_f1_I = n2;
        }
    
  }
  M() {

        this.a_m3_PBRZ(9);
        this.d_m3_PBIRV(45, -1);
        this.d_m3_PBIRV(46, -1);
    
  }
  N() {

        this.a_m3_PBRZ(10);
        this.h_m4_PBRZ(45);
        this.h_m4_PBRZ(46);
    
  }
  a_m36_PRAB() {

        let byArray = null;
        let byteArrayOutputStream = null;
        let filterOutputStream = null;
        try {
            let n2 = null;
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = let DataOutputStream = null;
            (filterOutputStream).writeByte;
            (filterOutputStream).writeShort;
            (filterOutputStream).writeShort;
            for (n2 = 0; n2 < 4; ++n2) {
                (filterOutputStream).writeInt(this.a_f5_AI[n2]);
            }
            for (n2 = 0; n2 < 4; ++n2) {
                (filterOutputStream).writeShort(this.a_f6_AS[n2]);
            }
            (filterOutputStream).write;
            (filterOutputStream).write;
            (filterOutputStream).write;
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (iOException) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) let null = null;
                byteArrayOutputStream.close();
                let null = null;
            }
            catch (iOException2) {
                let null = null;
            }
        }
        catch (throwable) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) let throwable = null;
                byteArrayOutputStream.close();
                let throwable = null;
            }
            catch (iOException) {}
            let throwable = null;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            let byArray = null;
        }
        catch (iOException) {}
        let byArray = null;
    
  }
  a_m37_PABRV(byArray) {

        let byteArrayInputStream = null;
        let filterInputStream = null;
        try {
            let n2 = null;
            byteArrayInputStream = let ByteArrayInputStream = null;
            filterInputStream = let DataInputStream = null;
            this.n_f0_B = (filterInputStream).readByte();
            this.a_f8_S = (filterInputStream).readShort();
            this.b_f3_S = (filterInputStream).readShort();
            for (n2 = 0; n2 < 4; ++n2) {
                this.a_f5_AI[n2] = (filterInputStream).readInt();
            }
            for (n2 = 0; n2 < 4; ++n2) {
                this.a_f6_AS[n2] = (filterInputStream).readShort();
            }
            (filterInputStream).read;
            (filterInputStream).read;
            (filterInputStream).read;
            if (di.a_m20_PBRZ(2)) {
                this.o_m1_PRV();
            }
            if (di.a_m20_PBRZ(1)) {
                this.p_m0_PRV();
            }
        }
        catch (iOException) {
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream == null) return;
                byteArrayInputStream.close();
                return;
            }
            catch (iOException2) {
                return;
            }
        }
        catch (throwable) {
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream == null) let throwable = null;
                byteArrayInputStream.close();
                let throwable = null;
            }
            catch (iOException) {}
            let throwable = null;
        }
        try {
            filterInputStream.close();
            byteArrayInputStream.close();
            return;
        }
        catch (iOException) {
            return;
        }
    
  }
  o_m1_PRV() {

        let n2 = 0;
        for (let i2 = 0; i2 < 4; ++i2) {
            if (this.a_f6_AS[i2] <= 0) continue;
            n2 += this.a_f6_AS[i2];
            this.a_f6_AS[i2] = 0;
        }
        this.a_f8_S = (this.a_f8_S + n2);
    
  }
  p_m0_PRV() {

        let by2 = null;
        let n2 = 0;
        for (by2 = 0; by2 < 48; ++by2) {
            if (this.d_f0_AB[by2] <= 0) continue;
            n2 += this.d_f0_AB[by2];
            this.d_f0_AB[by2] = 0;
        }
        for (by2 = 0; by2 < 20; ++by2) {
            if (this.c_f0_AB[by2] <= 0) continue;
            n2 += this.c_f0_AB[by2];
            this.c_f0_AB[by2] = 0;
        }
        this.b_f3_S = (this.b_f3_S + n2);
        this.b_f3_S = (this.b_f3_S - 36);
        this.y();
        for (by2 = 0; by2 < 2; by2 = (by2 + 1)) {
            di.a_m15_PBZRV(by2, true);
        }
        this.I();
    
  }
  a_m38_PRLo_() {

        return this.a_f4_Lo_;
    
  }
  k_m2_PBRV(by2) {

        this.a_m1_PLat_RV(new z(-6, by2, 2));
    
  }
  p_m1_PIRV(n2) {

        let n3 = 0;
        let n4 = 0;
        let do_ = this;
        do_.a_f5_AI[n4] = n3;
        n3 = 0;
        n4 = 1;
        do_ = this;
        do_.a_f5_AI[n4] = n3;
        this.k_m0_PIRV(50);
        this.r(50);
        this.b_m0_PZRV;
        this.v();
        this.h = (this.s << 4);
        this.i = (this.t << 4);
        this.E();
        this.u();
        this.a_m0_PBRV(1);
    
  }
  a_m39_PRZ() {

        return this.a_f4_Lo_.a_m9_PRZ();
    
  }
  h_m5_PRZ() {

        return Math.max(10, 60 - this.c_f2_S) < rpg.g.a_m7_PIIRI(0, 99);
    
  }
  g_m3_PRZ() {

        let by2 = 11;
        let do_ = this;
        if (do_.a_f2_AZ[by2]) {
            by2 = 11;
            do_ = this;
            let n2 = do_.b_m12_PBIRI(by2, 1);
            if (rpg.g.a_m7_PIIRI(1, 99) > 100 - n2) {
                let false = null;
            }
        }
        let true = null;
    
  }
  b_m16_PIRI(n2) {

        let n3 = n2;
        let n4 = 7;
        let do_ = this;
        if (do_.a_f2_AZ[n4]) {
            n3 = this.b_m12_PBIRI(7, n2);
        }
        let n3 = null;
    
  }
  q_m0_PIRV(n2) {

        let n3 = 0;
        let n4 = 0;
        if (this.a_f10_Z && n2 > 0) {
            n3 = this.a_f4_Lo_.a_m8_PIRI;
        }
        if (this.b_f1_AZ[1] && n2 > 0) {
            n3 += n2 * 10 / 100;
        }
        let n5 = 16;
        let do_ = this;
        if (do_.a_f2_AZ[n5]) {
            n5 = 16;
            do_ = this;
            n4 = do_.b_m12_PBIRI(n5, 1);
        }
        n5 = 17;
        do_ = this;
        if (do_.a_f2_AZ[n5]) {
            n5 = 17;
            do_ = this;
            n3 += do_.b_m12_PBIRI(n5, 1);
        }
        if (this.b_f1_AZ[3] && n2 > 0) {
            n4 += n2 * 5 / 100;
        }
        if (n3 > 0) {
            this.c_m5_PIRV;
        }
        if (n4 > 0) {
            n5 = n4;
            do_ = this;
            do_.c_m6_PBIRV(1, n5);
        }
        this.F();
    
  }
  c_m9_PRB() {

        let by2 = 0;
        let by3 = 12;
        let do_ = this;
        if (do_.a_f2_AZ[by3] && rpg.g.a_m7_PIIRI(0, 99) < 25) {
            by3 = 12;
            do_ = this;
            by2 = (0 + do_.b_m12_PBIRI(by3, 1));
        }
        let by2 = null;
    
  }
  c_m10_PIRI(n2) {

        let n3 = 18;
        let do_ = this;
        if (do_.a_f2_AZ[n3]) {
            return this.b_m12_PBIRI(18, n2);
        }
        let n2 = null;
    
  }
  c_m11_PIIRV(n2, n3) {

        if (this.b_f1_B == 7 || this.b_f1_B == 6) {
            return;
        }
        if (this.b_m17_PRZ()) {
            return;
        }
        this.n_f1_I = this.b_f2_AI[0] / n3;
        this.a_m4_PBIRZ(6, n2);
    
  }
  g_m4_PIRV(n2) {

        if (this.b_f1_B == 7 || this.b_f1_B == 6) {
            return;
        }
        if (this.b_f1_AZ[5]) {
            return;
        }
        if (this.b_m17_PRZ()) {
            return;
        }
        if (!this.b_f5_Z) {
            this.b_f5_Z = true;
            this.a_m4_PBIRZ(7, n2);
            this.f_m1_PIRV;
        }
    
  }
  b_m17_PRZ() {

        if (di.b_f4_B == 2 && this.y > 1) {
            this.a_m1_PLat_RV(new ak(19));
            let true = null;
        }
        let false = null;
    
  }
  O() {

        if (this.f <= 8) {
            this.f = (this.f << 1);
        }
    
  }
  P() {

        if (this.d_f1_I > 1) {
            this.f = 4;
            return;
        }
        if (this.b_f1_AZ[2] || this.b_f4_I > 1) {
            this.f = 16;
            return;
        }
        this.f = 8;
    
  }
  a_m40_PIRZ(n2) {

        let n3 = 0;
        for (let by2 = 0; by2 < 7; by2 = (by2 + 1)) {
            let bm2 = this.a_m29_PBRLbm_;
            if (bm2 == null || bm2.f != n2) continue;
            ++n3;
        }
        return n3 > 2;
    
  }
  s_m1_PIRV(n2) {

        switch {
            case 0: {
                this.b_f1_AZ[0] = true;
                return;
            }
            case 1: {
                this.b_f1_AZ[1] = true;
                return;
            }
            case 2: {
                this.b_f1_AZ[2] = true;
                return;
            }
            case 3: {
                this.b_f1_AZ[1] = true;
                this.b_f1_AZ[3] = true;
                this.b_f1_AZ[4] = true;
                return;
            }
            case 4: {
                this.b_f1_AZ[1] = true;
                this.b_f1_AZ[4] = true;
                this.b_f1_AZ[5] = true;
                return;
            }
            case 5: {
                this.b_f1_AZ[4] = true;
                this.b_f1_AZ[6] = true;
            }
        }
    
  }
  l_m2_PBRV(by2) {

        this.i_f0_B = by2;
        this.a_m0_PBRV(99);
    
  }
  static g_m5_PBRZ(by2) {

        return by2 < 4;
    
  }
  x() {

        if (this.d_f1_I == 0 && !this.j && !this.k) {
            this.d_f1_I = -1;
            this.P();
        }
    
  }
  q_m1_PRV() {

        if (di.c_m9_PRZ() || this.b_f1_B == 3) {
            this.b_m4_PIRV(0);
            this.m_f0_B = 0;
            this.a_f4_Lo_.a_m1_PZRV;
        }
        di.e_m0_PRV();
    
  }
}

JavaRegistry.set("do", do);
JavaRegistry.set("do", do);
try { if (typeof do.__clinit === 'function') do.__clinit(); } catch (e) { console.warn('clinit do', e); }

globalThis.do = do;
