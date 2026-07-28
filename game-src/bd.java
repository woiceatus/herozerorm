/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.c;
import rpg.e;
import rpg.f;

final class bd
extends l {
    private boolean e;

    bd(n n2, boolean bl2) {
        super(n2, (byte)7);
        this.e = bl2;
        this.b_f3_Z = true;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3) || n.g(n2, n3)) {
            if (n2 == -7) {
                try {
                    c.a_m0_PRLrpg_c_().j();
                }
                catch (Exception exception) {}
                n.c_f1_Z = false;
                this.a_f1_Ln_.a_f2_B = (byte)(this.e ? 1 : 3);
                this.a_f1_Ln_.c_m0_PRV();
            }
            return true;
        }
        if (n.h(n2, n3)) {
            switch (this.a_f2_B) {
                case -100: {
                    c.a_f4_B = bd.a_m1_PBBRB(c.a_f4_B, (byte)10);
                    break;
                }
                case 2: {
                    c.b_f0_B = bd.a_m1_PBBRB(c.b_f0_B, (byte)4);
                    break;
                }
                case 3: {
                    c.c_f0_B = bd.a_m1_PBBRB(c.c_f0_B, (byte)4);
                    break;
                }
                case 5: {
                    c.d_f0_B = bd.a_m1_PBBRB(c.d_f0_B, (byte)2);
                }
            }
            this.c(this.a_f2_B);
            return true;
        }
        if (n.i(n2, n3)) {
            switch (this.a_f2_B) {
                case -100: {
                    byte by2 = c.a_f4_B;
                    n3 = 10;
                    n2 = by2;
                    c.a_f4_B = (byte)((by2 + 1) % n3);
                    bq.a_m3_PIRV(c.a_f4_B);
                    break;
                }
                case 2: {
                    byte by3 = c.b_f0_B;
                    n3 = 4;
                    n2 = by3;
                    c.b_f0_B = (byte)((by3 + 1) % n3);
                    break;
                }
                case 3: {
                    byte by4 = c.c_f0_B;
                    n3 = 4;
                    n2 = by4;
                    c.c_f0_B = (byte)((by4 + 1) % n3);
                    break;
                }
                case 5: {
                    byte by5 = c.d_f0_B;
                    n3 = 2;
                    n2 = by5;
                    c.d_f0_B = (byte)((by5 + 1) % n3);
                }
            }
            this.c(this.a_f2_B);
            return true;
        }
        return this.c_m2_PIIRZ(n2, n3);
    }

    private static byte a_m1_PBBRB(byte by2, byte by3) {
        return (byte)((by2 + by3 - 1) % by3);
    }

    private void c(byte by2) {
        switch (by2) {
            case 0: {
                if (c.b_f1_Z = !c.b_f1_Z) break;
                bq.b_m0_PRV();
                return;
            }
            case 1: {
                if (!(c.c_f1_Z = !c.c_f1_Z)) break;
                bq.a_m2_PBRV((byte)0);
                return;
            }
            case 4: {
                c.a_f5_Z = !c.a_f5_Z;
                c.k();
                return;
            }
            case -100: {
                bq.a_m3_PIRV(c.a_f4_B);
                if (c.a_f4_B == 0) {
                    bq.b_m0_PRV();
                    return;
                }
                if (c.b_f1_Z) {
                    bq.a_f1_J = 0L;
                    bq.a_m0_PRV();
                    break;
                }
                bq.a_m1_PBZRV((byte)0, false);
                bq.a_f1_J = System.currentTimeMillis() + 3000L;
                return;
            }
            case 2: {
                c.a_m3_PBRV(c.b_f0_B);
                return;
            }
            case 6: {
                c.d_f1_Z = !c.d_f1_Z;
            }
        }
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        int n2 = a.d;
        if (this.e) {
            this.a_m7_PLcm_ZZZZRV(cm2, false, false, true, false);
            n2 = this.a_m3_PLcm_IIZRI(cm2, -1, f.b - 2, false);
        } else {
            a.a_m3_PLcm_ZRV(cm2, true);
            n2 = a.b_f0_I <= 208 ? (n2 -= 60) : (n2 -= 32);
        }
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, f.d, rpg.e.b_f0_Lch_.a_m0_PIRAB(7), 0, 1);
        int n3 = a.c - 75;
        cm2.a_m2_PIRV(0xFFFFFF);
        int n4 = 0;
        int n5 = n2;
        while (n4 < 7) {
            ac.a_m0_PLcm_IIABIRV(cm2, n3, n5, rpg.e.b_f0_Lch_.a_m0_PIRAB(n4 + 16), 0);
            ++n4;
            n5 += 15;
        }
        n3 = a.c + 24 + 25 + 8;
        this.a_m3_PLcm_IIZBRV(cm2, n3, n2, c.b_f1_Z, (byte)0);
        this.a_m3_PLcm_IIZBRV(cm2, n3, n2 + 14 + 1, c.c_f1_Z, (byte)1);
        cm2.a_m2_PIRV(this.a_f2_B == 2 ? 0xFFFFFF : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, n3, n2 + 1 + 28 + 2, rpg.e.b_f0_Lch_.a_m0_PIRAB(23 + c.b_f0_B), 0, 1);
        int n6 = n2 + 1 + 42 + 2;
        int n7 = n3;
        cm cm3 = cm2;
        bd bd2 = this;
        if (c.c_f0_B == 0) {
            int n8 = 3;
            n7 = n6;
            bd bd3 = bd2;
            cm3.a_m2_PIRV(bd3.a_f2_B == 3 ? 0xFFFFFF : 12630160);
            ac.a_m0_PLcm_IIABIRV(cm3, a.c + 24 + 25, n7 + 1, rpg.e.b_f0_Lch_.a_m0_PIRAB(38), 0);
        } else {
            cm3.a_m2_PIRV(bd2.a_f2_B == 3 ? 0xFFFFFF : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm3, n7, n6, ("" + c.c_f0_B).getBytes(), 0, 1);
        }
        this.a_m3_PLcm_IIZBRV(cm2, n3, n2 + 56 + 4, c.a_f5_Z, (byte)4);
        cm2.a_m2_PIRV(this.a_f2_B == 5 ? 0xFFFFFF : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, n3, n2 + 70 + 6, rpg.e.b_f0_Lch_.a_m0_PIRAB(35 + c.d_f0_B), 0, 1);
        cm2.a_m2_PIRV(this.a_f2_B == 6 ? 0xFFFFFF : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, n3, n2 + 84 + 6, rpg.e.b_f0_Lch_.a_m0_PIRAB(c.d_f1_Z ? 37 : 38), 0, 1);
        n.a_m0_PLcm_IRV(cm2, 2);
    }

    protected final void b(cm cm2) {
        int n2 = a.d + 4 + 15 * (this.a_f2_B - 3) + (this.e ? -24 : 14);
        if (a.b_f0_I <= 208 && !this.e) {
            n2 -= 28;
        }
        n2 = this.e ? (n2 += 17) : (n2 += 3);
        n.a_m14_PLcm_IIIIZRV(cm2, a.c + 21, n2, 69, 0xFFFFFF, false);
    }

    private void a_m3_PLcm_IIZBRV(cm cm2, int n2, int n3, boolean bl2, byte by2) {
        cm2.a_m2_PIRV(this.a_f2_B == by2 ? 0xFFFFFF : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, n2, n3 + 1, rpg.e.b_f0_Lch_.a_m0_PIRAB(bl2 ? 37 : 38), 0, 1);
    }
}

