/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

class cq
extends af {
    protected byte[] Q = null;
    private byte[] R = null;
    private byte o;
    private byte p;
    protected byte g;
    protected boolean i = false;
    private static byte v = (byte)8;
    private static byte w = (byte)13;

    public cq(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2, dt.a_f0_ALdt_[cs.g].a_f1_Ls_);
        s2 = 1;
        switch (s4) {
            case 102: 
            case 125: {
                this.c_f0_Z = true;
                this.g = 0;
                this.o = (byte)19;
                this.p = (byte)41;
                break;
            }
            case 103: 
            case 126: {
                this.t = (byte)5;
                this.d_f0_Z = true;
                this.g = 1;
                this.o = (byte)7;
                this.p = (byte)26;
                break;
            }
            case 104: 
            case 127: {
                this.e = true;
                this.g = (byte)2;
                this.o = (byte)5;
                this.p = (byte)38;
                break;
            }
            default: {
                s2 = 0;
            }
        }
        if (s2 != 0) {
            this.R = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 10);
            this.Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 5 + this.g);
            this.a_m0_PABRV(this.Q);
            cs.a_m0_PLaf_BRV(this, this.g);
        }
        this.c_m0_PBRV((byte)1);
        this.a_m1_PBRV((byte)1);
    }

    protected void a_m0_PRV() {
        switch (this.b_f1_B) {
            case 0: 
            case 1: 
            case 2: 
            case 4: 
            case 5: {
                this.h_f0_B = (byte)(this.g + (this.b_m0_PRZ() ? 4 : 1));
                break;
            }
            case 6: {
                this.h_f0_B = (byte)(8 + this.g);
                break;
            }
            case 7: {
                this.h_f0_B = (byte)(4 + this.g);
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    public void z() {
        this.h_f0_B = (byte)(11 + this.g);
        this.a_m1_PBRV((byte)3);
    }

    public void A() {
        this.h_f0_B = (byte)(this.g + (this.b_m0_PRZ() ? 18 : 15));
        this.a_m1_PBRV((byte)3);
    }

    public final void g() {
        this.i = true;
        this.a_m1_PBRV((byte)1);
    }

    protected final void k() {
    }

    protected final boolean b_m0_PRZ() {
        return this.i || this.c_m0_PRI() <= 0;
    }

    protected boolean a_m1_PIRZ(int n2) {
        if (this.h_f0_B == (byte)(11 + this.g)) {
            if (n2 == 6) {
                g.a_m16_PIRV(1);
            } else if (n2 == 7) {
                new t(2, (short)(this.h + this.o), (short)(((du)this).i + this.p), this.a_f1_Ls_, 21, true, null, 0, 0, 0);
            }
            return n2 >= v && n2 <= w && n2 % 2 == 0;
        }
        return false;
    }

    protected void b_m1_PRV() {
        int n2 = this.s + this.R[this.g << 1];
        int n3 = this.s + this.R[(this.g << 1) + 1];
        al[] alArray = cd.a_m24_PRALal_();
        for (int i2 = 0; i2 < 2; ++i2) {
            if (alArray[i2] == null || alArray[i2].s < n2 || alArray[i2].s > n3) continue;
            this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), (byte)2);
            if (!alArray[i2].g_m0_PRZ()) continue;
            alArray[i2].b_m4_PBRV((byte)2);
        }
    }

    protected final void m() {
        this.b_m0_PABRV(this.Q);
    }
}

