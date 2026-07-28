/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;

abstract class du
implements d {
    protected short h;
    protected short i;
    protected byte q;
    protected byte r;
    protected byte s;
    protected byte t;
    boolean j;
    boolean k;
    byte u = 1;
    boolean l = true;
    public du a;
    public du b;
    boolean m = false;

    public abstract void b_m0_PIIRV(int var1, int var2);

    du(short s2, short s3, byte by2, byte by3) {
        this.a_m0_PSSRV(s2, s3);
        this.q = by2;
        this.r = by3;
        this.E();
        s3 = 1;
        du du2 = this;
        this.l = s3;
    }

    protected final void E() {
        this.s = (byte)(this.h >> 4);
        this.t = (byte)(this.i >> 4);
        this.j = (this.h & 0xF) != 0;
        this.k = (this.i & 0xF) != 0;
    }

    final void a_m0_PSSRV(short s2, short s3) {
        this.h = s2;
        this.i = s3;
    }

    public final void d(boolean bl2) {
        this.l = bl2;
    }

    final du a_m1_PBBBRLdu_(byte by2, byte by3, byte by4) {
        return du.a_m2_PBBBBBRLdu_(this.s, this.t, by2, by3, by4);
    }

    public static du a_m2_PBBBBBRLdu_(byte by2, byte by3, byte by4, byte by5, byte by6) {
        g g2 = di.a_f4_Lg_;
        by2 = (byte)(by2 + d.J[by4]);
        by3 = (byte)(by3 + d.K[by4]);
        switch (by5) {
            case 1: {
                int n2 = by3 - by6;
                by3 = (byte)n2;
                if (n2 >= 0) break;
                return null;
            }
            case 2: {
                int n3 = by3 + by6;
                by3 = (byte)n3;
                if (n3 < g.d_f2_B) break;
                return null;
            }
            case 3: {
                int n4 = by2 - by6;
                by2 = (byte)n4;
                if (n4 >= 0) break;
                return null;
            }
            case 4: {
                int n5 = by2 + by6;
                by2 = (byte)n5;
                if (n5 < g.c_f3_B) break;
                return null;
            }
            default: {
                if (by6 > 0) {
                    return null;
                }
                by2 = (byte)(by2 + d.J[by5]);
                by3 = (byte)(by3 + d.K[by5]);
            }
            case 0: {
                if (by2 >= 0 && by3 >= 0 && by2 < g.c_f3_B && by3 < g.d_f2_B) break;
                return null;
            }
        }
        return g2.a_f4_AALdu_[by3][by2];
    }

    protected final byte a_m3_PLdu_RB(du du2) {
        int n2 = this.b_m1_PLdu_RI(du2);
        int n3 = du2.b_m1_PLdu_RI(this);
        return (byte)Math.min(n2, n3);
    }

    private int b_m1_PLdu_RI(du du2) {
        int n2 = Math.abs(du2.s - this.s);
        int n3 = Math.abs(du2.s - (this.s + this.u - 1));
        return Math.min(n2, n3);
    }

    protected final byte b_m2_PLdu_RB(du du2) {
        int n2 = du2.t - this.t;
        return (byte)Math.abs(n2);
    }

    protected final int a_m4_PLdu_RI(du du2) {
        return this.a_m3_PLdu_RB(du2) + this.b_m2_PLdu_RB(du2);
    }
}

