/*
 * Decompiled with CFR 0.152.
 */
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.OutputStream;
import rpg.a;
import rpg.e;

final class dd
extends de {
    private String b = null;
    protected int e = 0;
    public as a = null;
    private String c = null;

    public dd(n n2, as as2) {
        super(n2, (byte)5);
        if (de.a_f1_ALbj_ == null || this.f_f1_Z) {
            this.g();
        }
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.c_m0_PRV();
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            switch (this.a_f2_B) {
                case 0: {
                    this.b_f1_Ln_ = new cv((n)this, 0, rpg.e.h_f0_Lch_.a_m0_PIRAB(61));
                    break;
                }
                case 1: {
                    this.b_f1_Ln_ = new bb(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(65));
                    break;
                }
                case 2: {
                    this.b_f1_Ln_ = new dj((n)this, rpg.e.h_f0_Lch_.a_m1_PIIRAAB(66, 67));
                    break;
                }
                case 3: {
                    this.b_f1_Ln_ = new cv((n)this, 1, rpg.e.h_f0_Lch_.a_m0_PIRAB(63));
                    break;
                }
                case 4: {
                    this.b_f1_Ln_ = this.b == null || this.b.length() == 0 ? new br((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(38), '\u0000') : (this.e == 0 && this.a == null && (this.c == null || this.c.trim().length() == 0) ? new br((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(26), '\u0000') : new bt((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(64), 3, false, true));
                }
            }
            return true;
        }
        return this.c_m2_PIIRZ(n2, n3);
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    final void a_m1_PBBRV(byte by2, byte by3) {
        byte[] byArray;
        block31: {
            this.c_m0_PRV();
            if (by2 == 10) {
                switch (this.a_f2_B) {
                    case 0: {
                        this.b = de.a_f0_Ljava_lang_String_;
                        break;
                    }
                    case 3: {
                        this.c = de.a_f0_Ljava_lang_String_;
                        break;
                    }
                }
                de.a_f0_Ljava_lang_String_ = "";
            } else if (by2 == 6) {
                if (by3 == 0) {
                    this.b_f1_Ln_ = new dk(this, 1);
                } else {
                    this.a = null;
                }
            }
            if (by2 != 3) return;
            if (by3 != 0) return;
            this.b_f1_Ln_ = new br((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(4));
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            DataOutputStream dataOutputStream = new DataOutputStream(byteArrayOutputStream);
            byArray = null;
            try {
                if (this.b == null) {
                    dataOutputStream.writeByte(0);
                } else {
                    byArray = this.b.getBytes();
                    dataOutputStream.writeByte(byArray.length);
                    ((OutputStream)dataOutputStream).write(byArray);
                }
                dataOutputStream.writeInt(this.e);
                if (this.a == null) {
                    dataOutputStream.writeLong(0L);
                } else {
                    dataOutputStream.writeLong(this.a.a_f0_J);
                }
                if (this.c == null) {
                    dataOutputStream.writeByte(0);
                } else {
                    byArray = this.c.getBytes();
                    dataOutputStream.writeByte(byArray.length);
                    ((OutputStream)dataOutputStream).write(byArray);
                }
                byArray = byteArrayOutputStream.toByteArray();
            }
            catch (Exception exception) {
                byArray = null;
                try {
                    dataOutputStream.close();
                }
                catch (Exception exception2) {}
                try {
                    byteArrayOutputStream.close();
                }
                catch (Exception exception3) {}
                break block31;
            }
            catch (Throwable throwable) {
                try {
                    dataOutputStream.close();
                }
                catch (Exception exception) {}
                try {
                    byteArrayOutputStream.close();
                    throw throwable;
                }
                catch (Exception exception) {}
                throw throwable;
            }
            try {
                dataOutputStream.close();
            }
            catch (Exception exception) {}
            try {
                byteArrayOutputStream.close();
            }
            catch (Exception exception) {}
        }
        if (byArray == null) {
            this.c_m0_PRV();
            return;
        }
        byArray = c.a_m2_PBABRAB((byte)24, byArray);
        this.a_m1_PABZZRV(byArray, false, false);
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        this.a_m9_PLcm_ABZZRV(cm2, rpg.e.h_f0_Lch_.a_m0_PIRAB(2), true, false);
        int n2 = this.a_ + 4;
        int n3 = this.a_ + 22;
        int n4 = this.a_ + 68;
        int n5 = this.b_ + 18;
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, n5, 14, 12, this.a_f2_B == 0 ? 0x660000 : 3550755, this.a_f2_B == 0 ? 0xBD0000 : 7027456);
        n.a_m6_PLcm_IIIIIIRV(cm2, n3, n5, 93, 12, this.a_f2_B == 0 ? 0x660000 : 3550755, this.a_f2_B == 0 ? 0xBD0000 : 7027456);
        if (this.b != null && this.b.length() != 0) {
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, this.b.getBytes(), 0, 1);
        } else {
            cm2.a_m2_PIRV(this.a_f2_B == 0 ? 16775602 : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(57), 0, 1);
        }
        ac.a_m0_PLcm_IIABIRV(cm2, this.a_ + 5, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(46), 0);
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, n5 += 14, 14, 12, this.a_f2_B == 1 ? 0x660000 : 3550755, this.a_f2_B == 1 ? 0xBD0000 : 7027456);
        cm2.a_m1_PLcg_IIIRV(rpg.e.t, n2 + 7, n5 + 5, 3);
        n.a_m6_PLcm_IIIIIIRV(cm2, n3, n5, 93, 12, this.a_f2_B == 1 ? 0x660000 : 3550755, this.a_f2_B == 1 ? 0xBD0000 : 7027456);
        if (this.e > 0) {
            n.b_m6_PLcm_IIIIIRV(cm2, this.e, n4, n5 + 2, 1, 0);
        } else {
            cm2.a_m2_PIRV(this.a_f2_B == 1 ? 16775602 : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(58), 0, 1);
        }
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, n5 += 14, 14, 14, this.a_f2_B == 2 ? 0x660000 : 3550755, this.a_f2_B == 2 ? 0xBD0000 : 7027456);
        n.a_m6_PLcm_IIIIIIRV(cm2, n3, n5, 93, 12, this.a_f2_B == 2 ? 0x660000 : 3550755, this.a_f2_B == 2 ? 0xBD0000 : 7027456);
        if (this.a != null) {
            this.a.a_m10_PLcm_IIZZRV(cm2, n2, n5 - 1, true, true);
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, this.a.a_f3_AB, 0, 1);
        } else {
            cm2.a_m2_PIRV(this.a_f2_B == 2 ? 16775602 : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(59), 0, 1);
        }
        n.a_m6_PLcm_IIIIIIRV(cm2, n3, n5 += 14, 93, 41, this.a_f2_B == 3 ? 0x660000 : 3550755, this.a_f2_B == 3 ? 0xBD0000 : 7027456);
        if (this.c != null && this.c.length() > 0) {
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m1_PLcm_IIIIABRV(cm2, n3 + 2, n5 + 2, 89, 0, this.c.getBytes());
        } else {
            cm2.a_m2_PIRV(this.a_f2_B == 3 ? 16775602 : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(60), 0, 1);
        }
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, n5 += 43, 111, 12, this.a_f2_B == 4 ? 0x660000 : 3550755, this.a_f2_B == 4 ? 0xBD0000 : 7027456);
        cm2.a_m2_PIRV(this.a_f2_B == 4 ? 16775602 : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(2), 0, 1);
    }
}

