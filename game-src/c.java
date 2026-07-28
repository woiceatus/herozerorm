/*
 * Decompiled with CFR 0.152.
 */
import java.io.DataInputStream;
import java.io.InputStream;
import java.io.OutputStream;

public final class c {
    private static boolean a_f0_Z = false;
    private static InputStream a_f1_Ljava_io_InputStream_ = null;
    private static DataInputStream a_f2_Ljava_io_DataInputStream_ = null;
    private static OutputStream a_f3_Ljava_io_OutputStream_ = null;

    public static final boolean a_m0_PRZ() {
        return false;
    }

    public static final void a_m1_PZRV(boolean bl2) {
    }

    public static final byte[] a_m2_PBABRAB(byte by2, byte[] byArray) {
        int n2 = 5;
        if (byArray != null) {
            n2 = 5 + byArray.length;
        }
        byte[] byArray2 = new byte[n2];
        byte[] byArray3 = byArray2;
        byArray2[0] = (byte)(n2 >>> 24);
        byArray3[1] = (byte)(n2 >> 16);
        byArray3[2] = (byte)(n2 >> 8);
        byArray3[3] = (byte)n2;
        byArray3[4] = by2;
        if (byArray != null) {
            System.arraycopy(byArray, 0, byArray3, 5, byArray.length);
        }
        return byArray3;
    }
}

