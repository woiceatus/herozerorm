/*
 * Decompiled with CFR 0.152.
 */
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FilterInputStream;
import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Vector;
import rpg.d;

public final class bj
implements d {
    private Vector a_f0_Ljava_util_Vector_ = new Vector(1);
    public byte a_f1_B;

    public bj(byte by2) {
        this.a_f1_B = by2;
    }

    public final int a_m0_PRI() {
        return this.a_f0_Ljava_util_Vector_.size();
    }

    public final as a_m1_PIRLas_(int n2) {
        if (n2 >= this.a_f0_Ljava_util_Vector_.size() || n2 < 0) {
            return null;
        }
        return (as)this.a_f0_Ljava_util_Vector_.elementAt(n2);
    }

    public final int a_m2_PLas_RI(as as2) {
        return this.a_f0_Ljava_util_Vector_.indexOf(as2);
    }

    private boolean a_m3_PLas_BRZ(as as2, byte by2) {
        if (this.a_f0_Ljava_util_Vector_.size() >= this.a_f1_B) {
            return false;
        }
        as2.c = by2;
        this.a_f0_Ljava_util_Vector_.addElement(as2);
        return true;
    }

    private final boolean c(byte by2, byte by3, int n2) {
        as as2 = this.a_m1_PIRLas_(n2);
        return as2 != null && as2.a_f1_B == by2 && as2.b_f0_B == by3;
    }

    public final boolean a_m4_PBBIRZ(byte by2, byte by3, int n2) {
        int n3;
        int n4;
        int n5;
        int n6;
        block5: {
            n6 = 0;
            bj bj2 = this;
            n6 = bj2.a_f0_Ljava_util_Vector_.size();
            for (n5 = 0; n5 < n6; ++n5) {
                if (bj2.a_f0_Ljava_util_Vector_.elementAt(n5) != null) continue;
                n4 = (byte)n5;
                break block5;
            }
            n4 = n3 = n6 < bj2.a_f1_B ? (int)(n6 + 1) : -1;
        }
        if (n4 != -1) {
            return true;
        }
        if (!bj.a_m15_PBRZ(by2)) {
            return false;
        }
        n5 = this.a_f0_Ljava_util_Vector_.size();
        for (int i2 = 0; i2 < n5; ++i2) {
            if (!this.c(by2, by3, i2)) continue;
            bj bj3 = this;
            n6 = i2;
            as as2 = bj3.a_m1_PIRLas_(n6);
            byte by4 = as2 != null ? as2.c : (byte)0;
            n3 = by4;
            if (by4 + n2 <= 99) {
                return true;
            }
            n2 -= 99 - n3;
        }
        return false;
    }

    public final int a_m5_PLas_IRI(as as2, int n2) {
        if (!this.a_m4_PBBIRZ(as2.a_f1_B, as2.b_f0_B, n2)) {
            return 0;
        }
        if (!bj.a_m15_PBRZ(as2.a_f1_B)) {
            this.a_m3_PLas_BRZ(as2, (byte)1);
            return 1;
        }
        int n3 = as2.b_f0_B;
        byte by2 = as2.a_f1_B;
        Object object = this;
        Object object2 = new byte[((bj)object).a_f1_B];
        int n4 = 0;
        int n5 = ((bj)object).a_f0_Ljava_util_Vector_.size();
        for (int n6 = 0; n6 < n5; n6 = (int)((byte)(n6 + 1))) {
            if (!((bj)object).c(by2, (byte)n3, n6)) continue;
            object2[n4++] = n6;
        }
        byte[] byArray = new byte[n4];
        System.arraycopy(object2, 0, byArray, 0, n4);
        byte[] byArray2 = n4 == 0 ? null : byArray;
        object = byArray2;
        if (byArray2 != null) {
            n3 = n2;
            for (n4 = 0; n4 < ((Object)object).length; ++n4) {
                as as3 = this.a_m1_PIRLas_((int)object[n4]);
                object2 = as3;
                by2 = as3.c;
                if (by2 == 99) continue;
                byte by3 = object2.c = (byte)((n3 += by2) > 99 ? 99 : (byte)n3);
                if ((n3 -= object2.c) > 0) continue;
                return n2;
            }
            if (this.a_m3_PLas_BRZ(as2, (byte)n3)) {
                return n2;
            }
            return n2 - n3;
        }
        if (this.a_m3_PLas_BRZ(as2, (byte)n2)) {
            return n2;
        }
        return 0;
    }

    public final boolean b_m0_PBBIRZ(byte by2, byte by3, int n2) {
        for (byte by4 = (byte)(this.a_f0_Ljava_util_Vector_.size() - 1); by4 >= 0; by4 = (byte)(by4 - 1)) {
            as as2;
            if (!this.c(by2, by3, by4) || (as2 = (as)this.a_f0_Ljava_util_Vector_.elementAt(by4)).c()) continue;
            int n3 = as2.c < n2 ? (int)as2.c : n2;
            this.a_m6_PIIRV(by4, n3);
            if ((n2 -= n3) > 0) continue;
            this.b_m2_PRV();
            return true;
        }
        this.b_m2_PRV();
        return false;
    }

    public final void a_m6_PIIRV(int n2, int n3) {
        as as2 = this.a_m1_PIRLas_(n2);
        if (as2 != null) {
            as2.c = (byte)(as2.c - n3);
            if (as2.c <= 0) {
                this.a_m7_PIRV(n2);
            }
        }
    }

    public final void a_m7_PIRV(int n2) {
        this.a_f0_Ljava_util_Vector_.removeElementAt(n2);
    }

    public final void a_m8_PRV() {
        for (int i2 = this.a_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            as as2 = (as)this.a_f0_Ljava_util_Vector_.elementAt(i2);
            if (as2.a_f1_B != 19) continue;
            this.a_f0_Ljava_util_Vector_.removeElementAt(i2);
        }
    }

    public final byte[] a_m9_PBBZBRAB(byte by2, byte by3, boolean bl2, byte by4) {
        bl2 = false;
        int n2 = this.a_f0_Ljava_util_Vector_.size();
        byte[] byArray = new byte[n2];
        for (int n3 = 0; n3 < n2; n3 = (int)((byte)(n3 + 1))) {
            as as2 = (as)this.a_f0_Ljava_util_Vector_.elementAt(n3);
            if (as2 == null || as2.a_f1_B != by2 && as2.a_f1_B != by3 || as2 instanceof bm && ((bm)as2).i >= 0 || ((bm)as2).d_f0_B > by4) continue;
            byArray[bl2] = n3;
            bl2 += 1;
        }
        if (!bl2) {
            return null;
        }
        byte[] byArray2 = new byte[bl2];
        System.arraycopy(byArray, 0, byArray2, 0, bl2 ? 1 : 0);
        return byArray2;
    }

    public final int a_m10_PBBRI(byte by2, byte by3) {
        return this.a_m11_PBBZRI(by2, by3, false);
    }

    public final int a_m11_PBBZRI(byte by2, byte by3, boolean bl2) {
        int n2 = 0;
        for (int i2 = 0; i2 < this.a_f0_Ljava_util_Vector_.size(); ++i2) {
            as as2 = (as)this.a_f0_Ljava_util_Vector_.elementAt(i2);
            if (bl2 && as2 != null && as2.c() || as2 == null || as2.a_f1_B != by2 || as2.b_f0_B != by3) continue;
            n2 += as2.c;
        }
        return n2;
    }

    public final as a_m12_PBBRLas_(byte by2, byte by3) {
        int n2;
        int n3;
        block2: {
            byte by4 = by3;
            by3 = (byte)20;
            bj bj2 = this;
            int n4 = bj2.a_f0_Ljava_util_Vector_.size();
            for (int n5 = 0; n5 < n4; n5 = (int)((byte)(n5 + 1))) {
                if (!bj2.c(by3, by4, n5)) continue;
                n3 = n5;
                break block2;
            }
            n3 = n2 = -1;
        }
        if (n3 == -1) {
            return null;
        }
        return (as)this.a_f0_Ljava_util_Vector_.elementAt(n2);
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    public final byte[] a_m13_PRAB() {
        byte[] byArray;
        int n2 = this.a_f0_Ljava_util_Vector_.size();
        ByteArrayOutputStream byteArrayOutputStream = null;
        FilterOutputStream filterOutputStream = null;
        try {
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = new DataOutputStream(byteArrayOutputStream);
            ((DataOutputStream)filterOutputStream).writeByte(n2);
            for (int i2 = 0; i2 < n2; ++i2) {
                Object object = (as)this.a_f0_Ljava_util_Vector_.elementAt(i2);
                if (object == null) {
                    ((DataOutputStream)filterOutputStream).writeByte(0);
                    continue;
                }
                object = as.a_m2_PLas_RAB((as)object);
                ((DataOutputStream)filterOutputStream).writeByte(((Object)object).length);
                ((OutputStream)filterOutputStream).write((byte[])object);
            }
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (IOException iOException) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) return null;
                byteArrayOutputStream.close();
                return null;
            }
            catch (IOException iOException2) {
                return null;
            }
        }
        catch (Throwable throwable) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) throw throwable;
                byteArrayOutputStream.close();
                throw throwable;
            }
            catch (IOException iOException) {}
            throw throwable;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            return byArray;
        }
        catch (IOException iOException) {}
        return byArray;
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    public final void a_m14_PABRV(byte[] byArray) {
        ByteArrayInputStream byteArrayInputStream = null;
        FilterInputStream filterInputStream = null;
        try {
            byteArrayInputStream = new ByteArrayInputStream(byArray);
            filterInputStream = new DataInputStream(byteArrayInputStream);
            int n2 = ((DataInputStream)filterInputStream).readByte();
            for (int i2 = 0; i2 < n2; ++i2) {
                byte by2 = ((DataInputStream)filterInputStream).readByte();
                if (by2 == 0) continue;
                Object object = new byte[by2];
                ((DataInputStream)filterInputStream).read((byte[])object);
                as as2 = as.a_m1_PABRLas_(object);
                object = as2;
                if (as2 == null) continue;
                this.a_f0_Ljava_util_Vector_.addElement(object);
            }
        }
        catch (IOException iOException) {
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream == null) return;
                byteArrayInputStream.close();
                return;
            }
            catch (IOException iOException2) {
                return;
            }
        }
        catch (Throwable throwable) {
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream == null) throw throwable;
                byteArrayInputStream.close();
                throw throwable;
            }
            catch (IOException iOException) {}
            throw throwable;
        }
        try {
            filterInputStream.close();
            byteArrayInputStream.close();
            return;
        }
        catch (IOException iOException) {
            return;
        }
    }

    public final byte[] b_m1_PRAB() {
        int n2;
        byte[] byArray = new byte[7];
        for (n2 = 0; n2 < 7; n2 = (int)((byte)(n2 + 1))) {
            byArray[n2] = -1;
        }
        n2 = this.a_f0_Ljava_util_Vector_.size();
        int n3 = 0;
        for (int n4 = 0; n4 < n2; n4 = (int)((byte)(n4 + 1))) {
            as as2 = (as)this.a_f0_Ljava_util_Vector_.elementAt(n4);
            if (as2 == null || !as2.c()) continue;
            byArray[((bm)as2).i] = n4;
            byte by2 = (byte)(n3 + 1);
            n3 = by2;
            if (by2 >= 7) break;
        }
        return byArray;
    }

    private final void b_m2_PRV() {
        Object object;
        int n2;
        for (n2 = 0; n2 < this.a_f0_Ljava_util_Vector_.size() - 1; n2 = (int)((byte)(n2 + 1))) {
            as as2 = (as)this.a_f0_Ljava_util_Vector_.elementAt(n2);
            if (as2 == null || !bj.a_m15_PBRZ(as2.a_f1_B) || as2.c >= 99) continue;
            for (byte by2 = (byte)(n2 + 1); by2 < this.a_f0_Ljava_util_Vector_.size(); by2 = (byte)(by2 + 1)) {
                object = (as)this.a_f0_Ljava_util_Vector_.elementAt(by2);
                if (object == null || ((as)object).a_f1_B != as2.a_f1_B || ((as)object).b_f0_B != as2.b_f0_B) continue;
                byte by3 = as2.c;
                byte by4 = ((as)object).c;
                if (by3 + by4 <= 99) {
                    as2.a_m8_PIRV(by4);
                    this.a_m7_PIRV(by2);
                    continue;
                }
                by3 = (byte)(99 - by3);
                as2.a_m8_PIRV(by3);
                ((as)object).c = (byte)(((as)object).c - by3);
            }
        }
        object = this;
        int n3 = 0;
        for (n2 = ((bj)object).a_f0_Ljava_util_Vector_.size() - 1; n2 >= 0; --n2) {
            as as3 = (as)((bj)object).a_f0_Ljava_util_Vector_.elementAt(n2);
            if (as3 == null) {
                ((bj)object).a_f0_Ljava_util_Vector_.removeElementAt(n2);
                continue;
            }
            ++n3;
        }
    }

    private static boolean a_m15_PBRZ(byte by2) {
        return by2 >= 16;
    }
}

