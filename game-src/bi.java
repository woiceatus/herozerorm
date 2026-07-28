/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

final class bi
extends af {
    private byte[] Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 13);

    public bi(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2, null);
        this.a_m0_PABRV(this.Q);
        av.a_m6_PLbi_RV(this);
    }

    protected final void a_m0_PRV() {
    }

    public final void l() {
    }

    protected final void a_m1_PBRV(byte by2) {
    }

    protected final void a_m2_PIIRV(int n2, int n3) {
    }

    final void b(byte by2, int n2) {
        av.a_f0_Lav_.b_m0_PBIRV(by2, n2);
    }

    final void a_m3_PBBIRV(byte by2, byte by3, int n2) {
        av.a_f0_Lav_.a_m2_PBBIRV(by2, by3, n2);
    }

    final boolean a_m4_PBIRZ(byte by2, int n2) {
        return av.a_f0_Lav_.a_m4_PBIRZ(by2, n2);
    }

    protected final void a_m5_PLal_IRV(al al2, int n2) {
        av.a_f0_Lav_.a_m3_PLal_IRV(al2, n2);
    }

    protected final void h(int n2) {
        av.a_f0_Lav_.h_m1_PIRV(n2);
    }

    protected final int c() {
        return av.a_f0_Lav_.c_m0_PRI();
    }

    protected final boolean a_m6_PRZ() {
        return av.a_f0_Lav_.a_m17_PRZ();
    }

    protected final void a_m7_PLal_IBBRV(al al2, int n2, byte by2, byte by3) {
        super.a_m11_PLal_IBBRV(al2, n2 / 4, by2, by3);
        al2 = this;
        if (!av.a_f0_Lav_.a_m17_PRZ()) {
            this.l = 0;
            av.a_f0_Lav_.l = (byte)2;
            av.a_f0_Lav_.m = by2;
        }
    }

    protected final void m() {
        this.b_m0_PABRV(this.Q);
        super.m();
    }
}

