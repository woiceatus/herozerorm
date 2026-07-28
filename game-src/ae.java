/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;

final class ae
extends eb {
    private byte[] a = null;
    private int m = 1;
    private boolean e = false;
    private cg b = null;
    private cg c = null;

    private ae(n n2, byte[] byArray, byte[][] byArray2, boolean n3) {
        super(n2, byArray2.length, byArray2.length, 1, (byte)6);
        this.a = byArray;
        this.l = byArray2.length;
        for (n3 = 0; n3 < this.l; ++n3) {
            int n4 = ac.a_m8_PABRI(byArray2[n3]);
            if (n4 <= this.j) continue;
            this.j = n4;
        }
        this.j = !this.e && this.j < d.f_ - 5 ? d.f_ : (this.j += 5);
        this.m = 1;
        int n5 = ac.a_m8_PABRI(byArray);
        if (n5 > this.j) {
            this.j = n5;
        }
        this.j += 11;
        if (this.j > d.f_) {
            this.j = d.f_;
            this.m = ac.a_m7_PABIRI(byArray, this.j - 10);
        }
        this.k = this.l + this.m << 4;
        if (!this.e) {
            this.k -= 16;
        }
        this.f_f1_I = rpg.a.d - (this.k >> 1);
        ((eb)this).e = rpg.a.c - (this.j >> 1);
        try {
            this.b = cg.a_m4_PLjava_lang_String_RLcg_("/sks/yes.png");
            this.c = cg.a_m4_PLjava_lang_String_RLcg_("/sks/back.png");
            return;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return;
        }
    }

    private ae(n n2, byte[] byArray, byte by2) {
        this(n2, byArray, rpg.e.b_f0_Lch_.a_m1_PIIRAAB(2, 3), false);
        this.f_f0_B = by2;
        if (this.f_f0_B == 4) {
            this.a_f2_B = 1;
        }
    }

    ae(n n2, byte[] byArray, byte by2, boolean bl2) {
        this(n2, byArray, 3);
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.f_f0_B == 1) {
            return false;
        }
        if (n2 != -6 && n2 == -7) {
            this.a_f1_Ln_.c_m0_PRV();
        }
        return true;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        int n2 = cm2.a_m6_PRI();
        int n3 = cm2.b_m2_PRI();
        int n4 = cm2.c_m1_PRI();
        int n5 = cm2.d_m1_PRI();
        cm2.b_m0_PIIIIRV(0, 0, rpg.a.a_f0_I, rpg.a.b_f0_I);
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(0, 0, rpg.a.a_f0_I, rpg.a.b_f0_I);
        if (rpg.e.k_f1_Lcg_ != null) {
            int n6 = rpg.e.k_f1_Lcg_.a_m5_PRI();
            for (int i2 = 0; i2 < rpg.a.a_f0_I; i2 += n6) {
                cm2.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, i2, 0, 20);
                cm2.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, i2, rpg.a.b_f0_I, 36);
            }
            if (this.c != null) {
                cm2.a_m1_PLcg_IIIRV(this.c, rpg.a.a_f0_I, rpg.a.b_f0_I, 40);
            }
        }
        cm2.a_m2_PIRV(0xFFFFFF);
        if (this.m == 1) {
            ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c + 1, this.f_f1_I + 5 + 1, this.a, 0, 1);
        } else {
            ac.a_m1_PLcm_IIIIABRV(cm2, 20, this.f_f1_I + 5 + 1, rpg.a.a_f0_I - 40, 0, this.a);
        }
        cm2.b_m0_PIIIIRV(n2, n3, n4, n5);
    }
}

