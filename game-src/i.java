/*
 * Decompiled with CFR 0.152.
 */
import rpg.RPGHeroEx;
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.f;

public final class i
extends n
implements f {
    private static i a = null;

    public static i a_m0_PRLi_() {
        if (a == null) {
            a = new i();
        }
        return a;
    }

    public static void a_m1_PRV() {
        if (a != null) {
            a = null;
        }
        di.a_f12_AAB = null;
        System.gc();
        Runtime.getRuntime().gc();
    }

    public i() {
        super(null, (byte)8);
        this.a_f2_B = di.i_f1_B > 0 ? (byte)1 : 0;
        this.f_m1_PRV();
    }

    final boolean a_m2_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            while (this.a_f2_B == 1 && di.i_f1_B <= 0 || this.a_f2_B == 6 && cf.a_f1_Ljava_lang_String_.equals("off")) {
                if (n2 == 5 || n3 == 54) {
                    this.a_f2_B = (byte)(this.a_f2_B + 1);
                    continue;
                }
                this.a_f2_B = (byte)(this.a_f2_B - 1);
            }
            this.f_m1_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            n3 = this.a_f2_B;
            i i2 = this;
            switch (n3) {
                case 0: 
                case 1: {
                    i2.b_f1_Ln_ = new au(i2, (byte)n3);
                    break;
                }
                case 3: {
                    i2.b_f1_Ln_ = new bd((n)i2, false);
                    break;
                }
                case 4: {
                    i2.b_f1_Ln_ = new r((n)i2, false);
                    break;
                }
                case 5: {
                    i2.b_f1_Ln_ = new j(i2);
                    break;
                }
                case 6: {
                    i2.b_f1_Ln_ = new cf(i2);
                    break;
                }
                case 2: {
                    i2.b_f1_Ln_ = new au(i2, (byte)n3);
                    break;
                }
                case 7: {
                    byte[] byArray = d.u;
                    v0.b_f1_Ln_ = new bt((n)i2, byArray, 3, false, true);
                }
            }
            return true;
        }
        return false;
    }

    final void a_m3_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 3 && by3 == 0) {
            switch (this.a_f2_B) {
                case 7: {
                    RPGHeroEx.a.destroyApp(true);
                }
            }
        }
    }

    protected final void a_m4_PLcm_RV(cm cm2) {
        bs.a_m0_PRLbs_();
        rpg.a.c_m1_PLcm_RV(cm2);
        if (!this.b_f3_Z) {
            this.b_m0_PLcm_RV(cm2);
        }
    }

    protected final void b_m0_PLcm_RV(cm cm2) {
        int n2;
        if (this.e_f0_B < 8) {
            n2 = 30 * this.e_f0_B;
            cm2.a_m3_PIIIRV(n2, n2, n2);
        } else {
            cm2.a_m2_PIRV(0xFFFFFF);
        }
        n2 = rpg.a.d + (rpg.a.d >> 1) - 3;
        if (e.a_f6_Lcg_ == null) {
            e.a_f6_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/imgbox.png");
        }
        cm2.a_m1_PLcg_IIIRV(e.a_f6_Lcg_, rpg.a.c, n2, 17);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n2 + 3, e.c_f0_Lch_.a_m0_PIRAB(this.a_f2_B), 0, 1);
    }

    protected final void b_m1_PRV() {
        if (this.e_f0_B > 8) {
            this.b_f3_Z = false;
        }
    }
}

