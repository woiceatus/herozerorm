/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.f;

final class be
extends q {
    private static ch a;
    private static cg b;
    private static cg c;
    private int e_f0_I = 0;
    private int f = rpg.a.c;
    private int j = rpg.a.d + 1;
    private int k = 5;
    private boolean e_f1_Z;

    public be(n n2) {
        super(n2, (byte)6, (byte)1, (byte)1);
        this.b_f3_Z = true;
        a = new ch("/t/j");
        b = cg.a_m4_PLjava_lang_String_RLcg_("/gunsword.png");
        c = cg.a_m4_PLjava_lang_String_RLcg_("/wizard.png");
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = di.j;
            a = null;
            b = null;
            c = null;
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.a_m1_PBRZ(this.a_f2_B)) {
                di.b_f4_B = this.a_f2_B;
                di.a_m5_PIRV(0);
                b = null;
                c = null;
            } else {
                this.b_f1_Ln_ = new br((n)this, a.a_m0_PIRAB(4), '\u0000');
            }
            return true;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            this.k = 0;
            this.e_f0_I = 0;
            this.e_f1_Z = n.i(n2, n3);
        }
        return true;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        rpg.a.a_m3_PLcm_ZRV(cm2, true);
        di.b_f4_B = this.a_f2_B;
        this.a_m0_PLcm_BRI(cm2, (byte)(this.a_f2_B + 6));
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, rpg.f.d, e.i_f0_Lch_.a_m0_PIRAB(4), 0, 1);
        if (this.b_f1_Ln_ != null && this.b_f3_Z) {
            this.b(cm2);
        }
        n.a_m0_PLcm_IRV(cm2, 3);
    }

    protected final void b(cm cm2) {
        cm2.b_m0_PIIIIRV(this.a_, this.j - 33, d.e_, 44);
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(this.a_, this.j - 33, d.e_, 44);
        int n2 = (this.a_f2_B + this.b_f2_B - 1) % this.b_f2_B;
        int n3 = (this.a_f2_B + 1) % this.b_f2_B;
        if (this.k == 5) {
            e.a_f4_Ls_.a_m2_PBBIIIRI((byte)8, (byte)1, 0, this.f, this.j);
            be.a_m2_PIIIRV(this.f - 35, this.j - 5, n3);
            be.a_m2_PIIIRV(this.f + 35, this.j - 5, n2);
            if (this.a_f2_B >= 4) {
                int n4 = this.j;
                int n5 = this.f;
                int n6 = this.e_f0_I;
                n3 = this.a_f2_B;
                be be2 = this;
                if (n3 == 4) {
                    if (!di.g_f0_Z) {
                        be.a_m2_PIIIRV(n5, n4, n3);
                    } else if (b != null) {
                        int n7 = rpg.a.a_f3_Lcm_.a_m6_PRI();
                        n3 = rpg.a.a_f3_Lcm_.b_m2_PRI();
                        int n8 = rpg.a.a_f3_Lcm_.c_m1_PRI();
                        int n9 = rpg.a.a_f3_Lcm_.d_m1_PRI();
                        rpg.a.a_f3_Lcm_.c_m0_PIIIIRV(n5 - 28, n4 - 26, 42, 42);
                        int n10 = 0;
                        int n11 = 0;
                        if (n6 < 3) {
                            n10 = n6 == 0 ? 0 : (n6 == 1 ? 42 : 84);
                        } else if (n6 < 6) {
                            n11 = 42;
                            n10 = n6 == 3 ? 0 : (n6 == 4 ? 42 : 84);
                        } else if (n6 < 8) {
                            n11 = 84;
                            n10 = n6 == 6 ? 0 : 42;
                        } else {
                            n6 = 0;
                        }
                        rpg.a.a_f3_Lcm_.a_m1_PLcg_IIIRV(b, n5 - 28 - n10, n4 - 26 - n11, 0);
                        rpg.a.a_f3_Lcm_.b_m0_PIIIIRV(n7, n3, n8, n9);
                    }
                } else if (n3 == 5) {
                    if (!di.h_f0_Z) {
                        be.a_m2_PIIIRV(n5, n4, n3);
                    } else if (c != null) {
                        int n12 = rpg.a.a_f3_Lcm_.a_m6_PRI();
                        n3 = rpg.a.a_f3_Lcm_.b_m2_PRI();
                        int n13 = rpg.a.a_f3_Lcm_.c_m1_PRI();
                        int n14 = rpg.a.a_f3_Lcm_.d_m1_PRI();
                        rpg.a.a_f3_Lcm_.c_m0_PIIIIRV(n5 - 17, n4 - 22, 27, 27);
                        int n15 = 0;
                        int n16 = 0;
                        if (n6 < 3) {
                            n15 = n6 == 0 ? 0 : (n6 == 1 ? 27 : 54);
                        } else if (n6 < 6) {
                            n16 = 27;
                            n15 = n6 == 3 ? 0 : (n6 == 4 ? 27 : 54);
                        } else if (n6 < 8) {
                            n16 = 54;
                            n15 = n6 == 6 ? 0 : 27;
                        } else {
                            n6 = 0;
                        }
                        rpg.a.a_f3_Lcm_.a_m1_PLcg_IIIRV(c, n5 - 17 - n15, n4 - 22 - n16, 0);
                        rpg.a.a_f3_Lcm_.b_m0_PIIIIRV(n12, n3, n13, n14);
                    }
                }
                this.e_f0_I = n6 + 1;
            } else {
                this.e_f0_I = e.a_f4_Ls_.a_m2_PBBIIIRI(this.a_f2_B, (byte)1, this.e_f0_I, this.f, this.j) + 1;
            }
        } else if (this.e_f1_Z) {
            int n17 = (n2 + this.b_f2_B - 1) % this.b_f2_B;
            be.a_m2_PIIIRV(this.f - 70 + 7 * this.k, this.j - 5, n3);
            be.a_m2_PIIIRV(this.f + 7 * this.k, this.j - this.k, n2);
            be.a_m2_PIIIRV(this.f + 35 + 7 * this.k, this.j - 5, n17);
            be.a_m2_PIIIRV(this.f - 35 + 7 * this.k, this.j - 5 + this.k, this.a_f2_B);
        } else {
            int n18 = (n3 + 1) % this.b_f2_B;
            be.a_m2_PIIIRV(this.f - 35 - 7 * this.k, this.j - 5, n18);
            be.a_m2_PIIIRV(this.f - 7 * this.k, this.j - this.k, n3);
            be.a_m2_PIIIRV(this.f + 70 - 7 * this.k, this.j - 5, n2);
            be.a_m2_PIIIRV(this.f + 35 - 7 * this.k, this.j - 5 + this.k, this.a_f2_B);
        }
        if (this.k < 5) {
            ++this.k;
        }
    }

    private static void a_m2_PIIIRV(int n2, int n3, int n4) {
        if (n4 >= 6) {
            return;
        }
        if (n4 >= 4) {
            if (n4 == 4) {
                if (b != null) {
                    n4 = rpg.a.a_f3_Lcm_.a_m6_PRI();
                    int n5 = rpg.a.a_f3_Lcm_.b_m2_PRI();
                    int n6 = rpg.a.a_f3_Lcm_.c_m1_PRI();
                    int n7 = rpg.a.a_f3_Lcm_.d_m1_PRI();
                    rpg.a.a_f3_Lcm_.c_m0_PIIIIRV(n2 - 28, n3 - 26, 42, 42);
                    rpg.a.a_f3_Lcm_.a_m1_PLcg_IIIRV(b, n2 - 112, n3 - 110, 0);
                    rpg.a.a_f3_Lcm_.b_m0_PIIIIRV(n4, n5, n6, n7);
                    return;
                }
            } else if (n4 == 5 && c != null) {
                n4 = rpg.a.a_f3_Lcm_.a_m6_PRI();
                int n8 = rpg.a.a_f3_Lcm_.b_m2_PRI();
                int n9 = rpg.a.a_f3_Lcm_.c_m1_PRI();
                int n10 = rpg.a.a_f3_Lcm_.d_m1_PRI();
                rpg.a.a_f3_Lcm_.c_m0_PIIIIRV(n2 - 17, n3 - 22, 27, 27);
                rpg.a.a_f3_Lcm_.a_m1_PLcg_IIIRV(c, n2 - 71, n3 - 76, 0);
                rpg.a.a_f3_Lcm_.b_m0_PIIIIRV(n4, n8, n9, n10);
                return;
            }
        } else {
            e.a_f4_Ls_.a_m2_PBBIIIRI((byte)(n4 + 4), (byte)1, 0, n2, n3);
        }
    }

    static {
        b = null;
        c = null;
    }
}

