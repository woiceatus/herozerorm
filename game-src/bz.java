/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;
import rpg.e;

final class bz
extends u {
    private final byte[] a_f0_AB = new byte[]{18, 19, 18};
    private final byte[] b_f0_AB = new byte[]{3, 3, 7};
    private do a_f1_Ldo_;
    private byte e;
    private byte f;
    private int b_f1_I;

    bz(do do_, byte by2, byte by3, int n2) {
        super(by2, do_.c_f0_B, (byte)(do_.s + rpg.d.J[do_.c_f0_B]), (byte)(do_.t + rpg.d.K[do_.c_f0_B]), true);
        this.a_f1_Ldo_ = do_;
        this.f = this.b_f0_AB[by2];
        this.b_f1_I = n2;
        this.e = by3;
        this.a_f1_S = rpg.e.a_f2_Lca_.a_m3_PBRB(this.a_f0_AB[by2]);
    }

    final void a_m0_PRV() {
        if (this.f > 0) {
            this.c(this.s, this.t);
            if (this.c == 2) {
                this.c(this.s + rpg.d.O[this.d], this.t + rpg.d.O[this.d]);
                this.c(this.s + rpg.d.N[this.d], this.t + rpg.d.N[this.d]);
            }
            byte by2 = (byte)(this.s + rpg.d.J[this.d]);
            byte by3 = (byte)(this.t + rpg.d.K[this.d]);
            if (by2 >= 0 && by2 < g.c_f3_B && by3 >= 0 && by3 < g.d_f2_B) {
                if (!di.a_f4_Lg_.b_m2_PIIRZ(by2, by3)) {
                    this.a_m0_PSSRV((short)(by2 << 4), (short)((by3 << 4) + 1));
                    this.E();
                } else {
                    this.f = 0;
                }
                this.f = (byte)(this.f - 1);
            } else {
                this.a_f3_Z = true;
            }
            di.a_f4_Lg_.c_m4_PIIRV(2, this.f);
            return;
        }
        this.a_f3_Z = true;
    }

    final void a_m1_PIIRV(int n2, int n3) {
        n2 = n2 + this.h + this.q;
        n3 = n3 + this.i + this.r - (this.b_f1_Z ? u.a_f0_B : u.b_f0_B);
        rpg.e.a_f2_Lca_.a_m2_PBBIIIRI(this.a_f0_AB[this.c], this.d, this.a_f2_I, n2, n3);
    }

    private void c(int n2, int n3) {
        if (n2 < 0 || n3 < 0 || n2 >= g.c_f3_B || n3 >= g.d_f2_B) {
            return;
        }
        du du2 = di.a_f4_Lg_.a_f4_AALdu_[n3][n2];
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h)) {
            ((cd)du2).a_m12_PLdo_BIZBBZZZRZ(this.a_f1_Ldo_, this.e, this.b_f1_I, false, this.d, (byte)2, false, true, false);
        }
    }
}

