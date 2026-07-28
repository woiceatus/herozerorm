/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

final class bc
extends cx {
    public static short b = (short)-1;
    public static byte g;
    public static int e;

    public bc(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 20);
    }

    protected final void a_m0_PRV() {
        if (this.b_f1_B == 6) {
            this.z();
            return;
        }
        switch (this.b_f1_B) {
            case 3: {
                switch (this.a_f2_B) {
                    case 1: {
                        this.h_f0_B = (byte)8;
                        break;
                    }
                    case 4: {
                        this.h_f0_B = (byte)3;
                        break;
                    }
                    case 5: {
                        this.h_f0_B = (byte)4;
                        break;
                    }
                    case 6: {
                        this.h_f0_B = (byte)6;
                        break;
                    }
                    case 7: {
                        this.h_f0_B = (byte)5;
                    }
                }
                break;
            }
            case 4: {
                this.h_f0_B = (byte)2;
                break;
            }
            case 2: {
                this.h_f0_B = 1;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(this.h_f0_B);
    }

    protected final boolean a_m1_PIRZ(int n2) {
        boolean bl2 = false;
        switch (this.a_f2_B) {
            case 1: {
                bl2 = n2 == 4;
                break;
            }
            case 4: 
            case 5: {
                bl2 = n2 == 5 || n2 == 7 || n2 == 10;
                break;
            }
            case 6: {
                bl2 = n2 == 5;
                break;
            }
            case 7: {
                bl2 = n2 == 14;
            }
        }
        return bl2;
    }

    protected final boolean a_() {
        int n2 = (this.b_f2_I + 1) % this.b_f1_AB.length;
        byte by2 = this.b_f1_AB[n2];
        boolean bl2 = false;
        switch (by2) {
            case 10: {
                bl2 = true;
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                this.p = (byte)3;
                break;
            }
            case 11: {
                bl2 = true;
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                this.p = (byte)100;
                break;
            }
            case 1: {
                if (this.a_m4_PLdu_RI(this.a_f1_Ldo_) < 3) {
                    this.b_f2_I = n2;
                    this.a_f2_B = by2;
                    break;
                }
                bl2 = true;
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                this.a_m1_PBRV((byte)3);
                break;
            }
            case 6: {
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                if (e > 0) break;
                bl2 = true;
                this.a_m1_PBRV((byte)3);
                break;
            }
            case 7: {
                bl2 = true;
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                this.a_m1_PBRV((byte)3);
            }
        }
        return bl2;
    }

    protected final void b() {
        switch (this.a_f2_B) {
            case 1: {
                this.a_m1_PBBZRV(this.a_f1_Ldo_.s, this.a_f1_Ldo_.t, false);
                return;
            }
            case 4: 
            case 5: {
                boolean bl2;
                this.a_f1_Ldo_.j_f1_I = 0;
                if (this.c_f1_I == 5) {
                    bl2 = this.l();
                } else {
                    boolean bl3 = bl2 = this.m();
                }
                if (this.a_f2_B != 5 || !bl2) break;
                this.h_m1_PIRV(this.a_f1_Ldo_.j_f1_I);
                this.a_f1_Ldo_.a_m1_PLat_RV(new aa(this.a_f1_Ls_, 10));
                return;
            }
            case 6: {
                for (int i2 = 0; i2 < 5; ++i2) {
                    new ag(this.h, ((du)this).i, b, g);
                }
                return;
            }
            case 7: {
                for (int i3 = 0; i3 < 15; ++i3) {
                    int n2;
                    int n3 = this.s + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 9 + -4;
                    if (g.a_m5_PIIRZ(n3, n2 = this.t + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 9 + -4)) continue;
                    new t(13, (short)(n3 << 4), (short)(n2 << 4), this.a_f1_Ls_, 9, true, this, this.a_m21_PRS(), this.d_f0_B, 3);
                }
                break;
            }
        }
    }

    protected final void a_m2_PIIRV(int n2, int n3) {
        switch (this.b_f1_B) {
            case 6: {
                rpg.e.a_f4_Ls_.a_m2_PBBIIIRI((byte)0, (byte)1, this.c_f1_I, n2, n3);
                return;
            }
        }
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.h_f0_B == 5 ? (byte)1 : this.c_f0_B, this.c_f1_I, n2, n3);
    }

    static {
        e = 0;
    }
}

