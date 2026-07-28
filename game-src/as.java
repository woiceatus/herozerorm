/*
 * Decompiled with CFR 0.152.
 */
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FilterInputStream;
import rpg.a;
import rpg.e;
import rpg.g;

public class as {
    private byte d;
    public long a_f0_J;
    public byte a_f1_B;
    public byte b_f0_B;
    public byte c;
    public int a_f2_I;
    public byte[] a_f3_AB;
    public byte[] b_f1_AB;
    private boolean a_f4_Z;

    protected as(byte by2, byte by3) {
        this.c = 1;
        this.a_f3_AB = null;
        this.b_f1_AB = null;
        this.a_f4_Z = true;
        this.a_f1_B = by2;
        this.b_f0_B = by3;
        this.c = 1;
    }

    public static final synchronized as a_m0_PBBRLas_(byte by2, byte by3) {
        as as2 = by2 >= 0 && by2 <= 15 ? new bm(by2, by3) : (by2 == 18 ? new dv(by2, by3) : (by2 == 17 ? new ba(by2, by3) : new as(by2, by3)));
        byte[] byArray = e.a_m7_PLjava_lang_String_IRAB("/itm/" + (by2 < 10 ? "0" : "") + by2, by3);
        if (!e.a_m9_PABRZ(byArray)) {
            as2 = null;
        } else {
            try {
                int n2 = as2.a_m7_PABIRI(byArray, 0);
                if (by2 == 19) {
                    as2.a_f4_Z = byArray[n2] != 0;
                }
            }
            catch (Exception exception) {
                as2 = null;
            }
        }
        return as2;
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    public static final as a_m1_PABRLas_(byte[] byArray) {
        as as2;
        block16: {
            as2 = null;
            ByteArrayInputStream byteArrayInputStream = null;
            FilterInputStream filterInputStream = null;
            try {
                byteArrayInputStream = new ByteArrayInputStream(byArray);
                filterInputStream = new DataInputStream(byteArrayInputStream);
                byte by2 = ((DataInputStream)filterInputStream).readByte();
                byte by3 = ((DataInputStream)filterInputStream).readByte();
                as2 = as.a_m0_PBBRLas_(by2, by3);
                if (as2 != null) {
                    as2.a_m6_PLjava_io_DataInputStream_RV((DataInputStream)filterInputStream);
                }
            }
            catch (Exception exception) {
                as2 = null;
                try {
                    filterInputStream.close();
                }
                catch (Exception exception2) {}
                try {
                    byteArrayInputStream.close();
                }
                catch (Exception exception3) {}
                break block16;
            }
            catch (Throwable throwable) {
                try {
                    filterInputStream.close();
                }
                catch (Exception exception) {}
                try {
                    byteArrayInputStream.close();
                    throw throwable;
                }
                catch (Exception exception) {}
                throw throwable;
            }
            try {
                filterInputStream.close();
            }
            catch (Exception exception) {}
            try {
                byteArrayInputStream.close();
            }
            catch (Exception exception) {}
        }
        if (as2 == null) return as2;
        if (as2.a_m3_PRB() == as2.d) return as2;
        return null;
    }

    public static final byte[] a_m2_PLas_RAB(as as2) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        DataOutputStream dataOutputStream = new DataOutputStream(byteArrayOutputStream);
        as2.d = as2.a_m3_PRB();
        try {
            dataOutputStream = as2.a_m5_PLjava_io_DataOutputStream_RLjava_io_DataOutputStream_(dataOutputStream);
            dataOutputStream.close();
            byteArrayOutputStream.close();
        }
        catch (Exception exception) {
            return null;
        }
        return byteArrayOutputStream.toByteArray();
    }

    protected byte a_m3_PRB() {
        int n2 = 0 + as.a_m4_PJIRI(this.a_f0_J, 10);
        n2 += as.a_m4_PJIRI(this.a_f0_J, 100);
        n2 += as.a_m4_PJIRI(this.a_f0_J, 100000);
        n2 += this.c << 3;
        n2 += this.a_f1_B << 6;
        return (byte)((n2 += this.b_f0_B << 3) % 100);
    }

    private static int a_m4_PJIRI(long l2, int n2) {
        if (l2 == 0L) {
            return 0;
        }
        return (int)(l2 / (long)n2 % 10L);
    }

    protected DataOutputStream a_m5_PLjava_io_DataOutputStream_RLjava_io_DataOutputStream_(DataOutputStream dataOutputStream) {
        dataOutputStream.writeByte(this.a_f1_B);
        dataOutputStream.writeByte(this.b_f0_B);
        dataOutputStream.writeByte(this.c);
        dataOutputStream.writeLong(this.a_f0_J);
        dataOutputStream.writeByte(this.d);
        return dataOutputStream;
    }

    protected void a_m6_PLjava_io_DataInputStream_RV(DataInputStream dataInputStream) {
        this.c = dataInputStream.readByte();
        this.a_f0_J = dataInputStream.readLong();
        this.d = dataInputStream.readByte();
    }

    protected int a_m7_PABIRI(byte[] byArray, int n2) {
        byte by2 = byArray[n2++];
        this.a_f3_AB = new byte[by2];
        System.arraycopy(byArray, n2, this.a_f3_AB, 0, by2);
        this.a_f2_I = g.a_m2_PABIRI(byArray, n2 += by2);
        n2 += 4;
        this.a_f0_J = System.currentTimeMillis();
        by2 = byArray[n2++];
        this.b_f1_AB = new byte[by2];
        System.arraycopy(byArray, n2, this.b_f1_AB, 0, by2);
        return n2 += by2;
    }

    public final void a_m8_PIRV(int n2) {
        this.c = (byte)(this.c + n2);
    }

    public final void a_m9_PLcm_IIRV(cm cm2, int n2, int n3) {
        this.a_m10_PLcm_IIZZRV(cm2, n2, n3, false, true);
    }

    public final void a_m10_PLcm_IIZZRV(cm cm2, int n2, int n3, boolean bl2, boolean bl3) {
        if (bl2) {
            cm2.b_m0_PIIIIRV(n2 + 1, n3 + 1, 12, 12);
        } else {
            cm2.b_m0_PIIIIRV(n2, n3, 14, 14);
        }
        cm2.a_m1_PLcg_IIIRV(e.k_f2_ALcg_[29], n2, n3, 20);
        int n4 = this.a_f1_B + (this.a_f1_B == 20 ? this.b_f0_B : (byte)0);
        cm2.a_m1_PLcg_IIIRV(e.k_f2_ALcg_[n4], n2 + 7, n3 + 7, 3);
        a.a_m1_PLcm_RV(cm2);
    }

    public final boolean a_m11_PRZ() {
        return this.a_f1_B == 20 && this.b_f0_B >= 2;
    }

    public final boolean b() {
        return this instanceof bm;
    }

    public final boolean c() {
        return this instanceof bm && ((bm)this).i >= 0;
    }

    public final boolean d() {
        return this.a_f4_Z;
    }

    public as() {
    }

    public static void a_m12_PBRV(byte by2) {
        ct.a_f0_Ljavax_microedition_lcdui_Display_.vibrate(80);
    }
}

