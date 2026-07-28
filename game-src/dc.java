/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;

final class dc
extends l {
    private boolean e_f0_Z;
    private do a = di.a_f9_Ldo_;
    private int e_f1_I = 0;

    public dc(n n2) {
        super(n2, (byte)4, (byte)2, (byte)2);
        this.a.i_m1_PRV();
        if (this.a.a_f8_S > 0) {
            this.e_f0_Z = true;
        }
        this.b_f3_Z = true;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = 0;
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.e_f0_Z) {
                dc dc2 = this;
                if (dc2.e_f0_Z && dc2.a_f2_B >= 0 && dc2.a_f2_B < 4) {
                    dc2.a.a_f8_S = (short)(dc2.a.a_f8_S - 1);
                    if (dc2.a.a_f8_S <= 0) {
                        dc2.e_f0_Z = false;
                    }
                    dc2.a.h_m2_PBRV(dc2.a_f2_B);
                    dc2.a.i_m1_PRV();
                    return true;
                }
                return false;
            }
            this.a_f1_Ln_.a_f2_B = 0;
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (!this.e_f0_Z) {
            return true;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            return true;
        }
        this.e_m1_PIIRZ(n2, n3);
        return true;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        int n2;
        int n3 = this.a_m0_PLcm_ZZZZRI(cm2, false, true, true, false);
        for (n2 = 0; n2 < 2; ++n2) {
            cm2.a_m2_PIRV(3550755);
            cm2.a_m4_PIIIIRV(rpg.a.a_f0_I - d.e_ >> 1, n3 + n2 * 77, d.e_, 22);
            cm2.a_m2_PIRV(15723216);
            cm2.d_m0_PIIIIRV(rpg.a.a_f0_I - d.e_ >> 1, n3 + n2 * 77 - 1, d.e_ - 1, 23);
        }
        n2 = this.a_ + 23;
        n3 = this.b_ + 29;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[0], n2, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, this.a.a_m28_PRB(), n2 + 42, n3 + 5, 8, 1);
        int n4 = this.a.e_m3_PBRI((byte)2);
        int n5 = this.a.f_m2_PBRI((byte)2);
        int n6 = d.e_ - 46;
        n2 = this.a_ + 84;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[1], n2, n3, 20);
        this.b_m0_PLcm_IIIIIIRV(cm2, this.a_ + d.e_ - 3, n3 + 5, n4, n5, 8, 1);
        dc.a_m4_PLcm_IIIIIIBRV(cm2, this.a_ + 23, n3 + 17, 14597755, n6, n4, n5, (byte)2);
        n6 = d.e_ - 3 >> 1;
        n4 = this.a.e_m3_PBRI((byte)0);
        n5 = this.a.f_m2_PBRI((byte)0);
        n2 = this.a_ + 23;
        n3 = this.b_ + 107;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[2], n2, n3, 20);
        this.b_m0_PLcm_IIIIIIRV(cm2, rpg.a.c - 23, n3 + 5, n4, n5, 8, 1);
        dc.a_m4_PLcm_IIIIIIBRV(cm2, this.a_ + 1, n3 + 18, 16737370, n6, n4, n5, (byte)0);
        n4 = this.a.e_m3_PBRI((byte)1);
        n5 = this.a.f_m2_PBRI((byte)1);
        n2 = rpg.a.c + 23;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[3], n2, n3, 20);
        this.b_m0_PLcm_IIIIIIRV(cm2, this.a_ + d.e_ - 23, n3 + 5, n4, n5, 8, 1);
        dc.a_m4_PLcm_IIIIIIBRV(cm2, rpg.a.c + 1, n3 + 18, 6707967, n6, n4, n5, (byte)1);
        n4 = this.a_ + 31;
        n3 = this.b_ + 132;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[4], n4, n3, 20);
        if (di.b_m9_PRZ()) {
            this.b_m0_PLcm_IIIIIIRV(cm2, n4 + 43 + 1, n3 + 5, this.a.b_m5_PZRI(false), this.a.b_m5_PZRI(true), 4, 1);
        } else {
            n.b_m6_PLcm_IIIIIRV(cm2, this.a.b_m5_PZRI(false), n4 + 43 + 8, n3 + 5, 4, 1);
        }
        n5 = rpg.a.c + 15;
        n2 = this.a_ + n5;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[5], n2 + 10, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, this.a.a_f7_I, n2 + 43 + 10, n3 + 5, 4, 1);
        n3 = this.b_ + 152;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[6], n4, n3, 20);
        dc.f(cm2, this.a.b_m10_PBRI((byte)2), this.a_ + 43 + 40, n3 + 5, 1);
        n2 = this.a_ + n5;
        cm2.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[7], n2 + 10, n3, 20);
        dc.f(cm2, this.a.b_m10_PBRI((byte)0), n2 + 43 + 10, n3 + 5, 1);
        n2 = this.a_ + 45;
        n3 = this.b_ + 59;
        this.a_m2_PLcm_IIBRV(cm2, n2 + 20, n3, (byte)0);
        this.a_m2_PLcm_IIBRV(cm2, rpg.a.c + 30, n3, (byte)1);
        this.a_m2_PLcm_IIBRV(cm2, n2 + 20, n3 += 18, (byte)2);
        this.a_m2_PLcm_IIBRV(cm2, rpg.a.c + 30, n3, (byte)3);
    }

    private void a_m2_PLcm_IIBRV(cm cm2, int n2, int n3, byte by2) {
        int n4 = (by2 + 3) % 4;
        cm2.b_m0_PIIIIRV(n2, n3, 18, 12);
        cm2.a_m1_PLcg_IIIRV(e.v, n2 - n4 * 18, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, this.a.a_m22_PBRI(by2), n2 + 46, n3 + 3, 8, 1);
    }

    private void b_m0_PLcm_IIIIIIRV(cm cm2, int n2, int n3, int n4, int n5, int n6, int n7) {
        n7 = dc.a_m3_PIIRI(n4, 1);
        int n8 = n2;
        if (n6 == 8) {
            n8 = n2 - (n7 + 7 + dc.a_m3_PIIRI(n5, 1));
        } else if (n6 == 1) {
            n8 = n2 - (n7 + 7 + dc.a_m3_PIIRI(n5, 1) >> 1);
        }
        n.b_m6_PLcm_IIIIIRV(cm2, n4, n8, n3, 4, 1);
        cm2.b_m0_PIIIIRV(n8 + n7, n3, 7, 7);
        cm2.a_m1_PLcg_IIIRV(e.w, n8 + n7 - 7, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, n5, n8 + n7 + 7, n3, 4, 1);
    }

    private static int a_m3_PIIRI(int n2, int n3) {
        cg cg2 = n3 == 0 ? e.r : e.h_f1_ALcg_[n3 - 1];
        int n4 = cg2.a_m5_PRI() / 10 - 1;
        int n5 = 0;
        do {
            n5 += n4;
        } while ((n2 /= 10) != 0);
        return n5;
    }

    private static void f(cm cm2, int n2, int n3, int n4, int n5) {
        n.b_m6_PLcm_IIIIIRV(cm2, n2, n3 + 8, n4, 8, 1);
        cm2.b_m0_PIIIIRV(n3 + 10, n4, 7, 7);
        cm2.a_m1_PLcg_IIIRV(e.w, n3 + 10, n4, 20);
        cm2.b_m0_PIIIIRV(0, 0, rpg.a.a_f0_I, rpg.a.b_f0_I);
    }

    private static void a_m4_PLcm_IIIIIIBRV(cm cm2, int n2, int n3, int n4, int n5, int n6, int n7, byte by2) {
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(n2, n3, n5, 3);
        n5 = (n5 - 2 - 6) * n6 / n7;
        if (n5 > 0) {
            cm2.a_m2_PIRV(n4);
            cm2.e(n2 + 1, n3 + 1, n2 + 1 + n5, n3 + 1);
        }
        cm2.a_m1_PLcg_IIIRV(e.m_f1_ALcg_[by2], n2 + 1 + n5, n3, 20);
    }

    protected final void b_m1_PLcm_RV(cm cm2) {
        int n2;
        int n3;
        if (this.e_f0_Z) {
            n3 = this.a_f2_B / 2;
            n2 = this.a_f2_B % 2;
            this.a_m4_PLcm_IIIIRV(cm2, this.a_ + 45 + n2 * 80 + 30 + 23, this.b_ + 59 + n3 * 18 + 1, 18, 11);
        }
        cm2.b_m0_PIIIIRV(this.a_ + 40 - 24, this.b_ + 80 - 26, 40, 50);
        n.b_m4_PLcm_IIIIRV(cm2, this.a_, this.b_ + 13, d.e_, 161);
        n3 = this.a_ + 40;
        n2 = this.b_ + 80;
        cm2.a_m1_PLcg_IIIRV(e.e_f0_ALcg_[0], n3, n2 + 6, 33);
        this.e_f1_I = e.a_f2_Lca_.a_m2_PBBIIIRI(this.a.a_f0_B, (byte)2, this.e_f1_I, n3, n2) + 1;
        if (this.e_f0_Z) {
            cm2.a_m2_PIRV(3550755);
            cm2.a_m4_PIIIIRV(n3 -= 13, n2 += 10, 26, 12);
            cm2.a_m2_PIRV(15723216);
            cm2.d_m0_PIIIIRV(n3, n2, 26, 12);
            cm2.a_m1_PLcg_IIIRV(e.c_f1_ALcg_[0], n3 + 2, n2 + 2, 20);
            n.b_m6_PLcm_IIIIIRV(cm2, this.a.a_f8_S, n3 + 26 - 2, n2 + 3, 8, 0);
        }
    }
}

