/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;

final class cu
extends cl {
    private final byte[] a_f0_AB = new byte[]{1, 1, 2, 2, 5, 4, 5, 2, 2, -1, -1};
    private final byte[] b = new byte[]{3, 0, 6};
    private final byte[] c = new byte[]{0, 0, 0, 0, 0, 0, 2};
    private final byte[] d = new byte[]{40, 45, 45, 40, 27, 27, 27, 27, 27, 27, 27, 27, 10, -2, 4};
    private boolean a_f1_Z = false;
    private cd a_f2_Lcd_ = null;

    cu(do do_) {
        super(do_);
    }

    /*
     * Enabled aggressive block sorting
     */
    public final boolean a_m0_PBIRZ(byte by2, int n2) {
        int n3 = 0;
        int n4 = n2 == this.a_f0_AB[by2] ? 1 : 0;
        switch (by2) {
            case 0: 
            case 1: 
            case 2: {
                if (n2 == this.b[by2]) {
                    n3 = 1;
                    n4 = 1;
                }
            }
            case 3: {
                if (n4 == 0) return true;
                if (!this.a_m9_PBBIZZZRZ(this.c[(by2 << 1) + (n3 != 0 ? 1 : 0)], by2, -1, false, n3 != 0, false)) return false;
                this.c_m1_PBRV(by2);
                return true;
            }
            case 4: {
                cu cu2 = this;
                n3 = 1;
                switch (n2) {
                    case 0: {
                        cu2.a_f1_Z = false;
                        return n3 != 0;
                    }
                    case 2: 
                    case 5: {
                        n2 = cu2.a_m5_PBIZRI((byte)4, cu2.a_f0_Ldo_.b_m10_PBRI((byte)1), true);
                        int n5 = n2 = rpg.g.a_m7_PIIRI(0, 99) < n2 ? -100 : -2;
                        if (cu2.a_f0_Ldo_.a_m18_PBBBIRZ((byte)4, (byte)2, (byte)11, n2)) {
                            cu2.a_m3_PBRV((byte)4);
                        } else {
                            n3 = 0;
                        }
                        cu2.a_f1_Z = cu2.a_f0_Ldo_.g_f0_B > 0;
                        return n3 != 0;
                    }
                    case 4: 
                    case 6: {
                        if (!cu2.a_f1_Z) return n3 != 0;
                        cu2.a_f0_Ldo_.c_m0_PBRV(rpg.d.P[cu2.a_f0_Ldo_.c_f0_B]);
                        cu2.a_f1_Z = false;
                        return n3 != 0;
                    }
                }
                return n3 != 0;
            }
            case 5: {
                cu cu3 = this;
                switch (n2) {
                    case 4: {
                        cd cd2 = cu3.a_f0_Ldo_.a_m16_PRLcd_();
                        if (cd2 != null && !cd2.b_m1_PRZ()) {
                            if (rpg.g.a_m7_PIIRI(0, 99) < cu3.c_m0_PBRI((byte)5)) {
                                n4 = cu3.a_f0_Ldo_.c_m2_PZRI(false);
                                cd2.c_m6_PIIRV(75, n4);
                            } else {
                                cd2.D();
                            }
                        }
                        cu3.a_m3_PBRV((byte)5);
                    }
                    case 6: {
                        di.a_f4_Lg_.c_m4_PIIRV(2, n2);
                        return true;
                    }
                }
                return true;
            }
            case 6: {
                cu cu4 = this;
                n3 = 0;
                n4 = 0;
                if (n2 > 0 && n2 < 13) {
                    di.a_f4_Lg_.c_m4_PIIRV(cu4.d[n2 - 1] >> 1, 2);
                }
                switch (n2) {
                    case 1: {
                        cu4.a_f2_Lcd_ = cu4.a_f0_Ldo_.a_m16_PRLcd_();
                        if (cu4.a_f2_Lcd_ == null) {
                            cu4.a_f1_Z = false;
                            return true;
                        }
                        n2 = cu4.a_m7_PBZRI((byte)6, false);
                        cu cu5 = cu4;
                        cu4.a_f1_Z = cu4.a_f2_Lcd_.a_m12_PLdo_BIZBBZZZRZ(cu4.a_f0_Ldo_, (byte)6, n2, false, cu4.a_f0_Ldo_.c_f0_B, (byte)2, false, true, true);
                        if (cu4.a_f1_Z) {
                            cu4.a_f2_Lcd_.c_m3_PABRV(cu4.d);
                            return true;
                        }
                    }
                    case 2: {
                        if (cu4.a_f1_Z) return true;
                        cu4.a_f0_Ldo_.c_f1_I = 15;
                        return true;
                    }
                    case 3: {
                        cu4.a_f0_Ldo_.c_m4_PZRV(true);
                        break;
                    }
                    case 8: 
                    case 12: {
                        n4 = 1;
                    }
                    case 5: {
                        n3 = 1;
                        break;
                    }
                    case 13: {
                        cu4.a_f0_Ldo_.c_m4_PZRV(false);
                        if (cu4.a_f2_Lcd_ == null) break;
                        cu4.a_f2_Lcd_ = null;
                        break;
                    }
                    case 14: {
                        di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                    }
                }
                if (n3 == 0) return true;
                if (cu4.a_f2_Lcd_ != null) {
                    n2 = cu4.a_m7_PBZRI((byte)6, n4 != 0);
                    cu cu6 = cu4;
                    cu4.a_f2_Lcd_.a_m12_PLdo_BIZBBZZZRZ(cu4.a_f0_Ldo_, (byte)6, n2, false, cu4.a_f0_Ldo_.c_f0_B, (byte)2, false, true, true);
                }
                cu4.a_m3_PBRV((byte)6);
                return true;
            }
            case 7: {
                if (n4 == 0) return true;
                by2 = (byte)this.c_m0_PBRI((byte)7);
                cu cu7 = this;
                this.a_f0_Ldo_.a_m18_PBBBIRZ((byte)7, by2, (byte)2, -2);
                this.a_m3_PBRV((byte)7);
                return true;
            }
            case 8: {
                cu cu8 = this;
                n3 = n2 == 4 ? 1 : 0;
                switch (n2) {
                    case 1: 
                    case 4: {
                        n4 = cu8.a_m7_PBZRI((byte)8, n3 != 0);
                        di.a_f4_Lg_.a_m3_PLdu_RV(new bz(cu8.a_f0_Ldo_, n2 == 4 ? (byte)1 : 0, 8, n4));
                        cu8.a_m3_PBRV((byte)7);
                        return true;
                    }
                }
                return true;
            }
            case 9: {
                cu cu9 = this;
                if (n2 != 5) return true;
                cu9.a_f0_Ldo_.f_m0_PBRV((byte)10);
                g.a_m16_PIRV(1);
                for (n3 = 1; n3 <= 4; n3 = (int)((byte)(n3 + 1))) {
                    cu9.a_f0_Ldo_.i_m2_PBRV((byte)n3);
                }
                n3 = cu9.c_m0_PBRI((byte)9);
                h.a_m0_PLdo_SRV(di.a_f9_Ldo_, (short)n3);
                cu9.a_m3_PBRV((byte)9);
                return true;
            }
        }
        return true;
    }

    protected final byte a_m1_PRB() {
        return 2;
    }

    public final boolean a_m2_PBRZ(byte by2) {
        if (by2 == 7) {
            return true;
        }
        return this.a_m8_PRZ();
    }

    protected final void a_m3_PBRV(byte by2) {
        byte by3 = 5;
        switch (by2) {
            case 5: 
            case 7: 
            case 9: {
                by3 = 0;
                break;
            }
            case 8: {
                by3 = 4;
            }
        }
        bq.a_m2_PBRV(by3);
    }

    public final boolean b(byte by2) {
        switch (by2) {
            case 7: 
            case 9: 
            case 10: {
                return false;
            }
        }
        return true;
    }
}

