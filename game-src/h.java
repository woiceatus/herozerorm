/*
 * Decompiled with CFR 0.152.
 */
import java.util.Vector;
import rpg.d;
import rpg.e;

public final class h
extends cd {
    private do a = null;
    private short b = (short)-1;

    public static final void a_m0_PLdo_SRV(do al2, short s2) {
        if (di.a_f10_Lh_ != null) {
            al2 = di.a_f10_Lh_;
            di.a_f10_Lh_.a_f2_Lal_ = null;
            ((cd)al2).h_m1_PIRV(((cd)al2).j_f2_I);
            ((h)al2).a_m2_PBRV((byte)8);
            ((h)al2).b = s2;
            return;
        }
        new h((do)al2, s2);
    }

    private h(do do_, short s2) {
        super(do_.h, do_.i);
        this.a = do_;
        this.n = this.a.a_m28_PRB();
        this.k_f2_I = this.j_f2_I = this.a.f_m2_PBRI((byte)0);
        this.e_f0_S = this.d = (short)this.a.a_f7_I;
        this.g_f0_S = (short)this.a.e_m3_PBRI((byte)1);
        this.c_f0_S = (short)-1;
        this.i = 1;
        this.b = s2;
        this.a_f0_Z = true;
        this.a_f2_Lal_ = null;
        this.a_f1_Ls_ = rpg.e.a_f2_Lca_;
        this.j_f0_B = (byte)3;
        this.k_f0_B = (byte)2;
        if (this.a_m1_PBBRZ((byte)1, (byte)4)) {
            di.a_f4_Lg_.a_m3_PLdu_RV(this);
            di.a_f10_Lh_ = this;
        }
    }

    protected final boolean a_m1_PBBRZ(byte by2, byte by3) {
        this.a_f1_S = 0;
        if (this.a_m18_PSSBBRZ(this.a.s, this.a.t, (byte)1, (byte)4)) {
            this.a_m2_PBRV((byte)8);
            return true;
        }
        this.a_m2_PBRV((byte)7);
        return false;
    }

    public final void b_m0_PIIRV(int n2, int n3) {
        n2 = n2 + this.h + this.q;
        n3 = n3 + ((du)this).i + this.r + 1;
        if (this.l > 0) {
            this.l = (byte)(this.l - 1);
            if (this.l % 2 == 0) {
                n2 += rpg.d.J[this.m] << 1;
                n3 += rpg.d.K[this.m] << 1;
            }
        }
        if (n2 < -16 || n3 < 0 || n2 > bs.j + 16 || n3 > bs.k + 32) {
            this.a_f0_Z = false;
            return;
        }
        this.a_f0_Z = true;
        this.a_m4_PIIZRV(n2, n3, false);
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.h_f0_B == 4 ? (byte)1 : this.c_f0_B, this.c_f1_I, n2, n3);
        this.b_m3_PIIZRV(n2, n3, true);
        this.d_m2_PIIRV(n2, n3);
    }

    protected final void a_m2_PBRV(byte by2) {
        if (by2 != 4) {
            super.a_m1_PBRV(by2);
        }
    }

    protected final void a_m3_PRV() {
        switch (this.b_f1_B) {
            case 2: {
                this.h_f0_B = (byte)2;
                break;
            }
            case 3: {
                this.h_f0_B = (byte)6;
                break;
            }
            case 6: {
                this.h_f0_B = (byte)4;
                break;
            }
            case 8: {
                this.h_f0_B = (byte)16;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    public final void c() {
        this.b = (short)(this.b - 1);
        if (this.b < 0 && this.b_f1_B != 6 && this.b_f1_B != 7) {
            this.a_m2_PBRV((byte)6);
            return;
        }
        if (!this.a_f0_Z || this.a_m3_PLdu_RB(this.a) > 6 && this.b_m2_PLdu_RB(this.a) > 6) {
            this.a_f2_Lal_ = null;
            this.v();
            if (!this.a_m1_PBBRZ((byte)1, (byte)8)) {
                this.b = 0;
                return;
            }
        } else {
            super.c_m2_PRV();
        }
    }

    protected final void d() {
        if (this.j()) {
            this.a_m2_PIRV(0);
        }
    }

    protected final void b_m1_PRV() {
        if (this.a_f2_Lal_ == this.a_m5_PBLdu_RLdu_(this.c_f0_B, this.a_f2_Lal_)) {
            this.b_m5_PLal_IBRZ(this.a_f2_Lal_, this.a_m10_PRS(), this.c_f0_B);
        }
    }

    protected final void e() {
        this.a_m2_PIRV(this.j_f0_B);
    }

    protected final void f() {
        al al2 = null;
        Vector vector = this.a_m14_PBRLjava_util_Vector_((byte)4);
        while (vector.size() > 0) {
            int n2 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % vector.size();
            du du2 = (du)vector.elementAt(n2);
            if (du2 instanceof cd && !(du2 instanceof h)) {
                al2 = (al)du2;
                break;
            }
            vector.removeElementAt(n2);
        }
        if (al2 != null && this.b_m3_PLdu_RZ(al2)) {
            this.a_f2_Lal_ = al2;
        }
    }

    public final byte a_m4_PRB() {
        return this.a.a_m28_PRB();
    }

    public final int a_m5_PRI() {
        return this.a.a_m25_PRI();
    }

    public final int a_m6_PBRI(byte by2) {
        return this.a.a_m22_PBRI(by2);
    }

    public final boolean a_m7_PLal_RZ(al al2) {
        return this.a.a_m32_PLal_RZ(al2);
    }

    protected final boolean a_m8_PIRZ(int n2) {
        return n2 == 1 || n2 == 4;
    }

    public final void g() {
        this.a = null;
        this.b = (short)-1;
        this.a_m2_PBRV((byte)7);
        di.a_f10_Lh_ = null;
        di.a_f4_Lg_.d_m2_PLdu_RV(this);
    }

    protected final void h() {
        if (this.a_f2_Lal_ == null || this.a_m4_PLdu_RI(this.a_f2_Lal_) > 1) {
            byte by2 = this.c_f0_B;
            for (int i2 = 0; i2 < 4; ++i2) {
                du du2 = this.a_m5_PBLdu_RLdu_(by2, null);
                if (du2 != null && du2 instanceof cd) {
                    this.a_f2_Lal_ = (al)du2;
                    this.c_m0_PBRV(by2);
                    this.a_m2_PBRV((byte)3);
                    return;
                }
                by2 = rpg.d.O[by2];
            }
        }
        super.h_m0_PRV();
    }

    protected final boolean a_m9_PLdu_RZ(du du2) {
        if (du2 == null) {
            this.a_f2_Lal_ = null;
            return false;
        }
        if (du2 instanceof al && ((al)du2).b_f1_B == 7) {
            this.a_f2_Lal_ = null;
            return false;
        }
        if (du2 instanceof cd) {
            for (byte by2 = 1; by2 <= 4; by2 = (byte)(by2 + 1)) {
                if (this.a_m5_PBLdu_RLdu_(by2, du2) != du2) continue;
                this.c_m0_PBRV(by2);
                return true;
            }
        }
        return super.a_m8_PLdu_RZ(du2);
    }

    public final int b_m2_PRI() {
        return this.a.b_m11_PRI();
    }

    public final short a_m10_PRS() {
        int n2;
        int n3 = n2 = this.c_f1_I == 4 ? this.a.a_m9_PZRI(true) : this.a.a_m9_PZRI(false);
        if (!this.a.b_f5_Z && this.h_f1_Z) {
            return (short)((n2 << 2) / 5);
        }
        return (short)n2;
    }
}

