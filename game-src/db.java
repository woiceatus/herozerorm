/*
 * Decompiled with CFR 0.152.
 */
import rpg.d;

public abstract class db {
    private static cb a_f0_Lcb_ = null;
    private static cb b = null;
    private static cz a_f1_Lcz_ = null;
    private static m a_f2_Lm_ = null;
    private static byte[] a_f3_AB = null;
    private static int a_f4_I = 0;
    private static byte[][] a_f5_AAB = null;
    private static boolean a_f6_Z = false;

    public final int a_m0_PABIRI(byte[] object, int n2) {
        db.a_m1_PRV();
        a_f2_Lm_ = null;
        a_f1_Lcz_ = new cz(this);
        a_f0_Lcb_ = new cb(this);
        b = new cb(this);
        n2 = a_f0_Lcb_.a((byte[])object, n2, 1);
        n2 = b.a((byte[])object, n2, 2);
        int n3 = object[n2] < 0 ? 256 + object[n2] : object[n2];
        ++n2;
        a_f5_AAB = null;
        if (n3 > 0) {
            int n4;
            a_f5_AAB = new byte[n3][];
            for (n4 = 0; n4 < n3; ++n4) {
                int n5 = object[n2] < 0 ? 256 + object[n2] : object[n2];
                ++n2;
                db.a_f5_AAB[n4] = new byte[n5];
            }
            for (n4 = 0; n4 < n3; ++n4) {
                System.arraycopy(object, n2, a_f5_AAB[n4], 0, a_f5_AAB[n4].length);
                n2 += a_f5_AAB[n4].length + 1;
            }
        }
        object = a_f1_Lcz_;
        a_f1_Lcz_.a_f0_I = 0;
        return n2;
    }

    public static void a_m1_PRV() {
        a_f0_Lcb_ = null;
        b = null;
        a_f1_Lcz_ = null;
        a_f2_Lm_ = null;
        a_f3_AB = null;
        a_f4_I = 0;
        a_f5_AAB = null;
        a_f6_Z = false;
    }

    protected static boolean a_m2_PRZ() {
        return a_f0_Lcb_ != null && b != null && a_f1_Lcz_ != null;
    }

    protected static void b_m0_PRV() {
        a_f6_Z = true;
    }

    public static final byte[] a_m3_PIRAB(int n2) {
        if (a_f5_AAB == null) {
            return d.p;
        }
        if (n2 >= a_f5_AAB.length) {
            return d.p;
        }
        return a_f5_AAB[n2];
    }

    public static final void c() {
        a_f2_Lm_ = null;
    }

    protected static final void a_m4_PIRV(int n2) {
        a_f1_Lcz_.a(a_f2_Lm_);
        a_f2_Lm_ = m.a_m0_PLm_RLm_(db.b.a_f3_Lm_);
        int n3 = a_f4_I;
        for (int i2 = 0; i2 < n2; ++i2) {
            n3 += a_f3_AB[i2] < 0 ? 256 + a_f3_AB[i2] : a_f3_AB[i2];
        }
        a_f2_Lm_.a_m3_PIIRV(n3, n3 + (a_f3_AB[n2] < 0 ? 256 + a_f3_AB[n2] : a_f3_AB[n2]));
        a_f3_AB = null;
    }

    private final boolean a_m5_PLm_RZ(m m2) {
        boolean bl2 = false;
        while (!m2.a_m8_PRZ()) {
            byte by2 = m2.a_m6_PRB();
            if (by2 >= 0 && by2 < db.b.a_f2_S) {
                m m3 = m.a_m0_PLm_RLm_(db.b.a_f3_Lm_);
                m3.a_m3_PIIRV(db.b.a_f1_AS[by2], db.b.a_f1_AS[by2 + 1]);
                a_f1_Lcz_.a(m3);
                bl2 = true;
                continue;
            }
            if (by2 == -1) {
                int n2;
                int n3 = m2.a_m6_PRB();
                byte[] byArray = new byte[n3];
                for (n2 = 0; n2 < n3; ++n2) {
                    byArray[n2] = m2.a_m6_PRB();
                }
                m m4 = m.a_m0_PLm_RLm_(m2);
                int n4 = m2.a_m4_PRI();
                int n5 = m2.a_m4_PRI();
                for (n2 = 0; n2 < n3; ++n2) {
                    n5 += byArray[n2];
                }
                for (n2 = 0; n2 < n3; ++n2) {
                    m4.a_m3_PIIRV(n4, n4 + byArray[n2]);
                    if (this.a_m5_PLm_RZ(m4)) {
                        bl2 = true;
                        break;
                    }
                    n4 += byArray[n2];
                }
                m2.a_m2_PIRV(n5);
                continue;
            }
            if (this.a_m7_PBLm_RZ((byte)(-2 - by2), m2)) continue;
            return bl2;
        }
        return bl2;
    }

    public final boolean a_m6_PIRZ(int n2) {
        if (a_f0_Lcb_ == null || b == null) {
            return false;
        }
        if (a_f2_Lm_ != null) {
            return false;
        }
        if (n2 >= db.a_f0_Lcb_.a_f1_AS.length - 1 || n2 < 0) {
            return false;
        }
        m m2 = db.a_f0_Lcb_.a_f3_Lm_;
        m2.a_m3_PIIRV(db.a_f0_Lcb_.a_f1_AS[n2], db.a_f0_Lcb_.a_f1_AS[n2 + 1]);
        this.a_m5_PLm_RZ(m2);
        return db.a_f1_Lcz_.a_f0_I > 0;
    }

    public final boolean b_m1_PRZ() {
        if (a_f0_Lcb_ == null || b == null) {
            return false;
        }
        if (a_f3_AB != null) {
            return true;
        }
        do {
            boolean bl2;
            block13: {
                int n2;
                Object object;
                if (a_f2_Lm_ == null) {
                    m m2;
                    object = a_f1_Lcz_;
                    if (((cz)object).a_f0_I > 0) {
                        m m3 = ((cz)object).a_f1_ALm_[0];
                        for (n2 = 1; n2 < ((cz)object).a_f0_I; ++n2) {
                            ((cz)object).a_f1_ALm_[n2 - 1] = ((cz)object).a_f1_ALm_[n2];
                        }
                        ((cz)object).a_f1_ALm_[((cz)object).a_f0_I - 1] = null;
                        --((cz)object).a_f0_I;
                        m2 = m3;
                    } else {
                        m2 = a_f2_Lm_ = null;
                    }
                }
                if (a_f2_Lm_ == null) continue;
                object = this;
                byte by2 = 0;
                m m4 = a_f2_Lm_;
                while (!m4.a_m8_PRZ()) {
                    byte by3 = m4.a_m6_PRB();
                    n2 = 0;
                    if (by3 == -1) {
                        by2 = m4.a_m6_PRB();
                        n2 = m4.a_m6_PRB();
                    }
                    if (n2 == 0) {
                        if (((db)object).b_m2_PBLm_RZ(by3, m4)) continue;
                        bl2 = false;
                    } else {
                        byte[] byArray = new byte[n2];
                        a_f3_AB = new byte[n2];
                        int n3 = 0;
                        for (int i2 = 0; i2 < n2; ++i2) {
                            byArray[i2] = m4.a_m6_PRB();
                            db.a_f3_AB[i2] = m4.a_m6_PRB();
                            n3 += a_f3_AB[i2] < 0 ? 256 + a_f3_AB[i2] : a_f3_AB[i2];
                        }
                        a_f4_I = m4.a_m4_PRI();
                        ((db)object).a_m8_PBABRV(by2, byArray);
                        m4.a_m2_PIRV(m4.a_m4_PRI() + n3);
                        bl2 = false;
                    }
                    break block13;
                }
                a_f2_Lm_ = null;
                bl2 = true;
            }
            if (bl2) continue;
            return true;
        } while (db.a_f1_Lcz_.a_f0_I > 0);
        if (a_f6_Z) {
            a_f6_Z = false;
            return this.a_m6_PIRZ(1);
        }
        return false;
    }

    protected abstract boolean a_m7_PBLm_RZ(byte var1, m var2);

    protected abstract boolean b_m2_PBLm_RZ(byte var1, m var2);

    protected abstract void a_m8_PBABRV(byte var1, byte[] var2);
}

