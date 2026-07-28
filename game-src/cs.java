/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

class cs
extends af {
    public static byte g;
    protected static af[] a;

    protected cs(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 8);
        this.c_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 9);
        g = by2;
        this.b_f2_I = -1;
        if (a == null) {
            a = new af[3];
        }
        this.c_m0_PBRV((byte)1);
    }

    public static final void a_m0_PLaf_BRV(af af2, byte by2) {
        if (a == null) {
            a = new cq[3];
        }
        cs.a[by2] = af2;
    }

    protected void a_m1_PRV() {
        switch (this.b_f1_B) {
            case 3: {
                this.h_f0_B = (byte)14;
                break;
            }
            case 6: {
                this.h_f0_B = (byte)7;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    protected final boolean a_m2_PRZ() {
        if (!(a[0] != null && !a[0].b_m1_PRZ() || a[1] != null && !a[1].b_m1_PRZ() || a[2] != null && !a[2].b_m1_PRZ() || this.f_f2_Z)) {
            this.k_f2_I = 0;
            this.a_m1_PBRV((byte)6);
            return true;
        }
        return false;
    }

    protected final void k() {
        if (!this.a_m2_PRZ() && this.a_f1_S <= 0 && !this.f_f2_Z) {
            this.z();
            switch (this.a_f2_B) {
                case 0: 
                case 1: 
                case 2: {
                    if (a[this.a_f2_B] == null) break;
                    ((cq)a[this.a_f2_B]).z();
                    return;
                }
                case 3: {
                    for (int i2 = 0; i2 < 3; ++i2) {
                        if (a[i2] == null) continue;
                        ((cq)a[i2]).A();
                    }
                    this.a_m1_PBRV((byte)3);
                }
            }
        }
    }

    private void z() {
        block3: while (true) {
            this.b_f2_I = (this.b_f2_I + 1) % this.b_f1_AB.length;
            this.a_f2_B = this.b_f1_AB[this.b_f2_I];
            this.a_f1_S = this.c_f1_AB[this.a_f2_B];
            switch (this.a_f2_B) {
                case 0: 
                case 1: 
                case 2: {
                    if (a[this.a_f2_B] != null && a[this.a_f2_B].c_m0_PRI() > 0 && !cs.a[this.a_f2_B].g_f1_Z) break block3;
                    continue block3;
                }
            }
            break;
        }
    }

    protected boolean a_m3_PIRZ(int n2) {
        if (this.a_f2_B == 3) {
            switch (n2) {
                case 10: {
                    g.a_m16_PIRV(1);
                    break;
                }
                case 11: {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                    new t(0, this.h, (short)(((du)this).i + 112), this.a_f1_Ls_, 22, false, null, 0, 0, 0);
                    break;
                }
                case 12: {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 1);
                    break;
                }
                case 13: {
                    di.a_f4_Lg_.b_m4_PIIRV(2, 3);
                    break;
                }
                case 14: {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 4);
                }
            }
            return n2 == 11;
        }
        return false;
    }

    protected void b() {
        al[] alArray = cd.a_m24_PRALal_();
        for (int i2 = 0; i2 < 2; ++i2) {
            if (alArray[i2] == null || alArray[i2].t > this.t + 7) continue;
            this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), (byte)2);
            if (!alArray[i2].g_m0_PRZ()) continue;
            alArray[i2].b_m4_PBRV((byte)2);
        }
    }

    protected final void m() {
        a[0].m();
        a[1].m();
        a[2].m();
        di.a_f4_Lg_.e_m0_PLdu_RV(this);
        di.a_f4_Lg_.e_m0_PLdu_RV(a[0]);
        di.a_f4_Lg_.e_m0_PLdu_RV(a[1]);
        di.a_f4_Lg_.e_m0_PLdu_RV(a[2]);
        a = null;
    }

    static {
        a = null;
    }
}

