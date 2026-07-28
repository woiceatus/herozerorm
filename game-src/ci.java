/*
 * Decompiled with CFR 0.152.
 */
final class ci
extends cd {
    public ci(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_, false);
        this.b_f1_B = 1;
        this.c_f1_I = -1;
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB((byte)0);
    }

    public final void a_m0_PBRV(byte by2) {
        if (by2 == 6 || by2 == 7) {
            super.a_m1_PBRV(by2);
        }
    }

    public final void c() {
        if (this.b_f1_B == 6) {
            ++this.c_f1_I;
        }
        this.t();
        if (this.b_f1_B == 6) {
            this.y();
        }
    }

    protected final void n() {
    }

    protected final void a_m1_PLal_IRV(al al2, int n2) {
        super.a_m16_PLal_IRV(al2, n2);
        this.c_f1_I = this.f_f0_I - this.f_f0_I * this.c_m0_PRI() / this.d_m0_PRI() - 1;
    }

    protected final void a_m2_PIIRV(int n2, int n3) {
        switch (this.b_f1_B) {
            case 0: 
            case 1: 
            case 2: 
            case 3: 
            case 4: {
                this.a_f1_Ls_.a_m2_PBBIIIRI((byte)0, (byte)1, this.c_f1_I, n2, n3);
                return;
            }
            case 6: {
                super.a_m3_PIIRV(n2, n3);
            }
        }
    }

    final void b(byte by2, int n2) {
    }

    final void a_m3_PBBIRV(byte by2, byte by3, int n2) {
    }

    final boolean a_m4_PBIRZ(byte by2, int n2) {
        return true;
    }

    final boolean a_m5_PBRZ(byte by2) {
        return true;
    }
}

