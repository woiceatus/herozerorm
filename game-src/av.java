/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;
import rpg.e;

final class av
extends af {
    private byte[] Q = null;
    private byte[] R = null;
    public static av a_f0_Lav_ = null;
    public static bi[] a_f1_ALbi_ = null;
    private byte g;
    private byte o;
    private boolean i = false;
    private final byte[] S = new byte[]{-22, 24, 35, 24};
    private final byte[] T = new byte[]{-30, 9, 50, 9};
    private byte[] U = new byte[]{-2, 4, 1, 3};
    private byte[] V = new byte[]{6, 12, 8, 13};

    public av(short s2, short s3, short s4, byte by2) {
        super((short)135, (short)100, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_);
        this.Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 12);
        this.R = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 14);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 15);
        this.c_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 16);
        this.d_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 17);
        this.a_m0_PABRV(this.Q);
        this.b_f2_I = -1;
        a_f0_Lav_ = this;
        this.c_m0_PBRV((byte)1);
        this.a_m1_PBRV((byte)1);
    }

    protected final void a_m0_PRV() {
        this.h_f0_B = this.b_f1_B == 3 ? this.R[this.a_f2_B] : (byte)0;
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    protected final void a_m1_PIIRV(int n2, int n3) {
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, (byte)1, this.c_f1_I, n2, n3);
    }

    protected final void k() {
        if (this.a_f1_S <= 0 && !this.f_f2_Z) {
            av av2 = this;
            this.b_f2_I = (av2.b_f2_I + 1) % av2.b_f1_AB.length;
            av2.a_f2_B = av2.b_f1_AB[av2.b_f2_I];
            if (av2.a_f2_B == 4 && !av2.i) {
                av2.b_f2_I = (av2.b_f2_I + 1) % av2.b_f1_AB.length;
                av2.a_f2_B = av2.b_f1_AB[av2.b_f2_I];
            }
            switch (av2.a_f2_B) {
                case 3: {
                    av2.i = false;
                }
            }
            av2.a_m1_PBRV((byte)3);
            this.a_m1_PBRV((byte)3);
        }
    }

    private final boolean l() {
        return this.h_f0_B == 7;
    }

    public final boolean a_m2_PLdo_BIZBBZZZRZ(do do_, byte by2, int n2, boolean bl2, byte by3, byte by4, boolean bl3, boolean bl4, boolean bl5) {
        if (!this.l()) {
            return super.a_m6_PLdo_BIZBBZZZRZ(do_, by2, -90, bl2, by3, by4, bl3, bl4, bl5);
        }
        return super.a_m6_PLdo_BIZBBZZZRZ(do_, by2, n2, bl2, by3, by4, bl3, bl4, bl5);
    }

    public final boolean a_m3_PIBRZ(int n2, byte by2) {
        if (!this.l()) {
            return super.a_m13_PIBRZ(-90, by2);
        }
        return super.a_m13_PIBRZ(n2, by2);
    }

    protected final boolean a_m4_PLal_IBRZ(al al2, int n2, byte by2) {
        if (!this.l()) {
            return super.a_m14_PLal_IBRZ(al2, -90, by2);
        }
        return super.a_m14_PLal_IBRZ(al2, n2, by2);
    }

    protected final boolean a_m5_PIRZ(int n2) {
        switch (this.a_f2_B) {
            case 0: 
            case 1: {
                if (n2 == 6) {
                    di.a_f4_Lg_.c_m4_PIIRV(1, 1);
                    if (this.a_f2_B == 0) {
                        new t(0, (short)(this.h + this.S[0]), (short)(((du)this).i + this.S[1]), this.a_f1_Ls_, 11, false, a_f1_ALbi_[0], this.a_m21_PRS(), 2, 1);
                        break;
                    }
                    new t(0, (short)(this.h + this.S[2]), (short)(((du)this).i + this.S[3]), this.a_f1_Ls_, 11, false, a_f1_ALbi_[1], this.a_m21_PRS(), 2, 1);
                    break;
                }
                if (n2 != 7) break;
                di.a_f4_Lg_.c_m4_PIIRV(1, 2);
                break;
            }
            case 2: {
                if (n2 == 6) {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                    new t(0, (short)(this.h + this.S[0]), (short)(((du)this).i + this.S[1]), this.a_f1_Ls_, 11, false, a_f1_ALbi_[0], this.a_m21_PRS(), 2, 1);
                    new t(0, (short)(this.h + this.S[2]), (short)(((du)this).i + this.S[3]), this.a_f1_Ls_, 12, false, a_f1_ALbi_[1], this.a_m21_PRS(), 2, 1);
                    break;
                }
                if (n2 == 7) {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 1);
                    break;
                }
                if (n2 == 8) {
                    di.a_f4_Lg_.c_m4_PIIRV(1, 2);
                    break;
                }
                if (n2 != 9) break;
                di.a_f4_Lg_.c_m4_PIIRV(1, 1);
                break;
            }
            case 3: {
                if (this.i || n2 <= 2) break;
                do do_ = this.a_f1_Ldo_;
                if (do_.j || do_.k) break;
                new t(0, (short)(this.h + this.T[0]), (short)(((du)this).i + this.T[1]), this.a_f1_Ls_, 13, false, a_f1_ALbi_[0], this.a_m21_PRS(), 2, 1);
                new t(0, (short)(this.h + this.T[2]), (short)(((du)this).i + this.T[3]), this.a_f1_Ls_, 13, false, a_f1_ALbi_[1], this.a_m21_PRS(), 2, 1);
                this.i = true;
                this.g = do_.s;
                this.o = do_.t;
                for (int n3 = 1; n3 <= 4; n3 = (int)((byte)(n3 + 1))) {
                    this.a_m7_PBBZRV((byte)(this.g + rpg.d.J[n3]), (byte)(this.o + rpg.d.K[n3]), false);
                }
                break;
            }
            case 4: {
                if (n2 == 5) {
                    new t(0, (short)(this.g << 4), (short)(this.o << 4), this.a_f1_Ls_, 16, false, this, this.a_m21_PRS(), 2, 1);
                    break;
                }
                if (n2 != 7) break;
                new t(8, (short)(this.g << 4), (short)(this.o << 4), this.a_f1_Ls_, 17, false, this, this.a_m21_PRS(), 2, 1);
                break;
            }
            case 5: {
                if (n2 <= 3 || n2 % 2 != 0) break;
                new t(13, this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_, 15, true, this, this.a_m21_PRS(), 0, 6);
                break;
            }
            case 6: {
                if (n2 != 7) break;
                new t(9, (short)(this.h + 8), (short)(this.t + 4 << 4), this.a_f1_Ls_, 14, true, this, this.a_m21_PRS(), 0, 15);
            }
        }
        return n2 == this.d_f1_AB[this.a_f2_B];
    }

    protected final void b() {
        al[] alArray = cd.a_m24_PRALal_();
        switch (this.a_f2_B) {
            case 0: 
            case 1: {
                int n2 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % (this.V[1] - this.V[0] + 1) + this.V[0];
                int n3 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % (this.V[3] - this.V[2] + 1) + this.V[2];
                if (g.a_m5_PIIRZ(n2, n3)) break;
                this.a_m7_PBBZRV((byte)n2, (byte)n3, true);
                return;
            }
            case 2: {
                for (int i2 = 0; i2 < 2; ++i2) {
                    if (alArray[i2] == null) continue;
                    al al2 = alArray[i2];
                    av av2 = this;
                    if (!(al2.s >= av2.s + av2.U[0] && al2.s <= av2.s + av2.U[1] && al2.t >= av2.t + av2.U[2] && al2.t <= av2.t + av2.U[3])) continue;
                    this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), (byte)2);
                }
                return;
            }
            case 4: {
                for (int i3 = 0; i3 < 2; ++i3) {
                    if (alArray[i3] == null || this.g != alArray[i3].s || this.o != alArray[i3].t) continue;
                    this.b_m5_PLal_IBRZ(alArray[i3], this.a_m21_PRS(), (byte)2);
                }
                g g2 = di.a_f4_Lg_;
                for (int n4 = 1; n4 <= 4; n4 = (int)((byte)(n4 + 1))) {
                    du du2 = g2.a_m22_PIIRLdu_((byte)(this.g + rpg.d.J[n4]), (byte)(this.o + rpg.d.K[n4]));
                    if (du2 == null || !(du2 instanceof co)) continue;
                    ((co)du2).a_m1_PBRV((byte)6);
                }
                break;
            }
        }
    }

    protected final void m() {
        di.a_f4_Lg_.d_m2_PLdu_RV(this);
        this.b_m0_PABRV(this.Q);
        a_f1_ALbi_[0].m();
        a_f1_ALbi_[1].m();
        a_f1_ALbi_ = null;
    }

    public static final void a_m6_PLbi_RV(bi bi2) {
        if (a_f1_ALbi_ == null) {
            a_f1_ALbi_ = new bi[2];
        }
        av.a_f1_ALbi_[av.a_f1_ALbi_[0] == null ? 0 : 1] = bi2;
        if (a_f1_ALbi_[0] != null && a_f1_ALbi_[1] != null && av.a_f1_ALbi_[0].s > av.a_f1_ALbi_[1].s) {
            av.a_f1_ALbi_[1] = a_f1_ALbi_[0];
            av.a_f1_ALbi_[0] = bi2;
        }
    }

    private final void a_m7_PBBZRV(byte by2, byte by3, boolean bl2) {
        al[] alArray = cd.a_m24_PRALal_();
        for (int i2 = 0; i2 < 2; ++i2) {
            if (alArray[i2] == null || alArray[i2].s != by2 || alArray[i2].t != by3) continue;
            alArray[i2].b_m4_PBRV((byte)2);
        }
        new co((short)(by2 << 4), (short)(by3 << 4), bl2);
    }
}

