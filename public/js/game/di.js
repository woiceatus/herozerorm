/** Transpiled from di */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class di extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_Z = null;
  static b_f0_Z = null;
  static c_f0_Z = null;
  static d_f0_Z = null;
  static e_f0_Z = null;
  static a_f1_AB = null;
  static f_f0_Z = null;
  static c_f1_AB = null;
  static d_f1_AB = null;
  static a_f2_AZ = null;
  static a_f3_B = null;
  static a_f4_Lg_ = null;
  static a_f5_I = null;
  static b_f1_I = null;
  static c_f2_I = null;
  static d_f2_I = null;
  static g_f0_Z = null;
  static h_f0_Z = null;
  static i_f0_Z = null;
  static Q = null;
  static R = null;
  static S = null;
  static a_f6_Lbj_ = null;
  static b_f2_Lbj_ = null;
  static c_f3_Lbj_ = null;
  static e_f1_I = null;
  static c_f4_AI = null;
  static f_f1_I = null;
  static a_f7_J = null;
  static b_f3_J = null;
  static a_f8_AJ = null;
  static T = null;
  static b_f4_B = null;
  static a_f9_Ldo_ = null;
  static a_f10_Lh_ = null;
  static b_f5_AB = null;
  static a_f11_AI = null;
  static b_f6_AI = null;
  static U = null;
  static V = null;
  static c_f5_B = null;
  static m = null;
  static d_f3_B = null;
  static n = null;
  static e_f2_B = null;
  static f_f2_B = null;
  static g_f1_B = null;
  static h_f1_B = null;
  static W = null;
  /* skip field: public static byte[][] a_f12_AAB; */
  static i_f1_B = null;
  static j = null;
  static k = null;
  static c_f6_J = null;
  static d_f4_J = null;
  static l = null;
  static a_m0_PBBBBRV(by2, by3, by4, by5) {

        di.e_f2_B = by3;
        di.f_f2_B = by4;
        di.g_f1_B = by5;
        di.n = by2;
    
  }
  static a_m1_PBBBRV(by2, by3, by4) {

        a_m0_PBBBBRV(3, by3, by4, 0);
    
  }
  static a_m2_PBBRV(by2, by3) {

        a_m0_PBBBBRV(by2, by3, 0, 0);
    
  }
  static a_m3_PBRV(by2) {

        a_m0_PBBBBRV(by2, 0, 0, 0);
    
  }
  static a_m4_PRV() {

        if (di.n == 0) {
            return;
        }
        let by2 = di.n;
        di.n = 0;
        block0 : switch {
            case 11: {
                bs.a_m0_PRLbs_().a_m5_PBZRV(2, false);
                return;
            }
            case 1: {
                bs.a_m0_PRLbs_().a_m5_PBZRV(4, false);
                return;
            }
            case 2: {
                di.a_f4_Lg_.a_m3_PLdu_RV;
                di.a_f9_Ldo_.b_m0_PZRV(!g.c_f5_Z || g.f_f1_Z);
                bs.h();
                di.a_f9_Ldo_.a_m0_PSSRV((di.e_f2_B << 4), (di.f_f2_B << 4));
                di.a_f9_Ldo_.c_m0_PBRV;
                a_m0_PBBBBRV(0, 0, 0, 0);
                di.a_f9_Ldo_.a_m0_PBRV(1);
                di.a_f9_Ldo_.E();
                di.a_f9_Ldo_.u();
                di.a_f4_Lg_.c_m0_PLdu_RV;
                c_m0_PRV();
                di.c_f2_I = di.a_f5_I;
                di.d_f2_I = di.b_f1_I;
                c.a_m0_PRLrpg_c_().f();
                bs.c_f0_Z = true;
                if (df.g_m0_PRZ()) {
                    a_m1_PBBBRV(3, 4, 1);
                } else {
                    a_m1_PBBBRV(3, 3, 1);
                }
                if (di.k == 0) break;
                di.k = 0;
                k();
                return;
            }
            case 3: {
                di.d_f3_B = di.e_f2_B;
                switch {
                    case 0: {
                        c.a_m2_PIRV;
                        let block0 = null;
                    }
                    case 1: {
                        c.a_m0_PRLrpg_c_().f();
                        let block0 = null;
                    }
                    case 2: {
                        c.a_m0_PRLrpg_c_().g();
                        let block0 = null;
                    }
                    case 3: {
                        c.a_m0_PRLrpg_c_().h();
                    }
                }
                return;
            }
            case 6: {
                di.d_f3_B = 5;
                ax.a_m0_PRLax_().a_m1_PRV();
                ax.a_m0_PRLax_().c;
                return;
            }
            case 7: {
                di.d_f3_B = 3;
                ax.a_m0_PRLax_().g();
                switch {
                    case 1: {
                        e.a_m0_PRLrpg_e_().e();
                        bs.a_m0_PRLbs_().a_m5_PBZRV(2, false);
                        let block0 = null;
                    }
                    case 2: {
                        b_m1_PBBBBRV(di.V[0], di.V[1], di.V[2], 2);
                    }
                }
                return;
            }
            case 8: {
                let n2 = null;
                by2 = di.e_f2_B;
                if (by2 == 2) {
                    if (di.h_f1_B < 2) {
                        di.h_f1_B = (di.h_f1_B + 1);
                    }
                    a_m11_PBRLbj_(19).a_m8_PRV();
                    di.a_f9_Ldo_.a_m23_PBIRV(0, di.a_f9_Ldo_.f_m2_PBRI(0));
                    di.a_f9_Ldo_.a_m23_PBIRV(1, di.a_f9_Ldo_.f_m2_PBRI(1));
                    di.a_f9_Ldo_.a_m23_PBIRV(3, di.a_f9_Ldo_.f_m2_PBRI(3));
                    a_m7_PIIIRV(di.U[0], di.U[1], di.U[2]);
                    n();
                } else {
                    f_m0_PRV();
                    h();
                    di.d_f4_J = rpg.g.a_m9_PRJ();
                }
                let n3 = by2 == 2 ? 1 : 0;
                let n4 = n3;
                let n5 = n3 != 0 ? 31 : 32;
                for (n2 = 0; n2 < n5; ++n2) {
                    di.Q[n2] = 0;
                }
                if (n4 != 0) {
                    for (n2 = n5 << 3; n2 < 250; ++n2) {
                        di.d_m1_PIRV;
                    }
                }
                for (n4 = 0; n4 < 32; ++n4) {
                    di.R[n4] = 0;
                }
                for (n4 = 0; n4 < 140; ++n4) {
                    di.S[n4] = -1;
                }
                if (n3 == 0) {
                    for (n4 = 0; n4 < 10; ++n4) {
                        di.W[n4] = 0;
                    }
                }
                n4 = 1;
                if (by2 == 0) {
                    di.c_f6_J = 0;
                    di.h_f1_B = 0;
                    di.k = 0;
                    di.l = 1;
                    di.e_f1_I = 0;
                    o();
                    di.a_f9_Ldo_.l_m1_PRV();
                    di.a_f9_Ldo_.a_m1_PZRV;
                    n();
                    let as2 = as.a_m0_PBBRLas_(20, 1);
                    di.c_f3_Lbj_.a_m5_PLas_IRI(as2, 1);
                } else if (by2 == 1) {
                    let n6 = null;
                    if (!di.a_m18_PZRZ) {
                        n6 = 0;
                    } else {
                        di.a_f9_Ldo_.j_m1_PRV();
                        di.a_f9_Ldo_.i_m1_PRV();
                        n6 = n4 = 1;
                    }
                }
                if (n4 != 0) {
                    bs.a_m0_PRLbs_().a_m5_PBZRV(3, false);
                } else {
                    b.a_m0_PRV();
                    di.i.a_m0_PRLi_().a_f2_B = 0;
                    e.a_m0_PRLrpg_e_().e();
                    bs.a_m0_PRLbs_().a_m5_PBZRV(2, false);
                    di.i.a_m0_PRLi_().b_f1_Ln_ = new br(di.i.a_m0_PRLi_(), e.i_f0_Lch_.a_m0_PIRAB(13), '\u0000');
                }
                b.b_m4_PRV();
                return;
            }
            case 9: {
                if {
                    bq.b_m1_PBZRV(15, false);
                }
                bs.a_m0_PRLbs_().n = 0;
                c_m6_PBRV(7);
            }
        }
    
  }
  static a_m5_PIRV(n2) {

        a_m2_PBBRV(8, n2);
    
  }
  static b_m0_PRV() {

        a_m1_PBBBRV(3, 2, 3);
    
  }
  static b_m1_PBBBBRV(by2, by3, by4, by5) {

        di.a_f3_B = by2;
        a_m0_PBBBBRV(1, by3, by4, by5);
    
  }
  static c_m0_PRV() {

        di.a_f5_I = bs.l - di.a_f9_Ldo_.h;
        di.b_f1_I = bs.m - di.a_f9_Ldo_.i;
    
  }
  static a_m6_PZZRV(bl2, bl3) {

        if {
            let by2 = di.a_f9_Ldo_.c_f0_B;
            if {
                di.b_f1_I -= di.c_f1_AB[c.c_f0_B] * d.K[by2];
                di.a_f5_I -= di.c_f1_AB[c.c_f0_B] * d.J[by2];
            }
            if (!di.a_f2_AZ[by2] && di.d_f2_I != di.b_f1_I) {
                di.d_f2_I += (di.b_f1_I - di.d_f2_I + 1) / di.d_f1_AB[c.c_f0_B] - 1;
            }
            if (di.a_f2_AZ[by2] && di.c_f2_I != di.a_f5_I) {
                di.c_f2_I += (di.a_f5_I - di.c_f2_I + 1) / di.d_f1_AB[c.c_f0_B] - 1;
            }
            return;
        }
        di.c_f2_I += (di.a_f5_I - di.c_f2_I + 1) / di.d_f1_AB[c.c_f0_B] - 1;
        di.d_f2_I += (di.b_f1_I - di.d_f2_I + 1) / di.d_f1_AB[c.c_f0_B] - 1;
    
  }
  static d_m0_PRV() {

        if (di.c_f5_B != 0 && !di.a_f9_Ldo_.j && !di.a_f9_Ldo_.k) {
            b_m4_PBBRV(di.c_f5_B, di.m);
            c_m2_PBBRV(0, 0);
        }
        if (!g.a_m25_PRZ()) {
            di.a_f9_Ldo_.c_m1_PRV();
            di.a_f4_Lg_.c_m0_PLdu_RV;
            cd.C();
            di.a_f4_Lg_.a_m19_PBBRZ(di.a_f9_Ldo_.s, di.a_f9_Ldo_.t);
            di.a_f4_Lg_.f_m1_PRV();
            di.a_f4_Lg_.d_m1_PRV();
            if (!di.b_f0_Z && di.a_f4_Lg_.b_f3_B == 11) {
                di.b_f0_Z = true;
                b.a_m5_PRZ();
                di.f_f0_Z = true;
                di.a_f1_AB = e.a_f1_Lch_.a_m0_PIRAB(12);
            }
        }
    
  }
  static b_m2_PBRV(by2) {

        switch {
            case 1: {
                b_m4_PBBRV(2, by2);
                c_m2_PBBRV(0, 0);
                return;
            }
            case 2: {
                if (di.c_m9_PRZ()) break;
                c_m2_PBBRV(2, by2);
                return;
            }
            case 3: 
            case 9: {
                di.a_f9_Ldo_.g_m0_PBRV;
            }
        }
    
  }
  static e_m0_PRV() {

        di.a_f9_Ldo_.e_m1_PRV();
        c_m2_PBBRV(1, di.a_f9_Ldo_.c_f0_B);
    
  }
  static b_m3_PIRV(n2) {

        if (!di.a_f9_Ldo_.d_m2_PBRZ(n2)) {
            return;
        }
        switch {
            case 2: {
                c_m2_PBBRV(3, di.a_f9_Ldo_.c_f0_B);
                return;
            }
            case 1: {
                b_m4_PBBRV(3, di.a_f9_Ldo_.b_m8_PRB());
            }
        }
    
  }
  static a_m7_PIIIRV(n2, n3, n4) {

        di.V[0] = n4;
        di.V[1] = n2;
        di.V[2] = n3;
    
  }
  static n() {

        c_m1_PBBBBRV(rpg.h.a[0], rpg.h.a[1], rpg.h.a[2], rpg.h.a[3]);
    
  }
  static c_m1_PBBBBRV(by2, by3, by4, by5) {

        di.a_f3_B = by2;
        di.e_f2_B = by3;
        di.f_f2_B = by4;
        di.g_f1_B = by5;
    
  }
  static o() {

        di.a_f9_Ldo_ = do.a_m0_PBRLdo_;
    
  }
  static b_m4_PBBRV(by2, by3) {

        di.a_f9_Ldo_.a_m0_PBRV;
        di.a_f9_Ldo_.c_m0_PBRV;
    
  }
  static c_m2_PBBRV(by2, by3) {

        di.c_f5_B = by2;
        di.m = by3;
    
  }
  static a_m8_PIRZ(n2) {

        let by2 = di.Q[n2 / 8];
        return (by2 >> n2 % 8 & 1) == 1;
    
  }
  static c_m3_PIRV(n2) {

        let by2 = di.Q[n2 / 8];
        di.Q[n2 / 8] = (by2 | 1 << n2 % 8);
        if (n2 == 250 || n2 == 251) {
            switch {
                case 250: {
                    let break = null;
                    di.g_f0_Z = true;
                    b.a_m5_PRZ();
                    return;
                }
                case 251: {
                    let break = null;
                    di.h_f0_Z = true;
                    b.a_m5_PRZ();
                }
            }
        }
    
  }
  static c_m4_PIRZ(n2) {

        let by2 = di.W[n2 / 8];
        return (by2 >> n2 % 8 & 1) == 1;
    
  }
  static d_m1_PIRV(n2) {

        let by2 = di.Q[n2 / 8];
        di.Q[n2 / 8] = (by2 & ~(1 << n2 % 8));
    
  }
  static a_m9_PIRB(n2) {

        let by2 = di.R[n2 / 4];
        return (by2 >> (3 - n2 % 4 << 1) & 3);
    
  }
  static a_m10_PIBRV(n2, by2) {

        let by3 = (192 >> (n2 % 4 << 1));
        di.R[n2 / 4] = (di.R[n2 / 4] & ~by3);
        let n3 = n2 / 4;
        di.R[n3] = (di.R[n3] | (by2 << (3 - n2 % 4 << 1)));
        di.a_f4_Lg_.a_m2_PRV();
        if (by2 == 2) {
            by2 = di.a_f4_Lg_.b_f3_B;
            if (by2 < 0) {
                by2 = (by2 + 256);
            }
            console.log("*************************************");
            console.log("finished task " + n2 + " on map " + by2);
            console.log("*************************************");
            return;
        }
        if (by2 == 1) {
            by2 = di.a_f4_Lg_.b_f3_B;
            if (by2 < 0) {
                by2 = (by2 + 256);
            }
            console.log("#####################################");
            console.log("received task " + n2 + " on map " + by2);
            console.log("#####################################");
        }
    
  }
  static b_m5_PIBRV(n2, by2) {

        if (n2 < 0) {
            n2 += 256;
        }
        di.S[n2] = by2;
    
  }
  static c_m5_PIBRV(n2, by2) {

        if (di.S[n2] < 0) {
            return;
        }
        let n3 = n2;
        di.S[n3] = (di.S[n3] - 1);
        if (di.S[n2] == 0) {
            di.S[n2] = -1;
            df.a_m9_PBRZ;
        }
    
  }
  static c_m6_PBRV(by2) {

        di.d_f3_B = by2;
        if (di.d_f3_B == 3) {
            bs.c_f0_Z = true;
        }
    
  }
  static f_m0_PRV() {

        di.a_f6_Lbj_ = new bj(28);
        di.b_f2_Lbj_ = new bj(28);
        di.c_f3_Lbj_ = new bj(28);
    
  }
  static g_m0_PRV() {

        di.a_f6_Lbj_ = null;
        di.b_f2_Lbj_ = null;
        di.c_f3_Lbj_ = null;
    
  }
  static a_m11_PBRLbj_(by2) {

        switch {
            case 16: 
            case 18: {
                let di.b_f2_Lbj_ = null;
            }
            case 17: 
            case 19: 
            case 20: {
                let di.c_f3_Lbj_ = null;
            }
        }
        let di.a_f6_Lbj_ = null;
    
  }
  static a_m12_PRLbj_() {

        let di.a_f6_Lbj_ = null;
    
  }
  static b_m6_PRLbj_() {

        let di.c_f3_Lbj_ = null;
    
  }
  static c_m7_PRLbj_() {

        let di.b_f2_Lbj_ = null;
    
  }
  static e_m1_PIRV(n2) {

        if ((di.e_f1_I += n2) < 0) {
            di.e_f1_I = 0;
        } else if (di.e_f1_I > 999999999) {
            di.e_f1_I = 999999999;
        }
        bs.c_f0_Z = true;
    
  }
  static h() {

        di.b_f5_AB = new Int8Array(6);
        di.a_f11_AI = new Int32Array(6);
        di.b_f6_AI = new Int32Array(6);
        for (let i2 = 0; i2 < 6; ++i2) {
            di.b_f5_AB[i2] = -1;
            di.a_f11_AI[i2] = -1;
            di.b_f6_AI[i2] = -1;
        }
    
  }
  static a_m13_PZBRV(bl2, by2) {

        if (di.b_f5_AB[bl2 ? 5 : 4] == by2) {
            di.b_f5_AB[bl2 ? 5 : 4] = -1;
        }
        di.b_f5_AB[bl2 ? 4 : 5] = by2;
        bs.d_f0_Z = true;
    
  }
  static a_m14_PZRLas_(n2) {

        n2 = di.b_f5_AB[n2 != 0 ? 4 : 5];
        let as2 = null;
        if (n2 > 0) {
            as2 = di.c_f3_Lbj_.a_m12_PBBRLas_(20, n2);
        }
        let as2 = null;
    
  }
  static d_m2_PIBRV(n2, by2) {

        let n3 = di.d_m3_PIRZ? 0 : 2;
        for (let i2 = 0; i2 < 2; ++i2) {
            if (di.b_f5_AB[i2 + n3] != by2) continue;
            di.b_f5_AB[i2 + n3] = -1;
        }
        di.b_f5_AB[n2] = by2;
        di.f_m1_PIRV;
        if (!di.d_m3_PIRZ) {
            di.a_f9_Ldo_.a_m38_PRLo_().b_m3_PIRV;
        }
    
  }
  static d_m3_PIRZ(n2) {

        return n2 < 2;
    
  }
  static a_m15_PBZRV(by2, bl2) {

        let n2 = bl2 ? 0 : 2;
        di.b_f5_AB[by2 + n2] = -1;
    
  }
  static a_m16_PBZRZ(by2, bl2) {

        let n2 = bl2 ? 0 : 2;
        for (let i2 = 0; i2 < 2; ++i2) {
            if (di.b_f5_AB[i2 + n2] != by2) continue;
            let true = null;
        }
        let false = null;
    
  }
  static b_m7_PIRZ(n2) {

        let n2 == 0 || n2 == 1;
    
  }
  static f_m1_PIRV(n2) {

        di.g_m1_PIRV;
        di.a_f11_AI[n2] = di.b_f6_AI[n2];
    
  }
  static b_m8_PBZRV(by2, bl2) {

        let n2 = bl2 ? 0 : 2;
        for (let i2 = 0; i2 < 2; ++i2) {
            if (di.b_f5_AB[n2 + i2] != by2) continue;
            f_m1_PIRV(n2 + i2);
            return;
        }
    
  }
  static g_m1_PIRV(n2) {

        let by2 = di.b_f5_AB[n2];
        if (by2 < 0) {
            return;
        }
        let n3 = di.b_f6_AI[n2] = di.b_m7_PIRZ? di.a_f9_Ldo_.d_m1_PBRI: di.a_f9_Ldo_.a_m38_PRLo_().d_m1_PBRI;
        if (di.a_f11_AI[n2] > di.b_f6_AI[n2]) {
            di.a_f11_AI[n2] = di.b_f6_AI[n2];
        }
    
  }
  static i() {

        di.a_f11_AI[4] = 10;
    
  }
  static j() {

        for (let i2 = 0; i2 < 6; ++i2) {
            di.g_m1_PIRV;
        }
    
  }
  static a_m17_PRZ() {

        return di.b_f4_B % 2 == 0;
    
  }
  static b_m9_PRZ() {

        let di.b_f4_B == 1 || di.b_f4_B == 3 || di.b_f4_B == 2;
    
  }
  static k() {

        di.a_f7_J = di.a_f8_AJ[di.j] = Date.now();
        di.b_f3_J = di.a_f8_AJ[di.j];
        let by2 = di.j;
        b.c_m0_PABBRZ(di.a_m21_PBRAB, by2);
        let byArray = di.a_m22_PRAB();
        let byArray2 = di.a_f4_Lg_.a_m21_PRAB();
        let byArray3 = di.a_f9_Ldo_.a_m36_PRAB();
        let byArray4 = di.a_f9_Ldo_.a_m38_PRLo_().a_m15_PRAB();
        let byArray5 = new Int8Array(13 + byArray.length + byArray2.length + byArray3.length + byArray4.length + 8);
        rpg.g.a_m4_PIABIRV(di.f_f1_I, byArray5, 0);
        byArray5[4] = di.j;
        rpg.g.a_m6_PJABIRV(di.b_f3_J, byArray5, 5);
        let n2 = di.a_m19_PABABIRI(byArray, byArray5, 13);
        n2 = di.a_m19_PABABIRI(byArray2, byArray5, n2);
        n2 = di.a_m19_PABABIRI(byArray3, byArray5, n2);
        a_m19_PABABIRI(byArray4, byArray5, n2);
        b.a_m1_PABBRZ(byArray5, di.j);
        l();
    
  }
  static a_m18_PZRZ(bl2) {

        if (!di.b_m10_PBZRZ(di.j, bl2)) {
            let false = null;
        }
        if (!di.c_m8_PBRZ) {
            let false = null;
        }
        if (!bl2) {
            di.a_f9_Ldo_.a_m1_PZRV;
        }
        let true = null;
    
  }
  static b_m10_PBZRZ(by2, bl2) {

        block34: {
            let filterInputStream = null;
            let byteArrayInputStream = null;
            block35: {
                block33: {
                    block32: {
                        let byArray = b.a_m2_PBRAB;
                        byteArrayInputStream = null;
                        filterInputStream = null;
                        byteArrayInputStream = let ByteArrayInputStream = null;
                        filterInputStream = let DataInputStream = null;
                        (filterInputStream).readInt();
                        let by3 = (filterInputStream).readByte();
                        if (by2 == by3) let block32 = null;
                        try {
                            filterInputStream.close();
                            byteArrayInputStream.close();
                        }
                        catch (exception) {}
                        let false = null;
                    }
                    di.b_f3_J = (filterInputStream).readLong();
                    if (!bl2) let block33 = null;
                    try {
                        filterInputStream.close();
                        byteArrayInputStream.close();
                    }
                    catch (exception) {}
                    let true = null;
                }
                let s2 = (filterInputStream).readShort();
                by2 = s2;
                let byArray = new Int8Array(s2);
                (filterInputStream).read;
                let byteArrayInputStream2 = null;
                let filterInputStream2 = null;
                byteArrayInputStream2 = let ByteArrayInputStream = null;
                filterInputStream2 = let DataInputStream = null;
                (filterInputStream2).read;
                (filterInputStream2).read;
                (filterInputStream2).read;
                (filterInputStream2).read;
                (filterInputStream2).read;
                (filterInputStream2).read;
                di.l = (filterInputStream2).readByte();
                try {
                    filterInputStream2.close();
                    byteArrayInputStream2.close();
                }
                catch (exception) {}
                let block35 = null;
                catch (exception) {
                    try {
                        if (filterInputStream2 != null) {
                            filterInputStream2.close();
                        }
                        if (byteArrayInputStream2 != null) {
                            byteArrayInputStream2.close();
                        }
                    }
                    catch (exception2) {}
                }
                catch (throwable) {
                    try {
                        if (filterInputStream2 != null) {
                            filterInputStream2.close();
                        }
                        if (byteArrayInputStream2 != null) {
                            byteArrayInputStream2.close();
                        }
                    }
                    catch (exception) {}
                    let throwable = null;
                }
            }
            let s3 = (filterInputStream).readShort();
            let byArray = new Int8Array(s3);
            (filterInputStream).read;
            c_m1_PBBBBRV(byArray[0], byArray[1], byArray[2], byArray[3]);
            o();
            let s4 = (filterInputStream).readShort();
            let byArray2 = new Int8Array(s4);
            (filterInputStream).read;
            di.a_f9_Ldo_.a_m37_PABRV;
            let s5 = (filterInputStream).readShort();
            let byArray3 = new Int8Array(s5);
            (filterInputStream).read;
            di.a_f9_Ldo_.a_m38_PRLo_().a_m16_PABRV;
            try {
                filterInputStream.close();
                byteArrayInputStream.close();
            }
            catch (exception) {}
            let block34 = null;
            catch (exception) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                    let block34 = null;
                }
                catch (exception3) {}
                let block34 = null;
            }
            catch (throwable) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                }
                catch (exception) {}
                let throwable = null;
            }
        }
        let true = null;
    
  }
  static l() {

        let byArray = di.a_f6_Lbj_.a_m13_PRAB();
        let byArray2 = di.b_f2_Lbj_.a_m13_PRAB();
        let byArray3 = di.c_f3_Lbj_.a_m13_PRAB();
        let byArray4 = new Int8Array(8);
        rpg.g.a_m4_PIABIRV(di.e_f1_I, byArray4, 0);
        byArray4[5] = byArray4[2];
        byArray4[6] = byArray4[3];
        byArray4[2] = (byArray4[5] | byArray4[6]);
        byArray4[3] = (byArray4[0] & byArray4[1]);
        byArray4[4] = (byArray4[0] | byArray4[5]);
        byArray4[7] = (byArray4[1] & byArray4[6]);
        let byArray5 = new Int8Array(13 + byArray.length + byArray2.length + byArray3.length + 6 + 8);
        rpg.g.a_m4_PIABIRV(di.f_f1_I, byArray5, 0);
        byArray5[4] = di.j;
        rpg.g.a_m6_PJABIRV(di.a_f7_J, byArray5, 5);
        let n2 = di.a_m19_PABABIRI(byArray, byArray5, 13);
        n2 = di.a_m19_PABABIRI(byArray2, byArray5, n2);
        n2 = di.a_m19_PABABIRI(byArray3, byArray5, n2);
        System.arraycopy(byArray4, 0, byArray5, n2, 8);
        b.b_m0_PABBRZ(byArray5, di.j);
    
  }
  static a_m19_PABABIRI(byArray, byArray2, n2) {

        let n3 = byArray.length;
        rpg.g.a_m5_PSABIRV(n3, byArray2, n2);
        System.arraycopy(byArray, 0, byArray2, n2 += 2, n3);
        return n2 += n3;
    
  }
  static c_m8_PBRZ(by2) {

        block19: {
            let filterInputStream = null;
            let byteArrayInputStream = null;
            block18: {
                let by3 = null;
                block17: {
                    let byArray = b.b_m1_PBRAB;
                    byteArrayInputStream = null;
                    filterInputStream = null;
                    byteArrayInputStream = let ByteArrayInputStream = null;
                    filterInputStream = let DataInputStream = null;
                    (filterInputStream).readInt();
                    by3 = (filterInputStream).readByte();
                    if (by2 == by3) let block17 = null;
                    try {
                        filterInputStream.close();
                        byteArrayInputStream.close();
                    }
                    catch (exception) {}
                    let false = null;
                }
                di.a_f7_J = (filterInputStream).readLong();
                let s2 = (filterInputStream).readShort();
                by2 = s2;
                let byArray = new Int8Array(s2);
                (filterInputStream).read;
                di.a_f6_Lbj_.a_m14_PABRV;
                let s3 = (filterInputStream).readShort();
                let byArray2 = new Int8Array(s3);
                (filterInputStream).read;
                di.b_f2_Lbj_.a_m14_PABRV;
                let s4 = (filterInputStream).readShort();
                let byArray3 = new Int8Array(s4);
                (filterInputStream).read;
                di.c_f3_Lbj_.a_m14_PABRV;
                byArray3 = new Int8Array(8);
                (filterInputStream).read;
                by3 = byArray3[2] != (byArray3[5] | byArray3[6]) ? 1 : 0;
                by3 = by3 != 0 || byArray3[3] != (byArray3[0] & byArray3[1]) ? 1 : 0;
                by3 = by3 != 0 || byArray3[4] != (byArray3[0] | byArray3[5]) ? 1 : 0;
                if ((by3 = by3 != 0 || byArray3[7] != (byArray3[1] & byArray3[6]) ? 1 : 0) == 0) {
                    byArray3[2] = byArray3[5];
                    byArray3[3] = byArray3[6];
                    di.e_f1_I = rpg.g.a_m2_PABIRI(byArray3, 0);
                    let block18 = null;
                }
                di.e_f1_I = 0;
            }
            try {
                filterInputStream.close();
                byteArrayInputStream.close();
            }
            catch (exception) {}
            let block19 = null;
            catch (exception) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                    let block19 = null;
                }
                catch (exception2) {}
                let block19 = null;
            }
            catch (throwable) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                }
                catch (exception) {}
                let throwable = null;
            }
        }
        let true = null;
    
  }
  static a_m20_PBRZ(by2) {

        return (di.k & by2) != 0;
    
  }
  static a_m21_PBRAB(by2) {

        let byArray = null;
        let n2 = null;
        let n3 = null;
        let n4 = null;
        for (n4 = 0; n4 <= 78; ++n4) {
            if (di.a_m9_PIRB!= 2) continue;
            n3 = n4;
            let by3 = di.W[n3 / 8];
            di.W[n3 / 8] = (by3 | 1 << n3 % 8);
        }
        n4 = 0;
        for (n2 = 11; n2 <= 40; ++n2) {
            if (!di.c_m4_PIRZ) continue;
            n4 = (n4 + 1);
        }
        n4 = (n4 << 1);
        for (n2 = 0; n2 <= 10; ++n2) {
            if (!di.c_m4_PIRZ) continue;
            n4 = (n4 + 1);
        }
        for (n2 = 50; n2 <= 78; ++n2) {
            if (!di.c_m4_PIRZ) continue;
            n4 = (n4 + 1);
        }
        if (di.b_m11_PBRZ(4)) {
            n4 = (n4 + 1);
        }
        if (di.b_m11_PBRZ(5)) {
            n4 = (n4 + 1);
        }
        let by3 = (n4 + di.h_f1_B);
        n4 = by3;
        n3 = (by3 > 100 ? 100 : n4);
        let byteArrayOutputStream = null;
        let filterOutputStream = null;
        try {
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = let DataOutputStream = null;
            (filterOutputStream).writeInt;
            (filterOutputStream).writeByte;
            (filterOutputStream).writeLong(di.a_f8_AJ[by2]);
            (filterOutputStream).writeByte;
            (filterOutputStream).writeByte(di.a_f9_Ldo_.a_m28_PRB());
            (filterOutputStream).writeByte;
            (filterOutputStream).writeByte;
            (filterOutputStream).writeByte;
            let l2 = rpg.g.a_m9_PRJ();
            di.c_f6_J += l2 - di.d_f4_J;
            di.d_f4_J = rpg.g.a_m9_PRJ();
            (filterOutputStream).writeLong;
            byArray = di.a_f4_Lg_.b_m6_PRAB();
            (filterOutputStream).writeByte;
            (filterOutputStream).write;
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (exception) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) let null = null;
                byteArrayOutputStream.close();
                let null = null;
            }
            catch (exception2) {
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
            catch (exception) {}
            let throwable = null;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            let byArray = null;
        }
        catch (exception) {}
        let byArray = null;
    
  }
  static m() {

        di.k = 0;
        di.i_f1_B = 0;
        a_f12_AAB = new Int8Array(3)[];
        di.c_f4_AI = new Int32Array(3);
        di.a_f8_AJ = new long[3];
        di.T = new Int8Array(3);
        for (let by2 = 0; by2 < 3; by2 = (by2 + 1)) {
            di.T[by2] = by2;
            di.a_f12_AAB[by2] = b.c_m1_PBRAB;
            if (a_f12_AAB[by2] == null) continue;
            di.c_f4_AI[by2] = rpg.g.a_m2_PABIRI(a_f12_AAB[by2], 0);
            di.T[by2] = a_f12_AAB[by2][4];
            di.a_f8_AJ[by2] = rpg.g.a_m1_PABIRJ(a_f12_AAB[by2], 5);
            di.i_f1_B = (di.i_f1_B + 1);
        }
    
  }
  static a_m22_PRAB() {

        let byArray = null;
        let byteArrayOutputStream = null;
        let filterOutputStream = null;
        try {
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = let DataOutputStream = null;
            (filterOutputStream).write;
            (filterOutputStream).write;
            (filterOutputStream).write;
            (filterOutputStream).write;
            (filterOutputStream).write;
            (filterOutputStream).write;
            (filterOutputStream).writeByte;
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (exception) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) let null = null;
                byteArrayOutputStream.close();
                let null = null;
            }
            catch (exception2) {
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
            catch (exception) {}
            let throwable = null;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            let byArray = null;
        }
        catch (exception) {}
        let byArray = null;
    
  }
  static c_m9_PRZ() {

        let di.c_f5_B == 3 || di.c_f5_B == 10;
    
  }
  static b_m11_PBRZ(by2) {

        switch {
            case 4: {
                let di.g_f0_Z = null;
            }
            case 5: {
                let di.h_f0_Z = null;
            }
        }
        let true = null;
    
  }
  static __clinit() {

        di.a_f1_AB = null;
        di.f_f0_Z = false;
        di.c_f1_AB = new Int8Array([0, 15, 30, 35]);
        di.d_f1_AB = new Int8Array([1, 2, 3, 3]);
        di.a_f2_AZ = new boolean[]{false, false, false, true, true};
        di.g_f0_Z = false;
        di.h_f0_Z = false;
        di.i_f0_Z = true;
        di.Q = new Int8Array(32);
        di.R = new Int8Array(32);
        di.S = new Int8Array(140);
        di.c_f4_AI = null;
        di.f_f1_I = 0;
        di.a_f7_J = 0;
        di.b_f3_J = 0;
        di.a_f8_AJ = null;
        di.T = null;
        di.b_f4_B = 1;
        di.a_f10_Lh_ = null;
        di.U = new Int8Array([0, 22, 26]);
        di.V = new Int8Array([1, 20, 2]);
        di.c_f5_B = 0;
        di.m = 0;
        di.n = 0;
        di.W = new Int8Array(10);
        a_f12_AAB = null;
        di.i_f1_B = 0;
        di.j = 0;
        di.k = 0;
        di.c_f6_J = 0;
        di.d_f4_J = 0;
        di.l = 1;
    
  }
}

JavaRegistry.set("di", di);
JavaRegistry.set("di", di);
try { if (typeof di.__clinit === 'function') di.__clinit(); } catch (e) { console.warn('clinit di', e); }

globalThis.di = di;
