/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;

abstract class at
implements d {
    public byte a_f0_B;
    protected int a_f1_I;
    protected int b_f0_I;
    protected int c;
    protected byte b_f1_B;
    protected boolean a_f2_Z;
    protected boolean b_f2_Z;

    at(byte by2) {
        this.a_f0_B = by2;
        this.a_f1_I = 1;
        this.c = 1;
        this.b_f1_B = 0;
        this.b_f0_I = 0;
        this.b_f2_Z = true;
    }

    abstract void a_m0_PIIRV(int var1, int var2);

    final void a_m1_PIIZRV(int n2, int n3, boolean bl2) {
        if (this.b_f2_Z != bl2 || this.a_f2_Z) {
            return;
        }
        this.a_m0_PIIRV(n2, n3);
        if (di.d_f3_B != 5) {
            this.a_m2_PRV();
        }
    }

    void a_m2_PRV() {
        ++this.b_f0_I;
        if (this.c != -1 && this.b_f0_I >= this.a_f1_I * this.c) {
            this.a_f2_Z = true;
        }
    }

    public static final boolean a_m3_PBRZ(byte by2) {
        switch (by2) {
            case 1: 
            case 2: 
            case 3: 
            case 4: {
                return true;
            }
        }
        return false;
    }
}

