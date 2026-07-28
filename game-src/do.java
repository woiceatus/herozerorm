/*
 * Decompiled with CFR 0.152.
 */
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FilterInputStream;
import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Vector;
import rpg.a;
import rpg.b;
import rpg.e;

public final class do
extends al {
    private byte i_f0_B;
    private byte j_f0_B = (byte)2;
    byte a_f0_B = 0;
    private byte[] b_f0_AB;
    private byte[] c_f0_AB;
    public byte[] a_f1_AB;
    private boolean[] a_f2_AZ;
    private boolean[] b_f1_AZ;
    private byte[] d_f0_AB;
    private cl a_f3_Lcl_;
    private o a_f4_Lo_;
    private boolean d_f1_Z;
    private boolean e_f0_Z;
    public byte g_f0_B;
    private byte[] Q;
    private byte k_f0_B;
    private byte l_f0_B;
    private byte m_f0_B;
    private byte n_f0_B;
    private int[] a_f5_AI;
    private int[] b_f2_AI;
    private short[] a_f6_AS;
    private int[] c_f1_AI;
    private byte[] R;
    private short c_f2_S;
    private byte o_f0_B;
    private int k_f1_I;
    private int l_f1_I;
    public int a_f7_I;
    private byte p_f0_B;
    private byte v;
    short a_f8_S;
    public short b_f3_S;
    private bm[] a_f9_ALbm_;
    private byte w = 0;
    private byte x;
    private boolean f_f0_Z = false;
    private byte y = (byte)-1;
    public int b_f4_I = -1;
    private int m_f1_I = -1;
    private boolean g_f1_Z = false;
    private boolean h_f0_Z = false;
    public int e_f1_I = -1;
    public boolean a_f10_Z = false;
    public int f_f1_I = -1;
    public boolean b_f5_Z = false;
    private int n_f1_I = 0;
    public int j_f1_I = 0;
    public static byte h_f1_B = (byte)-1;
    private int o_f1_I;
    private byte z = 0;
    private boolean i_f1_Z = true;
    private static int p_f1_I = 5;
    private int q = 0;
    public static long a_f11_J = 0L;
    public static boolean c_f3_Z = false;
    private byte A = 0;
    private Vector c_f4_Ljava_util_Vector_;

    private do(short s2, short s3, byte by2, byte by3) {
        super((short)0, (short)0, (byte)8, (byte)9);
    }

    public static do a_m0_PBRLdo_(byte by2) {
        int n2;
        int n3;
        do do_;
        do do_2 = do_ = new do(0, 0, 8, 9);
        do_.n_f0_B = 1;
        do_2.b_f3_S = 0;
        do_2.a_f8_S = 0;
        do_2.b_f0_AB = rpg.e.a_m6_PLjava_lang_String_RAB("/hero/hsd2");
        do_2.a_f9_ALbm_ = new bm[7];
        do_2.a_f6_AS = new short[4];
        do_2.c_f1_AI = new int[4];
        do_2.R = new byte[6];
        do_2.a_f5_AI = new int[4];
        do_2.b_f2_AI = new int[4];
        bs.a_f0_AZ = new boolean[4];
        for (n3 = 0; n3 < 4; ++n3) {
            bs.a_f0_AZ[n3] = false;
        }
        do_2.v = (byte)100;
        do_2.p_f0_B = (byte)100;
        do_2.d_f0_AB = new byte[48];
        do_2.c_f0_AB = new byte[20];
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
        do_.m_m0_PBRV(by2);
        do_2 = do_;
        o o2 = new o(do_2);
        o2.a_m0_PRV();
        o2.f();
        for (n2 = 0; n2 < 2; ++n2) {
            o2.b_m3_PIRV(n2 + 2);
        }
        o2.d_m0_PRV();
        do_2.a_f4_Lo_ = o2;
        return do_;
    }

    private void m_m0_PBRV(byte by2) {
        cl cl2 = null;
        switch (by2) {
            case 0: {
                cl2 = new ab(this);
                break;
            }
            case 1: {
                cl2 = new cu(this);
                break;
            }
            case 2: {
                cl2 = new d(this);
                break;
            }
            case 3: {
                cl2 = new ad(this);
                break;
            }
            case 4: {
                cl2 = new ao(this);
                break;
            }
            case 5: {
                cl2 = new dr(this);
            }
        }
        cl2.b_m1_PBRV(by2);
        bq.h();
        this.a_f3_Lcl_ = cl2;
    }

    public final void e_m0_PBRV(byte by2) {
        for (byte by3 = 0; by3 < 2; by3 = (byte)(by3 + 1)) {
            di.a_m15_PBZRV(by3, true);
        }
        di.b_f4_B = by2;
        this.m_m0_PBRV(by2);
        this.a_m1_PZRV(false);
        rpg.e.d();
    }

    public final void a_m1_PZRV(boolean bl2) {
        int n2;
        int n3 = di.b_f4_B;
        do do_ = this;
        int n4 = n3;
        do do_2 = do_;
        int n5 = 0;
        for (n2 = 0; n2 < n4; ++n2) {
            n5 += 8;
        }
        if (do_2.d_f0_AB[n5] < 0) {
            do_2.d_f0_AB[n5] = 0;
        }
        if (!do.g_m5_PBRZ((byte)n4)) {
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
        for (n2 = 0; n2 < n4; n2 = (byte)(n2 + 1)) {
            n5 += do.g_m5_PBRZ((byte)n2) ? 4 : 2;
        }
        n2 = do.g_m5_PBRZ((byte)n4) ? 4 : 2;
        for (n4 = 0; n4 < n2; ++n4) {
            if (do_2.c_f0_AB[n5 + n4] >= 0) continue;
            do_2.c_f0_AB[n5 + n4] = 0;
        }
        do_.a_m6_PRV();
        di.j();
        this.J();
        this.a_f4_Lo_.c_m1_PRV();
        this.i_m1_PRV();
        if (bl2) {
            if (di.b_f4_B == 4 || di.b_f4_B == 5) {
                this.n_f0_B = (byte)40;
                this.a_f8_S = (short)(this.a_f8_S + 156);
                this.b_f3_S = (short)(this.b_f3_S + 20);
            }
            int n6 = 0;
            do do_3 = this;
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

    private void y() {
        for (int i2 = 0; i2 < 6; ++i2) {
            int n2 = i2 * 8 + 6;
            this.d_f0_AB[n2] = 3;
            this.d_f0_AB[n2 + 1] = 3;
        }
    }

    public final byte a_m2_PBRB(byte by2) {
        by2 = (byte)((di.b_f4_B << 3) + by2 - 4);
        return this.d_f0_AB[by2];
    }

    public final void a_m3_PBBRV(byte by2, byte by3) {
        int n2;
        byte by4 = by2 = (byte)((by2 << 3) + by3 - 4);
        this.d_f0_AB[by4] = (byte)(this.d_f0_AB[by4] + 1);
        by3 = by2;
        do do_ = this;
        int n3 = n2 = do.g_m5_PBRZ(di.b_f4_B) ? 6 : 2;
        if (by3 % 8 < n2 - 1 && do_.d_f0_AB[by3 + 1] == -1) {
            do_.d_f0_AB[by3 + 1] = 0;
        }
    }

    public final int c_m0_PBRI(byte by2) {
        return this.a_f3_Lcl_.c_m0_PBRI(by2);
    }

    private int a_m4_PBIZRI(byte by2, int n2, boolean bl2) {
        return this.a_f3_Lcl_.a_m5_PBIZRI(by2, n2, false);
    }

    public final void a_m5_PIRV(int n2) {
        int n3 = n2;
        this.c_f0_AB[n3] = (byte)(this.c_f0_AB[n3] + 1);
    }

    final void s_m0_PRV() {
        super.s();
        this.A();
    }

    final void b_m0_PZRV(boolean bl2) {
        this.r();
        this.A();
        if (bl2) {
            do do_ = this;
            do_.z();
            do_.s_m0_PRV();
            do do_2 = do_;
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

    private void z() {
        this.f_f0_Z = false;
        this.y = (byte)-1;
        this.g_f1_Z = false;
        this.h_f0_Z = false;
        this.a_f10_Z = false;
        this.b_f5_Z = false;
        this.n_f1_I = 0;
        this.f_f1_I = -1;
        this.d_f1_I = -1;
    }

    private void A() {
        this.Q = new byte[(di.b_f4_B == 5 ? 6 : 4) + 2];
        this.B();
        this.d_f1_Z = false;
        this.e_f0_Z = false;
        this.w = 0;
        this.x = 0;
        h_f1_B = (byte)-1;
        if (this.a_f4_Lo_ != null) {
            this.a_f4_Lo_.a_m1_PZRV(false);
        }
        do do_ = this;
        this.z = 0;
    }

    private final void B() {
        for (int i2 = 0; i2 < this.Q.length; ++i2) {
            this.Q[i2] = -1;
        }
        this.l_f0_B = (byte)-1;
    }

    public final void a_m6_PRV() {
        this.k_f0_B = this.a_f3_Lcl_.b_m4_PRB();
    }

    /*
     * Enabled aggressive block sorting
     */
    public final void b_m1_PIIRV(int n2, int n3) {
        block15: {
            if (a_f11_J > 0L) {
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
            n2 = n2 + this.h + ((du)this).q;
            n3 = n3 + this.i + this.r - 1;
            if (this.w == 1) {
                n2 += rpg.d.J[this.x] * 3;
                n3 += rpg.d.K[this.x] * 3;
                this.w = (byte)(this.w - 1);
            }
            this.b_m3_PIIZRV(n2, n3, false);
            cm cm2 = rpg.a.a_f3_Lcm_;
            cm2.a_m1_PLcg_IIIRV(rpg.e.e_f0_ALcg_[this.e_f0_Z ? 1 : 0], n2, n3 + 6, 33);
            switch (this.b_f1_B) {
                case 3: {
                    if (this.l_f0_B < 0) break;
                    this.b_m2_PIIIRV(this.Q[this.l_f0_B] + 6, n2, n3);
                    break block15;
                }
                case 2: {
                    this.b_m2_PIIIRV(this.j_f0_B, n2, n3);
                    break block15;
                }
                case 7: {
                    this.c_f1_I = 8;
                }
                case 6: {
                    do.a_m7_PIIIRV(n2, n3, this.c_f1_I);
                    break block15;
                }
                case 9: {
                    this.b_m2_PIIIRV(7, n2, n3);
                    break block15;
                }
                case 10: {
                    this.b_m2_PIIIRV(5, n2, n3);
                    break block15;
                }
                case 99: {
                    this.b_m2_PIIIRV(this.i_f0_B, n2, n3);
                    break block15;
                }
            }
            this.b_m2_PIIIRV(this.a_f0_B, n2, n3);
        }
        this.b_m3_PIIZRV(n2, n3, true);
        this.d_m2_PIIRV(n2, n3);
    }

    private final void b_m2_PIIIRV(int n2, int n3, int n4) {
        this.c_f1_I = rpg.e.a_f2_Lca_.a_m2_PBBIIIRI((byte)n2, this.c_f0_B, this.c_f1_I, n3, n4);
    }

    public static void a_m7_PIIIRV(int n2, int n3, int n4) {
        rpg.e.a_f2_Lca_.a_m2_PBBIIIRI((byte)4, (byte)1, n4, n2, n3);
    }

    final void c_m1_PRV() {
        byte by2;
        int n2;
        super.c_m2_PRV();
        if (a_f11_J > 0L) {
            c_f3_Z = true;
        }
        ++this.c_f1_I;
        if (di.d_f3_B == 3) {
            if (this.m_f0_B > 0) {
                this.m_f0_B = (byte)(this.m_f0_B - 1);
            }
            if (this.f_f1_I > 0) {
                --this.f_f1_I;
            }
            do do_ = this;
            switch (do_.b_f1_B) {
                case 1: {
                    do_.p_f0_B = (byte)(do_.p_f0_B - 2);
                    do_.v = (byte)(do_.v - 2);
                    break;
                }
                case 2: {
                    do_.p_f0_B = (byte)(do_.p_f0_B - 1);
                    do_.v = (byte)(do_.v - 1);
                }
            }
            if (do_.p_f0_B <= 0) {
                do_.c_m5_PIRV(do_.o_f1_I);
                do_.p_f0_B = (byte)100;
            }
            if (do_.v <= 0) {
                n2 = do_.o_f1_I;
                do do_2 = do_;
                do_2.c_m6_PBIRV((byte)1, n2);
                do_.v = (byte)100;
            }
            for (by2 = 0; by2 < 5; by2 = (byte)(by2 + 1)) {
                if (di.a_f11_AI[by2] < 0) continue;
                byte by3 = by2;
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
        byte by4 = this.b_f1_B;
        if (this.d_m1_PRZ()) {
            this.d_f1_Z = false;
        }
        by2 = by4;
        do do_ = this;
        n2 = 0;
        if (do_.b_f1_B != 3 && !do_.d_f1_Z) {
            n2 = df.a_m7_PLdo_RZ(do_) ? 1 : 0;
            do_.d_f1_Z = true;
        }
        if (n2 == 0 && by2 == 2 && do_.b_f1_B == 1) {
            n2 = df.d_m1_PRZ() ? 1 : 0;
        }
        if (n2 != 0) {
            do_.a_m0_PBRV((byte)1);
            do_.e = 0;
            do_.c_f1_I = 0;
        }
    }

    public final void b_m3_PRV() {
        this.A = 1;
    }

    public final void d_m0_PRV() {
        a_f11_J = 5000L;
        this.A = (byte)2;
        int n2 = 0;
        do do_ = this;
        int n3 = do_.b_f2_AI[n2];
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

    /*
     * Enabled aggressive block sorting
     */
    private void C() {
        switch (this.b_f1_B) {
            case 2: {
                do do_ = this;
                this.z = 0;
                this.w();
                this.d_m0_PIRV(4);
                return;
            }
            case 3: {
                do do_ = this;
                if (do_.l_f0_B < 0) {
                    do_.l_f0_B = 0;
                }
                if (do_.Q[do_.l_f0_B] < 100 && do_.c_f1_I == do.a_m8_PIRB(6 + do_.Q[do_.l_f0_B])) {
                    if (do_.l_f0_B + 1 >= do_.k_f0_B && do_.Q[do_.l_f0_B + 1] < 4 || do_.Q[do_.l_f0_B + 1] == -1) {
                        do_.b_m4_PIRV(do_.l_f0_B);
                        return;
                    }
                    do_.l_f0_B = (byte)(do_.l_f0_B + 1);
                    do_.c_f1_I = 0;
                }
                int n2 = do_.Q[do_.l_f0_B];
                if (do_.c_f1_I <= 0) {
                    boolean bl2;
                    if (do_.z > 0 && n2 < 4) {
                        do_.b_m4_PIRV(do_.l_f0_B);
                        return;
                    }
                    if (n2 >= 100) {
                        n2 = (byte)(do_.Q[do_.l_f0_B] - 100);
                        if (do_.a_f4_Lo_.d_m2_PBRZ((byte)n2)) {
                            do_.B();
                            return;
                        }
                        do_.b_m4_PIRV(do_.l_f0_B);
                        return;
                    }
                    if (!do_.a_f3_Lcl_.a_m0_PBRZ((byte)n2)) {
                        do_.b_m4_PIRV(do_.l_f0_B);
                        do_.k_m2_PBRV((byte)6);
                        return;
                    }
                    int n3 = n2;
                    do do_2 = do_;
                    n3 = do_2.a_f3_Lcl_.b_m2_PBRI((byte)n3);
                    int n4 = 0;
                    do do_3 = do_2;
                    n3 = do_3.a_f2_AZ[n4] ? do_2.b_m12_PBIRI((byte)0, n3) : n3;
                    n4 = 1;
                    do_3 = do_2;
                    if (n3 > do_3.a_f5_AI[n4]) {
                        bl2 = false;
                    } else {
                        if (n3 > 0) {
                            n4 = -n3;
                            do_3 = do_2;
                            do_3.c_m6_PBIRV((byte)1, n4);
                        }
                        bl2 = true;
                    }
                    if (!bl2) {
                        do_.b_m4_PIRV(do_.l_f0_B);
                        do_.k_m2_PBRV((byte)2);
                        return;
                    }
                    di.b_m8_PBZRV((byte)n2, true);
                    if (do_.a_f3_Lcl_.b_m0_PBRZ((byte)n2)) {
                        do_.f_m1_PRV();
                    }
                }
                if (do_.a_f3_Lcl_.a_m1_PBIRZ((byte)n2, do_.c_f1_I)) return;
                bq.a_m2_PBRV((byte)11);
                return;
            }
            case 6: {
                if (this.c_f1_I < 8) return;
                this.a_m0_PBRV((byte)7);
                if (!df.e_m1_PRZ()) return;
                if (eb.f_f2_Z) {
                    bq.f();
                    di.a_m3_PBRV((byte)9);
                    return;
                }
                di.d_f3_B = (byte)5;
                ax.a_m0_PRLax_().a_m1_PRV();
                ax.a_m0_PRLax_().c((byte)3);
                ax.a_m0_PRLax_();
                bw.a_m4_PRV();
                return;
            }
            case 7: {
                if (this.A == 1) {
                    bq.f();
                    di.a_m3_PBRV((byte)9);
                    this.A = 0;
                    return;
                }
                if (this.A != 2) return;
                this.a_f5_AI[0] = this.b_f2_AI[0];
                this.a_m0_PBRV((byte)1);
                this.B();
                this.A = 0;
                return;
            }
            case 0: {
                do do_ = this;
                this.z = 0;
                return;
            }
            case 1: {
                this.e = 0;
                this.d_m0_PIRV(do.a_m8_PIRB(this.a_f0_B));
                return;
            }
            case 9: {
                if (this.c_f1_I < 4) return;
                byte by2 = this.z;
                this.z = 0;
                if (by2 > 0) {
                    di.b_m4_PBBRV((byte)2, by2);
                    di.c_m2_PBBRV((byte)0, (byte)0);
                    return;
                }
                this.D();
                return;
            }
            case 99: {
                this.d_m0_PIRV(do.a_m8_PIRB(this.i_f0_B));
                return;
            }
            case 10: {
                if (this.c_f1_I >= do.a_m8_PIRB(5)) {
                    this.a_f4_Lo_.e_m1_PRV();
                    this.D();
                    return;
                }
                if (this.c_f1_I != 0) return;
                bq.a_m2_PBRV((byte)0);
                return;
            }
        }
    }

    private void D() {
        byte by2 = di.c_f5_B;
        switch (by2) {
            case 1: 
            case 3: 
            case 9: 
            case 10: {
                this.a_m0_PBRV(by2);
                di.c_m2_PBBRV((byte)0, (byte)0);
                this.c_f1_I = 0;
                this.C();
                return;
            }
        }
        this.a_m0_PBRV((byte)1);
    }

    static byte a_m8_PIRB(int n2) {
        return rpg.e.a_f2_Lca_.a_m3_PBRB((byte)n2);
    }

    public final int d_m1_PBRI(byte by2) {
        int n2 = this.a_m33_PBIRI((byte)1, by2 = (byte)this.a_f3_Lcl_.a_m4_PBRI(by2));
        if (n2 > 0) {
            return n2;
        }
        return by2;
    }

    final void h_m0_PRV() {
        if (this.f_m0_PRZ()) {
            this.c_f1_I = 0;
            this.e_m1_PIRV(this.f);
        }
    }

    final boolean d_m2_PBRZ(byte by2) {
        if (this.m_f0_B > 0 || this.l_f0_B + 1 >= this.k_f0_B) {
            return false;
        }
        if (this.Q[this.l_f0_B + 1] < 4) {
            if (by2 > 0) {
                if (this.l_f0_B >= 0 && this.Q[this.l_f0_B] == by2) {
                    return false;
                }
                this.Q[this.l_f0_B + 1] = by2;
                return true;
            }
            do do_ = this;
            boolean bl2 = do_.b_f4_I > 0 ? (do_.l_f0_B >= 0 && do_.Q[do_.l_f0_B] >= 4 && do_.Q[do_.l_f0_B] < 6 ? false : do_.l_f0_B < 0 || do_.Q[do_.l_f0_B] < 11) : do_.l_f0_B < 0 || do_.Q[do_.l_f0_B] < 4;
            if (bl2) {
                switch (di.b_f4_B) {
                    case 3: {
                        this.Q[this.l_f0_B + 1] = 0;
                        break;
                    }
                    case 5: {
                        if (this.b_f4_I > 0) {
                            this.Q[this.l_f0_B + 1] = (byte)(this.l_f0_B + 1 + 6);
                            return true;
                        }
                    }
                    default: {
                        this.Q[this.l_f0_B + 1] = (byte)(this.l_f0_B + 1);
                    }
                }
                return true;
            }
        }
        return false;
    }

    public final void f_m0_PBRV(byte by2) {
        this.Q[this.l_f0_B + 1] = by2;
    }

    public final void b_m4_PIRV(int n2) {
        this.m_f0_B = n2 < 2 && this.Q[n2] <= 0 ? (byte)2 : (byte)4;
        n2 = this.z;
        if (di.b_f4_B == 3) {
            this.a_m0_PBRV((byte)9);
        } else if (n2 > 0) {
            do do_ = this;
            this.z = 0;
            di.b_m4_PBBRV((byte)2, (byte)n2);
            di.c_m2_PBBRV((byte)0, (byte)0);
        } else {
            this.a_m0_PBRV((byte)1);
        }
        this.c_f1_I = 0;
        this.B();
    }

    public final void g_m0_PBRV(byte by2) {
        this.z = by2;
    }

    public final void e_m1_PRV() {
        this.z = 0;
    }

    public final void f_m1_PRV() {
        this.c_m0_PBRV(this.b_m8_PRB());
    }

    public final int a_m9_PZRI(boolean bl2) {
        int n2 = (bl2 = bl2 ? this.l_f1_I : this.k_f1_I) ? 1 : 0;
        if (this.b_f5_Z) {
            return (bl2 << 2) / 5;
        }
        return bl2 ? 1 : 0;
    }

    public final int b_m5_PZRI(boolean bl2) {
        int n2;
        bm bm2 = bl2 ? this.a_m29_PBRLbm_((byte)5) : this.a_m29_PBRLbm_((byte)3);
        int n3 = this.a_m9_PZRI(bl2);
        if (bm2 != null) {
            n2 = n3 + (bm2.c_f0_S - bm2.b);
        }
        return n2;
    }

    /*
     * WARNING - void declaration
     */
    public final int c_m2_PZRI(boolean bl2) {
        void var1_6;
        int n2;
        bm bm2 = bl2 ? this.a_m29_PBRLbm_((byte)5) : this.a_m29_PBRLbm_((byte)3);
        int do_ = this.a_m9_PZRI(bl2);
        if (bm2 != null) {
            int n3 = rpg.g.a_m7_PIIRI(1, 100) + this.a_f4_Lo_.a_m11_PBRI((byte)4);
            if (n3 > 100) {
                n3 = 100;
            }
            n2 = do_ + (bm2.c_f0_S - bm2.b) * n3 / 100;
        }
        if (this.b_f4_I > 0) {
            int n4 = 3;
            do do_2 = this;
            void var1_5 = n2 + do_2.c_f1_AI[n4];
        }
        return (int)var1_6;
    }

    final boolean a_m10_PLcd_BIBBZZZRZ(cd cd2, byte by2, int n2, byte by3, byte by4, boolean bl2, boolean bl3, boolean bl4) {
        if (cd2 != null) {
            return cd2.a_m12_PLdo_BIZBBZZZRZ(this, by2, n2, bl2, by3, by4, bl3, true, bl4);
        }
        return false;
    }

    public final boolean a_m11_PBIBZZZRZ(byte by2, int n2, byte by3, boolean bl2, boolean bl3, boolean bl4) {
        cd cd2 = this.a_m16_PRLcd_();
        return this.a_m10_PLcd_BIBBZZZRZ(cd2, by2, n2, this.c_f0_B, by3, bl2, false, false);
    }

    public final boolean a_m12_PBIBZZRZ(byte by2, int n2, byte by3, boolean bl2, boolean bl3) {
        by2 = 0;
        byte by4 = this.c_f0_B;
        cd by42 = this.a_m12_PBRLcd_(by4);
        if (by42 != null) {
            by2 = this.a_m10_PLcd_BIBBZZZRZ(by42, (byte)7, n2, by4, by3, false, bl2, false) ? 1 : 0;
        }
        for (byte by5 = 1; by5 <= 3; by5 = (byte)(by5 + 1)) {
            if (this.a_m13_PBBBBIBZZRZ(by4, by4, by5, (byte)7, n2, by3, bl2, false)) {
                by2 = 1;
            }
            if (this.a_m13_PBBBBIBZZRZ(rpg.d.M[by4], by4, by5, (byte)7, n2, by3, bl2, false)) {
                by2 = 1;
            }
            if (!this.a_m13_PBBBBIBZZRZ(rpg.d.L[by4], by4, by5, (byte)7, n2, by3, bl2, false)) continue;
            by2 = 1;
        }
        return by2 != 0;
    }

    private boolean a_m13_PBBBBIBZZRZ(byte by2, byte by3, byte by4, byte by5, int n2, byte by6, boolean bl2, boolean bl3) {
        cd cd2 = this.a_m14_PBBIRLcd_(by2, by3, by4);
        if (cd2 != null) {
            return this.a_m10_PLcd_BIBBZZZRZ(cd2, by5, n2, by3, by6, bl3, bl2, false);
        }
        return false;
    }

    private cd a_m14_PBBIRLcd_(byte by2, byte by3, int n2) {
        du du2 = this.a_m1_PBBBRLdu_(by2, by3, (byte)n2);
        if (du2 != null && du2 instanceof cd) {
            return (cd)du2;
        }
        return null;
    }

    public final cd b_m6_PBRLcd_(byte by2) {
        du du2 = du.a_m2_PBBBBBRLdu_(this.s, this.t, by2, (byte)0, (byte)0);
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h)) {
            return (cd)du2;
        }
        return null;
    }

    public final boolean a_m15_PBIBRZ(byte by2, int n2, byte by3) {
        by2 = 0;
        for (byte by4 = 1; by4 <= 12; by4 = (byte)(by4 + 1)) {
            cd cd2 = this.b_m6_PBRLcd_(by4);
            if (cd2 == null || !this.a_m10_PLcd_BIBBZZZRZ(cd2, (byte)9, n2, by4, by3, false, false, false)) continue;
            by2 = 1;
        }
        return by2 != 0;
    }

    protected final cd a_m16_PRLcd_() {
        du du2 = this.a_m5_PBLdu_RLdu_(this.c_f0_B, null);
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h) && !((cd)du2).b_m1_PRZ()) {
            return (cd)du2;
        }
        return null;
    }

    private void a_m17_PLcd_RV(cd cd2) {
        if (cd2 != null) {
            this.c_f4_Ljava_util_Vector_.addElement(cd2);
        }
    }

    public final Vector b_m7_PBRLjava_util_Vector_(byte by2) {
        this.c_f4_Ljava_util_Vector_ = new Vector(0);
        switch (by2) {
            case 0: {
                this.a_m17_PLcd_RV(this.a_m16_PRLcd_());
                break;
            }
            case 1: {
                this.a_m17_PLcd_RV(this.a_m16_PRLcd_());
                this.a_m17_PLcd_RV(this.a_m12_PBRLcd_((byte)(this.c_f0_B + 8)));
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
                for (by2 = 0; by2 < 3; by2 = (byte)(by2 + 1)) {
                    this.a_m17_PLcd_RV(this.a_m14_PBBIRLcd_(rpg.d.O[this.c_f0_B], this.c_f0_B, by2 + 1));
                    this.a_m17_PLcd_RV(this.a_m14_PBBIRLcd_((byte)0, this.c_f0_B, by2 + 1));
                    this.a_m17_PLcd_RV(this.a_m14_PBBIRLcd_(rpg.d.N[this.c_f0_B], this.c_f0_B, by2 + 1));
                }
                break;
            }
        }
        return this.c_f4_Ljava_util_Vector_;
    }

    final byte b_m8_PRB() {
        cd cd2 = this.a_m16_PRLcd_();
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

    public final cd b_m9_PRLcd_() {
        cd cd2 = this.c_m3_PBRLcd_(this.c_f0_B);
        if (cd2 != null) {
            return cd2;
        }
        cd2 = this.c_m3_PBRLcd_(rpg.d.O[this.c_f0_B]);
        if (cd2 != null) {
            this.c_m0_PBRV(rpg.d.O[this.c_f0_B]);
            return cd2;
        }
        cd2 = this.c_m3_PBRLcd_(rpg.d.N[this.c_f0_B]);
        if (cd2 != null) {
            this.c_m0_PBRV(rpg.d.N[this.c_f0_B]);
            return cd2;
        }
        cd2 = this.c_m3_PBRLcd_(rpg.d.P[this.c_f0_B]);
        if (cd2 != null) {
            this.c_m0_PBRV(rpg.d.P[this.c_f0_B]);
            return cd2;
        }
        return cd2;
    }

    private cd c_m3_PBRLcd_(byte by2) {
        cd cd2 = this.a_m12_PBRLcd_(by2);
        if (cd2 == null) {
            for (int n2 = 0; n2 < 3 && (cd2 = this.a_m14_PBBIRLcd_(by2, by2, n2)) == null && (cd2 = this.a_m14_PBBIRLcd_(rpg.d.M[by2], by2, n2)) == null && (cd2 = this.a_m14_PBBIRLcd_(rpg.d.L[by2], by2, n2)) == null; n2 = (int)((byte)(n2 + 1))) {
            }
        }
        if (cd2 != null && cd2.b_m1_PRZ()) {
            return null;
        }
        return cd2;
    }

    public final void c_m4_PZRV(boolean bl2) {
        this.e_f0_Z = bl2;
    }

    public final boolean a_m18_PBBBIRZ(byte by2, byte by3, byte by4, int n2) {
        boolean bl2 = false;
        this.g_f0_B = (byte)this.a_m19_PBZBRI(by3, true, this.c_f0_B);
        if (this.g_f0_B > 0) {
            if (n2 > 0 || n2 == -1 || n2 == -100) {
                if (this.a_m11_PBIBZZZRZ(by2, n2, by4, false, false, false)) {
                    bl2 = true;
                }
                if (this.g_f0_B != 1) {
                    cd cd2;
                    byte by5 = by4;
                    by4 = this.c_f0_B;
                    by3 = by2;
                    do do_ = this;
                    cd cd3 = do_.a_m12_PBRLcd_((byte)(by4 + 8));
                    if (cd3 != null && (cd2 = do_.a_m12_PBRLcd_(by4)) != cd3 ? do_.a_m10_PLcd_BIBBZZZRZ(cd3, by3, n2, do_.c_f0_B, by5, false, false, false) : false) {
                        bl2 = true;
                    }
                }
            }
            this.e_m1_PIRV(16 * this.g_f0_B);
        } else if (this.a_m11_PBIBZZZRZ(by2, n2, by4, false, false, false)) {
            bl2 = true;
            this.g_f0_B = 0;
        }
        return bl2;
    }

    public final boolean e_m2_PBRZ(byte by2) {
        this.g_f0_B = (byte)this.a_m19_PBZBRI((byte)3, false, this.c_f0_B);
        if (this.g_f0_B > 0) {
            this.e_m1_PIRV(16 * this.g_f0_B);
        }
        return this.g_f0_B != 3;
    }

    private int a_m19_PBZBRI(byte n2, boolean bl2, byte by2) {
        g g2 = di.a_f4_Lg_;
        int n3 = this.s;
        int n4 = this.t;
        int n5 = 0;
        for (int i2 = 1; i2 <= n2; ++i2) {
            if ((n3 += rpg.d.J[by2]) < 0 || (n4 += rpg.d.K[by2]) < 0 || n3 >= g.c_f3_B || n4 >= g.d_f2_B) continue;
            if (g2.a_m11_PLdu_IIRZ(this, n3, n4)) {
                if (bl2) continue;
                return n5;
            }
            if (g2.b_m2_PIIRZ(n3, n4) || g2.c_m3_PIIRZ(n3, n4)) {
                return n5;
            }
            n5 = i2;
        }
        return n5;
    }

    final void c_m5_PIRV(int n2) {
        if (n2 < 0) {
            n2 = au.e < 20 ? (n2 /= 2) : (n2 /= 3);
        }
        if (a_f11_J > 0L && n2 < 0) {
            n2 = 0;
        }
        this.c_m6_PBIRV((byte)0, bs.b_f1_Z ? 0 : n2);
        if (this.a_f5_AI[0] <= 0) {
            this.a_m0_PBRV((byte)6);
            this.c_f1_I = 0;
        }
    }

    final void h_m1_PIRV(int n2) {
        this.c_m6_PBIRV((byte)1, n2);
    }

    final void i_m0_PIRV(int n2) {
        this.c_m6_PBIRV((byte)3, n2);
    }

    private final void F() {
        int n2;
        int n3 = n2 = di.b_f4_B == 5 ? this.c_m0_PBRI((byte)10) : 2;
        do do_ = this;
        do_.c_m6_PBIRV((byte)3, n3);
    }

    public final void g_m1_PRV() {
        do do_ = this;
        if (do_.n_f0_B > 99 - p_f1_I) {
            this.n_f0_B = (byte)99;
            this.a_f8_S = (short)(this.a_f8_S + (short)(4 * (99 - this.n_f0_B)));
            this.b_f3_S = (short)(this.b_f3_S + 1 * (99 - this.n_f0_B >> 1));
        } else {
            this.n_f0_B = (byte)(this.n_f0_B + p_f1_I);
            this.a_f8_S = (short)(this.a_f8_S + (short)(4 * p_f1_I));
            this.b_f3_S = (short)(this.b_f3_S + 1 * (p_f1_I >> 1));
        }
        this.i_m1_PRV();
        int n2 = 0;
        do_ = this;
        int n3 = do_.b_f2_AI[n2];
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

    final void j_m0_PIRV(int n2) {
        if (ax.i_f0_Z || eb.f_f2_Z && this.n_f0_B < 20) {
            n2 <<= 1;
        }
        this.a_f5_AI[2] = this.a_f5_AI[2] + (n2 < 0 ? -n2 : n2);
        while (this.a_f5_AI[2] >= this.b_f2_AI[2]) {
            this.a_f5_AI[2] = this.a_f5_AI[2] - this.b_f2_AI[2];
            if (this.n_f0_B < 99) {
                this.n_f0_B = (byte)(this.n_f0_B + 1);
                this.i_m1_PRV();
                this.a_f8_S = (short)(this.a_f8_S + 4);
                if (this.n_f0_B % 2 == 0) {
                    this.b_f3_S = (short)(this.b_f3_S + 1);
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

    final void k_m0_PIRV(int n2) {
        n2 = this.b_f2_AI[0] * n2 / 100;
        this.c_m5_PIRV(n2);
    }

    private void r(int n2) {
        int n3 = n2 = this.b_f2_AI[1] * n2 / 100;
        do do_ = this;
        do_.c_m6_PBIRV((byte)1, n3);
    }

    private void c_m6_PBIRV(byte by2, int n2) {
        byte by3 = by2;
        this.a_f5_AI[by3] = this.a_f5_AI[by3] + n2;
        if (this.a_f5_AI[by2] > this.b_f2_AI[by2]) {
            this.a_f5_AI[by2] = this.b_f2_AI[by2];
        } else if (this.a_f5_AI[by2] < 0) {
            this.a_f5_AI[by2] = 0;
        }
        bs.a_f0_AZ[by2] = true;
    }

    public final void i_m1_PRV() {
        int n2;
        int n3;
        int n4;
        bm bm2;
        int n5;
        int n6;
        this.i_f1_Z = false;
        Object object = this;
        this.b_f1_AZ = new boolean[7];
        for (n6 = 0; n6 < 7; ++n6) {
            ((do)object).b_f1_AZ[n6] = false;
        }
        ((do)object).P();
        n6 = 0;
        if (((do)object).a_m40_PIRZ(2)) {
            ((do)object).s_m1_PIRV(2);
            n6 = 1;
            ((do)object).O();
        }
        int n7 = n6 = n6 != 0 ? 3 : 0;
        while (n6 < 6) {
            if (n6 != 2 && super.a_m40_PIRZ(n6)) {
                super.s_m1_PIRV(n6);
                break;
            }
            ++n6;
        }
        object = new int[4];
        n6 = 10 + (this.b_f1_AZ[0] ? 4 : 0);
        for (int i2 = 0; i2 < 4; ++i2) {
            object[i2] = n6 + this.a_f6_AS[i2];
        }
        bm[] bmArray = this.a_f9_ALbm_;
        for (n6 = 0; n6 < 7; ++n6) {
            if (bmArray[n6] == null) continue;
            for (n5 = 0; n5 < 4; ++n5) {
                Object object2 = object;
                int n8 = n5 + 0;
                object2[n8] = object2[n8] + bmArray[n6].a_m4_PIRI(n5 + 0);
                Object object3 = object;
                int n9 = n5 + 0;
                object3[n9] = object3[n9] + bmArray[n6].a_m4_PIRI(n5 + 10);
                Object object4 = object;
                int n10 = n5 + 0;
                object4[n10] = object4[n10] + bmArray[n6].a_m4_PIRI(15);
            }
        }
        this.c_f1_AI[0] = (int)(object[0] + this.a_m33_PBIRI((byte)3, (int)object[0]) + this.a_f4_Lo_.a_m12_PBIRI((byte)7, (int)object[0]));
        this.c_f1_AI[1] = (int)(object[1] + this.a_m33_PBIRI((byte)13, (int)object[1]) + this.a_f4_Lo_.a_m12_PBIRI((byte)7, (int)object[1]));
        this.c_f1_AI[2] = (int)(object[2] + this.a_m33_PBIRI((byte)8, (int)object[2]) + this.a_f4_Lo_.a_m12_PBIRI((byte)7, (int)object[2]));
        this.c_f1_AI[3] = (int)(object[3] + this.a_f4_Lo_.a_m12_PBIRI((byte)7, (int)object[3]));
        if (di.b_f4_B == 5) {
            this.c_f1_AI[3] = this.c_f1_AI[3] + this.a_m4_PBIZRI((byte)11, (int)object[3], false);
        }
        n5 = (bm2 = this.a_m29_PBRLbm_((byte)3)) != null ? 1 : 0;
        object = this.a_m29_PBRLbm_((byte)5);
        int n11 = object != null ? 1 : 0;
        int n12 = this.c_f1_AI[0] + this.c_f1_AI[1] / 4 + this.g_m2_PBRI((byte)6);
        switch (di.b_f4_B) {
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
        int n13 = bs.b_f1_Z ? 9999 : this.a_m33_PBIRI((byte)15, this.c_f1_AI[1]) + this.a_f4_Lo_.a_m11_PBRI((byte)1);
        this.k_f1_I = n12 + n13;
        this.l_f1_I = 0;
        switch (di.b_f4_B) {
            case 0: {
                if (n5 == 0) break;
                this.k_f1_I += this.a_m4_PBIZRI((byte)11, bm2.c_f0_S, false);
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
                this.l_f1_I = this.a_m4_PBIZRI((byte)11, n12, false) + n13 + ((bm)object).b;
                this.i_f1_Z = true;
            }
        }
        if (n5 != 0) {
            this.k_f1_I += bm2.b;
            this.i_f1_Z = true;
        }
        this.m_m2_PRV();
        int n14 = this.h_m3_PBRI((byte)1) + this.h_m3_PBRI((byte)4) + this.h_m3_PBRI((byte)6) + this.h_m3_PBRI((byte)0) + this.g_m2_PBRI((byte)7);
        if (di.b_f4_B == 2) {
            n14 += this.h_m3_PBRI((byte)5);
        } else if (di.b_f4_B == 0) {
            n14 += this.c_f1_AI[0] / 12;
        }
        this.a_f7_I = n14 + this.a_m33_PBIRI((byte)9, n14) + this.a_f4_Lo_.a_m11_PBRI((byte)0);
        this.G();
        this.H();
        byte by2 = (byte)(90 + this.g_m2_PBRI((byte)14));
        n14 = by2;
        if (by2 > 95) {
            n14 = 95;
        }
        this.a_m24_PBIZRV((byte)1, n14 += this.i_m3_PBRI((byte)2), false);
        this.a_m24_PBIZRV((byte)1, n14, true);
        this.c_f2_S = (short)(10 + this.c_f1_AI[2] / 10 + this.i_m3_PBRI((byte)10));
        this.o_f0_B = 0;
        if (di.b_f4_B == 2 && this.a_m29_PBRLbm_((byte)5) != null) {
            this.o_f0_B = (byte)(5 + this.c_f1_AI[0] / 5 + (this.h_m3_PBRI((byte)5) >> 1));
            if (this.o_f0_B > 75) {
                this.o_f0_B = (byte)75;
            }
            this.o_f0_B = (byte)(this.o_f0_B + (byte)this.c_m0_PBRI((byte)11));
        }
        n11 = n14 = this.n_f0_B * this.n_f0_B * this.n_f0_B - this.n_f0_B * this.n_f0_B + 80 * this.n_f0_B;
        int n15 = 2;
        do do_ = this;
        do_.b_f2_AI[n15] = n11;
        n11 = n4 = 5 * this.n_f0_B + 10 * this.c_f1_AI[3] + this.g_m2_PBRI((byte)4);
        n15 = 1;
        do do_2 = this;
        do_2.b_f2_AI[n15] = n11;
        int n16 = 10 * this.n_f0_B + 12 * this.c_f1_AI[2] + this.g_m2_PBRI((byte)9);
        n16 += this.a_f4_Lo_.a_m11_PBRI((byte)2);
        if (di.b_f4_B == 2) {
            n16 += this.c_f1_AI[2] / 5;
        }
        n11 = n16;
        n15 = 0;
        do do_3 = this;
        do_3.b_f2_AI[n15] = n11;
        n11 = n3 = 100 + this.i_m3_PBRI((byte)19);
        n15 = 3;
        do do_4 = this;
        do_4.b_f2_AI[n15] = n11;
        for (n2 = 0; n2 < 2; ++n2) {
            if (this.a_f5_AI[n2] <= this.b_f2_AI[n2]) continue;
            this.a_f5_AI[n2] = this.b_f2_AI[n2];
        }
        for (n2 = 0; n2 < 3; ++n2) {
            if (this.R[n2] <= 100) continue;
            this.R[n2] = 100;
        }
        this.o_f1_I = this.c_f1_AI[3] + this.a_f4_Lo_.a_m11_PBRI((byte)3);
        bs.c_f0_Z = true;
    }

    private void G() {
        bm bm2 = this.a_m29_PBRLbm_((byte)3);
        int n2 = bm2 != null ? 1 : 0;
        bm bm3 = this.a_m29_PBRLbm_((byte)5);
        boolean bl2 = bm3 != null;
        int n3 = (this.c_f1_AI[1] >> 3) + this.g_m2_PBRI((byte)5);
        if (di.b_f4_B == 3) {
            n3 += this.c_f1_AI[1] >> 4;
        }
        if (n3 > 50) {
            n3 = 50;
        }
        int n4 = (n3 += this.i_m3_PBRI((byte)5)) + (n2 != 0 ? bm2.h : (byte)0);
        n2 = n3 + (bl2 ? bm3.h : (byte)0);
        if (n4 > 70) {
            n4 = 70;
        }
        if (n2 > 70) {
            n2 = 70;
        }
        if (this.g_f1_Z) {
            n3 = this.a_f4_Lo_.b_m5_PBRI((byte)1);
            n4 += n3;
            n2 += n3;
        }
        this.a_m24_PBIZRV((byte)2, n4, false);
        this.a_m24_PBIZRV((byte)2, n2, true);
    }

    private void H() {
        int n2 = this.c_f1_AI[1] / 5 + this.g_m2_PBRI((byte)8);
        if (di.b_f4_B == 1) {
            n2 += this.c_f1_AI[1] / 10;
        } else if (di.b_f4_B == 2) {
            n2 -= this.c_f1_AI[1] / 10;
        }
        if (n2 > 75) {
            n2 = 75;
        }
        if ((n2 += this.i_m3_PBRI((byte)4)) > 80) {
            n2 = 80;
        }
        if (this.h_f0_Z) {
            n2 += this.a_f4_Lo_.b_m5_PBRI((byte)2);
        }
        if (n2 > 85) {
            n2 = 85;
        }
        this.a_m24_PBIZRV((byte)0, n2, false);
        this.a_m24_PBIZRV((byte)0, n2, true);
    }

    final boolean a_m20_PLal_IBRZ(al al2, int n2, byte by2) {
        boolean bl2;
        int n3;
        if (this.b_f1_B == 7 || this.b_f1_B == 6) {
            return false;
        }
        if (al2 instanceof cd) {
            bs.a_m10_PLcd_ZRV((cd)al2, true);
        }
        if (di.b_f4_B == 2) {
            if (this.y > 1) {
                this.a_m1_PLat_RV(new ak(19));
                if ((n2 *= this.y / 10) <= 0) {
                    n2 = 5;
                }
            }
            if (this.f_f0_Z) {
                n3 = this.a_m4_PBIZRI((byte)7, this.a_m9_PZRI(true), false);
                this.a_m1_PLat_RV(new ak(18));
                al2.a_m13_PLal_IBBRV(this, n3, (byte)0, (byte)3);
            }
            if (this.o_f0_B > 0 && rpg.g.a_m7_PIIRI(1, 100) > 100 - this.o_f0_B) {
                this.a_m1_PLat_RV(new z(-3));
                return false;
            }
        }
        if ((n3 = n2 * (rpg.g.a_m7_PIIRI(0, 2) + 10) / 10 - this.b_m11_PRI()) <= 0) {
            n3 = 5;
        }
        al al3 = this;
        n2 = al2.a_m9_PBRI((byte)1) / 8 + al2.a_m8_PRB() - al3.n_f0_B;
        al2 = this;
        int n4 = n2;
        byte by3 = 14;
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
        this.a_m1_PLat_RV(new bu(bl2 ? (byte)3 : 4));
        this.w = 1;
        this.x = by2;
        return true;
    }

    protected final void a_m21_PLal_IBBRV(al al2, int n2, byte by2, byte by3) {
        this.c_m5_PIRV(-n2);
        this.a_m1_PLat_RV(new z(-4, -1, n2));
        this.a_m1_PLat_RV(new bu(2));
    }

    public final void h_m2_PBRV(byte by2) {
        byte by3 = by2;
        this.a_f6_AS[by3] = (short)(this.a_f6_AS[by3] + 1);
    }

    public final int a_m22_PBRI(byte by2) {
        return this.c_f1_AI[by2];
    }

    public final void a_m23_PBIRV(byte by2, int n2) {
        this.a_f5_AI[by2] = n2;
    }

    public final int e_m3_PBRI(byte by2) {
        return this.a_f5_AI[by2];
    }

    public final int c_m7_PRI() {
        return this.a_f5_AI[3];
    }

    public final int f_m2_PBRI(byte by2) {
        return this.b_f2_AI[by2];
    }

    public final int b_m10_PBRI(byte by2) {
        return this.R[by2];
    }

    private final void a_m24_PBIZRV(byte by2, int n2, boolean bl2) {
        this.R[by2 + (bl2 ? 3 : 0)] = (byte)n2;
    }

    public final int a_m25_PRI() {
        int n2 = 0;
        do do_ = this;
        return do_.R[n2];
    }

    public final int a_m26_PBZRI(byte by2, boolean bl2) {
        byte by3;
        if (bl2) {
            int do_ = 2;
            do n4 = this;
            by3 = n4.R[5];
        } else {
            int n2 = 2;
            do do_ = this;
            by3 = do_.R[n2];
        }
        byte by4 = by3;
        int n3 = by3 + (this.n_f0_B - by2);
        if (n3 > 90) {
            return 90;
        }
        return n3;
    }

    public final int a_m27_PIRI(int n2) {
        int n3 = 6;
        do do_ = this;
        if (do_.a_f2_AZ[n3]) {
            return n2 + this.b_m12_PBIRI((byte)6, n2);
        }
        return n2;
    }

    public final int b_m11_PRI() {
        if (this.b_f5_Z) {
            return (this.a_f7_I << 2) / 5;
        }
        return this.a_f7_I;
    }

    public final void i_m2_PBRV(byte by2) {
        cd cd2 = this.a_m12_PBRLcd_(by2);
        if (cd2 != null) {
            cd2.b_m4_PBRV(by2);
        }
    }

    final void j_m1_PRV() {
        bj bj2 = di.a_m12_PRLbj_();
        int n2 = 0;
        int n3 = bj2.a_m0_PRI();
        for (int n4 = 0; n4 < n3; n4 = (int)((byte)(n4 + 1))) {
            as as2 = bj2.a_m1_PIRLas_(n4);
            if (!(as2 instanceof bm) || ((bm)as2).i < 0) continue;
            this.a_f9_ALbm_[((bm)as2).i] = (bm)as2;
            byte by2 = (byte)(n2 + 1);
            n2 = by2;
            if (by2 == 7) break;
        }
    }

    private int g_m2_PBRI(byte by2) {
        int n2 = 0;
        bm[] bmArray = this.a_f9_ALbm_;
        for (int i2 = 0; i2 < 7; ++i2) {
            if (bmArray[i2] == null) continue;
            n2 += bmArray[i2].a_m4_PIRI(by2);
        }
        return n2;
    }

    public final byte a_m28_PRB() {
        return this.n_f0_B;
    }

    private int h_m3_PBRI(byte by2) {
        if (this.a_f9_ALbm_[by2] != null) {
            return this.a_f9_ALbm_[by2].d_f1_S;
        }
        return 0;
    }

    public final bm a_m29_PBRLbm_(byte by2) {
        if (by2 < 0) {
            return null;
        }
        return this.a_f9_ALbm_[by2];
    }

    public final void a_m30_PBLbm_RV(byte by2, bm bm2) {
        if (bm2 != null) {
            this.j_m2_PBRV(by2);
            this.a_f9_ALbm_[by2] = bm2;
            bm2.i = by2;
        }
    }

    public final void j_m2_PBRV(byte by2) {
        bm bm2 = this.a_m29_PBRLbm_(by2);
        if (bm2 != null) {
            this.a_m31_PLbm_RV(bm2);
        }
    }

    public final void a_m31_PLbm_RV(bm bm2) {
        if (bm2 != null && bm2.i >= 0) {
            this.a_f9_ALbm_[bm2.i] = null;
            bm2.i = (byte)-1;
        }
    }

    public final boolean a_m32_PLal_RZ(al al2) {
        do do_ = this;
        int n2 = 1;
        do do_2 = do_;
        do_2 = this;
        int n3 = do_.R[n2] + do_2.n_f0_B - al2.a_m8_PRB() - al2.a_m9_PBRI((byte)1) / 5;
        if (this.b_f1_AZ[4]) {
            n3 += n3 * 5 / 100;
        }
        return (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 100 < n3;
    }

    private int i_m3_PBRI(byte by2) {
        byte by3 = by2;
        do do_ = this;
        if (do_.a_f2_AZ[by3]) {
            by3 = by2;
            do_ = this;
            return do_.b_m12_PBIRI(by3, 1);
        }
        return 0;
    }

    private int a_m33_PBIRI(byte by2, int n2) {
        byte by3 = by2;
        do do_ = this;
        if (do_.a_f2_AZ[by3]) {
            return this.b_m12_PBIRI(by2, n2);
        }
        return 0;
    }

    private int b_m12_PBIRI(byte by2, int n2) {
        int n3 = by2 * 3;
        by2 = (byte)(this.c_f0_AB[by2] + this.a_f4_Lo_.a_m11_PBRI((byte)5));
        return n2 * (this.b_f0_AB[n3] + this.b_f0_AB[n3 + 1] * by2) / this.b_f0_AB[n3 + 2];
    }

    public final byte b_m13_PBRB(byte by2) {
        return this.c_f0_AB[by2];
    }

    public final void a_m34_PIBRV(int n2, byte by2) {
        for (int i2 = 0; i2 < 4; ++i2) {
            if (this.a_f1_AB[i2] != by2) continue;
            this.a_f1_AB[i2] = -1;
        }
        this.l_m0_PIRV(n2);
        this.a_f1_AB[n2] = by2;
        this.a_f2_AZ[by2] = true;
        if (by2 == 1) {
            di.j();
        }
    }

    public final void l_m0_PIRV(int n2) {
        byte by2 = this.a_f1_AB[n2];
        if (by2 >= 0) {
            this.a_f2_AZ[by2] = false;
        }
        this.a_f1_AB[n2] = -1;
    }

    private void I() {
        this.a_f1_AB = new byte[4];
        for (int i2 = 0; i2 < 4; ++i2) {
            this.a_f1_AB[i2] = -1;
        }
    }

    public final boolean f_m3_PBRZ(byte by2) {
        return this.a_f2_AZ[by2];
    }

    private void J() {
        int n2;
        this.a_f2_AZ = new boolean[20];
        for (n2 = 0; n2 < 20; ++n2) {
            this.a_f2_AZ[n2] = false;
        }
        for (n2 = 0; n2 < 4; ++n2) {
            if (this.a_f1_AB[n2] < 0) continue;
            this.a_f2_AZ[this.a_f1_AB[n2]] = true;
        }
    }

    public final void k_m1_PRV() {
        this.b_m0_PBIRV((byte)20, 100);
        this.f_f0_Z = true;
    }

    public final void b_m14_PBBRV(byte by2, byte by3) {
        this.b_m0_PBIRV((byte)21, 80);
        this.y = by3;
    }

    private void d_m3_PBIRV(byte by2, int n2) {
        if (this.b_m1_PBRZ(by2)) {
            this.b_f0_Ljava_util_Vector_.addElement(new dn(by2, 10, -1));
        }
    }

    protected final void b_m15_PLat_RV(at at2) {
        switch (at2.a_f0_B) {
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

    protected final void c_m8_PLat_RV(at at2) {
        switch (at2.a_f0_B) {
            case 20: {
                this.f_f0_Z = false;
                return;
            }
            case 21: {
                this.y = (byte)-1;
                return;
            }
            case 31: {
                int n2 = this.a_f4_Lo_.c_m3_PBRI((byte)1);
                this.a_m2_PBBIRV((byte)32, (byte)1, n2);
                this.g_f1_Z = true;
                return;
            }
            case 32: {
                this.g_f1_Z = false;
                this.G();
                return;
            }
            case 33: {
                int n3 = this.a_f4_Lo_.c_m3_PBRI((byte)2);
                this.a_m2_PBBIRV((byte)34, (byte)2, n3);
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

    private boolean h_m4_PBRZ(byte by2) {
        int n2;
        for (int i2 = n2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            at at2 = (at)this.b_f0_Ljava_util_Vector_.elementAt(i2);
            if (at2.a_f0_B != by2) continue;
            this.c_m8_PLat_RV(at2);
            this.b_f0_Ljava_util_Vector_.removeElementAt(i2);
        }
        return false;
    }

    public final boolean a_m35_PZRZ(boolean bl2) {
        block13: {
            if (this.b_f1_B == 7 || this.b_f1_B == 6) {
                return false;
            }
            if (di.a_f11_AI[4] > 0) {
                return true;
            }
            Object object = di.a_m14_PZRLas_(bl2);
            if (object == null) {
                return false;
            }
            as as2 = object;
            object = this;
            if (as2 != null && as2.a_f1_B == 20) {
                int n2 = as2.b_f0_B;
                switch (n2) {
                    case 2: {
                        ((do)object).c_m5_PIRV(100);
                        break;
                    }
                    case 8: {
                        n2 = 300;
                        super.c_m6_PBIRV((byte)1, n2);
                        break;
                    }
                    case 4: {
                        super.h_m4_PBRZ((byte)7);
                        break;
                    }
                    case 5: {
                        super.h_m4_PBRZ((byte)6);
                        break;
                    }
                    case 6: {
                        ((do)object).c_m5_PIRV(600);
                        break;
                    }
                    case 7: {
                        ((do)object).c_m5_PIRV(1000);
                    }
                    case 3: {
                        n2 = 80;
                        super.c_m6_PBIRV((byte)1, n2);
                        break;
                    }
                    default: {
                        break block13;
                    }
                }
                object = di.a_m11_PBRLbj_(as2.a_f1_B);
                int n3 = ((bj)object).a_m2_PLas_RI(as2);
                ((bj)object).a_m6_PIIRV(n3, 1);
                di.i();
            }
        }
        return true;
    }

    public final void l_m1_PRV() {
        byte by2 = di.b_f4_B;
        do do_ = this;
        bj bj2 = di.a_m11_PBRLbj_((byte)20);
        bj2.a_m5_PLas_IRI(as.a_m0_PBBRLas_((byte)20, (byte)2), 5);
        di.a_m13_PZBRV(true, (byte)2);
        byte by3 = di.a_m17_PRZ() ? (byte)13 : 12;
        Object object = (bm)as.a_m0_PBBRLas_(by3, (byte)0);
        di.a_m12_PRLbj_().a_m5_PLas_IRI((as)object, 1);
        do_.a_m30_PBLbm_RV((byte)4, (bm)object);
        byte[] byArray = new byte[]{1, 4, 2, 5, 6, 4};
        object = byArray;
        object = (bm)as.a_m0_PBBRLas_(byArray[by2], (byte)0);
        di.a_m12_PRLbj_().a_m5_PLas_IRI((as)object, 1);
        do_.a_m30_PBLbm_RV((byte)3, (bm)object);
        byte[] byArray2 = new byte[]{-1, 4, 7, 5, -1, -1};
        object = byArray2;
        by2 = byArray2[by2];
        if (by2 >= 0) {
            object = (bm)as.a_m0_PBBRLas_(by2, (byte)0);
            di.a_m12_PRLbj_().a_m5_PLas_IRI((as)object, 1);
            do_.a_m30_PBLbm_RV((byte)5, (bm)object);
        }
        this.j_m1_PRV();
    }

    public final void m_m1_PIRV(int n2) {
        byte by2 = this.c_f0_B;
        if (by2 == 1 || by2 == 2) {
            di.a_f4_Lg_.c_m4_PIIRV(n2, by2);
            return;
        }
        di.a_f4_Lg_.b_m4_PIIRV(n2, by2);
    }

    public final void m_m2_PRV() {
        int n2;
        do do_;
        if (!g.c_f5_Z || !this.i_f1_Z) {
            this.a_f0_B = 1;
            do_ = this;
            n2 = 3;
        } else {
            this.a_f0_B = (byte)(this.b_f4_I > 0 ? 8 : 0);
            do_ = this;
            n2 = this.b_f4_I > 0 ? 9 : 2;
        }
        do_.j_f0_B = (byte)n2;
    }

    public final void n_m0_PIRV(int n2) {
        this.b_f4_I = n2;
        if (this.b_f1_AZ[6]) {
            this.b_f4_I += n2 * 50 / 100;
        }
        this.O();
        this.a_f0_B = (byte)8;
        this.j_f0_B = (byte)9;
        this.a_m6_PRV();
        rpg.e.a_f2_Lca_.a_m1_PZRV(true);
        this.N();
        this.a_m1_PLat_RV(new bu(9));
    }

    private void K() {
        this.b_f4_I = -1;
        this.P();
        this.a_f0_B = g.c_f5_Z ? (byte)0 : 1;
        this.j_f0_B = (byte)(g.c_f5_Z ? 2 : 3);
        this.a_m6_PRV();
        rpg.e.a_f2_Lca_.a_m1_PZRV(false);
        if (this.m_f1_I > 0) {
            this.M();
            rpg.e.a_f2_Lca_.a_m1_PZRV(true);
            return;
        }
        this.a_m1_PLat_RV(new bu(10));
    }

    public final void n_m1_PRV() {
        this.a_f4_Lo_.e_m1_PRV();
        if (this.b_f4_I > 0) {
            return;
        }
        this.M();
        rpg.e.a_f2_Lca_.a_m1_PZRV(true);
    }

    private void L() {
        this.N();
        if (this.b_f4_I > 0) {
            return;
        }
        rpg.e.a_f2_Lca_.a_m1_PZRV(false);
    }

    public final void o_m0_PIRV(int n2) {
        if (this.m_f1_I < n2) {
            this.m_f1_I = n2;
        }
    }

    private void M() {
        this.a_m3_PBRZ((byte)9);
        this.d_m3_PBIRV((byte)45, -1);
        this.d_m3_PBIRV((byte)46, -1);
    }

    private void N() {
        this.a_m3_PBRZ((byte)10);
        this.h_m4_PBRZ((byte)45);
        this.h_m4_PBRZ((byte)46);
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    public final byte[] a_m36_PRAB() {
        byte[] byArray;
        ByteArrayOutputStream byteArrayOutputStream = null;
        FilterOutputStream filterOutputStream = null;
        try {
            int n2;
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = new DataOutputStream(byteArrayOutputStream);
            ((DataOutputStream)filterOutputStream).writeByte(this.n_f0_B);
            ((DataOutputStream)filterOutputStream).writeShort(this.a_f8_S);
            ((DataOutputStream)filterOutputStream).writeShort(this.b_f3_S);
            for (n2 = 0; n2 < 4; ++n2) {
                ((DataOutputStream)filterOutputStream).writeInt(this.a_f5_AI[n2]);
            }
            for (n2 = 0; n2 < 4; ++n2) {
                ((DataOutputStream)filterOutputStream).writeShort(this.a_f6_AS[n2]);
            }
            ((OutputStream)filterOutputStream).write(this.d_f0_AB);
            ((OutputStream)filterOutputStream).write(this.c_f0_AB);
            ((OutputStream)filterOutputStream).write(this.a_f1_AB);
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (IOException iOException) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) return null;
                byteArrayOutputStream.close();
                return null;
            }
            catch (IOException iOException2) {
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
            catch (IOException iOException) {}
            throw throwable;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            return byArray;
        }
        catch (IOException iOException) {}
        return byArray;
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    public final void a_m37_PABRV(byte[] byArray) {
        ByteArrayInputStream byteArrayInputStream = null;
        FilterInputStream filterInputStream = null;
        try {
            int n2;
            byteArrayInputStream = new ByteArrayInputStream(byArray);
            filterInputStream = new DataInputStream(byteArrayInputStream);
            this.n_f0_B = ((DataInputStream)filterInputStream).readByte();
            this.a_f8_S = ((DataInputStream)filterInputStream).readShort();
            this.b_f3_S = ((DataInputStream)filterInputStream).readShort();
            for (n2 = 0; n2 < 4; ++n2) {
                this.a_f5_AI[n2] = ((DataInputStream)filterInputStream).readInt();
            }
            for (n2 = 0; n2 < 4; ++n2) {
                this.a_f6_AS[n2] = ((DataInputStream)filterInputStream).readShort();
            }
            ((DataInputStream)filterInputStream).read(this.d_f0_AB);
            ((DataInputStream)filterInputStream).read(this.c_f0_AB);
            ((DataInputStream)filterInputStream).read(this.a_f1_AB);
            if (di.a_m20_PBRZ((byte)2)) {
                this.o_m1_PRV();
            }
            if (di.a_m20_PBRZ((byte)1)) {
                this.p_m0_PRV();
            }
        }
        catch (IOException iOException) {
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream == null) return;
                byteArrayInputStream.close();
                return;
            }
            catch (IOException iOException2) {
                return;
            }
        }
        catch (Throwable throwable) {
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream == null) throw throwable;
                byteArrayInputStream.close();
                throw throwable;
            }
            catch (IOException iOException) {}
            throw throwable;
        }
        try {
            filterInputStream.close();
            byteArrayInputStream.close();
            return;
        }
        catch (IOException iOException) {
            return;
        }
    }

    public final void o_m1_PRV() {
        int n2 = 0;
        for (int i2 = 0; i2 < 4; ++i2) {
            if (this.a_f6_AS[i2] <= 0) continue;
            n2 += this.a_f6_AS[i2];
            this.a_f6_AS[i2] = 0;
        }
        this.a_f8_S = (short)(this.a_f8_S + n2);
    }

    public final void p_m0_PRV() {
        byte by2;
        int n2 = 0;
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
        this.b_f3_S = (short)(this.b_f3_S + n2);
        this.b_f3_S = (short)(this.b_f3_S - 36);
        this.y();
        for (by2 = 0; by2 < 2; by2 = (byte)(by2 + 1)) {
            di.a_m15_PBZRV(by2, true);
        }
        this.I();
    }

    public final o a_m38_PRLo_() {
        return this.a_f4_Lo_;
    }

    public final void k_m2_PBRV(byte by2) {
        this.a_m1_PLat_RV(new z(-6, by2, 2));
    }

    public final void p_m1_PIRV(int n2) {
        int n3 = 0;
        int n4 = 0;
        do do_ = this;
        do_.a_f5_AI[n4] = n3;
        n3 = 0;
        n4 = 1;
        do_ = this;
        do_.a_f5_AI[n4] = n3;
        this.k_m0_PIRV(50);
        this.r(50);
        this.b_m0_PZRV(true);
        this.v();
        this.h = (short)(this.s << 4);
        this.i = (short)(this.t << 4);
        this.E();
        this.u();
        this.a_m0_PBRV((byte)1);
    }

    public final boolean a_m39_PRZ() {
        return this.a_f4_Lo_.a_m9_PRZ();
    }

    public final boolean h_m5_PRZ() {
        return Math.max(10, 60 - this.c_f2_S) < rpg.g.a_m7_PIIRI(0, 99);
    }

    public final boolean g_m3_PRZ() {
        byte by2 = 11;
        do do_ = this;
        if (do_.a_f2_AZ[by2]) {
            by2 = 11;
            do_ = this;
            int n2 = do_.b_m12_PBIRI(by2, 1);
            if (rpg.g.a_m7_PIIRI(1, 99) > 100 - n2) {
                return false;
            }
        }
        return true;
    }

    public final int b_m16_PIRI(int n2) {
        int n3 = n2;
        int n4 = 7;
        do do_ = this;
        if (do_.a_f2_AZ[n4]) {
            n3 = this.b_m12_PBIRI((byte)7, n2);
        }
        return n3;
    }

    public final void q_m0_PIRV(int n2) {
        int n3 = 0;
        int n4 = 0;
        if (this.a_f10_Z && n2 > 0) {
            n3 = this.a_f4_Lo_.a_m8_PIRI(n2);
        }
        if (this.b_f1_AZ[1] && n2 > 0) {
            n3 += n2 * 10 / 100;
        }
        int n5 = 16;
        do do_ = this;
        if (do_.a_f2_AZ[n5]) {
            n5 = 16;
            do_ = this;
            n4 = do_.b_m12_PBIRI((byte)n5, 1);
        }
        n5 = 17;
        do_ = this;
        if (do_.a_f2_AZ[n5]) {
            n5 = 17;
            do_ = this;
            n3 += do_.b_m12_PBIRI((byte)n5, 1);
        }
        if (this.b_f1_AZ[3] && n2 > 0) {
            n4 += n2 * 5 / 100;
        }
        if (n3 > 0) {
            this.c_m5_PIRV(n3);
        }
        if (n4 > 0) {
            n5 = n4;
            do_ = this;
            do_.c_m6_PBIRV((byte)1, n5);
        }
        this.F();
    }

    public final byte c_m9_PRB() {
        byte by2 = 0;
        byte by3 = 12;
        do do_ = this;
        if (do_.a_f2_AZ[by3] && rpg.g.a_m7_PIIRI(0, 99) < 25) {
            by3 = 12;
            do_ = this;
            by2 = (byte)(0 + do_.b_m12_PBIRI(by3, 1));
        }
        return by2;
    }

    public final int c_m10_PIRI(int n2) {
        int n3 = 18;
        do do_ = this;
        if (do_.a_f2_AZ[n3]) {
            return this.b_m12_PBIRI((byte)18, n2);
        }
        return n2;
    }

    public final void c_m11_PIIRV(int n2, int n3) {
        if (this.b_f1_B == 7 || this.b_f1_B == 6) {
            return;
        }
        if (this.b_m17_PRZ()) {
            return;
        }
        this.n_f1_I = this.b_f2_AI[0] / n3;
        this.a_m4_PBIRZ((byte)6, n2);
    }

    public final void g_m4_PIRV(int n2) {
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
            this.a_m4_PBIRZ((byte)7, n2);
            this.f_m1_PIRV(n2);
        }
    }

    private boolean b_m17_PRZ() {
        if (di.b_f4_B == 2 && this.y > 1) {
            this.a_m1_PLat_RV(new ak(19));
            return true;
        }
        return false;
    }

    private void O() {
        if (this.f <= 8) {
            this.f = (byte)(this.f << 1);
        }
    }

    private void P() {
        if (this.d_f1_I > 1) {
            this.f = (byte)4;
            return;
        }
        if (this.b_f1_AZ[2] || this.b_f4_I > 1) {
            this.f = (byte)16;
            return;
        }
        this.f = (byte)8;
    }

    private boolean a_m40_PIRZ(int n2) {
        int n3 = 0;
        for (byte by2 = 0; by2 < 7; by2 = (byte)(by2 + 1)) {
            bm bm2 = this.a_m29_PBRLbm_(by2);
            if (bm2 == null || bm2.f != n2) continue;
            ++n3;
        }
        return n3 > 2;
    }

    private void s_m1_PIRV(int n2) {
        switch (n2) {
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

    public final void l_m2_PBRV(byte by2) {
        this.i_f0_B = by2;
        this.a_m0_PBRV((byte)99);
    }

    public static boolean g_m5_PBRZ(byte by2) {
        return by2 < 4;
    }

    protected final void x() {
        if (this.d_f1_I == 0 && !this.j && !this.k) {
            this.d_f1_I = -1;
            this.P();
        }
    }

    public final void q_m1_PRV() {
        if (di.c_m9_PRZ() || this.b_f1_B == 3) {
            this.b_m4_PIRV(0);
            this.m_f0_B = 0;
            this.a_f4_Lo_.a_m1_PZRV(false);
        }
        di.e_m0_PRV();
    }
}

