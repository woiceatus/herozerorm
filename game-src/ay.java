/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.f;
import rpg.g;

public final class ay
extends q {
    private ch a;
    private byte f;

    public ay() {
        super(null, (byte)6, (byte)1, (byte)1);
        this.b_f3_Z = true;
        if (di.b_f4_B == this.a_f2_B) {
            this.a_m1_PIIRZ(5, 54);
            while (!this.a_m1_PBRZ(this.a_f2_B)) {
                this.a_m1_PIIRZ(5, 54);
            }
        }
        this.a = new ch("/t/j");
        this.f = 0;
        this.b_f1_Ln_ = new bt(this, this.a.a_m0_PIRAB(3), this.a.a_m1_PIIRAAB(10, 11));
        bs.a_m0_PRLbs_();
        bs.e_m1_PRV();
    }

    private void a_m0_PRV() {
        this.a = null;
        df.e_m0_PRV();
        bs.c_f0_Z = true;
    }

    final boolean a_m1_PIIRZ(int n2, int n3) {
        if (this.b_f1_Ln_ != null && this.b_f1_Ln_ instanceof bw && this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3) && this.f <= 1 || this.f >= 7) {
            this.a_m0_PRV();
            return true;
        }
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.a_m1_PBRZ(this.a_f2_B)) {
                n2 = di.a_f9_Ldo_.a_m28_PRB() * di.l * 100;
                byte[] byArray = g.a_m0_PABABRAB(d.H, ("" + n2).getBytes());
                this.b_f1_Ln_ = new bt((n)this, g.a_m0_PABABRAB(byArray, d.I), 3, true);
            } else {
                this.b_f1_Ln_ = new br((n)this, this.a.a_m0_PIRAB(4), '\u0000');
            }
        } else if (n.h(n2, n3)) {
            this.a_f2_B = (byte)((this.a_f2_B - 1 + this.b_f2_B) % this.b_f2_B);
            if (di.b_f4_B == this.a_f2_B) {
                this.a_m1_PIIRZ(n2, n3);
            }
        } else if (n.i(n2, n3)) {
            this.a_f2_B = (byte)((this.a_f2_B + 1) % this.b_f2_B);
            if (di.b_f4_B == this.a_f2_B) {
                this.a_m1_PIIRZ(n2, n3);
            }
        } else {
            return false;
        }
        return true;
    }

    /*
     * Enabled aggressive block sorting
     */
    final void a_m2_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == -1 && by3 == -1) {
            this.b_f1_Ln_ = new br((n)this, this.a.a_m0_PIRAB(9), '\u0000');
            this.f = (byte)8;
            bs.c_f0_Z = true;
            return;
        }
        if (by2 == -2 && by3 == -2) {
            by2 = (byte)3;
            by3 = 0;
        }
        if (by2 == 3) {
            if (this.f == 0) {
                if (by3 != 0) {
                    this.a_m0_PRV();
                    return;
                }
                if (di.e_f1_I >= 2000) {
                    di.e_f1_I -= 2000;
                    di.a_f9_Ldo_.o_m1_PRV();
                    di.a_f9_Ldo_.p_m0_PRV();
                    this.a_m0_PRV();
                    return;
                }
                if (eb.f_f2_Z) {
                    this.b_f1_Ln_ = new br((n)this, this.a.a_m0_PIRAB(9), '\u0000');
                    this.f = (byte)8;
                    return;
                }
                this.b_f1_Ln_ = new br((n)this, this.a.a_m0_PIRAB(9), '\u0000');
                this.f = (byte)8;
                return;
            }
            if (this.f != 1) {
                if (this.f != 6) return;
                this.a_m0_PRV();
                if (by3 != 0) return;
                di.a_m2_PBBRV((byte)6, (byte)1);
                return;
            }
            if (by3 != 0) return;
            by2 = (byte)(di.a_f9_Ldo_.a_m28_PRB() * di.l * 100);
            if (di.e_f1_I < by2) {
                if (eb.f_f2_Z) {
                    this.b_f1_Ln_ = new br((n)this, this.a.a_m0_PIRAB(9), '\u0000');
                    this.f = (byte)7;
                    return;
                }
                this.b_f1_Ln_ = new br((n)this, this.a.a_m0_PIRAB(9), '\u0000');
                this.f = (byte)7;
                return;
            }
            di.e_f1_I -= by2;
            if (di.l < 99) {
                di.l = (byte)(di.l + 1);
            }
            ay ay2 = this;
            this.b_f1_Ln_ = new br((n)ay2, ay2.a.a_m0_PIRAB(7));
            ay2.f = (byte)2;
            return;
        }
        if (this.f != 0) return;
        if (by3 == 0) {
            this.f = 1;
            return;
        }
        this.b_f1_Ln_ = new bt((n)this, this.a.a_m0_PIRAB(12), 3, true);
    }

    protected final void a_m3_PLcm_RV(cm object) {
        if (this.f == 8 || this.b_f1_Ln_ != null && this.b_f1_Ln_ instanceof bw) {
            bs.a_m0_PRLbs_().d_m1_PRV();
        }
        n.a_m0_PLcm_IRV((cm)object, 3);
        if (this.f == 0 || this.f == 8) {
            return;
        }
        int n2 = this.a_m0_PLcm_BRI((cm)object, this.a_f2_B);
        int n3 = n2 + 2;
        ((cm)object).a_m2_PIRV(0);
        ((cm)object).a_m4_PIIIIRV(this.a_, n2, d.e_, 65);
        ((cm)object).a_m2_PIRV(6379080);
        int n4 = rpg.f.b >> 1;
        n.c_m3_PLcm_IIIIRV((cm)object, this.a_ - 1, n3, n4, 47);
        n.c_m3_PLcm_IIIIRV((cm)object, this.a_ - 1 + n4 + 2, n3, n4, 47);
        n2 = n2 + 47 + 4;
        ((cm)object).a_m4_PIIIIRV(this.a_, n2, d.e_, 18);
        int n5 = rpg.a.c - (n4 >>= 1);
        l.a_m2_PLcm_BIIIIZZRV((cm)object, di.b_f4_B, n5, n3 + 26, n.a_f0_AI[di.b_f4_B], 0, true, true);
        n4 = rpg.a.c + n4;
        l.a_m2_PLcm_BIIIIZZRV((cm)object, this.a_f2_B, n4, n3 + 26, n.a_f0_AI[this.a_f2_B], 0, true, this.a_m1_PBRZ(this.a_f2_B));
        int n6 = this.a_f2_B;
        int n7 = 2;
        while (n7 > 0) {
            if ((n6 = (n6 - 1 + 6) % 6) == di.b_f4_B) continue;
            --n7;
        }
        for (n7 = 0; n7 < 5; ++n7) {
            l.a_m2_PLcm_BIIIIZZRV((cm)object, (byte)n6, this.a_ + 4 + 15 + n7 * 31, n2 + 3, n6 != this.a_f2_B ? 3550755 : n.a_f0_AI[n6], 0xFF0000, n6 == this.a_f2_B, this.a_m1_PBRZ((byte)n6));
            n6 = (n6 + 1) % this.b_f2_B;
            if (n6 != di.b_f4_B) continue;
            n6 = (n6 + 1) % this.b_f2_B;
        }
        ((cm)object).a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV((cm)object, rpg.a.c, rpg.f.d, this.a.a_m0_PIRAB(0), 0, 1);
        ac.a_m2_PLcm_IIABIIRV((cm)object, n5, n3 + 5, this.a.a_m0_PIRAB(1), 0, 1);
        ac.a_m2_PLcm_IIABIIRV((cm)object, n4, n3 + 5, this.a.a_m0_PIRAB(2), 0, 1);
        ((cm)object).a_m1_PLcg_IIIRV(e.m_f0_Lcg_, rpg.a.c, n3 + 18, 17);
        object = this;
        do do_ = di.a_f9_Ldo_;
        switch (((ay)object).f) {
            case 2: {
                break;
            }
            case 3: {
                n3 = di.a_m17_PRZ() ? 1 : 0;
                do_.e_m0_PBRV(((n)object).a_f2_B);
                if (di.a_m17_PRZ() == n3) break;
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_((byte)0));
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_((byte)4));
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_((byte)6));
                break;
            }
            case 4: {
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_((byte)3));
                do_.a_m31_PLbm_RV(do_.a_m29_PBRLbm_((byte)5));
                e.a_f2_Lca_ = e.a_m0_PRLrpg_e_().a_m2_PRLca_();
                break;
            }
            case 5: {
                ((n)object).c_m0_PRV();
                ((n)object).b_f1_Ln_ = new bt((n)object, ((ay)object).a.a_m0_PIRAB(8), 3, true);
                break;
            }
            default: {
                return;
            }
        }
        ((ay)object).f = (byte)(((ay)object).f + 1);
        ((n)object).d_m0_PRV();
    }
}

