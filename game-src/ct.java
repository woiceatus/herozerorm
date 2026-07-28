/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.lcdui.Canvas
 *  javax.microedition.lcdui.Display
 *  javax.microedition.lcdui.Displayable
 *  javax.microedition.midlet.MIDlet
 */
import javax.microedition.lcdui.Canvas;
import javax.microedition.lcdui.Display;
import javax.microedition.lcdui.Displayable;
import javax.microedition.midlet.MIDlet;
import rpg.RPGHeroEx;

public final class ct {
    public static Display a_f0_Ljavax_microedition_lcdui_Display_ = null;
    private static ct a_f1_Lct_ = null;
    public static Canvas a_f2_Ljavax_microedition_lcdui_Canvas_ = null;

    private ct(Display display) {
        a_f0_Ljavax_microedition_lcdui_Display_ = display;
    }

    public static int a_m0_PIRI(int n2) {
        if (a_f2_Ljavax_microedition_lcdui_Canvas_ != null) {
            return a_f2_Ljavax_microedition_lcdui_Canvas_.getGameAction(n2);
        }
        return n2;
    }

    public static void a_m1_PLaz_RV(az az2) {
        if (f.a_m1_PLaz_RZ(az2)) {
            a_f0_Ljavax_microedition_lcdui_Display_.setCurrent((Displayable)a_f2_Ljavax_microedition_lcdui_Canvas_);
        }
    }

    public static ct a_m2_PRLct_() {
        if (a_f1_Lct_ == null) {
            a_f1_Lct_ = new ct(Display.getDisplay((MIDlet)RPGHeroEx.a));
            a_f2_Ljavax_microedition_lcdui_Canvas_ = new f();
        }
        return a_f1_Lct_;
    }
}

