/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.c;
import rpg.d;
import rpg.f;

public final class ax
extends l {
    private static ax a_f0_Lax_;
    public static ch a_f1_Lch_;
    public static byte f_f0_B;
    public static ch b;
    public static ch c;
    public static boolean e;
    public static boolean f_f1_Z;
    public static boolean g_f0_Z;
    public static boolean h_f0_Z;
    public static boolean i_f0_Z;
    public static boolean j;
    public static byte g_f1_B;
    public static byte h_f1_B;
    public static byte i_f1_B;
    public static boolean k;

    public static ax a_m0_PRLax_() {
        if (a_f0_Lax_ == null) {
            a_f0_Lax_ = new ax();
        }
        return a_f0_Lax_;
    }

    public ax() {
        super(null, (byte)8);
        if (eb.f_f2_Z && this.a_f2_B == -1) {
            this.a_f2_B = 0;
        }
    }

    public final void a_m1_PRV() {
        if (a_f1_Lch_ == null) {
            a_f1_Lch_ = new ch("/t/gm");
        }
        e = di.h_f1_B > 0 || di.a_m9_PIRB(4) == 2;
        rpg.c.a_m0_PRLrpg_c_().h();
        f_f1_Z = false;
        g_f0_Z = false;
    }

    public final void c(byte by2) {
        switch (by2) {
            case 1: {
                this.a_f2_B = (byte)2;
                this.d((byte)2);
                f_f1_Z = false;
                g_f0_Z = false;
                return;
            }
            case 2: {
                this.a_f2_B = (byte)7;
                this.d((byte)7);
                ((dh)this.b_f1_Ln_).a_m1_PRZ();
                f_f1_Z = true;
                g_f0_Z = false;
                return;
            }
            case 3: {
                this.a_f2_B = (byte)-1;
                this.d((byte)-1);
                g_f0_Z = true;
            }
        }
    }

    public final void g() {
        this.a_f2_B = 0;
        a_f0_Lax_ = null;
        a_f1_Lch_ = null;
        if (b != null) {
            b = null;
        }
        if (c != null) {
            c = null;
        }
        dp.g();
        if (this.b_f1_Ln_ != null) {
            this.b_f1_Ln_ = null;
        }
        System.gc();
        Runtime.getRuntime().gc();
        rpg.c.a_m0_PRLrpg_c_().f();
        bs.c_f0_Z = true;
    }

    final boolean a_m2_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n3 >= 49 && n3 <= 56) {
            this.a_f2_B = n3 == 48 ? (byte)9 : (byte)(n3 - 49);
            this.d(this.a_f2_B);
        } else if (n.g(n2, n3)) {
            di.a_m2_PBBRV((byte)7, (byte)0);
        } else if (n.f_m0_PIIRZ(n2, 49)) {
            this.d(this.a_f2_B);
        } else if (this.c_m2_PIIRZ(n2, 49)) {
            if (eb.f_f2_Z && this.a_f2_B == -1) {
                this.c_m2_PIIRZ(n2, 49);
            } else if (!h_f0_Z && this.a_f2_B == -2) {
                this.c_m2_PIIRZ(n2, 49);
            }
        }
        return true;
    }

    private final void d(byte by2) {
        f_f0_B = by2;
        switch (by2) {
            case 0: {
                this.b_f1_Ln_ = new dc(this);
                return;
            }
            case 1: {
                this.b_f1_Ln_ = new cy(this, 0);
                return;
            }
            case 2: {
                this.b_f1_Ln_ = new dp(this);
                return;
            }
            case 3: {
                this.b_f1_Ln_ = new y(this);
                return;
            }
            case 4: {
                this.b_f1_Ln_ = new ce(this);
                return;
            }
            case 5: {
                this.b_f1_Ln_ = new ai(this);
                return;
            }
            case 7: {
                this.b_f1_Ln_ = new dh(this);
                return;
            }
            case 6: {
                di.a_m1_PBBBRV((byte)3, (byte)8, (byte)3);
                bs.e_f0_Z = true;
                return;
            }
            case -2: {
                this.b_f1_Ln_ = new cn(this);
                return;
            }
            case -1: {
                this.b_f1_Ln_ = new bw(this);
            }
        }
    }

    public final void e(cm cm2) {
        if (k) {
            k = false;
            di.a_f4_Lg_.c_m2_PRV();
        }
        this.d_m1_PLcm_RV(cm2);
    }

    protected final void a_m3_PLcm_RV(cm cm2) {
        if (f_f1_Z || g_f0_Z) {
            return;
        }
        if (a.a_f0_I > 120) {
            cm2.a_m2_PIRV(0);
            cm2.b_m0_PIIIIRV((a.a_f0_I - d.e_ >> 1) - 2, this.b_ - 2, d.e_ + 4, 178);
            cm2.a_m4_PIIIIRV((a.a_f0_I - d.e_ >> 1) - 2, this.b_ - 2, d.e_ + 4, 178);
        }
        cm2.b_m0_PIIIIRV(a.a_f0_I - d.e_ >> 1, this.b_, d.e_, 174);
        n.b_m4_PLcm_IIIIRV(cm2, a.a_f0_I - d.e_ >> 1, this.b_, d.e_ + 12, 174);
        int n2 = d.e_ - 9;
        int n3 = f.h >> 1;
        int n4 = a.a_f0_I - n2 >> 1;
        int n5 = this.b_ + 5 + 24;
        cm2.a_m2_PIRV(15723216);
        cm2.d_m0_PIIIIRV(n4 + 1, n5 + 1, n2, n3);
        cm2.a_m2_PIRV(0);
        cm2.d_m0_PIIIIRV(n4, n5, n2, n3);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, this.b_ + 3, a_f1_Lch_.a_m0_PIRAB(40), 0, 1);
        this.a_m3_PLcm_IIZRI(cm2, 0, f.h, true);
        n.a_m0_PLcm_IRV(cm2, 3);
    }

    static {
        e = false;
        f_f1_Z = false;
        g_f0_Z = false;
        h_f0_Z = false;
        i_f0_Z = false;
        j = false;
        g_f1_B = 0;
        h_f1_B = 0;
        i_f1_B = 0;
        k = false;
    }
}

