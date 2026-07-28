/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

final class bb
extends br {
    private byte[] a = new byte[9];
    private int m = 0;

    public bb(dd dd2, byte[] byArray) {
        super((n)dd2, byArray, '\u0000');
        this.c_f0_B = 1;
        this.d_f0_B = (byte)10;
        this.b_f2_B = (byte)10;
        this.a_m0_PIRV(this.l + 3);
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
            bb bb2 = this;
            n3 = 0;
            for (int i2 = bb2.a.length - 1; i2 >= 0; --i2) {
                n3 = n3 * 10 + bb2.a[i2];
            }
            int n4 = n3;
            if (n4 > de.f_f0_I) {
                this.b_f1_Ln_ = new br((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(25), '\u0000');
            } else {
                ((dd)this.a_f1_Ln_).e = n4;
                this.a_f1_Ln_.c_m0_PRV();
            }
            return true;
        }
        if (n3 == 52 || n2 == 2) {
            ++this.m;
            if (this.m > 8) {
                this.m = 0;
            }
            this.a_f2_B = this.a[this.m];
            return true;
        }
        if (n3 == 54 || n2 == 5) {
            --this.m;
            if (this.m < 0) {
                this.m = 8;
            }
            this.a_f2_B = this.a[this.m];
            return true;
        }
        return this.e(n2, n3);
    }

    protected final boolean e(int n2, int n3) {
        if (n3 == 50 || n2 == 1) {
            this.a_m5_PBRV((byte)4);
            this.a[this.m] = this.a_f2_B;
            return true;
        }
        if (n3 == 56 || n2 == 6) {
            this.a_m5_PBRV((byte)3);
            this.a[this.m] = this.a_f2_B;
            return true;
        }
        return false;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        super.a_m2_PLcm_RV(cm2);
        int n2 = this.f_f1_I + 25;
        int n3 = ((eb)this).e + 20;
        n.a_m15_PLcm_ABIIIRV(cm2, this.a, n3, n2 + 16, 8);
        n.a_m14_PLcm_IIIIZRV(cm2, n3 - 8, n2 + 19, 86, 3550755, false);
        n.c_m4_PLcm_IIIRV(cm2, n3 + 2 + (8 - this.m << 3), n2 + 12, 12);
        ac.a_m0_PLcm_IIABIRV(cm2, ((eb)this).e + 10, n2 + 33, rpg.e.b_f0_Lch_.a_m0_PIRAB(31), 0);
        this.b_m5_PLcm_IIIRV(cm2, ((eb)this).e + 105, n2 + 34, de.f_f0_I);
    }
}

