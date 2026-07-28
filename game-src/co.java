/*
 * Decompiled with CFR 0.152.
 */
final class co
extends cd {
    public static byte a;
    public static short b_f0_S;
    private boolean b_f1_Z;

    public co(short s2, short s3, boolean bl2) {
        super(s2, s3, b_f0_S, a, av.a_f0_Lav_.a_f1_Ls_, true);
        this.c_m0_PBRV((byte)1);
        this.a_m1_PBRV((byte)8);
        this.b_f1_Z = bl2;
    }

    protected final void a_m0_PRV() {
        this.h_f0_B = this.b_f1_B == 8 ? (byte)8 : (this.b_f1_B == 6 ? (byte)10 : (byte)9);
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    public final void l() {
        switch (this.b_f1_B) {
            case 8: {
                if (!this.j()) break;
                this.a_m1_PBRV((byte)1);
                return;
            }
            case 6: {
                if (!this.j()) break;
                this.a_m1_PBRV((byte)7);
                return;
            }
            default: {
                if (!this.b_f1_Z || this.a_f1_S != 0) break;
                al[] alArray = cd.a_m24_PRALal_();
                for (int i2 = 0; i2 < 2; ++i2) {
                    if (alArray[i2] == null || this.a_m4_PLdu_RI(alArray[i2]) > this.i) continue;
                    this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), (byte)0);
                    this.a_f1_S = this.j_f0_B;
                }
            }
        }
    }

    protected final void a_m1_PIIRV(int n2, int n3) {
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.c_f0_B, this.c_f1_I, n2, n3);
    }

    public final void c(int n2) {
    }

    public final void g() {
        this.m();
    }

    final void b(byte by2, int n2) {
    }

    final void a_m2_PBBIRV(byte by2, byte by3, int n2) {
    }

    final boolean a_m3_PBIRZ(byte by2, int n2) {
        return true;
    }

    final boolean a_m4_PBRZ(byte by2) {
        return true;
    }

    protected final int a_m5_PIRI(int n2) {
        super.a_m2_PIRI(n2);
        return n2;
    }
}

