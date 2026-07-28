/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

final class cw
extends cx {
    public static cw a = null;
    private byte[] Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 19);

    public cw(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2);
        this.o = (byte)3;
        this.b_f1_AB = new byte[]{0};
        if (this.c_f0_S == 112 || this.c_f0_S == 114) {
            a = this;
        }
    }

    protected final void a_m0_PRV() {
        if (this.b_f1_B == 6) {
            this.z();
            return;
        }
        switch (this.b_f1_B) {
            case 3: {
                switch (this.a_f2_B) {
                    case 0: {
                        this.h_f0_B = (byte)4;
                        break;
                    }
                    case 2: {
                        this.h_f0_B = (byte)3;
                        break;
                    }
                    case 3: {
                        this.h_f0_B = (byte)4;
                    }
                }
                break;
            }
            case 4: {
                this.h_f0_B = (byte)2;
                break;
            }
            case 100: {
                this.h_f0_B = (byte)9;
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
            case 0: {
                bl2 = n2 == 4;
                break;
            }
            case 2: {
                bl2 = n2 == 4;
                break;
            }
            case 3: {
                bl2 = n2 % 3 == 1;
            }
        }
        return bl2;
    }

    protected final void b() {
        switch (this.a_f2_B) {
            case 0: {
                new t(3, this.h, ((du)this).i, this.a_f1_Ls_, 7, false, this, this.a_m21_PRS(), this.d_f0_B, ((cd)this).i);
                return;
            }
            case 2: {
                int by2 = Math.abs(this.Q[0] - this.s);
                int n2 = Math.abs(this.Q[1] - this.s);
                int n3 = Math.abs(this.Q[2] - this.t);
                int n4 = Math.abs(this.Q[3] - this.t);
                byte by3 = by2 > n2 ? this.Q[0] : this.Q[1];
                byte by4 = n3 > n4 ? this.Q[2] : this.Q[3];
                this.a_m1_PBBZRV(by3, by4, true);
                return;
            }
            case 3: {
                new t(13, this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_, 5, true, this, this.a_m21_PRS(), this.d_f0_B, 3);
            }
        }
    }

    protected final boolean a_() {
        if (this.a_f2_B == 2) {
            this.a_f2_B = (byte)3;
            this.a_m1_PBRV((byte)3);
            return true;
        }
        return false;
    }

    protected final void y() {
        if (this.j()) {
            if (ap.a == null || ap.a.b_m0_PRZ()) {
                if (ap.a != null) {
                    ap.a.g_m0_PRV();
                    ap.a = null;
                }
                a = null;
                this.g_m0_PRV();
                return;
            }
            this.a_m1_PBRV((byte)100);
        }
    }
}

