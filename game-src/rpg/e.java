/*
 * Decompiled with CFR 0.152.
 */
package rpg;

import java.io.IOException;
import java.io.InputStream;
import rpg.a;
import rpg.d;

public final class e
implements d {
    private static e a_f0_Lrpg_e_ = new e();
    public static ch a_f1_Lch_;
    public static ch b_f0_Lch_;
    public static ch c_f0_Lch_;
    public static ch d_f0_Lch_;
    public static ca a_f2_Lca_;
    public static s[] a_f3_ALs_;
    public static s a_f4_Ls_;
    public static cg[] a_f5_ALcg_;
    public static cg[] b_f1_ALcg_;
    public static cg[] c_f1_ALcg_;
    public static cg[] d_f1_ALcg_;
    public static cg[] e_f0_ALcg_;
    public static cg[] f_f0_ALcg_;
    public static ch e_f1_Lch_;
    public static ch f_f1_Lch_;
    public static ch g_f0_Lch_;
    public static ch h_f0_Lch_;
    public static cg a_f6_Lcg_;
    public static cg b_f2_Lcg_;
    public static cg c_f2_Lcg_;
    public static cg d_f2_Lcg_;
    public static ch i_f0_Lch_;
    public static ch j_f0_Lch_;
    public static ch k_f0_Lch_;
    private static String a_f7_Ljava_lang_String_;
    public static cg e_f2_Lcg_;
    public static cg f_f2_Lcg_;
    public static cg[] g_f1_ALcg_;
    public static cg g_f2_Lcg_;
    public static cg[] h_f1_ALcg_;
    public static cg[] i_f1_ALcg_;
    public static cg[] j_f1_ALcg_;
    public static cg h_f2_Lcg_;
    public static cg i_f2_Lcg_;
    public static cg j_f2_Lcg_;
    public static cg k_f1_Lcg_;
    public static cg l_f0_Lcg_;
    public static cg m_f0_Lcg_;
    public static cg n;
    public static cg o;
    public static cg p;
    private static cg x;
    public static cg q;
    public static cg r;
    public static cg s;
    public static cg t;
    public static cg u;
    public static cg[] k_f2_ALcg_;
    public static cg[] l_f1_ALcg_;
    public static cg v;
    public static cg w;
    public static cg[] m_f1_ALcg_;
    private static final byte[] a_f8_AB;

    public static e a_m0_PRLrpg_e_() {
        return a_f0_Lrpg_e_;
    }

    public final void a_m1_PRV() {
        aj aj2 = new aj("/img/sui");
        a_f6_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/imgbox.png");
        b_f2_Lcg_ = aj2.a_m3_PIRLcg_(3);
        k_f1_Lcg_ = aj2.a_m3_PIRLcg_(4);
        c_f2_Lcg_ = aj2.a_m3_PIRLcg_(5);
        d_f2_Lcg_ = aj2.a_m3_PIRLcg_(6);
        a.c_m0_PRV();
        i_f0_Lch_ = new ch("/t/sm");
        a.c_m0_PRV();
        a_f4_Ls_ = s.a_m5_PLjava_lang_String_Ljava_lang_String_RLs_("/hero/hs", "/img/hs");
        a.c_m0_PRV();
        e_f2_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/title.png");
        a.c_m0_PRV();
        if (h_f0_Lch_ == null) {
            h_f0_Lch_ = new ch("/t/nui");
        }
        aj2 = new aj("/img/gm");
        b_f1_ALcg_ = new cg[6];
        for (int i2 = 0; i2 < 6; ++i2) {
            e.b_f1_ALcg_[i2] = aj2.a_m3_PIRLcg_(i2);
        }
        a.c_m0_PRV();
    }

    public final void b() {
        a_f4_Ls_ = null;
        e_f2_Lcg_ = null;
        a_f6_Lcg_ = null;
        b_f2_Lcg_ = null;
        c_f2_Lcg_ = null;
        d_f2_Lcg_ = null;
        x = null;
        i_f0_Lch_ = null;
    }

    public final ca a_m2_PRLca_() {
        byte[] byArray = e.a_m6_PLjava_lang_String_RAB("/hero/h" + di.b_f4_B);
        ca ca2 = new ca();
        ca2.a_m1_PABZRV(byArray, true);
        for (int i2 = 0; i2 <= 7; ++i2) {
            e.a_m11_PLca_IRV(ca2, i2);
        }
        ca2.a_m0_PRV();
        return ca2;
    }

    public final void c() {
        int n2;
        aj aj2 = new aj("/img/em");
        a_f5_ALcg_ = aj2.a_m4_PRALcg_();
        aj2 = new aj("/img/gm");
        c_f1_ALcg_ = new cg[2];
        for (n2 = 0; n2 < 2; ++n2) {
            e.c_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2 + 6);
        }
        a.c_m0_PRV();
        e.d();
        a.c_m0_PRV();
        h_f1_ALcg_ = new cg[8];
        i_f1_ALcg_ = new cg[4];
        j_f1_ALcg_ = new cg[2];
        aj2 = new aj("/img/etc");
        g_f2_Lcg_ = aj2.a_m3_PIRLcg_(0);
        for (n2 = 0; n2 < 4; ++n2) {
            e.h_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2 + 1);
            e.i_f1_ALcg_[n2] = cg.a_m4_PLjava_lang_String_RLcg_("/miss" + n2 + ".png");
        }
        e.h_f1_ALcg_[4] = cg.a_m4_PLjava_lang_String_RLcg_("/yellowNum.png");
        e.h_f1_ALcg_[5] = cg.a_m4_PLjava_lang_String_RLcg_("/redNum.png");
        e.h_f1_ALcg_[6] = cg.a_m4_PLjava_lang_String_RLcg_("/yellowNumBig.png");
        e.h_f1_ALcg_[7] = cg.a_m4_PLjava_lang_String_RLcg_("/redNumBig.png");
        a.c_m0_PRV();
        h_f2_Lcg_ = aj2.a_m3_PIRLcg_(11);
        n = aj2.a_m3_PIRLcg_(12);
        i_f2_Lcg_ = aj2.a_m3_PIRLcg_(13);
        j_f2_Lcg_ = aj2.a_m3_PIRLcg_(14);
        if (a.a_f0_I > 120 && a.a_f0_I <= 176) {
            k_f1_Lcg_ = aj2.a_m3_PIRLcg_(15);
        }
        if (a.a_f0_I == 320) {
            l_f0_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/_imgSkull.png");
        }
        m_f0_Lcg_ = aj2.a_m3_PIRLcg_(16);
        aj2.a_m3_PIRLcg_(17);
        o = cg.a_m4_PLjava_lang_String_RLcg_("/ff.png");
        p = cg.a_m4_PLjava_lang_String_RLcg_("/minimap1.png");
        a.c_m0_PRV();
        aj2 = new aj("/img/si");
        g_f1_ALcg_ = aj2.a_m4_PRALcg_();
        a.c_m0_PRV();
        a_f4_Ls_ = new s();
        a_f4_Ls_.a_m4_PLjava_lang_String_Ljava_lang_String_RV("/hero/target", "/img/et");
        a.c_m0_PRV();
        bq.g();
        j_f0_Lch_ = new ch("/t/qm");
        k_f0_Lch_ = new ch("/t/qs");
    }

    public static void d() {
        aj aj2 = new aj("/img/sk");
        f_f2_Lcg_ = aj2.a_m3_PIRLcg_(di.b_f4_B);
    }

    public final void e() {
        a_f5_ALcg_ = null;
        f_f0_ALcg_ = null;
        a_f2_Lca_ = null;
        if (di.a_f4_Lg_ != null) {
            g.h_m1_PRV();
        }
        dt.a_m3_PRV();
        c_f1_ALcg_ = null;
        c_f1_ALcg_ = null;
        f_f2_Lcg_ = null;
        n = null;
        o = null;
        g_f2_Lcg_ = null;
        h_f1_ALcg_ = null;
        i_f1_ALcg_ = null;
        h_f2_Lcg_ = null;
        i_f2_Lcg_ = null;
        j_f2_Lcg_ = null;
        m_f0_Lcg_ = null;
        if (k_f1_Lcg_ != null) {
            k_f1_Lcg_ = null;
        }
        if (l_f0_Lcg_ != null) {
            l_f0_Lcg_ = null;
        }
        if (q != null) {
            q = null;
        }
        g_f1_ALcg_ = null;
        di.g_m0_PRV();
        j_f0_Lch_ = null;
        k_f0_Lch_ = null;
    }

    private static void i() {
        f_f0_ALcg_ = null;
        f_f0_ALcg_ = new cg[24];
    }

    public final void a_m3_PABRV(byte[] byArray) {
        aj aj2 = null;
        if (f_f0_ALcg_ == null) {
            e.i();
        }
        int n2 = -1;
        for (int i2 = 0; i2 < 6; ++i2) {
            if (byArray[i2] < 0) continue;
            int n3 = byArray[i2];
            int n4 = n3 / 4;
            n3 -= n4 << 2;
            if (n4 != n2) {
                n2 = n4;
                aj2 = new aj("/img/f" + n4);
            }
            e.f_f0_ALcg_[byArray[i2]] = aj2.a_m3_PIRLcg_(n3);
        }
    }

    public static void a_m4_PBBRV(byte by2, byte by3) {
        aj aj2 = new aj("/img/s");
        boolean bl2 = false;
        if (by2 >= 7 && by2 <= 17) {
            bl2 = true;
        }
        if (by3 >= 7 && by3 <= 17) {
            bl2 = true;
        }
        e_f0_ALcg_ = new cg[2];
        for (by2 = 0; by2 < 2; by2 = (byte)(by2 + 1)) {
            e.e_f0_ALcg_[by2] = aj2.a_m3_PIRLcg_(by2 + (bl2 ? 2 : 0));
        }
    }

    public static void a_m5_PIIABABABRV(int n2, int n3, byte[] byArray, byte[] byArray2, byte[] byArray3) {
        if (n3 < 0) {
            n3 += 256;
        }
        dt.a_m1_PBSABABABRV((byte)n2, (short)n3, byArray, byArray2, byArray3);
    }

    public static void f() {
        ac.a_m10_PRV();
        b_f0_Lch_ = new ch("/t/com");
        c_f0_Lch_ = new ch("/t/m");
        d_f0_Lch_ = new ch("/t/c");
        a_f1_Lch_ = new ch("/t/lot");
    }

    public static void g() {
        int n2;
        g_f0_Lch_ = new ch("/t/it");
        a.c_m0_PRV();
        e_f1_Lch_ = new ch("/t/h");
        f_f1_Lch_ = new ch("/t/a");
        a.c_m0_PRV();
        aj aj2 = new aj("/img/glb");
        r = aj2.a_m3_PIRLcg_(0);
        t = aj2.a_m3_PIRLcg_(1);
        u = aj2.a_m3_PIRLcg_(2);
        s = aj2.a_m3_PIRLcg_(3);
        d_f1_ALcg_ = new cg[6];
        for (n2 = 0; n2 < 6; ++n2) {
            e.d_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2 + 4);
        }
        aj2 = new aj("/img/it");
        k_f2_ALcg_ = aj2.a_m4_PRALcg_();
        a.c_m0_PRV();
        aj2 = new aj("/img/gt");
        l_f1_ALcg_ = new cg[8];
        for (n2 = 0; n2 < 8; ++n2) {
            e.l_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2);
        }
        v = aj2.a_m3_PIRLcg_(8);
        w = aj2.a_m3_PIRLcg_(9);
        m_f1_ALcg_ = new cg[3];
        for (n2 = 0; n2 < 3; ++n2) {
            e.m_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2 + 10);
        }
    }

    public static void h() {
        byte[] byArray;
        bq.b_m0_PRV();
        bq.f();
        e.i();
        int n2 = di.a_f3_B;
        if (n2 < 0) {
            n2 += 256;
        }
        if (g.a_f13_Lcg_ != null) {
            g.a_f13_Lcg_ = null;
        }
        if (di.a_f10_Lh_ != null) {
            di.a_f10_Lh_ = null;
        }
        do do_ = di.a_f9_Ldo_;
        do_.d(true);
        do_.a_m38_PRLo_().a_m1_PZRV(true);
        g.e_m1_PRV();
        if (di.a_f4_Lg_ != null) {
            di.a_f4_Lg_.d_m2_PLdu_RV(do_);
            do_.b = null;
            do_.a = null;
            g.h_m1_PRV();
            di.a_f4_Lg_ = null;
        }
        if (am.a_f0_ALs_ == null) {
            am.a_f0_ALs_ = null;
        }
        if (am.a_f1_AB != null) {
            am.a_f1_AB = null;
        }
        if (am.b != null) {
            am.b = null;
        }
        a.c_m0_PRV();
        if (n2 < 100) {
            byArray = e.a_m6_PLjava_lang_String_RAB("/m/m/" + (n2 < 10 ? "0" : "") + n2 + ".m");
        } else {
            int n3 = n2 % 10;
            byte[] byArray2 = new byte[1];
            byte[] byArray3 = byArray2;
            byArray2[0] = 97;
            byArray3[0] = (byte)(byArray3[0] + ((n2 - n3) / 10 - 10));
            byArray = e.a_m6_PLjava_lang_String_RAB("/m/m2/" + new String(byArray3) + n3 + ".m");
        }
        di.a_f4_Lg_ = new g(di.a_f3_B);
        di.a_f4_Lg_.a_m6_PABRV(byArray);
        di.a_f4_Lg_.b_m1_PRV();
        do_.m_m2_PRV();
    }

    /*
     * Loose catch block
     */
    public static final byte[] a_m6_PLjava_lang_String_RAB(String object) {
        InputStream inputStream;
        block21: {
            block22: {
                inputStream = null;
                inputStream = new Object().getClass().getResourceAsStream((String)object);
                if (inputStream != null) break block21;
                if (!ah.a((String)object)) break block22;
                bh bh2 = new bh((String)object, 1);
                Object object2 = bh2;
                Object object3 = object = (Object)new byte[bh2.a_f0_AB != null ? ((bh)object2).a_f0_AB.length - ((bh)object2).a_f1_I : 0];
                object2 = bh2;
                try {
                    System.arraycopy(((bh)object2).a_f0_AB, ((bh)object2).a_f1_I, object3, 0, ((Object)object3).length);
                    ((bh)object2).a_f1_I += ((Object)object3).length;
                }
                catch (Exception exception) {
                    object2 = exception;
                    exception.printStackTrace();
                }
                v1.a_f0_AB = null;
                try {
                    if (inputStream != null) {
                        inputStream.close();
                    }
                }
                catch (Exception exception) {}
                return object;
            }
            try {
                if (inputStream != null) {
                    inputStream.close();
                }
            }
            catch (Exception exception) {}
            return null;
        }
        object = new byte[inputStream.available()];
        inputStream.read((byte[])object);
        Object object4 = object;
        try {
            if (inputStream != null) {
                inputStream.close();
            }
        }
        catch (Exception exception) {}
        return object4;
        catch (IOException iOException) {
            try {
                if (inputStream != null) {
                    inputStream.close();
                }
            }
            catch (Exception exception) {}
            return null;
        }
        catch (Throwable throwable) {
            try {
                if (inputStream != null) {
                    inputStream.close();
                }
            }
            catch (Exception exception) {}
            throw throwable;
        }
    }

    public static final byte[] a_m7_PLjava_lang_String_IRAB(String object, int n2) {
        byte[] byArray = null;
        try {
            byte[] byArray2 = e.a_m6_PLjava_lang_String_RAB((String)object);
            object = byArray2;
            byArray = e.a_m8_PABIRAB(byArray2, n2);
        }
        catch (Exception exception) {}
        return byArray;
    }

    public static final byte[] a_m8_PABIRAB(byte[] byArray, int n2) {
        short s2;
        int n3 = 0;
        for (int i2 = 0; i2 < n2; ++i2) {
            s2 = rpg.g.b_m1_PABIRS(byArray, n3);
            n3 += s2 + 2;
        }
        s2 = rpg.g.b_m1_PABIRS(byArray, n3);
        byte[] byArray2 = new byte[s2];
        System.arraycopy(byArray, n3 += 2, byArray2, 0, s2);
        return byArray2;
    }

    public static final boolean a_m9_PABRZ(byte[] byArray) {
        byte by2 = 0;
        int n2 = byArray.length - 1;
        for (int i2 = 0; i2 < n2; ++i2) {
            by2 = (byte)(by2 + byArray[i2]);
        }
        return by2 == byArray[n2];
    }

    public static final void a_m10_PIRV(int n2) {
        a_f4_Ls_.a_m4_PLjava_lang_String_Ljava_lang_String_RV(a_f7_Ljava_lang_String_ + n2, a_f7_Ljava_lang_String_ + "ed" + n2);
    }

    public static void a_m11_PLca_IRV(ca ca2, int n2) {
        Object object = di.a_f9_Ldo_;
        byte by2 = 0;
        byte by3 = 0;
        int n3 = -1;
        if ((object = ((do)object).a_m29_PBRLbm_(a_f8_AB[n2])) != null) {
            by2 = ((as)object).a_f1_B;
            by3 = ((bm)object).g;
            n3 = ((bm)object).a;
            if (by3 < 0) {
                by3 = 0;
            }
        }
        switch (n2) {
            case 0: {
                object = "/hero/" + n2 + "/" + (by3 < 10 ? "0" : "") + by3;
                break;
            }
            case 1: 
            case 2: 
            case 3: {
                object = "/hero/" + n2 + "/" + (di.a_m17_PRZ() ? "" : "l") + (by3 < 10 ? "0" : "") + by3;
                break;
            }
            case 4: {
                object = "/hero/" + n2 + "/" + di.b_f4_B;
                break;
            }
            case 5: {
                object = "/hero/eh";
                break;
            }
            case 6: 
            case 7: {
                if (object == null) {
                    ca2.a_m2_PIRV(n2);
                    return;
                }
                object = "/hero/w/" + by2 + (by3 < 10 ? "0" : "") + by3;
                break;
            }
            default: {
                return;
            }
        }
        byte[] byArray = null;
        if (n3 >= 0) {
            byArray = e.a_m7_PLjava_lang_String_IRAB("/hero/h.p", n3);
        }
        ca2.a_m0_PILjava_lang_String_ABRV(n2, (String)object, byArray);
    }

    public static void a_m12_PABBBABRV(byte[] byArray, byte by2, byte by3, byte[] byArray2) {
        byArray = e.a_m8_PABIRAB(byArray, by2);
        am.a_m0_PABBABRV(byArray, by3, byArray2);
    }

    static {
        a_f3_ALs_ = new s[11];
        h_f0_Lch_ = null;
        a_f7_Ljava_lang_String_ = "/img/ed/";
        x = null;
        q = null;
        a_f8_AB = new byte[]{1, 4, 0, 6, -1, -1, 3, 5};
    }
}

