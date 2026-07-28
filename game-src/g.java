/*
 * Decompiled with CFR 0.152.
 */
import java.io.DataInputStream;
import java.io.FilterInputStream;
import java.util.Vector;
import rpg.a;
import rpg.c;
import rpg.d;
import rpg.e;

public final class g
implements d {
    private byte[] b_f0_AB;
    byte[] a_f0_AB;
    private byte[] c_f0_AB = new byte[2];
    private cg[] a_f1_ALcg_;
    private int f_f0_I;
    public byte a_f2_B = (byte)-1;
    private du a_f3_Ldu_;
    private du b_f1_Ldu_;
    private du c_f1_Ldu_;
    private du d_f0_Ldu_;
    private final byte[] d_f1_AB = new byte[]{33, 55, 49, 13, 20};
    du[][] a_f4_AALdu_;
    public dx[] a_f5_ALdx_;
    public dx[] b_f2_ALdx_;
    public dx[] c_f2_ALdx_;
    bl[] a_f6_ALbl_;
    private Vector a_f7_Ljava_util_Vector_;
    public byte b_f3_B;
    private byte[][] a_f8_AAB;
    private byte[] Q;
    static int a_f9_I;
    public static byte c_f3_B;
    public static byte d_f2_B;
    public short a_f10_S;
    public short b_f4_S;
    int b_f5_I;
    int c_f4_I;
    private static int j;
    public static boolean a_f11_Z;
    public static boolean b_f6_Z;
    private static byte e_f0_B;
    private cg[] b_f7_ALcg_ = new cg[3];
    private static int[] a_f12_AI;
    public static boolean c_f5_Z;
    public boolean d_f3_Z = false;
    public boolean e_f1_Z = true;
    public static boolean f_f1_Z;
    private static boolean g;
    private cg[] c_f6_ALcg_;
    private byte[] R;
    private static cg b_f8_Lcg_;
    public static cg a_f13_Lcg_;
    private int k = -1;
    private int l = -1;
    private static byte[][] i;
    public int d_f4_I;
    public int e_f2_I;
    private Vector b_f9_Ljava_util_Vector_ = new Vector();
    private static byte f_f2_B;
    private static final int[] b_f10_AI;

    public static void a_m0_PIIRV(int n2, int n3) {
        if (b_f8_Lcg_ == null) {
            b_f8_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/chest_opened.png");
        }
        int n4 = b_f8_Lcg_.a_m5_PRI() / 2;
        int n5 = b_f8_Lcg_.b();
        a.a_f3_Lcm_.a_m1_PLcg_IIIRV(b_f8_Lcg_, n2 - n4, n3 - n5, 0);
    }

    public g(byte by2) {
        this.c_m1_PIRV(-1);
        this.b_f3_B = by2;
        c_f5_Z = false;
        this.d_f3_Z = false;
        this.e_f1_Z = true;
        this.a_f3_Ldu_ = null;
        this.b_f1_Ldu_ = null;
        this.c_f1_Ldu_ = null;
        this.d_f0_Ldu_ = null;
        e_f0_B = (byte)-1;
        g g2 = this;
        this.a_f7_Ljava_util_Vector_ = null;
        g2.a_f7_Ljava_util_Vector_ = new Vector(3);
        this.a_m2_PRV();
    }

    public final int a_m1_PIIRI(int n2, int n3) {
        for (int i2 = 0; i2 < i.length; ++i2) {
            if (this.b_f3_B == i[i2][0]) {
                for (int i3 = 1; i3 < i[i2].length; i3 += 3) {
                    if (n2 != i[i2][i3] || n3 != i[i2][i3 + 1]) continue;
                    return i[i2][i3 + 2];
                }
                continue;
            }
            if (this.b_f3_B < i[i2][0]) break;
        }
        if (this.b_f3_B == 89) {
            if (n2 == 16 && n3 == 10) {
                return 19;
            }
        } else if (this.b_f3_B == 90) {
            if (n2 == 9 && n3 == 16) {
                return 20;
            }
        } else if (this.b_f3_B == 92 && n2 == 10 && n3 == 13) {
            return 21;
        }
        return -1;
    }

    public final void a_m2_PRV() {
        block11: {
            try {
                byte by2;
                int n2;
                boolean bl2 = false;
                int n3 = this.b_f3_B;
                if (n3 < 0) {
                    n3 += 256;
                }
                Object object = "/mmi/" + n3;
                object = new DataInputStream(object.getClass().getResourceAsStream((String)object));
                byte[] byArray = new byte[((FilterInputStream)object).available()];
                ((DataInputStream)object).read(byArray);
                ((FilterInputStream)object).close();
                for (n2 = 35; n2 > 0 && (by2 = di.a_m9_PIRB(n2)) != 1; --n2) {
                    if (by2 != 2) continue;
                    if (eb.f_f2_Z) {
                        n2 = 10;
                        bl2 = true;
                        break;
                    }
                    n2 = 0;
                    break;
                }
                if (n2 < 36 && n2 > 0) {
                    if (bl2 && this.b_f3_B == 8) {
                        this.k = 0;
                        this.l = 0;
                        break block11;
                    }
                    if (bl2 && this.b_f3_B == 10) {
                        this.k = 5;
                        this.l = 10;
                        break block11;
                    }
                    this.k = byArray[--n2 << 1];
                    this.l = byArray[(n2 << 1) + 1];
                    if (this.k != -1 || this.l != -1) {
                        if (this.k < 0) {
                            this.k += 256;
                        }
                        if (this.l < 0) {
                            this.l += 256;
                        }
                    }
                }
                return;
            }
            catch (Exception exception) {
                Exception exception2 = exception;
                exception.printStackTrace();
            }
        }
    }

    public final void a_m3_PLdu_RV(du du2) {
        this.f_m0_PLdu_RV(du2);
        this.c_m0_PLdu_RV(du2);
    }

    public final void b_m0_PLdu_RV(du du2) {
        this.g_m0_PLdu_RV(du2);
        this.h_m0_PLdu_RV(du2);
    }

    private final void f_m0_PLdu_RV(du du2) {
        du2.a = this.b_f1_Ldu_;
        du2.b = null;
        if (this.b_f1_Ldu_ != null) {
            this.b_f1_Ldu_.b = du2;
        }
        this.b_f1_Ldu_ = du2;
        if (this.a_f3_Ldu_ == null) {
            this.a_f3_Ldu_ = this.b_f1_Ldu_;
        }
    }

    private final void g_m0_PLdu_RV(du du2) {
        du2.a = this.d_f0_Ldu_;
        du2.b = null;
        if (this.d_f0_Ldu_ != null) {
            this.d_f0_Ldu_.b = du2;
        }
        this.d_f0_Ldu_ = du2;
        if (this.c_f1_Ldu_ == null) {
            this.c_f1_Ldu_ = this.d_f0_Ldu_;
        }
    }

    public final void c_m0_PLdu_RV(du d2) {
        if (d2.a != null && d2.r + d2.i < d2.a.r + d2.a.i) {
            d2.a.b = d2.b;
            if (d2.b == null) {
                this.b_f1_Ldu_ = d2.a;
            } else {
                d2.b.a = d2.a;
            }
            du du2 = d2.a;
            while (du2 != null && d2.r + d2.i < du2.r + du2.i) {
                du2 = du2.a;
            }
            if (du2 == null) {
                du2 = d2;
                d2 = this;
                du2.b = ((g)d2).a_f3_Ldu_;
                du2.a = null;
                if (((g)d2).a_f3_Ldu_ != null) {
                    ((g)d2).a_f3_Ldu_.a = du2;
                }
                ((g)d2).a_f3_Ldu_ = du2;
                if (((g)d2).b_f1_Ldu_ == null) {
                    ((g)d2).b_f1_Ldu_ = ((g)d2).a_f3_Ldu_;
                }
                return;
            }
            du2.b.a = d2;
            d2.b = du2.b;
            du2.b = d2;
            d2.a = du2;
            return;
        }
        if (d2.b != null && d2.r + d2.i > d2.b.r + d2.b.i) {
            d2.m = true;
            d2.b.a = d2.a;
            if (d2.a == null) {
                this.a_f3_Ldu_ = d2.b;
            } else {
                d2.a.b = d2.b;
            }
            du du3 = d2.b;
            while (du3 != null && d2.r + d2.i > du3.r + du3.i) {
                du3 = du3.b;
            }
            if (du3 == null) {
                this.f_m0_PLdu_RV((du)d2);
                return;
            }
            du3.a.b = d2;
            d2.a = du3.a;
            du3.a = d2;
            d2.b = du3;
        }
    }

    private void h_m0_PLdu_RV(du d2) {
        if (d2.a != null && d2.r + d2.i < d2.a.r + d2.a.i) {
            d2.a.b = d2.b;
            if (d2.b == null) {
                this.d_f0_Ldu_ = d2.a;
            } else {
                d2.b.a = d2.a;
            }
            du du2 = d2.a;
            while (du2 != null && d2.r + d2.i < du2.r + du2.i) {
                du2 = du2.a;
            }
            if (du2 == null) {
                du2 = d2;
                d2 = this;
                du2.b = ((g)d2).c_f1_Ldu_;
                du2.a = null;
                if (((g)d2).c_f1_Ldu_ != null) {
                    ((g)d2).c_f1_Ldu_.a = du2;
                }
                ((g)d2).c_f1_Ldu_ = du2;
                if (((g)d2).d_f0_Ldu_ == null) {
                    ((g)d2).d_f0_Ldu_ = ((g)d2).c_f1_Ldu_;
                }
                return;
            }
            du2.b.a = d2;
            d2.b = du2.b;
            du2.b = d2;
            d2.a = du2;
            return;
        }
        if (d2.b != null && d2.r + d2.i > d2.b.r + d2.b.i) {
            d2.m = true;
            d2.b.a = d2.a;
            if (d2.a == null) {
                this.c_f1_Ldu_ = d2.b;
            } else {
                d2.a.b = d2.b;
            }
            du du3 = d2.b;
            while (du3 != null && d2.r + d2.i > du3.r + du3.i) {
                du3 = du3.b;
            }
            if (du3 == null) {
                this.g_m0_PLdu_RV((du)d2);
                return;
            }
            du3.a.b = d2;
            d2.a = du3.a;
            du3.a = d2;
            d2.b = du3;
        }
    }

    public final byte a_m4_PIIRB(int n2, int n3) {
        if (n2 < 0 || n3 < 0 || n2 >= c_f3_B || n3 >= d_f2_B) {
            return 0;
        }
        byte by2 = (byte)(this.a_f0_AB[n3 * c_f3_B + n2] & 0x3F);
        n2 = by2;
        if (by2 <= 0) {
            return -1;
        }
        return (byte)n2;
    }

    public static boolean a_m5_PIIRZ(int n2, int n3) {
        return n2 < 0 || n3 < 0 || n2 >= c_f3_B || n3 >= d_f2_B;
    }

    public final void a_m6_PABRV(byte[] byArray) {
        byte by2;
        byte by3;
        int n2;
        int n3;
        int n4;
        byte by4;
        byte by5;
        int n5;
        int n6;
        f_f1_Z = false;
        g = false;
        df.d_m0_PRV();
        int n22 = 0;
        byte[] byArray2 = new byte[]{-1, -1};
        if (this.Q != null) {
            System.arraycopy(this.Q, 0, byArray2, 0, 2);
        }
        ++n22;
        this.a_f2_B = byArray[0];
        if (this.Q == null) {
            this.Q = new byte[2];
        }
        ++n22;
        this.Q[0] = byArray[1];
        ++n22;
        this.Q[1] = byArray[2];
        a.c_m0_PRV();
        this.a_f8_AAB = new byte[2][];
        for (int i2 = 0; i2 < 2; ++i2) {
            byte by8;
            if ((by8 = byArray[n22++]) <= 0) continue;
            this.a_f8_AAB[i2] = new byte[by8];
            System.arraycopy(byArray, n22, this.a_f8_AAB[i2], 0, by8);
            n22 += by8;
        }
        Object object = null;
        int by9 = byArray[n22++];
        this.c_f6_ALcg_ = new cg[by9];
        this.R = new byte[by9];
        int n7 = -1;
        for (n6 = 0; n6 < by9; ++n6) {
            n5 = -1;
            this.R[n6] = byArray[n22++];
            by5 = this.R[n6];
            if (by5 < 0) {
                by5 += 256;
            }
            by4 = by5;
            int by14 = 0;
            for (n4 = 0; n4 < this.d_f1_AB.length; ++n4) {
                if (by5 >= (by14 += this.d_f1_AB[n4])) continue;
                n5 = n4;
                by4 -= by14 - this.d_f1_AB[n4];
                break;
            }
            if (n7 != n5) {
                n7 = n5;
                object = new aj("/m/ob" + n7);
            }
            this.c_f6_ALcg_[n6] = ((aj)object).a_m3_PIRLcg_(by4);
        }
        a.c_m0_PRV();
        c_f3_B = byArray[n22++];
        d_f2_B = byArray[n22++];
        this.a_f10_S = (short)(c_f3_B << 4);
        this.b_f4_S = (short)(d_f2_B << 4);
        this.a_f4_AALdu_ = new du[d_f2_B][c_f3_B];
        n6 = d_f2_B * c_f3_B;
        this.b_f0_AB = new byte[n6];
        System.arraycopy(byArray, n22, this.b_f0_AB, 0, n6);
        a.c_m0_PRV();
        this.a_f0_AB = new byte[n6];
        System.arraycopy(byArray, n22 += n6, this.a_f0_AB, 0, n6);
        n22 += n6;
        int n8 = byArray[n22++] & 0xFF;
        if (n8 > 0) {
            this.a_f5_ALdx_ = new dx[n8];
            for (n4 = 0; n4 < n8; ++n4) {
                n5 = byArray[n22];
                by5 = (byte)rpg.g.a_m3_PABIRS(byArray, n22 + 1);
                by4 = (byte)rpg.g.a_m3_PABIRS(byArray, n22 + 3);
                n22 += 5;
                dx dx2 = new dx(this.a_m9_PBRB((byte)n5), by5, by4);
                this.f_m0_PLdu_RV(dx2);
                this.c_m0_PLdu_RV(dx2);
                this.a_f5_ALdx_[n4] = dx2;
            }
            a.c_m0_PRV();
        }
        if ((n3 = byArray[n22++] & 0xFF) > 0) {
            this.b_f2_ALdx_ = new dx[n3];
            for (int i3 = 0; i3 < n3; ++i3) {
                n5 = byArray[n22];
                by5 = (byte)rpg.g.a_m3_PABIRS(byArray, n22 + 1);
                by4 = rpg.g.a_m3_PABIRS(byArray, n22 + 3);
                n22 += 5;
                this.b_f2_ALdx_[i3] = new dx(this.a_m9_PBRB((byte)n5), by5, by4);
            }
            a.c_m0_PRV();
        }
        if ((n2 = byArray[n22++] & 0xFF) > 0) {
            this.c_f2_ALdx_ = new dx[n2];
            for (int i4 = 0; i4 < n2; ++i4) {
                n5 = byArray[n22];
                by5 = rpg.g.a_m3_PABIRS(byArray, n22 + 1);
                by4 = rpg.g.a_m3_PABIRS(byArray, n22 + 3);
                n22 += 5;
                this.c_f2_ALdx_[i4] = new dx(this.a_m9_PBRB((byte)n5), by5, by4);
            }
            a.c_m0_PRV();
        }
        byte by6 = byArray[n22++];
        byte[] byArray3 = new byte[by6];
        if (by6 > 0) {
            c_f5_Z = true;
            dt.a_m0_PIRV(by6);
            object = e.a_m6_PLjava_lang_String_RAB("/en/edf");
            byte[] byArray4 = e.a_m6_PLjava_lang_String_RAB("/en/np");
            byte[] byArray5 = e.a_m6_PLjava_lang_String_RAB("/en/ep");
            for (n5 = 0; n5 < by6; ++n5) {
                byArray3[n5] = n4 = byArray[n22++];
                e.a_m5_PIIABABABRV(n5, n4, (byte[])object, byArray4, byArray5);
                a.c_m0_PRV();
            }
        }
        byte by7 = byArray[n22++];
        for (by3 = 0; by3 < by7; ++by3) {
            n4 = byArray[n22 + 1];
            n7 = (n4 & 0x80) == 128 ? byArray[n22 + 3] : -1;
            for (byte by8 = 0; by8 < byArray3.length; by8 = (byte)((byte)(by8 + 1))) {
                if (byArray3[by8] != byArray[n22]) continue;
                cd.a_m0_PSSBBRV((short)((byArray[n22 + 1] & 0x7F) << 4), (short)(byArray[n22 + 2] << 4), byArray[n22], by8);
                dt.a_f0_ALdt_[by8].f_f1_B = (byte)n7;
            }
            n22 += 3;
            if ((n4 & 0x80) == 128) {
                ++n22;
            }
            a.c_m0_PRV();
        }
        af.a_();
        by3 = byArray[n22++];
        byte[] byArray6 = new byte[by3];
        if (by3 > 0) {
            boolean bl2 = di.a_m8_PIRZ(252);
            System.arraycopy(byArray, n22, byArray6, 0, by3);
            n22 += by3;
            am.a_f0_ALs_ = new s[by3];
            am.a_f1_AB = new byte[by3];
            am.b = new byte[by3];
            byte[] byArray7 = e.a_m6_PLjava_lang_String_RAB("/en/ndf");
            byte[] byArray8 = e.a_m6_PLjava_lang_String_RAB("/en/np");
            for (by4 = 0; by4 < by3; by4 = (byte)(by4 + 1)) {
                e.a_m12_PABBBABRV(byArray7, bl2 && byArray6[by4] == 1 ? (byte)47 : byArray6[by4], by4, byArray8);
                a.c_m0_PRV();
            }
        }
        if ((by2 = byArray[n22++]) > 0) {
            this.a_f6_ALbl_ = new bl[by2];
            by4 = 0;
            for (byte by10 = 0; by10 < by2; by10 = (byte)(by10 + 1)) {
                byte by11 = byArray[n22++];
                n4 = byArray[n22];
                int n9 = byArray[n22++] & 0x7F;
                byte by12 = byArray[n22++];
                for (byte by13 = 0; by13 < by3; by13 = (byte)((byte)(by13 + 1))) {
                    if (by11 != byArray6[by13]) continue;
                    by4 = by13;
                    break;
                }
                bl bl3 = new bl((short)(n9 << 4), (short)(by12 << 4), by11, by4);
                this.f_m0_PLdu_RV(bl3);
                this.c_m0_PLdu_RV(bl3);
                bl3.u();
                if ((n4 & 0x80) == 128) {
                    bl3.f(byArray[n22++]);
                }
                this.a_f6_ALbl_[by10] = bl3;
            }
            a.c_m0_PRV();
        }
        df.a_m1_PABIRV(byArray, n22);
        g = true;
        a.c_m0_PRV();
        e.a_m4_PBBRV(this.Q[0], this.Q[1]);
        a.c_m0_PRV();
        this.i();
        a_f9_I = 10;
    }

    public final void b_m1_PRV() {
        this.c_m1_PIRV(0);
        a.c_m0_PRV();
        this.c_m1_PIRV(1);
        a.c_m0_PRV();
    }

    public final void a_m7_PBBBRV(byte by2, byte by3, byte by4) {
        this.b_f0_AB[by3 * g.c_f3_B + by2] = (byte)(by4 + 1);
    }

    private final void c_m1_PIRV(int n2) {
        if (n2 < 0) {
            this.f_f0_I = 0;
            this.a_f1_ALcg_ = null;
            this.c_f0_AB[0] = -1;
            this.c_f0_AB[1] = -1;
            return;
        }
        if (this.c_f0_AB[n2] != this.Q[n2]) {
            int n3;
            int n4 = n2 == 0 ? 1 : 0;
            cg[][] cgArrayArray = new cg[2][];
            cg[][] cgArrayArray2 = cgArrayArray;
            cgArrayArray[0] = null;
            cgArrayArray2[1] = null;
            if (this.c_f0_AB[n4] >= 0) {
                cgArrayArray2[n4] = new cg[n4 == 0 ? this.f_f0_I : this.a_f1_ALcg_.length - this.f_f0_I];
                for (n3 = 0; n3 < cgArrayArray2[n4].length; ++n3) {
                    cgArrayArray2[n4][n3] = this.a_f1_ALcg_[n3 + (n4 == 0 ? 0 : this.f_f0_I)];
                }
            }
            this.a_f1_ALcg_ = null;
            if (this.Q[n2] >= 0) {
                aj aj2 = new aj("/m/t" + (this.Q[n2] < 10 ? "0" : "") + this.Q[n2]);
                cgArrayArray2[n2] = new cg[aj2.a_m2_PRI()];
                aj2.a_m5_PALcg_IRV(cgArrayArray2[n2], 0);
            }
            this.f_f0_I = cgArrayArray2[0] != null ? cgArrayArray2[0].length : 0;
            n3 = this.f_f0_I + (cgArrayArray2[1] != null ? cgArrayArray2[1].length : 0);
            this.a_f1_ALcg_ = new cg[n3];
            for (n4 = 0; n4 < n3; ++n4) {
                this.a_f1_ALcg_[n4] = n4 < this.f_f0_I ? cgArrayArray2[0][n4] : cgArrayArray2[1][n4 - this.f_f0_I];
            }
            this.c_f0_AB[n2] = this.Q[n2];
        }
    }

    public final void c_m2_PRV() {
        int n2;
        Object object;
        this.d_f4_I = c.c_f0_B > 0 ? di.c_f2_I : di.a_f5_I;
        this.e_f2_I = c.c_f0_B > 0 ? di.d_f2_I : di.b_f1_I;
        int n3 = bs.j;
        int n4 = bs.k;
        if (this.d_f4_I > 0) {
            this.d_f4_I = 0;
        }
        if (this.e_f2_I > 0) {
            this.e_f2_I = 0;
        }
        if (this.d_f4_I < n3 - this.a_f10_S) {
            this.d_f4_I = n3 - this.a_f10_S;
        }
        if (this.e_f2_I < n4 - this.b_f4_S) {
            this.e_f2_I = n4 - this.b_f4_S;
        }
        if (this.d_f4_I > 0) {
            this.d_f4_I = n3 - this.a_f10_S >> 1;
        }
        if (this.e_f2_I > 0) {
            this.e_f2_I = n4 - this.b_f4_S >> 1;
        }
        if (this.b_f5_I != 0 || this.c_f4_I != 0) {
            c.k();
        } else {
            object = this;
            if (e_f0_B == 2) {
                ((g)object).b_m4_PIIRV(2, di.a_f9_Ldo_.c_f0_B == 4 ? 4 : 3);
            } else if (e_f0_B == 1) {
                ((g)object).c_m4_PIIRV(2, 2);
            }
        }
        if (this.b_f5_I != 0) {
            this.d_f4_I += this.b_f5_I;
            this.b_f5_I = 0;
        }
        if (this.c_f4_I != 0) {
            this.e_f2_I += this.c_f4_I;
            this.c_f4_I = 0;
        }
        int n5 = -this.d_f4_I / 16;
        int n6 = -this.e_f2_I / 16;
        int n7 = (n3 - this.d_f4_I - 1) / 16;
        int n8 = (n4 - this.e_f2_I - 1) / 16;
        if (n5 < 0) {
            n5 = 0;
        }
        if (n6 < 0) {
            n6 = 0;
        }
        if (n7 >= c_f3_B) {
            n7 = c_f3_B - 1;
        }
        if (n8 >= d_f2_B) {
            n8 = d_f2_B - 1;
        }
        cm cm2 = a.a_f3_Lcm_;
        if (a_f11_Z || b_f6_Z) {
            object = cm2;
            ((cm)object).a_m2_PIRV(j == 1 ? 0xFFFFFF : 0);
            ((cm)object).b_m0_PIIIIRV(0, 0, bs.j, bs.k);
            ((cm)object).a_m4_PIIIIRV(0, 0, bs.j, bs.k);
            if (a_f11_Z) {
                this.a_m24_PIIZRV(this.d_f4_I, this.e_f2_I, false);
                this.a_m24_PIIZRV(this.d_f4_I, this.e_f2_I, true);
                a_f11_Z = false;
                return;
            }
        } else {
            cm2.b_m0_PIIIIRV(0, 0, n3, n4);
            cm2.a_m2_PIRV(0x202020);
            cm2.a_m4_PIIIIRV(0, 0, n3, n4);
        }
        bs.e_m0_PLcm_RV(cm2);
        if (!b_f6_Z) {
            int n9;
            int n10;
            int n11;
            n2 = this.a_f1_ALcg_.length;
            n4 = this.e_f2_I + (n6 << 4);
            for (n11 = n6; n11 <= n8; ++n11) {
                n3 = this.d_f4_I + (n5 << 4);
                for (n10 = n5; n10 <= n7; ++n10) {
                    n9 = n11 * c_f3_B + n10;
                    int n12 = (this.b_f0_AB[n9] & 0x80) != 0 ? this.f_f0_I : 0;
                    n12 = n12 + (char)(this.b_f0_AB[n9] & 0x7F);
                    if (n12 > 0 && --n12 < n2) {
                        cm2.a_m1_PLcg_IIIRV(this.a_f1_ALcg_[n12], n3, n4, 20);
                    }
                    n3 += 16;
                }
                n4 += 16;
            }
            bs.e_m0_PLcm_RV(cm2);
            if (this.c_f2_ALdx_ != null) {
                n11 = this.c_f2_ALdx_.length;
                for (n10 = 0; n10 < n11; ++n10) {
                    this.c_f2_ALdx_[n10].b(this.d_f4_I, this.e_f2_I);
                }
            }
            int n13 = n5;
            int n14 = n6;
            int n15 = n7;
            int n16 = n8;
            n2 = this.e_f2_I;
            n8 = this.d_f4_I;
            n7 = n16;
            n6 = n15;
            n5 = n14;
            n4 = n13;
            cm cm3 = cm2;
            object = this;
            n9 = ((g)object).b_f9_Ljava_util_Vector_.size();
            if (n9 > 0) {
                bs.e_m0_PLcm_RV(cm3);
                for (int i2 = n9 - 1; i2 >= 0; --i2) {
                    byte by2;
                    byte[] byArray = (byte[])((g)object).b_f9_Ljava_util_Vector_.elementAt(i2);
                    if (byArray[5] <= 16 && byArray[5] % 3 != 0 || byArray[0] < n4 || byArray[0] > n6 || byArray[1] < n5 || byArray[1] > n7) continue;
                    n11 = n8 + (byArray[0] << 4);
                    n10 = n2 + (byArray[1] << 4) + 2;
                    cm3.a_m1_PLcg_IIIRV(e.e_f0_ALcg_[0], n11, n10 + 4, 20);
                    if (byArray[2] == 1) {
                        cm3.a_m1_PLcg_IIIRV(e.g_f2_Lcg_, n11 + 1, n10 + 2, 20);
                        continue;
                    }
                    int n17 = by2 + ((by2 = byArray[3]) == 20 ? byArray[4] : (byte)0);
                    cm3.a_m1_PLcg_IIIRV(e.k_f2_ALcg_[n17], n11 + 8, n10 + 16 - 6, 33);
                }
            }
        }
        bs.e_m0_PLcm_RV(cm2);
        this.a_m24_PIIZRV(this.d_f4_I, this.e_f2_I, false);
        object = this.a_f3_Ldu_;
        while (object != null) {
            ((du)object).b_m0_PIIRV(this.d_f4_I, this.e_f2_I);
            object = ((du)object).b;
        }
        object = this.c_f1_Ldu_;
        while (object != null) {
            ((du)object).b_m0_PIIRV(this.d_f4_I, this.e_f2_I);
            object = ((du)object).b;
        }
        this.a_m24_PIIZRV(this.d_f4_I, this.e_f2_I, true);
        if (b_f6_Z) {
            b_f6_Z = false;
            return;
        }
        if (this.b_f2_ALdx_ != null) {
            n2 = this.b_f2_ALdx_.length;
            for (int i3 = 0; i3 < n2; ++i3) {
                this.b_f2_ALdx_[i3].b(this.d_f4_I, this.e_f2_I);
            }
        }
        if (di.d_f3_B == 3 || di.d_f3_B == 4) {
            if (a_f9_I > 0) {
                --a_f9_I;
            }
            if (e_f0_B >= 0) {
                e_f0_B = (byte)(e_f0_B - 1);
            }
        }
        if (!g) {
            cm2.a_m2_PIRV(0);
            cm2.a_m4_PIIIIRV(0, 0, 10, 10);
        }
        cm cm4 = cm2;
        object = this;
        if (a_f9_I > 0 && ((g)object).a_f8_AAB != null) {
            cm4.b_m1_PIRV(255);
            n4 = a_f9_I << 2;
            n5 = a.a_f0_I - bs.j >> 1;
            cm4.a_m2_PIRV(0);
            cm4.a_m4_PIIIIRV(n5, 0, bs.j, n4);
            cm4.a_m4_PIIIIRV(n5, bs.k - n4, bs.j, n4);
            cm4.b_m1_PIRV(60);
            n6 = n4 * 6;
            n7 = 180 - (n6 >> 1);
            cm4.a_m3_PIIIRV(n7, n7, n7);
            cm4.a_m4_PIIIIRV(0, bs.m - 15, a.a_f0_I, 30);
            cm4.b_m1_PIRV(255);
            if (a_f9_I > 6 && a_f9_I < 15) {
                n6 = 0xFFFFFF;
            }
            if (((g)object).a_f8_AAB[0] != null) {
                g.a_m8_PLcm_IABIIRV(cm4, n6, ((g)object).a_f8_AAB[0], a.c - a_f9_I, bs.m - 3 - 7);
            }
            if (((g)object).a_f8_AAB[1] != null) {
                g.a_m8_PLcm_IABIIRV(cm4, n6, ((g)object).a_f8_AAB[1], a.c + a_f9_I, bs.m - 3 + 7);
            }
        }
        for (n4 = 0; n4 < 3; ++n4) {
            if (a_f12_AI[n4] <= 0) continue;
            int n18 = n4;
            a_f12_AI[n18] = a_f12_AI[n18] - 1;
            try {
                if (a_f12_AI[n4] > 0) {
                    cm4.a_m1_PLcg_IIIRV(((g)object).b_f7_ALcg_[n4], a.c, bs.k - n4 * (((g)object).b_f7_ALcg_[n4].b() + 1), 33);
                    continue;
                }
                ((g)object).b_f7_ALcg_[n4] = null;
                continue;
            }
            catch (Exception exception) {
                Exception exception2 = exception;
                exception.printStackTrace();
            }
        }
    }

    private static void a_m8_PLcm_IABIIRV(cm cm2, int n2, byte[] byArray, int n3, int n4) {
        if (byArray == null) {
            return;
        }
        cm2.a_m2_PIRV(0);
        ac.a_m2_PLcm_IIABIIRV(cm2, n3 + 1, n4 - 1, byArray, 0, 1);
        if (n2 > 255) {
            n2 = 255;
        }
        cm2.a_m3_PIIIRV(n2, n2, n2);
        ac.a_m2_PLcm_IIABIIRV(cm2, n3, n4, byArray, 0, 1);
    }

    private byte a_m9_PBRB(byte by2) {
        if (this.R == null) {
            return -1;
        }
        for (byte by3 = 0; by3 < this.R.length; by3 = (byte)(by3 + 1)) {
            if (this.R[by3] != by2) continue;
            return by3;
        }
        return -1;
    }

    public final void a_m10_PBIIRV(byte by2, int n2, int n3) {
        a.a_f3_Lcm_.a_m1_PLcg_IIIRV(this.c_f6_ALcg_[by2], n2, n3, 33);
    }

    final boolean b_m2_PIIRZ(int n2, int n3) {
        return (this.a_f0_AB[n3 * c_f3_B + n2] & 0xC0) != 0;
    }

    final boolean c_m3_PIIRZ(int n2, int n3) {
        return (this.a_f0_AB[n3 * c_f3_B + n2] & 0x80) != 0;
    }

    final boolean a_m11_PLdu_IIRZ(du du2, int n2, int n3) {
        return this.a_f4_AALdu_[n3][n2] != null && this.a_f4_AALdu_[n3][n2] != du2;
    }

    final boolean d_m0_PIIRZ(int n2, int n3) {
        return this.b_m2_PIIRZ(n2, n3) && (this.a_f0_AB[n3 * c_f3_B + n2] & 0x3F) == 0;
    }

    public final boolean a_m12_PLal_IIRZ(al al2, int n2, int n3) {
        for (int i2 = 0; i2 < al2.u; ++i2) {
            if (n2 + i2 < 0 || n3 < 0 || n2 + i2 >= c_f3_B - 1 || n3 + i2 >= d_f2_B - 1) {
                return false;
            }
            if (!this.b_m2_PIIRZ(n2 + i2, n3) && !this.a_m11_PLdu_IIRZ(al2, n2 + i2, n3)) continue;
            return false;
        }
        return true;
    }

    final boolean a_m13_PLal_BRZ(al al2, byte by2) {
        return this.a_m12_PLal_IIRZ(al2, al2.s + d.J[by2], al2.t + d.K[by2]);
    }

    final void d_m1_PRV() {
        d d2 = this;
        int n2 = d2.a_f7_Ljava_util_Vector_.size();
        for (int i2 = n2 - 1; i2 >= 0; --i2) {
            at at2 = (at)d2.a_f7_Ljava_util_Vector_.elementAt(i2);
            if (at2 == null || !at2.a_f2_Z) continue;
            d2.a_f7_Ljava_util_Vector_.removeElementAt(i2);
        }
        d2 = this.a_f3_Ldu_;
        while (d2 != null) {
            if (d2 instanceof dx) {
                d2 = ((du)d2).b;
                continue;
            }
            if (d2 instanceof cd && !((du)d2).m) {
                cd cd2 = (cd)d2;
                cd2.c_m2_PRV();
                d2 = ((du)d2).b;
                this.c_m0_PLdu_RV(cd2);
                if (cd2.b_f1_B != 7) continue;
                this.d_m2_PLdu_RV(cd2);
                continue;
            }
            if (d2 instanceof bl && !((du)d2).m) {
                bl bl2 = (bl)d2;
                bl2.c_m0_PRV();
                d2 = ((du)d2).b;
                this.c_m0_PLdu_RV(bl2);
                continue;
            }
            if (((du)d2).m) {
                ((du)d2).m = false;
                d2 = ((du)d2).b;
                continue;
            }
            d2 = ((du)d2).b;
        }
        d2 = this.c_f1_Ldu_;
        while (d2 != null) {
            if (d2 instanceof af && !((du)d2).m) {
                cd cd3 = (cd)d2;
                cd3.c_m2_PRV();
                d2 = ((du)d2).b;
                this.h_m0_PLdu_RV(cd3);
                if (cd3.b_f1_B != 7) continue;
                this.e_m0_PLdu_RV(cd3);
                continue;
            }
            if (((du)d2).m) {
                ((du)d2).m = false;
                d2 = ((du)d2).b;
                continue;
            }
            d2 = ((du)d2).b;
        }
    }

    public final void d_m2_PLdu_RV(du d2) {
        boolean bl2;
        if (d2 instanceof al) {
            ((al)d2).v();
        }
        du du2 = d2;
        d2 = this;
        du du3 = ((g)d2).a_f3_Ldu_;
        while (du3 != null && !du3.equals(du2)) {
            du3 = du3.b;
        }
        if (du3 != null) {
            if (du3.a != null) {
                du3.a.b = du3.b;
            } else {
                ((g)d2).a_f3_Ldu_ = du3.b;
            }
            if (du3.b != null) {
                du3.b.a = du3.a;
            } else {
                ((g)d2).b_f1_Ldu_ = du3.a;
            }
            bl2 = true;
        } else {
            bl2 = false;
        }
    }

    public final void e_m0_PLdu_RV(du d2) {
        boolean bl2;
        if (d2 instanceof al) {
            ((al)d2).v();
        }
        du du2 = d2;
        d2 = this;
        du du3 = ((g)d2).c_f1_Ldu_;
        while (du3 != null && !du3.equals(du2)) {
            du3 = du3.b;
        }
        if (du3 != null) {
            if (du3.a != null) {
                du3.a.b = du3.b;
            } else {
                ((g)d2).c_f1_Ldu_ = du3.b;
            }
            if (du3.b != null) {
                du3.b.a = du3.a;
            } else {
                ((g)d2).d_f0_Ldu_ = du3.a;
            }
            bl2 = true;
        } else {
            bl2 = false;
        }
    }

    public static void a_m14_PBRV(byte by2) {
        do do_ = di.a_f9_Ldo_;
        do_.r();
        if (by2 > 0) {
            do_.a_m1_PLat_RV(new z(-6, by2));
        }
    }

    public final void a_m15_PBBRV(byte by2, byte by3) {
        bl bl2 = this.a_f6_ALbl_[by3];
        bl2.r();
        if (by2 > 0) {
            bl2.a_m1_PLat_RV(new z(-6, by2));
        }
    }

    public final void b_m3_PBBRV(byte by2, byte by3) {
        bl bl2 = this.a_f6_ALbl_[by2 & 0xFF];
        this.a_f6_ALbl_[by2 & 0xFF].a_f1_B = by3;
    }

    public final void b_m4_PIIRV(int n2, int n3) {
        if (n3 % 2 == 1) {
            this.b_f5_I = -n2;
            return;
        }
        this.b_f5_I = n2;
    }

    public final void c_m4_PIIRV(int n2, int n3) {
        if (n3 % 2 == 0) {
            this.c_f4_I = n2;
            return;
        }
        this.c_f4_I = -n2;
    }

    public static void a_m16_PIRV(int n2) {
        j = 1;
        a_f11_Z = true;
    }

    public static void b_m5_PIRV(int n2) {
        j = 0;
        b_f6_Z = true;
    }

    public static void e_m1_PRV() {
        b_f6_Z = false;
        a_f11_Z = false;
    }

    public final void a_m17_PBBBBRV(byte by2, byte by3, byte by4, byte by5) {
        if (by4 < 0 || by5 < 0 || by4 > 20 || by5 > 28) {
            return;
        }
        byte[] byArray = new byte[]{by2, by3, 0, by4, by5, 126};
        this.b_f9_Ljava_util_Vector_.insertElementAt(byArray, 0);
    }

    public final void a_m18_PBBIRV(byte by2, byte by3, int n2) {
        byte[] byArray = new byte[]{by2, by3, 1, (byte)(n2 / 100), (byte)(n2 % 100), 126};
        this.b_f9_Ljava_util_Vector_.addElement(byArray);
    }

    public final void f_m1_PRV() {
        int n2;
        for (int i2 = n2 = this.b_f9_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            byte[] byArray = (byte[])this.b_f9_Ljava_util_Vector_.elementAt(i2);
            if (byArray[5] > 0) {
                byArray[5] = (byte)(byArray[5] - 1);
                continue;
            }
            this.b_f9_Ljava_util_Vector_.removeElementAt(i2);
        }
    }

    public final boolean a_m19_PBBRZ(byte by2, byte by3) {
        int n2 = this.b_f9_Ljava_util_Vector_.size();
        if (n2 <= 0) {
            return false;
        }
        byte[] byArray = null;
        boolean bl2 = false;
        for (int i2 = 0; i2 < n2; ++i2) {
            byArray = (byte[])this.b_f9_Ljava_util_Vector_.elementAt(i2);
            if (by2 != byArray[0] || by3 != byArray[1]) continue;
            if (byArray[2] == 1) {
                int n3 = byArray[3] * 100 + byArray[4];
                if (ax.j) {
                    n3 <<= 1;
                }
                di.e_m1_PIRV(n3);
                this.b_f9_Ljava_util_Vector_.removeElementAt(i2);
                this.a_m20_PBBBZRV((byte)1, byArray[3], byArray[4], true);
                return true;
            }
            bl2 = true;
            bj bj2 = di.a_m11_PBRLbj_(byArray[3]);
            if (!bj2.a_m4_PBBIRZ(byArray[3], byArray[4], 1)) continue;
            bj2.a_m5_PLas_IRI(as.a_m0_PBBRLas_(byArray[3], byArray[4]), 1);
            this.b_f9_Ljava_util_Vector_.removeElementAt(i2);
            this.a_m20_PBBBZRV((byte)0, byArray[3], byArray[4], true);
            if (byArray[3] == 20) {
                bs.d_f0_Z = true;
            }
            return true;
        }
        if (bl2) {
            this.a_m20_PBBBZRV(byArray[2], byArray[3], byArray[4], false);
        }
        return false;
    }

    private final void a_m20_PBBBZRV(byte by2, byte by3, byte by4, boolean bl2) {
        byte[] byArray;
        cg cg2 = cg.a_m2_PIIRLcg_(200, 16);
        cm cm2 = cg2.a_m1_PRLcm_();
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(0, 0, 200, 16);
        cm2.a_m2_PIRV(13682856);
        cm2.d_m0_PIIIIRV(1, 1, 197, 13);
        cm2.a_m2_PIRV(0xFFFFFF);
        if (!bl2) {
            by3 = (byte)23;
            switch (by2) {
                case 16: {
                    by3 = (byte)21;
                    break;
                }
                case 18: {
                    by3 = (byte)22;
                }
            }
            byArray = e.g_f0_Lch_.a_m0_PIRAB(by3);
        } else {
            byte[] byArray2;
            if (by2 == 1) {
                byArray2 = rpg.g.a_m0_PABABRAB(("" + (by3 * 100 + by4)).getBytes(), d.s);
                if (ax.j) {
                    byArray2 = rpg.g.a_m0_PABABRAB(byArray2, "x2".getBytes());
                }
            } else {
                as as2 = as.a_m0_PBBRLas_(by3, by4);
                byArray2 = by3 == 18 ? rpg.g.a_m0_PABABRAB(e.g_f0_Lch_.a_m0_PIRAB(by3), as2.a_f3_AB) : as2.a_f3_AB;
                if (as2 instanceof bm) {
                    cm2.a_m2_PIRV(p.c[((bm)as2).e]);
                }
            }
            byArray = byArray2;
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, 100, 1, byArray, 0, 1);
        boolean bl3 = false;
        for (int i2 = 0; i2 < 3; ++i2) {
            if (this.b_f7_ALcg_[i2] != null) continue;
            this.b_f7_ALcg_[i2] = cg2;
            g.a_f12_AI[i2] = 15;
            bl3 = true;
            break;
        }
        if (!bl3) {
            this.b_f7_ALcg_[0] = cg2;
            g.a_f12_AI[0] = 15;
        }
    }

    public final byte[] a_m21_PRAB() {
        do do_ = di.a_f9_Ldo_;
        byte[] byArray = new byte[4];
        byte[] byArray2 = byArray;
        byArray[0] = this.b_f3_B;
        byArray2[1] = do_.s;
        byArray2[2] = do_.t;
        byArray2[3] = do_.c_f0_B;
        return byArray2;
    }

    public final du a_m22_PIIRLdu_(int n2, int n3) {
        if (n2 >= 0 && n3 >= 0 && n2 < c_f3_B && n3 < d_f2_B) {
            return this.a_f4_AALdu_[n3][n2];
        }
        return null;
    }

    public final void a_m23_PLat_RV(at at2) {
        this.a_f7_Ljava_util_Vector_.addElement(at2);
    }

    private void a_m24_PIIZRV(int n2, int n3, boolean bl2) {
        int n4;
        for (int i2 = n4 = this.a_f7_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            at at2 = (at)this.a_f7_Ljava_util_Vector_.elementAt(i2);
            if (at2 == null) continue;
            at2.a_m1_PIIZRV(n2, n3, bl2);
        }
    }

    public static final void g_m1_PRV() {
        e_f0_B = (byte)2;
    }

    public static boolean a_m25_PRZ() {
        return e_f0_B > 0;
    }

    public static void h_m1_PRV() {
        cd.B();
        dt.a_m3_PRV();
    }

    private int a_m26_PIIIRI(int n2, int n3, int n4) {
        if (n3 < 0 || n4 < 0 || n3 >= c_f3_B || n4 >= d_f2_B) {
            return -1;
        }
        int n5 = n4;
        n4 = n3;
        g g2 = this;
        int n6 = n4 < 0 || n5 < 0 || n4 >= c_f3_B || n5 >= d_f2_B ? 0 : g2.a_f0_AB[n5 * c_f3_B + n4];
        n2 = (n6 & 0x40) != 0 || (n6 & 0x80) != 0 ? b_f10_AI[(n2 << 1) + 1] : b_f10_AI[n2 << 1];
        if ((n6 & 0x3F) != 0) {
            n2 = 3767807;
        }
        return n2;
    }

    public final void a_m27_PLcm_RV(cm cm2) {
        Object object;
        int n2 = c_f3_B * f_f2_B;
        int n3 = d_f2_B * f_f2_B;
        n2 = a.c - (n2 >> 1);
        n3 = 8 + a.b_f0_I >= 300 ? bs.k - n3 >> 1 : a.b_f0_I - n3 >> 1;
        int n4 = n3;
        if (bs.e_f0_Z || a.a_f1_Z) {
            object = this.b_m6_PRAB();
            int n5 = a.a_f0_I - ac.a_m8_PABRI(object) >> 1;
            int n6 = n2 < n5 - 5 ? n2 : n5 - 5;
            int n7 = n4 - 15 > 0 ? n4 - 15 : 0;
            int n8 = a.c - n6 << 1;
            int n9 = 15 + a_f13_Lcg_.b();
            cm2.a_m2_PIRV(0);
            cm2.a_m4_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I - 33);
            cm2.a_m2_PIRV(10159117);
            cm2.a_m4_PIIIIRV(0, 0, a.a_f0_I, 15);
            cm2.a_m2_PIRV(0x777777);
            ac.a_m0_PLcm_IIABIRV(cm2, n5 + 1, 2, object, 1);
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m0_PLcm_IIABIRV(cm2, n5, 1, object, 1);
            cm2.a_m1_PLcg_IIIRV(a_f13_Lcg_, n2, n4, 20);
            if (c.d_f1_Z && this.k >= 0 && this.l >= 0) {
                cm2.a_m2_PIRV(0xFF0000);
                cm2.b_m0_PIIIIRV(n6, n7, n8, n9);
                n4 = e.p.a_m5_PRI();
                int n10 = e.p.b();
                n5 = n2 + this.k * f_f2_B;
                n6 = n3 + this.l * f_f2_B;
                cm2.b_m0_PIIIIRV(n5 + 1, n6, n4, n10);
                cm2.a_m1_PLcg_IIIRV(e.p, n5 + 1, n6, 20);
                cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            }
        }
        object = di.a_f9_Ldo_;
        cm2.a_m2_PIRV(a.e % 2 == 1 ? 0xFF0000 : 0x7F7F7F);
        cm2.a_m4_PIIIIRV(n2 + object.s * f_f2_B, n3 + object.t * f_f2_B, f_f2_B, f_f2_B);
        if (++a.e > 99) {
            a.e = 0;
        }
        if (n.a_f4_Lcg_ != null) {
            cm2.a_m1_PLcg_IIIRV(n.a_f4_Lcg_, a.a_f0_I - n.a_f4_Lcg_.a_m5_PRI(), a.b_f0_I - n.a_f4_Lcg_.b(), 20);
        }
        if (!c.d_f1_Z || this.k == -1 && this.l == -1) {
            bs.e_f0_Z = false;
        }
    }

    private void i() {
        int n2 = c_f3_B * f_f2_B;
        int n3 = d_f2_B * f_f2_B;
        a_f13_Lcg_ = cg.a_m2_PIIRLcg_(n2, n3);
        cm cm2 = a_f13_Lcg_.a_m1_PRLcm_();
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(0, 0, n2, n3);
        int n4 = 2;
        switch (this.Q[0]) {
            case 0: 
            case 2: {
                n4 = 0;
                break;
            }
            case 1: 
            case 6: {
                n4 = 1;
            }
        }
        for (int i2 = 0; i2 < n3; ++i2) {
            for (int i3 = 0; i3 < n2; ++i3) {
                int n5;
                int n6 = i2;
                int n7 = i3;
                int n8 = n4;
                g g2 = this;
                boolean bl2 = false;
                int n9 = n7 >> 1;
                int n10 = n6 >> 1;
                int n11 = g2.a_m26_PIIIRI(n8, n9, n10);
                if (n7 % 2 == 0 && n6 % 2 == 0) {
                    n7 = g2.a_m26_PIIIRI(n8, n9 - 1, n10);
                    n5 = g2.a_m26_PIIIRI(n8, n9, n10 - 1);
                } else if (n7 % 2 == 1 && n6 % 2 == 0) {
                    n7 = g2.a_m26_PIIIRI(n8, n9 + 1, n10);
                    n5 = g2.a_m26_PIIIRI(n8, n9, n10 - 1);
                } else if (n7 % 2 == 0 && n6 % 2 == 1) {
                    n7 = g2.a_m26_PIIIRI(n8, n9 - 1, n10);
                    n5 = g2.a_m26_PIIIRI(n8, n9, n10 + 1);
                } else {
                    n7 = g2.a_m26_PIIIRI(n8, n9 + 1, n10);
                    n5 = g2.a_m26_PIIIRI(n8, n9, n10 + 1);
                }
                if (n7 == -1) {
                    n7 = n11;
                }
                if (n5 == -1) {
                    n5 = n11;
                }
                if (n11 != n7 && n11 != n5) {
                    bl2 = true;
                }
                if (n11 == 3767807) {
                    bl2 = false;
                }
                if (bl2) {
                    n8 = ((n11 & 0xFF) + (n7 & 0xFF) + (n5 & 0xFF)) / 3;
                    n6 = ((n11 >> 8 & 0xFF) + (n7 >> 8 & 0xFF) + (n5 >> 8 & 0xFF)) / 3;
                    n5 = ((n11 >> 16 & 0xFF) + (n7 >> 16 & 0xFF) + (n5 >> 16 & 0xFF)) / 3;
                    n8 = n8 > 255 ? 255 : n8;
                    n6 = n6 > 255 ? 255 : n6;
                    n5 = n5 > 255 ? 255 : n5;
                    n11 = n8 + (n6 << 8) + (n5 << 16);
                }
                n5 = n11;
                cm2.a_m2_PIRV(n5);
                cm2.a_m4_PIIIIRV(i3 << 1, i2 << 1, 2, 2);
            }
            if (i2 % 10 != 1) continue;
            a.c_m0_PRV();
        }
    }

    public final byte[] b_m6_PRAB() {
        byte[] byArray = this.a_f8_AAB[0];
        if (this.a_f8_AAB[1] != null) {
            byArray = rpg.g.a_m0_PABABRAB(this.a_f8_AAB[0], "-".getBytes());
            byArray = rpg.g.a_m0_PABABRAB(byArray, this.a_f8_AAB[1]);
        }
        return byArray;
    }

    public final bl a_m28_PRLbl_() {
        for (int i2 = 0; i2 < this.a_f6_ALbl_.length; ++i2) {
            bl bl2 = this.a_f6_ALbl_[i2];
            if (bl2.g != 1) continue;
            return bl2;
        }
        return null;
    }

    static {
        j = 0;
        a_f11_Z = false;
        b_f6_Z = false;
        e_f0_B = (byte)-1;
        a_f12_AI = new int[3];
        c_f5_Z = false;
        f_f1_Z = false;
        g = true;
        a_f13_Lcg_ = null;
        i = new byte[][]{{1, 3, 3, -46}, {2, 1, 4, -45}, {3, 8, 3, -44}, {14, 8, 8, -42}, {20, 5, 5, -41}, {22, 4, 22, -40}, {27, 4, 5, -39, 15, 17, -38}, {28, 16, 4, 9}, {32, 3, 5, -36}, {35, 1, 10, -18}, {40, 17, 6, -43}, {46, 33, 4, -35}, {47, 2, 1, -34}, {52, 4, 13, -33}, {54, 2, 10, -32}, {56, 4, 4, -31}, {58, 1, 27, -30}, {64, 8, 2, -29}, {69, 30, 29, -28}, {75, 3, 6, -27}, {77, 20, 10, -26}, {86, 13, 12, 77}, {96, 11, 6, -21}, {110, 3, 5, -50, 3, 20, -48, 21, 5, -49, 21, 20, -47}, {112, 3, 15, -20}, {118, 4, 17, -19}};
        f_f2_B = (byte)4;
        b_f10_AI = new int[]{0xBFBFBF, 0x3F3F3F, 12451641, 1588281, 0xBFBFDF, 0x5F5F3F};
    }
}

