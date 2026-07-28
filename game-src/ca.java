/*
 * Decompiled with CFR 0.152.
 */
public final class ca
extends s {
    private cg[][] b;

    public final void a_m0_PRV() {
        this.b = new cg[4][];
        aj aj2 = new aj("/hero/0/t");
        this.b[0] = aj2.a_m4_PRALcg_();
        int n2 = aj2.a_m2_PRI();
        cg[] cgArray = new cg[n2];
        byte[] byArray = this.a_f3_AAB[0];
        n2 = byArray.length;
        for (int i2 = 0; i2 < n2; ++i2) {
            cgArray[byArray[i2]] = aj2.b_m0_PIRLcg_(byArray[i2]);
        }
        this.b[1] = cgArray;
    }

    public final void a_m1_PZRV(boolean bl2) {
        int n2 = 2;
        if (bl2) {
            if (this.a_f4_AALcg_[0] != this.b[0]) {
                this.b[2] = this.a_f4_AALcg_[0];
                this.b[3] = this.a_f4_AALcg_[0 + this.a_f2_B];
            }
            n2 = 0;
        }
        this.a_f4_AALcg_[0] = this.b[n2];
        this.a_f4_AALcg_[0 + this.a_f2_B] = this.b[n2 + 1];
    }

    public final void a_m2_PIRV(int n2) {
        if (n2 >= this.a_f2_B) {
            return;
        }
        if (this.a_f4_AALcg_[n2] != null) {
            this.a_f4_AALcg_[n2] = null;
        }
        if (this.a_f4_AALcg_[n2 + this.a_f2_B] != null) {
            this.a_f4_AALcg_[n2 + this.a_f2_B] = null;
        }
    }
}

