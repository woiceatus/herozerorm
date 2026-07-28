/*
 * Decompiled with CFR 0.152.
 */
final class an
extends cs {
    public an(short s2, short s3, short s4, byte by2) {
        super((short)1, (short)1, s4, by2);
    }

    protected final void a_m0_PIIRV(int n2, int n3) {
    }

    protected final boolean a_m1_PIRZ(int n2) {
        if (this.a_f2_B == 3) {
            switch (n2) {
                case 9: {
                    g.a_m16_PIRV(1);
                    break;
                }
                case 10: {
                    di.a_f4_Lg_.c_m4_PIIRV(5, 2);
                    new t(0, 180, 170, this.a_f1_Ls_, 11, false, null, 0, 0, 0);
                }
            }
            return n2 == 10;
        }
        return false;
    }

    protected final void b() {
        al[] alArray = cd.a_m24_PRALal_();
        for (int i2 = 0; i2 < 2; ++i2) {
            if (alArray[i2] == null || alArray[i2].t > this.t + 10) continue;
            this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), (byte)2);
            if (!alArray[i2].g_m0_PRZ()) continue;
            alArray[i2].b_m4_PBRV((byte)3);
        }
    }

    protected final void a_m2_PRV() {
        switch (this.b_f1_B) {
            case 3: {
                this.h_f0_B = (byte)4;
                break;
            }
            case 6: {
                this.h_f0_B = 1;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }
}

