/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;
import rpg.e;

abstract class cx
extends af {
    protected boolean i = false;
    protected byte o = (byte)-1;
    protected byte p = (byte)100;

    public cx(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_);
        this.b_f0_Z = false;
        this.c_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 18);
        this.u();
    }

    protected final void f() {
        this.a_f2_Lal_ = this.a_f1_Ldo_;
    }

    protected final void k() {
        if (this.a_f1_S <= 0 && !this.f_f2_Z) {
            this.f();
            int n2 = this.a_m4_PLdu_RI(this.a_f1_Ldo_);
            if (n2 < this.o) {
                this.a_f2_B = (byte)2;
                this.a_m1_PBRV((byte)3);
                return;
            }
            if (n2 > this.p) {
                this.a_f2_B = 1;
                this.a_m1_PBRV((byte)3);
                return;
            }
            if (!this.a_() && !this.a_m3_PLdu_BRZ(this.a_f2_Lal_, ((cd)this).i) && this.a_m8_PLdu_RZ(this.a_f2_Lal_)) {
                cx cx2 = this;
                this.b_f2_I = (cx2.b_f2_I + 1) % cx2.b_f1_AB.length;
                cx2.a_f2_B = cx2.b_f1_AB[cx2.b_f2_I];
                this.a_m1_PBRV((byte)3);
            }
        }
    }

    protected abstract boolean a_();

    protected void a_m0_PIIRV(int n2, int n3) {
        switch (this.b_f1_B) {
            case 0: 
            case 1: 
            case 2: 
            case 3: 
            case 4: {
                this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.c_f0_B, this.c_f1_I, n2, n3);
                return;
            }
            case 6: {
                rpg.e.a_f4_Ls_.a_m2_PBBIIIRI(this.h_f0_B, (byte)1, this.c_f1_I, n2, n3);
                return;
            }
            case 100: {
                this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, (byte)1, this.c_f1_I, n2, n3);
            }
        }
    }

    protected final void a_m1_PBBZRV(byte by2, byte by3, boolean bl2) {
        g g2 = di.a_f4_Lg_;
        byte by4 = bl2 ? (byte)0 : this.a_f1_Ldo_.c_f0_B;
        int n2 = 0;
        do {
            byte by5;
            byte by6;
            if (g2.a_m12_PLal_IIRZ(this, by6 = (byte)(by2 + rpg.d.J[by4]), by5 = (byte)(by3 + rpg.d.K[by4]))) {
                this.v();
                this.a_m0_PSSRV((short)(by6 << 4), (short)(by5 << 4));
                this.E();
                this.u();
                this.c_m0_PBRV(rpg.d.P[bl2 ? this.c_f0_B : this.a_f1_Ldo_.c_f0_B]);
                return;
            }
            if ((by4 = (byte)(by4 + 1)) <= 4) continue;
            by4 = 1;
        } while (n2++ < 5);
    }

    protected final boolean l() {
        byte[] byArray = new byte[]{rpg.d.J[this.c_f0_B], rpg.d.K[this.c_f0_B], (byte)(rpg.d.J[this.c_f0_B] << 1), (byte)(rpg.d.K[this.c_f0_B] << 1), (byte)(rpg.d.J[this.c_f0_B] * 3), (byte)(rpg.d.K[this.c_f0_B] * 3)};
        return this.a_m22_PABSZRZ(byArray, this.a_m21_PRS(), this.i);
    }

    protected final boolean m() {
        byte[] byArray = new byte[]{rpg.d.J[this.c_f0_B], rpg.d.K[this.c_f0_B], rpg.d.J[rpg.d.M[this.c_f0_B]], rpg.d.K[rpg.d.M[this.c_f0_B]], rpg.d.J[rpg.d.L[this.c_f0_B]], rpg.d.K[rpg.d.L[this.c_f0_B]]};
        return this.a_m22_PABSZRZ(byArray, this.a_m21_PRS(), this.i);
    }

    protected final boolean b_m0_PRZ() {
        return super.b_m1_PRZ() || this.b_f1_B == 100;
    }

    final void b_m1_PBIRV(byte by2, int n2) {
        if (!this.b_m0_PRZ()) {
            super.b_m0_PBIRV(by2, n2);
        }
    }

    final void a_m2_PBBIRV(byte by2, byte by3, int n2) {
        if (!this.b_m0_PRZ()) {
            super.a_m2_PBBIRV(by2, by3, n2);
        }
    }

    final boolean a_m3_PBIRZ(byte by2, int n2) {
        if (!this.b_m0_PRZ()) {
            return super.a_m4_PBIRZ(by2, n2);
        }
        return true;
    }

    final boolean a_m4_PBRZ(byte by2) {
        if (!this.b_m0_PRZ()) {
            return super.a_m3_PBRZ(by2);
        }
        return true;
    }

    protected final void z() {
        this.h_f0_B = 0;
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }
}

