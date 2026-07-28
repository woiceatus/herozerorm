/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.rms.RecordStore
 */
package rpg;

import javax.microedition.rms.RecordStore;
import rpg.g;

public final class b {
    private static final String[] a_f0_ALjava_lang_String_ = new String[]{"HOL.gamedata1", "HOL.gamedata2", "HOL.gamedata3"};
    private static final String[] b_f0_ALjava_lang_String_ = new String[]{"HOL.item1", "HOL.item2", "HOL.item3"};
    private static final String[] c = new String[]{"HOL.slot1", "HOL.slot2", "HOL.slot3"};
    private static final byte[][] a_f1_AAB = new byte[][]{{54, 15, 39, 72, 95}, {46, 37, 30, 14, 62, 80}, {26, 27, 60, 58, 70}};
    private static final byte[][] b_f1_AAB = new byte[][]{{62, 35, 7, 1, 85, 38, 41}, {2, 78, 24, 7, 16, 91}, {84, 87, 4, 57, 83}};

    public static final void a_m0_PRV() {
        try {
            di.m();
            return;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return;
        }
    }

    public static final boolean a_m1_PABBRZ(byte[] byArray, byte by2) {
        return b.a_m6_PLjava_lang_String_ABABRZ(a_f0_ALjava_lang_String_[by2], byArray, a_f1_AAB[by2]);
    }

    public static final byte[] a_m2_PBRAB(byte by2) {
        return b.a_m7_PLjava_lang_String_ABRAB(a_f0_ALjava_lang_String_[by2], a_f1_AAB[by2]);
    }

    public static final boolean b_m0_PABBRZ(byte[] byArray, byte by2) {
        return b.a_m6_PLjava_lang_String_ABABRZ(b_f0_ALjava_lang_String_[by2], byArray, b_f1_AAB[by2]);
    }

    public static final byte[] b_m1_PBRAB(byte by2) {
        return b.a_m7_PLjava_lang_String_ABRAB(b_f0_ALjava_lang_String_[by2], b_f1_AAB[by2]);
    }

    public static final boolean c_m0_PABBRZ(byte[] byArray, byte by2) {
        return b.a_m6_PLjava_lang_String_ABABRZ(c[by2], byArray, b_f1_AAB[by2]);
    }

    public static final byte[] c_m1_PBRAB(byte by2) {
        return b.a_m7_PLjava_lang_String_ABRAB(c[by2], b_f1_AAB[by2]);
    }

    public static final boolean a_m3_PABRZ(byte[] byArray) {
        return b.a_m6_PLjava_lang_String_ABABRZ("HOL.OPT", byArray, b_f1_AAB[0]);
    }

    public static final byte[] a_m4_PRAB() {
        return b.a_m7_PLjava_lang_String_ABRAB("HOL.OPT", b_f1_AAB[0]);
    }

    public static final boolean b_m2_PABRZ(byte[] byArray) {
        return b.a_m6_PLjava_lang_String_ABABRZ("HOL.storage", byArray, b_f1_AAB[0]);
    }

    public static final byte[] b_m3_PRAB() {
        return b.a_m7_PLjava_lang_String_ABRAB("HOL.storage", b_f1_AAB[0]);
    }

    public static final boolean a_m5_PRZ() {
        byte[] byArray = new byte[16];
        byte[] byArray2 = byArray;
        byArray[0] = ax.g_f1_B;
        byArray2[1] = ax.h_f1_B;
        byArray2[2] = ax.i_f1_B;
        byArray2[3] = ax.h_f0_Z ? (byte)1 : 0;
        byArray2[4] = ax.i_f0_Z ? (byte)1 : 0;
        byArray2[5] = ax.j ? (byte)1 : 0;
        byArray2[6] = eb.f_f2_Z ? (byte)1 : 0;
        byArray2[7] = eb.g;
        byArray2[8] = (byte)(di.g_f0_Z ? 1 : 0);
        byArray2[9] = (byte)(di.h_f0_Z ? 1 : 0);
        byArray2[10] = (byte)(di.i_f0_Z ? 1 : 0);
        byArray2[11] = (byte)(di.a_f0_Z ? 1 : 0);
        byArray2[12] = (byte)(di.b_f0_Z ? 1 : 0);
        byArray2[13] = (byte)(di.c_f0_Z ? 1 : 0);
        byArray2[14] = (byte)(di.d_f0_Z ? 1 : 0);
        byArray2[15] = (byte)(di.e_f0_Z ? 1 : 0);
        return b.a_m6_PLjava_lang_String_ABABRZ("HOL.gamestore", byArray2, b_f1_AAB[0]);
    }

    public static final void b_m4_PRV() {
        Object object = b.a_m7_PLjava_lang_String_ABRAB("HOL.gamestore", b_f1_AAB[0]);
        if (object == null) {
            b.a_m5_PRZ();
            return;
        }
        try {
            ax.g_f1_B = object[0];
            ax.h_f1_B = object[1];
            ax.i_f1_B = object[2];
            ax.h_f0_Z = object[3] == 1;
            ax.i_f0_Z = object[4] == 1;
            ax.j = object[5] == 1;
            eb.f_f2_Z = object[6] == 1;
            eb.g = object[7];
            di.g_f0_Z = object[8] == 1;
            di.h_f0_Z = object[9] == 1;
            di.i_f0_Z = object[10] == 1;
            di.a_f0_Z = object[11] == 1;
            di.b_f0_Z = object[12] == 1;
            di.c_f0_Z = object[13] == 1;
            di.d_f0_Z = object[14] == 1;
            di.e_f0_Z = object[15] == 1;
            return;
        }
        catch (Exception exception) {
            object = exception;
            exception.printStackTrace();
            b.a_m5_PRZ();
            return;
        }
    }

    private static final boolean a_m6_PLjava_lang_String_ABABRZ(String object, byte[] object2, byte[] byArray) {
        boolean bl2;
        bh bh2 = null;
        try {
            int n2;
            byte[] byArray2 = new byte[2 + ((byte[])object2).length + 5];
            byte[] byArray3 = byArray;
            byte[] byArray4 = new byte[((byte[])object2).length];
            int n3 = 0;
            for (n2 = 0; n2 < ((byte[])object2).length; ++n2) {
                if (++n3 == byArray3.length) {
                    n3 = 0;
                }
                byArray4[n2] = (byte)(object2[n2] ^ byArray3[n3]);
            }
            object2 = byArray4;
            g.a_m5_PSABIRV((short)(byArray2.length - 2), byArray2, 0);
            System.arraycopy(object2, 0, byArray2, 2, ((byte[])object2).length);
            object2 = b.a_m9_PABIBRAB(object2, ((byte[])object2).length, byArray[0]);
            byArray2[byArray2.length - 5] = object2[0];
            byArray2[byArray2.length - 4] = object2[1];
            byArray2[byArray2.length - 3] = object2[2];
            byArray2[byArray2.length - 2] = object2[3];
            byArray2[byArray2.length - 1] = object2[4];
            bh2 = new bh((String)object, 0);
            n2 = byArray2.length;
            boolean bl3 = false;
            byArray3 = byArray2;
            object2 = bh2;
            if (bh2.a_f2_Ljava_lang_String_ != null) {
                while (object2.a_f2_Ljava_lang_String_.startsWith("/")) {
                    object2.a_f2_Ljava_lang_String_ = object2.a_f2_Ljava_lang_String_.substring(1);
                }
                while ((n3 = object2.a_f2_Ljava_lang_String_.indexOf("/")) > 0) {
                    object2.a_f2_Ljava_lang_String_ = object2.a_f2_Ljava_lang_String_.substring(0, n3) + "." + object2.a_f2_Ljava_lang_String_.substring(n3 + 1);
                }
                if (byArray3 == null || n2 != byArray3.length) {
                    object2.a_f0_AB = new byte[n2];
                    System.arraycopy(byArray3, 0, object2.a_f0_AB, 0, n2);
                } else {
                    object2.a_f0_AB = byArray3;
                }
                try {
                    object = RecordStore.openRecordStore((String)object2.a_f2_Ljava_lang_String_, (boolean)true);
                    if (object.getNumRecords() == 0) {
                        object.addRecord(object2.a_f0_AB, 0, object2.a_f0_AB.length);
                    } else {
                        object.setRecord(1, object2.a_f0_AB, 0, object2.a_f0_AB.length);
                    }
                    object.closeRecordStore();
                }
                catch (Exception exception) {
                    object = exception;
                    exception.printStackTrace();
                }
            }
            object2 = bh2;
            bh2.a_f0_AB = null;
            bh2 = null;
            bl2 = true;
        }
        catch (Exception exception) {
            bl2 = false;
            if (bh2 != null) {
                try {
                    object2 = bh2;
                    bh2.a_f0_AB = null;
                }
                catch (Exception exception2) {}
            }
        }
        catch (Throwable throwable) {
            if (bh2 != null) {
                try {
                    object2 = bh2;
                    bh2.a_f0_AB = null;
                }
                catch (Exception exception) {}
            }
            throw throwable;
        }
        return bl2;
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    private static final byte[] a_m7_PLjava_lang_String_ABRAB(String object, byte[] object2) {
        bh bh2 = null;
        Object object3 = null;
        try {
            bh2 = new bh((String)object, 1);
            object3 = new byte[2];
            bh2.a_m0_PABIIRV((byte[])object3, 0, 2);
            object3 = new byte[(object3[0] & 0xFF) << 8 | object3[1] & 0xFF];
            bh2.a_m0_PABIIRV((byte[])object3, 0, ((byte[])object3).length);
            Object by2 = object2[0];
            object = object3;
            int n2 = ((byte[])object3).length;
            byte[] byArray = b.a_m9_PABIBRAB((byte[])object, n2 - 5, (byte)by2);
            object3 = !(object[n2 - 1] == byArray[4] && object[n2 - 2] == byArray[3] && object[n2 - 3] == byArray[2] && object[n2 - 4] == byArray[1] && object[n2 - 5] == byArray[0]) ? null : b.a_m8_PABABRAB(object3, (byte[])object2);
        }
        catch (Exception exception) {
            object3 = null;
            if (bh2 == null) return object3;
            try {
                object2 = bh2;
                bh2.a_f0_AB = null;
                return object3;
            }
            catch (Exception exception2) {
                return object3;
            }
        }
        catch (Throwable throwable) {
            if (bh2 == null) throw throwable;
            try {
                object2 = bh2;
                bh2.a_f0_AB = null;
                throw throwable;
            }
            catch (Exception exception) {}
            throw throwable;
        }
        try {
            object2 = bh2;
            bh2.a_f0_AB = null;
            return object3;
        }
        catch (Exception exception) {
            return object3;
        }
    }

    private static byte[] a_m8_PABABRAB(byte[] object, byte[] byArray) {
        if (((byte[])object).length <= 0) {
            return null;
        }
        int n2 = ((byte[])object).length - 5;
        byte[] byArray2 = new byte[n2];
        int n3 = 0;
        try {
            for (int i2 = 0; i2 < n2; ++i2) {
                if (++n3 == byArray.length) {
                    n3 = 0;
                }
                byArray2[i2] = (byte)(object[i2] ^ byArray[n3]);
            }
        }
        catch (Exception exception) {
            object = exception;
            exception.printStackTrace();
            return null;
        }
        return byArray2;
    }

    private static final byte[] a_m9_PABIBRAB(byte[] byArray, int n2, byte by2) {
        byte[] byArray2 = new byte[]{0, 0, 0, 0, 0};
        byte[] byArray3 = byArray2;
        byArray2[2] = 0;
        for (int i2 = 0; i2 < n2; ++i2) {
            byArray3[0] = (byte)(byArray3[0] + byArray[i2]);
            byArray3[1] = (byte)(byArray3[1] + (byte)(byArray[i2] << 1));
            byArray3[3] = (i2 & 1) == 1 ? (byte)(byArray3[3] + byArray[i2]) : (byte)(byArray3[3] - byArray3[1]);
            byArray3[4] = (byte)(byArray3[4] + (byte)(byArray[i2] ^ by2));
        }
        return byArray3;
    }
}

