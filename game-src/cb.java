/*
 * Decompiled with CFR 0.152.
 */
final class cb {
    private byte[] a_f0_AB = null;
    public short[] a_f1_AS = null;
    public short a_f2_S = 0;
    public m a_f3_Lm_ = null;

    cb(db db2) {
    }

    public final int a(byte[] byArray, int n2, int n3) {
        this.a_f2_S = byArray[n2++];
        if (this.a_f2_S < 0) {
            this.a_f2_S = (short)(256 + this.a_f2_S);
        }
        this.a_f1_AS = new short[this.a_f2_S + 1];
        int n4 = 0;
        this.a_f1_AS[0] = 0;
        for (short s2 = 0; s2 < this.a_f2_S; s2 = (short)(s2 + 1)) {
            short s3 = (short)(byArray[n2] < 0 ? 256 + byArray[n2] : byArray[n2]);
            if (n3 > 1) {
                s3 = (short)(s3 + ((short)(byArray[++n2] < 0 ? 256 + byArray[n2] : byArray[n2]) << 8));
            }
            this.a_f1_AS[s2 + 1] = n4 = (int)((short)(n4 + s3));
            ++n2;
        }
        this.a_f0_AB = null;
        if (n4 > 0) {
            this.a_f0_AB = new byte[n4];
            System.arraycopy(byArray, n2, this.a_f0_AB, 0, n4);
            n2 += n4;
        }
        this.a_f3_Lm_ = m.a_m1_PABRLm_(this.a_f0_AB);
        return n2;
    }
}

