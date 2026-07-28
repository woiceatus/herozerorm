/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;
import rpg.g;

public final class dt
implements dy {
    public static dt[] a_f0_ALdt_ = null;
    s a_f1_Ls_ = null;
    byte[] a_f2_AB;
    private byte k;
    byte a_f3_B;
    private byte l;
    private byte[] c_f0_AB = new byte[4];
    private byte[] d_f0_AB = new byte[6];
    byte b_f0_B;
    byte c_f1_B;
    short a_f4_S;
    short b_f1_S;
    short c_f2_S;
    byte d_f1_B;
    short d_f2_S;
    short e_f0_S;
    short f_f0_S;
    boolean a_f5_Z;
    boolean b_f2_Z;
    boolean c_f3_Z;
    byte e_f1_B;
    public byte f_f1_B;
    byte[] b_f3_AB;
    byte g;
    byte h;
    byte i;
    byte j;
    boolean d_f3_Z;

    public static final void a_m0_PIRV(int n2) {
        a_f0_ALdt_ = new dt[n2];
    }

    public static final void a_m1_PBSABABABRV(byte by2, short s2, byte[] byArray, byte[] byArray2, byte[] byArray3) {
        byte[] byArray4 = e.a_m8_PABIRAB(byArray, s2);
        if (!e.a_m9_PABRZ(byArray4)) {
            dt.a_f0_ALdt_[by2] = null;
            return;
        }
        dt dt2 = new dt();
        int n2 = byArray4[0];
        dt2.a_f2_AB = new byte[n2];
        System.arraycopy(byArray4, 1, dt2.a_f2_AB, 0, n2);
        int n3 = ++n2;
        dt2.k = byArray4[n3];
        int n4 = ++n2;
        dt2.a_f3_B = byArray4[n4];
        int n5 = ++n2;
        dt2.l = byArray4[n5];
        System.arraycopy(byArray4, ++n2, dt2.c_f0_AB, 0, 4);
        System.arraycopy(byArray4, n2 += 4, dt2.d_f0_AB, 0, 6);
        n2 += 6;
        if (dt2.d_f0_AB[0] == 0 && dt2.d_f0_AB[1] == 0 && dt2.d_f0_AB[2] == 0 && dt2.d_f0_AB[3] == 0 && dt2.d_f0_AB[4] == 0 && dt2.d_f0_AB[5] == 0) {
            dt2.d_f0_AB = null;
        }
        dt2.b_f0_B = byArray4[n2++];
        dt2.c_f1_B = byArray4[n2++];
        dt2.a_f4_S = rpg.g.b_m1_PABIRS(byArray4, n2);
        dt2.b_f1_S = rpg.g.b_m1_PABIRS(byArray4, n2 += 2);
        dt2.c_f2_S = rpg.g.b_m1_PABIRS(byArray4, n2 += 2);
        n2 += 2;
        dt2.d_f1_B = byArray4[n2++];
        dt2.d_f2_S = rpg.g.b_m1_PABIRS(byArray4, n2);
        dt2.e_f0_S = rpg.g.b_m1_PABIRS(byArray4, n2 += 2);
        dt2.f_f0_S = rpg.g.b_m1_PABIRS(byArray4, n2 += 2);
        n2 += 2;
        dt2.a_f5_Z = byArray4[n2++] == 1;
        dt2.b_f2_Z = byArray4[n2++] == 1;
        dt2.c_f3_Z = byArray4[n2++] == 1;
        dt2.e_f1_B = byArray4[n2++];
        dt2.b_f3_AB = new byte[24];
        System.arraycopy(byArray4, n2, dt2.b_f3_AB, 0, 24);
        n2 += 24;
        dt2.g = byArray4[n2++];
        dt2.h = byArray4[n2++];
        dt2.i = byArray4[n2++];
        dt2.j = byArray4[n2++];
        if (dt2.a_f3_B == 5) {
            dt2.j = 0;
        }
        dt2.d_f3_Z = byArray4[n2] == 0;
        dt.a_f0_ALdt_[by2] = dt2;
        dt dt3 = dt2;
        if (dt3.l >= 0) {
            dt3.a_f1_Ls_ = new s();
            byArray4 = e.a_m6_PLjava_lang_String_RAB((dt3.k == 0 ? "/en/cif/h" : "/en/cif/a") + (dt3.l < 10 ? "0" : "") + dt3.l);
            dt3.a_f1_Ls_.a_m1_PABZRV(byArray4, true);
        }
        if (dt2.a_f1_Ls_ != null) {
            dt2.a_m2_PABABRV(byArray2, byArray3);
            dt2.a_f1_Ls_.a_f3_AAB = null;
        }
        dt2.d_f0_AB = null;
        dt2.c_f0_AB = null;
    }

    private void a_m2_PABABRV(byte[] byArray, byte[] object) {
        if (this.d_f0_AB == null) {
            return;
        }
        byArray = this.k == 0 ? byArray : object;
        for (int i2 = 0; i2 < 6; ++i2) {
            if (this.d_f0_AB[i2] == 0) continue;
            object = "/en/";
            if (this.k == 0) {
                object = (String)object + i2 + "/";
            }
            object = (String)object + (this.d_f0_AB[i2] < 10 ? "0" : "") + this.d_f0_AB[i2];
            byte[] byArray2 = null;
            if (i2 < this.c_f0_AB.length && this.c_f0_AB[i2] > 0) {
                byArray2 = e.a_m8_PABIRAB(byArray, this.c_f0_AB[i2] - 1);
            }
            this.a_f1_Ls_.a_m0_PILjava_lang_String_ABRV(i2, (String)object, byArray2);
        }
    }

    public static final void a_m3_PRV() {
        a_f0_ALdt_ = null;
        av.a_f0_Lav_ = null;
        av.a_f1_ALbi_ = null;
        ap.a = null;
        cw.a = null;
    }
}

