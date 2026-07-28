/*
 * Decompiled with CFR 0.152.
 */
import rpg.b;
import rpg.d;
import rpg.e;
import rpg.f;
import rpg.g;

final class cn
extends l {
    public cn(n n2) {
        super(n2, (byte)2);
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            if (this.b_f1_Ln_ != null) {
                this.c_m0_PRV();
            } else {
                this.a_f1_Ln_.a_f2_B = (byte)-2;
                this.a_f1_Ln_.c_m0_PRV();
            }
            return true;
        }
        if (n2 == 8 || n3 == 53 || n3 == -6) {
            cn cn2 = this;
            switch (cn2.a_f2_B) {
                case 0: {
                    cn2.b_f1_Ln_ = new cc(cn2);
                    break;
                }
                case 1: {
                    if (!di.e_f0_Z) {
                        byte[] byArray = e.a_f1_Lch_.a_m0_PIRAB(28);
                        if (di.i_f0_Z) {
                            byArray = g.a_m0_PABABRAB(d.t, byArray);
                            di.i_f0_Z = false;
                            b.a_m5_PRZ();
                        }
                        cn2.b_f1_Ln_ = new br((n)cn2, byArray, '\u0000');
                        ((br)cn2.b_f1_Ln_).e = true;
                        break;
                    }
                    di.k();
                    cn2.b_f1_Ln_ = new aw(cn2);
                    break;
                }
                default: {
                    return false;
                }
            }
            cn2.a_f3_Z = true;
            return true;
        }
        this.c_m2_PIIRZ(n2, n3);
        return true;
    }

    final void a_m1_PBBRV(byte by2, byte by3) {
        if (by2 == 3 && by3 == 0) {
            di.e_f0_Z = true;
            b.a_m5_PRZ();
            di.k();
            this.c_m0_PRV();
            this.b_f1_Ln_ = new aw(this);
            return;
        }
        this.c_m0_PRV();
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        this.a_m3_PLcm_IIZRI(cm2, 71, f.h, false);
    }
}

