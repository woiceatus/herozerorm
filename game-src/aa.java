/*
 * Decompiled with CFR 0.152.
 */
final class aa
extends at {
    private s a;
    private byte c = 0;

    aa(s s2, byte by2) {
        super((byte)-20);
        this.a = s2;
        this.c = by2;
        this.a_f1_I = this.a.a_m3_PBRB(by2);
        ((at)this).c = 1;
    }

    final void a_m0_PIIRV(int n2, int n3) {
        this.a.a_m2_PBBIIIRI(this.c, (byte)1, this.b_f0_I % this.a_f1_I, n2, n3);
    }

    final void a_m1_PRV() {
        ++this.b_f0_I;
        if (this.b_f0_I >= this.a_f1_I) {
            this.a_f2_Z = true;
        }
    }
}

