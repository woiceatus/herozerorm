/*
 * Decompiled with CFR 0.152.
 */
import rpg.g;

final class d
extends cl {
    private final byte[] a = new byte[]{1, 2, 2, 1, 0, 0, 0, 2, 0, 6};
    private final byte[] b = new byte[]{0, 0, 1, 0};

    d(do do_) {
        super(do_);
    }

    public final boolean a_m0_PBIRZ(byte by2, int n2) {
        byte by3 = n2 == this.a[by2] ? (byte)1 : 0;
        switch (by2) {
            case 3: {
                if (n2 == 3) {
                    by3 = 1;
                }
            }
            case 0: 
            case 1: 
            case 2: {
                if (by3 == 0) break;
                if (this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, false, false, false)) {
                    this.c_m1_PBRV(by2);
                    break;
                }
                return false;
            }
            case 4: {
                this.a_m2_PIRV(n2);
                n2 = by3;
                d d2 = this;
                if (n2 != 0) {
                    cd cd2 = d2.a_f0_Ldo_.a_m16_PRLcd_();
                    return d2.a_m1_PLcd_BBRZ(cd2, (byte)4, d2.a_m4_PRB());
                }
                return true;
            }
            case 5: {
                if (by3 == 0) break;
                this.a_m6_PBRV(by2);
                by2 = (byte)this.a_m5_PBIZRI((byte)5, this.a_f0_Ldo_.f_m2_PBRI((byte)0), false);
                this.a_f0_Ldo_.c_m5_PIRV(by2);
                break;
            }
            case 6: {
                this.a_m2_PIRV(n2);
                n2 = by3;
                d d3 = this;
                if (n2 != 0) {
                    cd cd3 = d3.a_f0_Ldo_.a_m16_PRLcd_();
                    if (d3.a_m1_PLcd_BBRZ(cd3, (byte)6, (byte)3)) {
                        cd3.c_m5_PIRV(30);
                    } else {
                        return false;
                    }
                }
                return true;
            }
            case 7: {
                if (by3 == 0) break;
                this.a_m6_PBRV(by2);
                this.a_f0_Ldo_.k_m1_PRV();
                break;
            }
            case 8: {
                this.a_m2_PIRV(n2);
                n2 = by3;
                d d4 = this;
                if (n2 != 0) {
                    cd cd4 = d4.a_f0_Ldo_.a_m16_PRLcd_();
                    if (d4.a_m1_PLcd_BBRZ(cd4, (byte)8, (byte)3)) {
                        by3 = d4.a_f0_Ldo_.c_f0_B;
                        cd4.b_m4_PBRV(by3);
                        d4.a_f0_Ldo_.b_m4_PBRV(by3);
                    } else {
                        return false;
                    }
                }
                return true;
            }
            case 9: {
                if (by3 == 0) break;
                this.a_m6_PBRV(by2);
                by2 = (byte)this.c_m0_PBRI(by2);
                this.a_f0_Ldo_.b_m14_PBBRV((byte)80, by2);
            }
        }
        return true;
    }

    private boolean a_m1_PLcd_BBRZ(cd cd2, byte by2, byte by3) {
        if (cd2 != null) {
            int n2;
            byte by4 = by2;
            d d2 = this;
            bm bm2 = d2.a_f0_Ldo_.a_m29_PBRLbm_((byte)5);
            int n3 = -2;
            if (bm2 != null) {
                int n4 = d2.a_f0_Ldo_.a_m9_PZRI(true);
                n3 = n4 + bm2.b + (bm2.c_f0_S - bm2.b) * g.a_m7_PIIRI(1, 100) / 100;
                int n5 = d2.a_m5_PBIZRI(by4, n4, false);
                n3 += n5;
            }
            if (cd2.a_m12_PLdo_BIZBBZZZRZ(this.a_f0_Ldo_, by2, n2 = n3, true, this.a_f0_Ldo_.c_f0_B, by3, true, true, false)) {
                this.a_m6_PBRV(by2);
                return true;
            }
        }
        return false;
    }

    private void a_m2_PIRV(int n2) {
        if (n2 == 0) {
            this.a_m3_PIZRV(3, true);
            return;
        }
        if (n2 == 2) {
            this.a_m3_PIZRV(1, false);
        }
    }

    private void a_m3_PIZRV(int n2, boolean bl2) {
        if (this.a_f0_Ldo_.c_f0_B <= 2) {
            di.a_f4_Lg_.c_m4_PIIRV(n2, bl2 ? 0 : 1);
            return;
        }
        di.a_f4_Lg_.b_m4_PIIRV(n2, bl2 ? 0 : 1);
    }

    protected final byte a_m4_PRB() {
        int n2 = 2;
        bm bm2 = this.a_f0_Ldo_.a_m29_PBRLbm_((byte)3);
        if (bm2 != null && bm2.a_f1_B == 3) {
            n2 = 4;
        }
        return (byte)n2;
    }

    public final boolean a_m5_PBRZ(byte by2) {
        switch (by2) {
            case 4: 
            case 6: 
            case 8: {
                return this.b_m3_PRZ();
            }
            case 5: 
            case 9: {
                return true;
            }
        }
        return this.a_m8_PRZ();
    }

    protected final void a_m6_PBRV(byte by2) {
        int n2 = 7;
        switch (by2) {
            case 4: 
            case 6: 
            case 8: {
                break;
            }
            case 5: 
            case 7: 
            case 9: {
                n2 = 0;
                break;
            }
            default: {
                bm bm2 = this.a_f0_Ldo_.a_m29_PBRLbm_((byte)3);
                if (bm2 == null || bm2.a_f1_B != 2) break;
                n2 = 4;
            }
        }
        bq.a_m2_PBRV((byte)n2);
    }

    public final boolean b(byte by2) {
        switch (by2) {
            case 5: 
            case 7: 
            case 9: {
                return false;
            }
        }
        return true;
    }
}

