/*
 * Decompiled with CFR 0.152.
 */
import java.util.Random;
import java.util.Vector;
import rpg.d;

public abstract class al
extends du {
    protected Vector a_f0_Ljava_util_Vector_;
    protected Vector b_f0_Ljava_util_Vector_;
    protected byte b_f1_B;
    protected byte c_f0_B;
    protected byte d_f0_B;
    protected byte e = 0;
    protected int c_f1_I;
    protected byte f = (byte)8;
    protected int d_f1_I = -1;
    protected static Random a_f1_Ljava_util_Random_ = new Random();

    public al(short s2, short s3, byte by2, byte by3) {
        super(s2, s3, by2, by3);
        al al2 = this;
        this.b_f1_B = 1;
        al2.c_f1_I = 0;
        al2.d_f0_B = al2.c_f0_B;
        al2.d_f1_I = -1;
        al2.s();
    }

    final void r() {
        this.a_f0_Ljava_util_Vector_ = new Vector(3);
    }

    void s() {
        this.r();
        this.b_f0_Ljava_util_Vector_ = new Vector(3);
    }

    void a_m0_PBRV(byte by2) {
        this.b_f1_B = by2;
        this.c_f1_I = -1;
    }

    final void c_m0_PBRV(byte by2) {
        this.c_f0_B = this.d_f0_B = by2;
    }

    final void d_m0_PIRV(int n2) {
        if (this.c_f1_I >= n2) {
            this.c_f1_I = 0;
        }
    }

    final void a_m1_PLat_RV(at at2) {
        int n2 = at2.a_f0_B;
        al al2 = this;
        if (at.a_m3_PBRZ((byte)n2)) {
            for (int i2 = n2 = al2.a_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
                at at3 = (at)al2.a_f0_Ljava_util_Vector_.elementAt(i2);
                if (!at.a_m3_PBRZ(at3.a_f0_B)) continue;
                at3.a_f2_Z = true;
            }
        }
        this.a_f0_Ljava_util_Vector_.addElement(at2);
    }

    void b_m0_PBIRV(byte by2, int n2) {
        if (this.b_m1_PBRZ(by2)) {
            this.b_f0_Ljava_util_Vector_.addElement(new ak(by2, n2));
        }
    }

    void a_m2_PBBIRV(byte by2, byte by3, int n2) {
        if (this.b_m1_PBRZ(by2)) {
            this.b_f0_Ljava_util_Vector_.addElement(new cr(by2, by3, n2));
        }
    }

    boolean a_m3_PBRZ(byte by2) {
        if (this.b_m1_PBRZ(by2)) {
            this.b_f0_Ljava_util_Vector_.addElement(new bu(by2));
            return true;
        }
        return false;
    }

    boolean a_m4_PBIRZ(byte by2, int n2) {
        if (this.b_m1_PBRZ(by2)) {
            this.b_f0_Ljava_util_Vector_.addElement(new bu(by2, n2));
            return true;
        }
        return false;
    }

    final boolean b_m1_PBRZ(byte by2) {
        for (int i2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            at at2 = (at)this.b_f0_Ljava_util_Vector_.elementAt(i2);
            if (at2.a_f0_B != by2) continue;
            return false;
        }
        return true;
    }

    protected final void t() {
        for (int i2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            at at2 = (at)this.b_f0_Ljava_util_Vector_.elementAt(i2);
            if (at2.a_f2_Z) {
                this.c_m1_PLat_RV(at2);
                this.b_f0_Ljava_util_Vector_.removeElementAt(i2);
                continue;
            }
            this.b_m2_PLat_RV(at2);
        }
    }

    protected void b_m2_PLat_RV(at at2) {
    }

    protected void c_m1_PLat_RV(at at2) {
    }

    void c_m2_PRV() {
        if (this.d_f1_I > 0) {
            --this.d_f1_I;
        }
        this.x();
    }

    final boolean d_m1_PRZ() {
        if (this.b_f1_B == 2 || this.b_f1_B == 5) {
            if (!this.e_m0_PRZ()) {
                this.e_m1_PIRV(this.f);
                return true;
            }
            this.h_m0_PRV();
        }
        return false;
    }

    protected boolean e_m0_PRZ() {
        if (this.j || this.k) {
            return false;
        }
        if (!di.a_f4_Lg_.a_m13_PLal_BRZ(this, this.c_f0_B)) {
            this.a_m0_PBRV((byte)1);
            return true;
        }
        return false;
    }

    protected final void e_m1_PIRV(int n2) {
        this.v();
        this.h = (short)(this.h + d.J[this.c_f0_B] * n2);
        this.i = (short)(this.i + d.K[this.c_f0_B] * n2);
        this.E();
        this.u();
    }

    abstract void h_m0_PRV();

    protected void u() {
        g g2 = di.a_f4_Lg_;
        for (byte by2 = 0; by2 < this.u; by2 = (byte)(by2 + 1)) {
            g2.a_f4_AALdu_[this.t][this.s + by2] = this;
            if (this.k) {
                g2.a_f4_AALdu_[this.t + 1][this.s + by2] = this;
                continue;
            }
            if (!this.j) continue;
            g2.a_f4_AALdu_[this.t][this.s + 1 + by2] = this;
        }
    }

    protected void v() {
        g g2 = di.a_f4_Lg_;
        for (byte by2 = 0; by2 < this.u; by2 = (byte)(by2 + 1)) {
            g2.a_f4_AALdu_[this.t][this.s + by2] = null;
            if (this.k) {
                g2.a_f4_AALdu_[this.t + 1][this.s + by2] = null;
                continue;
            }
            if (!this.j) continue;
            g2.a_f4_AALdu_[this.t][this.s + 1 + by2] = null;
        }
    }

    protected final void d_m2_PIIRV(int n2, int n3) {
        for (int i2 = this.a_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            at at2 = (at)this.a_f0_Ljava_util_Vector_.elementAt(i2);
            at2.a_m1_PIIZRV(n2, n3, true);
            if (!at2.a_f2_Z) continue;
            this.a_f0_Ljava_util_Vector_.removeElementAt(i2);
        }
    }

    protected final void b_m3_PIIZRV(int n2, int n3, boolean bl2) {
        for (int i2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            at at2 = (at)this.b_f0_Ljava_util_Vector_.elementAt(i2);
            at2.a_m1_PIIZRV(n2, n3, bl2);
        }
    }

    protected final du a_m5_PBLdu_RLdu_(byte by2, du du2) {
        int n2;
        int n3 = this.t + d.K[by2];
        if (n3 < 0 || n3 >= g.d_f2_B) {
            return null;
        }
        g g2 = di.a_f4_Lg_;
        for (int i2 = 0; i2 < this.u && (n2 = this.s + d.J[by2] + i2) >= 0 && n2 < g.c_f3_B; ++i2) {
            du du3 = g2.a_f4_AALdu_[n3][n2];
            if (du3 == this || du3 == null || du2 != null && (du2 == null || du3 != du2)) continue;
            return du3;
        }
        return null;
    }

    protected final boolean f_m0_PRZ() {
        return this.c_m3_PBRZ(this.c_f0_B);
    }

    protected final boolean c_m3_PBRZ(byte by2) {
        int n2 = this.s + d.J[by2];
        byte by3 = this.t + d.K[by2];
        if (n2 >= g.c_f3_B || by3 >= g.d_f2_B || n2 < 0 || by3 < 0) {
            return false;
        }
        if (!di.a_f4_Lg_.d_m0_PIIRZ(n2, by3)) {
            return false;
        }
        g g2 = di.a_f4_Lg_;
        by3 = d.N[by2];
        byte by4 = d.O[by2];
        byte by5 = d.L[by2];
        byte by6 = d.M[by2];
        if (g2.a_m13_PLal_BRZ(this, by4) && g2.a_m13_PLal_BRZ(this, by6)) {
            this.e = by2;
            this.a_m0_PBRV((byte)2);
            this.c_m0_PBRV(by4);
            return true;
        }
        if (g2.a_m13_PLal_BRZ(this, by3) && g2.a_m13_PLal_BRZ(this, by5)) {
            this.e = by2;
            this.a_m0_PBRV((byte)2);
            this.c_m0_PBRV(by3);
            return true;
        }
        return false;
    }

    protected final void w() {
        if (this.e != 0 && !this.j && !this.k) {
            this.c_m0_PBRV(this.e);
            this.e = 0;
        }
    }

    protected void b_m4_PBRV(byte by2) {
        if (di.a_f4_Lg_.a_m13_PLal_BRZ(this, by2)) {
            this.v();
            this.h = (short)(this.h + (d.J[by2] << 4));
            this.i = (short)(this.i + (d.K[by2] << 4));
            this.E();
            this.u();
        }
    }

    public boolean a_m6_PLal_RZ(al al2) {
        return true;
    }

    public int b_m5_PBRI(byte by2) {
        return 0;
    }

    public int a_m7_PRI() {
        return 0;
    }

    public byte a_m8_PRB() {
        return 1;
    }

    public int a_m9_PBRI(byte by2) {
        return 0;
    }

    public int b_m6_PRI() {
        return 0;
    }

    boolean a_m10_PLal_IBRZ(al al2, int n2, byte by2) {
        return false;
    }

    boolean a_m11_PLdo_BIZBBZZZRZ(do do_, byte by2, int n2, boolean bl2, byte by3, byte by4, boolean bl3, boolean bl4, boolean bl5) {
        return false;
    }

    protected final void d_m3_PBRV(byte by2) {
        this.f = by2;
    }

    protected final cd a_m12_PBRLcd_(byte by2) {
        du du2 = this.a_m5_PBLdu_RLdu_(by2, null);
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h)) {
            return (cd)du2;
        }
        return null;
    }

    protected final void f_m1_PIRV(int n2) {
        if (this.d_f1_I > 0) {
            return;
        }
        this.d_f1_I = n2;
        byte by2 = (byte)(this.f >> 1);
        al al2 = this;
        this.f = by2;
    }

    protected void x() {
        if (this.d_f1_I == 0 && !this.j && !this.k) {
            this.d_f1_I = -1;
            byte by2 = (byte)(this.f << 1);
            al al2 = this;
            this.f = by2;
        }
    }

    protected void a_m13_PLal_IBBRV(al al2, int n2, byte by2, byte by3) {
    }

    public boolean g_m0_PRZ() {
        return true;
    }

    public boolean h_m1_PRZ() {
        return false;
    }

    public void c_m4_PIIRV(int n2, int n3) {
    }

    public void g_m1_PIRV(int n2) {
    }

    protected final boolean i() {
        int n2;
        int n3 = 0;
        for (int i2 = n2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            at at2 = (at)this.b_f0_Ljava_util_Vector_.elementAt(i2);
            if (at2 == null) continue;
            at2.a_f2_Z = true;
            this.c_m1_PLat_RV(at2);
            this.b_f0_Ljava_util_Vector_.removeElementAt(i2);
            ++n3;
        }
        return n3 > 0;
    }

    protected final Vector a_m14_PBRLjava_util_Vector_(byte by2) {
        int n2;
        int n3;
        int n4;
        Vector<du> vector = new Vector<du>(4);
        g g2 = di.a_f4_Lg_;
        int n5 = this.s - 4;
        if (n5 < 0) {
            n5 = 0;
        }
        if ((n4 = this.t - 4) < 0) {
            n4 = 0;
        }
        if ((n3 = this.s + 4 + 1) > g2.a_f4_AALdu_[0].length) {
            n3 = g2.a_f4_AALdu_[0].length;
        }
        if ((n2 = this.t + 4) > g2.a_f4_AALdu_.length) {
            n2 = g2.a_f4_AALdu_.length;
        }
        while (n4 < n2) {
            for (int i2 = n5; i2 < n3; ++i2) {
                if (g2.a_f4_AALdu_[n4][i2] == null || g2.a_f4_AALdu_[n4][i2] == this || !(g2.a_f4_AALdu_[n4][i2] instanceof al)) continue;
                vector.addElement(g2.a_f4_AALdu_[n4][i2]);
            }
            ++n4;
        }
        return vector;
    }
}

