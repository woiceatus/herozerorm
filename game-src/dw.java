/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;

public final class dw
extends bo {
    private static final int e_f0_I = d.e_ - 80 - 6 - 2;
    private as a_f0_Las_ = null;
    private int f = 0;
    private int j = 0;
    private int k = 0;
    private boolean e_f1_Z = false;
    private byte g = 0;
    private bj a_f1_Lbj_ = null;
    private long a_f2_J = 0L;
    private byte[] b_f0_AB = null;
    private ch b_f1_Lch_ = new ch("/t/nb");

    public dw(n n2) {
        super(null);
        this.a_f1_Lbj_ = di.a_m12_PRLbj_();
        this.b_f0_AB = this.b_f1_Lch_.a_m0_PIRAB(0);
        this.k = di.a_m11_PBRLbj_((byte)20).a_m10_PBBRI((byte)20, (byte)0);
        bs.c_f0_Z = true;
    }

    protected final boolean a_m0_PLas_RZ(as as2) {
        if (as2 != null) {
            return as2.b();
        }
        return false;
    }

    private static int a_m1_PLas_RI(as as2) {
        as2 = (bm)as2;
        for (int i2 = 0; i2 < ((bm)as2).c_f1_AB.length && ((bm)as2).c_f1_AB[i2] != -3; ++i2) {
            if (((bm)as2).c_f1_AB[i2] != -2) continue;
            return (i2 + 1) * (i2 + 1);
        }
        return -1;
    }

    private static int b(as as2) {
        as2 = (bm)as2;
        for (int i2 = 0; i2 < ((bm)as2).c_f1_AB.length && ((bm)as2).c_f1_AB[i2] != -3; ++i2) {
            if (((bm)as2).c_f1_AB[i2] != -2) continue;
            return (i2 + 1) * 100 * (((bm)as2).e + 1);
        }
        return -1;
    }

    final void a_m2_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        this.d();
        if (by2 == -1 && by3 == -1) {
            ((bo)this).f = (byte)15;
            this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
            return;
        }
        if (by2 == -2 && by3 == -2) {
            if (this.f > di.e_f1_I) {
                if (eb.f_f2_Z) {
                    ((bo)this).f = (byte)15;
                    this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
                    return;
                }
                ((bo)this).f = (byte)15;
                this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
                return;
            }
            if (this.j > this.k) {
                ((bo)this).f = (byte)15;
                this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(4);
                return;
            }
            bm bm2 = (bm)this.a_f0_Las_;
            by3 = 0;
            for (int i2 = 0; i2 < bm2.c_f1_AB.length; ++i2) {
                if (bm2.c_f1_AB[i2] != -2) continue;
                by3 = 1;
            }
            if (by3 != 0) {
                this.a_f2_J = 15L;
                this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(5);
                return;
            }
            ((bo)this).f = (byte)15;
            this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(8);
        }
    }

    final boolean a_m3_PIIRZ(int n2, int n3) {
        if (this.b_f1_Ln_ != null && this.b_f1_Ln_ instanceof bw && this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (this.a_f2_J > 0L) {
            return true;
        }
        if (((bo)this).f > 0) {
            this.a_f1_AB = null;
            this.a_f2_J = 0L;
            ((bo)this).f = 0;
            this.d();
            return true;
        }
        this.d();
        if (this.e_f1_Z) {
            if (n.g(n2, n3)) {
                this.e_f1_Z = false;
                return true;
            }
            if (n.f_m0_PIIRZ(n2, n3)) {
                this.a_f0_Las_ = this.a_f1_Lbj_.a_m1_PIRLas_(this.a_f2_B);
                if (!this.a_m0_PLas_RZ(this.a_f0_Las_)) {
                    this.a_f0_Las_ = null;
                    return true;
                }
                if (this.a_f0_Las_ != null) {
                    this.f = dw.b(this.a_f0_Las_);
                    this.j = dw.a_m1_PLas_RI(this.a_f0_Las_);
                }
                this.e_f1_Z = false;
                return true;
            }
            this.d_m2_PIIRZ(n2, n3);
            this.e_m1_PIIRZ(n2, n3);
        } else {
            if (n3 == 50 || n2 == 1) {
                this.g = (byte)((this.g + 1) % 2);
            } else if (n3 == 56 || n2 == 6) {
                this.g = (byte)((this.g + 1) % 2);
            }
            if (n.f_m0_PIIRZ(n2, n3)) {
                if (this.g == 0) {
                    this.e_f1_Z = true;
                } else if (this.a_f0_Las_ == null) {
                    ((bo)this).f = (byte)15;
                    this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(6);
                } else if (this.f > di.e_f1_I) {
                    if (eb.f_f2_Z) {
                        ((bo)this).f = (byte)15;
                        this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
                    } else {
                        ((bo)this).f = (byte)15;
                        this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(5);
                    }
                } else if (this.j > this.k) {
                    ((bo)this).f = (byte)15;
                    this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(4);
                } else {
                    bm bm2 = (bm)this.a_f0_Las_;
                    n3 = 0;
                    for (int i2 = 0; i2 < bm2.c_f1_AB.length; ++i2) {
                        if (bm2.c_f1_AB[i2] != -2) continue;
                        n3 = 1;
                    }
                    if (n3 != 0) {
                        this.a_f2_J = 15L;
                        this.a_f1_AB = this.b_f1_Lch_.a_m0_PIRAB(5);
                    } else {
                        ((bo)this).f = (byte)15;
                        this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(8);
                    }
                }
            } else if (n.g(n2, n3)) {
                df.e_m0_PRV();
                bs.c_f0_Z = true;
            }
        }
        return true;
    }

    public final void d() {
        super.d_m0_PRV();
        a.a_f1_Z = true;
    }

    protected final void a_m4_PLcm_RV(cm cm2) {
        int n2;
        di.a_f4_Lg_.c_m2_PRV();
        this.a_m8_PLcm_ZZABZRV(cm2, false, true, this.b_f0_AB, false);
        n.a_m0_PLcm_IRV(cm2, 3);
        if (this.e_f1_Z) {
            this.a_m11_PLcm_BZIZRV(cm2, (byte)0, false, 1, true);
            int n3 = this.b_ + 80;
            n.a_m12_PLcm_IIIRV(cm2, this.a_, n3, 15);
            this.a_m1_PLcm_Lbj_RV(cm2, this.a_f1_Lbj_);
            n2 = this.b_ + 174 - 11;
            this.b_m0_PLcm_RV(cm2);
            as as2 = this.a_f1_Lbj_.a_m1_PIRLas_(this.a_f2_B);
            if (as2 != null) {
                this.a_m6_PLcm_IILas_RV(cm2, this.a_, n3 + 2, as2);
            }
            cm2.b_m0_PIIIIRV(this.a_, this.b_, d.e_, 174);
            cm2.a_m2_PIRV(3550755);
            this.b_m5_PLcm_IIIRV(cm2, this.a_ + 111, n2 + 2, di.e_f1_I);
        } else {
            n.c_m5_PLcm_IIIIIRV(cm2, this.a_ + (d.e_ - 14 >> 1), this.b_ + 15, 14, 14, 0);
            if (this.a_f0_Las_ != null) {
                this.a_f0_Las_.a_m9_PLcm_IIRV(cm2, this.a_ + (d.e_ - 14 >> 1), this.b_ + 15);
            }
            if (this.g == 0) {
                bo.b_m1_PLcm_IIRV(cm2, this.a_ + (d.e_ - 14 >> 1), this.b_ + 15);
            }
            n.a_m12_PLcm_IIIRV(cm2, this.a_, this.b_ + 31, 15);
            this.a_m6_PLcm_IILas_RV(cm2, this.a_, this.b_ + 31 + 2, this.a_f0_Las_);
            this.a_m5_PLcm_IIABIIRV(cm2, this.a_, this.b_ + 31 + 2 + 80, this.b_f1_Lch_.a_m0_PIRAB(1), this.k, this.j);
            this.a_m5_PLcm_IIABIIRV(cm2, this.a_, this.b_ + 31 + 2 + 80 + 15, this.b_f1_Lch_.a_m0_PIRAB(2), di.e_f1_I, this.f);
            this.a_m16_PLcm_IIIABZRV(cm2, this.a_ + 3, this.b_ + 174 - 16, d.e_ - 6, this.b_f1_Lch_.a_m0_PIRAB(3), this.g == 1);
        }
        if (this.a_f2_J > 0L || ((bo)this).f > 0) {
            if (this.a_f2_J == 1L) {
                int n4;
                block10: {
                    as as3 = this.a_f0_Las_;
                    as3 = (bm)as3;
                    for (n2 = 0; n2 < ((bm)as3).c_f1_AB.length && ((bm)as3).c_f1_AB[n2] != -3; ++n2) {
                        if (((bm)as3).c_f1_AB[n2] != -2) continue;
                        ((bm)as3).c_f1_AB[n2] = -1;
                        n4 = 0;
                        break block10;
                    }
                    n4 = 5;
                }
                int n5 = n4;
                this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(n5 + 3);
                di.a_m11_PBRLbj_((byte)20).b_m0_PBBIRZ((byte)20, (byte)0, this.j);
                this.k = di.a_m11_PBRLbj_((byte)20).a_m10_PBBRI((byte)20, (byte)0);
                di.e_f1_I -= this.f;
                this.f = dw.b(this.a_f0_Las_);
                this.j = dw.a_m1_PLas_RI(this.a_f0_Las_);
                this.a_f2_J = 0L;
                ((bo)this).f = (byte)15;
            } else if (this.a_f2_J > 0L) {
                --this.a_f2_J;
            }
            bo.a_m3_PLcm_IIABIRV(cm2, this.a_, this.b_, this.a_f1_AB, 1);
            this.d();
        }
    }

    private void a_m5_PLcm_IIABIIRV(cm cm2, int n2, int n3, byte[] byArray, int n4, int n5) {
        n.c_m5_PLcm_IIIIIRV(cm2, n2 + 3, n3, 120, 14, 3550755);
        cm2.a_m2_PIRV(15723216);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 3 + 2, n3, byArray, 0);
        if (n5 > 0) {
            cm2.a_m2_PIRV(n4 < n5 ? 0xFF0000 : 15723216);
            n.b_m6_PLcm_IIIIIRV(cm2, n4, n2 + 80 + 30, n3 + 2, 8, 0);
        } else {
            ac.a_m2_PLcm_IIABIIRV(cm2, n2 + 80 + 30, n3 + 2, this.a_f0_Lch_.a_m0_PIRAB(2), 0, 8);
        }
        n.c_m5_PLcm_IIIIIRV(cm2, n2 + 3 + 80 + 42, n3, e_f0_I - 42, 14, 3550755);
        cm2.a_m2_PIRV(15723216);
        if (n5 > 0) {
            n.b_m6_PLcm_IIIIIRV(cm2, n5, n2 + 3 + 80 + 2 + e_f0_I - 3, n3 + 2, 8, 0);
            return;
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, n2 + 3 + 80 + 2 + e_f0_I - 3, n3 + 2, this.a_f0_Lch_.a_m0_PIRAB(2), 0, 8);
    }
}

