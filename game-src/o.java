/*
 * Decompiled with CFR 0.152.
 */
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FilterInputStream;
import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import rpg.d;
import rpg.e;

public final class o
implements d {
    private static final byte[] b_f0_AB = new byte[]{6, 0, 0, 0, 21, 0, 21, 0, 23, 0};
    private byte[] c_f0_AB;
    private byte[] d_f0_AB;
    private boolean[] a_f0_AZ;
    public byte[] a_f1_AB;
    private byte a_f2_B;
    private byte b_f1_B = 0;
    private byte c_f1_B;
    private byte[] Q;
    private byte[] R;
    private do a_f3_Ldo_;
    private boolean a_f4_Z = false;
    private final byte[] S = new byte[]{12, 12, 4, 2};
    private byte d_f1_B;
    private byte e;

    public o(do do_) {
        this.a_f3_Ldo_ = do_;
    }

    final void a_m0_PRV() {
        this.c_f0_AB = new byte[10];
        this.d_f0_AB = new byte[10];
        for (int i2 = 4; i2 < 10; ++i2) {
            this.d_f0_AB[i2] = -1;
            this.c_f0_AB[i2] = -1;
        }
        this.g();
        this.a_m1_PZRV(false);
        this.a_f4_Z = false;
    }

    private void g() {
        this.a_f1_AB = new byte[2];
        for (int i2 = 0; i2 < 2; ++i2) {
            this.a_f1_AB[i2] = -1;
        }
    }

    public final void a_m1_PZRV(boolean bl2) {
        this.h();
        if (bl2) {
            o o2 = this;
            if (o2.a_f4_Z) {
                int n2 = di.b_f5_AB[2];
                byte by2 = di.b_f5_AB[3];
                for (int i2 = 0; i2 < 10; ++i2) {
                    if (i2 == n2 || i2 == by2 || rpg.e.a_f3_ALs_[i2] == null) continue;
                    rpg.e.a_f3_ALs_[i2] = null;
                }
                o2.a_f4_Z = false;
            }
        }
    }

    final void b_m0_PRV() {
        if (this.b_f1_B == 0) {
            return;
        }
        byte by2 = this.c_f1_B = (byte)(this.c_f1_B + 1);
        o o2 = this;
        if (by2 == 0) {
            o.b_m7_PBRV(o2.a_f2_B);
        }
        switch (o2.a_f2_B) {
            case 0: {
                byte by3 = by2;
                o o3 = o2;
                switch (by3) {
                    case 0: {
                        g.a_m16_PIRV(1);
                        break;
                    }
                    case 1: {
                        int n2;
                        o3.a_f3_Ldo_.f_m1_PRV();
                        cd cd2 = o3.a_f3_Ldo_.a_m16_PRLcd_();
                        if (cd2 != null) {
                            n2 = o3.e_m0_PBRI((byte)0);
                            cd2.a_m13_PIBRZ(n2, o3.a_f3_Ldo_.c_f0_B);
                            cd2.a_m1_PLat_RV(new cr(30, 0, 1));
                        }
                    }
                    case 3: 
                    case 5: {
                        int n2 = 2 - by3 / 2 + 1;
                        di.a_f4_Lg_.c_m4_PIIRV(n2, 1);
                    }
                }
                break;
            }
            case 1: {
                if (by2 != 0) break;
                o.a_m10_PBBIRV((byte)31, (byte)1, 1);
                break;
            }
            case 2: {
                if (by2 != 0) break;
                o.a_m10_PBBIRV((byte)33, (byte)2, 1);
                break;
            }
            case 3: {
                if (by2 != 0) break;
                int n3 = o2.b_m4_PBIRI((byte)3, o2.a_f3_Ldo_.f_m2_PBRI((byte)0)) + o2.c_m3_PBRI((byte)3);
                o2.a_f3_Ldo_.c_m5_PIRV(n3);
                o2.a_f3_Ldo_.a_m1_PLat_RV(new cr(35, 3, 1));
                break;
            }
            case 4: {
                byte by4 = by2;
                o o4 = o2;
                switch (by4) {
                    case 3: 
                    case 7: 
                    case 11: 
                    case 15: {
                        g.a_m16_PIRV(1);
                        break;
                    }
                    default: {
                        g.b_m5_PIRV(0);
                    }
                }
                int n4 = 0;
                switch (by4) {
                    case 1: {
                        n4 = -5;
                        break;
                    }
                    case 5: 
                    case 8: 
                    case 10: 
                    case 13: {
                        n4 = 4;
                        break;
                    }
                    case 12: {
                        bq.a_m2_PBRV((byte)2);
                    }
                    case 9: 
                    case 14: 
                    case 17: 
                    case 19: {
                        n4 = 6;
                        break;
                    }
                    case 20: {
                        n4 = 3;
                    }
                }
                if (n4 != 0) {
                    di.a_f4_Lg_.c_m4_PIIRV(n4, n4 < 0 ? 2 : 1);
                }
                switch (by4) {
                    case 0: {
                        o4.a_m14_PBBIZRV((byte)36, (byte)4, 1, false);
                        break;
                    }
                    case 4: 
                    case 8: {
                        bq.a_m2_PBRV((byte)1);
                    }
                    case 1: 
                    case 6: 
                    case 10: 
                    case 12: 
                    case 14: 
                    case 16: {
                        int n5 = o4.e_m0_PBRI((byte)4);
                        o4.d_m3_PIRV(n5);
                    }
                }
                break;
            }
            case 5: {
                if (by2 != 0) break;
                o2.a_f3_Ldo_.f_f1_I = o2.c_m3_PBRI((byte)5);
                o.a_m10_PBBIRV((byte)38, (byte)5, -1);
                o.a_m10_PBBIRV((byte)37, (byte)5, -1);
                break;
            }
            case 6: {
                int n6;
                byte by5 = by2;
                o o5 = o2;
                switch (by5) {
                    case 0: {
                        o5.a_m14_PBBIZRV((byte)40, (byte)6, 1, true);
                        break;
                    }
                    case 5: 
                    case 9: {
                        di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                        break;
                    }
                    case 12: {
                        di.a_f4_Lg_.a_m23_PLat_RV(new dq(true, 0xFFFF57, o5.S, o5.d_f1_B << 4, o5.e << 4));
                        break;
                    }
                    case 14: {
                        g.a_m16_PIRV(1);
                        break;
                    }
                    case 15: 
                    case 16: {
                        g.b_m5_PIRV(0);
                    }
                    case 17: 
                    case 18: {
                        di.a_f4_Lg_.c_m4_PIIRV(3 * (19 - by5), 2);
                    }
                }
                if (by5 != 5 && by5 != 9 && by5 != 15) break;
                int n7 = n6 = o5.e_m0_PBRI((byte)6);
                o o6 = o5;
                for (byte by6 = 1; by6 <= 8; by6 = (byte)(by6 + 1)) {
                    cd cd3 = o6.a_m13_PBRLcd_(by6);
                    if (cd3 == null) continue;
                    cd3.a_m13_PIBRZ(n7, by6);
                    cd3.c_m5_PIRV(60);
                }
                bq.a_m2_PBRV(by5 == 15 ? (byte)2 : 3);
                break;
            }
            case 7: {
                if (by2 != 0) break;
                byte by7 = 7;
                o o7 = o2;
                o2.a_f3_Ldo_.e_f1_I = o7.b_m4_PBIRI(by7, 1) + o2.c_m3_PBRI((byte)7);
                o.a_m10_PBBIRV((byte)41, (byte)7, -1);
                o.a_m10_PBBIRV((byte)42, (byte)7, -1);
                break;
            }
            case 8: {
                byte by8 = by2;
                o o8 = o2;
                switch (by8) {
                    case 0: {
                        o8.a_m14_PBBIZRV((byte)43, (byte)8, 1, true);
                        break;
                    }
                    case 3: {
                        o8.a_f3_Ldo_.k_m0_PIRV(30);
                        g.a_m16_PIRV(1);
                        break;
                    }
                    case 23: {
                        di.a_f4_Lg_.c_m4_PIIRV(1, 2);
                        break;
                    }
                    default: {
                        if (by8 <= 4 || by8 >= 22 || by8 % 2 != 1) break;
                        di.a_f4_Lg_.c_m4_PIIRV(3, 2);
                    }
                }
                if (by8 >= 5 && by8 <= 21) {
                    int n8 = o8.e_m0_PBRI((byte)8);
                    o8.d_m3_PIRV(n8);
                }
                if (by8 % 7 != 6) break;
                o.b_m7_PBRV((byte)8);
                break;
            }
            case 9: {
                if (by2 != 0) break;
                int n9 = o2.c_m3_PBRI((byte)9);
                o2.a_f3_Ldo_.a_f10_Z = true;
                o.a_m10_PBBIRV((byte)44, (byte)9, n9);
            }
        }
        if (by2 >= b_f0_AB[o2.a_f2_B]) {
            o2.h();
        }
    }

    private void h() {
        this.b_f1_B = 0;
        this.c_f1_B = (byte)-1;
        this.a_f2_B = (byte)-1;
    }

    public final byte a_m2_PBRB(byte by2) {
        return this.c_f0_AB[by2];
    }

    public final byte b_m1_PBRB(byte by2) {
        return this.d_f0_AB[by2];
    }

    public final boolean a_m3_PBRZ(byte by2) {
        byte by3 = by2;
        this.c_f0_AB[by3] = (byte)(this.c_f0_AB[by3] + 1);
        return o.a_m6_PABRZ(this.c_f0_AB);
    }

    public final boolean b_m2_PBRZ(byte by2) {
        byte by3 = by2;
        this.d_f0_AB[by3] = (byte)(this.d_f0_AB[by3] + 1);
        return o.a_m6_PABRZ(this.d_f0_AB);
    }

    public final boolean c_m0_PBRZ(byte by2) {
        return this.a_f0_AZ[by2];
    }

    public final void a_m4_PIBRV(int n2, byte by2) {
        for (int i2 = 0; i2 < 2; ++i2) {
            if (this.a_f1_AB[i2] != by2) continue;
            this.a_f1_AB[i2] = -1;
        }
        this.a_m5_PIRV(n2);
        this.a_f1_AB[n2] = by2;
        this.a_f0_AZ[by2] = true;
    }

    public final void a_m5_PIRV(int n2) {
        byte by2 = this.a_f1_AB[n2];
        if (by2 >= 0) {
            this.a_f0_AZ[by2] = false;
        }
        this.a_f1_AB[n2] = -1;
    }

    public final void c_m1_PRV() {
        int n2;
        this.a_f0_AZ = new boolean[10];
        for (n2 = 0; n2 < 10; ++n2) {
            this.a_f0_AZ[n2] = false;
        }
        for (n2 = 0; n2 < 2; ++n2) {
            if (this.a_f1_AB[n2] < 0) continue;
            this.a_f0_AZ[this.a_f1_AB[n2]] = true;
        }
    }

    private static boolean a_m6_PABRZ(byte[] byArray) {
        int n2;
        if (byArray[4] >= 0) {
            return false;
        }
        int n3 = 0;
        for (n2 = 0; n2 < 4; ++n2) {
            n3 += byArray[n2];
        }
        if (n3 >= 6) {
            for (n2 = 4; n2 < 10; ++n2) {
                if (byArray[n2] >= 0) continue;
                byArray[n2] = 0;
            }
            return true;
        }
        return false;
    }

    public final void b_m3_PIRV(int n2) {
        if ((n2 = di.b_f5_AB[n2]) < 0) {
            return;
        }
        if (rpg.e.a_f3_ALs_[n2] != null) {
            return;
        }
        o.a_m17_PBRV((byte)n2);
        this.a_f4_Z = true;
    }

    public final void d_m0_PRV() {
        o.a_m17_PBRV((byte)10);
    }

    private int e_m0_PBRI(byte by2) {
        byte by3 = by2;
        o o2 = this;
        by2 = (byte)(o2.b_m4_PBIRI(by3, 1) + this.c_m3_PBRI(by2));
        return this.a_f3_Ldo_.c_m10_PIRI(by2);
    }

    public final boolean a_m7_PLcd_RZ(cd cd2) {
        byte by2 = 5;
        o o2 = this;
        int n2 = o2.b_m4_PBIRI(by2, 1);
        if (rpg.g.a_m7_PIIRI(1, 100) > n2) {
            if (cd2 instanceof af) {
                cd2.a_m1_PLat_RV(new z(-3));
                return false;
            }
            cd2.a_m1_PLat_RV(new cr(39, 5, 1));
            return true;
        }
        return false;
    }

    public static void c_m2_PIRV(int n2) {
        switch (n2) {
            case 7: {
                g.a_m16_PIRV(1);
                return;
            }
            case 8: {
                g.b_m5_PIRV(0);
                return;
            }
            case 9: {
                di.a_f4_Lg_.c_m4_PIIRV(2, 2);
            }
        }
    }

    public final int a_m8_PIRI(int n2) {
        return this.b_m4_PBIRI((byte)9, n2);
    }

    public final boolean a_m9_PRZ() {
        byte by2 = 9;
        o o2 = this;
        return rpg.g.a_m7_PIIRI(1, 100) < o2.a_m12_PBIRI(by2, 1);
    }

    private static void a_m10_PBBIRV(byte by2, byte by3, int n2) {
        di.a_f9_Ldo_.a_m2_PBBIRV(by2, by3, n2);
    }

    public final int a_m11_PBRI(byte by2) {
        return this.a_m12_PBIRI(by2, 1);
    }

    public final int a_m12_PBIRI(byte by2, int n2) {
        byte by3 = by2;
        o o2 = this;
        if (!o2.a_f0_AZ[by3]) {
            return 0;
        }
        int n3 = by2 * 3;
        by3 = by2;
        o2 = this;
        int n4 = this.R[n3] + this.R[n3 + 1] * o2.d_f0_AB[by3];
        by2 = (byte)n4;
        return n4 * n2 / this.R[n3 + 2];
    }

    private int b_m4_PBIRI(byte by2, int n2) {
        int n3 = by2 * 8;
        return n2 * (this.Q[n3] + this.Q[n3 + 1] * this.c_f0_AB[by2]) / this.Q[n3 + 2];
    }

    public final int b_m5_PBRI(byte by2) {
        return this.b_m4_PBIRI(by2, 1);
    }

    public final int c_m3_PBRI(byte by2) {
        by2 = (byte)(by2 << 3);
        byte by3 = this.Q[by2 + 3];
        by2 = this.Q[by2 + 7];
        return di.a_f9_Ldo_.a_m22_PBRI((byte)3) / by3 + by2;
    }

    public final int d_m1_PBRI(byte by2) {
        short s2 = rpg.g.b_m1_PABIRS(this.Q, (by2 << 3) + 5);
        by2 = (byte)s2;
        return s2;
    }

    public final boolean d_m2_PBRZ(byte n2) {
        if (n2 < 0) {
            return false;
        }
        if (this.b_f1_B != 0) {
            return false;
        }
        if (this.a_f2_B != -1) {
            return false;
        }
        int n3 = n2;
        o o2 = this;
        n3 = o2.Q[(n3 << 3) + 4];
        n3 -= o2.a_m12_PBIRI((byte)8, n3);
        int n4 = n3;
        if (n3 > di.a_f9_Ldo_.c_m7_PRI()) {
            this.a_f3_Ldo_.k_m2_PBRV((byte)1);
            return false;
        }
        this.a_f2_B = (byte)n2;
        di.a_f9_Ldo_.i_m0_PIRV(-n4);
        di.b_m8_PBZRV((byte)n2, false);
        n3 = n2;
        o o3 = this;
        switch (n3) {
            case 1: {
                n2 = 7;
                break;
            }
            case 2: {
                n2 = 6;
                break;
            }
            case 5: {
                n2 = 1;
                break;
            }
            case 9: {
                n2 = 8;
                break;
            }
            default: {
                o3.a_f3_Ldo_.a_m0_PBRV((byte)10);
                o3.a_f3_Ldo_.c_f1_I = 0;
                return true;
            }
        }
        n3 = o3.c_m3_PBRI((byte)n3) * n2;
        o3.a_f3_Ldo_.o_m0_PIRV(n3);
        o3.a_f3_Ldo_.n_m1_PRV();
        return false;
    }

    public final void e_m1_PRV() {
        this.c_f1_B = (byte)-1;
        this.b_f1_B = 1;
    }

    private void d_m3_PIRV(int n2) {
        this.b_m6_PBBIRV((byte)1, (byte)12, n2);
        this.b_m6_PBBIRV((byte)17, (byte)24, n2);
    }

    private void b_m6_PBBIRV(byte by2, byte by3, int n2) {
        for (byte by4 = by2; by4 <= by3; by4 = (byte)(by4 + 1)) {
            cd cd2 = this.a_m13_PBRLcd_(by4);
            if (cd2 == null) continue;
            cd2.b_m4_PIRZ(n2);
        }
    }

    private cd a_m13_PBRLcd_(byte by2) {
        du du2 = du.a_m2_PBBBBBRLdu_(this.d_f1_B, this.e, by2, (byte)0, (byte)0);
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h)) {
            return (cd)du2;
        }
        return null;
    }

    private void a_m14_PBBIZRV(byte by2, byte by3, int n2, boolean bl2) {
        o o2 = this;
        this.d_f1_B = o2.a_f3_Ldo_.s;
        o2.e = o2.a_f3_Ldo_.t;
        di.a_f4_Lg_.a_m23_PLat_RV(new dm(by2, by3, 1, this.a_f3_Ldo_.h, this.a_f3_Ldo_.i, bl2));
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    public final byte[] a_m15_PRAB() {
        byte[] byArray;
        ByteArrayOutputStream byteArrayOutputStream = null;
        FilterOutputStream filterOutputStream = null;
        try {
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = new DataOutputStream(byteArrayOutputStream);
            ((OutputStream)filterOutputStream).write(this.c_f0_AB);
            ((OutputStream)filterOutputStream).write(this.d_f0_AB);
            ((OutputStream)filterOutputStream).write(this.a_f1_AB);
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (IOException iOException) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) return null;
                byteArrayOutputStream.close();
                return null;
            }
            catch (IOException iOException2) {
                return null;
            }
        }
        catch (Throwable throwable) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) throw throwable;
                byteArrayOutputStream.close();
                throw throwable;
            }
            catch (IOException iOException) {}
            throw throwable;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            return byArray;
        }
        catch (IOException iOException) {}
        return byArray;
    }

    private void i() {
        byte by2;
        int n2 = 0;
        for (by2 = 0; by2 < this.c_f0_AB.length; ++by2) {
            if (this.c_f0_AB[by2] <= 0) continue;
            n2 += this.c_f0_AB[by2];
            this.c_f0_AB[by2] = 0;
        }
        for (by2 = 0; by2 < this.d_f0_AB.length; ++by2) {
            if (this.d_f0_AB[by2] <= 0) continue;
            n2 += this.d_f0_AB[by2];
            this.d_f0_AB[by2] = 0;
        }
        di.a_f9_Ldo_.b_f3_S = (short)(di.a_f9_Ldo_.b_f3_S + n2);
        this.g();
        for (by2 = 0; by2 < 2; by2 = (byte)(by2 + 1)) {
            di.a_m15_PBZRV(by2, false);
        }
    }

    /*
     * Loose catch block
     */
    public final void a_m16_PABRV(byte[] object) {
        FilterInputStream filterInputStream;
        ByteArrayInputStream byteArrayInputStream;
        block14: {
            byteArrayInputStream = null;
            filterInputStream = null;
            byteArrayInputStream = new ByteArrayInputStream((byte[])object);
            filterInputStream = new DataInputStream(byteArrayInputStream);
            ((DataInputStream)filterInputStream).read(this.c_f0_AB);
            ((DataInputStream)filterInputStream).read(this.d_f0_AB);
            ((DataInputStream)filterInputStream).read(this.a_f1_AB);
            if (!di.a_m20_PBRZ((byte)4)) break block14;
            this.i();
        }
        try {
            filterInputStream.close();
            byteArrayInputStream.close();
            return;
        }
        catch (IOException iOException) {
            return;
        }
        catch (IOException iOException) {
            try {
                object = iOException;
                iOException.printStackTrace();
            }
            catch (Throwable throwable) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                }
                catch (IOException iOException2) {}
                throw throwable;
            }
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream != null) {
                    byteArrayInputStream.close();
                }
                return;
            }
            catch (IOException iOException3) {
                return;
            }
        }
    }

    public final void f() {
        this.Q = rpg.e.a_m6_PLjava_lang_String_RAB("/s/d/a");
        this.R = new byte[30];
        this.R = rpg.e.a_m6_PLjava_lang_String_RAB("/s/d/p");
    }

    private static void a_m17_PBRV(byte by2) {
        rpg.e.a_f3_ALs_[by2] = s.a_m5_PLjava_lang_String_Ljava_lang_String_RLs_("/s/cif/" + by2, "/s/" + by2);
    }

    private static void b_m7_PBRV(byte by2) {
        switch (by2) {
            case 0: 
            case 4: {
                by2 = 1;
                break;
            }
            case 8: {
                by2 = (byte)2;
                break;
            }
            default: {
                return;
            }
        }
        bq.a_m2_PBRV(by2);
    }

    public final boolean b_m8_PRZ() {
        int n2 = 5 + this.a_f3_Ldo_.a_m22_PBRI((byte)3);
        byte by2 = 6;
        o o2 = this;
        int n3 = n2 + o2.a_m12_PBIRI(by2, 1);
        return rpg.g.a_m7_PIIRI(0, 99) < n3;
    }
}

