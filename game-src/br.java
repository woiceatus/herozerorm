/*
 * Decompiled with CFR 0.152.
 */
import rpg.a;
import rpg.d;

class br
extends eb {
    private boolean g;
    private int m;
    private byte[] a;
    public boolean e = false;

    public br(n n2, byte[] byArray, char c2) {
        super(n2, 0, 0, 0, (byte)1);
        this.a = byArray;
        this.a_m0_PIRV(ac.a_m7_PABIRI(this.a, d.i_f1_I));
        this.g = false;
    }

    public br(n n2, byte[] byArray, byte by2) {
        this(n2, byArray, '\u0000');
        this.f_f0_B = by2;
    }

    protected final void a_m0_PIRV(int n2) {
        this.l = n2;
        this.j = d.f_;
        this.k = 18 + this.l * 12 + (this.l - 1 << 1);
        ((eb)this).e = rpg.a.c - (this.j >> 1);
        this.f_f1_I = rpg.a.d - (this.k >> 1);
    }

    public br(n n2, byte[] byArray) {
        this(n2, byArray, '\u0000');
        this.j = ac.a_m8_PABRI(byArray) + 16;
        ((eb)this).e = rpg.a.c - (this.j >> 1);
        this.g = true;
    }

    boolean a_m1_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (this.e) {
            if (n2 == -6) {
                this.a_f1_Ln_.a_m3_PBBRV((byte)3, (byte)0);
            } else if (n2 == -7) {
                this.a_f1_Ln_.a_m3_PBBRV((byte)3, (byte)1);
            }
            return true;
        }
        if (this.g) {
            return true;
        }
        if (this.a_f1_Ln_ != null && (n.f_m0_PIIRZ(n2, n3) || n.g(n2, n3))) {
            this.a_f1_Ln_.a_m3_PBBRV(this.f_f0_B, (byte)-1);
        }
        return true;
    }

    protected void a_m2_PLcm_RV(cm cm2) {
        cm2.a_m2_PIRV(7228201);
        cm2.d_m0_PIIIIRV(((eb)this).e - 3, this.f_f1_I - 3, this.j + 5, this.k + 5);
        cm2.a_m2_PIRV(10646341);
        cm2.d_m0_PIIIIRV(((eb)this).e - 2, this.f_f1_I - 2, this.j + 3, this.k + 3);
        eb.f(cm2, ((eb)this).e, this.f_f1_I, this.j, this.k);
        cm2.a_m2_PIRV(7228201);
        cm2.d_m0_PIIIIRV(((eb)this).e - 1, this.f_f1_I - 1, this.j + 1, this.k + 1);
        int n2 = this.f_f1_I + 9;
        cm2.a_m2_PIRV(3550755);
        if (this.g) {
            this.m = this.m > 100 ? 0 : ++this.m;
            int n3 = this.a.length - this.m % 4;
            byte[] byArray = new byte[n3];
            System.arraycopy(this.a, 0, byArray, 0, n3);
            ac.a_m0_PLcm_IIABIRV(cm2, ((eb)this).e + 8, n2, byArray, 0);
            this.a_f3_Z = true;
            return;
        }
        if (this.l == 1) {
            ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n2, this.a, 1, 1);
            return;
        }
        ac.a_m1_PLcm_IIIIABRV(cm2, ((eb)this).e + 8, n2, d.i_f1_I, 1, this.a);
    }
}

