/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.e;
import rpg.f;

final class aw
extends de {
    public aw(n n2) {
        super(n2, (byte)2);
        this.a_f2_B = 0;
        this.f_m1_PRV();
        de.h();
        di.m();
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            switch (this.a_f2_B) {
                case 0: {
                    this.b_f1_Ln_ = new w(this);
                    break;
                }
                case 1: {
                    this.b_f1_Ln_ = new dk(this, 0);
                }
            }
            return true;
        }
        return this.c_m2_PIIRZ(n2, n3);
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        a.a_m3_PLcm_ZRV(cm2, true);
        int n2 = f.e;
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.d - 64, rpg.e.b_f0_Lch_.a_m0_PIRAB(9), 0, 1);
        for (byte by2 = 0; by2 < 2; by2 = (byte)(by2 + 1)) {
            int n3 = this.b_ + 25 + by2 * 17;
            n.a_m6_PLcm_IIIIIIRV(cm2, this.a_, n3, n2, 15, this.a_f2_B == by2 ? 0x660000 : 3550755, this.a_f2_B == by2 ? 0xBD0000 : 7027456);
            cm2.a_m2_PIRV(this.a_f2_B == by2 ? 0xFFFFFF : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n3, rpg.e.h_f0_Lch_.a_m0_PIRAB(by2 + 18), 0, 1);
        }
        n.a_m0_PLcm_IRV(cm2, 3);
    }
}

