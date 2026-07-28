/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.b;
import rpg.d;
import rpg.e;

public final class df
extends db
implements d {
    private static df a_f0_Ldf_;
    private static byte a_f1_B;
    private static byte b_f0_B;
    private static byte[] a_f2_AB;
    private static byte[] b_f1_AB;
    private static short a_f3_S;
    private static short b_f2_S;
    private static int a_f4_I;
    private static do a_f5_Ldo_;
    private static boolean a_f6_Z;
    private static int b_f3_I;
    private static int c_f0_I;
    private static byte c_f1_B;
    private static int d_f0_I;
    private static byte d_f1_B;
    private static byte[] c_f2_AB;
    private static byte[] d_f2_AB;
    private static short c_f3_S;
    private static short d_f3_S;
    private static short e_f0_S;
    private static short f_f0_S;
    private static byte e_f1_B;
    private static byte f_f1_B;
    private static short g_f0_S;
    private static short h_f0_S;
    private static short i_f0_S;
    private static bl a_f7_Lbl_;
    private static byte g_f1_B;
    private static byte h_f1_B;
    private static byte[] Q;
    private static boolean b_f4_Z;
    private static byte[] R;
    private static eb a_f8_Leb_;
    private static eb b_f5_Leb_;
    private static byte[][] a_f9_AAB;
    private static n a_f10_Ln_;
    private static byte i_f1_B;
    private static byte j;
    private static final byte[][] i_f2_AAB;
    private static cg a_f11_Lcg_;

    public static void d_m0_PRV() {
        df.e_m0_PRV();
        c_f0_I = 0;
        a_f5_Ldo_ = di.a_f9_Ldo_;
        if (di.a_f4_Lg_ != null) {
            di.a_f4_Lg_.d_f3_Z = true;
        }
    }

    public static void e_m0_PRV() {
        db.c();
        df.h_m1_PRV();
        d_f0_I = -1;
        d_f2_AB = null;
        a_f7_Lbl_ = null;
        g_f1_B = (byte)-1;
        h_f1_B = (byte)-1;
        df.Q[0] = -1;
        b_f0_B = (byte)-1;
        b_f4_Z = false;
        d_f1_B = (byte)-1;
        i_f1_B = (byte)-1;
        a_f10_Ln_ = null;
        a_f9_AAB = null;
        a_f8_Leb_ = null;
        R = null;
        c_f0_I = 255;
        b_f3_I = 0;
        d_f1_B = (byte)-1;
    }

    private static void a_m0_PABRV(byte[] byArray) {
        R = byArray;
        b_f4_Z = false;
    }

    public static final void a_m1_PABIRV(byte[] byArray, int n2) {
        a_f0_Ldf_ = null;
        System.gc();
        Runtime.getRuntime().gc();
        a_f0_Ldf_ = new df();
        a_f0_Ldf_.a_m0_PABIRI(byArray, n2);
    }

    protected final boolean a_m2_PBLm_RZ(byte by2, m object) {
        switch (by2) {
            case 0: {
                ((m)object).a_m5_PABIRV(a_f2_AB, 2);
                di.b_m5_PIBRV(a_f2_AB[0], a_f2_AB[1]);
                return true;
            }
            case 1: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                g_f1_B = b_f1_AB[0];
                g_f1_B = (byte)(b_f1_AB[1] == 0 ? -1 : (int)g_f1_B);
                return true;
            }
            case 6: {
                ((m)object).a_m5_PABIRV(a_f2_AB, 2);
                return a_f2_AB[0] == -1 || di.a_m9_PIRB(a_f2_AB[0]) == a_f2_AB[1];
            }
            case 2: {
                ((m)object).a_m5_PABIRV(a_f2_AB, 2);
                bj bj2 = di.a_m11_PBRLbj_(a_f2_AB[0]);
                object = bj2.b_m1_PRAB();
                for (int i2 = 0; i2 < ((Object)object).length; ++i2) {
                    as as2;
                    if (object[i2] < 0 || (as2 = bj2.a_m1_PIRLas_((int)object[i2])) == null || as2.a_f1_B != a_f2_AB[0] || as2.b_f0_B != a_f2_AB[1] || !as2.c()) continue;
                    return true;
                }
                break;
            }
            case 3: {
                ((m)object).a_m5_PABIRV(a_f2_AB, 3);
                int n2 = di.a_m11_PBRLbj_(a_f2_AB[0]).a_m10_PBBRI(a_f2_AB[0], a_f2_AB[1]);
                by2 = (byte)n2;
                return n2 >= a_f2_AB[2];
            }
            case 4: {
                ((m)object).a_m5_PABIRV(a_f2_AB, 2);
                if (a_f2_AB[1] == 0) {
                    return a_f5_Ldo_.a_m28_PRB() <= a_f2_AB[0];
                }
                return a_f5_Ldo_.a_m28_PRB() >= a_f2_AB[0];
            }
            case 5: {
                by2 = (byte)((m)object).a_m7_PRS();
                ((m)object).a_m5_PABIRV(a_f2_AB, 1);
                if (a_f2_AB[0] == 0) {
                    return di.e_f1_I <= by2;
                }
                return di.e_f1_I >= by2;
            }
            case 7: {
                ((m)object).a_m5_PABIRV(a_f2_AB, 3);
                for (int i3 = 0; i3 < 3; ++i3) {
                    if (a_f2_AB[i3] == -1 || di.a_m8_PIRZ(a_f2_AB[i3] & 0xFF)) continue;
                    return false;
                }
                return true;
            }
            case 8: {
                df.a_f2_AB[0] = ((m)object).a_m6_PRB();
                if (a_f2_AB[0] == 0) {
                    return di.h_f1_B == 0;
                }
                return di.h_f1_B > 0;
            }
            case 9: {
                df.a_f2_AB[0] = ((m)object).a_m6_PRB();
                return a_f2_AB[0] == a_f1_B;
            }
            case 10: {
                g.a_f9_I = 0;
                return true;
            }
        }
        return false;
    }

    protected final boolean b_m0_PBLm_RZ(byte n2, m object) {
        b_f0_B = n2;
        g g2 = di.a_f4_Lg_;
        block0 : switch (n2) {
            case 0: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                d_f1_B = b_f1_AB[0];
                df.g_m1_PRV();
                if (!b_f4_Z) break;
                di.c_f2_I = di.a_f5_I;
                di.d_f2_I = di.b_f1_I;
                break;
            }
            case 1: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                d_f1_B = (byte)-1;
                df.g_m1_PRV();
                df.a_m12_PIIRV(b_f1_AB[0], b_f1_AB[1]);
                d_f1_B = (byte)-2;
                break;
            }
            case 2: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                d_f1_B = (byte)-1;
                df.g_m1_PRV();
                df.a_m12_PIIRV(b_f1_AB[0], b_f1_AB[1]);
                d_f1_B = (byte)-2;
                break;
            }
            case 3: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                n2 = i_f2_AAB[di.b_f4_B][b_f1_AB[0] - 1];
                a_f5_Ldo_.l_m2_PBRV((byte)n2);
                a_f4_I = do.a_m8_PIRB(n2) * b_f1_AB[1];
                break;
            }
            case 4: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                a_f5_Ldo_.a_m0_PBRV((byte)1);
                a_f5_Ldo_.c_m0_PBRV(b_f1_AB[0]);
                break;
            }
            case 5: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                g.a_m14_PBRV(b_f1_AB[0]);
                break;
            }
            case 6: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                df.a_m13_PLal_SSRV(a_f5_Ldo_, (short)(b_f1_AB[0] << 4), (short)(b_f1_AB[1] << 4));
                break;
            }
            case 7: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                if (b_f4_Z) {
                    df.a_f5_Ldo_.h = (short)(df.a_f5_Ldo_.h + (d.J[df.a_f5_Ldo_.c_f0_B] * b_f1_AB[0] << 4));
                    df.a_f5_Ldo_.i = (short)(df.a_f5_Ldo_.i + (d.K[df.a_f5_Ldo_.c_f0_B] * b_f1_AB[0] << 4));
                    df.a_m13_PLal_SSRV(a_f5_Ldo_, df.a_f5_Ldo_.h, df.a_f5_Ldo_.i);
                    break;
                }
                a_f3_S = (short)(df.a_f5_Ldo_.h + (d.J[df.a_f5_Ldo_.c_f0_B] * b_f1_AB[0] << 4));
                b_f2_S = (short)(df.a_f5_Ldo_.i + (d.K[df.a_f5_Ldo_.c_f0_B] * b_f1_AB[0] << 4));
                a_f5_Ldo_.a_m0_PBRV((byte)2);
                break;
            }
            case 9: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                boolean bl2 = b_f1_AB[0] == 1;
                object = a_f5_Ldo_;
                a_f5_Ldo_.l = bl2;
                return true;
            }
            case 10: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                a_f5_Ldo_.d_m3_PBRV(b_f1_AB[0]);
                return true;
            }
            case 8: {
                a_f5_Ldo_.a_m23_PBIRV((byte)0, a_f5_Ldo_.f_m2_PBRI((byte)0));
                a_f5_Ldo_.a_m23_PBIRV((byte)1, a_f5_Ldo_.f_m2_PBRI((byte)1));
                a_f5_Ldo_.a_m23_PBIRV((byte)3, a_f5_Ldo_.f_m2_PBRI((byte)3));
                break;
            }
            case 11: {
                n2 = ((m)object).a_m7_PRS();
                a_f5_Ldo_.c_m5_PIRV(0 - n2);
                break;
            }
            case 12: {
                int n3;
                ((m)object).a_m5_PABIRV(b_f1_AB, 9);
                int n4 = n3 = di.h_f1_B > 2 ? 2 : (int)di.h_f1_B;
                if (b_f1_AB[n3 * 3] != -1 && di.a_m11_PBRLbj_(b_f1_AB[n3 * 3]).a_m10_PBBRI(b_f1_AB[n3 * 3], b_f1_AB[n3 * 3 + 1]) < b_f1_AB[n3 * 3 + 2]) {
                    df.a_m0_PABRV(e.g_f0_Lch_.a_m0_PIRAB(54));
                    return false;
                }
                if (b_f1_AB[n3 * 3] == -1) break;
                di.a_m11_PBRLbj_(b_f1_AB[n3 * 3]).b_m0_PBBIRZ(b_f1_AB[n3 * 3], b_f1_AB[n3 * 3 + 1], b_f1_AB[n3 * 3 + 2]);
                break;
            }
            case 13: {
                n2 = ((m)object).a_m7_PRS();
                di.e_m1_PIRV(0 - n2);
                break;
            }
            case 14: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                a_f4_I = b_f1_AB[0];
                break;
            }
            case 15: {
                n2 = ((m)object).a_m7_PRS();
                a_f5_Ldo_.c_m5_PIRV(n2);
                break;
            }
            case 16: {
                int n5;
                ((m)object).a_m5_PABIRV(b_f1_AB, 9);
                int n6 = n5 = di.h_f1_B > 2 ? 2 : (int)di.h_f1_B;
                if (b_f1_AB[n5 * 3] == -1) break;
                as as2 = as.a_m0_PBBRLas_(b_f1_AB[n5 * 3], b_f1_AB[n5 * 3 + 1]);
                int n7 = di.a_m11_PBRLbj_(b_f1_AB[n5 * 3]).a_m5_PLas_IRI(as2, b_f1_AB[n5 * 3 + 2]);
                if (n7 >= b_f1_AB[n5 * 3 + 2]) break;
                if (n7 > 0) {
                    di.a_m11_PBRLbj_(b_f1_AB[n5 * 3]).b_m0_PBBIRZ(as2.a_f1_B, as2.b_f0_B, n7);
                }
                --n5;
                while (n5 >= 0) {
                    if (b_f1_AB[n5 * 3 + 1] > 0) {
                        di.a_m11_PBRLbj_(b_f1_AB[n5 * 3]).b_m0_PBBIRZ(as2.a_f1_B, as2.b_f0_B, b_f1_AB[n5 * 3 + 1]);
                    }
                    --n5;
                }
                df.a_m0_PABRV(e.g_f0_Lch_.a_m0_PIRAB(53));
                return false;
            }
            case 17: {
                n2 = 0;
                for (int i2 = 0; i2 < 3; ++i2) {
                    if (i2 == (di.h_f1_B > 2 ? 2 : (int)di.h_f1_B)) {
                        n2 = ((m)object).a_m7_PRS();
                        continue;
                    }
                    ((m)object).a_m7_PRS();
                }
                di.e_m1_PIRV(n2);
                break;
            }
            case 18: {
                byte by2 = (byte)rpg.g.a_m7_PIIRI(0, 18);
                n2 = rpg.g.a_m7_PIIRI(0, 183);
                int n8 = n2 = n2 < 0 ? n2 + 256 : n2;
                if (by2 <= 15) {
                    if (n2 > 28) {
                        by2 = 20;
                        n2 = 6;
                    } else {
                        object = as.a_m0_PBBRLas_(by2, (byte)n2);
                        if (object instanceof bm) {
                            object = (bm)object;
                            if (((bm)object).d_f0_B >= a_f5_Ldo_.a_m28_PRB() + 10) {
                                by2 = 20;
                                n2 = 6;
                            }
                        }
                    }
                } else if (by2 == 16) {
                    n2 = (byte)(n2 / 16);
                } else if (by2 == 17) {
                    n2 = (byte)(n2 / 12);
                } else if (by2 == 18) {
                    n2 = (byte)(n2 / 4);
                }
                object = as.a_m0_PBBRLas_(by2, (byte)n2);
                if (di.a_m11_PBRLbj_(((as)object).a_f1_B).a_m5_PLas_IRI((as)object, 1) > 0) break;
                df.a_m0_PABRV(e.g_f0_Lch_.a_m0_PIRAB(53));
                return false;
            }
            case 19: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                a_f5_Ldo_.h_m1_PIRV(b_f1_AB[0]);
                break;
            }
            case 20: {
                n2 = 0;
                for (int i3 = 0; i3 < 3; ++i3) {
                    if (i3 == (di.h_f1_B > 2 ? 2 : (int)di.h_f1_B)) {
                        n2 = ((m)object).b();
                        continue;
                    }
                    ((m)object).b();
                }
                a_f5_Ldo_.j_m0_PIRV(n2);
                break;
            }
            case 21: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 6);
                e.a_m0_PRLrpg_e_().a_m3_PABRV(b_f1_AB);
                break;
            }
            case 22: {
                bs.a_m0_PRLbs_().g();
                break;
            }
            case 23: {
                ((m)object).a_m5_PABIRV(Q, 4);
                int n9 = Q[0] < 0 ? 256 + Q[0] : Q[0];
                if (n9 == di.a_f4_Lg_.b_f3_B) {
                    df.a_m13_PLal_SSRV(a_f5_Ldo_, (short)(Q[1] << 4), (short)(Q[2] << 4));
                    h_f1_B = 0;
                    df.Q[0] = -1;
                }
                return false;
            }
            case 24: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 3);
                if (b_f1_AB[0] >= 0) {
                    bl bl3 = di.a_f4_Lg_.a_f6_ALbl_[b_f1_AB[0]];
                    bl3.g(b_f1_AB[1]);
                    a_f4_I = bl3.a_m3_PIRB(b_f1_AB[1]) * b_f1_AB[2];
                    break;
                }
                i_f1_B = b_f1_AB[1];
                j = 0;
                break;
            }
            case 25: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                g2.b_m3_PBBRV(b_f1_AB[0], b_f1_AB[1]);
                break;
            }
            case 26: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                df.a_m11_PBBBRV(b_f1_AB[0], b_f1_AB[1], (byte)1);
                break;
            }
            case 27: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                g2.a_m15_PBBRV(b_f1_AB[1], b_f1_AB[0]);
                return true;
            }
            case 28: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 3);
                bl bl4 = di.a_f4_Lg_.a_f6_ALbl_[b_f1_AB[0]];
                df.a_m13_PLal_SSRV(bl4, (short)(b_f1_AB[1] << 4), (short)(b_f1_AB[2] << 4));
                break;
            }
            case 30: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                this.a_m3_PBBRV(b_f1_AB[0], b_f1_AB[1]);
                break;
            }
            case 31: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 4);
                n2 = 3;
                while (true) {
                    int n10 = n2;
                    n2 = n2 - 1;
                    if (n10 <= 0) break block0;
                    this.a_m3_PBBRV(b_f1_AB[n2], b_f1_AB[3]);
                }
            }
            case 32: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                bl bl5 = g2.a_f6_ALbl_[b_f1_AB[0]];
                if (b_f1_AB[1] == 0) {
                    boolean bl6 = false;
                    object = bl5;
                    bl5.l = bl6;
                    bl5.v();
                } else {
                    boolean bl7 = true;
                    object = bl5;
                    bl5.l = bl7;
                    bl5.a_m0_PSSRV(((du)bl5).h, ((du)bl5).i);
                    bl5.u();
                }
                return true;
            }
            case 33: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                bl bl8 = g2.a_f6_ALbl_[b_f1_AB[0]];
                bl8.d_m3_PBRV(b_f1_AB[1]);
                return true;
            }
            case 29: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                bl bl9 = g2.a_f6_ALbl_[b_f1_AB[0]];
                bl9.b_m0_PIRV(b_f1_AB[1] == 0 ? -1 : 0);
                return true;
            }
            case 34: {
                break;
            }
            case 35: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                dx dx2 = b_f1_AB[0] == 0 ? g2.a_f5_ALdx_[b_f1_AB[1]] : (b_f1_AB[0] == 1 ? g2.b_f2_ALdx_[b_f1_AB[1]] : g2.c_f2_ALdx_[b_f1_AB[1]]);
                boolean bl10 = false;
                object = dx2;
                dx2.l = bl10;
                break;
            }
            case 36: {
                break;
            }
            case 37: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 3);
                dx dx3 = null;
                if (b_f1_AB[0] == 0) {
                    dx3 = g2.a_f5_ALdx_[b_f1_AB[1]];
                } else if (b_f1_AB[0] == 1) {
                    dx3 = g2.b_f2_ALdx_[b_f1_AB[1]];
                } else if (b_f1_AB[1] < g2.c_f2_ALdx_.length) {
                    dx3 = g2.c_f2_ALdx_[b_f1_AB[1]];
                }
                if (dx3 != null) {
                    boolean bl11 = b_f1_AB[2] == 1;
                    object = dx3;
                    dx3.l = bl11;
                }
                return true;
            }
            case 38: {
                df.h_m1_PRV();
                a_f10_Ln_ = new dw(null);
                break;
            }
            case 39: {
                df.h_m1_PRV();
                a_f10_Ln_ = new ay();
                break;
            }
            case 40: {
                df.h_m1_PRV();
                a_f10_Ln_ = new da(null);
                break;
            }
            case 41: {
                df.h_m1_PRV();
                a_f10_Ln_ = new cc(null);
                break;
            }
            case 42: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                if (b_f4_Z) break;
                i_f0_S = 1;
                byte by3 = b_f1_AB[0];
                object = this;
                ((df)object).a_m5_PIBBRV(by3, (byte)-1, (byte)0);
                break;
            }
            case 43: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 3);
                if (b_f4_Z) break;
                i_f0_S = 0;
                this.a_m5_PIBBRV(b_f1_AB[2], b_f1_AB[0], b_f1_AB[1]);
                break;
            }
            case 44: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                if (b_f4_Z) break;
                i_f0_S = 0;
                byte by4 = b_f1_AB[0];
                object = this;
                ((df)object).a_m5_PIBBRV(by4, (byte)-1, (byte)0);
                break;
            }
            case 45: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                di.a_f4_Lg_.e_f1_Z = b_f1_AB[0] == 1;
                break;
            }
            case 46: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                if (b_f4_Z) {
                    d_f0_I = -1;
                    c_f0_I = b_f1_AB[0] == 1 ? 255 : 0;
                    break;
                }
                d_f0_I = 0;
                a_f6_Z = b_f1_AB[0] == 1;
                c_f1_B = b_f1_AB[1];
                break;
            }
            case 47: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                if (!b_f4_Z) {
                    d_f0_I = 0;
                }
                switch (b_f1_AB[0]) {
                    case 0: {
                        b_f3_I = 0;
                        c_f0_I = 255;
                        break;
                    }
                    case 1: {
                        b_f3_I = 0xFFFFFF;
                        c_f0_I = 0;
                        break;
                    }
                    case 2: {
                        b_f3_I = 0;
                        c_f0_I = 0;
                        break;
                    }
                    case 3: {
                        b_f3_I = 0;
                        c_f0_I = 255;
                        break;
                    }
                    case 4: {
                        b_f3_I = 0;
                        c_f0_I = 255;
                        if (b_f4_Z) {
                            d_f0_I = -1;
                            break;
                        }
                        for (n2 = 0; n2 < c_f2_AB.length; n2 = (int)((byte)(n2 + 1))) {
                            df.c_f2_AB[n2] = (byte)rpg.g.a_m7_PIIRI(-5, 5);
                        }
                        break;
                    }
                }
                break;
            }
            case 48: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                int n11 = b_f3_I = b_f1_AB[1] == 0 ? 0 : 0xFFFFFF;
                if (b_f4_Z) {
                    d_f0_I = -1;
                    c_f0_I = b_f1_AB[0] == 1 ? 255 : 0;
                    break;
                }
                a_f6_Z = b_f1_AB[0] == 1;
                d_f0_I = 0;
                break;
            }
            case 49: {
                break;
            }
            case 50: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                if (b_f4_Z) break;
                bq.c();
                bq.a_m2_PBRV(b_f1_AB[0]);
                break;
            }
            case 51: {
                bl bl12;
                if (g2.a_f6_ALbl_ != null && (bl12 = g2.a_m28_PRLbl_()) != null) {
                    df.a_m13_PLal_SSRV(bl12, df.a_f5_Ldo_.h, df.a_f5_Ldo_.i);
                    bl12.b_m0_PIRV(0);
                    break;
                }
                return true;
            }
            case 52: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                bl bl13 = g2.a_m28_PRLbl_();
                if (bl13 != null) {
                    boolean bl14 = b_f1_AB[0] == 1;
                    object = bl13;
                    bl13.l = bl14;
                }
                return true;
            }
            case 53: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                n2 = b_f1_AB[0];
                int n12 = n2 = n2 < 0 ? n2 + 256 : n2;
                if (b_f1_AB[1] == 0) {
                    di.d_m1_PIRV(n2);
                } else {
                    di.c_m3_PIRV(n2);
                }
                db.b_m0_PRV();
                return true;
            }
            case 54: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 2);
                di.a_m10_PIBRV(b_f1_AB[0], b_f1_AB[1]);
                b_f4_Z = false;
                db.b_m0_PRV();
                return true;
            }
            case 55: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 3);
                di.a_f4_Lg_.a_m7_PBBBRV(b_f1_AB[0], b_f1_AB[1], b_f1_AB[2]);
                break;
            }
            case 56: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 3);
                if (b_f1_AB[2] == 0) {
                    int n13 = b_f1_AB[1] * g.c_f3_B + b_f1_AB[0];
                    di.a_f4_Lg_.a_f0_AB[n13] = (byte)(di.a_f4_Lg_.a_f0_AB[n13] | 0xC0);
                    break;
                }
                int n14 = b_f1_AB[1] * g.c_f3_B + b_f1_AB[0];
                di.a_f4_Lg_.a_f0_AB[n14] = (byte)(di.a_f4_Lg_.a_f0_AB[n14] & 0xFFFFFF3F);
                break;
            }
            case 57: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 1);
                di.a_f4_Lg_.d_f3_Z = b_f1_AB[0] == 1;
                break;
            }
            case 58: {
                ((m)object).a_m5_PABIRV(b_f1_AB, 4);
                di.a_m7_PIIIRV(b_f1_AB[1], b_f1_AB[2], b_f1_AB[0]);
            }
        }
        return b_f4_Z;
    }

    private final void a_m3_PBBRV(byte by2, byte by3) {
        bl bl2 = di.a_f4_Lg_.a_f6_ALbl_[by2];
        if (b_f4_Z) {
            ((du)bl2).h = (short)(((du)bl2).h + (d.J[bl2.c_f0_B] * by3 << 4));
            ((du)bl2).i = (short)(((du)bl2).i + (d.K[bl2.c_f0_B] * by3 << 4));
            df.a_m13_PLal_SSRV(bl2, ((du)bl2).h, ((du)bl2).i);
            return;
        }
        a_f3_S = (short)(((du)bl2).h + (d.J[bl2.c_f0_B] * by3 << 4));
        b_f2_S = (short)(((du)bl2).i + (d.K[bl2.c_f0_B] * by3 << 4));
        bl2.a_f1_S = (byte)(by3 << 1);
        df.a_m11_PBBBRV(by2, bl2.c_f0_B, (byte)2);
    }

    protected final void a_m4_PBABRV(byte n2, byte[] byArray) {
        int n3 = n2 = n2 < 0 ? n2 + 256 : n2;
        if (byArray.length > 0) {
            b_f4_Z = false;
            a_f9_AAB = new byte[byArray.length][];
            int n4 = byArray[0] < 0 ? 256 + byArray[0] : byArray[0];
            byte[] byArray2 = db.a_m3_PIRAB(n4);
            boolean bl2 = false;
            if (byArray2.length != d.a_.length) {
                bl2 = true;
            } else {
                for (n4 = d.a_.length - 1; n4 >= 0; --n4) {
                    if (byArray2[n4] == d.a_[n4]) continue;
                    bl2 = true;
                    break;
                }
            }
            for (int i2 = 0; i2 < byArray.length; ++i2) {
                n4 = byArray[i2] < 0 ? 256 + byArray[i2] : byArray[i2];
                df.a_f9_AAB[i2] = db.a_m3_PIRAB(n4);
            }
            a_f8_Leb_ = new bt(null, db.a_m3_PIRAB(n2), a_f9_AAB, bl2);
        }
    }

    private static void f_m0_PRV() {
        int n2 = a.a_f0_I;
        if (a_f11_Lcg_ == null) {
            a_f11_Lcg_ = cg.a_m2_PIIRLcg_(n2, 37);
        }
        cm cm2 = a_f11_Lcg_.a_m1_PRLcm_();
        cm2.b_m0_PIIIIRV(0, 0, n2, 37);
        cm2.a_m2_PIRV(0);
        if (i_f0_S == 0) {
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

    private void a_m5_PIBBRV(int n2, byte by2, byte by3) {
        df.f_m0_PRV();
        e_f1_B = by2;
        f_f1_B = by3;
        d_f2_AB = db.a_m3_PIRAB(n2 < 0 ? n2 + 256 : n2);
        c_f3_S = 0;
        e_f0_S = 0;
        d_f3_S = 0;
        f_f0_S = (short)d_f2_AB.length;
        g_f0_S = (short)-1;
        h_f0_S = 0;
    }

    private static boolean h_m0_PRZ() {
        short s2;
        if (a_f11_Lcg_ == null) {
            return false;
        }
        cm cm2 = a_f11_Lcg_.a_m1_PRLcm_();
        int n2 = 255;
        cm cm3 = cm2;
        cm3.b_m1_PIRV(n2);
        if (e_f0_S == d_f3_S) {
            c_f3_S = (short)(c_f3_S + e_f0_S);
            d_f3_S = 0;
            g_f0_S = (short)(g_f0_S + 1);
        }
        if (g_f0_S >= h_f0_S + 1) {
            return false;
        }
        if (d_f3_S == 0) {
            d_f3_S = (short)ac.a_m5_PABIIIRI(d_f2_AB, c_f3_S, a.a_f0_I - 20, 2);
            e_f0_S = 0;
        }
        if ((e_f0_S = (short)ac.a_m6_PABIIRI(d_f2_AB, c_f3_S, s2 = e_f0_S)) > d_f3_S) {
            e_f0_S = (short)(e_f0_S - (e_f0_S - d_f3_S));
        }
        cm2.b_m0_PIIIIRV(0, 0, a_f11_Lcg_.a_m5_PRI(), a_f11_Lcg_.b());
        cm2.a_m2_PIRV(0xFFFFFF);
        if (i_f0_S == 0) {
            ac.a_m3_PLcm_IIIIABIIIRV(cm2, 12, 7 + (g_f0_S - h_f0_S) * 14, a.a_f0_I - 20, 1, d_f2_AB, c_f3_S, s2, e_f0_S);
        } else {
            ac.a_m4_PLcm_IIIABIIIRV(cm2, a.a_f0_I >> 1, 7 + (g_f0_S - h_f0_S) * 14, a.a_f0_I - 20, d_f2_AB, c_f3_S, e_f0_S, 1);
        }
        return true;
    }

    /*
     * Unable to fully structure code
     */
    public static final boolean c() {
        block22: {
            block20: {
                block21: {
                    if (!db.a_m2_PRZ()) {
                        di.c_m6_PBRV((byte)3);
                        return false;
                    }
                    if (df.a_f10_Ln_ != null || df.R != null) {
                        return true;
                    }
                    di.c_m6_PBRV((byte)4);
                    if (df.b_f4_Z) break block20;
                    if (df.a_f8_Leb_ == null) break block21;
                    v0 = true;
                    break block22;
                }
                switch (df.b_f0_B) {
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
                        df.a_f5_Ldo_.b_f1_B = (byte)2;
                        v0 = true;
                        break block22;
lbl22:
                        // 1 sources

                        df.a_f5_Ldo_.a_m0_PBRV((byte)1);
                        ** GOTO lbl79
                    }
                    case 42: 
                    case 43: 
                    case 44: {
                        if (df.d_f2_AB == null) ** GOTO lbl79
                        df.h_m0_PRZ();
                        v0 = true;
                        break block22;
                    }
                    case 46: {
                        if (df.d_f0_I < 0 || df.d_f0_I >= 16) ** GOTO lbl35
                        ++df.d_f0_I;
                        v0 = true;
                        break block22;
lbl35:
                        // 1 sources

                        df.c_f1_B = (byte)-1;
                        ** GOTO lbl79
                    }
                    case 47: {
                        if (df.b_f1_AB[0] != 3) ** GOTO lbl45
                        if (df.d_f0_I < 0 || df.d_f0_I >= 8) ** GOTO lbl43
                        df.c_f0_I = ++df.d_f0_I % 2 == 0 ? 255 : 0;
                        v0 = true;
                        break block22;
lbl43:
                        // 1 sources

                        df.c_f0_I = 255;
                        ** GOTO lbl79
lbl45:
                        // 1 sources

                        if (df.b_f1_AB[0] != 4) ** GOTO lbl79
                        if (df.d_f0_I < 0 || df.d_f0_I >= df.c_f2_AB.length >> 1) ** GOTO lbl52
                        di.a_f4_Lg_.b_f5_I = df.c_f2_AB[df.d_f0_I << 1];
                        di.a_f4_Lg_.c_f4_I = df.c_f2_AB[(df.d_f0_I << 1) + 1];
                        ++df.d_f0_I;
                        v0 = true;
                        break block22;
lbl52:
                        // 1 sources

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
                        break block22;
                    }
                    case 30: {
                        var0 = di.a_f4_Lg_.a_f6_ALbl_[df.b_f1_AB[0]];
                        if (var0.h == df.a_f3_S && var0.i == df.b_f2_S) ** GOTO lbl69
                        var0.b_f1_B = (byte)2;
                        v0 = true;
                        break block22;
lbl69:
                        // 1 sources

                        var0.a_m2_PBRV((byte)1);
                        ** GOTO lbl79
                    }
                    case 24: {
                        if (df.a_f4_I == 1 && df.b_f1_AB[2] > 0) {
                            var0 = di.a_f4_Lg_.a_f6_ALbl_[df.b_f1_AB[0]];
                            var0.a_m2_PBRV((byte)1);
                        }
                        ** GOTO lbl79
                    }
                    case 3: {
                        if (df.a_f4_I == 1 && df.b_f1_AB[1] > 0) {
                            df.a_f5_Ldo_.a_m0_PBRV((byte)1);
                        }
                    }
lbl79:
                    // 15 sources

                    default: {
                        if (df.a_f4_I <= 0 || --df.a_f4_I == 0) break;
                        v0 = true;
                        break block22;
                    }
                }
            }
            df.b_f0_B = (byte)-1;
            v0 = false;
        }
        if (!v0 && !df.a_f0_Ldf_.b_m1_PRZ()) {
            df.b_f4_Z = false;
            if (df.h_f1_B >= 0) {
                e.f_f0_ALcg_ = null;
                var0_1 = df.h_f1_B;
                df.h_f1_B = (byte)-1;
                df.a_m10_PBBRZ((byte)-1, var0_1);
                bs.c_f0_Z = true;
                return true;
            }
            df.e_m0_PRV();
            di.c_m6_PBRV((byte)3);
            df.a_f5_Ldo_.q_m1_PRV();
        }
        if (df.Q[0] != -1) {
            di.b_m1_PBBBBRV(df.Q[0], df.Q[1], df.Q[2], df.Q[3]);
            df.d_m0_PRV();
            db.a_m1_PRV();
            return false;
        }
        di.a_f4_Lg_.d_m1_PRV();
        df.a_f5_Ldo_.c_m1_PRV();
        bs.c_f0_Z = true;
        return true;
    }

    public static void a_m6_PLcm_RV(cm cm2) {
        int n2;
        if (b_f4_Z) {
            return;
        }
        if (a_f10_Ln_ != null) {
            bs.a_m0_PRLbs_().f();
            a_f10_Ln_.c_m1_PLcm_RV(cm2);
            return;
        }
        if (d_f1_B != -2) {
            df.g_m1_PRV();
        }
        di.a_m6_PZZRV(false, false);
        if (c_f1_B >= 0) {
            int n3 = 0;
            int n4 = 0;
            n2 = 0;
            int n5 = 0;
            int n6 = a.b_f0_I - 33;
            int n7 = n6 / 16;
            int n8 = a.a_f0_I;
            int n9 = n8 / 16;
            switch (c_f1_B) {
                case 0: {
                    n2 = a.a_f0_I;
                    if (b_f1_AB[0] == 0) {
                        n5 = d_f0_I * n7;
                        break;
                    }
                    n4 = d_f0_I * n7;
                    n5 = a.b_f0_I;
                    break;
                }
                case 1: {
                    n2 = a.a_f0_I;
                    if (b_f1_AB[0] == 0) {
                        n5 = a.b_f0_I;
                        n4 = n6 - d_f0_I * n7;
                        break;
                    }
                    n5 = n6 - d_f0_I * n7;
                    break;
                }
                case 2: {
                    n5 = a.b_f0_I;
                    if (b_f1_AB[0] == 0) {
                        n2 = d_f0_I * n9;
                        break;
                    }
                    n3 = d_f0_I * n9;
                    n2 = a.a_f0_I;
                    break;
                }
                case 3: {
                    n5 = a.b_f0_I;
                    if (b_f1_AB[0] == 0) {
                        n2 = a.a_f0_I;
                        n3 = n8 - d_f0_I * n9;
                        break;
                    }
                    n2 = n8 - d_f0_I * n9;
                }
            }
            df.b_m1_PLcm_RV(cm2);
            cm2.a_m4_PIIIIRV(n3, n4, n2, n5);
        }
        cm cm3 = cm2;
        if (c_f0_I == 0) {
            cm3.a_m2_PIRV(b_f3_I);
            cm3.b_m0_PIIIIRV(0, 0, bs.j, a.b_f0_I);
            cm3.a_m4_PIIIIRV(0, 0, bs.j, a.b_f0_I);
        } else {
            n2 = 255;
            cm cm4 = cm3;
            cm4.b_m1_PIRV(n2);
            df.b_m1_PLcm_RV(cm3);
            if (i_f1_B < 0) {
                di.a_f4_Lg_.c_m2_PRV();
            }
        }
        if (c_f0_I > 0) {
            cm2.a_m2_PIRV(0);
            cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            if (i_f1_B < 0) {
                cm2.a_m4_PIIIIRV(0, a.b_f0_I - 37, a.a_f0_I, 37);
                df.b_m1_PLcm_RV(cm2);
            } else {
                cm2.a_m4_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
                if (j >= e.a_f4_Ls_.a_m3_PBRB(i_f1_B)) {
                    j = 0;
                    if (i_f1_B == 1 || i_f1_B == 3) {
                        i_f1_B = (byte)(i_f1_B + 1);
                    }
                }
                e.a_f4_Ls_.a_m2_PBBIIIRI(i_f1_B, (byte)0, j, a.a_f0_I >> 1, a.b_f0_I + 50 >> 1);
                j = (byte)(j + 1);
            }
        }
        if (d_f2_AB != null) {
            cm3 = cm2;
            int n10 = a.c - (a.a_f0_I >> 1);
            n2 = i_f0_S == 0 ? (short)(a.b_f0_I - 37) : (short)(a.b_f0_I - 33 - 37 >> 1);
            if (i_f0_S > 0) {
                cm3.a_m2_PIRV(0);
                cm3.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
                cm3.a_m4_PIIIIRV(0, a.b_f0_I - 37, a.a_f0_I, 37);
            }
            cm3.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            cm3.a_m1_PLcg_IIIRV(a_f11_Lcg_, n10, n2, 20);
            if (e_f1_B >= 0) {
                if (f_f1_B != 0) {
                    cm3.a_m1_PLcg_IIIRV(e.f_f0_ALcg_[e_f1_B], n10 + a_f11_Lcg_.a_m5_PRI(), n2, 40);
                } else {
                    cm3.a_m1_PLcg_IIIRV(e.f_f0_ALcg_[e_f1_B], n10, n2, 36);
                }
            }
            if (!di.d_f0_Z) {
                di.d_f0_Z = true;
                b.a_m5_PRZ();
                di.f_f0_Z = true;
                di.a_f1_AB = e.a_f1_Lch_.a_m0_PIRAB(14);
            }
        }
        if (a_f9_AAB != null && a_f8_Leb_ != null) {
            a_f8_Leb_.a_m2_PLcm_RV(cm2);
        }
        if (!b_f4_Z && a_f8_Leb_ == null) {
            cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            cm2.a_m1_PLcg_IIIRV(e.o, a.a_f0_I - 1, a.b_f0_I - 1, 40);
        }
        if (R != null) {
            bo.a_m3_PLcm_IIABIRV(cm2, a.a_f0_I - d.e_ >> 1, a.b_f0_I - 174 - 40 >> 1, R, 2);
        }
        cm3 = cm2;
        if (c_f0_I > 0 && c_f0_I < 255) {
            n2 = 255 - c_f0_I;
            cm cm5 = cm3;
            cm5.b_m1_PIRV(n2);
            cm3.a_m2_PIRV(b_f3_I);
            cm3.b_m0_PIIIIRV(0, 0, bs.j, a.b_f0_I);
            cm3.a_m4_PIIIIRV(0, 0, bs.j, a.b_f0_I);
        }
    }

    public static final boolean a_m7_PLdo_RZ(do do_) {
        if (do_.j || do_.k) {
            return false;
        }
        byte by2 = di.a_f4_Lg_.a_m4_PIIRB(do_.s, do_.t);
        return df.a_m10_PBBRZ((byte)0, by2);
    }

    static final boolean d_m1_PRZ() {
        if (df.a_f5_Ldo_.j || df.a_f5_Ldo_.k) {
            return false;
        }
        byte by2 = di.a_f4_Lg_.a_m4_PIIRB(df.a_f5_Ldo_.s + d.J[df.a_f5_Ldo_.c_f0_B], df.a_f5_Ldo_.t + d.K[df.a_f5_Ldo_.c_f0_B]);
        return df.a_m10_PBBRZ((byte)3, by2);
    }

    public static boolean e_m1_PRZ() {
        if (di.a_m8_PIRZ(253) || di.a_m8_PIRZ(254)) {
            df.a_m10_PBBRZ((byte)-1, (byte)3);
            return false;
        }
        if (a_f5_Ldo_.a_m39_PRZ()) {
            di.c_m6_PBRV((byte)4);
            a_f8_Leb_ = new br(null, d.b_, '\u0000');
            return false;
        }
        return true;
    }

    public static boolean a_m8_PIIRZ(int n2, int n3) {
        if (R != null) {
            if (n2 == 8 || n3 == 53) {
                R = null;
                df.e_m0_PRV();
                df.c();
            }
            return true;
        }
        if (a_f10_Ln_ != null) {
            return a_f10_Ln_.a_m1_PIIRZ(n2, n3);
        }
        if (a_f8_Leb_ != null) {
            if (n2 == 8 || n3 == 53) {
                if (a_f8_Leb_ instanceof bt) {
                    db.a_m4_PIRV(a_f8_Leb_.a());
                } else {
                    if (a_f8_Leb_.a() == 0) {
                        a_f5_Ldo_.p_m1_PIRV(50);
                    }
                    df.e_m0_PRV();
                    di.c_m6_PBRV((byte)3);
                    a_f5_Ldo_.q_m1_PRV();
                }
                a_f8_Leb_ = null;
                return true;
            }
            return a_f8_Leb_.a_m1_PIIRZ(n2, n3);
        }
        if (b_f4_Z) {
            return true;
        }
        if (n3 == -7) {
            c_f0_I = 255;
            n3 = 255;
            Object object = cm.a_m0_PRLcm_();
            ((cm)object).b_m1_PIRV(n3);
            if (di.d_f0_Z) {
                b_f4_Z = true;
            }
            object = a_f0_Ldf_;
            switch (b_f0_B) {
                case 7: {
                    df.a_m13_PLal_SSRV(a_f5_Ldo_, a_f3_S, b_f2_S);
                    a_f5_Ldo_.a_m0_PBRV((byte)1);
                    break;
                }
                case 30: {
                    object = di.a_f4_Lg_.a_f6_ALbl_[b_f1_AB[0]];
                    df.a_m13_PLal_SSRV((al)object, a_f3_S, b_f2_S);
                    ((bl)object).a_m2_PBRV((byte)1);
                }
            }
            b_f0_B = (byte)-1;
            d_f2_AB = null;
            return true;
        }
        switch (b_f0_B) {
            case 42: 
            case 43: 
            case 44: {
                if (!n.f_m0_PIIRZ(n2, n3)) break;
                if (e_f0_S < d_f3_S) {
                    while (df.h_m0_PRZ()) {
                    }
                    break;
                }
                if (c_f3_S >= f_f0_S) {
                    d_f2_AB = null;
                    break;
                }
                if (g_f0_S < h_f0_S + 1) break;
                h_f0_S = (short)(h_f0_S + 1);
                df.f_m0_PRV();
            }
        }
        return true;
    }

    public static final boolean f_m1_PRZ() {
        do do_ = di.a_f9_Ldo_;
        if (do_.j || do_.k) {
            return false;
        }
        byte by2 = di.a_f4_Lg_.a_m4_PIIRB(do_.s, do_.t);
        if (df.a_m10_PBBRZ((byte)1, by2)) {
            return true;
        }
        by2 = di.a_f4_Lg_.a_m4_PIIRB(do_.s + d.J[do_.c_f0_B], do_.t + d.K[do_.c_f0_B]);
        if (df.a_m10_PBBRZ((byte)2, by2)) {
            return true;
        }
        if (g.c_f5_Z) {
            return false;
        }
        boolean bl2 = true;
        byte by3 = do_.c_f0_B;
        du du2 = do_;
        if ((du2 = du2.a_m1_PBBBRLdu_((byte)0, by3, (byte)1)) != null && du2 instanceof bl) {
            by2 = ((bl)du2).b_m2_PRB();
        }
        if (by2 > 0 && by2 <= 127 && df.a_m10_PBBRZ((byte)2, by2)) {
            if (du2 != null) {
                by2 = d.P[df.a_f5_Ldo_.c_f0_B];
                a_f7_Lbl_ = (bl)du2;
                a_f7_Lbl_.e_m0_PBRV(by2);
            }
            return true;
        }
        return false;
    }

    public static final boolean a_m9_PBRZ(byte by2) {
        b_f4_Z = false;
        return df.a_m10_PBBRZ((byte)-1, by2);
    }

    public static final boolean g_m0_PRZ() {
        df.d_m0_PRV();
        if (di.a_f4_Lg_.b_f3_B == 60 || di.a_f4_Lg_.b_f3_B == 61) {
            e.a_m10_PIRV(di.a_f4_Lg_.b_f3_B - 60);
            i_f1_B = 0;
            j = 0;
        }
        g_f1_B = (byte)-1;
        boolean bl2 = df.a_m10_PBBRZ((byte)-1, (byte)0);
        if (g_f1_B >= 0 || di.a_f4_Lg_.a_f2_B >= 0) {
            bq.c();
            bq.b_m1_PBZRV(g_f1_B >= 0 ? g_f1_B : di.a_f4_Lg_.a_f2_B, true);
        }
        g_f1_B = (byte)-1;
        bq.a_f1_J = 0L;
        return bl2;
    }

    private static final boolean a_m10_PBBRZ(byte by2, byte by3) {
        if (by3 < 0) {
            return false;
        }
        a_f1_B = by2;
        if (a_f0_Ldf_.a_m6_PIRZ(by3)) {
            a_f5_Ldo_.q_m1_PRV();
            df.c();
            return true;
        }
        return false;
    }

    private static void a_m11_PBBBRV(byte by2, byte by3, byte by4) {
        bl bl2 = di.a_f4_Lg_.a_f6_ALbl_[by2];
        if (by3 > 0) {
            bl2.c_m0_PBRV(by3);
        }
        if (by4 != 0) {
            bl2.a_m2_PBRV(by4);
        }
    }

    private static void a_m12_PIIRV(int n2, int n3) {
        di.a_f5_I = -(n2 << 4) + a.c;
        di.b_f1_I = -(n3 << 4) + a.d;
    }

    private static void g_m1_PRV() {
        if (d_f1_B == -1) {
            di.c_m0_PRV();
            return;
        }
        bl bl2 = di.a_f4_Lg_.a_f6_ALbl_[d_f1_B];
        di.a_f5_I = bs.l - ((du)bl2).h;
        di.b_f1_I = bs.m - ((du)bl2).i;
    }

    private static void a_m13_PLal_SSRV(al al2, short s2, short s3) {
        al2.v();
        al2.a_m0_PBRV((byte)1);
        al2.a_m0_PSSRV(s2, s3);
        al2.E();
        al2.u();
        di.a_f4_Lg_.c_m0_PLdu_RV(al2);
    }

    private static void h_m1_PRV() {
        b_f4_Z = false;
        c_f0_I = 255;
        b_f3_I = 0;
    }

    private static void b_m1_PLcm_RV(cm cm2) {
        cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I - 37);
    }

    static {
        a_f1_B = (byte)-1;
        b_f0_B = (byte)-1;
        a_f2_AB = new byte[5];
        b_f1_AB = new byte[9];
        a_f4_I = 0;
        a_f5_Ldo_ = null;
        a_f6_Z = false;
        b_f3_I = 0;
        c_f0_I = 255;
        c_f1_B = (byte)-1;
        d_f0_I = -1;
        d_f1_B = (byte)-1;
        c_f2_AB = new byte[6];
        d_f2_AB = null;
        c_f3_S = 0;
        d_f3_S = 0;
        e_f0_S = 0;
        f_f0_S = 0;
        e_f1_B = 0;
        f_f1_B = 0;
        g_f0_S = 0;
        h_f0_S = 0;
        i_f0_S = 0;
        a_f7_Lbl_ = null;
        g_f1_B = (byte)-1;
        h_f1_B = (byte)-1;
        Q = new byte[4];
        b_f4_Z = false;
        R = null;
        a_f8_Leb_ = null;
        b_f5_Leb_ = null;
        a_f9_AAB = null;
        a_f10_Ln_ = null;
        i_f1_B = (byte)-1;
        j = (byte)-1;
        i_f2_AAB = new byte[][]{{16, 17, 18, 19}, {20, 21, 22, 23}, {20, 21, 22, 23}, {20, 21, 22, 23}, {14, 15, 16, 17}, {19, 20, 21, 22}};
        a_f11_Lcg_ = null;
    }
}

