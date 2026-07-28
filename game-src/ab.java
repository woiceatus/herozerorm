/*
 * Decompiled with CFR 0.152.
 */
final class ab
extends cl {
    private final byte[] a = new byte[]{2, 3, 1, 4};
    private final byte[] b = new byte[]{0, 3, 1, 1};

    ab(do do_) {
        super(do_);
    }

    public final boolean a_m0_PBIRZ(byte by2, int n2) {
        switch (by2) {
            case 4: {
                if (n2 >= 2 && n2 <= 5) {
                    this.a_f0_Ldo_.c_m4_PZRV(true);
                } else if (n2 == 7 || n2 == 9) {
                    di.a_f4_Lg_.c_m4_PIIRV(2, n2);
                    this.a_f0_Ldo_.c_m4_PZRV(false);
                }
                if (n2 == 7) {
                    n2 = this.a_m7_PBZRI((byte)4, false);
                    this.a_f0_Ldo_.a_m11_PBIBZZZRZ(by2, n2, this.a_m1_PRB(), false, false, false);
                    this.c_m1_PBRV(by2);
                }
                return true;
            }
            case 5: {
                ab ab2 = this;
                if (n2 != 3) break;
                cd cd2 = ab2.a_f0_Ldo_.a_m16_PRLcd_();
                if (cd2 != null && cd2.a_m12_PLdo_BIZBBZZZRZ(ab2.a_f0_Ldo_, (byte)5, -1, false, ab2.a_f0_Ldo_.c_f0_B, ab2.a_m1_PRB(), false, true, false)) {
                    int n3 = ab2.c_m0_PBRI((byte)5);
                    cd2.c_m5_PIRV(n3);
                }
                ab2.c_m1_PBRV((byte)5);
                break;
            }
            case 6: {
                ab ab3 = this;
                if (n2 != 4) break;
                n2 = ab3.a_m7_PBZRI((byte)6, false);
                ab3.a_f0_Ldo_.a_m18_PBBBIRZ((byte)6, (byte)3, ab3.a_m1_PRB(), n2);
                ab3.c_m1_PBRV((byte)6);
                break;
            }
            case 7: {
                ab ab4 = this;
                if (n2 == 4) {
                    n2 = ab4.c_m0_PBRI((byte)7);
                    for (byte by3 = 1; by3 <= 12; by3 = (byte)(by3 + 1)) {
                        cd cd3 = ab4.a_f0_Ldo_.b_m6_PBRLcd_(by3);
                        if (cd3 == null) continue;
                        if (rpg.g.a_m7_PIIRI(0, 99) < n2) {
                            cd3.g_m1_PIRV(75);
                            cd3.a_m12_PLdo_BIZBBZZZRZ(ab4.a_f0_Ldo_, (byte)7, -1, false, ab4.a_f0_Ldo_.c_f0_B, (byte)1, false, true, false);
                            continue;
                        }
                        cd3.D();
                    }
                    ab4.a_m3_PBRV((byte)7);
                }
                return true;
            }
            case 8: {
                ab ab5 = this;
                if (n2 == 6) {
                    n2 = ab5.a_f0_Ldo_.f_m2_PBRI((byte)0) / 10;
                    int n4 = ab5.a_m5_PBIZRI((byte)8, n2, false);
                    ab5.a_f0_Ldo_.c_m5_PIRV(-n2);
                    ab5.a_f0_Ldo_.h_m1_PIRV(n4);
                    bs.c_f0_Z = true;
                    ab5.a_m3_PBRV((byte)8);
                } else if (n2 == 4) {
                    g.a_m16_PIRV(1);
                }
                return true;
            }
            case 9: {
                if (n2 == 0 || n2 == 2 || n2 == 4) {
                    n2 = this.a_m7_PBZRI((byte)9, false);
                    if (this.a_f0_Ldo_.a_m15_PBIBRZ((byte)9, n2, this.a_m1_PRB())) {
                        this.c_m1_PBRV((byte)9);
                    } else {
                        return false;
                    }
                }
                return true;
            }
            case 0: 
            case 1: 
            case 2: 
            case 3: {
                if ((n2 = n2 == this.a[by2] ? 1 : 0) == 0) break;
                if (this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, false, false, false)) {
                    this.c_m1_PBRV(by2);
                    break;
                }
                return false;
            }
        }
        return true;
    }

    protected final byte a_m1_PRB() {
        int n2 = 1;
        bm bm2 = this.a_f0_Ldo_.a_m29_PBRLbm_((byte)3);
        if (bm2 != null && bm2.a_f1_B == 0) {
            n2 = 3;
        }
        return (byte)n2;
    }

    public final boolean a_m2_PBRZ(byte by2) {
        switch (by2) {
            case 7: 
            case 8: {
                return true;
            }
        }
        return this.a_m8_PRZ();
    }

    protected final void a_m3_PBRV(byte by2) {
        byte by3 = 8;
        switch (by2) {
            case 4: {
                by3 = 1;
                break;
            }
            case 5: {
                by3 = 3;
                break;
            }
            case 6: 
            case 7: 
            case 8: {
                by3 = 0;
            }
        }
        bq.a_m2_PBRV(by3);
    }

    public final boolean b(byte by2) {
        switch (by2) {
            case 6: 
            case 7: 
            case 8: 
            case 9: {
                return false;
            }
        }
        return true;
    }
}

