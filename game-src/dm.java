/*
 * Decompiled with CFR 0.152.
 */
final class dm
extends cr {
    private int d;
    private int e;

    dm(byte by2, byte by3, int n2, int n3, int n4, boolean bl2) {
        super(by2, by3, n2);
        this.d = n3 + 8;
        this.e = n4 + 8;
        this.b_f2_Z = bl2;
    }

    final void a(int n2, int n3) {
        if (this.a_f0_Ls_ == null) {
            this.a_f2_Z = true;
            return;
        }
        this.a_f0_Ls_.a_m2_PBBIIIRI(this.c, (byte)1, this.b_f0_I % this.a_f1_I, n2 += this.d, n3 += this.e);
    }
}

