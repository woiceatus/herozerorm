/*
 * Decompiled with CFR 0.152.
 */
import java.util.Vector;
import rpg.d;
import rpg.e;
import rpg.g;

abstract class cl
implements d {
    protected do a_f0_Ldo_;
    private byte[] a_f1_AB;
    private short[] a_f2_AS;
    private short[] b;

    public abstract boolean a_m0_PBRZ(byte var1);

    public abstract boolean a_m1_PBIRZ(byte var1, int var2);

    public abstract boolean b_m0_PBRZ(byte var1);

    protected abstract byte a_m2_PRB();

    protected abstract void a_m3_PBRV(byte var1);

    cl(do do_) {
        this.a_f0_Ldo_ = do_;
    }

    public final void b_m1_PBRV(byte n2) {
        int n3;
        byte[] byArray = e.a_m6_PLjava_lang_String_RAB("/hero/hsd1");
        int n4 = 0;
        for (n3 = 0; n3 < n2; ++n3) {
            n4 += 56;
        }
        n3 = 0;
        this.a_f1_AB = new byte[24];
        this.a_f2_AS = new short[6];
        this.b = new short[6];
        for (n2 = 0; n2 < 8; ++n2) {
            System.arraycopy(byArray, n4, this.a_f1_AB, n3, 3);
            n3 += 3;
            if (n2 < 6) {
                this.a_f2_AS[n2] = g.b_m1_PABIRS(byArray, n4 + 3);
                this.b[n2] = g.b_m1_PABIRS(byArray, n4 + 5);
            }
            n4 += 7;
        }
    }

    public final int a_m4_PBRI(byte by2) {
        int n2 = by2 - 4;
        by2 = (byte)n2;
        if (n2 < 0 || by2 >= 6) {
            return 0;
        }
        return this.b[by2];
    }

    public final int b_m2_PBRI(byte by2) {
        int n2 = by2 - 4;
        by2 = (byte)n2;
        if (n2 < 0 || by2 >= 6) {
            return 0;
        }
        return this.a_f2_AS[by2];
    }

    protected final int c_m0_PBRI(byte by2) {
        int n2 = (by2 - 4) * 3;
        return this.a_m6_PIIRI(di.a_f9_Ldo_.a_m2_PBRB(by2), n2);
    }

    protected final int a_m5_PBIZRI(byte by2, int n2, boolean bl2) {
        int n3;
        int n4 = n3 = (by2 - 4) * 3;
        n3 = bl2 ? 1 : 0;
        int n5 = n2;
        n2 = di.a_f9_Ldo_.a_m2_PBRB(by2);
        cl cl2 = this;
        n2 = cl2.a_f1_AB[n4] + cl2.a_f1_AB[n4 + 1] * n2;
        n2 = n3 != 0 ? (n2 += n5) : (n2 *= n5);
        return n2 /= cl2.a_f1_AB[n4 + 2];
    }

    private final int a_m6_PIIRI(int n2, int n3) {
        n2 = this.a_f1_AB[n3] + this.a_f1_AB[n3 + 1] * n2;
        return n2 /= this.a_f1_AB[n3 + 2];
    }

    protected final int a_m7_PBZRI(byte by2, boolean bl2) {
        int n2 = this.a_m5_PBIZRI(by2, this.a_f0_Ldo_.a_m9_PZRI(bl2), false);
        by2 = (byte)n2;
        int n3 = n2 + this.a_f0_Ldo_.c_m2_PZRI(bl2);
        by2 = (byte)n3;
        return n3;
    }

    protected final boolean a_m8_PRZ() {
        return this.a_f0_Ldo_.a_m29_PBRLbm_((byte)3) != null;
    }

    protected final boolean b_m3_PRZ() {
        return this.a_f0_Ldo_.a_m29_PBRLbm_((byte)5) != null;
    }

    public byte b_m4_PRB() {
        int n2 = this.a_m6_PIIRI(di.a_f9_Ldo_.a_m2_PBRB((byte)10), 18);
        return (byte)(n2 > 4 ? 4 : n2);
    }

    protected final void c_m1_PBRV(byte by2) {
        if (do.h_f1_B > 0 && by2 < 4) {
            bq.a_m2_PBRV(do.h_f1_B);
        } else {
            this.a_m3_PBRV(by2);
        }
        do.h_f1_B = (byte)-1;
    }

    protected final boolean a_m9_PBBIZZZRZ(byte by2, byte by3, int n2, boolean bl2, boolean bl3, boolean n3) {
        n2 = 0;
        Vector vector = this.a_f0_Ldo_.b_m7_PBRLjava_util_Vector_(by2);
        if (vector == null) {
            return false;
        }
        n3 = vector.size();
        for (int i2 = 0; i2 < n3; ++i2) {
            cd cd2 = (cd)vector.elementAt(i2);
            if (cd2 == null || !cd2.a_m12_PLdo_BIZBBZZZRZ(this.a_f0_Ldo_, by3, -1, bl2, this.a_f0_Ldo_.c_f0_B, this.a_m2_PRB(), bl3, true, false)) continue;
            n2 = 1;
        }
        return n2 != 0;
    }
}

