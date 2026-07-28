/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;

public abstract class k
extends al {
    protected boolean a_f0_Z = false;
    protected short a_f1_S = 0;
    protected int a_f2_I = 0;

    public k(short s2, short s3, byte by2, byte by3) {
        super(s2, s3, (byte)8, by3);
    }

    protected void h() {
    }

    protected void i() {
        this.a_m2_PIRV(0);
        this.b_f0_Ljava_util_Vector_.removeAllElements();
        this.a_f0_Ljava_util_Vector_.removeAllElements();
        if (this.a_f2_I > 0) {
            this.a_f2_I = 0;
        }
    }

    protected final void a_m0_PZRV(boolean bl2) {
        byte by2;
        if (this.a_f2_I != 0) {
            return;
        }
        if ((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 6 == 0) {
            this.a_m1_PBIRV((byte)((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 4 + 1), 0);
            return;
        }
        int n2 = 0;
        while (!di.a_f4_Lg_.a_m13_PLal_BRZ(this, by2 = (byte)((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 4 + 1)) && ++n2 < 5) {
        }
        this.a_m1_PBIRV(by2, (al.a_f1_Ljava_util_Random_.nextInt() & 0xF) % 2 + (bl2 ? 1 + this.u : 1));
    }

    protected final void a_m1_PBIRV(byte by2, int n2) {
        if (this.f > 0) {
            this.a_f1_S = (short)(16 / this.f * n2);
        }
        this.c_m0_PBRV(by2);
        if (n2 > 0) {
            this.a_m0_PBRV((byte)2);
        }
    }

    protected void a_m2_PIRV(int n2) {
        this.a_f1_S = (short)n2;
        this.a_m0_PBRV((byte)1);
    }

    /*
     * Enabled force condition propagation
     * Lifted jumps to return sites
     */
    protected final boolean a_m3_PLdu_BRZ(du du2, byte by2) {
        byte by3;
        byte by4 = this.a_m3_PLdu_RB(du2);
        byte by5 = this.b_m2_PLdu_RB(du2);
        byte by6 = by4;
        if (du2.s > this.s) {
            by6 = 0 - by4;
        }
        byte by7 = by5;
        if (du2.t > this.t) {
            by7 = 0 - by5;
        }
        byte by8 = 0;
        byte by9 = 0;
        if (by7 != 0) {
            byte by10 = by8 = by7 > 0 ? (byte)1 : 2;
        }
        if (by6 != 0) {
            by9 = by6 > 0 ? (byte)3 : 4;
        }
        by6 = 0;
        if (by4 < by5) {
            by7 = by8;
            by3 = by9;
        } else {
            by7 = by9;
            by3 = by8;
        }
        g g2 = di.a_f4_Lg_;
        if (by4 + by5 <= by2) {
            if (by2 > 1 && by4 != by5 && by4 * by5 != 0) {
                if (g2.a_m13_PLal_BRZ(this, by3)) {
                    this.a_m1_PBIRV(by3, 1);
                    return true;
                }
                if (!g2.a_m13_PLal_BRZ(this, by7)) return false;
                this.a_m1_PBIRV(by7, 1);
                return true;
            }
            this.c_m0_PBRV(by7);
            if (by4 != by5) return false;
            this.d_f0_B = (byte)((by8 << 1) + by9);
            return false;
        }
        if (this.a_f2_I != 0) return false;
        by8 = 0;
        by9 = g2.a_m13_PLal_BRZ(this, this.c_f0_B) ? 1 : 0;
        if ((this.c_f0_B == by7 || this.c_f0_B == by3) && this.c_f0_B != 0 && by9 != 0) {
            by8 = 1;
            by6 = this.c_f0_B;
        } else if (by3 != 0 && d.P[this.c_f0_B] != by3 && g2.a_m13_PLal_BRZ(this, by3)) {
            by8 = 1;
            by6 = by3;
        } else if (by7 != 0 && d.P[this.c_f0_B] != by7 && g2.a_m13_PLal_BRZ(this, by7)) {
            by8 = 1;
            by6 = by7;
        } else {
            if (this.c_m3_PBRZ(by7)) {
                this.a_f1_S = (short)(16 / this.f << 1);
                return true;
            }
            if (this.c_m3_PBRZ(by3)) {
                this.a_f1_S = (short)(16 / this.f << 1);
                return true;
            }
        }
        if (by8 != 0) {
            if (this instanceof bl && ((bl)this).a_m0_PRZ()) {
                this.a_m1_PBIRV(by6, by6 == 3 || by6 == 4 ? by4 - (by2 - 1) : by5 - (by2 - 1));
                return by8 != 0;
            } else {
                this.a_m1_PBIRV(by6, 1);
            }
            return by8 != 0;
        } else {
            this.a_m0_PZRV(true);
        }
        return by8 != 0;
    }

    protected final void j() {
        if (this.a_f1_S > 0) {
            this.w();
        }
        this.d_m1_PRZ();
    }

    protected void k() {
        this.a_m0_PZRV(false);
    }

    public final void b_m0_PIRV(int n2) {
        this.a_f2_I = n2;
    }

    protected boolean b_m1_PRZ() {
        return this.b_f1_B == 7 || this.b_f1_B == 6;
    }

    protected void a_m4_PIIZRV(int n2, int n3, boolean bl2) {
        if (this.b_m1_PRZ()) {
            return;
        }
        cm cm2 = rpg.a.a_f3_Lcm_;
        if (this.u == 1) {
            cm2.a_m1_PLcg_IIIRV(rpg.e.e_f0_ALcg_[bl2 ? 1 : 0], n2, n3 + 6, 33);
            return;
        }
        cm2.a_m1_PLcg_IIIRV(rpg.e.e_f0_ALcg_[bl2 ? 1 : 0], n2 - 2, n3 + 6, 33);
        cm2.a_m1_PLcg_IIIRV(rpg.e.e_f0_ALcg_[bl2 ? 1 : 0], n2 + 2, n3 + 6, 33);
    }
}

