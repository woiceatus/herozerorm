/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;
import rpg.e;
import rpg.g;

final class ce
extends bp {
    private static final byte[] c = new byte[]{4, 6};
    private o a;

    public ce(n n2) {
        super(n2, bp.g_f0_B, (byte)4, bp.f_f0_B);
        this.e_f0_I = 0;
        this.a = this.a_f2_Ldo_.a_m38_PRLo_();
        this.j = 0;
        this.k = (byte)5;
        this.i_f0_B = (byte)(this.i_f0_B + 1);
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            if (this.h_f1_Z) {
                this.h_f1_Z = false;
                this.a_f2_Ldo_.i_m1_PRV();
            }
            this.a_f1_Ln_.a_f2_B = (byte)4;
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (this.e_f1_Z) {
            if (n2 == 1 || n3 == 50) {
                this.e_f1_Z = false;
                this.f_f1_Z = true;
            } else if (!this.a_m5_PIIBRZ(n2, n3, (byte)2)) {
                return true;
            }
            return true;
        }
        if (this.f_f1_Z) {
            if (n2 == 1 || n2 == 8 || n3 == 50 || n3 == 53) {
                this.a_f2_B = c[this.j];
                this.f_f1_Z = false;
                return true;
            }
            return this.b_m1_PIIBRZ(n2, n3, (byte)2);
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.e_f0_I == 0) {
                return this.a_m13_PZBRZ(true, (byte)2);
            }
            ce ce2 = this;
            n3 = ce2.a_f2_B < 2 ? 1 : 0;
            byte by2 = (byte)(n3 != 0 ? ce2.a_f2_B : ce2.a_f2_B - 2);
            byte by3 = ce2.a_m3_PBZRB(by2, n3 != 0);
            n3 = by3;
            if (by3 >= 0 && (by2 = ce2.a.b_m1_PBRB(n3)) >= 0) {
                if (ce2.a_f2_B < 2) {
                    if (ce2.i_f1_Z && by2 < ce2.k) {
                        ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m2_PIIIRAAB(24, 28, 25));
                    } else {
                        ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(28, 25));
                    }
                } else if (ce2.i_f1_Z && by2 < ce2.k) {
                    if (by2 == 0) {
                        ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m1_PIIRAAB(24, 25));
                    } else {
                        ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m4_PAIRAAB(new int[]{24, 33, 34, 25}));
                    }
                } else if (by2 == 0) {
                    ce2.a_m11_PBBZZRV(n3, by2, false, false);
                } else {
                    ce2.a_m10_PAABRV(ax.a_f1_Lch_.a_m4_PAIRAAB(new int[]{33, 34, 25}));
                }
            }
            return true;
        }
        if (this.a_m12_PIIIZRZ(n2, n3, c[this.j] + 2, true)) {
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
            by2 = this.a_f2_B < 2 ? (byte)1 : 0;
            byte by4 = this.a_f2_B;
            if (by2 == 0) {
                by4 = (byte)(by4 - 2);
            }
            by2 = this.a_m3_PBZRB(by4, by2 != 0);
            by4 = this.a_m4_PBRB(by2);
            if (this.e_f0_I == 0) {
                this.a_m14_PBBBBZRV(by3, by2, by4, (byte)2, false);
                return;
            }
            this.b_m4_PBBBBZRV(by3, by2, by4, (byte)2, false);
        }
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        int n2 = this.b_ + 13;
        int n3 = n2 + 16;
        this.a_m6_PLcm_IIBRV(cm2, n2, n3, (byte)2);
        if (this.e_f0_I == 0) {
            for (n2 = 0; n2 < 2; ++n2) {
                if (di.b_f5_AB[n2 + 2] < 0) continue;
                n.b_m6_PLcm_IIIIIRV(cm2, 7 + (n2 << 1), this.a_ + 1 + n2 * (d.e_ >> 1), n3 + 10, 4, 0);
            }
        }
        n2 = this.a_ + 65;
        n3 = this.b_ + 174 - 14 - 1;
        cm2.a_m2_PIRV(0);
        n.c_m3_PLcm_IIIIRV(cm2, n2, n3, 35, 14);
        cm2.a_m2_PIRV(16755968);
        ac.a_m0_PLcm_IIABIRV(cm2, n2 + 3, n3, g.a_m0_PABABRAB(d.n, ("" + (this.j + 1)).getBytes()), 0);
        this.a_m9_PLcm_BRV(cm2, (byte)2);
    }

    final byte a_m3_PBZRB(byte by2, boolean bl2) {
        if (!bl2) {
            if (by2 < c[this.j]) {
                return (byte)(by2 + this.j * c[0]);
            }
            return -2;
        }
        if (this.e_f0_I == 0) {
            return this.b[by2 + 2];
        }
        return this.b[by2];
    }

    final byte a_m4_PBRB(byte by2) {
        if (this.e_f0_I == 1) {
            return this.a.b_m1_PBRB(by2);
        }
        return this.a.a_m2_PBRB(by2);
    }

    final boolean a_m5_PBRZ(byte by2) {
        if (by2 < 0) {
            return false;
        }
        if (this.e_f0_I == 0) {
            return di.a_m16_PBZRZ(by2, false);
        }
        return this.a.c_m0_PBRZ(by2);
    }

    final void a_m6_PRV() {
        this.b = this.e_f0_I == 0 ? di.b_f5_AB : this.a.a_f1_AB;
        this.a_f1_Lch_ = this.e_f0_I == 1 ? ax.c : ax.b;
        this.g_f1_Z = false;
    }

    final void g() {
        ax.b = new ch("/t/sa");
        ax.c = new ch("/t/sp");
    }

    protected final void c(byte by2) {
        this.i();
        by2 = this.e_f0_I == 0 ? (byte)(this.a.a_m3_PBRZ(by2) ? 1 : 0) : (byte)(this.a.b_m2_PBRZ(by2) ? 1 : 0);
        if (by2 != 0) {
            this.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(58));
        }
    }

    protected final void b(byte by2, byte by3) {
        this.a.a_m4_PIBRV(by2, by3);
        this.h_f1_Z = true;
    }

    protected final void h() {
        this.a.a_m5_PIRV(this.a_f2_B);
        this.h_f1_Z = true;
    }

    protected final void a_m7_PLcm_BIIRV(cm cm2, byte by2, int n2, int n3) {
        cm2.a_m1_PLcg_IIIRV(e.g_f1_ALcg_[by2], n2, n3, 20);
    }
}

