/*
 * Decompiled with CFR 0.152.
 */
package rpg;

import rpg.RPGHeroEx;
import rpg.a;
import rpg.b;
import rpg.e;
import rpg.g;

public final class c
implements Runnable {
    private static final byte[] a_f0_AB = new byte[]{6, 10, 14, 18};
    private static c a_f1_Lrpg_c_ = new c();
    private ct a_f2_Lct_ = ct.a_m2_PRLct_();
    private a a_f3_Lrpg_a_;
    public static byte a_f4_B = (byte)3;
    public static byte b_f0_B = (byte)2;
    public static byte c_f0_B = (byte)2;
    public static boolean a_f5_Z = true;
    private static byte e_f0_B = 0;
    public static boolean b_f1_Z = false;
    public static boolean c_f1_Z = false;
    private static boolean g = true;
    public static byte d_f0_B = 0;
    private static long a_f6_J = 0L;
    public static boolean d_f1_Z = true;
    private static int a_f7_I;
    private static int b_f2_I;
    private static long b_f3_J;
    public static boolean e_f1_Z;
    private static ar a_f8_Lar_;
    public static ds a_f9_Lds_;
    public static boolean f;

    c() {
        a_f8_Lar_ = new ar();
        a_f7_I = a_f0_AB[b_f0_B];
        c c2 = this;
        c.a_m2_PIRV(a_f7_I);
    }

    public static c a_m0_PRLrpg_c_() {
        return a_f1_Lrpg_c_;
    }

    public final synchronized void a_m1_PRV() {
        e_f1_Z = true;
        bq.b_m0_PRV();
        c.a_m1_PZRV(true);
        if (this.a_f3_Lrpg_a_ != null) {
            this.a_f3_Lrpg_a_.a_m0_PRV();
        }
    }

    public final synchronized void b() {
        if (e_f1_Z) {
            e_f1_Z = false;
        }
        if (this.a_f3_Lrpg_a_ != null) {
            this.a_f3_Lrpg_a_.b_m0_PRV();
        }
    }

    public final void c() {
        e.f();
        this.a_f3_Lrpg_a_ = bv.a_m0_PRLbv_();
        bv.a_m0_PRLbv_().a_m3_PBRV((byte)1);
        ct.a_m1_PLaz_RV(this.a_f3_Lrpg_a_);
        new Thread(this).start();
        if (a_f9_Lds_ == null) {
            a_f9_Lds_ = new ds(RPGHeroEx.a);
        }
    }

    public final void d() {
        this.a_f3_Lrpg_a_ = bs.a_m0_PRLbs_();
        di.b_m0_PRV();
        ct.a_m1_PLaz_RV(this.a_f3_Lrpg_a_);
        bv.d_m0_PRV();
    }

    public final void run() {
        if (!f) {
            f = true;
            while (f) {
                Exception exception;
                try {
                    if (f.a_f2_Z || f.b_f1_Z) {
                        ct.a_f2_Ljavax_microedition_lcdui_Canvas_.repaint();
                        try {
                            Thread.sleep(50L);
                        }
                        catch (InterruptedException interruptedException) {
                            exception = interruptedException;
                            interruptedException.printStackTrace();
                        }
                        continue;
                    }
                    f.a_m0_PRV();
                    long l2 = System.currentTimeMillis() - b_f3_J;
                    if (l2 < (long)b_f2_I) {
                        try {
                            Thread.sleep((long)b_f2_I - l2);
                        }
                        catch (InterruptedException interruptedException) {}
                    } else {
                        Thread.sleep(10L);
                    }
                    if (do.c_f3_Z) {
                        do.a_f11_J -= System.currentTimeMillis() - b_f3_J;
                        do.c_f3_Z = false;
                    }
                    b_f3_J = System.currentTimeMillis();
                    if (e_f1_Z) continue;
                    if (!di.f_f0_Z) {
                        bq.a_m0_PRV();
                    }
                    this.a_f3_Lrpg_a_.a_m2_PIIRV(a.a_f0_I, a.b_f0_I);
                }
                catch (Exception exception2) {
                    exception = exception2;
                    exception2.printStackTrace();
                }
            }
        }
    }

    public static void e() {
        long l2 = System.currentTimeMillis() - b_f3_J;
        if (l2 < (long)b_f2_I) {
            try {
                Thread.sleep((long)b_f2_I - l2);
                return;
            }
            catch (InterruptedException interruptedException) {
                return;
            }
        }
        Thread.yield();
    }

    public static void a_m2_PIRV(int n2) {
        b_f2_I = 1000 / n2;
    }

    public final void f() {
        c.a_m2_PIRV(a_f7_I);
    }

    public final void g() {
        c.a_m2_PIRV(10);
    }

    public final void h() {
        c.a_m2_PIRV(20);
    }

    public static void a_m3_PBRV(byte by2) {
        b_f0_B = by2;
        a_f7_I = a_f0_AB[by2];
    }

    public final void i() {
        Object object = this;
        c.a_m2_PIRV(20);
        try {
            object = this;
            byte[] byArray = b.a_m4_PRAB();
            object = byArray;
            object = byArray;
            a_f4_B = (byte)((byArray[0] & 0xF0) >> 4);
            c_f1_Z = (object[0] & 8) != 0;
            g = (object[0] & 4) != 0;
            b_f1_Z = (object[0] & 2) != 0;
            a_f5_Z = (object[0] & 1) != 0;
            b_f0_B = (byte)((object[1] & 0xF0) >> 4);
            e_f0_B = (byte)(object[1] & 0xF);
            c_f0_B = (byte)object[2];
            a_f6_J = rpg.g.a_m1_PABIRJ((byte[])object, 3);
            di.f_f1_I = rpg.g.a_m2_PABIRI((byte[])object, 11);
            d_f0_B = (byte)object[15];
            d_f1_Z = object[16] == true;
        }
        catch (Exception exception) {
            try {
                if (a_f6_J == 0L) {
                    a_f6_J = rpg.g.a_m9_PRJ();
                }
                this.j();
            }
            catch (Exception exception2) {}
        }
        c.a_m3_PBRV(b_f0_B);
    }

    public final void j() {
        byte[] byArray = new byte[24];
        int n2 = 0 | (a_f4_B & 0xF) << 4;
        if (c_f1_Z) {
            n2 |= 8;
        }
        if (g) {
            n2 |= 4;
        }
        if (b_f1_Z) {
            n2 |= 2;
        }
        if (a_f5_Z) {
            n2 |= 1;
        }
        byArray[0] = (byte)n2;
        byArray[1] = (byte)((b_f0_B & 0xF) << 4 | e_f0_B);
        byArray[2] = c_f0_B;
        rpg.g.a_m6_PJABIRV(a_f6_J, byArray, 3);
        rpg.g.a_m4_PIABIRV(di.f_f1_I, byArray, 11);
        byArray[15] = d_f0_B;
        byArray[16] = (byte)(d_f1_Z ? 1 : 0);
        b.a_m3_PABRZ(byArray);
    }

    public static final void k() {
        if (a_f5_Z) {
            a_f8_Lar_.a();
        }
    }

    static {
        a_f9_Lds_ = null;
        f = false;
    }
}

