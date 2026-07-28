/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

final class by
extends cq {
    public by(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2);
        switch (s4) {
            case 106: 
            case 129: {
                this.c_f0_Z = true;
                this.g = 0;
                break;
            }
            case 107: 
            case 130: {
                this.d_f0_Z = true;
                this.g = 1;
                break;
            }
            case 108: 
            case 131: {
                this.e = true;
                this.g = (byte)2;
            }
        }
        this.Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 11);
        this.a_m0_PABRV(this.Q);
        cs.a_m0_PLaf_BRV(this, this.g);
    }

    protected final void a_m0_PRV() {
        switch (this.b_f1_B) {
            case 0: 
            case 1: 
            case 2: 
            case 4: 
            case 5: {
                this.h_f0_B = (byte)(this.b_m0_PRZ() ? 2 : 0);
                break;
            }
            case 6: {
                this.h_f0_B = 1;
                break;
            }
            case 7: {
                this.h_f0_B = (byte)2;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    public final void z() {
        this.h_f0_B = (byte)3;
        this.a_m2_PBRV((byte)3);
    }

    public final void A() {
        this.h_f0_B = (byte)(this.g + (this.b_m0_PRZ() ? 13 : 4));
        this.a_m2_PBRV((byte)3);
    }

    protected final boolean a_m1_PIRZ(int n2) {
        if (this.h_f0_B == 3 && n2 == 8) {
            g.a_m16_PIRV(1);
            new t((byte)(4 + this.g), (short)(this.h + 5), (short)(((du)this).i + 5), this.a_f1_Ls_, 12, true, this, this.a_m21_PRS(), 0, 0);
        }
        return false;
    }

    protected final void b() {
    }

    protected final void a_m2_PBRV(byte by2) {
        super.a_m1_PBRV(by2);
        if (this.b_f1_B == 6) {
            this.i = true;
            for (by2 = 1; by2 < 3; by2 = (byte)(by2 + 1)) {
                cs.a[(this.g + by2) % 3].a_m5_PLaf_RV(this);
            }
        }
    }
}

