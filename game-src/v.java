/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

final class v
extends af {
    private byte[] Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 0);
    private byte[] R = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 1);
    private int e;
    private int l;
    private boolean i = false;

    public v(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 2);
        this.c_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 3);
        this.d_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 4);
        this.a_m0_PABRV(this.R);
        this.b_f2_I = 2;
        this.a_f2_B = this.b_f1_AB[this.b_f2_I];
        this.i = false;
        this.h_f0_B = 0;
        this.a_f1_S = this.c_f1_AB[this.a_f2_B];
        this.l = this.e = this.k_f2_I * 10 / 100;
    }

    protected final void l_m0_PRV() {
        if (this.b_f1_B != 30) {
            super.l();
            return;
        }
        if (this.j()) {
            this.a_m1_PBRV((byte)1);
        }
    }

    protected final int c() {
        if (this.l_m1_PRZ()) {
            return this.k_f2_I;
        }
        return this.l;
    }

    private boolean l_m1_PRZ() {
        return this.l <= 0;
    }

    protected final int d() {
        if (this.l_m1_PRZ()) {
            return this.j_f2_I;
        }
        return this.e;
    }

    /*
     * Enabled aggressive block sorting
     */
    protected final void k() {
        if (this.a_f1_S <= 0 && !this.f_f2_Z) {
            this.z();
            this.a_m1_PBRV((byte)3);
            return;
        }
        int n2 = this.a_m3_PLdu_RB(this.a_f1_Ldo_);
        int n3 = this.b_m2_PLdu_RB(this.a_f1_Ldo_);
        int n4 = n2;
        if (this.a_f1_Ldo_.s > this.s) {
            n4 = 0 - n2;
        }
        int n5 = n3;
        if (this.a_f1_Ldo_.t > this.t) {
            n5 = 0 - n3;
        }
        byte by2 = 0;
        byte by3 = 0;
        if (n5 != 0) {
            byte by4 = by2 = n5 > 0 ? (byte)1 : 2;
        }
        if (n4 != 0) {
            byte by5 = by3 = n4 > 0 ? (byte)3 : 4;
        }
        if (n2 < n3) {
            this.c_m0_PBRV(by2);
            return;
        }
        this.c_m0_PBRV(by3);
    }

    protected final void a_m0_PIIRV(int n2, int n3) {
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.h_f0_B == 1 || this.h_f0_B == 2 ? this.c_f0_B : (byte)1, this.c_f1_I, n2, n3);
    }

    private final void z() {
        do {
            byte by2 = this.a_f2_B;
            this.b_f2_I = (this.b_f2_I + 1) % this.b_f1_AB.length;
            this.a_f2_B = this.b_f1_AB[this.b_f2_I];
            if (by2 == 2 && this.l_m1_PRZ()) {
                this.b_f2_I = 1;
                this.a_f2_B = this.b_f1_AB[this.b_f2_I];
                this.i = true;
                return;
            }
            if (!this.l_m1_PRZ() || this.a_f2_B != 0) continue;
            this.b_f2_I = 0;
            this.a_f2_B = this.b_f1_AB[this.b_f2_I];
            this.i = true;
            return;
        } while (this.a_f2_B == 2 && !this.l_m1_PRZ());
    }

    protected final boolean a_m1_PIRZ(int n2) {
        return n2 == this.d_f1_AB[this.a_f2_B];
    }

    protected final void b() {
        switch (this.a_f2_B) {
            case 0: {
                this.a_m22_PABSZRZ(this.Q, this.a_m21_PRS(), true);
                return;
            }
            case 1: {
                for (int i2 = 0; i2 < 6; ++i2) {
                    int n2 = this.a_f1_Ldo_.s + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 4 - 2;
                    int n3 = this.a_f1_Ldo_.t + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 4 - 2;
                    if (n2 < 0 || n2 >= g.c_f3_B || n3 < 0 || n3 >= g.d_f2_B) continue;
                    new t(1, (short)(n2 << 4), (short)(n3 << 4), this.a_f1_Ls_, 16, false, this, 0, 0, 0);
                }
                break;
            }
        }
    }

    protected final void e() {
        if (this.a_f2_B == 1) {
            new ck(this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_);
            new ck(this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_);
        }
        this.a_m2_PIRV(this.c_f1_AB[this.a_f2_B]);
    }

    /*
     * Unable to fully structure code
     */
    protected final void a_m2_PRV() {
        switch (this.b_f1_B) {
            case 0: 
            case 1: 
            case 2: {
                if (this.l > 0) {
                    this.h_f0_B = this.i != false ? 1 : 0;
                    break;
                }
                v0 = this;
                v1 = 2;
                ** GOTO lbl37
            }
            case 3: {
                switch (this.a_f2_B) {
                    case 0: {
                        this.h_f0_B = (byte)(this.i != false ? 6 : 5);
                        this.i = this.i == false;
                        break;
                    }
                    case 1: {
                        this.h_f0_B = (byte)(this.l > 0 ? 3 : 4);
                        break;
                    }
                    case 2: {
                        this.h_f0_B = (byte)20;
                        this.l = this.e;
                    }
                }
                break;
            }
            case 4: {
                if (this.l > 0) {
                    this.h_f0_B = (byte)(this.i != false ? 8 : 7);
                    break;
                }
                v0 = this;
                v1 = 9;
                ** GOTO lbl37
            }
            case 6: 
            case 7: {
                break;
            }
            case 8: {
                break;
            }
            case 30: {
                v0 = this;
                v1 = this.i != false ? 15 : 14;
lbl37:
                // 3 sources

                v0.h_f0_B = (byte)v1;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    protected final void a_m3_PLal_IRV(al al2, int n2) {
        if (this.l > 0) {
            this.l -= n2;
            if (this.l <= 0) {
                this.l = 0;
                this.a_m1_PBRV((byte)30);
                return;
            }
        } else {
            this.k_f2_I -= n2;
            if (this.k_f2_I <= 0) {
                this.k_f2_I = 0;
            }
        }
    }

    protected final void m() {
        di.a_f4_Lg_.d_m2_PLdu_RV(this);
        this.b_m0_PABRV(this.R);
    }
}

