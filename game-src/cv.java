/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;
import rpg.e;

public final class cv
extends br {
    private byte h;
    private static x a = null;

    public cv(n n2, byte by2, byte[] byArray) {
        super(n2, byArray, '\u0000');
        de.a_f0_Ljava_lang_String_ = "";
        this.h = by2;
        switch (this.h) {
            case 0: 
            case 2: {
                this.a_m0_PIRV(this.l + 2);
                return;
            }
            case 1: {
                this.a_m0_PIRV(this.l + 5);
            }
        }
    }

    protected final void a_m0_PLcm_RV(cm cm2) {
        cv cv2 = this;
        if (a == null) {
            switch (cv2.h) {
                case 0: 
                case 2: {
                    a = new x(8);
                    break;
                }
                case 1: {
                    a = new x(25);
                }
            }
        }
        if (a == null) {
            return;
        }
        super.a_m2_PLcm_RV(cm2);
        int n2 = ((eb)this).e + 4;
        int n3 = this.j - 8;
        int n4 = this.f_f1_I + 38;
        n.a_m6_PLcm_IIIIIIRV(cm2, n2 + 89, n4 - 11, 20, 12, 0x660000, 0xBD0000);
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m2_PLcm_IIABIIRV(cm2, n2 + 100, n4 - 11, a.a_m2_PRAB(), 0, 1);
        switch (this.h) {
            case 0: 
            case 2: {
                n.a_m6_PLcm_IIIIIIRV(cm2, n2, n4, n3, 17, 0x660000, 0xBD0000);
                cm2.a_m2_PIRV(0xFFFFFF);
                cm2.a_m5_PLjava_lang_String_IIIRV(a.a_m0_PRLjava_lang_String_(), rpg.a.c, n4 + 1, 17);
                return;
            }
            case 1: {
                int n5 = n4;
                n.a_m6_PLcm_IIIIIIRV(cm2, n2, n4, n3, 59, 0x660000, 0xBD0000);
                cm2.a_m2_PIRV(0xFFFFFF);
                String string = a.a_m0_PRLjava_lang_String_();
                n3 = string.length();
                while (n3 > 0) {
                    while (bn.a_m0_PRLbn_().a_m1_PLjava_lang_String_IIRI(string, 0, n3) >= d.i_f1_I) {
                        --n3;
                    }
                    String string2 = string.substring(0, n3);
                    cm2.a_m5_PLjava_lang_String_IIIRV(string2, ((eb)this).e + 5, n5, 20);
                    n5 += 15;
                    string = string.substring(n3);
                    n3 = string.length();
                }
                break;
            }
        }
    }

    final boolean a_m1_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3) && a.a_m0_PRLjava_lang_String_().length() == 0) {
            if (this.h == 2) {
                de.j();
                i.a_m0_PRLi_().c_m0_PRV();
                c.a_m1_PZRV(false);
            } else {
                a = null;
                this.a_f1_Ln_.c_m0_PRV();
            }
            return true;
        }
        if (n2 == 8 && n3 != 53) {
            boolean bl2;
            String string;
            String string2 = string = a.a_m0_PRLjava_lang_String_();
            if (string == null) {
                bl2 = false;
            } else if (string2.length() != 0) {
                for (int i2 = 0; i2 < string2.length(); ++i2) {
                    String string3 = string2.substring(i2, i2 + 1);
                    char c2 = string3.charAt(0);
                    if (c2 > '/' && c2 < ':' || c2 > '@' && c2 < '[') continue;
                    if (c2 > '`' && c2 < '{') {
                        bl2 = false;
                    } else {
                        if (c2 == ' ') continue;
                        if (c2 > '\u3130' && c2 < '\u3164') {
                            bl2 = false;
                        } else {
                            if (c2 > '\uabff' && c2 < '\ud789') continue;
                            bl2 = false;
                        }
                    }
                    break;
                }
            } else {
                bl2 = true;
            }
            if (bl2) {
                if (this.h == 0 || this.h == 2) {
                    if ((string = string.trim()).length() > 5) {
                        this.b_f1_Ln_ = new br((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(73), '\u0000');
                    } else if (string.length() > 0) {
                        de.a_f0_Ljava_lang_String_ = string;
                        a = null;
                        this.a_f1_Ln_.a_m3_PBBRV((byte)10, this.a_f2_B);
                    }
                } else {
                    de.a_f0_Ljava_lang_String_ = string;
                    a = null;
                    this.a_f1_Ln_.a_m3_PBBRV((byte)10, this.a_f2_B);
                }
            } else {
                this.b_f1_Ln_ = new br((n)this, rpg.e.h_f0_Lch_.a_m0_PIRAB(62), '\u0000');
            }
            return true;
        }
        this.d_m0_PRV();
        return a.a_m1_PIIRZ(n2, n3);
    }
}

