/*
 * Decompiled with CFR 0.152.
 */
final class ck
extends cd {
    public static byte a = 0;
    public static short b_f0_S;
    private int b_f1_I = 0;

    public ck(short s2, short s3, s s4) {
        super(s2, s3, b_f0_S, a, s4, true);
        this.a_m1_PBRV((byte)8);
        this.b_f1_I = 50;
    }

    protected final void c() {
        --this.b_f1_I;
        if (this.b_f1_I == 0) {
            this.k_f2_I = 0;
            this.a_m1_PBRV((byte)6);
        }
        super.c_m2_PRV();
    }

    protected final void a_m0_PRV() {
        switch (this.b_f1_B) {
            case 8: {
                this.h_f0_B = (byte)10;
                break;
            }
            case 3: {
                this.h_f0_B = (byte)11;
                break;
            }
            case 6: {
                this.h_f0_B = (byte)13;
                break;
            }
            default: {
                this.h_f0_B = (byte)12;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    protected final void a_m1_PIIRV(int n2, int n3) {
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.h_f0_B == 12 ? this.c_f0_B : (byte)1, this.c_f1_I, n2, n3);
    }

    protected final void d() {
        if (this.c_f1_I == 1) {
            this.a_m22_PABSZRZ(dy.f, this.a_m21_PRS(), true);
        }
        if (this.j()) {
            this.a_m1_PBRV((byte)1);
        }
    }

    public final void g() {
        this.a_m1_PBRV((byte)7);
        di.a_f4_Lg_.d_m2_PLdu_RV(this);
    }
}

