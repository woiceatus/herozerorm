/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.lcdui.Font
 */
import javax.microedition.lcdui.Font;

public final class bn {
    private Font a_f0_Ljavax_microedition_lcdui_Font_ = null;
    private static final bn a_f1_Lbn_ = new bn(Font.getDefaultFont());

    private bn(Font font) {
        this.a_f0_Ljavax_microedition_lcdui_Font_ = font;
    }

    public static bn a_m0_PRLbn_() {
        return a_f1_Lbn_;
    }

    public final int a_m1_PLjava_lang_String_IIRI(String string, int n2, int n3) {
        return this.a_f0_Ljavax_microedition_lcdui_Font_.substringWidth(string, 0, n3);
    }
}

