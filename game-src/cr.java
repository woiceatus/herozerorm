/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

class cr
extends at {
    protected byte c;
    protected s a_f0_Ls_;
    private byte d;
    private static final byte[] a_f1_AB = new byte[]{0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 1};

    cr(byte by2, byte by3, int n2) {
        super(by2);
        ((at)this).c = (byte)n2;
        this.c = a_f1_AB[by2 - 30];
        this.d = by3;
        this.a_f0_Ls_ = e.a_f3_ALs_[this.d];
        this.a_f1_I = this.a_f0_Ls_.a_m3_PBRB(this.c);
        if (by2 == 41 || by2 == 37) {
            this.b_f2_Z = false;
        }
    }

    void a(int n2, int n3) {
        if (this.a_f0_Ls_ == null) {
            this.a_f2_Z = true;
            return;
        }
        this.a_f0_Ls_.a_m2_PBBIIIRI(this.c, (byte)1, this.b_f0_I % this.a_f1_I, n2, n3);
    }
}

