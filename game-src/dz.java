/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;

final class dz
extends b {
    private byte f;
    private byte g;
    private byte[] a;
    private byte[] b;
    private byte h;
    private byte i;

    public dz(n n2, byte by2, byte by3, byte by4, byte by5) {
        super(n2, (byte)0);
        this.f = by3;
        this.g = by2;
        this.h = by4;
        this.i = by5;
        switch (by3) {
            case 0: 
            case 2: {
                this.a = ax.b.a_m0_PIRAB(this.g << 1);
                this.b = ax.b.a_m0_PIRAB((this.g << 1) + 1);
                return;
            }
            case 1: {
                this.a = ax.c.a_m0_PIRAB(this.g << 1);
                this.b = ax.c.a_m0_PIRAB((this.g << 1) + 1);
            }
        }
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3) || n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
        }
        return true;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        int n2;
        this.a_m8_PLcm_ZZABZRV(cm2, false, true, e.b_f0_Lch_.a_m0_PIRAB(30), false);
        cm2.a_m2_PIRV(0);
        int n3 = this.b_ + 12;
        cm2.a_m4_PIIIIRV(this.a_, n3, d.e_, 16);
        int n4 = d.e_ - 70 - 6;
        int n5 = d.e_ - 4;
        int n6 = this.a_ + 2;
        int n7 = this.a_ + 2 + 70 + 2;
        int n8 = n3 + 16 + 1;
        int n9 = n8 + 14 + 3;
        int n10 = n9 + 14 + 3;
        for (n2 = 0; n2 < 2; ++n2) {
            n.c_m3_PLcm_IIIIRV(cm2, n6, n8 + n2 * 17, 70, 14);
            n.c_m3_PLcm_IIIIRV(cm2, n7, n8 + n2 * 17, n4, 14);
            cm2.e(this.a_, n9 - 2 + n2 * 17, this.a_ + d.e_, n9 - 2 + n2 * 17);
        }
        n.c_m3_PLcm_IIIIRV(cm2, this.a_ + 2, n10, n5, 102);
        cm2.a_m2_PIRV(14597755);
        for (n2 = 0; n2 < 2; ++n2) {
            ac.a_m2_PLcm_IIABIIRV(cm2, this.a_ + 2 + 35, n8 + n2 * 17 + 1, ax.a_f1_Lch_.a_m0_PIRAB(n2 + 26), 0, 1);
        }
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n3 + 1, this.a, 0, 1);
        ac.a_m2_PLcm_IIABIIRV(cm2, n7 + (n4 >> 1), n8 + 1, e.d_f0_Lch_.a_m0_PIRAB(7 + this.f), 0, 1);
        ac.a_m1_PLcm_IIIIABRV(cm2, this.a_ + 2 + 10, n10 + 4, n5 - 20, 0, this.b);
        n3 = (44 - this.i + 1) / this.i;
        for (n4 = 0; n4 < this.i; ++n4) {
            cm2.a_m2_PIRV(this.h > n4 ? 16755968 : 3550755);
            cm2.a_m4_PIIIIRV(n7 + 15 + n4 * (n3 + 1), n9 + 4, n3, 4);
        }
    }
}

