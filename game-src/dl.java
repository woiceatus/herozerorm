/*
 * Decompiled with CFR 0.152.
 */
import java.util.Vector;
import rpg.a;
import rpg.e;
import rpg.g;

final class dl
extends de {
    private Vector a_f0_Ljava_util_Vector_ = new Vector();
    private bx a_f1_Lbx_ = null;

    public dl(n n2) {
        super(n2, (byte)6);
        boolean bl2 = true;
        dl dl2 = this;
        byte[] byArray = c.a_m2_PBABRAB((byte)20, null);
        dl2.a_m1_PABZZRV(byArray, true, false);
    }

    final boolean a_m0_PIIRZ(int n2, int n3) {
        if (this.b_m2_PIIRZ(n2, n3)) {
            return true;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            return true;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.a_f2_B < this.a_f0_Ljava_util_Vector_.size()) {
                bx bx2 = this.a_f1_Lbx_ = (bx)this.a_f0_Ljava_util_Vector_.elementAt(this.a_f2_B);
                this.b_f1_Ln_ = new dj((n)this, rpg.e.h_f0_Lch_.a_m1_PIIRAAB(33, 35));
            }
            return true;
        }
        return this.c_m2_PIIRZ(n2, n3);
    }

    /*
     * Enabled aggressive block sorting
     */
    final void a_m1_PBBRV(byte by2, byte by3) {
        this.c_m0_PRV();
        if (by2 != 6) {
            if (by2 != 3) return;
            if (by3 != 0) return;
            dl dl2 = this;
            byte[] byArray = new byte[8];
            g.a_m6_PJABIRV(0L, byArray, 0);
            byArray = c.a_m2_PBABRAB((byte)22, byArray);
            dl2.a_m1_PABZZRV(byArray, true, false);
            return;
        }
        dl dl3 = this;
        bx bx2 = dl3.a_f1_Lbx_;
        if (by3 == 0) {
            dl3.k();
            return;
        }
        if (by3 != 1) return;
        dl3.b_f1_Ln_ = new bt((n)dl3, rpg.e.h_f0_Lch_.a_m0_PIRAB(45), 3, true, true);
    }

    private final void k() {
        byte[] byArray = new byte[8];
        g.a_m6_PJABIRV(0L, byArray, 0);
        byArray = c.a_m2_PBABRAB((byte)21, byArray);
        this.a_m1_PABZZRV(byArray, true, false);
    }

    protected final void a_m2_PLcm_RV(cm cm2) {
        a.a_m3_PLcm_ZRV(cm2, true);
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.d - 58, rpg.e.h_f0_Lch_.a_m0_PIRAB(31), 0, 1);
        int n2 = this.a_f0_Ljava_util_Vector_.size();
        int n3 = this.a_f2_B / 6 * 6;
        int n4 = this.a_f2_B % 6;
        for (int n5 = 0; n5 < 6; n5 = (int)((byte)(n5 + 1))) {
            int n6 = this.b_ + 16 + n5 * 13;
            n.a_m6_PLcm_IIIIIIRV(cm2, this.a_ + 3, n6, 108, 12, n4 == n5 ? 0x660000 : 3550755, this.a_f2_B == n5 ? 0xBD0000 : 7027456);
            if (n3 < n2) {
                boolean bl2 = n4 == n5;
                int n7 = n6;
                int n8 = this.a_;
                cm cm3 = cm2;
                bx bx2 = (bx)this.a_f0_Ljava_util_Vector_.elementAt(n3);
                bx2 = bx2;
                cm3.a_m2_PIRV(bl2 ? 0xFFFFFF : 12630160);
                ac.a_m0_PLcm_IIABIRV(cm3, n8 + 24, n7, null, 0);
                ac.a_m2_PLcm_IIABIIRV(cm3, n8 + 109, n7, null, 0, 8);
            }
            ++n3;
        }
        this.a_m0_PLcm_IIIIIRV(cm2, a.c + 52, a.d - 55, this.a_f2_B / 6 + 1, this.b_f2_B / 6, 8);
        this.e_m2_PLcm_IIIIRV(cm2, a.c + 54, a.d - 37, this.a_f2_B / 6, this.b_f2_B / 6);
    }
}

