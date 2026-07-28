/*
 * Decompiled with CFR 0.152.
 */
final class dx
extends du {
    private byte a_f0_B;
    private int a_f1_I = -1;

    dx(byte by2, short s2, short s3) {
        super(s2, s3, (byte)0, (byte)0);
        this.a_f0_B = by2;
        this.a_f1_I = di.a_f4_Lg_.a_m1_PIIRI(s2 - 8 >> 4, s3 - 16 >> 4);
        if (this.a_f1_I != -1 && this.a_f1_I < 0) {
            this.a_f1_I += 256;
        }
    }

    public final void b(int n2, int n3) {
        if (g.b_f6_Z || !this.l) {
            return;
        }
        if ((n3 = n3 + this.i + this.r) + 16 < 0) {
            return;
        }
        n2 = n2 + this.h + this.q;
        dx dx2 = this;
        boolean bl2 = dx2.a_f1_I >= 19 && dx2.a_f1_I <= 21 || dx2.a_f1_I == 9 ? di.a_m11_PBRLbj_((byte)19).a_m10_PBBRI((byte)19, (byte)dx2.a_f1_I) > 0 : dx2.a_f1_I > 0 && di.a_m8_PIRZ(dx2.a_f1_I);
        if (bl2) {
            g.a_m0_PIIRV(n2, n3);
            return;
        }
        di.a_f4_Lg_.a_m10_PBIIRV(this.a_f0_B, n2, n3);
    }
}

