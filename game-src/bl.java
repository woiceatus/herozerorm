/*
 * Decompiled with CFR 0.152.
 */
public final class bl
extends k {
    private static final byte[] a_f0_AB = new byte[]{2, 3, 4, 1};
    byte a_f1_B;
    byte g;
    private byte h;
    private byte i;
    private byte j;
    private byte k;

    public bl(short s2, short s3, byte by2, byte by3) {
        super(s2, s3, (byte)8, (byte)8);
        this.g = by2;
        this.a_f1_B = by3;
        this.b_f1_B = 1;
        this.i = 0;
        this.c_f0_B = (byte)2;
        this.h = 0;
        this.a_f1_S = 0;
        this.d_m3_PBRV(am.a_f1_AB[this.a_f1_B]);
        if (this.f <= 0) {
            this.b_m0_PIRV(-1);
        }
        this.j = this.s;
        this.k = this.t;
        for (s2 = 0; s2 < 4; s2 = (short)((byte)(s2 + 1))) {
            if (!this.d(a_f0_AB[s2])) continue;
            this.c_m0_PBRV(a_f0_AB[s2]);
            return;
        }
    }

    private boolean d(byte by2) {
        return (am.b[this.a_f1_B] & 1 << by2) != 0;
    }

    public final void e_m0_PBRV(byte by2) {
        if (this.d(by2)) {
            this.c_m0_PBRV(by2);
            return;
        }
        if (by2 != 1 && this.d((byte)2)) {
            this.c_m0_PBRV((byte)2);
        }
    }

    public final void b_m0_PIIRV(int n2, int n3) {
        if ((n2 = n2 + ((du)this).h + this.q) + 16 < 0 || n2 > bs.j + 16) {
            this.a_f0_Z = false;
            return;
        }
        if ((n3 = n3 + ((du)this).i + this.r) + 16 < 0 || n3 > bs.k + 16) {
            this.a_f0_Z = false;
            return;
        }
        this.a_f0_Z = true;
        if (!this.l) {
            return;
        }
        this.a_m4_PIIZRV(n2, n3, false);
        this.c_f1_I = am.a_f0_ALs_[this.a_f1_B].a_m2_PBBIIIRI(this.i, this.c_f0_B, this.c_f1_I, n2, n3);
        this.d_m2_PIIRV(n2, n3);
    }

    protected final boolean b_m1_PRZ() {
        return false;
    }

    final void c_m0_PRV() {
        super.c_m2_PRV();
        ++this.c_f1_I;
        bl bl2 = this;
        if (bl2.l) {
            int n2;
            int n3 = n2 = !((du)bl2).j && !((du)bl2).k ? 1 : 0;
            if (bl2.a_f0_Z || bl2.b_f1_B == 2 || bl2.a_m0_PRZ()) {
                switch (bl2.b_f1_B) {
                    case 2: {
                        if (bl2.a_f1_S == 0 && n2 != 0) {
                            if (bl2.a_m0_PRZ() && bl2.c_m1_PRZ()) {
                                n2 = bl2.c_f1_I;
                                bl2.a_m3_PLdu_BRZ(di.a_f9_Ldo_, (byte)1);
                                if (bl2.b_f1_B == 2) {
                                    bl2.j();
                                    bl2.c_f1_I = n2;
                                    break;
                                }
                                bl2.a_m1_PIRV(16);
                                break;
                            }
                            bl2.a_m1_PIRV(16);
                            break;
                        }
                        bl2.j();
                        break;
                    }
                    case 0: 
                    case 1: {
                        if (bl2.a_f1_S != 0 || n2 == 0) break;
                        bl2.k();
                    }
                }
            }
        }
        this.d_m0_PIRV(am.a_f0_ALs_[this.a_f1_B].a_m3_PBRB(this.i));
        if (this.a_f1_S > 0) {
            this.a_f1_S = (short)(this.a_f1_S - 1);
        }
    }

    protected final void h() {
        this.a_m1_PIRV(16);
    }

    public final void f(byte by2) {
        this.h = by2;
    }

    public final byte b_m2_PRB() {
        if (this.b_f1_B == 1) {
            return this.h;
        }
        return -1;
    }

    protected final boolean e_m1_PRZ() {
        if (di.d_f3_B == 4) {
            return false;
        }
        return super.e_m0_PRZ();
    }

    protected final void u() {
        if (this.g != 1 && this.g != 47) {
            super.u();
        }
    }

    protected final void v() {
        if (this.g != 1 && this.g != 47) {
            super.v();
        }
    }

    protected final boolean a_m0_PRZ() {
        if (di.d_f3_B == 4) {
            return false;
        }
        return this.g == 1 || this.g == 47;
    }

    protected final void a_m1_PIRV(int n2) {
        this.a_f1_S = this.a_m0_PRZ() ? (short)0 : (short)n2;
        this.a_m2_PBRV((byte)1);
        this.c_f1_I = 0;
    }

    private boolean c_m1_PRZ() {
        int n2 = this.a_m4_PLdu_RI(di.a_f9_Ldo_);
        return n2 > 2 || !di.a_f9_Ldo_.j && !di.a_f9_Ldo_.k;
    }

    protected final void k() {
        if (this.a_f2_I == 0) {
            if (this.a_m0_PRZ()) {
                if (this.c_m1_PRZ()) {
                    this.a_m3_PLdu_BRZ(di.a_f9_Ldo_, (byte)1);
                    return;
                }
            } else if (this.l && di.d_f3_B == 3) {
                if (this.s == this.j && this.t == this.k) {
                    byte by2 = am.b[this.a_f1_B];
                    byte by3 = this.c_f0_B;
                    if (by2 == 30) {
                        by3 = (byte)((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 4 + 1);
                    } else if (by2 == 6) {
                        by3 = (byte)((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 2 + 1);
                    } else if (by2 == 24) {
                        by3 = (byte)((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 2 + 3);
                    }
                    this.a_m1_PBIRV(by3, (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 3);
                    return;
                }
                if (this.s != this.j) {
                    byte by4 = this.s > this.j ? (byte)3 : 4;
                    this.a_m1_PBIRV(by4, Math.abs(this.s - this.j));
                    return;
                }
                if (this.t != this.k) {
                    byte by5 = this.t > this.k ? (byte)1 : 2;
                    this.a_m1_PBIRV(by5, Math.abs(this.t - this.k));
                }
            }
        }
    }

    public final void a_m2_PBRV(byte by2) {
        if (by2 == 2 && this.f == 0) {
            this.d_m3_PBRV((byte)8);
        } else if (by2 == 1) {
            this.d_m3_PBRV(am.a_f1_AB[this.a_f1_B]);
        }
        super.a_m0_PBRV(by2);
        this.i = this.b_f1_B == 2 ? (byte)1 : 0;
    }

    final byte a_m3_PIRB(int n2) {
        return am.a_f0_ALs_[this.a_f1_B].a_m3_PBRB((byte)n2);
    }

    public final void g(byte by2) {
        this.a_m2_PBRV((byte)99);
        this.i = by2;
    }
}

