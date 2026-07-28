/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.lcdui.Canvas
 *  javax.microedition.lcdui.Graphics
 */
import javax.microedition.lcdui.Canvas;
import javax.microedition.lcdui.Graphics;
import rpg.d;

public final class f
extends Canvas {
    public static az a_f0_Laz_ = null;
    private static int a_f1_I = 0;
    private static int b_f0_I = 0;
    private static int c_f0_I = 0;
    public static boolean a_f2_Z = false;
    private static byte a_f3_B = 0;
    private static ea a_f4_Lea_ = null;
    private static boolean c_f1_Z = false;
    public static boolean b_f1_Z = false;

    public f() {
        this.setFullScreenMode(true);
    }

    protected final void paint(Graphics object) {
        if (b_f1_Z) {
            int n2 = this.getWidth();
            int n3 = this.getHeight();
            object.setClip(0, 0, n3, n2);
            object.setColor(0);
            object.fillRect(0, 0, n3, n2);
            object.setColor(0xFFFFFF);
            object = new cm((Graphics)object);
            ac.a_m2_PLcm_IIABIIRV((cm)object, n3 >> 1, n2 >> 1, d.D, 0, 1);
            return;
        }
        if (!ds.a_f7_Z) {
            int n4 = this.getWidth();
            int n5 = this.getHeight();
            object.setClip(0, 0, n4, n5);
            object.setColor(0);
            object.fillRect(0, 0, n4, n5);
            object.setColor(0xFFFFFF);
            object = new cm((Graphics)object);
            ac.a_m2_PLcm_IIABIIRV((cm)object, n4 >> 1, n5 >> 1, d.E, 0, 1);
            return;
        }
        if (a_f2_Z) {
            int n6 = this.getWidth();
            int n7 = this.getHeight();
            object.setClip(0, 0, n6, n7);
            object.setColor(0);
            object.fillRect(0, 0, n6, n7);
            object.setColor(0xFFFFFF);
            if (a_f3_B < 20) {
                object = new cm((Graphics)object);
                ac.a_m2_PLcm_IIABIIRV((cm)object, n6 >> 1, n7 >> 1, d.C, 0, 1);
            }
            byte by2 = a_f3_B;
            a_f3_B = (byte)(by2 + 1);
            if (by2 > 30) {
                a_f3_B = 0;
            }
            return;
        }
        if (cm.a_f0_Ljavax_microedition_lcdui_Image_ != null) {
            object.drawImage(cm.a_f0_Ljavax_microedition_lcdui_Image_, 0, 0, 20);
        }
    }

    protected final void keyPressed(int n2) {
        if (n2 == -12) {
            bq.i();
        }
        if (b_f1_Z) {
            return;
        }
        if (!ds.a_f7_Z) {
            return;
        }
        if (a_f2_Z) {
            if (this.isShown()) {
                a_f2_Z = false;
                bq.j();
                if (a_f0_Laz_ != null) {
                    a_f0_Laz_.b();
                }
            }
            return;
        }
        a_f1_I = n2;
    }

    protected final void keyReleased(int n2) {
        b_f0_I = n2;
    }

    public static void a_m0_PRV() {
        if (a_f1_I != 0) {
            if (c_f0_I != 0) {
                if (a_f0_Laz_ != null) {
                    a_f0_Laz_.a_m0_PIIRZ(1, c_f0_I);
                }
                c_f0_I = 0;
            }
            c_f0_I = a_f1_I;
            if (a_f0_Laz_ != null) {
                a_f0_Laz_.a_m0_PIIRZ(0, a_f1_I);
            }
            a_f1_I = 0;
        }
        if (b_f0_I != 0) {
            if (c_f0_I != 0) {
                if (a_f0_Laz_ != null) {
                    a_f0_Laz_.a_m0_PIIRZ(1, c_f0_I);
                }
                c_f0_I = 0;
            }
            b_f0_I = 0;
        }
    }

    protected final void showNotify() {
    }

    protected final void hideNotify() {
        if (!ds.a_f7_Z) {
            return;
        }
        a_f2_Z = true;
        bq.i();
        if (a_f0_Laz_ != null) {
            a_f0_Laz_.a_m0_PIIRZ(1, c_f0_I);
            c_f0_I = 0;
            a_f0_Laz_.a_m1_PRV();
        }
    }

    public static boolean a_m1_PLaz_RZ(az az2) {
        boolean bl2 = a_f0_Laz_ == null;
        a_f0_Laz_ = az2;
        return bl2;
    }

    public final void sizeChanged(int n2, int n3) {
        if (n2 > n3) {
            b_f1_Z = true;
            return;
        }
        b_f1_Z = false;
    }

    public final int getWidth() {
        return 240;
    }

    public final int getHeight() {
        return 320;
    }
}

