/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.lcdui.Graphics
 *  javax.microedition.lcdui.Image
 */
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Image;

public final class cm {
    public static final Image a_f0_Ljavax_microedition_lcdui_Image_ = Image.createImage((int)ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getWidth(), (int)ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getHeight());
    private static final Graphics a_f1_Ljavax_microedition_lcdui_Graphics_ = a_f0_Ljavax_microedition_lcdui_Image_.getGraphics();
    private static final cm a_f2_Lcm_ = new cm();
    private Graphics b_f0_Ljavax_microedition_lcdui_Graphics_ = null;
    private int a_f3_I = -1;
    private int b_f1_I = 0;

    public cm() {
        this.b_f0_Ljavax_microedition_lcdui_Graphics_ = a_f1_Ljavax_microedition_lcdui_Graphics_;
    }

    public cm(Graphics graphics) {
        this.b_f0_Ljavax_microedition_lcdui_Graphics_ = graphics;
    }

    public static cm a_m0_PRLcm_() {
        return a_f2_Lcm_;
    }

    public final void a_m1_PLcg_IIIRV(cg cg2, int n2, int n3, int n4) {
        try {
            if (this.a_f3_I != -1) {
                int n5 = cg2.a_m0_PRLjavax_microedition_lcdui_Image_().getWidth();
                int n6 = cg2.a_m0_PRLjavax_microedition_lcdui_Image_().getHeight();
                int[] nArray = new int[n5 * n6];
                cg2.a_m0_PRLjavax_microedition_lcdui_Image_().getRGB(nArray, 0, n5, 0, 0, n5, n6);
                for (int i2 = nArray.length - 1; i2 >= 0; --i2) {
                    if (nArray[i2] >>> 24 == 0) continue;
                    int n7 = i2;
                    nArray[n7] = nArray[n7] & this.a_f3_I;
                }
                Image image = Image.createRGBImage((int[])nArray, (int)n5, (int)n6, (boolean)true);
                this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawImage(image, n2, n3, n4);
                return;
            }
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawImage(cg2.a_m0_PRLjavax_microedition_lcdui_Image_(), n2, n3, n4);
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
        }
    }

    public final void a_m2_PIRV(int n2) {
        this.b_f0_Ljavax_microedition_lcdui_Graphics_.setColor(n2);
        this.b_f1_I = n2;
    }

    public final void a_m3_PIIIRV(int n2, int n3, int n4) {
        this.b_f0_Ljavax_microedition_lcdui_Graphics_.setColor(n2, n3, n4);
        this.b_f1_I = (n2 & 0xFF) << 16 | (n3 & 0xFF) << 8 | n4 & 0xFF;
    }

    public final void a_m4_PIIIIRV(int n2, int n3, int n4, int n5) {
        if (this.a_f3_I == -1) {
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.fillRect(n2, n3, n4, n5);
            return;
        }
        int[] nArray = new int[n4 * n5];
        int n6 = (this.b_f1_I | 0xFF000000) & this.a_f3_I;
        for (int i2 = nArray.length - 1; i2 >= 0; --i2) {
            nArray[i2] = n6;
        }
        this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawRGB(nArray, 0, n4, n2, n3, n4, n5, true);
    }

    public final void b_m0_PIIIIRV(int n2, int n3, int n4, int n5) {
        this.b_f0_Ljavax_microedition_lcdui_Graphics_.setClip(n2, n3, n4, n5);
    }

    public final void c_m0_PIIIIRV(int n2, int n3, int n4, int n5) {
        this.b_f0_Ljavax_microedition_lcdui_Graphics_.clipRect(n2, n3, n4, n5);
    }

    public final void d_m0_PIIIIRV(int n2, int n3, int n4, int n5) {
        if (this.a_f3_I == -1) {
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawRect(n2, n3, n4, n5);
        }
    }

    public final void e(int n2, int n3, int n4, int n5) {
        if (this.a_f3_I == -1) {
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawLine(n2, n3, n4, n5);
        }
    }

    public final void a_m5_PLjava_lang_String_IIIRV(String string, int n2, int n3, int n4) {
        if (this.a_f3_I == -1) {
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawString(string, n2, n3, n4);
        }
    }

    public final void b_m1_PIRV(int n2) {
        this.a_f3_I = (n2 & 0xFF) << 24 | 0xFFFFFF;
    }

    public final int a_m6_PRI() {
        return this.b_f0_Ljavax_microedition_lcdui_Graphics_.getClipX();
    }

    public final int b_m2_PRI() {
        return this.b_f0_Ljavax_microedition_lcdui_Graphics_.getClipY();
    }

    public final int c_m1_PRI() {
        return this.b_f0_Ljavax_microedition_lcdui_Graphics_.getClipWidth();
    }

    public final int d_m1_PRI() {
        return this.b_f0_Ljavax_microedition_lcdui_Graphics_.getClipHeight();
    }

    public final void a_m7_PIIIIIIRV(int n2, int n3, int n4, int n5, int n6, int n7) {
        this.b_f0_Ljavax_microedition_lcdui_Graphics_.fillTriangle(n2, n3, n4, n5, n6, n7);
    }
}

