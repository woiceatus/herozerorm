/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;
import rpg.f;

final class dh
extends l {
    private byte f = 0;

    public dh(n n2) {
        super(n2, (byte)4);
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (this.f != 0) {
            return true;
        }
        if (n.g(n2, n3)) {
            if (this.b_f1_Ln_ != null) {
                this.c_m0_PRV();
            } else if (ax.f_f1_Z) {
                di.a_m2_PBBRV((byte)7, (byte)0);
            } else {
                this.a_f1_Ln_.a_f2_B = (byte)7;
                this.a_f1_Ln_.c_m0_PRV();
            }
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            return this.a_m1_PRZ();
        }
        this.c_m2_PIIRZ(n2, n3);
        return true;
    }

    protected final boolean a_m1_PRZ() {
        switch (this.a_f2_B) {
            case 0: {
                if (di.a_f4_Lg_.e_f1_Z) {
                    this.b_f1_Ln_ = new bt((n)this, ax.a_f1_Lch_.a_m0_PIRAB(18), 3, true, true);
                    break;
                }
                this.b_f1_Ln_ = new br((n)this, ax.a_f1_Lch_.a_m0_PIRAB(61), 20);
                break;
            }
            case 1: {
                n.c_f1_Z = true;
                this.b_f1_Ln_ = new bd((n)this, true);
                break;
            }
            case 2: {
                n.c_f1_Z = true;
                this.b_f1_Ln_ = new r((n)this, true);
                break;
            }
            case 3: {
                byte[] byArray = e.a_f1_Lch_.a_m0_PIRAB(31);
                dh dh2 = this;
                this.b_f1_Ln_ = new bt((n)dh2, byArray, 3, false, true);
                break;
            }
            default: {
                return false;
            }
        }
        this.a_f3_Z = true;
        return true;
    }

    final void a_m2_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 == 3) {
            if (by3 == 0) {
                if (this.a_f2_B == 3) {
                    di.a_m2_PBBRV((byte)7, (byte)1);
                    return;
                }
                this.f = (byte)2;
                this.b_f1_Ln_ = new br((n)this, ax.a_f1_Lch_.a_m0_PIRAB(17), '\u0000');
                return;
            }
            if (ax.f_f1_Z) {
                di.a_m2_PBBRV((byte)7, (byte)0);
                return;
            }
        } else if (by2 == 20 && ax.f_f1_Z) {
            di.a_m2_PBBRV((byte)7, (byte)0);
        }
    }

    protected final void a_m3_PLcm_RV(cm cm2) {
        if (this.f == 2) {
            this.f = 1;
            this.d_m0_PRV();
        } else if (this.f == 1) {
            this.f = 0;
            try {
                di.k();
                this.c_m0_PRV();
                if (ax.f_f1_Z) {
                    di.a_m2_PBBRV((byte)7, (byte)0);
                } else {
                    this.b_f1_Ln_ = new br((n)this, ax.a_f1_Lch_.a_m0_PIRAB(16), '\u0000');
                }
            }
            catch (Exception exception) {}
        }
        if (ax.f_f1_Z) {
            return;
        }
        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        this.a_m3_PLcm_IIZRI(cm2, 49, rpg.f.h, false);
    }
}

