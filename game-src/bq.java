/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.media.Manager
 *  javax.microedition.media.Player
 *  javax.microedition.media.control.VolumeControl
 */
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import javax.microedition.media.Manager;
import javax.microedition.media.Player;
import javax.microedition.media.control.VolumeControl;
import rpg.c;
import rpg.d;
import rpg.e;

public final class bq
implements d {
    private static int a_f0_I = 10;
    public static long a_f1_J;
    private static long b_f0_J;
    private static byte a_f2_B;
    private static byte b_f1_B;
    private static Player[] a_f3_ALjavax_microedition_media_Player_;
    private static Player a_f4_Ljavax_microedition_media_Player_;
    private static byte c;
    private static final byte[] a_f5_AB;

    public static final void a_m0_PRV() {
        if (!rpg.c.b_f1_Z) {
            return;
        }
        if (a_f3_ALjavax_microedition_media_Player_[14] == null) {
            return;
        }
        if (a_f2_B == 14 && a_f3_ALjavax_microedition_media_Player_[14].getState() == 400) {
            return;
        }
        if (a_f1_J != 0L && a_f1_J > System.currentTimeMillis()) {
            return;
        }
        bq.a_m1_PBZRV((byte)14, true);
        a_f1_J = 0L;
    }

    public static final void b_m0_PRV() {
        b_f0_J = 0L;
        a_f2_B = (byte)-1;
        if (a_f4_Ljavax_microedition_media_Player_ == null || a_f4_Ljavax_microedition_media_Player_.getState() != 400) {
            return;
        }
        try {
            a_f4_Ljavax_microedition_media_Player_.stop();
            return;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return;
        }
    }

    public static final void c() {
        if (a_f2_B == 14) {
            bq.b_m0_PRV();
        }
    }

    public static final void d() {
        bq.c();
        a_f1_J = System.currentTimeMillis() << 1;
    }

    public static final void e() {
        a_f1_J = 0L;
        bq.a_m0_PRV();
    }

    public static final void f() {
        bq.c();
        bq.k();
    }

    public static final void a_m1_PBZRV(byte by2, boolean bl2) {
        try {
            bq.b_m0_PRV();
            if (a_f2_B != by2) {
                a_f4_Ljavax_microedition_media_Player_ = a_f3_ALjavax_microedition_media_Player_[by2];
            } else if (a_f4_Ljavax_microedition_media_Player_ == null) {
                byte by3 = by2;
                if (by3 == 14) {
                    bq.b_m2_PBRV(b_f1_B);
                } else {
                    bq.b_m3_PIRV(by3);
                }
                a_f4_Ljavax_microedition_media_Player_ = a_f3_ALjavax_microedition_media_Player_[by3];
            }
            a_f2_B = by2;
            a_f4_Ljavax_microedition_media_Player_.setLoopCount(bl2 ? -1 : 1);
            a_f4_Ljavax_microedition_media_Player_.start();
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
        }
        a_f1_J = System.currentTimeMillis() + 3000L;
    }

    public static final void b_m1_PBZRV(byte by2, boolean bl2) {
        bq.c();
        bq.b_m2_PBRV(by2);
        if (bl2) {
            a_f1_J = 0L;
            bq.a_m0_PRV();
            return;
        }
        by2 = 0;
        by2 = (byte)14;
        bq.a_m1_PBZRV((byte)14, false);
    }

    public static final void a_m2_PBRV(byte by2) {
        if (rpg.c.c_f1_Z) {
            if (System.currentTimeMillis() - b_f0_J < 127L) {
                return;
            }
            if (a_f3_ALjavax_microedition_media_Player_[by2] == null) {
                bq.b_m3_PIRV(by2);
            }
            bq.a_m1_PBZRV(by2, false);
            b_f0_J = System.currentTimeMillis();
        }
    }

    public static final void a_m3_PIRV(int n2) {
        if (n2 < 0) {
            n2 = 0;
        } else if (n2 > a_f0_I) {
            n2 = a_f0_I;
        }
        if (a_f4_Ljavax_microedition_media_Player_ != null) {
            try {
                VolumeControl volumeControl;
                if (a_f4_Ljavax_microedition_media_Player_.getState() != 400 && (volumeControl = (VolumeControl)a_f4_Ljavax_microedition_media_Player_.getControl("VolumeControl")) != null) {
                    volumeControl.setLevel(n2 * 100 / a_f0_I);
                }
                return;
            }
            catch (Exception exception) {}
        }
    }

    public static final void b_m2_PBRV(byte by2) {
        if (by2 >= 17) {
            return;
        }
        c = by2;
        try {
            Object object = e.a_m6_PLjava_lang_String_RAB("/snd/b/" + by2);
            object = new ByteArrayInputStream((byte[])object);
            bq.a_f3_ALjavax_microedition_media_Player_[14] = Manager.createPlayer((InputStream)object, (String)"audio/midi");
            a_f3_ALjavax_microedition_media_Player_[14].realize();
            a_f3_ALjavax_microedition_media_Player_[14].prefetch();
            return;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return;
        }
    }

    private static void k() {
        if (a_f3_ALjavax_microedition_media_Player_[14] != null) {
            a_f3_ALjavax_microedition_media_Player_[14].close();
            bq.a_f3_ALjavax_microedition_media_Player_[14] = null;
        }
    }

    public static final void g() {
        bq.b_m3_PIRV(10);
        bq.b_m3_PIRV(11);
        bq.b_m3_PIRV(13);
        for (int i2 = 1; i2 <= 4; ++i2) {
            bq.b_m3_PIRV(i2);
        }
    }

    public static final void h() {
        for (int i2 = 0; i2 < 6; ++i2) {
            if (a_f3_ALjavax_microedition_media_Player_[a_f5_AB[i2]] == null) continue;
            bq.a_f3_ALjavax_microedition_media_Player_[bq.a_f5_AB[i2]] = null;
        }
        bq.b_m3_PIRV(a_f5_AB[di.b_f4_B]);
        try {
            Object object = e.a_m6_PLjava_lang_String_RAB("/snd/e/" + (di.a_m17_PRZ() ? 12 : 11));
            object = new ByteArrayInputStream((byte[])object);
            bq.a_f3_ALjavax_microedition_media_Player_[11] = Manager.createPlayer((InputStream)object, (String)"audio/x-wav");
            a_f3_ALjavax_microedition_media_Player_[11].realize();
            a_f3_ALjavax_microedition_media_Player_[11].prefetch();
            return;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return;
        }
    }

    public static final void b_m3_PIRV(int n2) {
        try {
            Object object = e.a_m6_PLjava_lang_String_RAB("/snd/e/" + n2);
            object = new ByteArrayInputStream((byte[])object);
            bq.a_f3_ALjavax_microedition_media_Player_[n2] = Manager.createPlayer((InputStream)object, (String)"audio/x-wav");
            a_f3_ALjavax_microedition_media_Player_[n2].realize();
            a_f3_ALjavax_microedition_media_Player_[n2].prefetch();
            return;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return;
        }
    }

    public static void i() {
        if (a_f2_B == 14) {
            bq.b_m0_PRV();
            if (c >= 0) {
                bq.k();
            }
        }
    }

    public static void j() {
        if (c >= 0) {
            bq.b_m2_PBRV(c);
        }
    }

    static {
        a_f2_B = (byte)-1;
        b_f1_B = (byte)-1;
        a_f3_ALjavax_microedition_media_Player_ = new Player[15];
        c = (byte)-1;
        a_f5_AB = new byte[]{8, 5, 7, 9, 8, 6};
    }
}

