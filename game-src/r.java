/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.f;

final class r
extends b {
    private boolean e_f0_Z;
    private byte f_f0_B;
    private byte[] a_f0_AB;
    private byte[] b;
    private short[] a_f1_AS;
    private int e_f1_I;
    private boolean f_f1_Z;

    r(n n2, boolean bl2) {
        super(n2, (byte)7);
        this.e_f0_Z = bl2;
        this.a_f2_B = 0;
        this.f_f0_B = 0;
        this.e_f1_I = this.e_f0_Z || a.a_f0_I < 176 ? f.g : (a.a_f0_I < 240 ? 120 : f.g);
        this.c(this.f_f0_B);
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3) || n.g(n2, n3)) {
            if (n2 == -7) {
                this.a_f1_Ln_.a_f2_B = (byte)(this.e_f0_Z ? 2 : 4);
                this.a_f1_Ln_.c_m0_PRV();
                n.c_f1_Z = false;
            }
            return true;
        }
        if (n2 == 2 || n3 == 52) {
            this.f_f0_B = (byte)((this.f_f0_B + 7 - 1) % 7);
            this.f_f1_Z = true;
            return true;
        }
        if (n2 == 5 || n3 == 54) {
            this.f_f0_B = (byte)((this.f_f0_B + 1) % 7);
            this.f_f1_Z = true;
            return true;
        }
        return this.c_m2_PIIRZ(n2, n3);
    }

    private void c(byte by2) {
        this.f_f1_Z = false;
        this.a_f0_AB = e.e_f1_Lch_.a_m0_PIRAB(by2);
        this.b = e.e_f1_Lch_.a_m0_PIRAB(by2 + 7);
        short[] sArray = new short[20];
        int n2 = 0;
        for (int i2 = 0; i2 < this.b.length; i2 += ac.a_m5_PABIIIRI(this.b, i2, this.e_f1_I, 5)) {
            sArray[n2++] = (short)i2;
        }
        this.a_f1_AS = new short[n2];
        System.arraycopy(sArray, 0, this.a_f1_AS, 0, this.a_f1_AS.length);
        this.b_f2_B = (byte)this.a_f1_AS.length;
        this.a_f2_B = 0;
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        short s2;
        int n2;
        if (this.f_f1_Z) {
            this.c(this.f_f0_B);
        }
        int n3 = a.d;
        if (this.e_f0_Z) {
            this.a_m7_PLcm_ZZZZRV(cm2, false, false, true, false);
            if (this.f_f0_B == 9) {
                cm2.a_m2_PIRV(4217367);
            } else {
                cm2.a_m2_PIRV(0);
            }
            n2 = this.b_ + 14;
            n.c_m3_PLcm_IIIIRV(cm2, this.a_ + 2, n2, d.e_ - 4, 14);
            cm2.e(this.a_, n2 += 15, this.a_ + d.e_ - 1, n2);
            n.c_m3_PLcm_IIIIRV(cm2, this.a_ + 2, n2 += 2, d.e_ - 4, 134);
            n3 -= 43;
        } else {
            a.a_m3_PLcm_ZRV(cm2, true);
            n3 -= 36;
            if (this.f_f0_B == 9) {
                cm2.a_m2_PIRV(4217367);
                n.c_m3_PLcm_IIIIRV(cm2, a.a_f0_I - this.e_f1_I - 8 >> 1, n3 + 27 - 2, this.e_f1_I + 8, 94);
            }
        }
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, f.d, e.b_f0_Lch_.a_m0_PIRAB(8), 0, 1);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, f.d + 15, this.a_f0_AB, 0, 1);
        n.a_m14_PLcm_IIIIZRV(cm2, a.c - (f.f >> 1), f.d + 20, f.f, 0xFFFFFF, false);
        cm2.a_m2_PIRV(0xCCCCCC);
        n2 = this.a_f1_AS[this.a_f2_B];
        short s3 = s2 = this.a_f2_B == this.b_f2_B - 1 ? (short)this.b.length : this.a_f1_AS[this.a_f2_B + 1];
        if (this.b[0] == 33) {
            if (n2 == 0) {
                n2 = 1;
            }
            ac.a_f0_Z = false;
        }
        int n4 = a.a_f0_I - this.e_f1_I >> 1;
        ac.a_m3_PLcm_IIIIABIIIRV(cm2, n4, n3 + 27, this.e_f1_I, 1, this.b, n2, 0, s2 - n2);
        ac.a_f0_Z = true;
        this.a_m0_PLcm_IIIIIRV(cm2, this.a_ + d.e_ - 10, n3 + 17, this.a_f2_B + 1, this.b_f2_B, 8);
        this.e_m2_PLcm_IIIIRV(cm2, n4 + this.e_f1_I + 2, n3 + 25, this.a_f2_B, this.b_f2_B);
        n.a_m0_PLcm_IRV(cm2, 2);
    }
}

