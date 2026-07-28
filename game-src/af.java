/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

public abstract class af
extends cd {
    protected static byte[] a_f0_AB = null;
    protected do a_f1_Ldo_ = null;
    protected boolean b_f0_Z = true;
    protected boolean c_f0_Z = false;
    protected boolean d_f0_Z = false;
    protected boolean e = false;
    protected byte a_f2_B;
    protected byte[] b_f1_AB = null;
    protected int b_f2_I = -1;
    protected byte[] c_f1_AB = null;
    protected byte[] d_f1_AB = null;

    protected af(short s2, short s3, short s4, byte by2, s s5) {
        super(s2, s3, s4, by2, s5, true);
        this.h_f0_B = 0;
        this.a_f1_Ldo_ = di.a_f9_Ldo_;
        this.a_m7_PSRV((short)-1);
        if (a_f0_AB == null) {
            a_f0_AB = rpg.e.a_m6_PLjava_lang_String_RAB("/t/bd");
        }
        g.f_f1_Z = true;
    }

    public static final void a_() {
        a_f0_AB = null;
    }

    public final void c_m0_PIRV(int n2) {
    }

    protected final void a_m0_PABRV(byte[] byArray) {
        g g2 = di.a_f4_Lg_;
        for (int i2 = 0; i2 < byArray.length; i2 += 2) {
            try {
                g2.a_f4_AALdu_[this.t + byArray[i2 + 1]][this.s + byArray[i2]] = this;
                continue;
            }
            catch (Exception exception) {}
        }
    }

    protected final void o() {
    }

    protected final void p() {
        this.n = this.a_f0_Ldt_.d_f1_B;
        short s2 = this.a_f0_Ldt_.d_f2_S;
        this.j_f2_I = s2;
        this.k_f2_I = s2;
        this.d = this.a_f0_Ldt_.b_f1_S;
        this.e_f0_S = this.a_f0_Ldt_.c_f2_S;
        this.f_f1_S = this.a_f0_Ldt_.e_f0_S;
        this.g_f0_S = this.a_f0_Ldt_.f_f0_S;
    }

    protected final void q() {
    }

    protected final void b_m0_PABRV(byte[] byArray) {
        g g2 = di.a_f4_Lg_;
        for (int i2 = 0; i2 < byArray.length; i2 += 2) {
            try {
                g2.a_f4_AALdu_[this.t + byArray[i2 + 1]][this.s + byArray[i2]] = null;
                continue;
            }
            catch (Exception exception) {}
        }
    }

    protected final void a_m1_PIIZRV(int n2, int n3, boolean bl2) {
        if (!this.b_f0_Z) {
            super.a_m4_PIIZRV(n2, n3, bl2);
        }
    }

    protected final void b_m1_PBRV(byte by2) {
        if (this.b_f0_Z) {
            return;
        }
        super.b_m4_PBRV(by2);
    }

    protected final boolean c_m1_PRZ() {
        return true;
    }

    public final void c_m2_PIIRV(int n2, int n3) {
    }

    protected final boolean a_m2_PBBRZ(byte by2, byte by3) {
        switch (this.c_f0_S) {
            case 101: 
            case 102: 
            case 103: 
            case 104: 
            case 105: 
            case 106: 
            case 107: 
            case 108: 
            case 124: 
            case 125: 
            case 126: 
            case 127: 
            case 128: 
            case 129: 
            case 130: 
            case 131: {
                di.a_f4_Lg_.b_m0_PLdu_RV(this);
                break;
            }
            default: {
                di.a_f4_Lg_.a_m3_PLdu_RV(this);
            }
        }
        return true;
    }

    protected void a_m3_PLal_IRV(al al2, int n2) {
        super.a_m16_PLal_IRV(al2, n2);
        if (this.d_f0_Z) {
            al2.a_m13_PLal_IBBRV(this, n2 / 5, (byte)0, (byte)2);
        }
    }

    protected final int a_m4_PIRI(int n2) {
        super.a_m2_PIRI(n2);
        return n2;
    }

    protected final void a_m5_PLaf_RV(af af2) {
        this.c_f0_Z = this.c_f0_Z || af2.c_f0_Z;
        this.d_f0_Z = this.d_f0_Z || af2.d_f0_Z;
        this.e = this.e || af2.e;
        af2.e = false;
        af2.d_f0_Z = false;
        af2.c_f0_Z = false;
    }

    public boolean a_m6_PLdo_BIZBBZZZRZ(do do_, byte by2, int n2, boolean bl2, byte by3, byte by4, boolean bl3, boolean bl4, boolean bl5) {
        if (this.b_f0_Z) {
            return super.a_m12_PLdo_BIZBBZZZRZ(do_, by2, n2, bl2, by3, by4, bl3, bl4, bl5);
        }
        return super.a_m12_PLdo_BIZBBZZZRZ(do_, by2, bl5 ? -90 : n2, bl2, by3, by4, bl3, bl4, bl5);
    }

    protected void a_m7_PIIRV(int n2, int n3) {
        if (this.a_f1_Ls_ != null) {
            this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.c_f0_B, this.c_f1_I, n2, n3);
        }
    }

    protected void e() {
        this.a_m2_PIRV(this.c_f1_AB == null ? 0 : this.c_f1_AB[this.a_f2_B]);
    }
}

