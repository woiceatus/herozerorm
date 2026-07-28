/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.f;

final class w
extends de {
    private byte f = 0;
    private boolean g = true;
    private byte[] c = new byte[9];
    private int e = 0;

    public w(n n2) {
        super(n2, (byte)2, (byte)2, (byte)1);
        this.a_f2_B = 0;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            if (this.g) {
                this.a_f1_Ln_.c_m0_PRV();
            } else {
                this.d_f0_B = (byte)2;
                this.b_f2_B = (byte)2;
                this.a_f2_B = this.f;
                this.g = true;
            }
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.g) {
                this.f = this.a_f2_B;
                this.a_f2_B = this.c[this.e];
                this.d_f0_B = (byte)10;
                this.b_f2_B = (byte)10;
                this.g = false;
            } else {
                w w2 = this;
                n3 = 0;
                for (int i2 = w2.c.length - 1; i2 >= 0; --i2) {
                    n3 = n3 * 10 + w2.c[i2];
                }
                int n4 = n3;
                if (n4 != 0) {
                    if (this.f == 0) {
                        n3 = n4 <= di.e_f1_I ? 1 : 0;
                    } else {
                        n3 = n4 <= de.f_f0_I ? 1 : 0;
                        n4 = 0 - n4;
                    }
                    if (n3 == 0) {
                        this.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(25));
                    } else {
                        di.e_f1_I -= n4;
                        di.l();
                        de.f_f0_I += n4;
                        de.i();
                    }
                }
            }
            return true;
        }
        if (!this.g) {
            if (n3 == 52 || n2 == 2) {
                ++this.e;
                if (this.e > 8) {
                    this.e = 0;
                }
                this.a_f2_B = this.c[this.e];
                return true;
            }
            if (n3 == 54 || n2 == 5) {
                --this.e;
                if (this.e < 0) {
                    this.e = 8;
                }
                this.a_f2_B = this.c[this.e];
                return true;
            }
        }
        return this.e(n2, n3);
    }

    protected final boolean e(int n2, int n3) {
        if (this.g) {
            return super.e_m1_PIIRZ(n2, n3);
        }
        if (n3 == 50 || n2 == 1) {
            this.a_m5_PBRV((byte)4);
            this.c[this.e] = this.a_f2_B;
            return true;
        }
        if (n3 == 56 || n2 == 6) {
            this.a_m5_PBRV((byte)3);
            this.c[this.e] = this.a_f2_B;
            return true;
        }
        return false;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        int n2;
        this.a_m9_PLcm_ABZZRV(cm2, rpg.e.h_f0_Lch_.a_m0_PIRAB(0), true, false);
        int n3 = rpg.f.e - 3;
        int n4 = 0;
        for (n2 = 0; n2 < 2; n2 = (int)((byte)(n2 + 1))) {
            boolean bl2 = this.g ? this.a_f2_B == n2 : this.f == n2;
            n4 = this.b_ + 25 + n2 * 24;
            n.a_m6_PLcm_IIIIIIRV(cm2, this.a_ + 3, n4, n3 - 3, 18, bl2 ? 0x660000 : 3550755, bl2 ? 0xBD0000 : 7027456);
            cm2.a_m2_PIRV(bl2 ? 0xFFFFFF : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n4, rpg.e.h_f0_Lch_.a_m0_PIRAB(n2 + 20), 0, 1);
        }
        n.a_m15_PLcm_ABIIIRV(cm2, this.c, this.a_ + 14, n4 + 25, 7);
        if (!this.g) {
            n.a_m14_PLcm_IIIIZRV(cm2, this.a_ + 8, n4 + 21 + 7, 123, 3550755, false);
            n2 = this.a_ + 16 + (8 - this.e) * 7;
            n.c_m4_PLcm_IIIRV(cm2, n2, n4 + 15 + 6, 12);
        }
        cm2.a_m2_PIRV(0xFF0000);
        n.c_m3_PLcm_IIIIRV(cm2, this.a_ + 78 + 18, n4 + 15 + 7, 97, 14);
        cm2.a_m2_PIRV(0xFFFFFF);
        if (this.g) {
            if (this.a_f2_B == 0) {
                ac.a_m0_PLcm_IIABIRV(cm2, this.a_ + 80 + 18, n4 + 15 + 7, rpg.e.h_f0_Lch_.a_m0_PIRAB(48), 0);
            } else {
                ac.a_m0_PLcm_IIABIRV(cm2, this.a_ + 80 + 18, n4 + 15 + 7, rpg.e.h_f0_Lch_.a_m0_PIRAB(49), 0);
            }
        } else if (this.f == 0) {
            ac.a_m0_PLcm_IIABIRV(cm2, this.a_ + 80 + 18, n4 + 15 + 7, rpg.e.h_f0_Lch_.a_m0_PIRAB(48), 0);
        } else {
            ac.a_m0_PLcm_IIABIRV(cm2, this.a_ + 80 + 18, n4 + 15 + 7, rpg.e.h_f0_Lch_.a_m0_PIRAB(49), 0);
        }
        cm2.a_m2_PIRV(15723216);
        cm2.e(this.a_, n4 + 30 + 10, this.a_ + d.e_ - 1, n4 + 30 + 10);
        cm2.a_m2_PIRV(3550755);
        n.c_m3_PLcm_IIIIRV(cm2, this.a_ + 3, n4 + 33 + 10, n3 - 3, 73);
        n2 = this.g ? (this.a_f2_B == 0 ? 1 : 0) : (this.f == 0 ? 1 : 0);
        cm2.a_m2_PIRV(n2 != 0 ? 9032496 : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n4 + 34 + 10 + 5, rpg.e.h_f0_Lch_.a_m0_PIRAB(23), 0, 1);
        n.d_m3_PLcm_IIIIRV(cm2, de.f_f0_I, this.a_ + 28 + 20, n4 + 47 + 10 + 10, 7);
        cm2.a_m2_PIRV(n2 != 0 ? 12630160 : 9032496);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n4 + 63 + 10 + 15, rpg.e.h_f0_Lch_.a_m0_PIRAB(24), 0, 1);
        n.d_m3_PLcm_IIIIRV(cm2, di.e_f1_I, this.a_ + 28 + 20, n4 + 76 + 10 + 20, 7);
        cm2.a_m2_PIRV(0);
        n.c_m3_PLcm_IIIIRV(cm2, a.c - 6, n4 + 55 + 23, 9, 6);
        cm2.a_m2_PIRV(9032496);
        if (n2 != 0) {
            cm2.e(a.c - 2, n4 + 57 + 23, a.c - 2, n4 + 57 + 23);
            cm2.e(a.c - 3, n4 + 58 + 23, a.c - 1, n4 + 58 + 23);
            cm2.e(a.c - 4, n4 + 59 + 23, a.c, n4 + 59 + 23);
            return;
        }
        cm2.e(a.c - 4, n4 + 57 + 23, a.c, n4 + 57 + 23);
        cm2.e(a.c - 3, n4 + 58 + 23, a.c - 1, n4 + 58 + 23);
        cm2.e(a.c - 2, n4 + 59 + 23, a.c - 2, n4 + 59 + 23);
    }
}

