/*
 * Decompiled with CFR 0.152.
 */
import rpg.RPGHeroEx;
import rpg.a;
import rpg.d;
import rpg.e;

abstract class q
extends l {
    private ch a_f0_Lch_ = null;
    private boolean[] a_f1_AZ;
    private static String a_f2_Ljava_lang_String_ = null;

    q(n n2, byte by2, byte by3, byte by4) {
        super(n2, (byte)6, (byte)1, (byte)1);
        if (this.a_f0_Lch_ == null) {
            this.a_f0_Lch_ = new ch("/t/jd");
        }
        this.a_f1_AZ = new boolean[6];
        for (byte by5 = 0; by5 < 6; by5 = (byte)(by5 + 1)) {
            this.a_f1_AZ[by5] = di.b_m11_PBRZ(by5);
        }
    }

    protected final int a_m0_PLcm_BRI(cm cm2, byte by2) {
        int n2;
        if (by2 >= 6) {
            n2 = this.a_m1_PLcm_ZZZZZRI(cm2, false, false, true, false, true);
            by2 = (byte)(by2 - 6);
        } else {
            n2 = this.a_m1_PLcm_ZZZZZRI(cm2, false, false, true, false, false);
        }
        int n3 = this.b_ + 174 - 60;
        cm2.a_m2_PIRV(3550755);
        cm2.a_m4_PIIIIRV(this.a_, n3, d.e_, 60);
        boolean bl2 = this.a_m1_PBRZ(by2);
        cm2.a_m2_PIRV(0xFFFFFF);
        int n4 = 4;
        if (!bl2) {
            n4 = 2;
        }
        for (int i2 = 0; i2 < n4; ++i2) {
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n3 + 4 + i2 * 14, this.a_f0_Lch_.a_m0_PIRAB(i2 + (bl2 ? by2 << 2 : 24)), 1, 1);
        }
        n.a_m6_PLcm_IIIIIIRV(cm2, this.a_ + (d.e_ - 114) / 2, n3 -= 14, 114, 14, 0x660000, 0x810000);
        n.a_m14_PLcm_IIIIZRV(cm2, this.a_ + (d.e_ - 75) / 2, n3 + 5, 75, 0xFFFFFF, false);
        if (bl2) {
            cm2.a_m2_PIRV(0xFFFFFF);
        } else {
            cm2.a_m2_PIRV(0x7F7F7F);
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n3, e.d_f0_Lch_.a_m0_PIRAB(by2 + 1), 1, 1);
        return n2;
    }

    protected final boolean a_m1_PBRZ(byte by2) {
        try {
            a_f2_Ljava_lang_String_ = RPGHeroEx.a.getAppProperty("UnlockAllCharacters");
        }
        catch (Exception exception) {
            a_f2_Ljava_lang_String_ = null;
        }
        if (a_f2_Ljava_lang_String_ != null && a_f2_Ljava_lang_String_.equals("true")) {
            return true;
        }
        return this.a_f1_AZ[by2];
    }
}

