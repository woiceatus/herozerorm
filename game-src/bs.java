/*
 * Decompiled with CFR 0.152.
 */
import java.util.Random;
import rpg.RPGHeroEx;
import rpg.a;
import rpg.c;
import rpg.d;
import rpg.e;
import rpg.f;

public final class bs
extends a {
    private static byte b_f0_B = (byte)-1;
    public static boolean b_f1_Z = false;
    public static int j;
    public static int k;
    public static int l;
    public static int m;
    public static boolean c_f0_Z;
    public static boolean d_f0_Z;
    public static boolean[] a_f0_AZ;
    public static boolean e_f0_Z;
    private static bs a_f1_Lbs_;
    int n = 0;
    private static final byte c_f1_B;
    private static final byte d_f1_B;
    private static int o;
    private static cd a_f2_Lcd_;
    private static cg a_f3_Lcg_;
    private ch a_f4_Lch_;
    private int p;
    private byte e_f1_B;
    private boolean f_f0_Z = false;
    private int q = 0;
    private byte f_f1_B = (byte)2;
    private int[] a_f5_AI = new int[]{0, 0, 0, 0};
    private static boolean g;
    private final int[] b_f2_AI = new int[]{9700099, 0xFF0303, 16740355, 11862787};
    private final int[] c_f2_AI = new int[]{0xFFFF00};
    private final int[] d_f2_AI = new int[]{51968, 0x99F900, 51968};
    private final int[] e_f2_AI = new int[]{5747455, 3208959, 5747455};

    public bs() {
        j = a.a_f0_I;
        k = a.b_f0_I - 33;
        l = j - 16 >> 1;
        m = k >> 1;
        if (b_f0_B < 0) {
            b_f0_B = 1;
            try {
                String string = RPGHeroEx.a.getAppProperty("Cheat-Enable");
                if (string != null && string.trim().equals("true")) {
                    b_f0_B = 0;
                }
                return;
            }
            catch (Exception exception) {
                Exception exception2 = exception;
                exception.printStackTrace();
            }
        }
    }

    public static bs a_m0_PRLbs_() {
        if (a_f1_Lbs_ == null) {
            a_f1_Lbs_ = new bs();
        }
        return a_f1_Lbs_;
    }

    public final void a_m1_PRV() {
        this.f_f1_B = (byte)2;
    }

    public final void b() {
        bq.a_f1_J = 0L;
        if (di.d_f3_B == 2) {
            bq.a_m0_PRV();
        }
        this.a_m2_PIIRZ(1, 53);
        bs.a_m3_PRZ();
        a.a_f1_Z = true;
        c_f0_Z = true;
        e_f0_Z = true;
        a.e = 3;
        this.f_f1_B = (byte)2;
    }

    public static void e_m0_PLcm_RV(cm cm2) {
        if (a.a_f0_I > 240) {
            cm2.b_m0_PIIIIRV(di.a_f4_Lg_.d_f4_I, di.a_f4_Lg_.e_f2_I, Math.min(di.a_f4_Lg_.a_f10_S, j - di.a_f4_Lg_.d_f4_I), Math.min(di.a_f4_Lg_.b_f4_S, k - di.a_f4_Lg_.e_f2_I));
            return;
        }
        cm2.b_m0_PIIIIRV(0, 0, j, k);
    }

    protected final void d_m0_PLcm_RV(cm cm2) {
        a.a_f3_Lcm_ = cm2;
        bs bs2 = this;
        this.f_f0_Z = false;
        if (bs2.q != 0) {
            bs2.a_m2_PIIRZ(1, bs2.q);
            bs2.q = 0;
        }
        if (di.f_f0_Z) {
            eb.f(cm2, rpg.f.c, (rpg.f.d << 1) - 20, rpg.d.e_, 150);
            cm2.a_m2_PIRV(15723216);
            cm2.d_m0_PIIIIRV(rpg.f.c, (rpg.f.d << 1) - 20, rpg.d.e_ - 1, 149);
            cm2.a_m2_PIRV(3550755);
            if (di.a_f1_AB != null) {
                ac.a_m1_PLcm_IIIIABRV(cm2, rpg.f.c + 10, (rpg.f.d << 1) - 10, rpg.f.b - 10, 1, di.a_f1_AB);
                ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.b_f0_I - 62, rpg.e.a_f1_Lch_.a_m0_PIRAB(27), 0, 1);
            }
            return;
        }
        di.a_m4_PRV();
        switch (di.d_f3_B) {
            case 1: {
                a.b_m1_PLcm_RV(a.a_f3_Lcm_);
                break;
            }
            case 2: {
                if (this.f_f1_B > 0) {
                    a.a_f1_Z = true;
                    this.f_f1_B = (byte)(this.f_f1_B - 1);
                }
                i.a_m0_PRLi_().c_m1_PLcm_RV(a.a_f3_Lcm_);
                break;
            }
            case 3: {
                this.d_m1_PRV();
                break;
            }
            case 7: {
                bs2 = this;
                cm2 = a.a_f3_Lcm_;
                if (bs2.n < 5) {
                    int n2 = a.b_f0_I / 5;
                    int n3 = n2 / 5;
                    for (int i2 = 0; i2 < 5; ++i2) {
                        cm2.a_m4_PIIIIRV(0, n2 * i2, a.a_f0_I, n3 * bs2.n);
                    }
                } else {
                    a.a_m2_PLcm_IRV(cm2, 0);
                    byte[] byArray = rpg.e.b_f0_Lch_.a_m0_PIRAB(14);
                    int n4 = ac.a_m8_PABRI(byArray);
                    cm2.a_m2_PIRV(0x5F3F3F);
                    ac.a_m3_PLcm_IIIIABIIIRV(cm2, a.c - n4 / 2 + 1, a.d - 20 + 1, 200, 1, byArray, 0, 0, bs2.n - 5 << 1);
                    cm2.a_m2_PIRV(0xFF3F3F);
                    ac.a_m3_PLcm_IIIIABIIIRV(cm2, a.c - n4 / 2, a.d - 20, 200, 1, byArray, 0, 0, bs2.n - 5 << 1);
                    int n5 = bs2.n - 5;
                    if (n5 > 8) {
                        n5 = 8;
                    }
                    do.a_m7_PIIIRV(a.c, a.d + 20, n5);
                    if (bs2.n > 43) {
                        rpg.e.a_m0_PRLrpg_e_().e();
                        bs.a_m0_PRLbs_().a_m5_PBZRV((byte)2, false);
                    }
                }
                ++bs2.n;
                break;
            }
            case 4: {
                if (!df.c()) break;
                df.a_m6_PLcm_RV(a.a_f3_Lcm_);
                break;
            }
            case 5: {
                this.a_m9_PLn_RV(ax.a_m0_PRLax_());
                ax.a_m0_PRLax_().e(a.a_f3_Lcm_);
                break;
            }
            case 8: {
                this.a_m9_PLn_RV(null);
                di.a_f4_Lg_.a_m27_PLcm_RV(a.a_f3_Lcm_);
                break;
            }
            case 10: {
                bs2 = this;
                cm2 = a.a_f3_Lcm_;
                a.a_m2_PLcm_IRV(cm2, 0);
                if (bs2.p > 0) {
                    bs2.i();
                    break;
                }
                int n6 = bs2.p * 7;
                if (bs2.n < 3) {
                    cm2.a_m3_PIIIRV(50 + 50 * bs2.n, 50 + 50 * bs2.n, 50 + 50 * bs2.n);
                } else if (bs2.n < 15) {
                    cm2.a_m2_PIRV(0xFFFFFF);
                } else if (bs2.n < 18) {
                    cm2.a_m3_PIIIRV(255 - 50 * (bs2.n - 15), 255 - 50 * (bs2.n - 15), 255 - 50 * (bs2.n - 15));
                } else {
                    cm2.a_m2_PIRV(0);
                }
                int n7 = a.b_f0_I - 84 >> 1;
                for (int i3 = 0; i3 < 7; ++i3) {
                    byte[] byArray = ((ch)null).a_m0_PIRAB(n6 + i3);
                    if (byArray == null) continue;
                    ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n7 + i3 * 15, byArray, 0, 1);
                }
                if (bs2.n < 20) {
                    ++bs2.n;
                    break;
                }
                if (bs2.p > 0) break;
                ++bs2.p;
                bs2.n = 0;
                break;
            }
            case 11: {
                cm2 = a.a_f3_Lcm_;
                cm2.b_m1_PIRV(255);
                a.a_m2_PLcm_IRV(cm2, 0);
                cm2.a_m2_PIRV(0xFFFFFF);
                ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.d - 20, rpg.e.b_f0_Lch_.a_m0_PIRAB(di.h_f1_B > 0 ? 34 : 33), 0, 1);
                ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.d + 10, rpg.e.b_f0_Lch_.a_m0_PIRAB(32), 0, 1);
            }
        }
        rpg.c.e();
    }

    public final void d_m1_PRV() {
        if (rpg.c.c_f0_B > 0) {
            di.c_m0_PRV();
            di.d_m0_PRV();
            di.a_m6_PZZRV(true, true);
        } else {
            di.d_m0_PRV();
            di.c_m0_PRV();
        }
        di.a_f4_Lg_.c_m2_PRV();
        this.f();
    }

    public final void run() {
        if (di.d_f3_B == 1) {
            e e2 = rpg.e.a_m0_PRLrpg_e_();
            switch (this.a_f2_B) {
                case 2: {
                    di.m();
                    i.a_m0_PRLi_();
                    e2.a_m1_PRV();
                    bq.b_m1_PBZRV((byte)0, true);
                    di.b_m0_PRV();
                    break;
                }
                case 3: {
                    i.a_m1_PRV();
                    e2.b();
                    rpg.e.a_f2_Lca_ = e2.a_m2_PRLca_();
                    e2.c();
                    this.a_f2_B = (byte)4;
                }
                case 4: {
                    df.d_m0_PRV();
                    rpg.e.h();
                    bq.f();
                    di.a_m0_PBBBBRV((byte)2, di.e_f2_B, di.f_f2_B, di.g_f1_B);
                }
            }
            this.a_f2_B = (byte)-1;
        }
    }

    /*
     * Enabled aggressive block sorting
     */
    protected final boolean a_m2_PIIRZ(int n2, int n3) {
        int n4;
        if (rpg.c.a_m0_PRLrpg_c_() == null) return true;
        if (rpg.c.e_f1_Z) {
            return true;
        }
        if (n4 == 35 && di.f_f0_Z) {
            di.f_f0_Z = false;
            return true;
        }
        if (di.f_f0_Z) {
            return true;
        }
        if (n2 == 0) {
            int n5;
            this.f_f0_Z = true;
            void var1_2 = n4;
            switch (var1_2) {
                case -7: 
                case -6: {
                    n5 = var1_2;
                    break;
                }
                default: {
                    n5 = ct.a_m0_PIRI((int)var1_2);
                }
            }
            int n6 = n5;
            switch (di.d_f3_B) {
                case 3: {
                    int n7 = n4;
                    n4 = n6;
                    bs bs2 = this;
                    String string = RPGHeroEx.a.getAppProperty("Cheat-Enable");
                    if (string != null && string.trim().equals("true")) {
                        bs2.a_f5_AI[3] = bs2.a_f5_AI[2];
                        bs2.a_f5_AI[2] = bs2.a_f5_AI[1];
                        bs2.a_f5_AI[1] = bs2.a_f5_AI[0];
                        bs2.a_f5_AI[0] = n7;
                        if (bs2.a_f5_AI[0] == 52 && bs2.a_f5_AI[1] == 51 && bs2.a_f5_AI[2] == 50 && bs2.a_f5_AI[3] == 49) {
                            b_f0_B = 0;
                            b_f1_Z = true;
                        }
                        if (bs2.a_f5_AI[0] == 49 && bs2.a_f5_AI[1] == 50 && bs2.a_f5_AI[2] == 51 && bs2.a_f5_AI[3] == 52) {
                            b_f0_B = 1;
                            b_f1_Z = false;
                        }
                    }
                    switch (n4) {
                        case 1: {
                            n7 = 50;
                            break;
                        }
                        case 6: {
                            n7 = 56;
                            break;
                        }
                        case 2: {
                            n7 = 52;
                            break;
                        }
                        case 5: {
                            n7 = 54;
                            break;
                        }
                        case 8: {
                            n7 = 53;
                            break;
                        }
                        case -7: {
                            if (eb.f_f2_Z) return true;
                            bs.a_m3_PRZ();
                            return true;
                        }
                        case -6: {
                            if (!bs.a_m3_PRZ()) return true;
                            di.a_m3_PBRV((byte)6);
                            return true;
                        }
                    }
                    switch (n7) {
                        case 53: {
                            do do_ = di.a_f9_Ldo_;
                            switch (do_.b_f1_B) {
                                case 6: 
                                case 7: {
                                    return true;
                                }
                                case 2: {
                                    if (di.c_m9_PRZ()) break;
                                    di.e_m0_PRV();
                                    break;
                                }
                            }
                            if (di.a_f4_Lg_.a_m19_PBBRZ(do_.s, do_.t)) return true;
                            if (df.f_m1_PRZ()) return true;
                            if (!g.c_f5_Z) return true;
                            di.b_m3_PIRV(0);
                            return true;
                        }
                        case 50: {
                            di.b_m2_PBRV((byte)1);
                            return true;
                        }
                        case 56: {
                            di.b_m2_PBRV((byte)2);
                            return true;
                        }
                        case 52: {
                            di.b_m2_PBRV((byte)3);
                            return true;
                        }
                        case 54: {
                            di.b_m2_PBRV((byte)4);
                            return true;
                        }
                        case 49: {
                            bs.a_m4_PIRV(0);
                            return true;
                        }
                        case 51: {
                            bs.a_m4_PIRV(1);
                            return true;
                        }
                        case 55: {
                            bs.a_m4_PIRV(2);
                            return true;
                        }
                        case 57: {
                            bs.a_m4_PIRV(3);
                            return true;
                        }
                        case 48: {
                            d_f0_Z = di.a_f9_Ldo_.a_m35_PZRZ(true);
                            return true;
                        }
                        case 35: {
                            if (b_f0_B == 0) {
                                b_f1_Z = !b_f1_Z;
                            }
                            d_f0_Z = di.a_f9_Ldo_.a_m35_PZRZ(false);
                            return true;
                        }
                        case 42: {
                            if (!bs.a_m3_PRZ()) return true;
                            if (rpg.c.d_f0_B == 1) {
                                di.a_m2_PBBRV((byte)6, (byte)2);
                                return true;
                            }
                            if (rpg.c.d_f0_B != 0) return true;
                            g = true;
                            di.a_m1_PBBBRV((byte)3, (byte)8, (byte)3);
                            e_f0_Z = true;
                        }
                    }
                    return true;
                }
                case 5: {
                    ax.a_m0_PRLax_().a_m2_PIIRZ(n6, n4);
                    return true;
                }
                case 4: {
                    df.a_m8_PIIRZ(n6, n4);
                    return true;
                }
                case 2: {
                    i.a_m0_PRLi_().a_m2_PIIRZ(n6, n4);
                    return true;
                }
                case 8: {
                    if (n4 != -7) {
                        if (n6 != 8) {
                            if (n4 != -6) return true;
                        }
                        if (g) return true;
                    }
                    if (g) {
                        g = false;
                        di.a_m1_PBBBRV((byte)3, (byte)3, (byte)1);
                    } else {
                        di.a_m3_PBRV((byte)6);
                        ax.k = true;
                    }
                    c_f0_Z = true;
                    return true;
                }
                case 11: {
                    if (n6 != 8) {
                        if (n4 != 53) return true;
                    }
                    di.a_m2_PBBRV((byte)8, (byte)2);
                }
            }
            return true;
        }
        if (n2 != 1) return true;
        if (di.d_f3_B != 3) {
            return true;
        }
        if (this.f_f0_Z) {
            this.q = n4;
            return true;
        }
        if (di.a_f9_Ldo_.b_f1_B == 2 && !di.c_m9_PRZ()) {
            di.e_m0_PRV();
        }
        di.a_f9_Ldo_.e_m1_PRV();
        return true;
    }

    private static boolean a_m3_PRZ() {
        if (di.a_f9_Ldo_ == null || di.a_f9_Ldo_.b_f1_B == 1) {
            return true;
        }
        if (di.a_f9_Ldo_.b_f1_B == 2 && !di.c_m9_PRZ()) {
            di.e_m0_PRV();
            return true;
        }
        return false;
    }

    private static void a_m4_PIRV(int n2) {
        if (!g.c_f5_Z) {
            return;
        }
        switch (di.a_f9_Ldo_.b_f1_B) {
            case 6: 
            case 7: 
            case 9: 
            case 10: {
                return;
            }
        }
        int n3 = di.b_f5_AB[n2];
        if (n3 < 0) {
            return;
        }
        if (di.a_f11_AI[n2] > 0) {
            return;
        }
        di.b_m3_PIRV(di.b_m7_PIRZ(n2) ? n3 : n3 + 100);
    }

    public final void a_m5_PBZRV(byte by2, boolean bl2) {
        this.a_f2_B = by2;
        di.d_f3_B = 1;
        a.f = new Random().nextInt();
        a.f = Math.abs(a.f) % 11;
        a.a_m4_PZRV(false);
        new Thread(a_f1_Lbs_).start();
    }

    public static void e_m1_PRV() {
        a.a_f1_Z = true;
        c_f0_Z = true;
    }

    public final void f() {
        int n2;
        int n3;
        int n4;
        if (o > 0 && a_f2_Lcd_ != null && bs.a_f2_Lcd_.b_f1_B != 7) {
            n4 = a.a_f0_I - c_f1_B;
            a.a_f3_Lcm_.a_m1_PLcg_IIIRV(a_f3_Lcg_, n4, 0, 20);
            a.a_f3_Lcm_.a_m2_PIRV(0xFF3F2F);
            a.a_f3_Lcm_.a_m4_PIIIIRV(n4 + 42 + 2, 24, d_f1_B * (a_f2_Lcd_.c_m0_PRI() - 1) / a_f2_Lcd_.d_m0_PRI() - 1, 2);
            if (di.d_f3_B == 3) {
                --o;
            }
        } else {
            bs.h();
        }
        n4 = a.a_f0_I - 120 >> 1;
        int n5 = a.b_f0_I - 33;
        do do_ = di.a_f9_Ldo_;
        if ((do_.a_f8_S > 0 || do_.b_f3_S > 0) && di.d_f3_B == 3 && g.a_f9_I <= 0) {
            this.e_f1_B = (byte)(this.e_f1_B + 1);
            if (this.e_f1_B < 5) {
                bs.e_m0_PLcm_RV(a.a_f3_Lcm_);
                n3 = 0;
                n2 = n4 - 40;
                if (a.a_f0_I < 240) {
                    n2 += 20;
                }
                if (do_.a_f8_S > 0) {
                    a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.c_f1_ALcg_[0], n2, n5 - 2, 36);
                    n3 = 12;
                }
                if (do_.b_f3_S > 0) {
                    a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.c_f1_ALcg_[1], n2 + n3, n5 - 2, 36);
                }
            }
            if (this.e_f1_B >= 8) {
                this.e_f1_B = 0;
            }
        }
        if (c_f0_Z) {
            a.a_f3_Lcm_.b_m0_PIIIIRV(0, n5, a.a_f0_I, 33);
            a.a_f3_Lcm_.a_m2_PIRV(0);
            a.a_f3_Lcm_.a_m4_PIIIIRV(0, n5, a.a_f0_I, 33);
            if (rpg.e.q == null) {
                rpg.e.q = cg.a_m4_PLjava_lang_String_RLcg_("/buttonLR.png");
            }
            if (rpg.e.q != null) {
                a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.q, 0, n5, 20);
                if (a.a_f0_I > 176) {
                    n.b_m6_PLcm_IIIIIRV(a.a_f3_Lcm_, di.a_f9_Ldo_.a_m28_PRB(), 40, n5 + 20, 4, 0);
                    n.b_m6_PLcm_IIIIIRV(a.a_f3_Lcm_, di.e_f1_I, 17, n5 + 10, 4, 0);
                }
                if (rpg.e.k_f1_Lcg_ != null) {
                    if (rpg.e.l_f0_Lcg_ != null) {
                        a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.l_f0_Lcg_, a.a_f0_I - rpg.e.l_f0_Lcg_.a_m5_PRI(), n5, 20);
                    }
                    a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, a.a_f0_I - rpg.e.k_f1_Lcg_.a_m5_PRI(), n5, 20);
                }
            }
            a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.j_f2_Lcg_, n4, n5, 20);
            if (a.a_f0_I >= 360 && rpg.e.k_f1_Lcg_ != null) {
                a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, n4 - 60, n5, 20);
                a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, n4 + 120, n5, 20);
            }
        }
        if (c_f0_Z || d_f0_Z) {
            if (bs.a_m7_PZIIRZ(true, n4 + 86, n5 + 16)) {
                n.b_m6_PLcm_IIIIIRV(a.a_f3_Lcm_, 0, n4 + 83, n5 + 19, 4, 0);
                d_f0_Z = false;
            }
            if (bs.a_m7_PZIIRZ(false, n4 + 104, n5 + 16)) {
                a.a_m1_PLcm_RV(a.a_f3_Lcm_);
                a.a_f3_Lcm_.a_m2_PIRV(0xFFFFFF);
                ac.a_m0_PLcm_IIABIRV(a.a_f3_Lcm_, n4 + 102, n5 + 18, rpg.d.o, 0);
                d_f0_Z = false;
            }
        }
        if (c_f0_Z || a_f0_AZ[0]) {
            n3 = n4 + 1;
            n2 = n5 + 10;
            bs.a_m6_PIIIIIIAIBIRV(n4, n5, n3, n2, 118, 4, this.b_f2_AI, (byte)0, 4);
        }
        if (c_f0_Z || a_f0_AZ[2]) {
            int n6 = n4 + 1;
            n3 = n5 + 33 - 1;
            bs.a_m6_PIIIIIIAIBIRV(n4, n5, n6, n3, 118, 1, this.c_f2_AI, (byte)2, 4);
        }
        if (c_f0_Z || a_f0_AZ[3]) {
            n3 = n4 + 79;
            n2 = n5 + 4;
            bs.a_m6_PIIIIIIAIBIRV(n4, n5, n3, n2, 40, 3, this.d_f2_AI, (byte)3, 4);
        }
        if (c_f0_Z || a_f0_AZ[1]) {
            n3 = n4 + 1;
            n2 = n5 + 4;
            bs.a_m6_PIIIIIIAIBIRV(n4, n5, n3, n2, 40, 3, this.e_f2_AI, (byte)1, 8);
        }
        for (n2 = 0; n2 < 4; n2 = (int)((byte)(n2 + 1))) {
            int n7 = n5 + 17;
            n3 = n4 + 8 + n2 * 20;
            int n8 = n2;
            byte by2 = di.b_f5_AB[n8];
            a.a_f3_Lcm_.b_m0_PIIIIRV(n3 - 5, n7, 17, 12);
            if (by2 < 0) {
                a.a_f3_Lcm_.a_m2_PIRV(0);
                a.a_f3_Lcm_.a_m4_PIIIIRV(n3 - 5, n7, 17, 12);
                continue;
            }
            int n9 = di.a_f11_AI[n8];
            int n10 = di.b_f6_AI[n8];
            if (di.b_m7_PIRZ(n8)) {
                bs.a_m8_PIIIRV(by2, n3, n7);
            } else {
                a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.g_f1_ALcg_[by2], n3, n7, 20);
            }
            if (n9 > 0) {
                a.a_f3_Lcm_.b_m0_PIIIIRV(n3 - 5, n7, 5, 12);
                a.a_f3_Lcm_.a_m2_PIRV(0);
                a.a_f3_Lcm_.a_m4_PIIIIRV(n3 - 5, n7, 5, 12);
                a.a_f3_Lcm_.b_m0_PIIIIRV(n3, n7, 12, n9 * 12 / n10);
                a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.i_f2_Lcg_, n3, n7, 20);
                continue;
            }
            if (n9 != 0) continue;
            a.a_f3_Lcm_.b_m0_PIIIIRV(n3 - 5, n7, 5, 12);
            a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.j_f2_Lcg_, a.a_f0_I - 120 >> 1, a.b_f0_I - 33, 20);
        }
        bs.e_m0_PLcm_RV(a.a_f3_Lcm_);
        c_f0_Z = false;
    }

    private static void a_m6_PIIIIIIAIBIRV(int n2, int n3, int n4, int n5, int n6, int n7, int[] nArray, byte by2, int n8) {
        do do_ = di.a_f9_Ldo_;
        int n9 = do_.e_m3_PBRI(by2) * n6 / do_.f_m2_PBRI(by2);
        a.a_f3_Lcm_.b_m0_PIIIIRV(n4, n5, n6, n7);
        a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.j_f2_Lcg_, n2, n3, 20);
        if (n9 > 0) {
            n2 = n8 == 4 ? n4 : n4 + n6 - n9;
            for (n3 = 0; n3 < n7; ++n3) {
                if (b_f1_Z && by2 == 0) {
                    a.a_f3_Lcm_.a_m2_PIRV(0x7F7F7F);
                } else {
                    a.a_f3_Lcm_.a_m2_PIRV(nArray[n3]);
                }
                a.a_f3_Lcm_.e(n2, n5 + n3, n2 + n9, n5 + n3);
            }
        }
        bs.a_f0_AZ[by2] = false;
    }

    private static boolean a_m7_PZIIRZ(boolean bl2, int n2, int n3) {
        as as2 = di.a_m14_PZRLas_(bl2);
        a.a_f3_Lcm_.b_m0_PIIIIRV(n2 - 3, n3, 17, 14);
        a.a_f3_Lcm_.a_m2_PIRV(0);
        a.a_f3_Lcm_.a_m4_PIIIIRV(n2 - 3, n3, 17, 14);
        if (as2 == null) {
            return false;
        }
        int n4 = di.a_f11_AI[4];
        as2.a_m10_PLcm_IIZZRV(a.a_f3_Lcm_, n2, n3, true, true);
        int n5 = di.a_m11_PBRLbj_(as2.a_f1_B).a_m10_PBBRI(as2.a_f1_B, as2.b_f0_B);
        if (n5 > 1) {
            if (n5 > 99) {
                n5 = 99;
            }
            n.b_m6_PLcm_IIIIIRV(a.a_f3_Lcm_, n5, n2 + 13, n3 + 7, 8, 0);
        }
        if (n4 > 0) {
            a.a_f3_Lcm_.b_m0_PIIIIRV(n2, n3, 12, n4 * 12 / 10);
            a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.i_f2_Lcg_, n2, n3, 20);
            return false;
        }
        return true;
    }

    public static final void a_m8_PIIIRV(int n2, int n3, int n4) {
        a.a_f3_Lcm_.b_m0_PIIIIRV(n3, n4, 12, 12);
        a.a_f3_Lcm_.a_m1_PLcg_IIIRV(rpg.e.f_f2_Lcg_, n3 - 12 * (n2 - 4), n4, 20);
    }

    private final void a_m9_PLn_RV(n n2) {
        if (a.a_f1_Z) {
            di.a_f4_Lg_.c_m2_PRV();
            this.f();
            if (n2 != null) {
                n2.e_m0_PRV();
            }
            a.a_f1_Z = false;
        }
    }

    public final void g() {
        this.i();
    }

    private void i() {
        this.a_f4_Lch_ = null;
        di.a_m1_PBBBRV((byte)3, (byte)11, (byte)1);
    }

    public static final void a_m10_PLcd_ZRV(cd object, boolean bl2) {
        o = 24;
        if (bl2 && a_f2_Lcd_ != null) {
            return;
        }
        if (a_f2_Lcd_ == object) {
            return;
        }
        a_f2_Lcd_ = object;
        a_f3_Lcg_ = cg.a_m2_PIIRLcg_(c_f1_B, 34);
        object = a_f3_Lcg_.a_m1_PRLcm_();
        ((cm)object).b_m0_PIIIIRV(0, 0, c_f1_B, 34);
        ((cm)object).a_m2_PIRV(0);
        ((cm)object).a_m4_PIIIIRV(0, 0, c_f1_B, 34);
        ((cm)object).a_m2_PIRV(0xFFFFFF);
        ac.a_m2_PLcm_IIABIIRV((cm)object, c_f1_B >> 1, 5, a_f2_Lcd_.a_m23_PRAB(), 0, 1);
        ((cm)object).a_m2_PIRV(10159117);
        ((cm)object).d_m0_PIIIIRV(1, 1, c_f1_B - 3, 31);
        ((cm)object).d_m0_PIIIIRV(42, 22, d_f1_B + 1, 5);
        ((cm)object).a_m1_PLcg_IIIRV(rpg.e.l_f1_ALcg_[0], 2, 22, 20);
        n.b_m6_PLcm_IIIIIRV((cm)object, a_f2_Lcd_.a_m19_PRB(), 39, 21, 8, 1);
    }

    public static void h() {
        a_f2_Lcd_ = null;
        a_f3_Lcg_ = null;
        o = 0;
    }

    static {
        c_f1_B = (byte)(rpg.f.b >> 1);
        d_f1_B = (byte)((c_f1_B >> 1) - 8);
        g = false;
    }
}

