/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

final class ak
extends at {
    private static final byte[] a = new byte[]{17, 19, 8, 18, 17, 9, 16, 16, 17, 18, 19, 13};
    private byte c = (byte)(this.a_f0_B - 11);
    private byte d = 1;

    ak(byte by2) {
        super(by2);
        ((at)this).c = this.a_f1_I = (int)e.a_f2_Lca_.a_m3_PBRB(a[this.c]);
    }

    ak(byte by2, int n2) {
        this(by2);
        ((at)this).c = n2;
    }

    ak(byte by2, byte by3) {
        this(by2);
        if (this.a_f0_B == 15) {
            this.d = by3;
        }
    }

    final void a_m0_PIIRV(int n2, int n3) {
        e.a_f2_Lca_.a_m2_PBBIIIRI(a[this.c], this.d, this.b_f0_I % this.a_f1_I, n2, n3);
    }

    final void a_m1_PRV() {
        ++this.b_f0_I;
        if (this.b_f0_I >= ((at)this).c) {
            this.a_f2_Z = true;
        }
    }
}

