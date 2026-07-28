/*
 * Decompiled with CFR 0.152.
 */
final class ap
extends cx {
    public static ap a = null;

    public ap(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2);
        this.p = (byte)3;
        this.b_f1_AB = new byte[]{0};
        this.c_f1_AB[0] = 10;
        if (this.c_f0_S == 111 || this.c_f0_S == 113) {
            a = this;
            this.i = true;
        }
        this.c_f1_AB[0] = 10;
    }

    protected final boolean a_m0_PIRZ(int n2) {
        boolean bl2 = false;
        switch (this.a_f2_B) {
            case 0: {
                bl2 = n2 == 4 || n2 == 7;
                break;
            }
            case 1: {
                bl2 = n2 == 4;
            }
        }
        return bl2;
    }

    protected final boolean a_() {
        return false;
    }

    protected final void b() {
        switch (this.a_f2_B) {
            case 0: {
                if (this.c_f1_I == 4) {
                    this.l();
                    return;
                }
                this.m();
                return;
            }
            case 1: {
                this.a_m1_PBBZRV(this.a_f1_Ldo_.s, this.a_f1_Ldo_.t, false);
            }
        }
    }

    protected final void a_m1_PRV() {
        if (this.b_f1_B == 6) {
            this.z();
            return;
        }
        switch (this.b_f1_B) {
            case 3: {
                switch (this.a_f2_B) {
                    case 0: {
                        this.h_f0_B = (byte)2;
                        break;
                    }
                    case 1: {
                        this.h_f0_B = (byte)4;
                    }
                }
                break;
            }
            case 4: {
                this.h_f0_B = (byte)3;
                break;
            }
            case 100: {
                this.h_f0_B = (byte)5;
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

    protected final void y() {
        if (this.j()) {
            if (cw.a == null || cw.a.b_m0_PRZ()) {
                if (cw.a != null) {
                    cw.a.g_m0_PRV();
                    cw.a = null;
                }
                a = null;
                this.g_m0_PRV();
                return;
            }
            this.a_m1_PBRV((byte)100);
        }
    }
}

