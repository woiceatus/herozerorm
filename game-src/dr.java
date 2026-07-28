/*
 * Decompiled with CFR 0.152.
 */
final class dr
extends cl {
    private final byte[] a = new byte[]{2, 2, -1, -1, 0, 10, 1, 0, 0, 1, 0, 3};
    private final byte[] b = new byte[]{0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0};

    dr(do do_) {
        super(do_);
    }

    public final boolean a_m0_PBIRZ(byte by2, int n2) {
        boolean bl2 = n2 == this.a[by2];
        block0 : switch (by2) {
            case 4: {
                dr dr2 = this;
                if (n2 == 0) {
                    dr2.a_m3_PBRV((byte)4);
                    n2 = dr2.a_f0_Ldo_.f_m2_PBRI((byte)0) / 10;
                    dr2.a_f0_Ldo_.c_m5_PIRV(-n2);
                    n2 = dr2.c_m0_PBRI((byte)4);
                    dr2.a_f0_Ldo_.i_m0_PIRV(n2);
                }
                return true;
            }
            case 5: {
                dr dr3 = this;
                switch (n2) {
                    case 3: {
                        dr3.a_m3_PBRV((byte)5);
                    }
                    case 5: 
                    case 7: 
                    case 9: {
                        di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                        break;
                    }
                    case 10: {
                        n2 = dr3.c_m0_PBRI((byte)5);
                        dr3.a_f0_Ldo_.n_m0_PIRV(n2);
                    }
                }
                return true;
            }
            case 9: {
                if (n2 == 1) {
                    di.a_f4_Lg_.c_m4_PIIRV(3, 1);
                    break;
                }
                if (n2 != 3) break;
                di.a_f4_Lg_.c_m4_PIIRV(1, 2);
                break;
            }
            case 10: {
                switch (n2) {
                    case 0: 
                    case 1: 
                    case 2: 
                    case 3: {
                        bl2 = true;
                    }
                }
                break;
            }
            case 11: {
                switch (n2) {
                    case 2: {
                        this.a_m3_PBRV(by2);
                        g.a_m16_PIRV(1);
                        break block0;
                    }
                    case 3: 
                    case 4: 
                    case 5: {
                        di.a_f4_Lg_.a_m3_PLdu_RV(new bz(this.a_f0_Ldo_, 2, 11, -1));
                    }
                }
            }
        }
        if (bl2) {
            if (this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, false, false, false)) {
                this.c_m1_PBRV(by2);
            } else {
                return false;
            }
        }
        return true;
    }

    protected final byte a_m1_PRB() {
        return 2;
    }

    public final boolean a_m2_PBRZ(byte by2) {
        switch (by2) {
            case 4: 
            case 5: {
                return true;
            }
        }
        return this.a_m8_PRZ();
    }

    public final byte b_m0_PRB() {
        return (byte)(this.a_f0_Ldo_.b_f4_I > 0 ? 6 : 2);
    }

    protected final void a_m3_PBRV(byte by2) {
        byte by3 = 6;
        switch (by2) {
            case 11: {
                by3 = 2;
                break;
            }
            case 4: 
            case 5: {
                by3 = 0;
            }
        }
        bq.a_m2_PBRV(by3);
    }

    public final boolean b_m1_PBRZ(byte by2) {
        switch (by2) {
            case 4: 
            case 5: {
                return false;
            }
        }
        return true;
    }
}

