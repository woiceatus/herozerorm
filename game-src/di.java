/*
 * Decompiled with CFR 0.152.
 */
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FilterInputStream;
import java.io.FilterOutputStream;
import java.io.OutputStream;
import rpg.b;
import rpg.c;
import rpg.d;
import rpg.e;

public final class di
implements d {
    public static boolean a_f0_Z;
    public static boolean b_f0_Z;
    public static boolean c_f0_Z;
    public static boolean d_f0_Z;
    public static boolean e_f0_Z;
    public static byte[] a_f1_AB;
    public static boolean f_f0_Z;
    private static final byte[] c_f1_AB;
    private static final byte[] d_f1_AB;
    private static final boolean[] a_f2_AZ;
    public static byte a_f3_B;
    public static g a_f4_Lg_;
    public static int a_f5_I;
    public static int b_f1_I;
    public static int c_f2_I;
    public static int d_f2_I;
    public static boolean g_f0_Z;
    public static boolean h_f0_Z;
    public static boolean i_f0_Z;
    private static byte[] Q;
    private static byte[] R;
    private static byte[] S;
    private static bj a_f6_Lbj_;
    private static bj b_f2_Lbj_;
    private static bj c_f3_Lbj_;
    public static int e_f1_I;
    private static int[] c_f4_AI;
    public static int f_f1_I;
    public static long a_f7_J;
    public static long b_f3_J;
    public static long[] a_f8_AJ;
    private static byte[] T;
    public static byte b_f4_B;
    public static do a_f9_Ldo_;
    public static h a_f10_Lh_;
    public static byte[] b_f5_AB;
    public static int[] a_f11_AI;
    public static int[] b_f6_AI;
    private static byte[] U;
    private static byte[] V;
    static byte c_f5_B;
    private static byte m;
    public static byte d_f3_B;
    private static byte n;
    public static byte e_f2_B;
    public static byte f_f2_B;
    public static byte g_f1_B;
    public static byte h_f1_B;
    private static final byte[] W;
    public static byte[][] a_f12_AAB;
    public static byte i_f1_B;
    public static byte j;
    public static byte k;
    public static long c_f6_J;
    private static long d_f4_J;
    public static byte l;

    static final synchronized void a_m0_PBBBBRV(byte by2, byte by3, byte by4, byte by5) {
        e_f2_B = by3;
        f_f2_B = by4;
        g_f1_B = by5;
        n = by2;
    }

    public static final synchronized void a_m1_PBBBRV(byte by2, byte by3, byte by4) {
        di.a_m0_PBBBBRV((byte)3, by3, by4, (byte)0);
    }

    public static final synchronized void a_m2_PBBRV(byte by2, byte by3) {
        di.a_m0_PBBBBRV(by2, by3, (byte)0, (byte)0);
    }

    public static final synchronized void a_m3_PBRV(byte by2) {
        di.a_m0_PBBBBRV(by2, (byte)0, (byte)0, (byte)0);
    }

    public static final void a_m4_PRV() {
        if (n == 0) {
            return;
        }
        byte by2 = n;
        n = 0;
        block0 : switch (by2) {
            case 11: {
                bs.a_m0_PRLbs_().a_m5_PBZRV((byte)2, false);
                return;
            }
            case 1: {
                bs.a_m0_PRLbs_().a_m5_PBZRV((byte)4, false);
                return;
            }
            case 2: {
                a_f4_Lg_.a_m3_PLdu_RV(a_f9_Ldo_);
                a_f9_Ldo_.b_m0_PZRV(!g.c_f5_Z || g.f_f1_Z);
                bs.h();
                a_f9_Ldo_.a_m0_PSSRV((short)(e_f2_B << 4), (short)(f_f2_B << 4));
                a_f9_Ldo_.c_m0_PBRV(g_f1_B);
                di.a_m0_PBBBBRV((byte)0, (byte)0, (byte)0, (byte)0);
                a_f9_Ldo_.a_m0_PBRV((byte)1);
                a_f9_Ldo_.E();
                a_f9_Ldo_.u();
                a_f4_Lg_.c_m0_PLdu_RV(a_f9_Ldo_);
                di.c_m0_PRV();
                c_f2_I = a_f5_I;
                d_f2_I = b_f1_I;
                c.a_m0_PRLrpg_c_().f();
                bs.c_f0_Z = true;
                if (df.g_m0_PRZ()) {
                    di.a_m1_PBBBRV((byte)3, (byte)4, (byte)1);
                } else {
                    di.a_m1_PBBBRV((byte)3, (byte)3, (byte)1);
                }
                if (k == 0) break;
                k = 0;
                di.k();
                return;
            }
            case 3: {
                d_f3_B = e_f2_B;
                switch (f_f2_B) {
                    case 0: {
                        c.a_m2_PIRV(g_f1_B);
                        break block0;
                    }
                    case 1: {
                        c.a_m0_PRLrpg_c_().f();
                        break block0;
                    }
                    case 2: {
                        c.a_m0_PRLrpg_c_().g();
                        break block0;
                    }
                    case 3: {
                        c.a_m0_PRLrpg_c_().h();
                    }
                }
                return;
            }
            case 6: {
                d_f3_B = (byte)5;
                ax.a_m0_PRLax_().a_m1_PRV();
                ax.a_m0_PRLax_().c(e_f2_B);
                return;
            }
            case 7: {
                d_f3_B = (byte)3;
                ax.a_m0_PRLax_().g();
                switch (e_f2_B) {
                    case 1: {
                        e.a_m0_PRLrpg_e_().e();
                        bs.a_m0_PRLbs_().a_m5_PBZRV((byte)2, false);
                        break block0;
                    }
                    case 2: {
                        di.b_m1_PBBBBRV(V[0], V[1], V[2], (byte)2);
                    }
                }
                return;
            }
            case 8: {
                int n2;
                by2 = e_f2_B;
                if (by2 == 2) {
                    if (h_f1_B < 2) {
                        h_f1_B = (byte)(h_f1_B + 1);
                    }
                    di.a_m11_PBRLbj_((byte)19).a_m8_PRV();
                    a_f9_Ldo_.a_m23_PBIRV((byte)0, a_f9_Ldo_.f_m2_PBRI((byte)0));
                    a_f9_Ldo_.a_m23_PBIRV((byte)1, a_f9_Ldo_.f_m2_PBRI((byte)1));
                    a_f9_Ldo_.a_m23_PBIRV((byte)3, a_f9_Ldo_.f_m2_PBRI((byte)3));
                    di.a_m7_PIIIRV(U[0], U[1], U[2]);
                    di.n();
                } else {
                    di.f_m0_PRV();
                    di.h();
                    d_f4_J = rpg.g.a_m9_PRJ();
                }
                int n3 = by2 == 2 ? 1 : 0;
                int n4 = n3;
                int n5 = n3 != 0 ? 31 : 32;
                for (n2 = 0; n2 < n5; ++n2) {
                    di.Q[n2] = 0;
                }
                if (n4 != 0) {
                    for (n2 = n5 << 3; n2 < 250; ++n2) {
                        di.d_m1_PIRV(n2);
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
                    c_f6_J = 0L;
                    h_f1_B = 0;
                    k = 0;
                    l = 1;
                    e_f1_I = 0;
                    di.o();
                    a_f9_Ldo_.l_m1_PRV();
                    a_f9_Ldo_.a_m1_PZRV(true);
                    di.n();
                    as as2 = as.a_m0_PBBRLas_((byte)20, (byte)1);
                    c_f3_Lbj_.a_m5_PLas_IRI(as2, 1);
                } else if (by2 == 1) {
                    int n6;
                    if (!di.a_m18_PZRZ(false)) {
                        n6 = 0;
                    } else {
                        a_f9_Ldo_.j_m1_PRV();
                        a_f9_Ldo_.i_m1_PRV();
                        n6 = n4 = 1;
                    }
                }
                if (n4 != 0) {
                    bs.a_m0_PRLbs_().a_m5_PBZRV((byte)3, false);
                } else {
                    b.a_m0_PRV();
                    i.a_m0_PRLi_().a_f2_B = 0;
                    e.a_m0_PRLrpg_e_().e();
                    bs.a_m0_PRLbs_().a_m5_PBZRV((byte)2, false);
                    i.a_m0_PRLi_().b_f1_Ln_ = new br((n)i.a_m0_PRLi_(), e.i_f0_Lch_.a_m0_PIRAB(13), '\u0000');
                }
                b.b_m4_PRV();
                return;
            }
            case 9: {
                if (c.b_f1_Z) {
                    bq.b_m1_PBZRV((byte)15, false);
                }
                bs.a_m0_PRLbs_().n = 0;
                di.c_m6_PBRV((byte)7);
            }
        }
    }

    public static final void a_m5_PIRV(int n2) {
        di.a_m2_PBBRV((byte)8, (byte)n2);
    }

    public static final void b_m0_PRV() {
        di.a_m1_PBBBRV((byte)3, (byte)2, (byte)3);
    }

    public static final void b_m1_PBBBBRV(byte by2, byte by3, byte by4, byte by5) {
        a_f3_B = by2;
        di.a_m0_PBBBBRV((byte)1, by3, by4, by5);
    }

    public static final void c_m0_PRV() {
        a_f5_I = bs.l - di.a_f9_Ldo_.h;
        b_f1_I = bs.m - di.a_f9_Ldo_.i;
    }

    public static final void a_m6_PZZRV(boolean bl2, boolean bl3) {
        if (bl3) {
            byte by2 = di.a_f9_Ldo_.c_f0_B;
            if (bl2) {
                b_f1_I -= c_f1_AB[c.c_f0_B] * d.K[by2];
                a_f5_I -= c_f1_AB[c.c_f0_B] * d.J[by2];
            }
            if (!a_f2_AZ[by2] && d_f2_I != b_f1_I) {
                d_f2_I += (b_f1_I - d_f2_I + 1) / d_f1_AB[c.c_f0_B] - 1;
            }
            if (a_f2_AZ[by2] && c_f2_I != a_f5_I) {
                c_f2_I += (a_f5_I - c_f2_I + 1) / d_f1_AB[c.c_f0_B] - 1;
            }
            return;
        }
        c_f2_I += (a_f5_I - c_f2_I + 1) / d_f1_AB[c.c_f0_B] - 1;
        d_f2_I += (b_f1_I - d_f2_I + 1) / d_f1_AB[c.c_f0_B] - 1;
    }

    public static final void d_m0_PRV() {
        if (c_f5_B != 0 && !di.a_f9_Ldo_.j && !di.a_f9_Ldo_.k) {
            di.b_m4_PBBRV(c_f5_B, m);
            di.c_m2_PBBRV((byte)0, (byte)0);
        }
        if (!g.a_m25_PRZ()) {
            a_f9_Ldo_.c_m1_PRV();
            a_f4_Lg_.c_m0_PLdu_RV(a_f9_Ldo_);
            cd.C();
            a_f4_Lg_.a_m19_PBBRZ(di.a_f9_Ldo_.s, di.a_f9_Ldo_.t);
            a_f4_Lg_.f_m1_PRV();
            a_f4_Lg_.d_m1_PRV();
            if (!b_f0_Z && di.a_f4_Lg_.b_f3_B == 11) {
                b_f0_Z = true;
                b.a_m5_PRZ();
                f_f0_Z = true;
                a_f1_AB = e.a_f1_Lch_.a_m0_PIRAB(12);
            }
        }
    }

    public static final void b_m2_PBRV(byte by2) {
        switch (di.a_f9_Ldo_.b_f1_B) {
            case 1: {
                di.b_m4_PBBRV((byte)2, by2);
                di.c_m2_PBBRV((byte)0, (byte)0);
                return;
            }
            case 2: {
                if (di.c_m9_PRZ()) break;
                di.c_m2_PBBRV((byte)2, by2);
                return;
            }
            case 3: 
            case 9: {
                a_f9_Ldo_.g_m0_PBRV(by2);
            }
        }
    }

    public static final void e_m0_PRV() {
        a_f9_Ldo_.e_m1_PRV();
        di.c_m2_PBBRV((byte)1, di.a_f9_Ldo_.c_f0_B);
    }

    public static final void b_m3_PIRV(int n2) {
        if (!a_f9_Ldo_.d_m2_PBRZ((byte)n2)) {
            return;
        }
        switch (di.a_f9_Ldo_.b_f1_B) {
            case 2: {
                di.c_m2_PBBRV((byte)3, di.a_f9_Ldo_.c_f0_B);
                return;
            }
            case 1: {
                di.b_m4_PBBRV((byte)3, a_f9_Ldo_.b_m8_PRB());
            }
        }
    }

    public static final void a_m7_PIIIRV(int n2, int n3, int n4) {
        di.V[0] = (byte)n4;
        di.V[1] = (byte)n2;
        di.V[2] = (byte)n3;
    }

    private static void n() {
        di.c_m1_PBBBBRV(rpg.h.a[0], rpg.h.a[1], rpg.h.a[2], rpg.h.a[3]);
    }

    private static void c_m1_PBBBBRV(byte by2, byte by3, byte by4, byte by5) {
        a_f3_B = by2;
        e_f2_B = by3;
        f_f2_B = by4;
        g_f1_B = by5;
    }

    private static void o() {
        a_f9_Ldo_ = do.a_m0_PBRLdo_(b_f4_B);
    }

    public static final void b_m4_PBBRV(byte by2, byte by3) {
        a_f9_Ldo_.a_m0_PBRV(by2);
        a_f9_Ldo_.c_m0_PBRV(by3);
    }

    public static final void c_m2_PBBRV(byte by2, byte by3) {
        c_f5_B = by2;
        m = by3;
    }

    public static final boolean a_m8_PIRZ(int n2) {
        byte by2 = Q[n2 / 8];
        return (by2 >> n2 % 8 & 1) == 1;
    }

    public static final void c_m3_PIRV(int n2) {
        byte by2 = Q[n2 / 8];
        di.Q[n2 / 8] = (byte)(by2 | 1 << n2 % 8);
        if (n2 == 250 || n2 == 251) {
            switch (n2) {
                case 250: {
                    if (g_f0_Z) break;
                    g_f0_Z = true;
                    b.a_m5_PRZ();
                    return;
                }
                case 251: {
                    if (h_f0_Z) break;
                    h_f0_Z = true;
                    b.a_m5_PRZ();
                }
            }
        }
    }

    private static boolean c_m4_PIRZ(int n2) {
        byte by2 = W[n2 / 8];
        return (by2 >> n2 % 8 & 1) == 1;
    }

    public static final void d_m1_PIRV(int n2) {
        byte by2 = Q[n2 / 8];
        di.Q[n2 / 8] = (byte)(by2 & ~(1 << n2 % 8));
    }

    public static final byte a_m9_PIRB(int n2) {
        byte by2 = R[n2 / 4];
        return (byte)(by2 >> (3 - n2 % 4 << 1) & 3);
    }

    public static final void a_m10_PIBRV(int n2, byte by2) {
        byte by3 = (byte)(192 >> (n2 % 4 << 1));
        di.R[n2 / 4] = (byte)(R[n2 / 4] & ~by3);
        int n3 = n2 / 4;
        R[n3] = (byte)(R[n3] | (byte)(by2 << (3 - n2 % 4 << 1)));
        a_f4_Lg_.a_m2_PRV();
        if (by2 == 2) {
            by2 = di.a_f4_Lg_.b_f3_B;
            if (by2 < 0) {
                by2 = (byte)(by2 + 256);
            }
            System.out.println("*************************************");
            System.out.println("finished task " + n2 + " on map " + by2);
            System.out.println("*************************************");
            return;
        }
        if (by2 == 1) {
            by2 = di.a_f4_Lg_.b_f3_B;
            if (by2 < 0) {
                by2 = (byte)(by2 + 256);
            }
            System.out.println("#####################################");
            System.out.println("received task " + n2 + " on map " + by2);
            System.out.println("#####################################");
        }
    }

    public static final void b_m5_PIBRV(int n2, byte by2) {
        if (n2 < 0) {
            n2 += 256;
        }
        di.S[n2] = by2;
    }

    public static final void c_m5_PIBRV(int n2, byte by2) {
        if (S[n2] < 0) {
            return;
        }
        int n3 = n2;
        S[n3] = (byte)(S[n3] - 1);
        if (S[n2] == 0) {
            di.S[n2] = -1;
            df.a_m9_PBRZ(by2);
        }
    }

    public static final void c_m6_PBRV(byte by2) {
        d_f3_B = by2;
        if (d_f3_B == 3) {
            bs.c_f0_Z = true;
        }
    }

    public static void f_m0_PRV() {
        a_f6_Lbj_ = new bj(28);
        b_f2_Lbj_ = new bj(28);
        c_f3_Lbj_ = new bj(28);
    }

    public static void g_m0_PRV() {
        a_f6_Lbj_ = null;
        b_f2_Lbj_ = null;
        c_f3_Lbj_ = null;
    }

    public static bj a_m11_PBRLbj_(byte by2) {
        switch (by2) {
            case 16: 
            case 18: {
                return b_f2_Lbj_;
            }
            case 17: 
            case 19: 
            case 20: {
                return c_f3_Lbj_;
            }
        }
        return a_f6_Lbj_;
    }

    public static bj a_m12_PRLbj_() {
        return a_f6_Lbj_;
    }

    public static bj b_m6_PRLbj_() {
        return c_f3_Lbj_;
    }

    public static bj c_m7_PRLbj_() {
        return b_f2_Lbj_;
    }

    public static final void e_m1_PIRV(int n2) {
        if ((e_f1_I += n2) < 0) {
            e_f1_I = 0;
        } else if (e_f1_I > 999999999) {
            e_f1_I = 999999999;
        }
        bs.c_f0_Z = true;
    }

    public static void h() {
        b_f5_AB = new byte[6];
        a_f11_AI = new int[6];
        b_f6_AI = new int[6];
        for (int i2 = 0; i2 < 6; ++i2) {
            di.b_f5_AB[i2] = -1;
            di.a_f11_AI[i2] = -1;
            di.b_f6_AI[i2] = -1;
        }
    }

    public static void a_m13_PZBRV(boolean bl2, byte by2) {
        if (b_f5_AB[bl2 ? 5 : 4] == by2) {
            di.b_f5_AB[bl2 ? 5 : 4] = -1;
        }
        di.b_f5_AB[bl2 ? 4 : 5] = by2;
        bs.d_f0_Z = true;
    }

    public static as a_m14_PZRLas_(boolean n2) {
        n2 = b_f5_AB[n2 != 0 ? 4 : 5];
        as as2 = null;
        if (n2 > 0) {
            as2 = c_f3_Lbj_.a_m12_PBBRLas_((byte)20, (byte)n2);
        }
        return as2;
    }

    public static void d_m2_PIBRV(int n2, byte by2) {
        int n3 = di.d_m3_PIRZ(n2) ? 0 : 2;
        for (int i2 = 0; i2 < 2; ++i2) {
            if (b_f5_AB[i2 + n3] != by2) continue;
            di.b_f5_AB[i2 + n3] = -1;
        }
        di.b_f5_AB[n2] = by2;
        di.f_m1_PIRV(n2);
        if (!di.d_m3_PIRZ(n2)) {
            a_f9_Ldo_.a_m38_PRLo_().b_m3_PIRV(n2);
        }
    }

    private static boolean d_m3_PIRZ(int n2) {
        return n2 < 2;
    }

    public static void a_m15_PBZRV(byte by2, boolean bl2) {
        int n2 = bl2 ? 0 : 2;
        di.b_f5_AB[by2 + n2] = -1;
    }

    public static boolean a_m16_PBZRZ(byte by2, boolean bl2) {
        int n2 = bl2 ? 0 : 2;
        for (int i2 = 0; i2 < 2; ++i2) {
            if (b_f5_AB[i2 + n2] != by2) continue;
            return true;
        }
        return false;
    }

    public static boolean b_m7_PIRZ(int n2) {
        return n2 == 0 || n2 == 1;
    }

    private static void f_m1_PIRV(int n2) {
        di.g_m1_PIRV(n2);
        di.a_f11_AI[n2] = b_f6_AI[n2];
    }

    public static void b_m8_PBZRV(byte by2, boolean bl2) {
        int n2 = bl2 ? 0 : 2;
        for (int i2 = 0; i2 < 2; ++i2) {
            if (b_f5_AB[n2 + i2] != by2) continue;
            di.f_m1_PIRV(n2 + i2);
            return;
        }
    }

    private static void g_m1_PIRV(int n2) {
        byte by2 = b_f5_AB[n2];
        if (by2 < 0) {
            return;
        }
        int n3 = di.b_f6_AI[n2] = di.b_m7_PIRZ(n2) ? a_f9_Ldo_.d_m1_PBRI(by2) : a_f9_Ldo_.a_m38_PRLo_().d_m1_PBRI(by2);
        if (a_f11_AI[n2] > b_f6_AI[n2]) {
            di.a_f11_AI[n2] = b_f6_AI[n2];
        }
    }

    public static final void i() {
        di.a_f11_AI[4] = 10;
    }

    public static void j() {
        for (int i2 = 0; i2 < 6; ++i2) {
            di.g_m1_PIRV(i2);
        }
    }

    public static final boolean a_m17_PRZ() {
        return b_f4_B % 2 == 0;
    }

    public static final boolean b_m9_PRZ() {
        return b_f4_B == 1 || b_f4_B == 3 || b_f4_B == 2;
    }

    public static final void k() {
        a_f7_J = di.a_f8_AJ[di.j] = System.currentTimeMillis();
        b_f3_J = di.a_f8_AJ[di.j];
        byte by2 = j;
        b.c_m0_PABBRZ(di.a_m21_PBRAB(by2), by2);
        byte[] byArray = di.a_m22_PRAB();
        byte[] byArray2 = a_f4_Lg_.a_m21_PRAB();
        byte[] byArray3 = a_f9_Ldo_.a_m36_PRAB();
        byte[] byArray4 = a_f9_Ldo_.a_m38_PRLo_().a_m15_PRAB();
        byte[] byArray5 = new byte[13 + byArray.length + byArray2.length + byArray3.length + byArray4.length + 8];
        rpg.g.a_m4_PIABIRV(f_f1_I, byArray5, 0);
        byArray5[4] = j;
        rpg.g.a_m6_PJABIRV(b_f3_J, byArray5, 5);
        int n2 = di.a_m19_PABABIRI(byArray, byArray5, 13);
        n2 = di.a_m19_PABABIRI(byArray2, byArray5, n2);
        n2 = di.a_m19_PABABIRI(byArray3, byArray5, n2);
        di.a_m19_PABABIRI(byArray4, byArray5, n2);
        b.a_m1_PABBRZ(byArray5, j);
        di.l();
    }

    public static final boolean a_m18_PZRZ(boolean bl2) {
        if (!di.b_m10_PBZRZ(j, bl2)) {
            return false;
        }
        if (!di.c_m8_PBRZ(j)) {
            return false;
        }
        if (!bl2) {
            a_f9_Ldo_.a_m1_PZRV(false);
        }
        return true;
    }

    /*
     * Loose catch block
     */
    private static final boolean b_m10_PBZRZ(byte by2, boolean bl2) {
        block34: {
            FilterInputStream filterInputStream;
            ByteArrayInputStream byteArrayInputStream;
            block35: {
                block33: {
                    block32: {
                        byte[] byArray = b.a_m2_PBRAB(by2);
                        byteArrayInputStream = null;
                        filterInputStream = null;
                        byteArrayInputStream = new ByteArrayInputStream(byArray);
                        filterInputStream = new DataInputStream(byteArrayInputStream);
                        ((DataInputStream)filterInputStream).readInt();
                        byte by3 = ((DataInputStream)filterInputStream).readByte();
                        if (by2 == by3) break block32;
                        try {
                            filterInputStream.close();
                            byteArrayInputStream.close();
                        }
                        catch (Exception exception) {}
                        return false;
                    }
                    b_f3_J = ((DataInputStream)filterInputStream).readLong();
                    if (!bl2) break block33;
                    try {
                        filterInputStream.close();
                        byteArrayInputStream.close();
                    }
                    catch (Exception exception) {}
                    return true;
                }
                short s2 = ((DataInputStream)filterInputStream).readShort();
                by2 = (byte)s2;
                byte[] byArray = new byte[s2];
                ((DataInputStream)filterInputStream).read(byArray);
                ByteArrayInputStream byteArrayInputStream2 = null;
                FilterInputStream filterInputStream2 = null;
                byteArrayInputStream2 = new ByteArrayInputStream(byArray);
                filterInputStream2 = new DataInputStream(byteArrayInputStream2);
                ((DataInputStream)filterInputStream2).read(Q);
                ((DataInputStream)filterInputStream2).read(R);
                ((DataInputStream)filterInputStream2).read(S);
                ((DataInputStream)filterInputStream2).read(V);
                ((DataInputStream)filterInputStream2).read(b_f5_AB);
                ((DataInputStream)filterInputStream2).read(W);
                l = ((DataInputStream)filterInputStream2).readByte();
                try {
                    filterInputStream2.close();
                    byteArrayInputStream2.close();
                }
                catch (Exception exception) {}
                break block35;
                catch (Exception exception) {
                    try {
                        if (filterInputStream2 != null) {
                            filterInputStream2.close();
                        }
                        if (byteArrayInputStream2 != null) {
                            byteArrayInputStream2.close();
                        }
                    }
                    catch (Exception exception2) {}
                }
                catch (Throwable throwable) {
                    try {
                        if (filterInputStream2 != null) {
                            filterInputStream2.close();
                        }
                        if (byteArrayInputStream2 != null) {
                            byteArrayInputStream2.close();
                        }
                    }
                    catch (Exception exception) {}
                    throw throwable;
                }
            }
            short s3 = ((DataInputStream)filterInputStream).readShort();
            byte[] byArray = new byte[s3];
            ((DataInputStream)filterInputStream).read(byArray);
            di.c_m1_PBBBBRV(byArray[0], byArray[1], byArray[2], byArray[3]);
            di.o();
            short s4 = ((DataInputStream)filterInputStream).readShort();
            byte[] byArray2 = new byte[s4];
            ((DataInputStream)filterInputStream).read(byArray2);
            a_f9_Ldo_.a_m37_PABRV(byArray2);
            short s5 = ((DataInputStream)filterInputStream).readShort();
            byte[] byArray3 = new byte[s5];
            ((DataInputStream)filterInputStream).read(byArray3);
            a_f9_Ldo_.a_m38_PRLo_().a_m16_PABRV(byArray3);
            try {
                filterInputStream.close();
                byteArrayInputStream.close();
            }
            catch (Exception exception) {}
            break block34;
            catch (Exception exception) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                    break block34;
                }
                catch (Exception exception3) {}
                break block34;
            }
            catch (Throwable throwable) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                }
                catch (Exception exception) {}
                throw throwable;
            }
        }
        return true;
    }

    public static final void l() {
        byte[] byArray = a_f6_Lbj_.a_m13_PRAB();
        byte[] byArray2 = b_f2_Lbj_.a_m13_PRAB();
        byte[] byArray3 = c_f3_Lbj_.a_m13_PRAB();
        byte[] byArray4 = new byte[8];
        rpg.g.a_m4_PIABIRV(e_f1_I, byArray4, 0);
        byArray4[5] = byArray4[2];
        byArray4[6] = byArray4[3];
        byArray4[2] = (byte)(byArray4[5] | byArray4[6]);
        byArray4[3] = (byte)(byArray4[0] & byArray4[1]);
        byArray4[4] = (byte)(byArray4[0] | byArray4[5]);
        byArray4[7] = (byte)(byArray4[1] & byArray4[6]);
        byte[] byArray5 = new byte[13 + byArray.length + byArray2.length + byArray3.length + 6 + 8];
        rpg.g.a_m4_PIABIRV(f_f1_I, byArray5, 0);
        byArray5[4] = j;
        rpg.g.a_m6_PJABIRV(a_f7_J, byArray5, 5);
        int n2 = di.a_m19_PABABIRI(byArray, byArray5, 13);
        n2 = di.a_m19_PABABIRI(byArray2, byArray5, n2);
        n2 = di.a_m19_PABABIRI(byArray3, byArray5, n2);
        System.arraycopy(byArray4, 0, byArray5, n2, 8);
        b.b_m0_PABBRZ(byArray5, j);
    }

    private static int a_m19_PABABIRI(byte[] byArray, byte[] byArray2, int n2) {
        int n3 = byArray.length;
        rpg.g.a_m5_PSABIRV((short)n3, byArray2, n2);
        System.arraycopy(byArray, 0, byArray2, n2 += 2, n3);
        return n2 += n3;
    }

    /*
     * Loose catch block
     */
    private static boolean c_m8_PBRZ(byte by2) {
        block19: {
            FilterInputStream filterInputStream;
            ByteArrayInputStream byteArrayInputStream;
            block18: {
                byte by3;
                block17: {
                    byte[] byArray = b.b_m1_PBRAB(by2);
                    byteArrayInputStream = null;
                    filterInputStream = null;
                    byteArrayInputStream = new ByteArrayInputStream(byArray);
                    filterInputStream = new DataInputStream(byteArrayInputStream);
                    ((DataInputStream)filterInputStream).readInt();
                    by3 = ((DataInputStream)filterInputStream).readByte();
                    if (by2 == by3) break block17;
                    try {
                        filterInputStream.close();
                        byteArrayInputStream.close();
                    }
                    catch (Exception exception) {}
                    return false;
                }
                a_f7_J = ((DataInputStream)filterInputStream).readLong();
                short s2 = ((DataInputStream)filterInputStream).readShort();
                by2 = (byte)s2;
                byte[] byArray = new byte[s2];
                ((DataInputStream)filterInputStream).read(byArray);
                a_f6_Lbj_.a_m14_PABRV(byArray);
                short s3 = ((DataInputStream)filterInputStream).readShort();
                byte[] byArray2 = new byte[s3];
                ((DataInputStream)filterInputStream).read(byArray2);
                b_f2_Lbj_.a_m14_PABRV(byArray2);
                short s4 = ((DataInputStream)filterInputStream).readShort();
                byte[] byArray3 = new byte[s4];
                ((DataInputStream)filterInputStream).read(byArray3);
                c_f3_Lbj_.a_m14_PABRV(byArray3);
                byArray3 = new byte[8];
                ((DataInputStream)filterInputStream).read(byArray3);
                by3 = byArray3[2] != (byte)(byArray3[5] | byArray3[6]) ? (byte)1 : 0;
                by3 = by3 != 0 || byArray3[3] != (byte)(byArray3[0] & byArray3[1]) ? (byte)1 : 0;
                by3 = by3 != 0 || byArray3[4] != (byte)(byArray3[0] | byArray3[5]) ? (byte)1 : 0;
                if ((by3 = by3 != 0 || byArray3[7] != (byte)(byArray3[1] & byArray3[6]) ? (byte)1 : 0) == 0) {
                    byArray3[2] = byArray3[5];
                    byArray3[3] = byArray3[6];
                    e_f1_I = rpg.g.a_m2_PABIRI(byArray3, 0);
                    break block18;
                }
                e_f1_I = 0;
            }
            try {
                filterInputStream.close();
                byteArrayInputStream.close();
            }
            catch (Exception exception) {}
            break block19;
            catch (Exception exception) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                    break block19;
                }
                catch (Exception exception2) {}
                break block19;
            }
            catch (Throwable throwable) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                }
                catch (Exception exception) {}
                throw throwable;
            }
        }
        return true;
    }

    public static boolean a_m20_PBRZ(byte by2) {
        return (k & by2) != 0;
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    private static final byte[] a_m21_PBRAB(byte by2) {
        byte[] byArray;
        int n2;
        int n3;
        int n4;
        for (n4 = 0; n4 <= 78; ++n4) {
            if (di.a_m9_PIRB(n4) != 2) continue;
            n3 = n4;
            byte by3 = W[n3 / 8];
            di.W[n3 / 8] = (byte)(by3 | 1 << n3 % 8);
        }
        n4 = 0;
        for (n2 = 11; n2 <= 40; ++n2) {
            if (!di.c_m4_PIRZ(n2)) continue;
            n4 = (byte)(n4 + 1);
        }
        n4 = (byte)(n4 << 1);
        for (n2 = 0; n2 <= 10; ++n2) {
            if (!di.c_m4_PIRZ(n2)) continue;
            n4 = (byte)(n4 + 1);
        }
        for (n2 = 50; n2 <= 78; ++n2) {
            if (!di.c_m4_PIRZ(n2)) continue;
            n4 = (byte)(n4 + 1);
        }
        if (di.b_m11_PBRZ((byte)4)) {
            n4 = (byte)(n4 + 1);
        }
        if (di.b_m11_PBRZ((byte)5)) {
            n4 = (byte)(n4 + 1);
        }
        byte by3 = (byte)(n4 + h_f1_B);
        n4 = by3;
        n3 = (byte)(by3 > 100 ? 100 : n4);
        ByteArrayOutputStream byteArrayOutputStream = null;
        FilterOutputStream filterOutputStream = null;
        try {
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = new DataOutputStream(byteArrayOutputStream);
            ((DataOutputStream)filterOutputStream).writeInt(f_f1_I);
            ((DataOutputStream)filterOutputStream).writeByte(by2);
            ((DataOutputStream)filterOutputStream).writeLong(a_f8_AJ[by2]);
            ((DataOutputStream)filterOutputStream).writeByte(b_f4_B);
            ((DataOutputStream)filterOutputStream).writeByte(a_f9_Ldo_.a_m28_PRB());
            ((DataOutputStream)filterOutputStream).writeByte(n3);
            ((DataOutputStream)filterOutputStream).writeByte(h_f1_B);
            ((DataOutputStream)filterOutputStream).writeByte(k);
            long l2 = rpg.g.a_m9_PRJ();
            c_f6_J += l2 - d_f4_J;
            d_f4_J = rpg.g.a_m9_PRJ();
            ((DataOutputStream)filterOutputStream).writeLong(c_f6_J);
            byArray = a_f4_Lg_.b_m6_PRAB();
            ((DataOutputStream)filterOutputStream).writeByte(byArray.length);
            ((OutputStream)filterOutputStream).write(byArray);
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (Exception exception) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) return null;
                byteArrayOutputStream.close();
                return null;
            }
            catch (Exception exception2) {
                return null;
            }
        }
        catch (Throwable throwable) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) throw throwable;
                byteArrayOutputStream.close();
                throw throwable;
            }
            catch (Exception exception) {}
            throw throwable;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            return byArray;
        }
        catch (Exception exception) {}
        return byArray;
    }

    public static final void m() {
        k = 0;
        i_f1_B = 0;
        a_f12_AAB = new byte[3][];
        c_f4_AI = new int[3];
        a_f8_AJ = new long[3];
        T = new byte[3];
        for (byte by2 = 0; by2 < 3; by2 = (byte)(by2 + 1)) {
            di.T[by2] = by2;
            di.a_f12_AAB[by2] = b.c_m1_PBRAB(by2);
            if (a_f12_AAB[by2] == null) continue;
            di.c_f4_AI[by2] = rpg.g.a_m2_PABIRI(a_f12_AAB[by2], 0);
            di.T[by2] = a_f12_AAB[by2][4];
            di.a_f8_AJ[by2] = rpg.g.a_m1_PABIRJ(a_f12_AAB[by2], 5);
            i_f1_B = (byte)(i_f1_B + 1);
        }
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    private static final byte[] a_m22_PRAB() {
        byte[] byArray;
        ByteArrayOutputStream byteArrayOutputStream = null;
        FilterOutputStream filterOutputStream = null;
        try {
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = new DataOutputStream(byteArrayOutputStream);
            ((OutputStream)filterOutputStream).write(Q);
            ((OutputStream)filterOutputStream).write(R);
            ((OutputStream)filterOutputStream).write(S);
            ((OutputStream)filterOutputStream).write(V);
            ((OutputStream)filterOutputStream).write(b_f5_AB);
            ((OutputStream)filterOutputStream).write(W);
            ((DataOutputStream)filterOutputStream).writeByte(l);
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (Exception exception) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) return null;
                byteArrayOutputStream.close();
                return null;
            }
            catch (Exception exception2) {
                return null;
            }
        }
        catch (Throwable throwable) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) throw throwable;
                byteArrayOutputStream.close();
                throw throwable;
            }
            catch (Exception exception) {}
            throw throwable;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            return byArray;
        }
        catch (Exception exception) {}
        return byArray;
    }

    public static boolean c_m9_PRZ() {
        return c_f5_B == 3 || c_f5_B == 10;
    }

    public static boolean b_m11_PBRZ(byte by2) {
        switch (by2) {
            case 4: {
                return g_f0_Z;
            }
            case 5: {
                return h_f0_Z;
            }
        }
        return true;
    }

    static {
        a_f1_AB = null;
        f_f0_Z = false;
        c_f1_AB = new byte[]{0, 15, 30, 35};
        d_f1_AB = new byte[]{1, 2, 3, 3};
        a_f2_AZ = new boolean[]{false, false, false, true, true};
        g_f0_Z = false;
        h_f0_Z = false;
        i_f0_Z = true;
        Q = new byte[32];
        R = new byte[32];
        S = new byte[140];
        c_f4_AI = null;
        f_f1_I = 0;
        a_f7_J = 0L;
        b_f3_J = 0L;
        a_f8_AJ = null;
        T = null;
        b_f4_B = 1;
        a_f10_Lh_ = null;
        U = new byte[]{0, 22, 26};
        V = new byte[]{1, 20, 2};
        c_f5_B = 0;
        m = 0;
        n = 0;
        W = new byte[10];
        a_f12_AAB = null;
        i_f1_B = 0;
        j = 0;
        k = 0;
        c_f6_J = 0L;
        d_f4_J = 0L;
        l = 1;
    }
}

