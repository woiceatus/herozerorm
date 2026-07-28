/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;

final class dj
extends eb {
    private int m = 0;
    private byte[][] a = null;

    public dj(n n2, byte[][] byArray, int n3) {
        super(n2, byArray.length, byArray.length, 1, (byte)6);
        this.a = byArray;
        this.l = byArray.length;
        for (int i2 = 0; i2 < this.l; ++i2) {
            int n4 = ac.a_m8_PABRI(byArray[i2]);
            if (n4 <= this.m) continue;
            this.m = n4;
        }
        this.m += 5;
        this.k = this.l * 14 + 4;
        this.f_f1_I = rpg.a.d - (this.k >> 1);
        this.e = rpg.a.c;
        if (n3 == 4) {
            this.e -= this.m + 3;
            return;
        }
        if (n3 == 8) {
            this.e += 3;
            return;
        }
        this.e -= this.m >> 1;
    }

    public dj(n n2, byte[][] byArray) {
        this(n2, byArray, 1);
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.c_m2_PIIRZ(n2, n3)) {
            this.a_f3_Z = true;
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.a_m3_PBBRV(this.f_f0_B, this.a_f2_B);
        } else if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
        }
        return true;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        eb.f(cm2, this.e, this.f_f1_I, this.m, this.k);
        cm2.a_m2_PIRV(3550755);
        cm2.a_m4_PIIIIRV(this.e + 2, this.f_f1_I + 2 + this.a_f2_B * 14, this.m - 4, 14);
        int n2 = this.e + (this.m >> 1);
        for (int i2 = 0; i2 < this.l; ++i2) {
            cm2.a_m2_PIRV(i2 == this.a_f2_B ? 0xFFFFFF : 0);
            ac.a_m2_PLcm_IIABIIRV(cm2, n2 + 1, this.f_f1_I + 2 + i2 * 14, this.a[i2], 0, 1);
        }
    }
}

