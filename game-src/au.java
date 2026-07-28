/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.f;
import rpg.g;

final class au
extends b {
    public static int e = 0;
    private byte f = 0;
    private byte[] a;

    public au(n n2, byte by2) {
        super(n2, (byte)3);
        this.f = by2;
        block0 : switch (this.f) {
            case 0: {
                this.a = rpg.e.i_f0_Lch_.a_m0_PIRAB(0);
                return;
            }
            case 1: {
                this.a = rpg.e.b_f0_Lch_.a_m0_PIRAB(6);
                if (di.j > 0) {
                    this.a_f2_B = di.j;
                }
                if (di.a_f12_AAB[this.a_f2_B] != null) break;
                this.a_f2_B = 0;
                for (int n3 = 0; n3 < 3; n3 = (int)((byte)(n3 + 1))) {
                    if (di.a_f12_AAB[n3] == null) continue;
                    this.a_f2_B = (byte)n3;
                    break block0;
                }
                return;
            }
            case 2: {
                if (di.i_f0_Z) {
                    this.b_f1_Ln_ = new br((n)this, d.t, '\u0000');
                    di.i_f0_Z = false;
                    rpg.b.a_m5_PRZ();
                }
                this.a = rpg.e.h_f0_Lch_.a_m0_PIRAB(12);
            }
        }
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = this.f;
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.f == 1) {
                if (di.a_f12_AAB[this.a_f2_B] == null) {
                    this.b_f1_Ln_ = new br((n)this, rpg.e.i_f0_Lch_.a_m0_PIRAB(5), '\u0000');
                } else {
                    di.j = this.a_f2_B;
                    byte[] byArray = di.a_f12_AAB[di.j];
                    di.b_f4_B = byArray[13];
                    di.h_f1_B = byArray[16];
                    di.k = byArray[17];
                    di.a_m5_PIRV(1);
                }
            } else if (this.f == 0) {
                if (di.a_f12_AAB[this.a_f2_B] != null) {
                    this.b_f1_Ln_ = new bt((n)this, rpg.e.i_f0_Lch_.a_m0_PIRAB(8), 3, false, true);
                    this.b_f1_Ln_.a_f2_B = 1;
                } else {
                    this.a_m2_PRV();
                }
            } else if (this.f == 2 && di.a_f12_AAB[this.a_f2_B] != null) {
                di.j = this.a_f2_B;
                di.f_m0_PRV();
                di.h();
                di.a_m18_PZRZ(false);
                this.b_f1_Ln_ = new aw(this);
            }
            return true;
        }
        return this.c_m2_PIIRZ(n2, n3);
    }

    final void a_m1_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 3 && by3 == 0) {
            if (this.f == 0) {
                di.e_f1_I = 0;
                this.a_m2_PRV();
                return;
            }
            if (this.f == 2) {
                this.c_m0_PRV();
                this.b_f1_Ln_ = new br((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(14));
                di.f_m0_PRV();
                di.a_m18_PZRZ(true);
                bq.d();
                this.a_f1_Ln_.c_m0_PRV();
                this.a_f1_Ln_.b_f1_Ln_ = new aq(this.a_f1_Ln_);
            }
        }
    }

    private void a_m2_PRV() {
        di.j = this.a_f2_B;
        this.b_f1_Ln_ = new be(this);
    }

    protected final void a_m3_PLcm_RV(cm cm2) {
        int n2;
        byte by2;
        rpg.a.a_m3_PLcm_ZRV(cm2, true);
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, rpg.f.d, this.a, 0, 1);
        int n3 = rpg.f.e;
        for (by2 = 0; by2 < 3; by2 = (byte)(by2 + 1)) {
            int n4;
            cm cm3;
            n2 = this.b_ + 16 + by2 * 15;
            n.a_m6_PLcm_IIIIIIRV(cm2, rpg.a.a_f0_I - n3 >> 1, n2, n3, 14, this.a_f2_B == by2 ? 0x660000 : 3550755, this.a_f2_B == by2 ? 0xBD0000 : 7027456);
            if (by2 == this.a_f2_B) {
                cm3 = cm2;
                n4 = 0xFFFFFF;
            } else {
                cm3 = cm2;
                n4 = di.a_f12_AAB[by2] == null ? 0x7F7F7F : 12630160;
            }
            cm3.a_m2_PIRV(n4);
            ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n2 - 1, g.a_m0_PABABRAB(rpg.e.b_f0_Lch_.a_m0_PIRAB(27), (" " + (by2 + 1)).getBytes()), 0, 1);
        }
        n2 = rpg.a.a_f0_I - n3 >> 1;
        by2 = this.b_ + 68;
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, by2, n3, 70, 3550755, 7027456);
        this.b(cm2, n2, by2);
        if (this.b_f1_Ln_ == null) {
            n.a_m0_PLcm_IRV(cm2, 3);
        }
    }

    private void b(cm cm2, int n2, int n3) {
        byte[] byArray = di.a_f12_AAB[this.a_f2_B];
        if (byArray == null) {
            cm2.a_m2_PIRV(12630160);
            ac.a_m0_PLcm_IIABIRV(cm2, n2 + 4, n3 + 4, rpg.e.b_f0_Lch_.a_m0_PIRAB(28), 0);
            return;
        }
        int n4 = di.b_f4_B = byArray[13];
        int n5 = n3 + 3;
        cm2.a_m2_PIRV(n.a_f0_AI[n4]);
        n.c_m3_PLcm_IIIIRV(cm2, n2 += 3, n5, 22, 14);
        cm2.a_m1_PLcg_IIIRV(rpg.e.d_f1_ALcg_[di.b_f4_B], n2 + 6, n5 + 1, 20);
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 26, n5 + 1, rpg.e.d_f0_Lch_.a_m0_PIRAB(n4 + 1), 0);
        n4 = byArray[14];
        cm2.a_m2_PIRV(14597755);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 55 + 110, n5 + 1, rpg.e.d_f0_Lch_.a_m0_PIRAB(10), 0);
        n.b_m6_PLcm_IIIIIRV(cm2, n4, n2 + 87 + 110, n5 + 5, 4, 0);
        n4 = byArray[15];
        e = n4;
        n.d_m4_PLcm_IIIRV(cm2, n4, n2 + 100 + 110, n5 + 5);
        long l2 = di.c_f6_J = g.a_m1_PABIRJ(byArray, 18);
        n4 = (int)(di.c_f6_J % 60L);
        int n6 = (int)((l2 /= 60L) % 60L);
        int n7 = (int)(l2 / 60L);
        n5 = n3 + 30 + 5;
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 4, n5, rpg.e.i_f0_Lch_.a_m0_PIRAB(6), 0);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 64 + 110, n5, ("" + n7 + ":" + n6 + ":" + n4).getBytes(), 0);
        n2 = byArray[26];
        byte[] byArray2 = new byte[n2];
        System.arraycopy(byArray, 27, byArray2, 0, byArray2.length);
        n5 = n3 + 15 + 5;
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n5, byArray2, 0, 1);
        int n8 = di.h_f1_B = byArray[16];
        n4 = rpg.e.d_f2_Lcg_.a_m5_PRI();
        n6 = rpg.a.a_f0_I - (n4 * ++n8 + (n8 - 1 << 1)) >> 1;
        n5 = n3 + 45 + 3;
        for (n3 = 0; n3 < n8; ++n3) {
            cm2.a_m1_PLcg_IIIRV(rpg.e.d_f2_Lcg_, n6 + (n4 + 2) * n3, n5, 20);
        }
        di.k = byArray[17];
    }
}

