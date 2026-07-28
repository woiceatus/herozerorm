/*
 * Decompiled with CFR 0.152.
 */
final class ag
extends cd {
    private boolean b = false;

    protected ag(short s2, short s3, short s4, byte by2) {
        super(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_, false);
        if (this.c_f0_S == bc.b) {
            ++bc.e;
        }
    }

    protected final void b() {
        boolean bl2 = false;
        boolean bl3 = false;
        for (byte by2 = 1; by2 <= 8; by2 = (byte)(by2 + 1)) {
            du du2 = this.a_m5_PBLdu_RLdu_(by2, null);
            if (du2 == null) continue;
            if (du2 instanceof do && !bl2) {
                bl2 = true;
                this.b_m5_PLal_IBRZ((al)du2, this.f_f1_S, by2);
            }
            if (!(du2 instanceof h) || bl3) continue;
            bl3 = true;
            this.b_m5_PLal_IBRZ((al)du2, this.f_f1_S, by2);
        }
    }

    protected final void e() {
        this.b = true;
        this.a_m16_PLal_IRV(null, this.k_f2_I);
        this.a_m17_PRZ();
    }

    protected final void a(byte by2) {
        if (by2 == 6) {
            if (this.c_f0_S == bc.b) {
                --bc.e;
            }
            by2 = (byte)7;
        }
        super.a_m1_PBRV(by2);
    }

    protected final void o() {
        if (!this.b) {
            super.o();
        }
    }

    protected final void i() {
        this.b = false;
        super.i();
    }

    protected final void n() {
        if (!this.b) {
            super.n();
        }
    }
}

