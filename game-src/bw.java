/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.b;
import rpg.c;
import rpg.d;
import rpg.e;
import rpg.g;

final class bw
extends l {
    private static final cg b = cg.a_m4_PLjava_lang_String_RLcg_("/mtx.png");
    private static cg[] a_f0_ALcg_ = new cg[6];
    private static boolean e_f0_Z = false;
    private as a_f1_Las_ = null;
    private byte[] a_f2_AB = null;
    private static int e_f1_I;
    private static int f;
    private static int j;

    public bw(n n2) {
        super(n2, (byte)6);
        e_f0_Z = false;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            if (this.a_f2_B == 6 && n2 == -7) {
                di.d_f3_B = (byte)3;
                ax.a_m0_PRLax_().g();
                if (n2 == -7) {
                    di.a_f9_Ldo_.b_m3_PRV();
                    ax.g_f0_Z = false;
                }
            } else if ((this.a_f2_B == 7 || this.a_f2_B == 8) && n2 == -7) {
                ax.g_f0_Z = false;
                this.a_f1_Ln_.a_m3_PBBRV((byte)-1, (byte)-1);
            }
            return true;
        }
        if (n.g(n2, n3)) {
            if (this.b_f1_Ln_ != null) {
                this.c_m0_PRV();
            } else if (ax.g_f0_Z) {
                ax.g_f0_Z = false;
                di.a_m2_PBBRV((byte)7, (byte)0);
            } else {
                this.a_f1_Ln_.c_m0_PRV();
            }
            e_f1_I = 34;
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            bw bw2 = this;
            switch (bw2.a_f2_B) {
                case 0: {
                    bw2.b_f1_Ln_ = new ae((n)bw2, bw2.a_m1_PBBRAB((byte)0, (byte)0), 3, true);
                    break;
                }
                case 1: {
                    if (ax.i_f0_Z) {
                        bw2.b_f1_Ln_ = new br((n)bw2, bw2.a_m1_PBBRAB((byte)1, (byte)1), 1);
                        break;
                    }
                    bw2.b_f1_Ln_ = new ae((n)bw2, bw2.a_m1_PBBRAB((byte)0, (byte)1), 3, true);
                    break;
                }
                case 2: {
                    if (ax.j) {
                        bw2.b_f1_Ln_ = new br((n)bw2, bw2.a_m1_PBBRAB((byte)1, (byte)2), 1);
                        break;
                    }
                    bw2.b_f1_Ln_ = new ae((n)bw2, bw2.a_m1_PBBRAB((byte)0, (byte)2), 3, true);
                    break;
                }
                case 3: {
                    if (ax.h_f0_Z) {
                        bw2.b_f1_Ln_ = new br((n)bw2, bw2.a_m1_PBBRAB((byte)1, (byte)3), 1);
                        break;
                    }
                    bw2.b_f1_Ln_ = new ae((n)bw2, bw2.a_m1_PBBRAB((byte)0, (byte)3), 3, true);
                    break;
                }
                case 4: {
                    if (di.a_f9_Ldo_ == null || di.a_f9_Ldo_.a_m28_PRB() >= 99) {
                        bw2.b_f1_Ln_ = new br((n)bw2, d.A, 1);
                        break;
                    }
                    bw2.b_f1_Ln_ = new ae((n)bw2, bw2.a_m1_PBBRAB((byte)0, (byte)4), 3, true);
                    break;
                }
                case 5: {
                    bw2.b_f1_Ln_ = new da((n)bw2, true);
                    break;
                }
                default: {
                    return false;
                }
            }
            bw2.a_f3_Z = true;
            return true;
        }
        if (n3 == 50 || n2 == 1) {
            if (this.a_f2_B > 0) {
                this.a_f2_B = (byte)(this.a_f2_B - 1);
            }
            if (e_f1_I >= 34 - (6 - f) * 42 && this.a_f2_B <= 6 - f) {
                e_f1_I = -this.a_f2_B * 42 + 34;
            }
            return true;
        }
        if (n3 == 56 || n2 == 6) {
            if (this.a_f2_B < 5) {
                this.a_f2_B = (byte)(this.a_f2_B + 1);
            }
            if (e_f1_I > 34 - (6 - f) * 42) {
                e_f1_I = -this.a_f2_B * 42 + 34;
            }
            return true;
        }
        return true;
    }

    private byte[] a_m1_PBBRAB(byte by2, byte by3) {
        if (by2 == 2) {
            return d.q;
        }
        if (by2 == 0) {
            byte[][] byArrayArray = new byte[2][];
            if (this.a_f2_B == 7) {
                by3 = 0;
            } else if (this.a_f2_B == 8) {
                by3 = (byte)5;
            }
            byArrayArray[0] = d.e[by3];
            byte[] byArray = c.a_f9_Lds_.a_m0_PIRAB(by3 + 1);
            byArrayArray[1] = ("" + byArray[0]).getBytes();
            if (this.a_f2_B == 5 || this.a_f2_B == 8) {
                return d.z;
            }
            if (this.a_f2_B == 7) {
                return d.B;
            }
            return bw.a_m6_PAABAABRAB(d.c, byArrayArray);
        }
        if (by2 == 3) {
            if (this.a_f2_B == 5) {
                return this.a_f2_AB;
            }
            if (this.a_f2_B == 4) {
                byte[][] byArrayArray = new byte[1][];
                byte[][] byArrayArray2 = byArrayArray;
                byArrayArray[0] = ("" + (di.a_f9_Ldo_.a_m28_PRB() + 5 > 99 ? 99 : di.a_f9_Ldo_.a_m28_PRB() + 5)).getBytes();
                byte[] byArray = bw.a_m6_PAABAABRAB(d.h_f1_AAB, byArrayArray2);
                return byArray;
            }
            if (this.a_f2_B == 7) {
                by3 = 0;
            } else if (this.a_f2_B == 8) {
                return this.a_f2_AB;
            }
            byte[][] byArrayArray = new byte[1][];
            byte[][] byArrayArray3 = byArrayArray;
            byArrayArray[0] = d.e[by3];
            byte[] byArray = bw.a_m6_PAABAABRAB(d.d, byArrayArray3);
            return byArray;
        }
        if (by2 == 1) {
            byte[][] byArrayArray = new byte[1][];
            byte[][] byArrayArray4 = byArrayArray;
            byArrayArray[0] = d.e[by3];
            return bw.a_m6_PAABAABRAB(d.b, byArrayArray4);
        }
        return null;
    }

    public final void a_m2_PABILas_RV(byte[] byArray, int n2, as as2) {
        this.c_m0_PRV();
        if (n2 == 0) {
            this.b_f1_Ln_ = new br((n)this, byArray, 1);
            return;
        }
        if (n2 == 1) {
            this.a_f1_Las_ = as2;
            this.a_f2_AB = byArray;
            this.b_f1_Ln_ = new ae((n)this, this.a_m1_PBBRAB((byte)0, (byte)5), 3, true);
        }
    }

    final void a_m3_PBBRV(byte by2, byte by3) {
        block19: {
            block16: {
                block18: {
                    block17: {
                        this.c_m0_PRV();
                        if (by2 != 3 || by3 != 0) break block16;
                        by2 = this.a_f2_B;
                        if (this.a_f2_B == 7) {
                            by2 = 0;
                        } else if (this.a_f2_B == 8) {
                            by2 = (byte)5;
                        }
                        if (!c.a_f9_Lds_.a_m1_PIRZ(by2 + 1)) break block17;
                        this.b_f1_Ln_ = new br((n)this, this.a_m1_PBBRAB((byte)3, this.a_f2_B), 1);
                        switch (this.a_f2_B) {
                            case 0: {
                                di.e_f1_I += 20000;
                                di.l();
                                break block18;
                            }
                            case 1: {
                                ax.i_f0_Z = true;
                                rpg.b.a_m5_PRZ();
                                break block18;
                            }
                            case 2: {
                                ax.j = true;
                                rpg.b.a_m5_PRZ();
                                break block18;
                            }
                            case 3: {
                                ax.h_f0_Z = true;
                                rpg.b.a_m5_PRZ();
                                break block18;
                            }
                            case 5: {
                                di.a_m11_PBRLbj_(this.a_f1_Las_.a_f1_B).a_m5_PLas_IRI(this.a_f1_Las_, 1);
                                di.l();
                                break block18;
                            }
                            case 4: {
                                di.a_f9_Ldo_.g_m1_PRV();
                                di.k();
                                break block18;
                            }
                            case 6: {
                                di.d_f3_B = (byte)3;
                                ax.a_m0_PRLax_().g();
                                di.a_f9_Ldo_.d_m0_PRV();
                                break block18;
                            }
                            case 7: {
                                di.e_f1_I += 20000;
                                di.l();
                                break block18;
                            }
                            case 8: {
                                di.a_m11_PBRLbj_(this.a_f1_Las_.a_f1_B).a_m5_PLas_IRI(this.a_f1_Las_, 1);
                                di.l();
                            }
                        }
                        break block19;
                    }
                    this.b_f1_Ln_ = new br((n)this, this.a_m1_PBBRAB((byte)2, this.a_f2_B), 1);
                }
                return;
            }
            if (by2 == 1 && (this.a_f2_B == 7 || this.a_f2_B == 8)) {
                this.a_f1_Ln_.a_m3_PBBRV((byte)-2, (byte)-2);
                return;
            }
            if (this.a_f2_B == 6 && by2 == 1) {
                this.b_f1_Ln_ = new ae((n)this, this.a_m1_PBBRAB((byte)0, (byte)6), 3, true);
            }
        }
    }

    public static void a_m4_PRV() {
        di.d_f3_B = (byte)7;
        ax.a_m0_PRLax_().g();
        di.a_f9_Ldo_.d_m0_PRV();
        di.k();
    }

    protected final void a_m5_PLcm_RV(cm cm2) {
        if (this.a_f2_B < 6) {
            int n2;
            int n3;
            cm2.a_m2_PIRV(0);
            cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            cm2.b_m1_PIRV(255);
            cm2.a_m4_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            if (e.k_f1_Lcg_ != null) {
                n3 = e.k_f1_Lcg_.a_m5_PRI();
                j = e.k_f1_Lcg_.b();
                for (n2 = 0; n2 < a.a_f0_I; n2 += n3) {
                    cm2.a_m1_PLcg_IIIRV(e.k_f1_Lcg_, n2, 1, 20);
                    cm2.a_m1_PLcg_IIIRV(e.k_f1_Lcg_, n2, a.b_f0_I - 1, 36);
                }
            }
            n3 = e_f1_I;
            n2 = n3 + 21;
            int n4 = a.a_f0_I - 48 - 8;
            cm2.b_m0_PIIIIRV(0, 34, a.a_f0_I, a.b_f0_I - 68);
            for (int i2 = 0; i2 < 6; ++i2) {
                int n5;
                cm2.a_m1_PLcg_IIIRV(b, 0, n3, 20);
                cm2.a_m1_PLcg_IIIRV(a_f0_ALcg_[i2], 24, n2, 3);
                if (i2 == this.a_f2_B) {
                    cm2.b_m1_PIRV(40);
                    cm2.a_m2_PIRV(0xFFFF00);
                    cm2.a_m4_PIIIIRV(0, n3, a.a_f0_I, 42);
                    cm2.b_m1_PIRV(255);
                }
                cm2.a_m2_PIRV(0xFFFFFF);
                ac.a_m4_PLcm_IIIABIIIRV(cm2, 48, n3 + 6, n4, d.f[i2], 0, d.f[i2].length, 4);
                int n6 = i2;
                switch (n6) {
                    case 1: {
                        if (ax.i_f0_Z) {
                            n5 = 1;
                            break;
                        }
                        n5 = 0;
                        break;
                    }
                    case 2: {
                        if (ax.j) {
                            n5 = 1;
                            break;
                        }
                        n5 = 0;
                        break;
                    }
                    case 3: {
                        if (ax.h_f0_Z) {
                            n5 = 1;
                            break;
                        }
                        n5 = 0;
                        break;
                    }
                    case 5: {
                        n5 = 0;
                        break;
                    }
                    case 4: {
                        if (di.a_f9_Ldo_ != null && di.a_f9_Ldo_.a_m28_PRB() < 99) {
                            n5 = 0;
                            break;
                        }
                        n5 = 1;
                        break;
                    }
                    default: {
                        n5 = n6 = 0;
                    }
                }
                if (n5 == 0) {
                    cm2.a_m2_PIRV(65535);
                    Object object = c.a_f9_Lds_.a_m0_PIRAB(i2 + 1);
                    object = "" + object[0];
                    byte[][] byArrayArray = new byte[1][];
                    byte[][] byArrayArray2 = byArrayArray;
                    byArrayArray[0] = object.getBytes();
                    object = bw.a_m6_PAABAABRAB(d.g_f1_AAB, byArrayArray2);
                    ac.a_m4_PLcm_IIIABIIIRV(cm2, a.a_f0_I - 2 - ac.b(object, 0, n4), n3 + 42 - ac.a_f3_I - 4, n4, object, 0, ((byte[])object).length, 4);
                } else {
                    cm2.a_m2_PIRV(0x888888);
                    ac.a_m4_PLcm_IIIABIIIRV(cm2, a.a_f0_I - 2 - ac.b(d.r, 0, n4), n3 + 42 - ac.a_f3_I - 4, n4, d.r, 0, d.r.length, 4);
                }
                n3 += 42;
                n2 += 42;
            }
            if (f != 6) {
                cm2.a_m2_PIRV(16765952);
                if (e_f1_I == 34) {
                    cm2.b_m0_PIIIIRV(a.c - 8, a.b_f0_I - j, 16, 8);
                    cm2.a_m7_PIIIIIIRV(a.c - 8, a.b_f0_I - j, a.c + 8, a.b_f0_I - j, a.c, a.b_f0_I - j + 8);
                } else if (e_f1_I < 34 && e_f1_I > 34 - (6 - f) * 42) {
                    cm2.b_m0_PIIIIRV(a.c - 8, j - 8, 16, 8);
                    cm2.a_m7_PIIIIIIRV(a.c - 8, j, a.c + 8, j, a.c, j - 8);
                    cm2.b_m0_PIIIIRV(a.c - 8, a.b_f0_I - j, 16, 8);
                    cm2.a_m7_PIIIIIIRV(a.c - 8, a.b_f0_I - j, a.c + 8, a.b_f0_I - j, a.c, a.b_f0_I - j + 8);
                } else if (e_f1_I == 34 - (6 - f) * 42) {
                    cm2.b_m0_PIIIIRV(a.c - 8, j - 8, 16, 8);
                    cm2.a_m7_PIIIIIIRV(a.c - 8, j, a.c + 8, j, a.c, j - 8);
                }
                cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            }
        } else {
            a.a_f1_Z = true;
        }
        n.a_m0_PLcm_IRV(cm2, 3);
    }

    private static byte[] a_m6_PAABAABRAB(byte[][] byArray, byte[][] byArray2) {
        if (byArray == null || byArray2 == null || byArray.length != byArray2.length + 1) {
            return null;
        }
        byte[] byArray3 = byArray[0];
        for (int i2 = 0; i2 < byArray2.length; ++i2) {
            if (byArray2[i2] != null) {
                byArray3 = g.a_m0_PABABRAB(byArray3, byArray2[i2]);
            }
            if (byArray[i2 + 1] == null) continue;
            byArray3 = g.a_m0_PABABRAB(byArray3, byArray[i2 + 1]);
        }
        return byArray3;
    }

    static {
        for (int i2 = 0; i2 < 6; ++i2) {
            bw.a_f0_ALcg_[i2] = cg.a_m4_PLjava_lang_String_RLcg_("/mtx" + i2 + ".png");
        }
        e_f1_I = 34;
        f = (a.b_f0_I - 68) / 42;
    }
}

