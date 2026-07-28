/*
 * Decompiled with CFR 0.152.
 */
import java.util.Vector;
import rpg.c;
import rpg.d;

public class cd
extends k
implements dy {
    public short c_f0_S;
    protected dt a_f0_Ldt_ = null;
    protected s a_f1_Ls_ = null;
    protected byte h_f0_B;
    protected int f_f0_I;
    private static Vector c_f1_Ljava_util_Vector_ = new Vector();
    private short b_f0_S = 0;
    protected al a_f2_Lal_ = null;
    protected byte i;
    private byte a_f3_B;
    protected byte j_f0_B;
    protected byte k_f0_B;
    protected byte l = 0;
    protected byte m = 0;
    private short j_f1_S = this.s;
    private short k_f1_S = this.t;
    protected byte n;
    protected int j_f2_I;
    protected int k_f2_I;
    protected short d;
    protected short e_f0_S;
    protected short f_f1_S;
    protected short g_f0_S;
    protected boolean f_f2_Z = false;
    private boolean b_f1_Z = false;
    protected boolean g_f1_Z = false;
    protected boolean h_f1_Z = false;
    private int b_f2_I = 0;
    private byte g_f2_B = 0;
    private int e_f1_I = 0;
    private byte[] a_f4_AB;

    public static final void a_m0_PSSBBRV(short s2, short s3, byte by2, byte by3) {
        short s4 = by2;
        by2 = (byte)s4;
        if (s4 < 0) {
            by2 = (byte)(by2 + 256);
        }
        switch (by2) {
            case 100: 
            case 123: {
                ck.a = by3;
                ck.b_f0_S = by2;
                return;
            }
            case 99: 
            case 122: {
                new v(s2, s3, (short)by2, by3);
                return;
            }
            case 101: 
            case 124: {
                new cs(149, 52, (short)by2, by3);
                return;
            }
            case 102: 
            case 125: {
                new cq(100, 85, (short)by2, by3);
                return;
            }
            case 103: 
            case 126: {
                new cq(148, 70, (short)by2, by3);
                return;
            }
            case 104: 
            case 127: {
                new cq(198, 81, (short)by2, by3);
                return;
            }
            case 105: 
            case 128: {
                new an(1, 1, (short)by2, by3);
                return;
            }
            case 106: 
            case 129: {
                new by(168, 56, (short)by2, by3);
                return;
            }
            case 107: 
            case 130: {
                new by(216, 72, (short)by2, by3);
                return;
            }
            case 108: 
            case 131: {
                new by(248, 120, (short)by2, by3);
                return;
            }
            case 119: {
                new av(135, 100, (short)by2, by3);
                return;
            }
            case 120: {
                new bi(s2, s3, (short)by2, by3);
                return;
            }
            case 121: {
                co.a = by3;
                co.b_f0_S = by2;
                return;
            }
            case 109: 
            case 111: 
            case 113: {
                new ap(s2, s3, (short)by2, by3);
                return;
            }
            case 110: 
            case 112: 
            case 114: {
                new cw(s2, s3, (short)by2, by3);
                return;
            }
            case 115: {
                new bc(s2, s3, (short)by2, by3);
                return;
            }
            case 116: {
                bc.b = by2;
                bc.g = by3;
                return;
            }
            case 117: 
            case 118: {
                new e(s2, s3, (short)by2, by3);
                return;
            }
        }
        if (dt.a_f0_ALdt_[by3].a_f3_B == 4) {
            new ag(s2, s3, (short)by2, by3);
            return;
        }
        if (dt.a_f0_ALdt_[by3].a_f3_B == 5) {
            new ci(s2, s3, (short)by2, by3);
            return;
        }
        new cd(s2, s3, by2, by3, dt.a_f0_ALdt_[by3].a_f1_Ls_, false);
    }

    protected cd(short s2, short s3) {
        super(s2, s3, (byte)8, (byte)7);
        this.c_m0_PBRV((byte)2);
    }

    protected cd(short s2, short s3, short s4, byte by2, s s5, boolean bl2) {
        this(s2, s3);
        this.c_f0_S = s4;
        this.a_f0_Ldt_ = dt.a_f0_ALdt_[by2];
        this.a_f1_Ls_ = s5;
        this.i = this.a_f0_Ldt_.j;
        this.a_f3_B = this.a_f0_Ldt_.g;
        this.j_f0_B = this.a_f0_Ldt_.c_f1_B;
        this.k_f0_B = this.a_f0_Ldt_.b_f0_B;
        this.u = (byte)(this.a_f0_Ldt_.e_f1_B + 1);
        this.d_m3_PBRV(this.a_f0_Ldt_.i);
        if (this.f <= 0) {
            this.b_m0_PIRV(-1);
        }
        if (bl2) {
            this.a_m6_PBBRZ((byte)0, this.a_f0_Ldt_ == null || this.a_f0_Ldt_.d_f3_Z ? (byte)8 : 0);
            this.i();
            return;
        }
        this.b_f0_S = 0;
        cd.a_m5_PLcd_RV(this);
    }

    protected void a_m1_PBRV(byte by2) {
        super.a_m0_PBRV(by2);
        if (this.b_f1_B == 7 && this.c_f0_S != -1) {
            di.c_m5_PIBRV(this.c_f0_S, this.a_f0_Ldt_ != null ? this.a_f0_Ldt_.f_f1_B : (byte)-1);
        } else if (this.b_f1_B == 6) {
            this.i();
        }
        this.a_m4_PRV();
    }

    protected void i() {
        cd cd2;
        int n2;
        super.i();
        if (this.a_f0_Ldt_ != null && this.a_f0_Ldt_.a_f5_Z) {
            n2 = 0;
            cd2 = this;
            ((du)this).l = n2;
        }
        this.p();
        cd2 = this;
        n2 = di.h_f1_B > 2 ? 2 : (int)di.h_f1_B;
        if (n2 != 0) {
            byte by2 = cd2.n;
            cd2.n = (byte)((n2 + 1) * by2 / 5 + (n2 == 1 ? 40 : 60));
            cd2.d = (short)(cd2.d * cd2.n / by2);
            cd2.e_f0_S = (short)(cd2.e_f0_S * cd2.n / by2);
            cd2.k_f2_I = cd2.j_f2_I = (cd2.j_f2_I - 70) * (cd2.n + (n2 == 1 ? 20 : 40)) / by2;
            cd2.f_f1_S = (short)((cd2.f_f1_S - 13) * cd2.n / by2 + (n2 == 1 ? 20 : 40));
            cd2.g_f0_S = (short)((cd2.g_f0_S - 10) * cd2.n / by2);
        }
        this.q();
        this.a_f2_Lal_ = null;
        this.a_f4_AB = null;
        this.e_f1_I = 0;
        this.b_f1_Z = false;
        this.g_f1_Z = false;
        this.f_f2_Z = false;
        this.g_f2_B = 0;
        this.b_f2_I = 0;
        this.h_f1_Z = false;
    }

    protected void p() {
        this.n = this.a_f0_Ldt_.d_f1_B;
        short s2 = this.a_f0_Ldt_.d_f2_S;
        this.j_f2_I = s2;
        this.k_f2_I = s2;
        this.d = this.a_f0_Ldt_.b_f1_S;
        this.e_f0_S = this.a_f0_Ldt_.c_f2_S;
        this.f_f1_S = this.a_f0_Ldt_.e_f0_S;
        this.g_f0_S = this.a_f0_Ldt_.f_f0_S;
    }

    protected void q() {
        int n2 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 3;
        this.n = (byte)(this.n + n2);
        this.j_f2_I += n2 * 20;
        this.k_f2_I = this.j_f2_I;
        this.f_f1_S = (short)(this.f_f1_S + n2 * 3);
    }

    protected int c_m0_PRI() {
        return this.k_f2_I;
    }

    protected int d_m0_PRI() {
        return this.j_f2_I;
    }

    public void b_m0_PIIRV(int n2, int n3) {
        n2 = n2 + this.h + this.q + (this.u - 1 << 3);
        n3 = n3 + ((du)this).i + this.r + 1;
        if (this.l > 0) {
            this.l = (byte)(this.l - 1);
            n2 += rpg.d.J[this.m] * dy.e[this.l];
            n3 += rpg.d.K[this.m] * dy.e[this.l];
        }
        if (n2 < -16 || n3 < 0 || n2 > bs.j + 16 || n3 > bs.k + 32) {
            this.b_m3_PIIZRV(n2, n3 - (this.a_f0_Ldt_ != null ? (int)this.a_f0_Ldt_.h : 0), true);
            this.d_m2_PIIRV(n2, n3);
            this.a_f0_Z = false;
            if (!this.c_m1_PRZ()) {
                return;
            }
        }
        this.a_f0_Z = true;
        if (!((du)this).l && !this.c_m1_PRZ()) {
            return;
        }
        this.a_m4_PIIZRV(n2, n3, this.f_f2_Z);
        n3 = this.a_m2_PIRI(n3);
        this.a_m3_PIIRV(n2, n3);
        this.b_m3_PIIZRV(n2, n3, true);
        this.d_m2_PIIRV(n2, n3);
    }

    protected int a_m2_PIRI(int n2) {
        if (this.f_f2_Z) {
            if (this.e_f1_I >= this.a_f4_AB.length) {
                cd cd2 = this;
                this.f_f2_Z = false;
                cd2.e_f1_I = 0;
                cd2.a_f4_AB = null;
                cd2.a_m17_PRZ();
            } else {
                n2 -= this.a_f4_AB[this.e_f1_I];
                ++this.e_f1_I;
            }
        }
        return n2;
    }

    protected boolean c_m1_PRZ() {
        return false;
    }

    protected void a_m3_PIIRV(int n2, int n3) {
        switch (this.b_f1_B) {
            case 6: {
                rpg.e.a_f4_Ls_.a_m2_PBBIIIRI((byte)0, (byte)1, this.c_f1_I, n2, n3);
                return;
            }
        }
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.c_f0_B, this.c_f1_I, n2, n3);
    }

    protected void a_m4_PRV() {
        int n2;
        cd cd2;
        if (this.a_f1_Ls_ == null) {
            cd2 = this;
            n2 = 0;
        } else {
            switch (this.b_f1_B) {
                case 0: 
                case 1: 
                case 5: {
                    this.h_f0_B = 0;
                    break;
                }
                case 2: {
                    this.h_f0_B = 1;
                    break;
                }
                case 3: {
                    this.h_f0_B = (byte)2;
                    break;
                }
                case 4: {
                    this.h_f0_B = (byte)3;
                    break;
                }
                case 6: {
                    this.h_f0_B = 0;
                    break;
                }
                default: {
                    this.f_f0_I = 0;
                }
            }
            cd2 = this;
            n2 = this.b_f1_B == 6 ? (int)rpg.e.a_f4_Ls_.a_m3_PBRB(this.h_f0_B) : (int)this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
        }
        cd2.f_f0_I = n2;
    }

    void c_m2_PRV() {
        super.c_m2_PRV();
        ++this.c_f1_I;
        this.t();
        this.l();
        if (this.c_f1_I < 0) {
            this.c_f1_I = 0;
        }
        this.d_m0_PIRV(this.f_f0_I);
        if (this.a_f1_S > 0) {
            this.a_f1_S = (short)(this.a_f1_S - 1);
        }
        if (this.a_f2_I > 0) {
            --this.a_f2_I;
        }
    }

    protected void h_m0_PRV() {
        if (this.a_f1_S > 0 && this.f_m0_PRZ()) {
            this.d_m1_PRZ();
            return;
        }
        this.a_m2_PIRV(this.k_f0_B + this.g_f2_B);
    }

    private static void a_m5_PLcd_RV(cd cd2) {
        cd2.s();
        c_f1_Ljava_util_Vector_.addElement(cd2);
    }

    public static final void B() {
        c_f1_Ljava_util_Vector_.removeAllElements();
    }

    public static final void C() {
        for (int i2 = c_f1_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            cd cd2 = (cd)c_f1_Ljava_util_Vector_.elementAt(i2);
            if (cd2.b_f0_S == 0) {
                if (cd2.a_m6_PBBRZ((byte)0, cd2.a_f0_Ldt_ == null || cd2.a_f0_Ldt_.d_f3_Z ? (byte)8 : 0)) {
                    cd2.i();
                    c_f1_Ljava_util_Vector_.removeElementAt(i2);
                    continue;
                }
                cd2.b_f0_S = (short)10;
                continue;
            }
            if (cd2.b_f0_S <= 0) continue;
            cd2.b_f0_S = (short)(cd2.b_f0_S - 1);
        }
    }

    protected boolean a_m6_PBBRZ(byte by2, byte by3) {
        if (this.a_m18_PSSBBRZ(this.j_f1_S, this.k_f1_S, by2, by3)) {
            di.a_f4_Lg_.a_m3_PLdu_RV(this);
            return true;
        }
        return false;
    }

    protected void o() {
        byte by2;
        if (this.c_f0_S == 0) {
            return;
        }
        byte[] byArray = this.a_f0_Ldt_.b_f3_AB;
        byte by3 = this.a_m19_PRB();
        int n2 = Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) % 65535;
        if (n2 < 52428) {
            di.a_f4_Lg_.a_m18_PBBIRV(this.b_m1_PRB(), this.t, by3 * 6 + 20 >> 1);
        }
        for (int i2 = 0; i2 < 4; ++i2) {
            by2 = -1;
            byte by4 = -1;
            int n3 = rpg.g.a_m2_PABIRI(byArray, i2 * 6 + 2);
            if (n2 >= n3) continue;
            switch (i2) {
                case 0: 
                case 1: {
                    by4 = (byte)rpg.g.a_m8_PLjava_util_Random_IIRI(al.a_f1_Ljava_util_Random_, byArray[i2 * 6], byArray[i2 * 6 + 1]);
                    by2 = (byte)Math.min(by3 / 4, 14);
                    break;
                }
                case 2: {
                    if (by3 <= 13) {
                        by2 = -1;
                        by4 = -1;
                        break;
                    }
                    by4 = (byte)rpg.g.a_m8_PLjava_util_Random_IIRI(al.a_f1_Ljava_util_Random_, byArray[i2 * 6], byArray[i2 * 6 + 1]);
                    by2 = (byte)Math.min(by3 / 5 + 13, 28);
                    break;
                }
                case 3: {
                    by4 = byArray[i2 * 6];
                    by2 = byArray[i2 * 6 + 1];
                }
            }
            if (by4 == -1 || by2 == -1) continue;
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, by4, by2);
            return;
        }
        if (n2 < 14500) {
            return;
        }
        if (n2 < 20000) {
            by2 = by3 < 20 ? (byte)2 : 6;
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, (byte)20, by2);
            return;
        }
        if (n2 < 25000 && this.c_f0_S < 81) {
            by2 = (byte)Math.min(6 * this.c_f0_S / 40, 11);
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, (byte)16, by2);
            return;
        }
        if (n2 < 35000) {
            int cfr_ignored_0 = n2 - (n2 / 2 << 1);
            by2 = false ? (byte)1 : 0;
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, (byte)20, by2);
            return;
        }
        if (n2 < 36500) {
            by2 = (byte)Math.min(3 * this.c_f0_S / 10, 27);
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, (byte)18, by2);
            return;
        }
        if (n2 < 38000) {
            byte by5 = (byte)Math.min(this.c_f0_S / 6, 15);
            by2 = by5;
            if (by5 > by3 / 5) {
                by2 = (byte)Math.min(by3 / 5, 15);
            }
            di.a_f4_Lg_.a_m17_PBBBBRV(this.b_m1_PRB(), this.t, (byte)17, by2);
            return;
        }
    }

    private final byte b_m1_PRB() {
        if (this.u == 1) {
            return this.s;
        }
        return (byte)(this.s + (al.a_f1_Ljava_util_Random_.nextInt() & 1));
    }

    protected void l() {
        boolean bl2;
        boolean bl3 = bl2 = !this.j && !this.k;
        if (this.b_f1_B == 6) {
            this.y();
            return;
        }
        if (!this.a_f0_Z && !this.c_m1_PRZ()) {
            this.a_f2_Lal_ = null;
            return;
        }
        switch (this.b_f1_B) {
            case 0: 
            case 1: {
                if (this.g_f1_Z || !bl2 && this.a_f2_I != -1) break;
                this.k_m0_PRV();
                return;
            }
            case 2: {
                if (this.a_f2_I != 0 && bl2) {
                    this.a_m2_PIRV(this.k_f0_B + this.g_f2_B);
                    return;
                }
                if (bl2 && this.g_f1_Z) {
                    this.a_m2_PIRV(this.k_f0_B + this.g_f2_B);
                    return;
                }
                if (this.a_f1_S == 0 && bl2) {
                    this.h_m0_PRV();
                    return;
                }
                this.j();
                return;
            }
            case 3: {
                if (this.a_m9_PIRZ(this.c_f1_I)) {
                    this.b_m2_PRV();
                }
                if (!this.j()) break;
                this.e();
                return;
            }
            case 4: {
                if (!this.j()) break;
                this.a_m1_PBRV((byte)1);
                return;
            }
            case 8: {
                this.d_m1_PRV();
            }
        }
    }

    protected final boolean j() {
        return this.f_f0_I - this.c_f1_I <= 0;
    }

    protected void k_m0_PRV() {
        if (this.a_f1_S <= 0 && !this.f_f2_Z && di.d_f3_B == 3) {
            if (this.a_f2_Lal_ == null || this.a_f2_Lal_.b_f1_B == 6 || this.a_f2_Lal_.b_f1_B == 7) {
                this.f();
            }
            if (this.a_f2_Lal_ == null) {
                if (this.a_f2_I == 0) {
                    this.a_m0_PZRV(false);
                    return;
                }
            } else if (!this.a_m3_PLdu_BRZ(this.a_f2_Lal_, this.i)) {
                if (this.a_m8_PLdu_RZ(this.a_f2_Lal_)) {
                    this.a_m1_PBRV((byte)3);
                    return;
                }
                this.a_f2_Lal_ = null;
            }
        }
    }

    protected void b_m2_PRV() {
        switch (this.a_f0_Ldt_.a_f3_B) {
            case 0: {
                if (this.i == 1) {
                    if (this.a_f2_Lal_ == di.a_f9_Ldo_ || this.a_f2_Lal_ == di.a_f10_Lh_) {
                        if (di.a_f9_Ldo_ == this.a_m5_PBLdu_RLdu_(this.c_f0_B, di.a_f9_Ldo_)) {
                            this.b_m5_PLal_IBRZ(di.a_f9_Ldo_, this.a_m21_PRS(), this.c_f0_B);
                        }
                        if (di.a_f10_Lh_ == null || di.a_f10_Lh_ != this.a_m5_PBLdu_RLdu_(this.c_f0_B, di.a_f10_Lh_)) break;
                        this.b_m5_PLal_IBRZ(di.a_f10_Lh_, this.a_m21_PRS(), this.c_f0_B);
                        return;
                    }
                    if (this.a_f2_Lal_ != this.a_m5_PBLdu_RLdu_(this.c_f0_B, this.a_f2_Lal_)) break;
                    this.b_m5_PLal_IBRZ(this.a_f2_Lal_, this.a_m21_PRS(), this.c_f0_B);
                    return;
                }
                if (this.i <= 1 || !this.a_m8_PLdu_RZ(this.a_f2_Lal_)) break;
                this.b_m5_PLal_IBRZ(this.a_f2_Lal_, this.a_m21_PRS(), this.c_f0_B);
                return;
            }
            case 1: {
                new t(3, this.h, ((du)this).i, this.a_f1_Ls_, 4, false, this, this.a_m21_PRS(), this.d_f0_B, this.i);
                return;
            }
            case 2: {
                int n2 = this.s + rpg.d.J[this.d_f0_B];
                int n3 = this.t + rpg.d.K[this.d_f0_B];
                if (g.a_m5_PIIRZ(n2, n3)) break;
                new t(14, (short)(n2 << 4), (short)(n3 << 4), this.a_f1_Ls_, 4, false, this, this.a_m21_PRS(), this.d_f0_B, this.i);
                return;
            }
            case 3: {
                if (!this.a_m8_PLdu_RZ(this.a_f2_Lal_)) break;
                new t(13, this.a_f2_Lal_.h, this.a_f2_Lal_.i, this.a_f1_Ls_, 4, true, this, this.a_m21_PRS(), this.d_f0_B, 1);
            }
        }
    }

    protected void e() {
        this.a_f2_Lal_ = null;
        this.a_m2_PIRV(this.j_f0_B);
    }

    protected void d_m1_PRV() {
    }

    public void g_m0_PRV() {
        this.a_m1_PBRV((byte)7);
        short s2 = this.a_f0_Ldt_.a_f4_S;
        cd cd2 = this;
        this.b_f0_S = s2;
        this.o();
        this.n();
        this.m();
        if (this.b_f0_S > 0) {
            cd.a_m5_PLcd_RV(this);
        }
    }

    protected void m() {
        this.a_f2_Lal_ = null;
        di.a_f4_Lg_.d_m2_PLdu_RV(this);
    }

    protected final void a_m7_PSRV(short s2) {
        this.b_f0_S = s2;
    }

    protected void y() {
        if (this.j()) {
            this.g_m0_PRV();
        }
    }

    protected void n() {
        if (this.c_f0_S >= 81 && this.c_f0_S <= 97) {
            di.a_f9_Ldo_.j_m0_PIRV(100);
            return;
        }
        int n2 = 20 + this.a_m19_PRB() - di.a_f9_Ldo_.a_m28_PRB();
        if (n2 < 0) {
            n2 = 0;
        } else if (n2 > 30) {
            n2 = 30;
        }
        di.a_f9_Ldo_.j_m0_PIRV(18 * this.a_m19_PRB() * n2 / 20);
    }

    protected void f() {
        al al2 = di.a_f10_Lh_;
        if (al2 != null && this.b_m3_PLdu_RZ(al2)) {
            this.a_f2_Lal_ = al2;
            return;
        }
        al2 = di.a_f9_Ldo_;
        if (al2 != null && this.b_m3_PLdu_RZ(al2)) {
            this.a_f2_Lal_ = al2;
        }
    }

    protected boolean a_m8_PLdu_RZ(du du2) {
        if (du2 == null) {
            return false;
        }
        if (du2 instanceof al && ((al)du2).b_f1_B == 7) {
            this.a_f2_Lal_ = null;
            return false;
        }
        int n2 = this.a_m4_PLdu_RI(du2);
        return n2 <= this.i;
    }

    protected final boolean b_m3_PLdu_RZ(du du2) {
        return this.a_m3_PLdu_RB(du2) <= 5 && this.b_m2_PLdu_RB(du2) <= 5;
    }

    protected boolean a_m9_PIRZ(int n2) {
        return n2 == this.a_f3_B;
    }

    public boolean a_m10_PLal_RZ(al al2) {
        int n2;
        if (di.d_f3_B != 3) {
            return false;
        }
        int n3 = 90 + this.a_m19_PRB() - al2.a_m8_PRB() - al2.a_m7_PRI();
        if (n3 < 15) {
            n3 = 15;
        }
        return (n2 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 100) < n3;
    }

    protected void a_m11_PLal_IBBRV(al al2, int n2, byte by2, byte by3) {
        if (al2 != null && (this.a_f2_Lal_ == null || al2 instanceof h)) {
            this.a_f2_Lal_ = al2;
        }
        if (by3 >= 11) {
            this.a_m1_PLat_RV(new ak(by3, by2));
        } else {
            this.a_m1_PLat_RV(new bu(by3));
        }
        if (n2 <= 0) {
            n2 = 5;
        }
        this.a_m1_PLat_RV(new z(-5, 0, n2));
        this.a_m16_PLal_IRV(al2, n2);
        if (!this.a_m17_PRZ()) {
            this.l = (byte)2;
            this.m = by2;
            if (this.b_f1_B == 1 || this.b_f1_B == 0) {
                this.a_m1_PBRV((byte)4);
            }
        }
    }

    public boolean a_m12_PLdo_BIZBBZZZRZ(do al2, byte by2, int n2, boolean bl2, byte by3, byte by4, boolean bl3, boolean bl4, boolean bl5) {
        boolean bl6;
        if (this.b_m1_PRZ()) {
            return false;
        }
        bs.a_m10_PLcd_ZRV(this, false);
        ((du)this).l = true;
        boolean bl7 = bl6 = n2 == -100;
        if (n2 == -2 || !bl6 && bl4 && !al2.a_m32_PLal_RZ(this)) {
            this.D();
            return false;
        }
        if (n2 == -90) {
            this.a_m1_PLat_RV(new z(-3));
            return false;
        }
        if (n2 <= 0) {
            n2 = al2.c_m2_PZRI(bl3);
        }
        n2 = cd.a_m15_PIIRI(n2, al2.b_m16_PIRI(this.b_m7_PRI()));
        if (al2.f_f1_I > 0 && al2.a_m38_PRLo_().a_m7_PLcd_RZ(this)) {
            if (by2 < 4) {
                do.h_f1_B = (byte)3;
            }
            this.a_m11_PLal_IBBRV(al2, this.k_f2_I, by3, by4);
            al2.q_m0_PIRV(n2);
            return true;
        }
        if (bl6 || rpg.g.a_m7_PIIRI(0, 99) < al2.a_m26_PBZRI(this.a_m19_PRB(), bl3)) {
            n2 += al2.a_m27_PIRI(n2);
            if (by4 == 2 || by4 == 4) {
                by4 = (byte)(by4 - 1);
            }
            if (!bl5) {
                byte[] byArray = new byte[]{7, 1};
                di.a_f4_Lg_.a_m23_PLat_RV(new dq(false, 0xFFFFFF, byArray, this.s << 4, this.t << 4));
            }
            c.k();
            g.g_m1_PRV();
            if (by2 < 4 && di.b_f4_B != 3) {
                do.h_f1_B = (byte)10;
            }
        } else if (di.b_f4_B == 0) {
            g.g_m1_PRV();
        }
        this.a_m11_PLal_IBBRV(al2, n2, by3, by4);
        al2.q_m0_PIRV(n2);
        by2 = al2.c_m9_PRB();
        al2 = this;
        if (by2 > 0) {
            ((cd)al2).g_f2_B = by2;
        }
        if (bl2) {
            this.b_m4_PBRV(by3);
        }
        return true;
    }

    public final void D() {
        this.a_m1_PLat_RV(new z(-2));
    }

    public boolean a_m13_PIBRZ(int n2, byte by2) {
        if (this.b_m1_PRZ()) {
            return false;
        }
        ((du)this).l = true;
        if (n2 == -90) {
            this.a_m1_PLat_RV(new z(-3));
            return false;
        }
        o o2 = di.a_f9_Ldo_.a_m38_PRLo_();
        if (o2.b_m8_PRZ()) {
            n2 = n2 * 3 >> 1;
        }
        cd cd2 = this;
        this.a_m11_PLal_IBBRV(di.a_f9_Ldo_, cd.a_m15_PIIRI(n2, cd2.h_f1_Z ? (cd2.e_f0_S << 2) / 5 : cd2.e_f0_S), by2, (byte)3);
        return true;
    }

    public final boolean b_m4_PIRZ(int n2) {
        this.a_m13_PIBRZ(n2, rpg.d.P[this.c_f0_B]);
        return true;
    }

    protected final boolean b_m5_PLal_IBRZ(al al2, int n2, byte by2) {
        boolean bl2 = !this.a_m10_PLal_RZ(al2);
        if (bl2) {
            al2.a_m1_PLat_RV(new z(al2 instanceof do ? (byte)-1 : -2));
            return false;
        }
        boolean bl3 = al2.a_m10_PLal_IBRZ(this, n2, by2);
        n2 = bl3 ? 1 : 0;
        if (bl3 && this.a_f0_Ldt_ != null) {
            if (this.a_f0_Ldt_.b_f2_Z && !al2.h_m1_PRZ()) {
                al2.c_m4_PIIRV(60, 30);
            }
            if (this.a_f0_Ldt_.c_f3_Z && !al2.h_m1_PRZ()) {
                al2.g_m1_PIRV(50);
            }
        }
        return n2 != 0;
    }

    protected boolean a_m14_PLal_IBRZ(al al2, int n2, byte by2) {
        if (this.b_m1_PRZ()) {
            return false;
        }
        if (n2 == -90) {
            this.a_m1_PLat_RV(new z(-3));
            return false;
        }
        this.a_m1_PLat_RV(new bu(1));
        this.a_m11_PLal_IBBRV(al2, cd.a_m15_PIIRI(n2, this.b_m7_PRI()), by2, (byte)3);
        return true;
    }

    private static int a_m15_PIIRI(int n2, int n3) {
        if ((n2 -= n3) < 5) {
            return 5;
        }
        return n2;
    }

    protected void a_m16_PLal_IRV(al al2, int n2) {
        boolean bl2 = true;
        al2 = this;
        ((du)this).l = bl2;
        this.k_f2_I -= n2 << 1;
        if (this.k_f2_I <= 0) {
            this.k_f2_I = 0;
        }
    }

    protected void h_m1_PIRV(int n2) {
        this.k_f2_I += n2;
        if (this.k_f2_I > this.d_m0_PRI()) {
            this.k_f2_I = this.d_m0_PRI();
        }
    }

    public final void c_m3_PABRV(byte[] byArray) {
        this.f_f2_Z = true;
        this.a_f2_Lal_ = null;
        this.a_f1_S = 1;
        this.e_f1_I = 0;
        this.a_f4_AB = byArray;
        this.a_m17_PRZ();
    }

    protected boolean a_m17_PRZ() {
        if (this.k_f2_I <= 0 && !this.f_f2_Z) {
            this.k_f2_I = 0;
            this.a_m1_PBRV((byte)6);
            return true;
        }
        return false;
    }

    protected final boolean a_m18_PSSBBRZ(short s2, short s3, byte by2, byte by3) {
        g g2 = di.a_f4_Lg_;
        int n2 = 0;
        while (++n2 < 10) {
            int n3 = rpg.g.a_m8_PLjava_util_Random_IIRI(al.a_f1_Ljava_util_Random_, by2, by3);
            int n4 = s2 + rpg.d.J[n3];
            if (!g2.a_m12_PLal_IIRZ(this, n4, n3 = s3 + rpg.d.K[n3])) continue;
            by2 = (byte)n3;
            s3 = (short)n4;
            cd cd2 = this;
            cd2.a_m0_PSSRV((short)(s3 << 4), (short)(by2 << 4));
            cd2.E();
            cd2.u();
            return true;
        }
        return false;
    }

    protected final void b_m6_PLat_RV(at at2) {
        switch (at2.a_f0_B) {
            case 39: {
                if (!g.a_m25_PRZ()) {
                    o.c_m2_PIRV(at2.b_f0_I);
                }
                if (!g.a_f11_Z) break;
                ++at2.b_f0_I;
                return;
            }
            case 6: {
                if (at2.b_f0_I % 10 != 0 || this.b_f2_I <= 0) break;
                this.a_m1_PLat_RV(new z(-5, 0, this.b_f2_I));
                this.a_m16_PLal_IRV(null, this.b_f2_I);
                this.a_m17_PRZ();
            }
        }
    }

    protected final void c_m4_PLat_RV(at at2) {
        switch (at2.a_f0_B) {
            case 16: {
                int n2 = di.a_f9_Ldo_.c_m0_PBRI((byte)8);
                this.b_f1_Z = true;
                this.b_m0_PBIRV((byte)17, n2);
                return;
            }
            case 17: {
                this.b_f1_Z = false;
                return;
            }
            case 5: {
                this.g_f1_Z = false;
                this.a_m1_PBRV((byte)1);
                return;
            }
            case 7: {
                this.h_f1_Z = false;
                return;
            }
            case 6: {
                this.b_f2_I = 0;
            }
        }
    }

    public final boolean k_m1_PRZ() {
        return this.b_f1_Z;
    }

    public byte a_m19_PRB() {
        return this.n;
    }

    public int a_m20_PBRI(byte by2) {
        int n2 = 0;
        switch (by2) {
            case 1: {
                n2 = this.g_f0_S;
            }
        }
        return n2;
    }

    public int b_m7_PRI() {
        if (this.h_f1_Z) {
            return (this.d << 2) / 5;
        }
        return this.d;
    }

    public short a_m21_PRS() {
        if (this.h_f1_Z) {
            return (short)((this.f_f1_S << 2) / 5);
        }
        return this.f_f1_S;
    }

    public void c_m5_PIRV(int n2) {
        if (this.b_m1_PRZ()) {
            return;
        }
        if (!this.g_f1_Z) {
            this.g_f1_Z = true;
            if (this.b_f1_B != 2) {
                this.a_m1_PBRV((byte)1);
            }
            this.a_m4_PBIRZ((byte)5, n2);
        }
    }

    public void c_m6_PIIRV(int n2, int n3) {
        if (this.b_m1_PRZ()) {
            return;
        }
        if (this.b_f2_I == 0) {
            this.b_f2_I = n3;
            this.a_m4_PBIRZ((byte)6, n2);
        }
    }

    public final void g_m1_PIRV(int n2) {
        if (this.b_m1_PRZ()) {
            return;
        }
        if (!this.h_f1_Z) {
            this.h_f1_Z = true;
            this.a_m4_PBIRZ((byte)7, n2);
            this.f_m1_PIRV(n2);
        }
    }

    protected final boolean a_m22_PABSZRZ(byte[] byArray, short s2, boolean bl2) {
        int n2;
        int n3;
        int n4;
        int n5;
        boolean bl3 = false;
        al al2 = di.a_f9_Ldo_;
        block0: for (n5 = 0; !bl3 && n5 < byArray.length; n5 += 2) {
            n4 = this.s + byArray[n5];
            n3 = this.t + byArray[n5 + 1];
            for (n2 = 0; !bl3 && n2 < this.u; ++n2) {
                if (al2.s != n4 + n2 || al2.t != n3) continue;
                bl3 = this.b_m5_PLal_IBRZ(al2, s2, this.c_f0_B);
                if (!bl2 || !bl3 || !di.a_f9_Ldo_.g_m3_PRZ()) continue block0;
                al2.b_m4_PBRV(this.c_f0_B);
                continue block0;
            }
        }
        n5 = 0;
        if (di.a_f10_Lh_ != null) {
            al2 = di.a_f10_Lh_;
            block2: for (n2 = 0; n5 == 0 && n2 < byArray.length; n2 += 2) {
                n4 = this.s + byArray[n2];
                n3 = this.t + byArray[n2 + 1];
                for (int i2 = 0; n5 == 0 && i2 < this.u; ++i2) {
                    if (al2.s != n4 + i2 || al2.t != n3) continue;
                    n5 = this.b_m5_PLal_IBRZ(al2, s2, this.c_f0_B) ? 1 : 0;
                    if (!bl2 || n5 == 0) continue block2;
                    al2.b_m4_PBRV((byte)(n2 / 2 + 1));
                    continue block2;
                }
            }
        }
        return bl3 || n5 != 0;
    }

    public final byte[] a_m23_PRAB() {
        return this.a_f0_Ldt_.a_f2_AB;
    }

    protected static al[] a_m24_PRALal_() {
        return new al[]{di.a_f9_Ldo_, di.a_f10_Lh_};
    }
}

