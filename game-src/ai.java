/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.f;
import rpg.g;

final class ai
extends b {
    private byte f;
    private byte[] a;
    private byte[] b;
    private byte[] c;
    private byte[] d;
    private boolean e;

    public ai(n n2) {
        super(n2, (byte)0);
        int n3;
        this.b_f2_B = 0;
        this.a_f2_B = 0;
        byte by2 = 0;
        this.a = new byte[63];
        for (n3 = 0; n3 < 35; n3 = (int)((byte)(n3 + 1))) {
            if (di.a_m9_PIRB(n3 + 1) != 1) continue;
            this.a[by2] = n3;
            by2 = (byte)(by2 + 1);
        }
        this.f = by2;
        for (n3 = 0; n3 < 28; n3 = (int)((byte)(n3 + 1))) {
            if (di.a_m9_PIRB(n3 + 51) != 1) continue;
            this.a[by2] = n3;
            by2 = (byte)(by2 + 1);
        }
        this.b_f2_B = by2;
        this.e = true;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3) || n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = (byte)5;
            this.a_f1_Ln_.c_m0_PRV();
        } else if (this.d_m2_PIIRZ(n2, n3)) {
            this.e = true;
        }
        return true;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        int n2;
        int n3;
        byte by2 = this.a_f2_B;
        ai ai2 = this;
        if (ai2.e) {
            if (ai2.b_f2_B <= 0) {
                ai2.c = ax.a_f1_Lch_.a_m0_PIRAB(62);
            } else {
                n3 = ai2.a[by2];
                if (n3 >= 0) {
                    ch ch2 = by2 < ai2.f ? rpg.e.j_f0_Lch_ : rpg.e.k_f0_Lch_;
                    n2 = n3 << 1;
                    ai2.b = ch2.a_m0_PIRAB(n2);
                    ai2.c = ch2.a_m0_PIRAB(n2 + 1);
                    ai2.d = ax.a_f1_Lch_.a_m0_PIRAB(by2 < ai2.f ? 63 : 64);
                    if (by2 >= ai2.f) {
                        switch (n3) {
                            case 1: {
                                ai2.a_m2_PBBIABRV((byte)20, (byte)0, 10, rpg.d.g_f0_AB);
                                break;
                            }
                            case 5: {
                                ai2.a_m2_PBBIABRV((byte)19, (byte)16, 10, rpg.d.h_f0_AB);
                                break;
                            }
                            case 15: {
                                ai2.a_m2_PBBIABRV((byte)16, (byte)0, 10, rpg.d.i_f0_AB);
                                ai2.a_m2_PBBIABRV((byte)16, (byte)5, 10, rpg.d.j);
                            }
                        }
                    }
                }
            }
        }
        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        int n4 = (rpg.d.e_ - 96 >> 1) + this.a_;
        int n5 = n2 = this.b_ + 13 + 1;
        n3 = n4;
        cm cm3 = cm2;
        ai ai3 = this;
        cm3.a_m2_PIRV(0);
        cm3.a_m4_PIIIIRV(n3, n5, 96, 11);
        cm3.a_m2_PIRV(0xFF0000);
        cm3.d_m0_PIIIIRV(n3 + 1, n5 + 1, 93, 8);
        n.a_m14_PLcm_IIIIZRV(cm3, n3 - 4, n5 + 5, 104, 0, false);
        ai3.a_m0_PLcm_IIIIIRV(cm3, n3 + 48, n5 + 2, ai3.b_f2_B <= 0 ? 0 : ai3.a_f2_B + 1, ai3.b_f2_B, 1);
        int n6 = rpg.f.a - 10;
        int n7 = (rpg.d.e_ - n6 >> 1) + this.a_;
        n3 = n2 + 11 + 2;
        n.c_m3_PLcm_IIIIRV(cm2, n7, n3, n6, 14);
        n5 = n3 + 14 + 3;
        n.c_m3_PLcm_IIIIRV(cm2, n7, n5, n6, 120);
        cm2.a_m2_PIRV(15723216);
        cm2.e(this.a_, n2 + 11, this.a_ + rpg.d.e_ - 1, n2 + 11);
        cm2.e(this.a_, n5 - 2, this.a_ + rpg.d.e_ - 1, n5 - 2);
        if (this.b != null) {
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m2_PLcm_IIABIIRV(cm2, n7 + 6, n3 + 1, this.b, 1, 4);
            cm2.a_m2_PIRV(this.a_f2_B < this.f ? 14597755 : 0xCCCCCC);
            ac.a_m2_PLcm_IIABIIRV(cm2, n7 + n6 - 6 + 2, n3 + 1, this.d, 1, 8);
        } else {
            b.a_m1_PLcm_IIRV(cm2, rpg.a.c - 6, n3 + 6);
        }
        if (this.c != null) {
            cm2.a_m2_PIRV(0xCCCCCC);
            ac.a_m1_PLcm_IIIIABRV(cm2, n7 + 6 - 2, n5 + 6, rpg.d.e_ - 14, 1, this.c);
        }
    }

    private final void a_m2_PBBIABRV(byte by2, byte by3, int n2, byte[] byArray) {
        bj bj2 = di.a_m11_PBRLbj_(by2);
        int n3 = bj2.a_m10_PBBRI(by2, by3);
        by2 = (byte)n3;
        if (n3 > 10) {
            by2 = (byte)10;
        }
        byte[] byArray2 = g.a_m0_PABABRAB(";&".getBytes(), byArray);
        byArray2 = g.a_m0_PABABRAB(byArray2, ("(" + by2 + "/" + 10 + ")").getBytes());
        this.c = g.a_m0_PABABRAB(this.c, byArray2);
    }
}

