/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.lcdui.Image
 */
import javax.microedition.lcdui.Image;

public final class cg {
    private Image a = null;

    protected final Image a_m0_PRLjavax_microedition_lcdui_Image_() {
        return this.a;
    }

    private cg(Image image) {
        this.a = image;
    }

    public final cm a_m1_PRLcm_() {
        if (this.a == null) {
            return null;
        }
        return new cm(this.a.getGraphics());
    }

    public static cg a_m2_PIIRLcg_(int n2, int n3) {
        Image image = Image.createImage((int)n2, (int)n3);
        return new cg(image);
    }

    public static cg a_m3_PABIIRLcg_(byte[] object, int n2, int n3) {
        object = Image.createImage((byte[])object, (int)0, (int)n3);
        return new cg((Image)object);
    }

    public static cg a_m4_PLjava_lang_String_RLcg_(String string) {
        try {
            string = Image.createImage((String)string);
            return new cg((Image)string);
        }
        catch (Exception exception) {
            return null;
        }
    }

    public final int a_m5_PRI() {
        return this.a.getWidth();
    }

    public final int b() {
        return this.a.getHeight();
    }
}

