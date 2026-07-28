/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;

final class bt
extends eb {
    private int m = 0;
    private byte[] a_f0_AB = null;
    private byte[][] a_f1_AAB = null;
    private int n;
    private int o = 1;
    private boolean e = true;
    private boolean g = false;
    private boolean h = true;

    bt(n n2, byte[] byArray, byte[][] byArray2, boolean n3) {
        super(n2, byArray2.length, byArray2.length, 1, (byte)6);
        this.h = n3;
        this.a_f0_AB = byArray;
        this.a_f1_AAB = byArray2;
        this.l = byArray2.length;
        for (n3 = 0; n3 < this.l; ++n3) {
            int n4 = ac.a_m8_PABRI(byArray2[n3]);
            if (n4 <= this.j) continue;
            this.j = n4;
        }
        this.j = !this.h && this.j < d.f_ - 5 ? d.f_ : (this.j += 5);
        this.o = 2;
        int n5 = this.j;
        int n6 = ac.a_m8_PABRI(byArray);
        if (n6 > this.j) {
            this.j = n6;
        }
        this.j += 11;
        if (this.j > d.f_) {
            this.j = d.f_;
            this.o = ac.a_m7_PABIRI(byArray, this.j - 10);
        }
        this.k = (this.l + this.o << 4) + 10 + 3;
        if (!this.h) {
            this.k -= 16;
        }
        this.f_f1_I = a.d - (this.k >> 1);
        ((eb)this).e = a.c - (this.j >> 1);
        this.n = 4;
        this.m = a.c - (n5 >> 1);
        this.g = false;
    }

    bt(n n2, byte[] byArray, byte[][] byArray2) {
        this(n2, byArray, byArray2, true);
    }

    bt(n n2, byte[] byArray, byte by2, boolean bl2) {
        this(n2, byArray, rpg.e.b_f0_Lch_.a_m1_PIIRAAB(2, 3), false);
        this.f_f0_B = by2;
        this.n = 1;
        this.m = a.c + 1;
        this.e = bl2;
        if (this.f_f0_B == 4) {
            this.a_f2_B = 1;
        }
        if (by2 == 3) {
            this.g = true;
        }
    }

    bt(n n2, byte[] byArray, byte by2, boolean bl2, boolean bl3) {
        this(n2, byArray, by2, bl2);
        this.g = true;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.h) {
            if (this.c_m2_PIIRZ(n2, n3)) {
                this.a_f3_Z = true;
                return true;
            }
        } else if (this.d_m2_PIIRZ(n2, n3)) {
            this.a_f3_Z = true;
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.a_m3_PBBRV(this.f_f0_B, this.a_f2_B);
        } else if (this.g && n.g(n2, n3)) {
            this.a_f1_Ln_.a_m3_PBBRV(this.f_f0_B, (byte)1);
        }
        return true;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        int n2;
        int n3;
        if (this.e) {
            eb.f(cm2, ((eb)this).e, this.f_f1_I, this.j, this.k);
            cm2.a_m2_PIRV(15723216);
            cm2.d_m0_PIIIIRV(((eb)this).e, this.f_f1_I, this.j - 1, this.k - 1);
            cm2.a_m2_PIRV(3550755);
        } else {
            int n4 = this.k;
            int n5 = this.j;
            n3 = this.f_f1_I;
            n2 = ((eb)this).e;
            cm cm3 = cm2;
            cm3.b_m0_PIIIIRV(n2 - 1, n3 - 1, n5 + 2, n4 + 2);
            cm3.a_m2_PIRV(3550755);
            cm3.a_m4_PIIIIRV(n2 - 1, n3 - 1, n5 + 2, n4 + 2);
            cm3.a_m2_PIRV(7027456);
            cm3.d_m0_PIIIIRV(n2, n3, n5 - 1, n4 - 1);
            cm2.a_m2_PIRV(0x660000);
        }
        if (this.h) {
            cm2.a_m4_PIIIIRV(((eb)this).e + 2, this.f_f1_I + 5 + (this.a_f2_B + this.o << 4) + 3, this.j - 4, 16);
        }
        if (!this.e) {
            cm2.a_m2_PIRV(0xFFFFFF);
        }
        if (this.o == 1) {
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c + 1, this.f_f1_I + 5 + 1, this.a_f0_AB, 0, 1);
        } else {
            ac.a_m1_PLcm_IIIIABRV(cm2, ((eb)this).e + 5, this.f_f1_I + 5 + 1, this.j - 10, 0, this.a_f0_AB);
        }
        if (this.h) {
            for (int i2 = 0; i2 < this.l; ++i2) {
                cm2.a_m2_PIRV(i2 == this.a_f2_B ? 0xFFFFFF : (this.e ? 0 : 12630160));
                ac.a_m2_PLcm_IIABIIRV(cm2, this.m, this.f_f1_I + 5 + 1 + (i2 + this.o << 4) + 3, this.a_f1_AAB[i2], 0, this.n);
            }
            return;
        }
        n2 = this.f_f1_I + 5 + 1 + (this.o << 4) + 3;
        for (n3 = 0; n3 < this.l; ++n3) {
            int n6 = a.c - 30 + n3 * 60;
            if (n3 == this.a_f2_B) {
                cm2.a_m2_PIRV(0x660000);
                cm2.a_m4_PIIIIRV(n6 - 26, n2 - 1, 52, 15);
            }
            cm2.a_m2_PIRV(n3 == this.a_f2_B ? 0xFFFFFF : (this.e ? 0 : 12630160));
            ac.a_m2_PLcm_IIABIIRV(cm2, n6, n2, this.a_f1_AAB[n3], 0, 1);
        }
    }
}

