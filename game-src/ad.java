/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;

final class ad
extends cl {
    private cd a;
    private cd b;

    ad(do do_) {
        super(do_);
    }

    public final boolean a_m0_PBIRZ(byte by2, int n2) {
        block53: {
            block0 : switch (by2) {
                case 0: {
                    ad ad2 = this;
                    boolean bl2 = false;
                    boolean bl3 = false;
                    if (n2 == 0) {
                        bl2 = true;
                        ad2.c_m1_PBRV((byte)0);
                    } else if (n2 == 2) {
                        bl3 = true;
                        bl2 = true;
                    }
                    if (!bl2) break;
                    ad ad3 = ad2;
                    ad2.a_m2_PBIBZRZ((byte)0, -1, (byte)4, bl3);
                    break;
                }
                case 4: {
                    ad ad4 = this;
                    boolean bl4 = false;
                    boolean bl5 = false;
                    ad ad5 = ad4;
                    byte by3 = 4;
                    switch (n2) {
                        case 2: {
                            if (ad4.a_f0_Ldo_.a_m29_PBRLbm_((byte)3) != null) {
                                by3 = 12;
                            }
                        }
                        case 0: {
                            bl4 = true;
                            break;
                        }
                        case 6: {
                            if (ad4.a_f0_Ldo_.a_m29_PBRLbm_((byte)5) != null) {
                                by3 = 13;
                            }
                        }
                        case 4: {
                            bl5 = true;
                            bl4 = true;
                        }
                    }
                    if (!bl4) break;
                    n2 = ad4.a_m5_PBIZRI((byte)4, ad4.a_f0_Ldo_.a_m22_PBRI((byte)1), false);
                    ad4.a_m2_PBIBZRZ((byte)4, n2 += ad4.a_f0_Ldo_.c_m2_PZRI(bl5), by3, bl5);
                    ad4.a_m5_PBRV((byte)4);
                    break;
                }
                case 5: {
                    ad ad6 = this;
                    switch (n2) {
                        case 0: {
                            ad6.a_m5_PBRV((byte)5);
                            ad6.b = ad6.a_m1_PRLcd_();
                            if (ad6.b == null) break;
                            ad6.b.b_m0_PIRV(14);
                            ad6.b.a_m1_PLat_RV(new ak(14, 14));
                            break;
                        }
                        case 9: {
                            g.a_m16_PIRV(1);
                            break;
                        }
                        case 10: {
                            ad6.a_f0_Ldo_.m_m1_PIRV(-3);
                            if (ad6.b != null) {
                                int n3 = ad6.b_m0_PBIZRI((byte)5, ad6.a_f0_Ldo_.a_m9_PZRI(false), false);
                                ad ad7 = ad6;
                                ad6.b.a_m12_PLdo_BIZBBZZZRZ(ad6.a_f0_Ldo_, (byte)5, n3, false, ad6.a_f0_Ldo_.c_f0_B, (byte)4, false, false, false);
                            }
                            bq.a_m2_PBRV((byte)1);
                            break;
                        }
                        case 12: {
                            ad6.a_f0_Ldo_.m_m1_PIRV(1);
                        }
                    }
                    break;
                }
                case 6: {
                    int n4;
                    ad ad8 = this;
                    boolean bl6 = false;
                    switch (n2) {
                        case 1: {
                            ad8.b = ad8.a_m1_PRLcd_();
                            ad8.a_f0_Ldo_.b_m4_PBRV(d.P[ad8.a_f0_Ldo_.c_f0_B]);
                        }
                        case 3: {
                            bl6 = true;
                        }
                        case 5: {
                            n4 = ad8.b_m0_PBIZRI((byte)6, ad8.a_f0_Ldo_.a_m9_PZRI(bl6), bl6);
                            ad8.a_m5_PBRV((byte)6);
                            break;
                        }
                        default: {
                            break block0;
                        }
                    }
                    if (ad8.b == null) {
                        ad8.b = ad8.a_m1_PRLcd_();
                    }
                    if (ad8.b == null) break;
                    ad ad9 = ad8;
                    ad8.a_f0_Ldo_.a_m10_PLcd_BIBBZZZRZ(ad8.b, (byte)6, n4, ad8.a_f0_Ldo_.c_f0_B, (byte)4, false, false, false);
                    break;
                }
                case 7: {
                    ad ad10 = this;
                    boolean bl7 = false;
                    switch (n2) {
                        case 0: {
                            ad10.a_m1_PRLcd_();
                        }
                        case 4: 
                        case 8: 
                        case 12: {
                            ad10.a_m5_PBRV((byte)7);
                            break;
                        }
                        case 2: 
                        case 6: 
                        case 10: {
                            bl7 = true;
                            break;
                        }
                        default: {
                            break block0;
                        }
                    }
                    int n5 = ad10.a_m5_PBIZRI((byte)7, ad10.a_f0_Ldo_.a_m9_PZRI(bl7), false);
                    if (n5 <= 0) break;
                    ad ad11 = ad10;
                    ad10.a_f0_Ldo_.a_m12_PBIBZZRZ((byte)7, n5, (byte)4, bl7, false);
                    break;
                }
                case 8: {
                    ad ad12 = this;
                    switch (n2) {
                        case 0: {
                            ad12.a_m5_PBRV((byte)8);
                            break;
                        }
                        case 2: {
                            g.a_m16_PIRV(1);
                            break;
                        }
                        case 5: {
                            ad12.a = ad12.a_m1_PRLcd_();
                            if (ad12.a == null) break;
                            ad12.a.b_m0_PBIRV((byte)16, 1);
                        }
                    }
                    break;
                }
                case 9: {
                    ad ad13 = this;
                    switch (n2) {
                        case 0: {
                            ad13.a_m5_PBRV((byte)9);
                            ad13.b = ad13.a_m1_PRLcd_();
                            if (ad13.b != null) {
                                ad13.b.b_m0_PIRV(14);
                                ad13.b.a_m1_PLat_RV(new ak(14, 14));
                                break block0;
                            }
                            break block53;
                        }
                        case 11: {
                            ad13.a_f0_Ldo_.m_m1_PIRV(-3);
                            break block0;
                        }
                        case 12: {
                            if (ad13.b != null) {
                                int n6;
                                if (ad13.b instanceof af) {
                                    n6 = -90;
                                } else {
                                    int n7 = ad13.c_m0_PBRI((byte)9);
                                    n6 = rpg.g.a_m7_PIIRI(0, 99) < n7 ? ad13.b.k_f2_I + ad13.b.b_m7_PRI() : ad13.a_f0_Ldo_.c_m2_PZRI(false) << 1;
                                }
                                ad13.b.a_m12_PLdo_BIZBBZZZRZ(ad13.a_f0_Ldo_, (byte)9, n6, false, ad13.a_f0_Ldo_.c_f0_B, (byte)15, false, false, false);
                            }
                            bq.a_m2_PBRV((byte)1);
                            break block0;
                        }
                        case 13: {
                            ad13.a_f0_Ldo_.m_m1_PIRV(1);
                        }
                    }
                }
            }
        }
        return true;
    }

    private int b_m0_PBIZRI(byte by2, int n2, boolean bl2) {
        int n3 = this.a_m5_PBIZRI(by2, n2, false);
        by2 = (byte)n3;
        int n4 = n3 + this.a_f0_Ldo_.c_m2_PZRI(bl2);
        by2 = (byte)n4;
        return n4;
    }

    private cd a_m1_PRLcd_() {
        if (this.a != null && this.a.k_m1_PRZ()) {
            if (this.a.b_m1_PRZ()) {
                this.a = null;
            } else {
                int n2;
                int n3 = this.a_f0_Ldo_.h - this.a.h;
                int n4 = Math.abs(n3);
                if (n4 <= 96 && (n2 = Math.abs(n4 = this.a_f0_Ldo_.i - ((du)this.a).i)) <= 96) {
                    if (n4 > n3 || n3 == 0) {
                        this.a_f0_Ldo_.c_f0_B = (byte)(n4 > 0 ? 1 : 2);
                    } else if (n4 > n3 || n4 == 0) {
                        this.a_f0_Ldo_.c_f0_B = (byte)(n3 > 0 ? 3 : 4);
                    }
                    return this.a;
                }
            }
        }
        this.b = this.a_f0_Ldo_.b_m9_PRLcd_();
        return this.b;
    }

    private boolean a_m2_PBIBZRZ(byte by2, int n2, byte by3, boolean bl2) {
        if (bl2 && !this.b_m3_PRZ()) {
            return false;
        }
        this.b = this.a_m1_PRLcd_();
        if (this.b != null) {
            return this.a_f0_Ldo_.a_m10_PLcd_BIBBZZZRZ(this.b, by2, n2, this.a_f0_Ldo_.c_f0_B, by3, false, bl2, false);
        }
        return false;
    }

    protected final byte a_m3_PRB() {
        return 4;
    }

    public final boolean a_m4_PBRZ(byte by2) {
        return this.a_m8_PRZ();
    }

    protected final void a_m5_PBRV(byte by2) {
        byte by3 = 9;
        switch (by2) {
            case 5: 
            case 8: 
            case 9: {
                by3 = 0;
            }
        }
        bq.a_m2_PBRV(by3);
    }

    public final boolean b_m1_PBRZ(byte by2) {
        return false;
    }
}

