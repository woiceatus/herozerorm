/*
 * Decompiled with CFR 0.152.
 */
package rpg;

import rpg.c;
import rpg.d;
import rpg.e;

public abstract class a
extends az
implements Runnable,
d {
    public static int a_f0_I;
    public static int b_f0_I;
    public static int c;
    public static int d;
    public static int e;
    private static byte b_f1_B;
    public static boolean a_f1_Z;
    protected byte a_f2_B = (byte)-1;
    public static cm a_f3_Lcm_;
    public static int f;

    public abstract void a_m0_PRV();

    public abstract void b_m0_PRV();

    public a() {
        a_f0_I = ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getWidth();
        b_f0_I = ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getHeight();
        c = a_f0_I >> 1;
        d = b_f0_I >> 1;
    }

    public static void a_m1_PLcm_RV(cm cm2) {
        cm2.b_m0_PIIIIRV(0, 0, a_f0_I, b_f0_I);
    }

    public static void a_m2_PLcm_IRV(cm cm2, int n2) {
        cm2.b_m0_PIIIIRV(0, 0, a_f0_I, b_f0_I);
        cm2.a_m2_PIRV(n2);
        cm2.a_m4_PIIIIRV(0, 0, a_f0_I, b_f0_I);
    }

    public static void c_m0_PRV() {
        if ((b_f1_B = (byte)(b_f1_B + 5)) < 0 || b_f1_B > 100) {
            b_f1_B = (byte)100;
        }
    }

    protected static void b_m1_PLcm_RV(cm cm2) {
        int n2 = d;
        cm2.b_m1_PIRV(255);
        if (e == 3) {
            a.a_m2_PLcm_IRV(cm2, 0);
            cm2.a_m2_PIRV(14663551);
            ac.a_m0_PLcm_IIABIRV(cm2, c - 48, n2 - 18, rpg.e.b_f0_Lch_.a_m0_PIRAB(1), 0);
            cm2.e(c - 50, n2, c + 48, n2);
            cm2.a_m4_PIIIIRV(c - 51, n2 + 1, 2, 2);
            cm2.a_m4_PIIIIRV(c + 48, n2 + 1, 2, 2);
            cm2.a_m2_PIRV(10452799);
            cm2.e(c - 50, n2 + 5, c + 48, n2 + 5);
            cm2.a_m4_PIIIIRV(c - 51, n2 + 3, 2, 2);
            cm2.a_m4_PIIIIRV(c + 48, n2 + 3, 2, 2);
        }
        if (e > 3) {
            cm2.b_m0_PIIIIRV(0, 0, a_f0_I, b_f0_I);
            cm2.a_m2_PIRV(0);
            cm2.a_m4_PIIIIRV(c + 25, n2 - 16, 18, 10);
            cm2.a_m2_PIRV(14663551);
            ac.a_m0_PLcm_IIABIRV(cm2, c + 25, n2 - 16, "...".substring(0, 3).getBytes(), 1);
            cm2.a_m2_PIRV(14655295);
            cm2.a_m4_PIIIIRV(c - 48, n2 + 2, 95 * b_f1_B / 100, 1);
            cm2.a_m2_PIRV(0xFFFF7F);
            cm2.a_m4_PIIIIRV(c - 48, n2 + 3, 95 * b_f1_B / 100, 1);
        } else if (e < 3) {
            cm2.a_m2_PIRV(0);
            int n3 = (b_f0_I + 11) / 12;
            for (int i2 = 0; i2 < n3; ++i2) {
                cm2.a_m4_PIIIIRV(0, i2 * 12 + (e << 2), a_f0_I, 4);
            }
        }
        e = e < 100 ? ++e : 4;
        cm2.a_m2_PIRV(0xFFFFFF);
        byte[] byArray = rpg.e.a_f1_Lch_.a_m0_PIRAB(15 + f);
        ac.a_m1_PLcm_IIIIABRV(cm2, 10, n2 + 10, a_f0_I - 20, 0, byArray);
    }

    public static final void a_m3_PLcm_ZRV(cm cm2, boolean bl2) {
        int n2;
        a.a_m2_PLcm_IRV(cm2, 10159117);
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(0, 0, a_f0_I, d);
        int n3 = rpg.e.b_f2_Lcg_.a_m5_PRI();
        int n4 = rpg.e.b_f2_Lcg_.b();
        int n5 = a_f0_I / n3 + 1;
        n4 = b_f0_I - n4 >> 1;
        for (n2 = 0; n2 < n5; ++n2) {
            cm2.a_m1_PLcg_IIIRV(rpg.e.b_f2_Lcg_, n2 * n3, n4, 20);
        }
        if (bl2 && b_f0_I >= 200) {
            n3 = rpg.e.k_f1_Lcg_.a_m5_PRI();
            n4 = rpg.e.k_f1_Lcg_.b();
            n5 = a_f0_I / n3 + 1;
            for (n2 = 0; n2 < n5; ++n2) {
                if (b_f0_I > 240) {
                    cm2.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, n2 * n3, 0, 20);
                    cm2.a_m1_PLcg_IIIRV(rpg.e.c_f2_Lcg_, n2 * n3, n4, 20);
                }
                cm2.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, n2 * n3, b_f0_I - n4, 20);
            }
        }
    }

    public static void c_m1_PLcm_RV(cm cm2) {
        a.a_m3_PLcm_ZRV(cm2, false);
        if (rpg.e.e_f2_Lcg_ == null) {
            System.gc();
            Runtime.getRuntime().gc();
            rpg.e.e_f2_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/title.png");
        }
        cm2.a_m1_PLcg_IIIRV(rpg.e.e_f2_Lcg_, c, d - d / 3, 3);
        cm2.a_m2_PIRV(0xFF0000);
    }

    protected static void a_m4_PZRV(boolean bl2) {
        if (bl2) {
            e = 3;
        } else {
            b_f1_B = 0;
            e = 3;
        }
        rpg.c.a_m0_PRLrpg_c_().g();
    }
}

