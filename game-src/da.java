/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;

public final class da
extends bo {
    private static final int e_f0_I = rpg.d.e_ - 90 - 6 - 2;
    private byte g = 0;
    private byte h = 0;
    private boolean e_f1_Z = false;
    private byte i = 0;
    private bj a_f0_Lbj_ = null;
    private as a_f1_Las_ = null;
    private bm a_f2_Lbm_ = null;
    private dv a_f3_Ldv_ = null;
    private byte j = 0;
    private int[] d = new int[3];
    private as[] a_f4_ALas_ = new as[3];
    private as[] b_f0_ALas_ = new as[6];
    private byte[] b_f1_AB = null;
    private ch b_f2_Lch_;
    private boolean f_f0_Z = false;
    private int f_f1_I = 5;

    public da(n n2, boolean bl2) {
        super(n2);
        int n3;
        this.f_f0_Z = true;
        try {
            this.b_f2_Lch_ = new ch("/t/ne");
        }
        catch (Exception exception) {}
        this.g = 1;
        this.d();
        this.h = (byte)2;
        this.i = 0;
        this.a_f2_Lbm_ = null;
        this.a_f3_Ldv_ = null;
        for (n3 = 0; n3 < 6; ++n3) {
            this.b_f0_ALas_[n3] = null;
        }
        for (n3 = 0; n3 < 3; ++n3) {
            this.a_f4_ALas_[n3] = null;
        }
        this.a_f0_Lbj_ = this.h == 1 ? di.a_m12_PRLbj_() : di.c_m7_PRLbj_();
        this.b_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(0 + this.h);
        this.e_f1_Z = false;
        this.d();
    }

    public da(n n2) {
        super(null);
        try {
            this.b_f2_Lch_ = new ch("/t/ne");
        }
        catch (Exception exception) {}
        this.g = 0;
        this.b_f1_Ln_ = new bt(this, this.b_f2_Lch_.a_m0_PIRAB(0), this.b_f2_Lch_.a_m1_PIIRAAB(1, 2));
        this.d();
    }

    public final void d() {
        super.d_m0_PRV();
        a.a_f1_Z = true;
    }

    protected final boolean a_m0_PLas_RZ(as as2) {
        if (this.h == 1) {
            if (as2 != null) {
                if (this.i == 0) {
                    return as2.b();
                }
                if (as2.a_f1_B == 17) {
                    return true;
                }
            }
        } else if (this.h == 2 && as2 != null && as2.a_f1_B == 18) {
            return true;
        }
        return false;
    }

    private byte a_m1_PZRB(boolean n2) {
        if (n2 != 0) {
            if (this.i <= 0) {
                return 7;
            }
            if (this.a_f2_Lbm_ == null) {
                if (this.i >= 7) {
                    return 0;
                }
                return 7;
            }
            if (this.i == 1) {
                return 0;
            }
            for (n2 = (int)((byte)(this.i - 2)); n2 >= 0; n2 = (int)((byte)(n2 - 1))) {
                if (this.a_f2_Lbm_.c_f1_AB[n2] != -1) continue;
                return (byte)(n2 + 1);
            }
            return 0;
        }
        if (this.i >= 7) {
            return 0;
        }
        if (this.a_f2_Lbm_ == null) {
            if (this.i == 0) {
                return 7;
            }
            return 0;
        }
        for (n2 = this.i; n2 < 6; n2 = (int)((byte)(n2 + 1))) {
            if (this.a_f2_Lbm_.c_f1_AB[n2] != -1) continue;
            return (byte)(n2 + 1);
        }
        return 7;
    }

    final void a_m2_PBBRV(byte by2, byte by3) {
        if (this.g == 0) {
            this.c_m0_PRV();
            this.g = 1;
            this.d();
            this.h = (byte)(by3 + 1);
            this.i = 0;
            this.a_f2_Lbm_ = null;
            this.a_f3_Ldv_ = null;
            for (by2 = 0; by2 < 6; by2 = (byte)(by2 + 1)) {
                this.b_f0_ALas_[by2] = null;
            }
            for (by2 = 0; by2 < 3; by2 = (byte)(by2 + 1)) {
                this.a_f4_ALas_[by2] = null;
            }
            this.a_f0_Lbj_ = this.h == 1 ? di.a_m12_PRLbj_() : di.c_m7_PRLbj_();
            this.b_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(0 + this.h);
            this.e_f1_Z = false;
            return;
        }
        if (by2 == -1 && by3 == -1 && this.b_f1_Ln_ instanceof bw) {
            this.c_m0_PRV();
            this.d();
            return;
        }
        this.c_m0_PRV();
        df.e_m0_PRV();
        this.d();
    }

    /*
     * Enabled aggressive block sorting
     */
    final boolean a_m3_PIIRZ(int n2, int n3) {
        block55: {
            block54: {
                if (this.j > 0) {
                    return true;
                }
                if (this.f > 0) {
                    return true;
                }
                if (n.g(n2, n3)) {
                    if (this.g == 0) {
                        df.e_m0_PRV();
                        this.d();
                        return true;
                    }
                    if (this.g == 1) {
                        if (this.e_f1_Z) {
                            this.e_f1_Z = false;
                            this.d();
                        } else {
                            if (this.b_f1_Ln_ != null && this.b_f1_Ln_ instanceof bw && this.b_m2_PIIRZ(n2, n3)) {
                                return true;
                            }
                            if (this.f_f0_Z) {
                                this.a_f1_Ln_.c_m0_PRV();
                            }
                            this.g = 0;
                            this.b_f1_Ln_ = new bt(this, this.b_f2_Lch_.a_m0_PIRAB(0), this.b_f2_Lch_.a_m1_PIIRAAB(1, 2));
                            this.d();
                            this.a_f1_Las_ = null;
                        }
                        bs.c_f0_Z = true;
                        return true;
                    }
                }
                if (this.b_m2_PIIRZ(n2, n3)) {
                    return true;
                }
                if (this.e_f1_Z) {
                    if (n.g(n2, n3)) {
                        this.e_f1_Z = false;
                        return true;
                    }
                    if (!n.f_m0_PIIRZ(n2, n3)) {
                        this.d_m2_PIIRZ(n2, n3);
                        this.e_m1_PIIRZ(n2, n3);
                        return true;
                    }
                    this.a_f1_Las_ = this.a_f0_Lbj_.a_m1_PIRLas_(this.a_f2_B);
                    if (!this.a_m0_PLas_RZ(this.a_f1_Las_)) {
                        this.a_f1_Las_ = null;
                        return true;
                    }
                    this.e_f1_Z = false;
                    if (this.h == 2) {
                        if (!(this.a_f1_Las_ instanceof dv)) {
                            this.f = (byte)15;
                            this.a_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(8);
                            return true;
                        }
                        this.a_f3_Ldv_ = (dv)this.a_f1_Las_;
                        this.a_f4_ALas_[0] = null;
                        this.a_f4_ALas_[1] = null;
                        this.a_f4_ALas_[2] = null;
                        if (this.a_f3_Ldv_.d[0] != -1) {
                            this.a_f4_ALas_[0] = as.a_m0_PBBRLas_(this.a_f3_Ldv_.d[0], this.a_f3_Ldv_.d[1]);
                            this.d[0] = di.a_m11_PBRLbj_(this.a_f3_Ldv_.d[0]).a_m10_PBBRI(this.a_f3_Ldv_.d[0], this.a_f3_Ldv_.d[1]);
                        }
                        if (this.a_f3_Ldv_.d[2] != -1) {
                            this.a_f4_ALas_[1] = as.a_m0_PBBRLas_(this.a_f3_Ldv_.d[2], this.a_f3_Ldv_.d[3]);
                            this.d[1] = di.a_m11_PBRLbj_(this.a_f3_Ldv_.d[2]).a_m10_PBBRI(this.a_f3_Ldv_.d[2], this.a_f3_Ldv_.d[3]);
                        }
                        if (this.a_f3_Ldv_.d[4] == -1) return true;
                        this.a_f4_ALas_[2] = as.a_m0_PBBRLas_(this.a_f3_Ldv_.d[4], this.a_f3_Ldv_.d[5]);
                        this.d[2] = di.a_m11_PBRLbj_(this.a_f3_Ldv_.d[4]).a_m10_PBBRI(this.a_f3_Ldv_.d[4], this.a_f3_Ldv_.d[5]);
                        return true;
                    }
                    if (this.h != 1) return true;
                    if (this.a_f1_Las_ instanceof bm) {
                        this.a_f2_Lbm_ = (bm)this.a_f1_Las_;
                        n2 = 0;
                        while (n2 < 6) {
                            this.b_f0_ALas_[n2] = null;
                            ++n2;
                        }
                        return true;
                    }
                    if (this.a_f1_Las_.a_f1_B != 17) {
                        this.f = (byte)15;
                        this.a_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(9);
                        return true;
                    }
                    n2 = 0;
                    n3 = di.a_m11_PBRLbj_((byte)17).a_m10_PBBRI((byte)17, this.a_f1_Las_.b_f0_B);
                    this.b_f0_ALas_[this.i - 1] = this.a_f1_Las_;
                    int n4 = 0;
                    while (true) {
                        if (n4 >= 6) {
                            if (n3 >= n2) return true;
                            this.b_f0_ALas_[this.i - 1] = null;
                            this.f = (byte)15;
                            this.a_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(11);
                            return true;
                        }
                        if (this.b_f0_ALas_[n4] != null && this.b_f0_ALas_[n4].a_f1_B == 17 && this.b_f0_ALas_[n4].b_f0_B == this.a_f1_Las_.b_f0_B) {
                            ++n2;
                        }
                        ++n4;
                    }
                }
                if (this.h != 1) break block54;
                if (n3 == 50 || n2 == 1) {
                    this.i = this.a_m1_PZRB(true);
                    break block55;
                } else if (n3 == 56 || n2 == 6) {
                    this.i = this.a_m1_PZRB(false);
                }
                break block55;
            }
            if (n3 == 50 || n2 == 1) {
                this.i = (byte)((this.i + 1) % 2);
            } else if (n3 == 56 || n2 == 6) {
                this.i = (byte)((this.i + 1) % 2);
            }
        }
        if (!n.f_m0_PIIRZ(n2, n3)) return true;
        if (this.i == 0) {
            this.e_f1_Z = true;
            this.a_f0_Lbj_ = this.h == 1 ? di.a_m12_PRLbj_() : di.c_m7_PRLbj_();
            return true;
        }
        if (this.h == 2) {
            if (this.a_f1_Las_ == null) {
                this.f = (byte)15;
                this.a_f1_AB = rpg.d.x;
                return true;
            }
            if (this.f_f0_Z) {
                da da2 = this;
                as as2 = as.a_m0_PBBRLas_(da2.a_f3_Ldv_.c[0], da2.a_f3_Ldv_.c[1]);
                if (!di.a_m11_PBRLbj_(as2.a_f1_B).a_m4_PBBIRZ(as2.a_f1_B, as2.b_f0_B, 1)) {
                    bw bw2 = (bw)da2.a_f1_Ln_;
                    bw2.a_m2_PABILas_RV(da2.a_f0_Lch_.a_m0_PIRAB(6), 0, as2);
                    return true;
                }
                bw bw3 = (bw)da2.a_f1_Ln_;
                bw3.a_m2_PABILas_RV(da2.a_f0_Lch_.a_m0_PIRAB(3), 1, as2);
                return true;
            }
            if (this.d[0] != 0 && this.d[1] != 0 && this.d[2] != 0) {
                this.j = (byte)15;
                this.a_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(5 + (this.h - 1));
                return true;
            }
            if (!eb.f_f2_Z) {
                this.f = (byte)15;
                this.a_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(7);
                return true;
            }
        } else {
            if (this.h != 1) return true;
            if (this.i > 0 && this.i < 7) {
                this.e_f1_Z = true;
                this.a_f0_Lbj_ = di.a_m11_PBRLbj_((byte)17);
                return true;
            }
            if (this.i != 7) return true;
            if (this.a_f2_Lbm_ == null) return false;
            if (this.a_f2_Lbm_.c_f1_AB == null) {
                return false;
            }
            n3 = 0;
            for (n2 = 0; n2 < 6; ++n2) {
                if (this.a_f2_Lbm_.c_f1_AB[n2] != -1) continue;
                ++n3;
            }
            if (n3 == 0) {
                this.f = (byte)15;
                this.a_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(10);
                return true;
            }
            byte[] byArray = new byte[16];
            byte[] byArray2 = new byte[16];
            boolean bl2 = false;
            boolean bl3 = false;
            for (n2 = 0; n2 < 16; ++n2) {
                byArray[n2] = 0;
                byArray2[n2] = 0;
            }
            for (n2 = 0; n2 < 6; ++n2) {
                if (this.a_f2_Lbm_.c_f1_AB[n2] >= 0) {
                    byte by2 = this.a_f2_Lbm_.c_f1_AB[n2];
                    byArray[by2] = (byte)(byArray[by2] + 1);
                    continue;
                }
                if (this.b_f0_ALas_[n2] == null) continue;
                byte by3 = this.b_f0_ALas_[n2].b_f0_B;
                byArray2[by3] = (byte)(byArray2[by3] + 1);
                bl3 = true;
            }
            for (n2 = 0; n2 < 6; ++n2) {
                if (byArray2[n2] <= 1) continue;
                bl2 = true;
            }
            for (n2 = 0; n2 < 16; ++n2) {
                if (byArray2[n2] <= 0 || byArray[n2] <= 0) continue;
                bl2 = true;
            }
            if (!bl3) {
                return false;
            }
            if (bl2) {
                this.f = (byte)15;
                this.a_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(14);
                return true;
            }
            boolean bl4 = true;
            for (n2 = 0; n2 < 6; ++n2) {
                if (this.b_f0_ALas_[n2] == null || di.a_m11_PBRLbj_(this.b_f0_ALas_[n2].a_f1_B).a_m10_PBBRI(this.b_f0_ALas_[n2].a_f1_B, this.b_f0_ALas_[n2].b_f0_B) > 0) continue;
                bl4 = false;
            }
            if (bl4) {
                n2 = 0;
                while (true) {
                    if (n2 >= 6) {
                        di.a_f9_Ldo_.i_m1_PRV();
                        this.f = (byte)15;
                        this.a_f1_AB = this.a_f0_Lch_.a_m0_PIRAB(3);
                        return true;
                    }
                    if (this.b_f0_ALas_[n2] != null) {
                        this.a_f2_Lbm_.c_f1_AB[n2] = this.b_f0_ALas_[n2].b_f0_B;
                        di.a_m11_PBRLbj_(this.b_f0_ALas_[n2].a_f1_B).b_m0_PBBIRZ(this.b_f0_ALas_[n2].a_f1_B, this.b_f0_ALas_[n2].b_f0_B, 1);
                    }
                    this.b_f0_ALas_[n2] = null;
                    ++n2;
                }
            }
        }
        this.f = (byte)15;
        this.a_f1_AB = this.b_f2_Lch_.a_m0_PIRAB(7);
        return true;
    }

    protected final void a_m4_PLcm_RV(cm cm2) {
        di.a_f4_Lg_.c_m2_PRV();
        n.a_m0_PLcm_IRV(cm2, 3);
        if (this.g == 0) {
            return;
        }
        if (this.h != 0) {
            int n2;
            byte by2;
            this.a_m8_PLcm_ZZABZRV(cm2, false, true, this.b_f1_AB, false);
            if (this.e_f1_Z) {
                this.a_m11_PLcm_BZIZRV(cm2, (byte)0, false, 1, true);
                int n3 = this.b_ + 80;
                n.a_m12_PLcm_IIIRV(cm2, this.a_, n3, 15);
                this.a_m1_PLcm_Lbj_RV(cm2, this.a_f0_Lbj_);
                int n4 = this.b_ + 174 - 11;
                this.b_m0_PLcm_RV(cm2);
                as as2 = this.a_f0_Lbj_.a_m1_PIRLas_(this.a_f2_B);
                this.a_m6_PLcm_IILas_RV(cm2, this.a_, n3 + 2, as2);
                cm2.b_m0_PIIIIRV(this.a_, this.b_, rpg.d.e_, 174);
                cm2.a_m2_PIRV(3550755);
                this.b_m5_PLcm_IIIRV(cm2, this.a_ + 111, n4 + 2, di.e_f1_I);
            } else {
                int n5;
                Object object;
                Object object2 = object = this.h == 1 ? this.a_f2_Lbm_ : this.a_f3_Ldv_;
                if (this.e_f1_Z) {
                    object = this.a_f1_Las_;
                }
                n.c_m5_PLcm_IIIIIRV(cm2, this.a_ + (rpg.d.e_ - 14 >> 1), this.b_ + 15, 14, 14, 0);
                if (object != null) {
                    ((as)object).a_m9_PLcm_IIRV(cm2, this.a_ + (rpg.d.e_ - 14 >> 1), this.b_ + 15);
                }
                if (this.i == 0) {
                    bo.b_m1_PLcm_IIRV(cm2, this.a_ + (rpg.d.e_ - 14 >> 1), this.b_ + 15);
                }
                n.a_m12_PLcm_IIIRV(cm2, this.a_, this.b_ + 31, 15);
                this.a_m7_PLcm_IILas_ZRV(cm2, this.a_, this.b_ + 31 + 2, (as)object, this.h != 1);
                if (this.h == 1) {
                    for (int i2 = 0; i2 < 6; ++i2) {
                        byte by3 = -3;
                        if (this.a_f2_Lbm_ != null) {
                            by3 = this.a_f2_Lbm_.c_f1_AB[i2];
                        }
                        if (this.b_f0_ALas_[i2] != null) {
                            by3 = ((ba)this.b_f0_ALas_[i2]).d;
                        }
                        boolean bl2 = this.i == (byte)(i2 + 1);
                        by2 = by3;
                        n2 = this.b_ + 31 + 2 + 75 + (i2 / 2 << 4);
                        n5 = this.a_ + i2 % 2 * (rpg.d.e_ >> 1);
                        cm cm3 = cm2;
                        object = this;
                        if (by2 <= -2) continue;
                        n.c_m5_PLcm_IIIIIRV(cm3, n5 + 1, n2, (rpg.d.e_ >> 1) - 2, 15, bl2 ? 26214 : 7027456);
                        cm3.a_m2_PIRV(bl2 ? 0xFF0000 : 3550755);
                        cm3.e(n5 + 2, n2, n5 + (rpg.d.e_ >> 1) - 3, n2);
                        cm3.e(n5 + 2, n2 + 14, n5 + (rpg.d.e_ >> 1) - 3, n2 + 14);
                        cm3.e(n5 + 1, n2 + 1, n5 + 1, n2 + 14);
                        cm3.e(n5 + (rpg.d.e_ >> 1) - 2, n2 + 1, n5 + (rpg.d.e_ >> 1) - 2, n2 + 14);
                        object = p.a_m1_PBRAB(by2);
                        n.c_m5_PLcm_IIIIIRV(cm3, n5 + 4, n2 + 4, 5, 5, 3550755);
                        cm3.a_m2_PIRV(0);
                        cm3.a_m4_PIIIIRV(n5 + 4 + 1, n2 + 4 + 1, 3, 3);
                        cm3.a_m2_PIRV(15723216);
                        ac.a_m2_PLcm_IIABIIRV(cm3, n5 + (rpg.d.e_ >> 2) + 5, n2 + 1, (byte[])object, 0, 1);
                    }
                    this.a_m16_PLcm_IIIABZRV(cm2, this.a_ + 3, this.b_ + 174 - 16, rpg.d.e_ - 6, this.b_f2_Lch_.a_m0_PIRAB(3), this.i == 7);
                } else {
                    int n6;
                    for (n6 = 0; n6 < 3; ++n6) {
                        by2 = this.d[n6];
                        as as3 = this.a_f4_ALas_[n6];
                        n5 = n6;
                        cm cm4 = cm2;
                        object = this;
                        int n7 = ((n)object).b_ + 31 + 5 + 27 + n5 * 15;
                        n.c_m5_PLcm_IIIIIRV(cm4, ((n)object).a_ + 3, n7, 90 + ((da)object).f_f1_I, 14, 3550755);
                        cm4.a_m2_PIRV(by2 == 0 ? 0xFF0000 : 15723216);
                        if (as3 != null) {
                            ac.a_m0_PLcm_IIABIRV(cm4, ((n)object).a_ + 3 + 2, n7 + 1, as3.a_f3_AB, 0);
                        }
                        n.c_m5_PLcm_IIIIIRV(cm4, ((n)object).a_ + 3 + 90 + 2 + ((da)object).f_f1_I, n7, e_f0_I - ((da)object).f_f1_I, 14, 3550755);
                        cm4.a_m2_PIRV(15723216);
                        n.b_m6_PLcm_IIIIIRV(cm4, by2, ((n)object).a_ + 3 + 90 + 2 + ((da)object).f_f1_I + e_f0_I - 3 - ((da)object).f_f1_I, n7 + 3, 8, 0);
                    }
                    this.a_m16_PLcm_IIIABZRV(cm2, this.a_ + 3, this.b_ + 174 - 16, rpg.d.e_ - 6, this.b_f2_Lch_.a_m0_PIRAB(4), this.i == 1);
                    if (this.f_f0_Z) {
                        n6 = a.c;
                        int n8 = this.b_ + 174 - 46;
                        cm2.a_m2_PIRV(3550755);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6 - 1, n8 - 1, rpg.d.w, 0, 1);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6 - 1, n8, rpg.d.w, 0, 1);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6 - 1, n8 + 1, rpg.d.w, 0, 1);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6 + 1, n8 - 1, rpg.d.w, 0, 1);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6 + 1, n8, rpg.d.w, 0, 1);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6 + 1, n8 + 1, rpg.d.w, 0, 1);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6, n8 - 1, rpg.d.w, 0, 1);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6, n8 + 1, rpg.d.w, 0, 1);
                        cm2.a_m2_PIRV(0xFF0000);
                        ac.a_m2_PLcm_IIABIIRV(cm2, n6, n8, rpg.d.w, 0, 1);
                    }
                }
            }
            if (this.j > 0 || this.f > 0) {
                bo.a_m3_PLcm_IIABIRV(cm2, this.a_, this.b_, this.a_f1_AB, 1);
                if (this.f > 0) {
                    this.f = (byte)(this.f - 1);
                    if (this.f == 0) {
                        this.j = 0;
                        this.f = 0;
                        this.a_f1_AB = null;
                    }
                }
                if (this.j > 0) {
                    this.j = (byte)(this.j - 1);
                    if (this.j == 0) {
                        byte[] byArray;
                        da da2 = this;
                        as as4 = as.a_m0_PBBRLas_(da2.a_f3_Ldv_.c[0], da2.a_f3_Ldv_.c[1]);
                        if (!di.a_m11_PBRLbj_(as4.a_f1_B).a_m4_PBBIRZ(as4.a_f1_B, as4.b_f0_B, 1)) {
                            byArray = da2.a_f0_Lch_.a_m0_PIRAB(6);
                        } else {
                            by2 = di.a_m11_PBRLbj_(da2.a_f3_Ldv_.d[0]).a_m11_PBBZRI(da2.a_f3_Ldv_.d[0], da2.a_f3_Ldv_.d[1], true);
                            n2 = by2 == 0 ? 0 : 1;
                            by2 = di.a_m11_PBRLbj_(da2.a_f3_Ldv_.d[2]).a_m11_PBBZRI(da2.a_f3_Ldv_.d[2], da2.a_f3_Ldv_.d[3], true);
                            n2 = by2 == 0 ? 0 : n2;
                            by2 = di.a_m11_PBRLbj_(da2.a_f3_Ldv_.d[4]).a_m11_PBBZRI(da2.a_f3_Ldv_.d[4], da2.a_f3_Ldv_.d[5], true);
                            n2 = by2 == 0 ? 0 : n2;
                            if (n2 == 0) {
                                byArray = da2.b_f2_Lch_.a_m0_PIRAB(7);
                            } else if (di.a_m11_PBRLbj_(as4.a_f1_B).a_m5_PLas_IRI(as4, 1) == 0) {
                                byArray = da2.a_f0_Lch_.a_m0_PIRAB(6);
                            } else {
                                di.a_m11_PBRLbj_(da2.a_f3_Ldv_.d[0]).b_m0_PBBIRZ(da2.a_f3_Ldv_.d[0], da2.a_f3_Ldv_.d[1], 1);
                                di.a_m11_PBRLbj_(da2.a_f3_Ldv_.d[2]).b_m0_PBBIRZ(da2.a_f3_Ldv_.d[2], da2.a_f3_Ldv_.d[3], 1);
                                di.a_m11_PBRLbj_(da2.a_f3_Ldv_.d[4]).b_m0_PBBIRZ(da2.a_f3_Ldv_.d[4], da2.a_f3_Ldv_.d[5], 1);
                                da2.d[0] = da2.d[0] - 1;
                                da2.d[1] = da2.d[1] - 1;
                                da2.d[2] = da2.d[2] - 1;
                                byArray = da2.a_f0_Lch_.a_m0_PIRAB(3);
                            }
                        }
                        this.a_f1_AB = byArray;
                        this.j = 0;
                        this.f = (byte)15;
                    }
                }
                this.d();
            }
        }
    }
}

