/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;

final class t
extends u
implements dy {
    private s a_f0_Ls_;
    private int b;
    private byte e_f0_B;
    private cd a_f1_Lcd_ = null;
    private int c;
    private byte f;
    private byte g;
    private int d;
    private int e_f1_I;

    t(byte by2, short s2, short s3, s s4, byte by3, boolean bl2, cd cd2, int n2, byte by4, byte by5) {
        super(by2, (byte)1, s2, s3, bl2);
        this.a_f1_Lcd_ = cd2;
        this.c = n2;
        this.f = by4;
        this.g = by5;
        this.a_f0_Ls_ = s4;
        this.e_f0_B = by3;
        this.b = 0;
        this.a_f1_S = this.a_f0_Ls_.a_m3_PBRB(this.e_f0_B);
        di.a_f4_Lg_.a_m3_PLdu_RV(this);
        switch (((u)this).c) {
            case 4: {
                this.g = (byte)6;
                this.d = (100 - this.h) / this.g;
                this.e_f1_I = (150 - this.i) / this.g;
                return;
            }
            case 5: {
                this.g = (byte)6;
                this.d = (160 - this.h) / this.g;
                this.e_f1_I = (150 - this.i) / this.g;
                return;
            }
            case 6: {
                this.g = (byte)3;
                this.d = (230 - this.h) / this.g;
                this.e_f1_I = (150 - this.i) / this.g;
            }
        }
    }

    final void a_m0_PRV() {
        if (this.a_f2_I > this.a_f1_S) {
            this.a_f2_I = -1;
        }
        if (this.b++ >= this.a_f1_S) {
            this.a_f3_Z = true;
        }
        block0 : switch (((u)this).c) {
            case 1: {
                al[] alArray = cd.a_m24_PRALal_();
                for (int i2 = 0; i2 < 2; ++i2) {
                    if (alArray[i2] == null || alArray[i2].h_m1_PRZ() || alArray[i2].s != this.s || alArray[i2].t != this.t || alArray[i2].h_m1_PRZ()) continue;
                    alArray[i2].f_m1_PIRV(50);
                    alArray[i2].c_m4_PIIRV(60, 30);
                }
                if (!this.a_f3_Z) break;
                this.b = 0;
                this.a_f2_I = -1;
                switch (this.e_f0_B) {
                    case 16: {
                        this.a_f3_Z = false;
                        this.e_f0_B = (byte)((al.a_f1_Ljava_util_Random_.nextInt() & 1) == 0 ? 17 : 18);
                        this.a_f1_S = (byte)(Math.abs(al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 8 + 35);
                        return;
                    }
                    case 19: {
                        this.a_f3_Z = true;
                        return;
                    }
                }
                this.a_f3_Z = false;
                this.e_f0_B = (byte)19;
                this.a_f1_S = this.a_f0_Ls_.a_m3_PBRB(this.e_f0_B);
                return;
            }
            case 3: {
                if (this.g > 0) {
                    this.g = (byte)(this.g - 1);
                    this.a_f3_Z = false;
                    byte by2 = (byte)(this.s + rpg.d.J[this.f]);
                    byte by3 = (byte)(this.t + rpg.d.K[this.f]);
                    if (!g.a_m5_PIIRZ(by2, by3) && !di.a_f4_Lg_.b_m2_PIIRZ(by2, by3)) {
                        this.a_m0_PSSRV((short)(by2 << 4), (short)(by3 << 4));
                        this.E();
                        boolean[] blArray = new boolean[]{false, false};
                        al[] alArray = cd.a_m24_PRALal_();
                        for (int i3 = 0; i3 < 2; ++i3) {
                            for (int i4 = 0; i4 < this.u; ++i4) {
                                if (alArray[i3] == null || blArray[i3] || alArray[i3].t != this.t || alArray[i3].s != this.s + i4) continue;
                                blArray[i3] = true;
                                this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i3], this.c, this.f);
                                this.a_f3_Z = true;
                            }
                        }
                        break;
                    }
                    this.a_f3_Z = true;
                    return;
                }
                this.a_f3_Z = true;
                return;
            }
            case 14: {
                if (this.b == 1) {
                    boolean[] blArray = new boolean[]{false, false};
                    al[] alArray = cd.a_m24_PRALal_();
                    for (int i5 = 0; i5 < 2; ++i5) {
                        for (int i6 = 0; i6 < this.u; ++i6) {
                            if (alArray[i5] == null || blArray[i5] || alArray[i5].t != this.t || alArray[i5].s != this.s + i6) continue;
                            blArray[i5] = true;
                            this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i5], this.c, this.f);
                        }
                    }
                    return;
                }
                if (this.b != 2 || this.g <= 1) break;
                this.g = (byte)(this.g - 1);
                byte by4 = (byte)(this.s + rpg.d.J[this.f]);
                byte by5 = (byte)(this.t + rpg.d.K[this.f]);
                if (!g.a_m5_PIIRZ(by4, by5) && !di.a_f4_Lg_.b_m2_PIIRZ(by4, by5)) {
                    new t(((u)this).c, (short)(by4 << 4), (short)(by5 << 4), this.a_f0_Ls_, this.e_f0_B, this.b_f1_Z, this.a_f1_Lcd_, this.c, this.f, this.g);
                }
                return;
            }
            case 13: {
                if (this.b != this.g) break;
                boolean[] blArray = new boolean[]{false, false};
                al[] alArray = cd.a_m24_PRALal_();
                for (int i7 = 0; i7 < 2; ++i7) {
                    for (int i8 = 0; i8 < this.u; ++i8) {
                        if (alArray[i7] == null || blArray[i7] || alArray[i7].s != this.s + i8 || alArray[i7].t != this.t) continue;
                        blArray[i7] = true;
                        this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i7], this.c, this.f);
                    }
                }
                return;
            }
            case 9: {
                if (this.b != this.g) break;
                byte by6 = (byte)(this.s - 1);
                byte by7 = (byte)(this.s + 3);
                byte by8 = (byte)(this.t - 3);
                byte by9 = (byte)(this.t + 2);
                al[] alArray = cd.a_m24_PRALal_();
                for (int i9 = 0; i9 < 2; ++i9) {
                    if (alArray[i9] == null || alArray[i9].s < by6 || alArray[i9].s > by7 || alArray[i9].t < by8 || alArray[i9].t > by9) continue;
                    this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i9], this.c, this.f);
                    break block0;
                }
                return;
            }
            case 4: 
            case 5: 
            case 6: {
                if (this.g > 0) {
                    this.a_f3_Z = false;
                    this.g = (byte)(this.g - 1);
                    this.h = (short)(this.h + this.d);
                    this.i = (short)(this.i + this.e_f1_I);
                    this.a_m0_PSSRV(this.h, this.i);
                    this.E();
                    return;
                }
                this.a_f3_Z = true;
                new t(7, this.h, (short)(this.i + 16), this.a_f0_Ls_, 8, true, this.a_f1_Lcd_, this.c, 1, 10);
                new t(7, this.h, this.i, this.a_f0_Ls_, 9, true, this.a_f1_Lcd_, this.c, 2, 10);
                return;
            }
            case 7: {
                if (this.g > 0) {
                    this.g = (byte)(this.g - 1);
                    this.a_f3_Z = false;
                    byte by10 = (byte)(this.t + rpg.d.K[this.f]);
                    if (by10 >= 0 && by10 < g.d_f2_B) {
                        this.a_m0_PSSRV(this.h, (short)(by10 << 4));
                        this.E();
                        al[] alArray = cd.a_m24_PRALal_();
                        for (int i10 = 0; i10 < 2; ++i10) {
                            if (alArray[i10] == null || alArray[i10].s < this.s - 2 || alArray[i10].s >= this.s + 2 || alArray[i10].t != this.t) continue;
                            this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i10], this.c, this.f);
                            this.a_f3_Z = true;
                            new t(0, alArray[i10].h, alArray[i10].i, this.a_f0_Ls_, 10, true, null, 0, 0, 0);
                        }
                        break;
                    }
                    this.a_f3_Z = true;
                    return;
                }
                this.a_f3_Z = true;
            }
        }
    }

    final void a_m1_PIIRV(int n2, int n3) {
        switch (((u)this).c) {
            case 2: {
                n3 = n3 + this.i + this.r;
                while (n3 <= rpg.a.b_f0_I) {
                    this.a_f0_Ls_.a_m2_PBBIIIRI(this.e_f0_B, (byte)1, this.a_f2_I, n2 + this.h + this.q, n3 += 16);
                }
                break;
            }
            case 8: {
                n3 = n3 + this.i + this.r - 8;
                while (n3 > 0) {
                    this.a_f0_Ls_.a_m2_PBBIIIRI(this.e_f0_B, (byte)1, this.a_f2_I, n2 + this.h + this.q, n3 -= 16);
                }
                break;
            }
            default: {
                this.a_f0_Ls_.a_m2_PBBIIIRI(this.e_f0_B, ((u)this).d, this.a_f2_I % this.a_f1_S, n2 + this.h + this.q + (this.u - 1 << 3), n3 + this.i + this.r);
            }
        }
    }
}

