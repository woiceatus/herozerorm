/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

public final class am
implements dy {
    public static s[] a_f0_ALs_;
    public static byte[] a_f1_AB;
    public static byte[] b;

    public static final void a_m0_PABBABRV(byte[] byArray, byte by2, byte[] byArray2) {
        byte by3 = byArray[0];
        byte[] byArray3 = e.a_m6_PLjava_lang_String_RAB("/en/cif/h" + (by3 < 10 ? "0" : "") + by3);
        am.a_f0_ALs_[by2] = new s();
        a_f0_ALs_[by2].a_m1_PABZRV(byArray3, true);
        byArray3 = new byte[4];
        System.arraycopy(byArray, 1, byArray3, 0, 4);
        byte[] byArray4 = new byte[4];
        System.arraycopy(byArray, 5, byArray4, 0, 4);
        am.a_m1_PLs_ABABABRV(a_f0_ALs_[by2], byArray3, byArray4, byArray2);
        am.a_f0_ALs_[by2].a_f3_AAB = null;
        am.a_f1_AB[by2] = byArray[9];
        am.b[by2] = byArray[10];
    }

    private static void a_m1_PLs_ABABABRV(s s2, byte[] byArray, byte[] byArray2, byte[] byArray3) {
        for (int i2 = 0; i2 < byArray2.length; ++i2) {
            if (byArray2[i2] == 0) continue;
            String string = "/en/" + i2 + "/" + (byArray2[i2] < 10 ? "0" : "") + byArray2[i2];
            byte[] byArray4 = null;
            if (byArray[i2] > 0) {
                byArray4 = e.a_m8_PABIRAB(byArray3, byArray[i2] - 1);
            }
            s2.a_m0_PILjava_lang_String_ABRV(i2, string, byArray4);
        }
        s2.a_f3_AAB = null;
    }
}

