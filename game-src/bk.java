/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;
import rpg.f;

final class bk
extends dg {
    private byte f = 0;
    private bm a = null;
    private bm b;
    private boolean h = false;

    public bk(n n2, byte by2) {
        super(n2, (byte)12, (byte)3, (byte)4);
        this.f = by2;
        this.e_f1_I = 0;
        this.h = true;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            byte by2;
            bk bk2 = this;
            do do_ = di.a_f9_Ldo_;
            if (bk2.a != null) {
                do_.a_m31_PLbm_RV(bk2.a);
                bk2.a = null;
            }
            if ((by2 = dg.b[bk2.f]) >= 0) {
                bm bm2 = (bm)di.a_m12_PRLbj_().a_m1_PIRLas_(by2);
                do_.a_m30_PBLbm_RV(bk2.f, bm2);
            }
            do_.i_m1_PRV();
            this.a_f1_Ln_.a_f2_B = this.f;
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            n2 = this.a_f2_B + this.e_f1_I * 12;
            bm bm3 = this.a_m3_PIRLbm_(n2);
            if (bm3 == null) {
                return true;
            }
            this.b_f1_Ln_ = new dj(this, ax.a_f1_Lch_.a_m1_PIIRAAB(39, 25), 1);
            return true;
        }
        if (n3 == 52 || n2 == 2) {
            if (this.e_f2_Z) {
                this.e_f1_I = (this.e_f1_I + this.f_f0_I - 1) % this.f_f0_I;
            } else if (this.f_f1_Z) {
                this.f_f1_Z = false;
            } else if (this.f_f0_I > 1 && this.a_f2_B % 4 == 0) {
                this.e_f2_Z = true;
            } else {
                this.b_m3_PBRV((byte)3);
                this.h = true;
            }
            return true;
        }
        if (n3 == 54 || n2 == 5) {
            if (this.e_f2_Z) {
                this.e_f2_Z = false;
            } else if (this.f_f1_Z) {
                this.e_f1_I = (this.e_f1_I + 1) % this.f_f0_I;
            } else if (this.f_f0_I > 1 && this.a_f2_B % 4 == 3) {
                this.f_f1_Z = true;
            } else {
                this.b_m3_PBRV((byte)4);
                this.h = true;
            }
            return true;
        }
        if (this.e_m1_PIIRZ(n2, n3)) {
            this.h = true;
            return true;
        }
        return true;
    }

    final void a_m1_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 6) {
            if (by3 == 0) {
                this.b_f1_Ln_ = new br((n)this, ax.a_f1_Lch_.a_m0_PIRAB(57), '\u0000');
                bk bk2 = this;
                do do_ = di.a_f9_Ldo_;
                do_.a_m30_PBLbm_RV(bk2.f, bk2.a);
                do_.i_m1_PRV();
                byte by4 = dg.a_f0_AB[bk2.f];
                if (by4 >= 0) {
                    e.a_m11_PLca_IRV(e.a_f2_Lca_, by4);
                }
                dg.g = true;
                this.a_f1_Ln_.c_m0_PRV();
                return;
            }
            if (by3 == 1) {
                this.b_f1_Ln_ = new cj((n)this, this.a);
            }
        }
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        if (this.h) {
            int n2 = this.a_f2_B + this.e_f1_I * 12;
            this.b = this.a_m3_PIRLbm_(n2);
            if (this.b != null) {
                bm bm2 = this.b;
                bk bk2 = this;
                do do_ = di.a_f9_Ldo_;
                bk2.a = bm2;
                do_.a_m30_PBLbm_RV(bk2.f, bk2.a);
                do_.i_m1_PRV();
                dg.e_f0_AI = new int[7];
                dg.e_f0_AI = dg.a_m5_PRAI();
            }
            this.h = false;
        }
        this.a_m0_PLcm_BLas_ZZRV(cm2, this.f, this.b, this.b != null, this.f == 5);
    }

    protected final void b(cm cm2) {
        if (this.e_f2_Z) {
            this.e(cm2, n.b_f0_AI[this.e_f0_B], this.a_ + (rpg.f.b - 122 >> 1) + 56, this.b_ + 17 + 21);
            return;
        }
        if (this.f_f1_Z) {
            this.f(cm2, n.b_f0_AI[this.e_f0_B], this.a_ + 105 + 73 - 11, this.b_ + 17 + 21);
            return;
        }
        int n2 = this.a_f2_B / this.c_f0_B;
        int n3 = this.a_f2_B % this.c_f0_B;
        n3 = this.a_ + (rpg.f.b - 122 >> 1) + 56 + n3 * 15;
        n2 = this.b_ + 17 + n2 * 15;
        this.a_m4_PLcm_IIIIRV(cm2, n3, n2, 13, 13);
    }

    private bm a_m3_PIRLbm_(int n2) {
        byte[] byArray = dg.a_f1_AAB[this.f];
        bm bm2 = null;
        if (byArray != null && n2 < byArray.length) {
            bm2 = (bm)di.a_m12_PRLbj_().a_m1_PIRLas_(byArray[n2]);
        }
        return bm2;
    }
}

