/*
 * Decompiled with CFR 0.152.
 */
final class cy
extends p {
    private bj a_f0_Lbj_ = null;
    private as a_f1_Las_ = null;
    private byte f;
    private boolean e;
    private byte g;

    public cy(n n2, byte by2) {
        super(n2, (byte)28, (byte)4, (byte)7);
        switch (by2) {
            case 0: {
                this.a_f0_Lbj_ = di.a_m12_PRLbj_();
                break;
            }
            case 2: {
                this.a_f0_Lbj_ = di.b_m6_PRLbj_();
                break;
            }
            case 1: {
                this.a_f0_Lbj_ = di.c_m7_PRLbj_();
            }
        }
        this.g = this.f = by2;
        this.e = true;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (this.e) {
            if (n3 == 50 || n2 == 1) {
                this.g = (byte)((this.g + 2) % 3);
            } else if (n3 == 56 || n2 == 6) {
                this.g = (byte)((this.g + 1) % 3);
            } else {
                if (n3 == 54 || n2 == 5 || n.f_m0_PIIRZ(n2, n3)) {
                    this.a_f2_B = 0;
                    this.e = false;
                    return true;
                }
                return true;
            }
            this.a_f1_Ln_.b_f1_Ln_ = new cy(this.a_f1_Ln_, this.g);
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Las_ = this.a_f0_Lbj_.a_m1_PIRLas_(this.a_f2_B);
            if (this.a_f1_Las_ == null) {
                return true;
            }
            if (this.a_f1_Las_.a_m11_PRZ()) {
                this.b_f1_Ln_ = new dj((n)this, ax.a_f1_Lch_.a_m3_PIIIIRAAB(43, 44, 42, 25));
            } else if (this.a_f1_Las_.b() && !this.a_f1_Las_.c() && dp.a_m4_PLas_RZ(this.a_f1_Las_)) {
                this.b_f1_Ln_ = new dj((n)this, ax.a_f1_Lch_.a_m2_PIIIRAAB(65, 42, 25));
            } else if (cy.a_m4_PLas_RZ(this.a_f1_Las_)) {
                this.b_f1_Ln_ = new dj((n)this, ax.a_f1_Lch_.a_m2_PIIIRAAB(41, 42, 25));
            } else if (this.a_f1_Las_.d()) {
                this.b_f1_Ln_ = new dj((n)this, ax.a_f1_Lch_.a_m1_PIIRAAB(42, 25));
            } else {
                this.a_m9_PLas_RV(this.a_f1_Las_);
            }
            return true;
        }
        if ((n3 == 52 || n2 == 2) && this.a_f2_B % 7 == 0) {
            this.e = true;
            return true;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            return true;
        }
        this.e_m1_PIIRZ(n2, n3);
        return true;
    }

    /*
     * Enabled aggressive block sorting
     */
    final void a_m1_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 6) {
            cy cy2 = this;
            if (cy2.a_f1_Las_.a_m11_PRZ()) {
                switch (by3) {
                    case 0: 
                    case 1: {
                        di.a_m13_PZBRV(by3 == 0, cy2.a_f1_Las_.b_f0_B);
                        return;
                    }
                    case 2: {
                        cy2.a_m2_PRV();
                        return;
                    }
                    case 3: {
                        cy2.a_m9_PLas_RV(cy2.a_f1_Las_);
                    }
                }
                return;
            }
            if (cy2.a_f1_Las_.b() && !cy2.a_f1_Las_.c() && dp.a_m4_PLas_RZ(cy2.a_f1_Las_)) {
                if (by3 == 0) {
                    cy2.b_f1_Ln_ = new dp(cy2);
                    return;
                }
                if (by3 == 1) {
                    cy2.a_m2_PRV();
                    return;
                }
                if (by3 != 2) return;
                cy2.a_m9_PLas_RV(cy2.a_f1_Las_);
                return;
            }
            if (cy.a_m4_PLas_RZ(cy2.a_f1_Las_)) {
                if (by3 == 0) {
                    if (di.a_f4_Lg_.d_f3_Z) {
                        cy2.b_f1_Ln_ = new bt((n)cy2, ax.a_f1_Lch_.a_m0_PIRAB(48), 5, true);
                        return;
                    }
                    cy2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(45));
                    return;
                }
                if (by3 == 1) {
                    cy2.a_m2_PRV();
                    return;
                }
                if (by3 != 2) return;
                cy2.a_m9_PLas_RV(cy2.a_f1_Las_);
                return;
            }
            if (!cy2.a_f1_Las_.d()) return;
            if (by3 == 0) {
                cy2.a_m2_PRV();
                return;
            }
            if (by3 != 1) return;
            cy2.a_m9_PLas_RV(cy2.a_f1_Las_);
            return;
        }
        if (by2 == 4 && by3 == 0) {
            this.a_f0_Lbj_.a_m7_PIRV(this.a_f2_B);
            bs.d_f0_Z = true;
            return;
        }
        if (by2 != 5) return;
        if (by3 != 0) return;
        this.a_f0_Lbj_.a_m6_PIIRV(this.a_f2_B, 1);
        di.a_m2_PBBRV((byte)7, (byte)2);
    }

    private void a_m2_PRV() {
        if (this.a_f1_Las_.c()) {
            this.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(47));
            return;
        }
        this.b_f1_Ln_ = new bt((n)this, ax.a_f1_Lch_.a_m0_PIRAB(46), 4, true, true);
    }

    protected final void a_m3_PLcm_RV(cm cm2) {
        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        this.a_m11_PLcm_BZIZRV(cm2, this.f, this.e, 3, true);
        this.a_m10_PLcm_Lbj_BZBBIRV(cm2, this.a_f0_Lbj_, this.f, this.e, (byte)7, (byte)4, di.e_f1_I);
    }

    private static boolean a_m4_PLas_RZ(as as2) {
        return as2.a_f1_B == 20 && as2.b_f0_B == 1;
    }
}

