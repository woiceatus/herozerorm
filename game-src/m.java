/*
 * Decompiled with CFR 0.152.
 */
final class m {
    private byte[] a_f0_AB = null;
    private int a_f1_I = 0;
    private int b = 0;

    public static m a_m0_PLm_RLm_(m m2) {
        m m3 = m2;
        m2 = new m();
        new m().a_f0_AB = m3.a_f0_AB;
        m2.a_f1_I = m3.a_f1_I;
        m2.b = m3.b;
        return m2;
    }

    public static m a_m1_PABRLm_(byte[] object) {
        byte[] byArray = object;
        object = new m();
        new m().a_f0_AB = byArray;
        byArray = object;
        byArray.a_m3_PIIRV(0, byArray.a_f0_AB != null ? byArray.a_f0_AB.length : 0);
        return object;
    }

    private m() {
    }

    public final void a_m2_PIRV(int n2) {
        this.a_f1_I = n2;
    }

    public final void a_m3_PIIRV(int n2, int n3) {
        this.a_f1_I = n2;
        this.b = n3;
    }

    public final int a_m4_PRI() {
        return this.a_f1_I;
    }

    public final void a_m5_PABIRV(byte[] byArray, int n2) {
        if (this.a_f0_AB != null) {
            System.arraycopy(this.a_f0_AB, this.a_f1_I, byArray, 0, n2);
            this.a_f1_I += n2;
        }
    }

    public final byte a_m6_PRB() {
        if (this.a_f0_AB != null) {
            return this.a_f0_AB[this.a_f1_I++];
        }
        return 0;
    }

    public final short a_m7_PRS() {
        short s2;
        if (this.a_f0_AB == null) {
            return 0;
        }
        if ((s2 = (short)this.a_f0_AB[this.a_f1_I++]) < 0) {
            s2 = (short)(s2 + 256);
        }
        return (short)(s2 + (this.a_f0_AB[this.a_f1_I++] << 8));
    }

    public final int b() {
        if (this.a_f0_AB == null) {
            return 0;
        }
        int n2 = this.a_f0_AB[this.a_f1_I++];
        int n3 = this.a_f0_AB[this.a_f1_I++];
        if (n2 < 0) {
            n2 += 256;
        }
        if (n3 < 0) {
            n3 += 256;
        }
        return n2 += n3 << 8;
    }

    public final boolean a_m8_PRZ() {
        return this.a_f1_I >= this.b;
    }
}

