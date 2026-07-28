/*
 * Decompiled with CFR 0.152.
 */
import rpg.b;
import rpg.d;
import rpg.e;
import rpg.f;

final class dp
extends dg {
    private boolean h = false;

    public dp(n n2) {
        super(n2, (byte)7, (byte)3, (byte)3);
        dg.g = true;
    }

    public static void g() {
        if (dg.b != null) {
            dg.b = null;
        }
        if (dg.a_f1_AAB != null) {
            dg.a_f1_AAB = null;
        }
        if (dg.d != null) {
            dg.d = null;
        }
        if (dg.e_f0_AI != null) {
            dg.e_f0_AI = null;
        }
    }

    /*
     * Enabled aggressive block sorting
     */
    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (this.h) {
            this.h = false;
            return true;
        }
        if (n.g(n2, n3)) {
            if (this.a_f1_Ln_ instanceof ax) {
                this.a_f1_Ln_.a_f2_B = (byte)2;
            }
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            n3 = this.a_f2_B;
            dp dp2 = this;
            Object object = di.a_f9_Ldo_.a_m29_PBRLbm_((byte)n3);
            if (object == null) {
                if (dp2.a_f2_B == 5) {
                    if (!di.b_m9_PRZ()) {
                        dp2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(38));
                        return true;
                    }
                    if (di.b_f4_B != 2 && di.a_f9_Ldo_.a_m29_PBRLbm_((byte)3) == null) {
                        dp2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(59));
                        return true;
                    }
                }
                byte[] byArray = dg.a_f1_AAB[dp2.a_f2_B];
                object = byArray;
                if (byArray != null) {
                    dp2.b_f1_Ln_ = new bk(dp2, dp2.a_f2_B);
                    return true;
                }
                dp2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(60));
                return true;
            }
            byte[] byArray = dg.a_f1_AAB[dp2.a_f2_B];
            object = byArray;
            if (byArray != null) {
                dp2.b_f1_Ln_ = new dj(dp2, ax.a_f1_Lch_.a_m1_PIIRAAB(65, 66), 1);
                return true;
            }
            dp2.b_f1_Ln_ = new bt((n)dp2, ax.a_f1_Lch_.a_m0_PIRAB(67), 3, true);
            return true;
        }
        if (n3 == 52) return this.a_m2_PBRZ((byte)3);
        if (n2 == 2) {
            return this.a_m2_PBRZ((byte)3);
        }
        if (n3 == 54) return this.a_m2_PBRZ((byte)4);
        if (n2 == 5) {
            return this.a_m2_PBRZ((byte)4);
        }
        if (n3 == 50) return this.b_m0_PBRZ((byte)3);
        if (n2 == 1) {
            return this.b_m0_PBRZ((byte)3);
        }
        if (n3 == 56) return this.b_m0_PBRZ((byte)4);
        if (n2 != 6) return true;
        return this.b_m0_PBRZ((byte)4);
    }

    final void a_m1_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 6) {
            if (by3 == 0) {
                byte[] byArray = dg.a_f1_AAB[this.a_f2_B];
                if (byArray != null) {
                    this.b_f1_Ln_ = new bk(this, this.a_f2_B);
                }
                return;
            }
            if (by3 == 1) {
                this.b_f1_Ln_ = new bt((n)this, ax.a_f1_Lch_.a_m0_PIRAB(67), 3, true, true);
                return;
            }
        } else if (by2 == 3 && by3 == 0) {
            by3 = this.a_f2_B;
            dp dp2 = this;
            do do_ = di.a_f9_Ldo_;
            do_.j_m2_PBRV(by3);
            do_.i_m1_PRV();
            by3 = dg.a_f0_AB[by3];
            if (by3 >= 0) {
                e.a_m11_PLca_IRV(e.a_f2_Lca_, by3);
            }
            dg.g = true;
            dp2.a_m2_PABRV(ax.a_f1_Lch_.a_m0_PIRAB(68));
        }
    }

    /*
     * Enabled aggressive block sorting
     */
    private boolean a_m2_PBRZ(byte by2) {
        if (by2 == 4) {
            if (this.a_f2_B != 6) {
                if (this.a_f2_B % 3 == 2) {
                    this.a_f2_B = (byte)(this.a_f2_B - 2);
                    return true;
                }
                this.a_f2_B = (byte)(this.a_f2_B + 1);
                return true;
            }
        } else {
            if (this.a_f2_B == 6) {
                this.a_f2_B = (byte)3;
                return true;
            }
            if (this.a_f2_B % 3 == 0) {
                this.a_f2_B = (byte)(this.a_f2_B + 2);
                return true;
            }
        }
        this.a_f2_B = (byte)(this.a_f2_B - 1);
        return true;
    }

    private boolean b_m0_PBRZ(byte by2) {
        if (by2 == 4) {
            this.a_f2_B = (byte)(this.a_f2_B + this.c_f0_B);
            if (this.a_f2_B > 8) {
                this.a_f2_B = 1;
            }
            if (this.a_f2_B > 6) {
                this.a_f2_B = (byte)6;
            }
        } else {
            this.a_f2_B = this.a_f2_B == 6 ? (byte)4 : (byte)(this.a_f2_B - this.c_f0_B);
            if (this.a_f2_B == -2) {
                this.a_f2_B = (byte)6;
            } else if (this.a_f2_B < 0) {
                this.a_f2_B = 1;
            }
        }
        return true;
    }

    /*
     * Enabled aggressive block sorting
     */
    protected final void a_m3_PLcm_RV(cm cm2) {
        Object object;
        byte by2;
        block23: {
            if (!di.c_f0_Z) {
                di.c_f0_Z = true;
                rpg.b.a_m5_PRZ();
                this.h = true;
                di.a_f1_AB = e.a_f1_Lch_.a_m0_PIRAB(13);
                eb.f(cm2, f.c, f.d, rpg.d.e_, 174);
                cm2.a_m2_PIRV(15723216);
                cm2.d_m0_PIIIIRV(f.c, f.d, rpg.d.e_ - 1, 173);
                cm2.a_m2_PIRV(3550755);
                if (di.a_f1_AB != null) {
                    ac.a_m1_PLcm_IIIIABRV(cm2, f.c + 10, f.d + 10, f.b - 10, 1, di.a_f1_AB);
                }
                return;
            }
            if (!dg.g) break block23;
            dg.b = new byte[7];
            for (int i2 = 0; i2 < 7; ++i2) {
                dg.b[i2] = -1;
            }
            dg.b = di.a_m12_PRLbj_().b_m1_PRAB();
            dp dp2 = this;
            dg.a_f1_AAB = new byte[7][];
            for (by2 = 0; by2 < 7; by2 = (byte)(by2 + 1)) {
                Object object2;
                block24: {
                    byte by3 = by2;
                    byte by4 = -1;
                    byte by5 = -1;
                    block0 : switch (by3) {
                        case 0: 
                        case 4: 
                        case 6: {
                            by4 = (byte)(by3 + 8);
                            if (!di.a_m17_PRZ()) break;
                            by4 = (byte)(by4 + 1);
                            break;
                        }
                        case 1: {
                            by4 = 10;
                            break;
                        }
                        case 2: {
                            by4 = 11;
                            break;
                        }
                        case 3: {
                            switch (di.b_f4_B) {
                                case 0: {
                                    by4 = 0;
                                    by5 = 1;
                                    break block0;
                                }
                                case 1: 
                                case 5: {
                                    by4 = 4;
                                    break block0;
                                }
                                case 2: {
                                    by4 = 2;
                                    by5 = 3;
                                    break block0;
                                }
                                case 3: {
                                    by4 = 5;
                                    break block0;
                                }
                                case 4: {
                                    by4 = 6;
                                }
                            }
                            break;
                        }
                        case 5: {
                            switch (di.b_f4_B) {
                                case 1: {
                                    by4 = 4;
                                    break block0;
                                }
                                case 3: {
                                    by4 = 5;
                                    break block0;
                                }
                                case 2: {
                                    by4 = 7;
                                    break block0;
                                }
                            }
                            object2 = null;
                            break block24;
                        }
                    }
                    object = di.a_m12_PRLbj_().a_m9_PBBZBRAB(by4, by5, true, di.a_f9_Ldo_.a_m28_PRB());
                    object2 = object;
                }
                if (object2 == null) continue;
                dg.a_f1_AAB[by2] = new byte[((as)object).length];
                dg.a_f1_AAB[by2] = (byte[])object;
            }
            this.a_m6_PRV();
            dg.g = false;
        }
        by2 = this.a_f2_B;
        object = dg.a_m4_PBRLas_(by2);
        this.a_m0_PLcm_BLas_ZZRV(cm2, by2, (as)object, false, this.a_f2_B == 5);
    }

    protected final void b_m1_PLcm_RV(cm cm2) {
        int n2 = this.a_f2_B / this.c_f0_B;
        int n3 = this.a_f2_B % this.c_f0_B;
        int n4 = this.a_ + (f.b - 122 >> 1) + n3 * 15;
        n3 = this.b_ + 24 + n2 * 15 + (n3 == 1 ? -7 : 0);
        if (n2 == 2) {
            n4 = this.a_ + (f.b - 122 >> 1) + 15;
            n3 = this.b_ + 24 + 30 - 7;
        }
        if (!this.h) {
            this.a_m4_PLcm_IIIIRV(cm2, n4, n3, 13, 13);
        }
    }

    public static boolean a_m4_PLas_RZ(as as2) {
        switch (as2.a_f1_B) {
            case 8: 
            case 12: 
            case 14: {
                return !di.a_m17_PRZ();
            }
            case 9: 
            case 13: 
            case 15: {
                return di.a_m17_PRZ();
            }
            case 10: 
            case 11: {
                return true;
            }
        }
        switch (di.b_f4_B) {
            case 0: {
                if (as2.a_f1_B != 0 && as2.a_f1_B != 1) break;
                return true;
            }
            case 1: 
            case 5: {
                if (as2.a_f1_B != 4) break;
                return true;
            }
            case 2: {
                if (as2.a_f1_B != 2 && as2.a_f1_B != 3 && as2.a_f1_B != 7) break;
                return true;
            }
            case 3: {
                if (as2.a_f1_B != 5) break;
                return true;
            }
            case 4: {
                if (as2.a_f1_B != 6) break;
                return true;
            }
        }
        return false;
    }
}

