/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;

final class y
extends bp {
    private final byte[] c = new byte[]{2, 4, 2};

    public y(n n2) {
        super(n2, bp.g_f0_B, (byte)4, bp.f_f0_B);
        this.j = 0;
        byte by2 = di.b_f4_B;
        for (byte by3 = 0; by3 < by2; by3 = (byte)(by3 + 1)) {
            this.j = (byte)(this.j + (do.g_m5_PBRZ(by3) ? 4 : 2));
        }
        this.j = (byte)(this.j / 4);
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            y y2 = this;
            if (y2.h_f1_Z) {
                y2.a_f2_Ldo_.a_m6_PRV();
                y2.a_f2_Ldo_.i_m1_PRV();
                y2.h_f1_Z = false;
            }
            this.a_f1_Ln_.a_f2_B = (byte)3;
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (this.e_f1_Z) {
            if ((n2 == 1 || n3 == 50) && this.e_f0_I == 1) {
                this.e_f1_Z = false;
                this.f_f1_Z = true;
            } else if (!this.a_m5_PIIBRZ(n2, n3, (byte)3)) {
                return true;
            }
            return true;
        }
        if (this.f_f1_Z) {
            if (n2 == 1 || n2 == 8 || n3 == 50 || n3 == 53) {
                this.a_f2_B = (byte)(bp.a_f0_AB[this.e_f0_I] - 2);
                this.f_f1_Z = false;
            } else {
                this.b_m1_PIIBRZ(n2, n3, (byte)5);
            }
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.e_f0_I == 2) {
                y y3 = this;
                n3 = y3.a_m5_PBZRB(y3.a_f2_B, false);
                byte by2 = di.a_f9_Ldo_.a_m2_PBRB(n3);
                if (y3.i_f1_Z && by2 < y3.k) {
                    y3.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(24, 25));
                } else {
                    y3.a_m11_PBBZZRV(n3, by2, true, true);
                }
                return true;
            }
            if (this.e_f0_I == 0) {
                return this.a_m13_PZBRZ(false, this.c[this.e_f0_I]);
            }
            y y4 = this;
            n3 = y4.a_f2_B < y4.c[y4.e_f0_I] ? 1 : 0;
            byte by3 = (byte)(n3 != 0 ? y4.a_f2_B : y4.a_f2_B - y4.c[y4.e_f0_I]);
            byte by4 = y4.a_m5_PBZRB(by3, n3 != 0);
            n3 = by4;
            if (by4 >= 0 && (by3 = y4.a_f2_Ldo_.b_m13_PBRB(n3)) >= 0) {
                if (y4.a_f2_B < y4.c[y4.e_f0_I]) {
                    if (y4.i_f1_Z && by3 < y4.k) {
                        y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m2_PIIIRAAB(24, 28, 25));
                    } else {
                        y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(28, 25));
                    }
                } else if (y4.i_f1_Z && by3 < y4.k) {
                    if (by3 == 0) {
                        y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(24, 25));
                    } else {
                        y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m4_PAIRAAB(new int[]{24, 33, 34, 35, 36, 25}));
                    }
                } else if (by3 == 0) {
                    y4.a_m11_PBBZZRV(n3, by3, false, true);
                } else {
                    y4.a_m10_PAABRV(ax.a_f1_Lch_.a_m4_PAIRAAB(new int[]{33, 34, 35, 36, 25}));
                }
            }
            return true;
        }
        if (this.a_m12_PIIIZRZ(n2, n3, bp.a_f0_AB[this.e_f0_I], this.e_f0_I == 1)) {
            return true;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            return true;
        }
        return true;
    }

    final void a_m1_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 6) {
            if (this.e_f0_I == 2) {
                by2 = this.a_m5_PBZRB(this.a_f2_B, false);
                if (by3 == 0) {
                    this.c(by2);
                    return;
                }
                this.a_m11_PBBZZRV(by2, this.a_f2_Ldo_.a_m2_PBRB(by2), true, true);
                return;
            }
            by2 = this.a_f2_B < this.c[this.e_f0_I] ? (byte)1 : 0;
            byte by4 = this.a_f2_B;
            if (by2 == 0) {
                by4 = (byte)(by4 - this.c[this.e_f0_I]);
            }
            by2 = this.a_m5_PBZRB(by4, by2 != 0);
            if (this.e_f0_I == 0) {
                by4 = di.a_f9_Ldo_.a_m2_PBRB(by2);
                this.a_m14_PBBBBZRV(by3, by2, by4, this.c[this.e_f0_I], true);
                return;
            }
            by4 = this.a_f2_Ldo_.b_m13_PBRB(by2);
            this.b_m4_PBBBBZRV(by3, by2, by4, this.c[this.e_f0_I], true);
        }
    }

    protected final void c(byte by2) {
        this.i();
        if (this.e_f0_I != 1) {
            di.a_f9_Ldo_.a_m3_PBBRV(di.b_f4_B, by2);
            return;
        }
        di.a_f9_Ldo_.a_m5_PIRV(by2);
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        int n2 = this.b_ + 13;
        int n3 = n2 + 16;
        this.a_m6_PLcm_IIBRV(cm2, n2, n3, this.c[this.e_f0_I]);
        if (this.e_f0_I == 0) {
            for (n2 = 0; n2 < 2; ++n2) {
                if (di.b_f5_AB[n2] <= 0) continue;
                n.b_m6_PLcm_IIIIIRV(cm2, 1 + (n2 << 1), this.a_ + 1 + n2 * (d.e_ >> 1), n3 + 10, 4, 0);
            }
        }
        if (this.e_f0_I == 2) {
            for (n2 = 1; n2 < 4; ++n2) {
                for (int i2 = 0; i2 < bp.f_f0_B; ++i2) {
                    int n4 = n3 + 10 + n2 * 29;
                    int n5 = this.a_ + 2 + i2 * (d.e_ >> 1);
                    cm cm3 = cm2;
                    y y2 = this;
                    bp.a_m7_PLcm_IIBBBBIRV(cm3, n5, n4, y2.h_f0_B, (byte)14, y2.i_f0_B, (byte)3, 15723216);
                }
            }
        }
        if (this.e_f0_I == 1) {
            this.a_m9_PLcm_BRV(cm2, (byte)5);
        }
    }

    final boolean a_m3_PBRZ(byte by2) {
        if (this.e_f0_I == 0) {
            return di.a_m16_PBZRZ(by2, true);
        }
        return this.a_f2_Ldo_.f_m3_PBRZ(by2);
    }

    final byte a_m4_PBRB(byte by2) {
        if (this.e_f0_I == 1) {
            return this.a_f2_Ldo_.b_m13_PBRB(by2);
        }
        return this.a_f2_Ldo_.a_m2_PBRB(by2);
    }

    /*
     * WARNING - void declaration
     */
    final byte a_m5_PBZRB(byte by2, boolean bl2) {
        void var2_8;
        if (bl2 && this.e_f0_I != 2) {
            return this.b[by2];
        }
        byte by3 = by2;
        switch (this.e_f0_I) {
            case 0: {
                byte by4 = (byte)(by2 + 4);
                break;
            }
            case 1: {
                int n2 = bp.a_f0_AB[this.e_f0_I] - this.c[this.e_f0_I];
                byte by5 = (byte)(by2 + this.j * n2);
                break;
            }
            case 2: {
                byte by6 = (byte)(by2 + 10);
            }
        }
        return (byte)var2_8;
    }

    protected final byte b_m0_PBRB(byte by2) {
        if (this.e_f0_I != 1) {
            by2 = (byte)(by2 - 4);
        }
        return by2;
    }

    protected final void a_m6_PRV() {
        this.b_f2_B = bp.g_f0_B = bp.a_f0_AB[this.e_f0_I];
        this.d_f0_B = (byte)4;
        this.b = this.e_f0_I == 0 ? di.b_f5_AB : this.a_f2_Ldo_.a_f1_AB;
        this.a_f1_Lch_ = this.e_f0_I == 1 ? ax.c : ax.b;
        this.g_f1_Z = false;
    }

    final void g() {
        ax.b = new ch("/t/s" + di.b_f4_B);
        ax.c = new ch("/t/ps");
    }

    protected final void b_m1_PBBRV(byte by2, byte by3) {
        this.a_f2_Ldo_.a_m34_PIBRV(by2, by3);
        this.h_f1_Z = true;
    }

    protected final void h() {
        this.a_f2_Ldo_.l_m0_PIRV(this.a_f2_B);
        this.h_f1_Z = true;
    }

    protected final void a_m7_PLcm_BIIRV(cm cm2, byte by2, int n2, int n3) {
        bs.a_m8_PIIIRV(by2 + 4, n2, n3);
    }
}

