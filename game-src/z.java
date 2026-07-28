/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.e;

final class z
extends at {
    private int d;

    z(byte by2) {
        super(by2);
        this.a_f1_I = 4;
    }

    z(byte by2, byte by3) {
        super(by2);
        if (this.a_f0_B == -6) {
            this.a_f1_I = 2;
            this.c = -1;
            this.d = by3;
            return;
        }
        this.a_f1_I = 4;
        this.d = 0;
    }

    z(byte by2, byte by3, int n2) {
        this(by2, by3);
        if (this.a_f0_B == -6) {
            this.c = n2;
            return;
        }
        this.d = n2;
    }

    final void a(int n2, int n3) {
        cm cm2 = a.a_f3_Lcm_;
        switch (this.a_f0_B) {
            case -1: {
                cm2.a_m1_PLcg_IIIRV(e.i_f1_ALcg_[this.b_f0_I < 2 ? 3 : 2], n2, n3 - 35 - this.b_f0_I * 3, 17);
                return;
            }
            case -2: {
                cm2.a_m1_PLcg_IIIRV(e.i_f1_ALcg_[this.b_f0_I < 2 ? 1 : 0], n2, n3 - 35 - this.b_f0_I * 3, 17);
                return;
            }
            case -4: {
                n.b_m6_PLcm_IIIIIRV(cm2, this.d, n2, n3 - 35 - (this.b_f0_I << 2), 1, this.b_f0_I < 2 ? 8 : 6);
                return;
            }
            case -5: {
                n.b_m6_PLcm_IIIIIRV(cm2, this.d, n2, n3 - 35 - (this.b_f0_I << 2), 1, this.b_f0_I < 2 ? 7 : 5);
                return;
            }
            case -3: {
                if (e.j_f1_ALcg_ == null) {
                    for (int i2 = 0; i2 < 2; ++i2) {
                        e.j_f1_ALcg_[i2] = cg.a_m4_PLjava_lang_String_RLcg_("/block" + i2 + ".png");
                    }
                }
                cm2.a_m1_PLcg_IIIRV(e.j_f1_ALcg_[this.b_f0_I < 2 ? 0 : 1], n2, n3 - 35 - this.b_f0_I * 3, 17);
                return;
            }
            case -6: {
                if (this.d < 8 || this.d == 10) {
                    cm2.a_m1_PLcg_IIIRV(e.a_f5_ALcg_[0], n2, n3 - 36, 3);
                }
                cm2.a_m1_PLcg_IIIRV(e.a_f5_ALcg_[this.d], n2, n3 - 38 + this.b_f0_I % 2, 3);
            }
        }
    }
}

