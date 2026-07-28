/** Transpiled from df */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class df extends (JavaRegistry.get("db") || class {}) {
  static a_f0_Ldf_ = null;
  static a_f1_B = null;
  static b_f0_B = null;
  static a_f2_AB = null;
  static b_f1_AB = null;
  static a_f3_S = null;
  static b_f2_S = null;
  static a_f4_I = null;
  static a_f5_Ldo_ = null;
  static a_f6_Z = null;
  static b_f3_I = null;
  static c_f0_I = null;
  static c_f1_B = null;
  static d_f0_I = null;
  static d_f1_B = null;
  static c_f2_AB = null;
  static d_f2_AB = null;
  static c_f3_S = null;
  static d_f3_S = null;
  static e_f0_S = null;
  static f_f0_S = null;
  static e_f1_B = null;
  static f_f1_B = null;
  static g_f0_S = null;
  static h_f0_S = null;
  static i_f0_S = null;
  static a_f7_Lbl_ = null;
  static g_f1_B = null;
  static h_f1_B = null;
  static Q = null;
  static b_f4_Z = null;
  static R = null;
  static a_f8_Leb_ = null;
  static b_f5_Leb_ = null;
  /* skip field: private static byte[][] a_f9_AAB; */
  static a_f10_Ln_ = null;
  static i_f1_B = null;
  static j = null;
  /* skip field: private static final df.byte[][] i_f2_AAB; */
  static a_f11_Lcg_ = null;
  static d_m0_PRV() {

        e_m0_PRV();
        df.c_f0_I = 0;
        df.a_f5_Ldo_ = di.a_f9_Ldo_;
        if (di.a_f4_Lg_ != null) {
            di.a_f4_Lg_.d_f3_Z = true;
        }
    
  }
  static e_m0_PRV() {

        db.c();
        h_m1_PRV();
        df.d_f0_I = -1;
        df.d_f2_AB = null;
        df.a_f7_Lbl_ = null;
        df.g_f1_B = -1;
        df.h_f1_B = -1;
        df.Q[0] = -1;
        df.b_f0_B = -1;
        df.b_f4_Z = false;
        df.d_f1_B = -1;
        df.i_f1_B = -1;
        df.a_f10_Ln_ = null;
        a_f9_AAB = null;
        df.a_f8_Leb_ = null;
        df.R = null;
        df.c_f0_I = 255;
        df.b_f3_I = 0;
        df.d_f1_B = -1;
    
  }
  static a_m0_PABRV(byArray) {

        df.R = byArray;
        df.b_f4_Z = false;
    
  }
  static a_m1_PABIRV(byArray, n2) {

        df.a_f0_Ldf_ = null;
        System.gc();
        Runtime.getRuntime().gc();
        df.a_f0_Ldf_ = new df();
        df.a_f0_Ldf_.a_m0_PABIRI(byArray, n2);
    
  }
  a_m2_PBLm_RZ(by2, object) {

        switch {
            case 0: {
                (object).a_m5_PABIRV(df.a_f2_AB, 2);
                di.b_m5_PIBRV(df.a_f2_AB[0], df.a_f2_AB[1]);
                let true = null;
            }
            case 1: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                df.g_f1_B = df.b_f1_AB[0];
                df.g_f1_B = (df.b_f1_AB[1] == 0 ? -1 : df.g_f1_B);
                let true = null;
            }
            case 6: {
                (object).a_m5_PABIRV(df.a_f2_AB, 2);
                return df.a_f2_AB[0] == -1 || di.a_m9_PIRB(df.a_f2_AB[0]) == df.a_f2_AB[1];
            }
            case 2: {
                (object).a_m5_PABIRV(df.a_f2_AB, 2);
                let bj2 = di.a_m11_PBRLbj_(df.a_f2_AB[0]);
                object = bj2.b_m1_PRAB();
                for (let i2 = 0; i2 < (object).length; ++i2) {
                    let as2 = null;
                    if (object[i2] < 0 || (as2 = bj2.a_m1_PIRLas_(object[i2])) == null || as2.a_f1_B != df.a_f2_AB[0] || as2.b_f0_B != df.a_f2_AB[1] || !as2.c()) continue;
                    let true = null;
                }
                break;
            }
            case 3: {
                (object).a_m5_PABIRV(df.a_f2_AB, 3);
                let n2 = di.a_m11_PBRLbj_(df.a_f2_AB[0]).a_m10_PBBRI(df.a_f2_AB[0], df.a_f2_AB[1]);
                by2 = n2;
                return n2 >= df.a_f2_AB[2];
            }
            case 4: {
                (object).a_m5_PABIRV(df.a_f2_AB, 2);
                if (df.a_f2_AB[1] == 0) {
                    return df.a_f5_Ldo_.a_m28_PRB() <= df.a_f2_AB[0];
                }
                return df.a_f5_Ldo_.a_m28_PRB() >= df.a_f2_AB[0];
            }
            case 5: {
                by2 = (object).a_m7_PRS();
                (object).a_m5_PABIRV(df.a_f2_AB, 1);
                if (df.a_f2_AB[0] == 0) {
                    return di.e_f1_I <= by2;
                }
                return di.e_f1_I >= by2;
            }
            case 7: {
                (object).a_m5_PABIRV(df.a_f2_AB, 3);
                for (let i3 = 0; i3 < 3; ++i3) {
                    if (df.a_f2_AB[i3] == -1 || di.a_m8_PIRZ(df.a_f2_AB[i3] & 0xFF)) continue;
                    let false = null;
                }
                let true = null;
            }
            case 8: {
                df.a_f2_AB[0] = (object).a_m6_PRB();
                if (df.a_f2_AB[0] == 0) {
                    return di.h_f1_B == 0;
                }
                return di.h_f1_B > 0;
            }
            case 9: {
                df.a_f2_AB[0] = (object).a_m6_PRB();
                return df.a_f2_AB[0] == df.a_f1_B;
            }
            case 10: {
                g.a_f9_I = 0;
                let true = null;
            }
        }
        let false = null;
    
  }
  b_m0_PBLm_RZ(n2, object) {

        df.b_f0_B = n2;
        let g2 = di.a_f4_Lg_;
        block0 : switch {
            case 0: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                df.d_f1_B = df.b_f1_AB[0];
                g_m1_PRV();
                if (!df.b_f4_Z) break;
                di.c_f2_I = di.a_f5_I;
                di.d_f2_I = di.b_f1_I;
                break;
            }
            case 1: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                df.d_f1_B = -1;
                g_m1_PRV();
                a_m12_PIIRV(df.b_f1_AB[0], df.b_f1_AB[1]);
                df.d_f1_B = -2;
                break;
            }
            case 2: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                df.d_f1_B = -1;
                g_m1_PRV();
                a_m12_PIIRV(df.b_f1_AB[0], df.b_f1_AB[1]);
                df.d_f1_B = -2;
                break;
            }
            case 3: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                n2 = i_f2_AAB[di.b_f4_B][df.b_f1_AB[0] - 1];
                df.a_f5_Ldo_.l_m2_PBRV(n2);
                df.a_f4_I = do.a_m8_PIRB* df.b_f1_AB[1];
                break;
            }
            case 4: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                df.a_f5_Ldo_.a_m0_PBRV(1);
                df.a_f5_Ldo_.c_m0_PBRV(df.b_f1_AB[0]);
                break;
            }
            case 5: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                g.a_m14_PBRV(df.b_f1_AB[0]);
                break;
            }
            case 6: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                a_m13_PLal_SSRV(df.a_f5_Ldo_, (df.b_f1_AB[0] << 4), (df.b_f1_AB[1] << 4));
                break;
            }
            case 7: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                if {
                    df.a_f5_Ldo_.h = (df.a_f5_Ldo_.h + (d.J[df.a_f5_Ldo_.c_f0_B] * df.b_f1_AB[0] << 4));
                    df.a_f5_Ldo_.i = (df.a_f5_Ldo_.i + (d.K[df.a_f5_Ldo_.c_f0_B] * df.b_f1_AB[0] << 4));
                    a_m13_PLal_SSRV(df.a_f5_Ldo_, df.a_f5_Ldo_.h, df.a_f5_Ldo_.i);
                    break;
                }
                df.a_f3_S = (df.a_f5_Ldo_.h + (d.J[df.a_f5_Ldo_.c_f0_B] * df.b_f1_AB[0] << 4));
                df.b_f2_S = (df.a_f5_Ldo_.i + (d.K[df.a_f5_Ldo_.c_f0_B] * df.b_f1_AB[0] << 4));
                df.a_f5_Ldo_.a_m0_PBRV(2);
                break;
            }
            case 9: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                let bl2 = df.b_f1_AB[0] == 1;
                object = df.a_f5_Ldo_;
                df.a_f5_Ldo_.l = bl2;
                let true = null;
            }
            case 10: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                df.a_f5_Ldo_.d_m3_PBRV(df.b_f1_AB[0]);
                let true = null;
            }
            case 8: {
                df.a_f5_Ldo_.a_m23_PBIRV(0, df.a_f5_Ldo_.f_m2_PBRI(0));
                df.a_f5_Ldo_.a_m23_PBIRV(1, df.a_f5_Ldo_.f_m2_PBRI(1));
                df.a_f5_Ldo_.a_m23_PBIRV(3, df.a_f5_Ldo_.f_m2_PBRI(3));
                break;
            }
            case 11: {
                n2 = (object).a_m7_PRS();
                df.a_f5_Ldo_.c_m5_PIRV(0 - n2);
                break;
            }
            case 12: {
                let n3 = null;
                (object).a_m5_PABIRV(df.b_f1_AB, 9);
                let n4 = n3 = di.h_f1_B > 2 ? 2 : di.h_f1_B;
                if (df.b_f1_AB[n3 * 3] != -1 && di.a_m11_PBRLbj_(df.b_f1_AB[n3 * 3]).a_m10_PBBRI(df.b_f1_AB[n3 * 3], df.b_f1_AB[n3 * 3 + 1]) < df.b_f1_AB[n3 * 3 + 2]) {
                    a_m0_PABRV(e.g_f0_Lch_.a_m0_PIRAB(54));
                    let false = null;
                }
                if (df.b_f1_AB[n3 * 3] == -1) break;
                di.a_m11_PBRLbj_(df.b_f1_AB[n3 * 3]).b_m0_PBBIRZ(df.b_f1_AB[n3 * 3], df.b_f1_AB[n3 * 3 + 1], df.b_f1_AB[n3 * 3 + 2]);
                break;
            }
            case 13: {
                n2 = (object).a_m7_PRS();
                di.e_m1_PIRV(0 - n2);
                break;
            }
            case 14: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                df.a_f4_I = df.b_f1_AB[0];
                break;
            }
            case 15: {
                n2 = (object).a_m7_PRS();
                df.a_f5_Ldo_.c_m5_PIRV;
                break;
            }
            case 16: {
                let n5 = null;
                (object).a_m5_PABIRV(df.b_f1_AB, 9);
                let n6 = n5 = di.h_f1_B > 2 ? 2 : di.h_f1_B;
                if (df.b_f1_AB[n5 * 3] == -1) break;
                let as2 = as.a_m0_PBBRLas_(df.b_f1_AB[n5 * 3], df.b_f1_AB[n5 * 3 + 1]);
                let n7 = di.a_m11_PBRLbj_(df.b_f1_AB[n5 * 3]).a_m5_PLas_IRI(as2, df.b_f1_AB[n5 * 3 + 2]);
                if (n7 >= df.b_f1_AB[n5 * 3 + 2]) break;
                if (n7 > 0) {
                    di.a_m11_PBRLbj_(df.b_f1_AB[n5 * 3]).b_m0_PBBIRZ(as2.a_f1_B, as2.b_f0_B, n7);
                }
                --n5;
                while (n5 >= 0) {
                    if (df.b_f1_AB[n5 * 3 + 1] > 0) {
                        di.a_m11_PBRLbj_(df.b_f1_AB[n5 * 3]).b_m0_PBBIRZ(as2.a_f1_B, as2.b_f0_B, df.b_f1_AB[n5 * 3 + 1]);
                    }
                    --n5;
                }
                a_m0_PABRV(e.g_f0_Lch_.a_m0_PIRAB(53));
                let false = null;
            }
            case 17: {
                n2 = 0;
                for (let i2 = 0; i2 < 3; ++i2) {
                    if (i2 == (di.h_f1_B > 2 ? 2 : di.h_f1_B)) {
                        n2 = (object).a_m7_PRS();
                        continue;
                    }
                    (object).a_m7_PRS();
                }
                di.e_m1_PIRV;
                break;
            }
            case 18: {
                let by2 = rpg.g.a_m7_PIIRI(0, 18);
                n2 = rpg.g.a_m7_PIIRI(0, 183);
                let n8 = n2 = n2 < 0 ? n2 + 256 : n2;
                if (by2 <= 15) {
                    if (n2 > 28) {
                        by2 = 20;
                        n2 = 6;
                    } else {
                        object = as.a_m0_PBBRLas_(by2, n2);
                        if (object instanceof bm) {
                            object = object;
                            if ((object).d_f0_B >= df.a_f5_Ldo_.a_m28_PRB() + 10) {
                                by2 = 20;
                                n2 = 6;
                            }
                        }
                    }
                } else if (by2 == 16) {
                    n2 = (n2 / 16);
                } else if (by2 == 17) {
                    n2 = (n2 / 12);
                } else if (by2 == 18) {
                    n2 = (n2 / 4);
                }
                object = as.a_m0_PBBRLas_(by2, n2);
                if (di.a_m11_PBRLbj_((object).a_f1_B).a_m5_PLas_IRI(object, 1) > 0) break;
                a_m0_PABRV(e.g_f0_Lch_.a_m0_PIRAB(53));
                let false = null;
            }
            case 19: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                df.a_f5_Ldo_.h_m1_PIRV(df.b_f1_AB[0]);
                break;
            }
            case 20: {
                n2 = 0;
                for (let i3 = 0; i3 < 3; ++i3) {
                    if (i3 == (di.h_f1_B > 2 ? 2 : di.h_f1_B)) {
                        n2 = (object).b();
                        continue;
                    }
                    (object).b();
                }
                df.a_f5_Ldo_.j_m0_PIRV;
                break;
            }
            case 21: {
                (object).a_m5_PABIRV(df.b_f1_AB, 6);
                e.a_m0_PRLrpg_e_().a_m3_PABRV;
                break;
            }
            case 22: {
                bs.a_m0_PRLbs_().g();
                break;
            }
            case 23: {
                (object).a_m5_PABIRV(df.Q, 4);
                let n9 = df.Q[0] < 0 ? 256 + df.Q[0] : df.Q[0];
                if (n9 == di.a_f4_Lg_.b_f3_B) {
                    a_m13_PLal_SSRV(df.a_f5_Ldo_, (df.Q[1] << 4), (df.Q[2] << 4));
                    df.h_f1_B = 0;
                    df.Q[0] = -1;
                }
                let false = null;
            }
            case 24: {
                (object).a_m5_PABIRV(df.b_f1_AB, 3);
                if (df.b_f1_AB[0] >= 0) {
                    let bl3 = di.a_f4_Lg_.a_f6_ALbl_[df.b_f1_AB[0]];
                    bl3.g(df.b_f1_AB[1]);
                    df.a_f4_I = bl3.a_m3_PIRB(df.b_f1_AB[1]) * df.b_f1_AB[2];
                    break;
                }
                df.i_f1_B = df.b_f1_AB[1];
                df.j = 0;
                break;
            }
            case 25: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                g2.b_m3_PBBRV(df.b_f1_AB[0], df.b_f1_AB[1]);
                break;
            }
            case 26: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                a_m11_PBBBRV(df.b_f1_AB[0], df.b_f1_AB[1], 1);
                break;
            }
            case 27: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                g2.a_m15_PBBRV(df.b_f1_AB[1], df.b_f1_AB[0]);
                let true = null;
            }
            case 28: {
                (object).a_m5_PABIRV(df.b_f1_AB, 3);
                let bl4 = di.a_f4_Lg_.a_f6_ALbl_[df.b_f1_AB[0]];
                a_m13_PLal_SSRV(bl4, (df.b_f1_AB[1] << 4), (df.b_f1_AB[2] << 4));
                break;
            }
            case 30: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                this.a_m3_PBBRV(df.b_f1_AB[0], df.b_f1_AB[1]);
                break;
            }
            case 31: {
                (object).a_m5_PABIRV(df.b_f1_AB, 4);
                n2 = 3;
                while {
                    let n10 = n2;
                    n2 = n2 - 1;
                    if (n10 <= 0) let block0 = null;
                    this.a_m3_PBBRV(df.b_f1_AB[n2], df.b_f1_AB[3]);
                }
            }
            case 32: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                let bl5 = g2.a_f6_ALbl_[df.b_f1_AB[0]];
                if (df.b_f1_AB[1] == 0) {
                    let bl6 = false;
                    object = bl5;
                    bl5.l = bl6;
                    bl5.v();
                } else {
                    let bl7 = true;
                    object = bl5;
                    bl5.l = bl7;
                    bl5.a_m0_PSSRV((bl5).h, (bl5).i);
                    bl5.u();
                }
                let true = null;
            }
            case 33: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                let bl8 = g2.a_f6_ALbl_[df.b_f1_AB[0]];
                bl8.d_m3_PBRV(df.b_f1_AB[1]);
                let true = null;
            }
            case 29: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                let bl9 = g2.a_f6_ALbl_[df.b_f1_AB[0]];
                bl9.b_m0_PIRV(df.b_f1_AB[1] == 0 ? -1 : 0);
                let true = null;
            }
            case 34: {
                break;
            }
            case 35: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                let dx2 = df.b_f1_AB[0] == 0 ? g2.a_f5_ALdx_[df.b_f1_AB[1]] : (df.b_f1_AB[0] == 1 ? g2.b_f2_ALdx_[df.b_f1_AB[1]] : g2.c_f2_ALdx_[df.b_f1_AB[1]]);
                let bl10 = false;
                object = dx2;
                dx2.l = bl10;
                break;
            }
            case 36: {
                break;
            }
            case 37: {
                (object).a_m5_PABIRV(df.b_f1_AB, 3);
                let dx3 = null;
                if (df.b_f1_AB[0] == 0) {
                    dx3 = g2.a_f5_ALdx_[df.b_f1_AB[1]];
                } else if (df.b_f1_AB[0] == 1) {
                    dx3 = g2.b_f2_ALdx_[df.b_f1_AB[1]];
                } else if (df.b_f1_AB[1] < g2.c_f2_ALdx_.length) {
                    dx3 = g2.c_f2_ALdx_[df.b_f1_AB[1]];
                }
                if (dx3 != null) {
                    let bl11 = df.b_f1_AB[2] == 1;
                    object = dx3;
                    dx3.l = bl11;
                }
                let true = null;
            }
            case 38: {
                h_m1_PRV();
                df.a_f10_Ln_ = let dw = null;
                break;
            }
            case 39: {
                h_m1_PRV();
                df.a_f10_Ln_ = new ay();
                break;
            }
            case 40: {
                h_m1_PRV();
                df.a_f10_Ln_ = let da = null;
                break;
            }
            case 41: {
                h_m1_PRV();
                df.a_f10_Ln_ = let cc = null;
                break;
            }
            case 42: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                let break = null;
                df.i_f0_S = 1;
                let by3 = df.b_f1_AB[0];
                object = this;
                (object).a_m5_PIBBRV(by3, -1, 0);
                break;
            }
            case 43: {
                (object).a_m5_PABIRV(df.b_f1_AB, 3);
                let break = null;
                df.i_f0_S = 0;
                this.a_m5_PIBBRV(df.b_f1_AB[2], df.b_f1_AB[0], df.b_f1_AB[1]);
                break;
            }
            case 44: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                let break = null;
                df.i_f0_S = 0;
                let by4 = df.b_f1_AB[0];
                object = this;
                (object).a_m5_PIBBRV(by4, -1, 0);
                break;
            }
            case 45: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                di.a_f4_Lg_.e_f1_Z = df.b_f1_AB[0] == 1;
                break;
            }
            case 46: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                if {
                    df.d_f0_I = -1;
                    df.c_f0_I = df.b_f1_AB[0] == 1 ? 255 : 0;
                    break;
                }
                df.d_f0_I = 0;
                df.a_f6_Z = df.b_f1_AB[0] == 1;
                df.c_f1_B = df.b_f1_AB[1];
                break;
            }
            case 47: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                if (!df.b_f4_Z) {
                    df.d_f0_I = 0;
                }
                switch (df.b_f1_AB[0]) {
                    case 0: {
                        df.b_f3_I = 0;
                        df.c_f0_I = 255;
                        break;
                    }
                    case 1: {
                        df.b_f3_I = 0xFFFFFF;
                        df.c_f0_I = 0;
                        break;
                    }
                    case 2: {
                        df.b_f3_I = 0;
                        df.c_f0_I = 0;
                        break;
                    }
                    case 3: {
                        df.b_f3_I = 0;
                        df.c_f0_I = 255;
                        break;
                    }
                    case 4: {
                        df.b_f3_I = 0;
                        df.c_f0_I = 255;
                        if {
                            df.d_f0_I = -1;
                            break;
                        }
                        for (n2 = 0; n2 < df.c_f2_AB.length; n2 = ((n2 + 1))) {
                            df.c_f2_AB[n2] = rpg.g.a_m7_PIIRI(-5, 5);
                        }
                        break;
                    }
                }
                break;
            }
            case 48: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                let n11 = df.b_f3_I = df.b_f1_AB[1] == 0 ? 0 : 0xFFFFFF;
                if {
                    df.d_f0_I = -1;
                    df.c_f0_I = df.b_f1_AB[0] == 1 ? 255 : 0;
                    break;
                }
                df.a_f6_Z = df.b_f1_AB[0] == 1;
                df.d_f0_I = 0;
                break;
            }
            case 49: {
                break;
            }
            case 50: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                let break = null;
                bq.c();
                bq.a_m2_PBRV(df.b_f1_AB[0]);
                break;
            }
            case 51: {
                let bl12 = null;
                if (g2.a_f6_ALbl_ != null && (bl12 = g2.a_m28_PRLbl_()) != null) {
                    a_m13_PLal_SSRV(bl12, df.a_f5_Ldo_.h, df.a_f5_Ldo_.i);
                    bl12.b_m0_PIRV(0);
                    break;
                }
                let true = null;
            }
            case 52: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                let bl13 = g2.a_m28_PRLbl_();
                if (bl13 != null) {
                    let bl14 = df.b_f1_AB[0] == 1;
                    object = bl13;
                    bl13.l = bl14;
                }
                let true = null;
            }
            case 53: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                n2 = df.b_f1_AB[0];
                let n12 = n2 = n2 < 0 ? n2 + 256 : n2;
                if (df.b_f1_AB[1] == 0) {
                    di.d_m1_PIRV;
                } else {
                    di.c_m3_PIRV;
                }
                db.b_m0_PRV();
                let true = null;
            }
            case 54: {
                (object).a_m5_PABIRV(df.b_f1_AB, 2);
                di.a_m10_PIBRV(df.b_f1_AB[0], df.b_f1_AB[1]);
                df.b_f4_Z = false;
                db.b_m0_PRV();
                let true = null;
            }
            case 55: {
                (object).a_m5_PABIRV(df.b_f1_AB, 3);
                di.a_f4_Lg_.a_m7_PBBBRV(df.b_f1_AB[0], df.b_f1_AB[1], df.b_f1_AB[2]);
                break;
            }
            case 56: {
                (object).a_m5_PABIRV(df.b_f1_AB, 3);
                if (df.b_f1_AB[2] == 0) {
                    let n13 = df.b_f1_AB[1] * g.c_f3_B + df.b_f1_AB[0];
                    di.a_f4_Lg_.a_f0_AB[n13] = (di.a_f4_Lg_.a_f0_AB[n13] | 0xC0);
                    break;
                }
                let n14 = df.b_f1_AB[1] * g.c_f3_B + df.b_f1_AB[0];
                di.a_f4_Lg_.a_f0_AB[n14] = (di.a_f4_Lg_.a_f0_AB[n14] & 0xFFFFFF3F);
                break;
            }
            case 57: {
                (object).a_m5_PABIRV(df.b_f1_AB, 1);
                di.a_f4_Lg_.d_f3_Z = df.b_f1_AB[0] == 1;
                break;
            }
            case 58: {
                (object).a_m5_PABIRV(df.b_f1_AB, 4);
                di.a_m7_PIIIRV(df.b_f1_AB[1], df.b_f1_AB[2], df.b_f1_AB[0]);
            }
        }
        let df.b_f4_Z = null;
    
  }
  a_m3_PBBRV(by2, by3) {

        let bl2 = di.a_f4_Lg_.a_f6_ALbl_[by2];
        if {
            (bl2).h = ((bl2).h + (d.J[bl2.c_f0_B] * by3 << 4));
            (bl2).i = ((bl2).i + (d.K[bl2.c_f0_B] * by3 << 4));
            a_m13_PLal_SSRV(bl2, (bl2).h, (bl2).i);
            return;
        }
        df.a_f3_S = ((bl2).h + (d.J[bl2.c_f0_B] * by3 << 4));
        df.b_f2_S = ((bl2).i + (d.K[bl2.c_f0_B] * by3 << 4));
        bl2.a_f1_S = (by3 << 1);
        a_m11_PBBBRV(by2, bl2.c_f0_B, 2);
    
  }
  a_m4_PBABRV(n2, byArray) {

        let n3 = n2 = n2 < 0 ? n2 + 256 : n2;
        if (byArray.length > 0) {
            df.b_f4_Z = false;
            a_f9_AAB = new Int8Array(byArray.length)[];
            let n4 = byArray[0] < 0 ? 256 + byArray[0] : byArray[0];
            let byArray2 = db.a_m3_PIRAB;
            let bl2 = false;
            if (byArray2.length != d.a_.length) {
                bl2 = true;
            } else {
                for (n4 = d.a_.length - 1; n4 >= 0; --n4) {
                    if (byArray2[n4] == d.a_[n4]) continue;
                    bl2 = true;
                    break;
                }
            }
            for (let i2 = 0; i2 < byArray.length; ++i2) {
                n4 = byArray[i2] < 0 ? 256 + byArray[i2] : byArray[i2];
                df.a_f9_AAB[i2] = db.a_m3_PIRAB;
            }
            df.a_f8_Leb_ = new bt(null, db.a_m3_PIRAB, a_f9_AAB, bl2);
        }
    
  }
  static f_m0_PRV() {

        let n2 = a.a_f0_I;
        if (df.a_f11_Lcg_ == null) {
            df.a_f11_Lcg_ = cg.a_m2_PIIRLcg_(n2, 37);
        }
        let cm2 = df.a_f11_Lcg_.a_m1_PRLcm_();
        cm2.b_m0_PIIIIRV(0, 0, n2, 37);
        cm2.a_m2_PIRV(0);
        if (df.i_f0_S == 0) {
            cm2.a_m4_PIIIIRV(3, 3, n2 - 6, 31);
            cm2.a_m2_PIRV(0x3F3F3F);
            cm2.d_m0_PIIIIRV(0, 0, n2 - 1, 36);
            cm2.d_m0_PIIIIRV(2, 2, n2 - 5, 32);
            cm2.a_m2_PIRV(10452799);
            cm2.d_m0_PIIIIRV(1, 1, n2 - 3, 34);
            return;
        }
        cm2.a_m4_PIIIIRV(0, 0, n2, 37);
    
  }
  a_m5_PIBBRV(n2, by2, by3) {

        f_m0_PRV();
        df.e_f1_B = by2;
        df.f_f1_B = by3;
        df.d_f2_AB = db.a_m3_PIRAB(n2 < 0 ? n2 + 256 : n2);
        df.c_f3_S = 0;
        df.e_f0_S = 0;
        df.d_f3_S = 0;
        df.f_f0_S = df.d_f2_AB.length;
        df.g_f0_S = -1;
        df.h_f0_S = 0;
    
  }
  static h_m0_PRZ() {

        let s2 = null;
        if (df.a_f11_Lcg_ == null) {
            let false = null;
        }
        let cm2 = df.a_f11_Lcg_.a_m1_PRLcm_();
        let n2 = 255;
        let cm3 = cm2;
        cm3.b_m1_PIRV;
        if (df.e_f0_S == df.d_f3_S) {
            df.c_f3_S = (df.c_f3_S + df.e_f0_S);
            df.d_f3_S = 0;
            df.g_f0_S = (df.g_f0_S + 1);
        }
        if (df.g_f0_S >= df.h_f0_S + 1) {
            let false = null;
        }
        if (df.d_f3_S == 0) {
            df.d_f3_S = ac.a_m5_PABIIIRI(df.d_f2_AB, df.c_f3_S, a.a_f0_I - 20, 2);
            df.e_f0_S = 0;
        }
        if ((df.e_f0_S = ac.a_m6_PABIIRI(df.d_f2_AB, df.c_f3_S, s2 = df.e_f0_S)) > df.d_f3_S) {
            df.e_f0_S = (df.e_f0_S - (df.e_f0_S - df.d_f3_S));
        }
        cm2.b_m0_PIIIIRV(0, 0, df.a_f11_Lcg_.a_m5_PRI(), df.a_f11_Lcg_.b());
        cm2.a_m2_PIRV(0xFFFFFF);
        if (df.i_f0_S == 0) {
            ac.a_m3_PLcm_IIIIABIIIRV(cm2, 12, 7 + (df.g_f0_S - df.h_f0_S) * 14, a.a_f0_I - 20, 1, df.d_f2_AB, df.c_f3_S, s2, df.e_f0_S);
        } else {
            ac.a_m4_PLcm_IIIABIIIRV(cm2, a.a_f0_I >> 1, 7 + (df.g_f0_S - df.h_f0_S) * 14, a.a_f0_I - 20, df.d_f2_AB, df.c_f3_S, df.e_f0_S, 1);
        }
        let true = null;
    
  }
  static c() {

        block22: {
            block20: {
                block21: {
                    if (!db.a_m2_PRZ()) {
                        di.c_m6_PBRV(3);
                        let false = null;
                    }
                    if (df.a_f10_Ln_ != null || df.R != null) {
                        let true = null;
                    }
                    di.c_m6_PBRV(4);
                    if let block20 = null;
                    if (df.a_f8_Leb_ == null) let block21 = null;
                    v0 = true;
                    let block22 = null;
                }
                switch {
                    case 0: {
                        ** GOTO lbl79
                    }
                    case 4: 
                    case 5: 
                    case 6: {
                        ** GOTO lbl79
                    }
                    case 7: {
                        if (df.a_f5_Ldo_.h == df.a_f3_S && df.a_f5_Ldo_.i == df.b_f2_S) ** GOTO lbl22
                        df.a_f5_Ldo_.b_f1_B = 2;
                        v0 = true;
                        let block22 = null;
lbl22:
                        

                        df.a_f5_Ldo_.a_m0_PBRV(1);
                        ** GOTO lbl79
                    }
                    case 42: 
                    case 43: 
                    case 44: {
                        if (df.d_f2_AB == null) ** GOTO lbl79
                        h_m0_PRZ();
                        v0 = true;
                        let block22 = null;
                    }
                    case 46: {
                        if (df.d_f0_I < 0 || df.d_f0_I >= 16) ** GOTO lbl35
                        ++df.d_f0_I;
                        v0 = true;
                        let block22 = null;
lbl35:
                        

                        df.c_f1_B = -1;
                        ** GOTO lbl79
                    }
                    case 47: {
                        if (df.b_f1_AB[0] != 3) ** GOTO lbl45
                        if (df.d_f0_I < 0 || df.d_f0_I >= 8) ** GOTO lbl43
                        df.c_f0_I = ++df.d_f0_I % 2 == 0 ? 255 : 0;
                        v0 = true;
                        let block22 = null;
lbl43:
                        

                        df.c_f0_I = 255;
                        ** GOTO lbl79
lbl45:
                        

                        if (df.b_f1_AB[0] != 4) ** GOTO lbl79
                        if (df.d_f0_I < 0 || df.d_f0_I >= df.c_f2_AB.length >> 1) ** GOTO lbl52
                        di.a_f4_Lg_.b_f5_I = df.c_f2_AB[df.d_f0_I << 1];
                        di.a_f4_Lg_.c_f4_I = df.c_f2_AB[(df.d_f0_I << 1) + 1];
                        ++df.d_f0_I;
                        v0 = true;
                        let block22 = null;
lbl52:
                        

                        di.a_f4_Lg_.b_f5_I = 0;
                        di.a_f4_Lg_.c_f4_I = 0;
                        df.c_f0_I = 255;
                        ** GOTO lbl79
                    }
                    case 48: {
                        if (df.d_f0_I < 0 || df.d_f0_I >= 16) ** GOTO lbl79
                        df.c_f0_I = df.a_f6_Z != false ? (df.d_f0_I << 4) - 1 : (16 - ++df.d_f0_I << 4) - 1;
                        if (df.c_f0_I < 0) {
                            df.c_f0_I = 0;
                        }
                        v0 = true;
                        let block22 = null;
                    }
                    case 30: {
                        var0 = di.a_f4_Lg_.a_f6_ALbl_[df.b_f1_AB[0]];
                        if (var0.h == df.a_f3_S && var0.i == df.b_f2_S) ** GOTO lbl69
                        var0.b_f1_B = 2;
                        v0 = true;
                        let block22 = null;
lbl69:
                        

                        var0.a_m2_PBRV(1);
                        ** GOTO lbl79
                    }
                    case 24: {
                        if (df.a_f4_I == 1 && df.b_f1_AB[2] > 0) {
                            var0 = di.a_f4_Lg_.a_f6_ALbl_[df.b_f1_AB[0]];
                            var0.a_m2_PBRV(1);
                        }
                        ** GOTO lbl79
                    }
                    case 3: {
                        if (df.a_f4_I == 1 && df.b_f1_AB[1] > 0) {
                            df.a_f5_Ldo_.a_m0_PBRV(1);
                        }
                    }
lbl79:
                    

                    default: {
                        if (df.a_f4_I <= 0 || --df.a_f4_I == 0) break;
                        v0 = true;
                        let block22 = null;
                    }
                }
            }
            df.b_f0_B = -1;
            v0 = false;
        }
        if (!v0 && !df.a_f0_Ldf_.b_m1_PRZ()) {
            df.b_f4_Z = false;
            if (df.h_f1_B >= 0) {
                e.f_f0_ALcg_ = null;
                var0_1 = df.h_f1_B;
                df.h_f1_B = -1;
                a_m10_PBBRZ(-1, var0_1);
                bs.c_f0_Z = true;
                let true = null;
            }
            e_m0_PRV();
            di.c_m6_PBRV(3);
            df.a_f5_Ldo_.q_m1_PRV();
        }
        if (df.Q[0] != -1) {
            di.b_m1_PBBBBRV(df.Q[0], df.Q[1], df.Q[2], df.Q[3]);
            d_m0_PRV();
            db.a_m1_PRV();
            let false = null;
        }
        di.a_f4_Lg_.d_m1_PRV();
        df.a_f5_Ldo_.c_m1_PRV();
        bs.c_f0_Z = true;
        let true = null;
    
  }
  static a_m6_PLcm_RV(cm2) {

        let n2 = null;
        if {
            return;
        }
        if (df.a_f10_Ln_ != null) {
            bs.a_m0_PRLbs_().f();
            df.a_f10_Ln_.c_m1_PLcm_RV;
            return;
        }
        if (df.d_f1_B != -2) {
            g_m1_PRV();
        }
        di.a_m6_PZZRV(false, false);
        if (df.c_f1_B >= 0) {
            let n3 = 0;
            let n4 = 0;
            n2 = 0;
            let n5 = 0;
            let n6 = a.b_f0_I - 33;
            let n7 = n6 / 16;
            let n8 = a.a_f0_I;
            let n9 = n8 / 16;
            switch {
                case 0: {
                    n2 = a.a_f0_I;
                    if (df.b_f1_AB[0] == 0) {
                        n5 = df.d_f0_I * n7;
                        break;
                    }
                    n4 = df.d_f0_I * n7;
                    n5 = a.b_f0_I;
                    break;
                }
                case 1: {
                    n2 = a.a_f0_I;
                    if (df.b_f1_AB[0] == 0) {
                        n5 = a.b_f0_I;
                        n4 = n6 - df.d_f0_I * n7;
                        break;
                    }
                    n5 = n6 - df.d_f0_I * n7;
                    break;
                }
                case 2: {
                    n5 = a.b_f0_I;
                    if (df.b_f1_AB[0] == 0) {
                        n2 = df.d_f0_I * n9;
                        break;
                    }
                    n3 = df.d_f0_I * n9;
                    n2 = a.a_f0_I;
                    break;
                }
                case 3: {
                    n5 = a.b_f0_I;
                    if (df.b_f1_AB[0] == 0) {
                        n2 = a.a_f0_I;
                        n3 = n8 - df.d_f0_I * n9;
                        break;
                    }
                    n2 = n8 - df.d_f0_I * n9;
                }
            }
            df.b_m1_PLcm_RV;
            cm2.a_m4_PIIIIRV(n3, n4, n2, n5);
        }
        let cm3 = cm2;
        if (df.c_f0_I == 0) {
            cm3.a_m2_PIRV;
            cm3.b_m0_PIIIIRV(0, 0, bs.j, a.b_f0_I);
            cm3.a_m4_PIIIIRV(0, 0, bs.j, a.b_f0_I);
        } else {
            n2 = 255;
            let cm4 = cm3;
            cm4.b_m1_PIRV;
            df.b_m1_PLcm_RV;
            if (df.i_f1_B < 0) {
                di.a_f4_Lg_.c_m2_PRV();
            }
        }
        if (df.c_f0_I > 0) {
            cm2.a_m2_PIRV(0);
            cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            if (df.i_f1_B < 0) {
                cm2.a_m4_PIIIIRV(0, a.b_f0_I - 37, a.a_f0_I, 37);
                df.b_m1_PLcm_RV;
            } else {
                cm2.a_m4_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
                if (df.j >= e.a_f4_Ls_.a_m3_PBRB) {
                    df.j = 0;
                    if (df.i_f1_B == 1 || df.i_f1_B == 3) {
                        df.i_f1_B = (df.i_f1_B + 1);
                    }
                }
                e.a_f4_Ls_.a_m2_PBBIIIRI(df.i_f1_B, 0, df.j, a.a_f0_I >> 1, a.b_f0_I + 50 >> 1);
                df.j = (df.j + 1);
            }
        }
        if (df.d_f2_AB != null) {
            cm3 = cm2;
            let n10 = a.c - (a.a_f0_I >> 1);
            n2 = df.i_f0_S == 0 ? (a.b_f0_I - 37) : (a.b_f0_I - 33 - 37 >> 1);
            if (df.i_f0_S > 0) {
                cm3.a_m2_PIRV(0);
                cm3.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
                cm3.a_m4_PIIIIRV(0, a.b_f0_I - 37, a.a_f0_I, 37);
            }
            cm3.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            cm3.a_m1_PLcg_IIIRV(df.a_f11_Lcg_, n10, n2, 20);
            if (df.e_f1_B >= 0) {
                if (df.f_f1_B != 0) {
                    cm3.a_m1_PLcg_IIIRV(e.f_f0_ALcg_[df.e_f1_B], n10 + df.a_f11_Lcg_.a_m5_PRI(), n2, 40);
                } else {
                    cm3.a_m1_PLcg_IIIRV(e.f_f0_ALcg_[df.e_f1_B], n10, n2, 36);
                }
            }
            if (!di.d_f0_Z) {
                di.d_f0_Z = true;
                b.a_m5_PRZ();
                di.f_f0_Z = true;
                di.a_f1_AB = e.a_f1_Lch_.a_m0_PIRAB(14);
            }
        }
        if (a_f9_AAB != null && df.a_f8_Leb_ != null) {
            df.a_f8_Leb_.a_m2_PLcm_RV;
        }
        if (!df.b_f4_Z && df.a_f8_Leb_ == null) {
            cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            cm2.a_m1_PLcg_IIIRV(e.o, a.a_f0_I - 1, a.b_f0_I - 1, 40);
        }
        if (df.R != null) {
            bo.a_m3_PLcm_IIABIRV(cm2, a.a_f0_I - d.e_ >> 1, a.b_f0_I - 174 - 40 >> 1, df.R, 2);
        }
        cm3 = cm2;
        if (df.c_f0_I > 0 && df.c_f0_I < 255) {
            n2 = 255 - df.c_f0_I;
            let cm5 = cm3;
            cm5.b_m1_PIRV;
            cm3.a_m2_PIRV;
            cm3.b_m0_PIIIIRV(0, 0, bs.j, a.b_f0_I);
            cm3.a_m4_PIIIIRV(0, 0, bs.j, a.b_f0_I);
        }
    
  }
  static a_m7_PLdo_RZ(do_) {

        if (do_.j || do_.k) {
            let false = null;
        }
        let by2 = di.a_f4_Lg_.a_m4_PIIRB(do_.s, do_.t);
        return df.a_m10_PBBRZ(0, by2);
    
  }
  static d_m1_PRZ() {

        if (df.a_f5_Ldo_.j || df.a_f5_Ldo_.k) {
            let false = null;
        }
        let by2 = di.a_f4_Lg_.a_m4_PIIRB(df.a_f5_Ldo_.s + d.J[df.a_f5_Ldo_.c_f0_B], df.a_f5_Ldo_.t + d.K[df.a_f5_Ldo_.c_f0_B]);
        return df.a_m10_PBBRZ(3, by2);
    
  }
  static e_m1_PRZ() {

        if (di.a_m8_PIRZ(253) || di.a_m8_PIRZ(254)) {
            a_m10_PBBRZ(-1, 3);
            let false = null;
        }
        if (df.a_f5_Ldo_.a_m39_PRZ()) {
            di.c_m6_PBRV(4);
            df.a_f8_Leb_ = new br(null, d.b_, '\u0000');
            let false = null;
        }
        let true = null;
    
  }
  static a_m8_PIIRZ(n2, n3) {

        if (df.R != null) {
            if (n2 == 8 || n3 == 53) {
                df.R = null;
                e_m0_PRV();
                c();
            }
            let true = null;
        }
        if (df.a_f10_Ln_ != null) {
            return df.a_f10_Ln_.a_m1_PIIRZ(n2, n3);
        }
        if (df.a_f8_Leb_ != null) {
            if (n2 == 8 || n3 == 53) {
                if (df.a_f8_Leb_ instanceof bt) {
                    db.a_m4_PIRV(df.a_f8_Leb_.a());
                } else {
                    if (df.a_f8_Leb_.a() == 0) {
                        df.a_f5_Ldo_.p_m1_PIRV(50);
                    }
                    e_m0_PRV();
                    di.c_m6_PBRV(3);
                    df.a_f5_Ldo_.q_m1_PRV();
                }
                df.a_f8_Leb_ = null;
                let true = null;
            }
            return df.a_f8_Leb_.a_m1_PIIRZ(n2, n3);
        }
        if {
            let true = null;
        }
        if (n3 == -7) {
            df.c_f0_I = 255;
            n3 = 255;
            let object = cm.a_m0_PRLcm_();
            (object).b_m1_PIRV;
            if {
                df.b_f4_Z = true;
            }
            object = df.a_f0_Ldf_;
            switch {
                case 7: {
                    a_m13_PLal_SSRV(df.a_f5_Ldo_, df.a_f3_S, df.b_f2_S);
                    df.a_f5_Ldo_.a_m0_PBRV(1);
                    break;
                }
                case 30: {
                    object = di.a_f4_Lg_.a_f6_ALbl_[df.b_f1_AB[0]];
                    a_m13_PLal_SSRV(object, df.a_f3_S, df.b_f2_S);
                    (object).a_m2_PBRV(1);
                }
            }
            df.b_f0_B = -1;
            df.d_f2_AB = null;
            let true = null;
        }
        switch {
            case 42: 
            case 43: 
            case 44: {
                if (!n.f_m0_PIIRZ(n2, n3)) break;
                if (df.e_f0_S < df.d_f3_S) {
                    while (df.h_m0_PRZ()) {
                    }
                    break;
                }
                if (df.c_f3_S >= df.f_f0_S) {
                    df.d_f2_AB = null;
                    break;
                }
                if (df.g_f0_S < df.h_f0_S + 1) break;
                df.h_f0_S = (df.h_f0_S + 1);
                f_m0_PRV();
            }
        }
        let true = null;
    
  }
  static f_m1_PRZ() {

        let do_ = di.a_f9_Ldo_;
        if (do_.j || do_.k) {
            let false = null;
        }
        let by2 = di.a_f4_Lg_.a_m4_PIIRB(do_.s, do_.t);
        if (df.a_m10_PBBRZ(1, by2)) {
            let true = null;
        }
        by2 = di.a_f4_Lg_.a_m4_PIIRB(do_.s + d.J[do_.c_f0_B], do_.t + d.K[do_.c_f0_B]);
        if (df.a_m10_PBBRZ(2, by2)) {
            let true = null;
        }
        if {
            let false = null;
        }
        let bl2 = true;
        let by3 = do_.c_f0_B;
        let du2 = do_;
        if ((du2 = du2.a_m1_PBBBRLdu_(0, by3, 1)) != null && du2 instanceof bl) {
            by2 = (du2).b_m2_PRB();
        }
        if (by2 > 0 && by2 <= 127 && df.a_m10_PBBRZ(2, by2)) {
            if (du2 != null) {
                by2 = d.P[df.a_f5_Ldo_.c_f0_B];
                df.a_f7_Lbl_ = du2;
                df.a_f7_Lbl_.e_m0_PBRV;
            }
            let true = null;
        }
        let false = null;
    
  }
  static a_m9_PBRZ(by2) {

        df.b_f4_Z = false;
        return df.a_m10_PBBRZ(-1, by2);
    
  }
  static g_m0_PRZ() {

        d_m0_PRV();
        if (di.a_f4_Lg_.b_f3_B == 60 || di.a_f4_Lg_.b_f3_B == 61) {
            e.a_m10_PIRV(di.a_f4_Lg_.b_f3_B - 60);
            df.i_f1_B = 0;
            df.j = 0;
        }
        df.g_f1_B = -1;
        let bl2 = df.a_m10_PBBRZ(-1, 0);
        if (df.g_f1_B >= 0 || di.a_f4_Lg_.a_f2_B >= 0) {
            bq.c();
            bq.b_m1_PBZRV(df.g_f1_B >= 0 ? g_f1_B : di.a_f4_Lg_.a_f2_B, true);
        }
        df.g_f1_B = -1;
        bq.a_f1_J = 0;
        let bl2 = null;
    
  }
  static a_m10_PBBRZ(by2, by3) {

        if (by3 < 0) {
            let false = null;
        }
        df.a_f1_B = by2;
        if (df.a_f0_Ldf_.a_m6_PIRZ) {
            df.a_f5_Ldo_.q_m1_PRV();
            c();
            let true = null;
        }
        let false = null;
    
  }
  static a_m11_PBBBRV(by2, by3, by4) {

        let bl2 = di.a_f4_Lg_.a_f6_ALbl_[by2];
        if (by3 > 0) {
            bl2.c_m0_PBRV;
        }
        if (by4 != 0) {
            bl2.a_m2_PBRV;
        }
    
  }
  static a_m12_PIIRV(n2, n3) {

        di.a_f5_I = -(n2 << 4) + a.c;
        di.b_f1_I = -(n3 << 4) + a.d;
    
  }
  static g_m1_PRV() {

        if (df.d_f1_B == -1) {
            di.c_m0_PRV();
            return;
        }
        let bl2 = di.a_f4_Lg_.a_f6_ALbl_[df.d_f1_B];
        di.a_f5_I = bs.l - (bl2).h;
        di.b_f1_I = bs.m - (bl2).i;
    
  }
  static a_m13_PLal_SSRV(al2, s2, s3) {

        al2.v();
        al2.a_m0_PBRV(1);
        al2.a_m0_PSSRV(s2, s3);
        al2.E();
        al2.u();
        di.a_f4_Lg_.c_m0_PLdu_RV;
    
  }
  static h_m1_PRV() {

        df.b_f4_Z = false;
        df.c_f0_I = 255;
        df.b_f3_I = 0;
    
  }
  static b_m1_PLcm_RV(cm2) {

        cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I - 37);
    
  }
  static __clinit() {

        df.a_f1_B = -1;
        df.b_f0_B = -1;
        df.a_f2_AB = new Int8Array(5);
        df.b_f1_AB = new Int8Array(9);
        df.a_f4_I = 0;
        df.a_f5_Ldo_ = null;
        df.a_f6_Z = false;
        df.b_f3_I = 0;
        df.c_f0_I = 255;
        df.c_f1_B = -1;
        df.d_f0_I = -1;
        df.d_f1_B = -1;
        df.c_f2_AB = new Int8Array(6);
        df.d_f2_AB = null;
        df.c_f3_S = 0;
        df.d_f3_S = 0;
        df.e_f0_S = 0;
        df.f_f0_S = 0;
        df.e_f1_B = 0;
        df.f_f1_B = 0;
        df.g_f0_S = 0;
        df.h_f0_S = 0;
        df.i_f0_S = 0;
        df.a_f7_Lbl_ = null;
        df.g_f1_B = -1;
        df.h_f1_B = -1;
        df.Q = new Int8Array(4);
        df.b_f4_Z = false;
        df.R = null;
        df.a_f8_Leb_ = null;
        df.b_f5_Leb_ = null;
        a_f9_AAB = null;
        df.a_f10_Ln_ = null;
        df.i_f1_B = -1;
        df.j = -1;
        i_f2_AAB = new df.byte[][]{{16, 17, 18, 19}, {20, 21, 22, 23}, {20, 21, 22, 23}, {20, 21, 22, 23}, {14, 15, 16, 17}, {19, 20, 21, 22}};
        df.a_f11_Lcg_ = null;
    
  }
}

JavaRegistry.set("df", df);
JavaRegistry.set("df", df);
try { if (typeof df.__clinit === 'function') df.__clinit(); } catch (e) { console.warn('clinit df', e); }

globalThis.df = df;
