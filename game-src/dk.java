/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;
import rpg.e;
import rpg.g;

final class dk
extends de {
    private byte f;
    private boolean g_f0_Z;
    private boolean h_f0_Z = false;
    private byte g_f1_B = 0;
    private byte h_f1_B = 1;
    private bj a_f0_Lbj_ = null;
    private as a_f1_Las_ = null;

    public dk(n n2, byte by2) {
        super(n2, (byte)28, (byte)4, (byte)7);
        this.f = by2;
        this.g_f0_Z = this.f == 0;
        this.c((byte)0);
        this.a_f2_B = 0;
        this.f_m1_PRV();
    }

    private final void c(byte by2) {
        this.g_f1_B = by2;
        this.a_f2_B = 0;
        if (this.g_f0_Z) {
            this.h_f1_B = (byte)3;
            this.a_f0_Lbj_ = by2 == 0 ? di.a_m12_PRLbj_() : (by2 == 2 ? di.b_m6_PRLbj_() : di.c_m7_PRLbj_());
        } else {
            this.h_f1_B = (byte)de.a_f1_ALbj_.length;
            this.a_f0_Lbj_ = de.a_f1_ALbj_[this.g_f1_B];
        }
        dk dk2 = this;
        this.d_f0_B = (byte)(dk2.a_f0_Lbj_.a_f1_B / 7);
        dk2.b_f2_B = (byte)(dk2.d_f0_B * dk2.c_f0_B);
        if (dk2.a_f2_B > dk2.b_f2_B) {
            dk2.a_f2_B = (byte)Math.min(dk2.b_f2_B - 1, 0);
        }
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if ((n3 == 49 || n3 == 51) && this.f == 0) {
            dk dk2 = this;
            this.g_f0_Z = !dk2.g_f0_Z;
            dk2.c((byte)0);
            return true;
        }
        if (this.h_f0_Z) {
            if (n3 == 50 || n2 == 1) {
                this.g_f1_B = (byte)((this.g_f1_B + (this.h_f1_B - 1)) % this.h_f1_B);
            } else if (n3 == 56 || n2 == 6) {
                this.g_f1_B = (byte)((this.g_f1_B + 1) % this.h_f1_B);
            } else {
                if (n3 == 54 || n2 == 5) {
                    this.a_f2_B = 0;
                    this.h_f0_Z = false;
                    return true;
                }
                return true;
            }
            this.c(this.g_f1_B);
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Las_ = this.a_f0_Lbj_.a_m1_PIRLas_(this.a_f2_B);
            if (this.f == 1) {
                ((dd)this.a_f1_Ln_).a = this.a_f1_Las_;
                this.a_f1_Ln_.c_m0_PRV();
            } else if (this.a_f1_Las_ != null) {
                this.b_f1_Ln_ = this.g_f0_Z ? new dj((n)this, rpg.e.h_f0_Lch_.a_m2_PIIIRAAB(48, 50, 16)) : new dj((n)this, rpg.e.h_f0_Lch_.a_m2_PIIIRAAB(49, 50, 16));
            }
            return true;
        }
        if ((n3 == 52 || n2 == 2) && this.a_f2_B % this.c_f0_B == 0) {
            this.h_f0_Z = true;
            return true;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            return true;
        }
        return this.e_m1_PIIRZ(n2, n3);
    }

    /*
     * Enabled aggressive block sorting
     */
    final void a_m1_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 6) {
            if (this.g_f0_Z) {
                switch (by3) {
                    case 0: {
                        if (this.a_f1_Las_.c()) {
                            this.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(52));
                        }
                        if (!de.a_f1_ALbj_[this.g_f1_B].a_m4_PBBIRZ(this.a_f1_Las_.a_f1_B, this.a_f1_Las_.b_f0_B, this.a_f1_Las_.c)) {
                            this.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(55));
                            return;
                        }
                        if (this.a_f1_Las_.c()) return;
                        if (de.a_f1_ALbj_[this.g_f1_B].a_m5_PLas_IRI(this.a_f1_Las_, this.a_f1_Las_.c) <= 0) return;
                        de.i();
                        this.a_f0_Lbj_.a_m7_PIRV(this.a_f2_B);
                        this.a_f1_Las_ = null;
                        this.a_m0_PRV();
                        this.b_f1_Ln_ = new br((n)this, rpg.e.a_f1_Lch_.a_m0_PIRAB(29), 1);
                        return;
                    }
                    case 1: {
                        dk dk2 = this;
                        if (dk2.a_f1_Las_.c()) {
                            dk2.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(52));
                            break;
                        }
                        if (dk2.a_f1_Las_.d()) {
                            dk2.b_f1_Ln_ = new bt((n)dk2, rpg.e.h_f0_Lch_.a_m0_PIRAB(51), 4, true, true);
                            return;
                        }
                        dk2.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(56));
                        break;
                    }
                    case 2: {
                        this.a_m9_PLas_RV(this.a_f1_Las_);
                    }
                }
                return;
            }
            switch (by3) {
                case 0: {
                    bj bj2 = di.a_m11_PBRLbj_(this.a_f1_Las_.a_f1_B);
                    if (!bj2.a_m4_PBBIRZ(this.a_f1_Las_.a_f1_B, this.a_f1_Las_.b_f0_B, this.a_f1_Las_.c)) {
                        this.a_m2_PABRV(rpg.e.h_f0_Lch_.a_m0_PIRAB(55));
                        return;
                    }
                    if (bj2.a_m5_PLas_IRI(this.a_f1_Las_, this.a_f1_Las_.c) <= 0) return;
                    de.a_f1_ALbj_[this.g_f1_B].a_m7_PIRV(this.a_f2_B);
                    this.a_m0_PRV();
                    de.i();
                    this.a_f1_Las_ = null;
                    return;
                }
                case 1: {
                    this.b_f1_Ln_ = new bt((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(51), 4, true, true);
                    return;
                }
                case 2: {
                    this.a_m9_PLas_RV(this.a_f1_Las_);
                }
            }
            return;
        }
        if (by2 != 4) return;
        if (by3 != 0) return;
        if (this.g_f0_Z) {
            this.a_f0_Lbj_.a_m7_PIRV(this.a_f2_B);
            this.a_m0_PRV();
            return;
        }
        de.a_f1_ALbj_[this.g_f1_B].a_m7_PIRV(this.a_f2_B);
        de.i();
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        this.a_m9_PLcm_ABZZRV(cm2, rpg.e.h_f0_Lch_.a_m0_PIRAB(this.g_f0_Z ? 47 : 0), true, this.f == 0);
        this.a_m11_PLcm_BZIZRV(cm2, this.g_f1_B, this.h_f0_Z, this.g_f0_Z ? 3 : de.a_f1_ALbj_.length, this.g_f0_Z);
        this.a_m10_PLcm_Lbj_BZBBIRV(cm2, this.a_f0_Lbj_, this.g_f0_Z ? this.g_f1_B : (byte)0, this.h_f0_Z, this.c_f0_B, this.d_f0_B, this.g_f0_Z ? di.e_f1_I : de.f_f0_I);
    }

    protected final void a_m3_PLcm_BIIZRV(cm cm2, byte by2, int n2, int n3, boolean bl2) {
        cm2.a_m2_PIRV(0xFFFFFF);
        byte[] byArray = g.a_m0_PABABRAB(d.n, (" " + by2).getBytes());
        byArray = g.a_m0_PABABRAB(byArray, d.k);
        ac.a_m0_PLcm_IIABIRV(cm2, n2, n3, byArray, 1);
    }

    protected final void b(cm cm2) {
        if (!this.h_f0_Z) {
            this.e(cm2);
        }
    }
}

