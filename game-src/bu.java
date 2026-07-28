/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

final class bu
extends at {
    bu(byte by2) {
        super(by2);
        byte by3 = e.a_f4_Ls_.a_m3_PBRB(this.a_f0_B);
        this.a_f1_I = by3;
        this.c = by3;
    }

    bu(byte by2, int n2) {
        this(by2);
        this.c = n2;
    }

    final void a_m0_PIIRV(int n2, int n3) {
        e.a_f4_Ls_.a_m2_PBBIIIRI(this.a_f0_B, (byte)1, this.b_f0_I % this.a_f1_I, n2, n3);
    }

    final void a_m1_PRV() {
        ++this.b_f0_I;
        if (this.b_f0_I >= this.c) {
            this.a_f2_Z = true;
        }
    }
}

