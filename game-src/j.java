/*
 * Decompiled with CFR 0.152.
 */
import rpg.RPGHeroEx;
import rpg.a;
import rpg.d;
import rpg.e;
import rpg.f;

final class j
extends b {
    private byte[] a_f0_AB;
    private byte[] b;
    private short[] a_f1_AS;
    private int e = f.b;

    j(n n2) {
        super(n2, (byte)1);
        n2 = this;
        this.a_f0_AB = rpg.e.f_f1_Lch_.a_m0_PIRAB(0);
        Object object = "Version: " + RPGHeroEx.a.getAppProperty("MIDlet-Version");
        ((j)n2).b = ("Heroes Lore Zero Copyright 2012 Electronic Arts Inc.;Published by Electronic Arts Inc.;" + (String)object + ";Customer Service: Send email to help@eamobile.com;Copyright 2012 Electronic Arts Inc, EA, the EA logo and Heroes Lore are trademarks of Electronic Arts Inc. All other trademarks are the property of their respective owners.;Copyright 2012 Electronic Arts Inc, All trademarks are the property of their respective owners.;Copyright 2012 Electronic Arts Inc, EA, the EA logo and heroes Lore are trademarks of Electronic Arts Inc." + ";;;|CREDITS&;EA Korea Studio;EA China Studio;;;Last revised by EA Hyderabad:;\\Engineering Lead&;Mahender Domakonda;;\\Engineers&;Rajesh Gorantla;Vishwajeet Jadhav;Ranjith Akuthota").getBytes();
        object = new short[20];
        int n3 = 0;
        for (int i2 = 0; i2 < ((j)n2).b.length; i2 += ac.a_m5_PABIIIRI(((j)n2).b, i2, ((j)n2).e, 8)) {
            object[n3++] = (short)i2;
        }
        ((j)n2).a_f1_AS = new short[n3];
        System.arraycopy(object, 0, ((j)n2).a_f1_AS, 0, ((j)n2).a_f1_AS.length);
        n2.b_f2_B = (byte)((j)n2).a_f1_AS.length;
        n2.a_f2_B = 0;
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3) || n.g(n2, n3)) {
            if (n2 == -7) {
                this.a_f1_Ln_.a_f2_B = (byte)5;
                this.a_f1_Ln_.c_m0_PRV();
            }
            return true;
        }
        return this.c_m2_PIIRZ(n2, n3);
    }

    protected final void a_m1_PLcm_RV(cm cm2) {
        int n2 = a.d;
        a.a_m3_PLcm_ZRV(cm2, true);
        n2 -= 36;
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, f.d, this.a_f0_AB, 0, 1);
        cm2.a_m2_PIRV(0xCCCCCC);
        short s2 = this.a_f1_AS[this.a_f2_B];
        short s3 = this.a_f2_B == this.b_f2_B - 1 ? (short)this.b.length : this.a_f1_AS[this.a_f2_B + 1];
        int n3 = a.a_f0_I - this.e >> 1;
        ac.a_m3_PLcm_IIIIABIIIRV(cm2, n3 + 5, n2, this.e, 1, this.b, s2, 0, s3 - s2);
        if (this.b_f2_B > 1) {
            this.a_m0_PLcm_IIIIIRV(cm2, this.a_ + d.e_ - 10, n2 - 10, this.a_f2_B + 1, this.b_f2_B, 8);
        }
        this.e_m2_PLcm_IIIIRV(cm2, n3 + this.e - 2, n2 - 2, this.a_f2_B, this.b_f2_B);
        n.a_m0_PLcm_IRV(cm2, 2);
    }
}

