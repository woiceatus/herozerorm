/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.e;
import rpg.g;

final class aq
extends de {
    private boolean g = false;
    private static byte f = (byte)5;
    private byte[] c = new byte[]{0, 2, 31, 29, 1, 30};

    public aq(n n2) {
        super(n2, f);
        this.a_f2_B = 0;
        this.f_m1_PRV();
        boolean bl2 = false;
        aq aq2 = this;
        if (aq2.g) {
            aq2.a_f2_B = 0;
            aq2.g = false;
            f = (byte)5;
            if (aq2.g) {
                f = (byte)(f + 1);
            }
            aq2.b_f2_B = f;
        }
        new Thread(this).start();
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            de.j();
            i.a_m0_PRLi_().c_m0_PRV();
            bq.e();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            switch (this.a_f2_B) {
                case 3: {
                    this.b_f1_Ln_ = new bt((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(70), 11, false, true);
                    break;
                }
                case 4: {
                    byte[] byArray = c.a_m2_PBABRAB((byte)50, null);
                    this.a_m1_PABZZRV(byArray, true, false);
                    break;
                }
                case 0: {
                    this.b_f1_Ln_ = new aw(this);
                    break;
                }
                case 1: {
                    this.b_f1_Ln_ = new dd((n)this, null);
                    break;
                }
                case 2: {
                    this.b_f1_Ln_ = new dl(this);
                    break;
                }
                case 5: {
                    this.b_f1_Ln_ = new bt((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(86), 13, false, true);
                }
            }
            return true;
        }
        return this.c_m2_PIIRZ(n2, n3);
    }

    final void a_m1_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (de.e && by2 == 3) {
            if (by3 == 0) {
                i i2 = i.a_m0_PRLi_();
                i2.c_m0_PRV();
                i2.b_f1_Ln_ = new aq(i2);
                return;
            }
            de.j();
            i.a_m0_PRLi_().c_m0_PRV();
            return;
        }
        if (by2 == 13) {
            if (by3 == 0) {
                byte[] byArray = c.a_m2_PBABRAB((byte)61, null);
                this.a_m1_PABZZRV(byArray, true, false);
                return;
            }
        } else if (by2 == 11) {
            if (this.a_f2_B == 3 && by3 == 0) {
                byte[] byArray = new byte[2 + (null).length + 2 + (null).length];
                short s2 = (short)(null).length;
                rpg.g.a_m5_PSABIRV(s2, byArray, 0);
                System.arraycopy(null, 0, byArray, 2, s2);
                by3 = (byte)(s2 + 2);
                s2 = (short)(null).length;
                rpg.g.a_m5_PSABIRV(s2, byArray, by3);
                by3 = (byte)(by3 + 2);
                System.arraycopy(null, 0, byArray, by3, s2);
                byArray = c.a_m2_PBABRAB((byte)60, byArray);
                this.a_m1_PABZZRV(byArray, true, false);
                return;
            }
            if (this.a_f2_B == 5 && by3 == 0) {
                byte[] byArray = c.a_m2_PBABRAB((byte)62, null);
                this.a_m1_PABZZRV(byArray, true, false);
                return;
            }
        } else if (by2 == 10) {
            byte[] byArray = de.a_f0_Ljava_lang_String_.getBytes();
            byte[] byArray2 = new byte[1 + byArray.length];
            byte[] byArray3 = byArray2;
            byArray2[0] = (byte)byArray.length;
            System.arraycopy(byArray, 0, byArray3, 1, byArray3[0]);
            byArray3 = c.a_m2_PBABRAB((byte)3, byArray3);
            this.a_m1_PABZZRV(byArray3, true, false);
        }
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        a.a_m3_PLcm_ZRV(cm2, true);
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.d - 58, rpg.e.b_f0_Lch_.a_m0_PIRAB(9), 0, 1);
        for (byte by2 = 0; by2 < f; by2 = (byte)(by2 + 1)) {
            int n2 = this.b_ + 16 + by2 * 13;
            n.a_m6_PLcm_IIIIIIRV(cm2, this.a_ + 3, n2, 113, 12, this.a_f2_B == by2 ? 0x660000 : 3550755, this.a_f2_B == by2 ? 0xBD0000 : 7027456);
            cm2.a_m2_PIRV(this.a_f2_B == by2 ? 0xFFFFFF : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n2, rpg.e.h_f0_Lch_.a_m0_PIRAB(this.c[by2]), 0, 1);
        }
    }
}

