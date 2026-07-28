/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.g;

public class s
implements d {
    private byte[] a_f0_AB;
    private int[] a_f1_AI;
    private byte[] b;
    protected byte a_f2_B;
    public byte[][] a_f3_AAB;
    protected cg[][] a_f4_AALcg_;

    public final void a_m0_PILjava_lang_String_ABRV(int n2, String object, byte[] byArray) {
        int n3;
        object = new aj((String)object);
        if (byArray != null) {
            int n4 = 0;
            ++n4;
            n3 = byArray[0];
            for (int n5 = 0; n5 < n3; n5 = (byte)(n5 + 1)) {
                int n6 = g.b_m0_PABIRI(byArray, n4);
                int n7 = g.b_m0_PABIRI(byArray, n4 += 4);
                n4 += 4;
                ((aj)object).a_m6_PIIRV(n6, n7);
            }
        }
        this.a_f4_AALcg_[n2] = ((aj)object).a_m4_PRALcg_();
        byte[] byArray2 = this.a_f3_AAB[n2];
        if (byArray2 != null) {
            this.a_f4_AALcg_[n2 + this.a_f2_B] = new cg[((aj)object).a_m2_PRI()];
            for (n3 = 0; n3 < byArray2.length; ++n3) {
                this.a_f4_AALcg_[n2 + this.a_f2_B][byArray2[n3]] = ((aj)object).b_m0_PIRLcg_(byArray2[n3]);
            }
        }
    }

    public final void a_m1_PABZRV(byte[] byArray, boolean bl2) {
        int n2;
        int n3;
        int n4 = byArray[0];
        int n5 = n4 + 1;
        this.a_f2_B = n4;
        this.a_f4_AALcg_ = new cg[n4 * (bl2 ? 2 : 1)][];
        this.a_f3_AAB = new byte[n4][];
        for (n3 = 0; n3 < n4; ++n3) {
            n2 = byArray[n5++];
            byte by2 = byArray[n5++];
            this.a_f3_AAB[n3] = new byte[n2];
            System.arraycopy(byArray, n5, this.a_f3_AAB[n3], 0, n2);
            n5 += by2 + n2;
        }
        n3 = byArray[n5++];
        this.a_f1_AI = new int[n3];
        this.b = new byte[n3];
        n4 = n5;
        for (n2 = 0; n2 < n3; ++n2) {
            this.a_f1_AI[n2] = n5 - n4;
            this.b[n2] = byArray[n5++];
            for (int i2 = 0; i2 < this.b[n2]; ++i2) {
                for (int i3 = 0; i3 < 4; ++i3) {
                    byte by3 = byArray[n5++];
                    n5 += by3 * 4;
                }
            }
        }
        n2 = n5 - n4;
        this.a_f0_AB = new byte[n2];
        System.arraycopy(byArray, n4, this.a_f0_AB, 0, n2);
    }

    public final int a_m2_PBBIIIRI(byte n2, byte by2, int n3, int n4, int n5) {
        int n6;
        int n7 = this.a_f1_AI[n2];
        ++n7;
        if (n3 >= this.b[n2] || n3 < 0) {
            n3 = 0;
        }
        for (n6 = 0; n6 < n3; ++n6) {
            for (int i2 = 0; i2 < 4; ++i2) {
                n2 = this.a_f0_AB[n7++];
                n7 += n2 << 2;
            }
        }
        for (n6 = 0; n6 < by2 - 1; ++n6) {
            n2 = this.a_f0_AB[n7++];
            n7 += n2 << 2;
        }
        n2 = this.a_f0_AB[n7++];
        cm cm2 = a.a_f3_Lcm_;
        for (int i3 = 0; i3 < n2; ++i3) {
            n6 = this.a_f0_AB[n7] & 0x7F;
            cg[] cgArray = this.a_f4_AALcg_[n6 += this.a_f0_AB[n7] >> 7 == 0 ? (byte)0 : this.a_f2_B];
            n6 = this.a_f0_AB[n7 + 1];
            if (cgArray != null && cgArray[n6] != null) {
                cm2.a_m1_PLcg_IIIRV(cgArray[n6], n4 + this.a_f0_AB[n7 + 2], n5 + this.a_f0_AB[n7 + 3], 20);
            }
            n7 += 4;
        }
        return n3;
    }

    public final byte a_m3_PBRB(byte by2) {
        return this.b[by2];
    }

    public final void a_m4_PLjava_lang_String_Ljava_lang_String_RV(String object, String string) {
        object = e.a_m6_PLjava_lang_String_RAB((String)object);
        this.a_m1_PABZRV((byte[])object, false);
        object = new aj(string);
        this.a_f4_AALcg_[0] = ((aj)object).a_m4_PRALcg_();
    }

    public static s a_m5_PLjava_lang_String_Ljava_lang_String_RLs_(String object, String string) {
        object = e.a_m6_PLjava_lang_String_RAB((String)object);
        s s2 = new s();
        s2.a_m1_PABZRV((byte[])object, true);
        s2.a_m0_PILjava_lang_String_ABRV(0, string, null);
        return s2;
    }
}

