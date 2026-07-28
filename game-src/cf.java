/*
 * Decompiled with CFR 0.152.
 */
import rpg.RPGHeroEx;
import rpg.a;
import rpg.d;

final class cf
extends b {
    private byte[] a_f0_AB;
    private String b_f0_Ljava_lang_String_ = null;
    private cg b_f1_Lcg_ = null;
    private cg c_f0_Lcg_ = null;
    private cg d = null;
    public static String a_f1_Ljava_lang_String_ = null;
    private static String c_f1_Ljava_lang_String_ = null;
    private static boolean e = true;

    cf(n n2) {
        super(n2, (byte)3);
        this.a_f2_B = 0;
        if (a_f1_Ljava_lang_String_ != null && !a_f1_Ljava_lang_String_.equals("off")) {
            if (a_f1_Ljava_lang_String_.equals("static")) {
                this.a_f0_AB = rpg.d.G;
            } else {
                this.a_f0_AB = rpg.d.F;
                this.b_f0_Ljava_lang_String_ = RPGHeroEx.a.getAppProperty("MoreGames_WAP_URI").trim();
            }
        }
        n2 = this;
        try {
            ((cf)n2).c_f0_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/sks/no.png");
            ((cf)n2).b_f1_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/sks/yes.png");
            ((cf)n2).d = cg.a_m4_PLjava_lang_String_RLcg_("/sks/back.png");
            return;
        }
        catch (Exception exception) {
            return;
        }
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = (byte)6;
            this.a_f1_Ln_.c_m0_PRV();
            cf cf2 = this;
            try {
                cf2.c_f0_Lcg_ = null;
                cf2.b_f1_Lcg_ = null;
                cf2.d = null;
                System.gc();
            }
            catch (Exception exception) {}
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (!a_f1_Ljava_lang_String_.equals("static")) {
                String string = this.b_f0_Ljava_lang_String_;
                try {
                    RPGHeroEx.a.platformRequest(string);
                    RPGHeroEx.a.notifyDestroyed();
                }
                catch (Exception exception) {
                    System.out.println("excpeton occured" + exception);
                    RPGHeroEx.a.notifyDestroyed();
                }
                finally {
                    RPGHeroEx.a.notifyDestroyed();
                }
            } else {
                return true;
            }
            return true;
        }
        return true;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        a.a_m3_PLcm_ZRV(cm2, true);
        int n2 = a.d;
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n2 + 3, this.a_f0_AB, 0, 1);
        if (a_f1_Ljava_lang_String_.equals("static")) {
            cm2.a_m1_PLcg_IIIRV(this.d, a.a_f0_I, a.b_f0_I, 40);
            return;
        }
        cm2.a_m1_PLcg_IIIRV(this.b_f1_Lcg_, 0, a.b_f0_I, 36);
        cm2.a_m1_PLcg_IIIRV(this.c_f0_Lcg_, a.a_f0_I, a.b_f0_I, 40);
    }

    final void a_m2_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 3 && by3 == 0) {
            RPGHeroEx.a.a("Tj" + (this.a_f2_B + 1) + "URL");
        }
    }

    public static void a_m3_PRV() {
        a_f1_Ljava_lang_String_ = RPGHeroEx.a.getAppProperty("MoreGames_Impl");
        if (a_f1_Ljava_lang_String_ == null) {
            a_f1_Ljava_lang_String_ = "off";
            return;
        }
        if (!((a_f1_Ljava_lang_String_ = a_f1_Ljava_lang_String_.toLowerCase()).equals("static") || a_f1_Ljava_lang_String_.equals("wap") || a_f1_Ljava_lang_String_.equals("wapstatic"))) {
            a_f1_Ljava_lang_String_ = "off";
            return;
        }
        c_f1_Ljava_lang_String_ = RPGHeroEx.a.getAppProperty("MoreGames_WAP_URI");
        if (a_f1_Ljava_lang_String_.equals("wap") && (!e || c_f1_Ljava_lang_String_ == null || c_f1_Ljava_lang_String_.trim().equals(""))) {
            a_f1_Ljava_lang_String_ = "off";
        }
        if (a_f1_Ljava_lang_String_.equals("wapstatic") && (!e || c_f1_Ljava_lang_String_ == null || c_f1_Ljava_lang_String_.trim().equals(""))) {
            a_f1_Ljava_lang_String_ = "static";
        }
    }
}

