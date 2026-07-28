/*
 * Decompiled with CFR 0.152.
 */
final class cz {
    private int b = 10;
    int a_f0_I = 0;
    m[] a_f1_ALm_ = new m[this.b];

    public cz(db db2) {
    }

    public final void a(m m2) {
        if (this.a_f0_I >= this.b) {
            m[] mArray = new m[this.b + 5];
            for (int i2 = 0; i2 < this.b + 5; ++i2) {
                mArray[i2] = i2 < this.a_f0_I ? this.a_f1_ALm_[i2] : null;
            }
            this.a_f1_ALm_ = null;
            this.a_f1_ALm_ = mArray;
            this.b += 5;
        }
        this.a_f1_ALm_[this.a_f0_I++] = m2;
    }
}

