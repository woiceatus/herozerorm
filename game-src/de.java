/*
 * Decompiled with CFR 0.152.
 */
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.OutputStream;
import rpg.b;
import rpg.e;
import rpg.g;

public abstract class de
extends p
implements Runnable {
    public static String a_f0_Ljava_lang_String_ = null;
    protected static boolean e = false;
    protected static int f_f0_I = 0;
    protected static bj[] a_f1_ALbj_ = null;
    protected boolean f_f1_Z = true;
    protected static byte[] a_f2_AB = null;
    protected static byte[] b = null;

    public de(n n2, byte by2) {
        super(n2, by2);
    }

    protected final void a_m0_PRV() {
        di.a_f7_J = di.a_f8_AJ[di.j] = System.currentTimeMillis();
        di.b_f3_J = di.a_f8_AJ[di.j];
        di.l();
    }

    public de(n n2, byte by2, byte by3, byte by4) {
        super(n2, by2, by3, by4);
    }

    public final void run() {
        de.h();
        di.m();
    }

    protected final void a_m1_PABZZRV(byte[] byArray, boolean bl2, boolean bl3) {
        if (bl2) {
            this.c_m0_PRV();
            this.b_f1_Ln_ = new br((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(4));
        }
    }

    public final void g() {
        byte[] byArray = c.a_m2_PBABRAB((byte)30, null);
        this.a_m1_PABZZRV(byArray, true, false);
    }

    protected static void h() {
        int n2;
        byte[] byArray = rpg.b.b_m3_PRAB();
        if (byArray == null) {
            byArray = new byte[6];
            f_f0_I = 0;
            g.a_m4_PIABIRV(0, byArray, 0);
            byArray[4] = 84;
            byArray[5] = 0;
            rpg.b.b_m2_PABRZ(byArray);
        }
        int n3 = 0;
        f_f0_I = g.a_m2_PABIRI(byArray, 0);
        n3 += 4;
        ++n3;
        int n4 = byArray[4];
        int n5 = (n4 - 1) / 28 + 1;
        if (n5 <= 0) {
            n5 = 1;
        }
        a_f1_ALbj_ = new bj[n5];
        n5 = 0;
        while (n4 > 0) {
            n2 = Math.min(28, n4);
            n4 -= n2;
            de.a_f1_ALbj_[n5++] = new bj((byte)n2);
        }
        ++n3;
        n2 = byArray[5];
        n5 = 0;
        for (int i2 = 0; i2 < n2; ++i2) {
            n4 = byArray[n3++];
            byte[] byArray2 = new byte[n4];
            System.arraycopy(byArray, n3, byArray2, 0, n4);
            n3 += n4;
            as as2 = as.a_m1_PABRLas_(byArray2);
            if (as2 == null) continue;
            a_f1_ALbj_[n5].a_m5_PLas_IRI(as2, as2.c);
            if (a_f1_ALbj_[n5].a_m0_PRI() < de.a_f1_ALbj_[n5].a_f1_B) continue;
            ++n5;
        }
    }

    protected static void i() {
        try {
            int n2;
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            DataOutputStream dataOutputStream = new DataOutputStream(byteArrayOutputStream);
            dataOutputStream.writeInt(f_f0_I);
            dataOutputStream.writeByte(84);
            int n3 = 0;
            for (n2 = 0; n2 < 3; ++n2) {
                n3 += a_f1_ALbj_[n2].a_m0_PRI();
            }
            dataOutputStream.writeByte(n3);
            for (n2 = 0; n2 < 3; ++n2) {
                n3 = a_f1_ALbj_[n2].a_m0_PRI();
                for (int i2 = 0; i2 < n3; ++i2) {
                    Object object = a_f1_ALbj_[n2].a_m1_PIRLas_(i2);
                    if (object == null) continue;
                    object = as.a_m2_PLas_RAB((as)object);
                    dataOutputStream.writeByte(((Object)object).length);
                    ((OutputStream)dataOutputStream).write((byte[])object);
                }
            }
            rpg.b.b_m2_PABRZ(byteArrayOutputStream.toByteArray());
            return;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return;
        }
    }

    public static final void j() {
        if (c.a_m0_PRZ()) {
            c.a_m1_PZRV(false);
        }
        di.g_m0_PRV();
        a_f1_ALbj_ = null;
        bq.e();
    }

    protected void b(cm cm2) {
    }
}

