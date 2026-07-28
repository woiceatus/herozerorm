/*
 * Decompiled with CFR 0.152.
 */
abstract class u
extends du {
    protected static byte a_f0_B = (byte)2;
    protected static byte b_f0_B = (byte)-5;
    public byte c;
    protected short a_f1_S;
    protected int a_f2_I;
    protected byte d;
    public boolean a_f3_Z;
    public boolean b_f1_Z;

    abstract void a_m0_PIIRV(int var1, int var2);

    abstract void a_m1_PRV();

    u(byte by2, byte by3, byte by4, byte by5, boolean bl2) {
        super((short)(by4 << 4), (short)(by5 << 4), (byte)8, (byte)(8 + a_f0_B));
        this.b_f1_Z = true;
        this.c = by2;
        this.d = by3;
        this.a_f2_I = -1;
        this.a_f3_Z = false;
    }

    u(byte by2, byte by3, short s2, short s3, boolean bl2) {
        super(s2, s3, (byte)8, (byte)(8 + (bl2 ? a_f0_B : b_f0_B)));
        this.b_f1_Z = bl2;
        this.c = by2;
        this.d = 1;
        this.a_f2_I = -1;
        this.a_f3_Z = false;
    }

    public final void b(int n2, int n3) {
        u u2 = this;
        ++u2.a_f2_I;
        u2.a_m1_PRV();
        if (this.a_f3_Z) {
            di.a_f4_Lg_.d_m2_PLdu_RV(this);
            return;
        }
        this.a_m0_PIIRV(n2, n3);
    }
}

