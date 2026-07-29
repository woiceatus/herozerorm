
package javax.microedition.lcdui;
public final class Font {
    public static final int FACE_SYSTEM = 0;
    public static final int FACE_MONOSPACE = 32;
    public static final int FACE_PROPORTIONAL = 64;
    public static final int STYLE_PLAIN = 0;
    public static final int STYLE_BOLD = 1;
    public static final int STYLE_ITALIC = 2;
    public static final int STYLE_UNDERLINED = 4;
    public static final int SIZE_SMALL = 8;
    public static final int SIZE_MEDIUM = 0;
    public static final int SIZE_LARGE = 16;

    private final int face, style, size, height;
    private static final Font DEFAULT = new Font(FACE_SYSTEM, STYLE_PLAIN, SIZE_MEDIUM);

    private Font(int face, int style, int size) {
        this.face = face; this.style = style; this.size = size;
        this.height = size == SIZE_LARGE ? 16 : size == SIZE_SMALL ? 12 : 14;
    }
    public static Font getDefaultFont() { return DEFAULT; }
    public static Font getFont(int face, int style, int size) { return new Font(face, style, size); }
    public int getFace() { return face; }
    public int getStyle() { return style; }
    public int getSize() { return size; }
    public int getHeight() { return height; }
    public int getBaselinePosition() { return height - 2; }
    public boolean isBold() { return (style & STYLE_BOLD) != 0; }
    public boolean isItalic() { return (style & STYLE_ITALIC) != 0; }
    public boolean isUnderlined() { return (style & STYLE_UNDERLINED) != 0; }
    public boolean isPlain() { return style == STYLE_PLAIN; }
    public int charWidth(char ch) { return height / 2; }
    public int charsWidth(char[] ch, int o, int l) { return l * (height/2); }
    public int stringWidth(String s) { return s == null ? 0 : s.length() * (height/2); }
    public int substringWidth(String s, int o, int l) { return l * (height/2); }
    String css() {
        String st = isBold() ? "bold " : "normal ";
        String ff = face == FACE_MONOSPACE ? "monospace" : "sans-serif";
        return st + height + "px " + ff;
    }
}
