/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.b;
import rpg.c;
import rpg.d;
import rpg.e;
import rpg.f;

public final class bv
extends a {
    private byte b_f0_B = 0;
    private static bv a_f0_Lbv_;
    private cg a_f1_Lcg_;
    private int j;
    private static boolean b_f1_Z;
    private static cg b_f2_Lcg_;
    private static long a_f2_J;

    public static bv a_m0_PRLbv_() {
        if (a_f0_Lbv_ == null) {
            a_f0_Lbv_ = new bv();
        }
        return a_f0_Lbv_;
    }

    public final void a_m1_PRV() {
    }

    public final void b_m0_PRV() {
        a.e = 3;
        if (this.b_f0_B == 2) {
            bq.a_f1_J = 0L;
            bq.a_m0_PRV();
        }
    }

    public static void d_m0_PRV() {
        if (a_f0_Lbv_ != null) {
            a_f0_Lbv_ = null;
        }
    }

    protected final boolean a_m2_PIIRZ(int n2, int n3) {
        if (n2 != 0) {
            return true;
        }
        n2 = ct.a_m0_PIRI(n3);
        switch (this.b_f0_B) {
            case 1: {
                break;
            }
            case 4: {
                switch (n2) {
                    case 2: {
                        n3 = 52;
                        break;
                    }
                    case 5: {
                        n3 = 54;
                        break;
                    }
                    case 8: {
                        n3 = 53;
                    }
                }
                switch (n3) {
                    case -6: 
                    case 53: {
                        if (b_f1_Z) {
                            rpg.c.a_f4_B = (byte)3;
                            rpg.c.c_f1_Z = true;
                            rpg.c.b_f1_Z = true;
                            bq.b_m1_PBZRV((byte)0, true);
                        } else {
                            rpg.c.a_f4_B = 0;
                            rpg.c.c_f1_Z = false;
                            rpg.c.b_f1_Z = false;
                            bq.b_m2_PBRV((byte)0);
                        }
                        this.b_m1_PBRV((byte)2);
                        break;
                    }
                    case 52: {
                        b_f1_Z = !b_f1_Z;
                        break;
                    }
                    case 54: {
                        b_f1_Z = !b_f1_Z;
                        break;
                    }
                    case -7: {
                        rpg.c.a_f4_B = 0;
                        rpg.c.c_f1_Z = false;
                        rpg.c.b_f1_Z = false;
                        bq.b_m2_PBRV((byte)0);
                        this.b_m1_PBRV((byte)2);
                    }
                }
                break;
            }
            case 2: {
                rpg.c.a_m0_PRLrpg_c_().d();
            }
        }
        return true;
    }

    protected final void d_m1_PLcm_RV(cm object) {
        a.a_f3_Lcm_ = object;
        switch (this.b_f0_B) {
            case 3: {
                a.b_m1_PLcm_RV(a.a_f3_Lcm_);
                break;
            }
            case 1: {
                cf.a_m3_PRV();
                cm cm2 = a.a_f3_Lcm_;
                object = this;
                a.a_m2_PLcm_IRV(cm2, 0);
                a.a_f3_Lcm_.b_m1_PIRV(((bv)object).j < 25 ? ((bv)object).j * 10 : 255);
                if (((bv)object).a_f1_Lcg_ != null) {
                    cm2.a_m1_PLcg_IIIRV(((bv)object).a_f1_Lcg_, a.c, a.d, 3);
                }
                ++((bv)object).j;
                if (((bv)object).j <= 50) break;
                super.b_m1_PBRV((byte)4);
                break;
            }
            case 4: {
                cm cm3 = a.a_f3_Lcm_;
                object = this;
                a.c_m1_PLcm_RV(cm3);
                eb.f(cm3, rpg.f.c, a.d + 15, rpg.d.e_, 70);
                cm3.a_m2_PIRV(15723216);
                cm3.d_m0_PIIIIRV(rpg.f.c, a.d + 15, rpg.d.e_ - 1, 69);
                cm3.a_m2_PIRV(0);
                ac.a_m2_PLcm_IIABIIRV(cm3, a.c, a.d + 25, rpg.e.a_f1_Lch_.a_m0_PIRAB(26), 0, 1);
                object = cm3;
                int n2 = a.d + 58;
                ((cm)object).a_m2_PIRV(0x660000);
                if (b_f1_Z) {
                    ((cm)object).a_m4_PIIIIRV(a.c - 50 - 25, n2, 50, 20);
                    ((cm)object).a_m2_PIRV(0xFFFFFF);
                    ac.a_m2_PLcm_IIABIIRV((cm)object, a.c - 50, n2 + 4, rpg.e.a_f1_Lch_.a_m0_PIRAB(0), 0, 1);
                    ((cm)object).a_m2_PIRV(0);
                    ac.a_m2_PLcm_IIABIIRV((cm)object, a.c + 50, n2 + 4, rpg.e.a_f1_Lch_.a_m0_PIRAB(1), 0, 1);
                    break;
                }
                ((cm)object).a_m4_PIIIIRV(a.c + 25, n2, 50, 20);
                ((cm)object).a_m2_PIRV(0);
                ac.a_m2_PLcm_IIABIIRV((cm)object, a.c - 50, n2 + 4, rpg.e.a_f1_Lch_.a_m0_PIRAB(0), 0, 1);
                ((cm)object).a_m2_PIRV(0xFFFFFF);
                ac.a_m2_PLcm_IIABIIRV((cm)object, a.c + 50, n2 + 4, rpg.e.a_f1_Lch_.a_m0_PIRAB(1), 0, 1);
                break;
            }
            case 2: {
                cm cm4 = a.a_f3_Lcm_;
                object = this;
                a.c_m1_PLcm_RV(cm4);
                if (((bv)object).j % 10 < 8) {
                    cm4.a_m2_PIRV(0xFFFFFF);
                    ac.a_m2_PLcm_IIABIIRV(cm4, a.c, a.d + (a.d >> 1), rpg.d.C, 0, 1);
                }
                ++((bv)object).j;
                if (((bv)object).j <= 124) break;
                ((bv)object).j = 1;
            }
        }
        rpg.c.e();
    }

    public final void run() {
        if (this.b_f0_B == 3) {
            switch (this.a_f2_B) {
                case 1: {
                    rpg.c.a_m0_PRLrpg_c_().i();
                    b.b_m4_PRV();
                    a.c_m0_PRV();
                    String string = "/ealogo.png";
                    Object object = this;
                    this.a_f1_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_(string);
                    a.c_m0_PRV();
                    rpg.e.a_m0_PRLrpg_e_().a_m1_PRV();
                    a.c_m0_PRV();
                    bq.b_m3_PIRV(0);
                    a.c_m0_PRV();
                    rpg.e.g();
                    a.c_m0_PRV();
                    di.m();
                    a.c_m0_PRV();
                    a_f2_J = System.currentTimeMillis() - a_f2_J;
                    if (a_f2_J < 2000L) {
                        try {
                            Thread.sleep(2000L - a_f2_J);
                        }
                        catch (Exception exception) {
                            object = exception;
                            exception.printStackTrace();
                        }
                    }
                    this.b_m1_PBRV((byte)1);
                }
            }
            this.a_f2_B = (byte)-1;
        }
    }

    public final void a_m3_PBRV(byte by2) {
        this.a_f2_B = 1;
        this.b_m1_PBRV((byte)3);
        new Thread(a_f0_Lbv_).start();
    }

    private void b_m1_PBRV(byte by2) {
        this.b_f0_B = by2;
        this.j = 0;
        switch (this.b_f0_B) {
            case 3: {
                a.a_m4_PZRV(false);
                return;
            }
        }
        rpg.c.a_m0_PRLrpg_c_().h();
    }

    static {
        b_f1_Z = true;
        b_f2_Lcg_ = null;
        a_f2_J = 0L;
    }
}

