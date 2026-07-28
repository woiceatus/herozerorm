/*
 * Decompiled with CFR 0.152.
 */
import rpg.g;

final class ao
extends cl {
    private final byte[] a_f0_AB = new byte[]{2, 1, 1, 1, 1, 1, 1};
    private final byte[] b = new byte[]{2, 1, 1, 4};
    private boolean a_f1_Z = false;

    ao(do do_) {
        super(do_);
    }

    public final boolean a_m0_PBIRZ(byte by2, int n2) {
        int n3 = -1;
        byte by3 = n2 == this.a_f0_AB[by2] ? (byte)1 : 0;
        int n4 = 0;
        ao ao2 = this;
        byte by4 = 1;
        switch (by2) {
            case 0: 
            case 1: 
            case 2: {
                if (by3 != 0) {
                    this.a_f1_Z = this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, false, false, false);
                    if (this.a_f1_Z) {
                        this.c_m1_PBRV(by2);
                    } else {
                        return false;
                    }
                }
                return true;
            }
            case 3: {
                if (!this.a_f1_Z) {
                    this.a_f0_Ldo_.b_m4_PIRV(0);
                    return true;
                }
                this.a_m1_PIRV(n2);
                if (by3 != 0) {
                    n4 = this.c();
                    this.a_m4_PBRV(by2);
                    this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, n4 != 0, false, false);
                }
                return true;
            }
            case 4: {
                this.a_m1_PIRV(n2);
                if (by3 != 0) {
                    cd cd2 = this.a_f0_Ldo_.b_m9_PRLcd_();
                    if (cd2 != null) {
                        n3 = this.a_m7_PBZRI((byte)4, false);
                        this.a_f0_Ldo_.a_m10_PLcd_BIBBZZZRZ(cd2, by2, n3, this.a_f0_Ldo_.c_f0_B, (byte)22, this.c(), false, false);
                        for (by3 = 1; by3 <= 8; by3 = (byte)(by3 + 1)) {
                            boolean bl2 = this.c();
                            n4 = 22;
                            int n5 = n3;
                            byte by5 = by3;
                            byte by6 = by2;
                            cd cd3 = cd2;
                            ao ao3 = this;
                            boolean bl3 = (cd3 = cd3.a_m12_PBRLcd_(by5)) != null ? ao3.a_f0_Ldo_.a_m10_PLcd_BIBBZZZRZ(cd3, by6, n5, ao3.a_f0_Ldo_.c_f0_B, (byte)22, bl2, false, false) : false;
                        }
                    }
                    this.a_m4_PBRV(by2);
                }
                return true;
            }
            case 5: {
                if (by3 != 0) {
                    this.a_m4_PBRV(by2);
                    this.a_f0_Ldo_.e_m2_PBRZ((byte)3);
                } else if (n2 == 2 && this.a_f0_Ldo_.a_m16_PRLcd_() != null) {
                    this.a_f0_Ldo_.f_m0_PBRV((byte)6);
                }
                return true;
            }
            case 6: {
                this.a_m1_PIRV(n2);
                if (by3 == 0) break;
                this.a_m4_PBRV(by2);
                n3 = this.a_m7_PBZRI((byte)5, false);
                n4 = this.c();
            }
        }
        if (by3 != 0) {
            if (this.a_f0_Ldo_.a_m11_PBIBZZZRZ(by2, n3, by4, n4 != 0, false, false)) {
                this.a_m4_PBRV(by2);
            } else {
                return false;
            }
        }
        return true;
    }

    private void a_m1_PIRV(int n2) {
        if (n2 == 2) {
            this.a_f0_Ldo_.m_m1_PIRV(5);
            return;
        }
        if (n2 == 4) {
            this.a_f0_Ldo_.m_m1_PIRV(-3);
        }
    }

    protected final byte a_m2_PRB() {
        return 1;
    }

    public final boolean a_m3_PBRZ(byte by2) {
        return this.a_m8_PRZ();
    }

    private boolean c() {
        return g.a_m7_PIIRI(1, 100) < this.c_m0_PBRI((byte)11);
    }

    protected final void a_m4_PBRV(byte by2) {
        byte by3 = 8;
        switch (by2) {
            case 3: 
            case 4: 
            case 6: {
                by3 = 2;
            }
        }
        bq.a_m2_PBRV(by3);
    }

    public final boolean b(byte by2) {
        return by2 != 4;
    }
}

