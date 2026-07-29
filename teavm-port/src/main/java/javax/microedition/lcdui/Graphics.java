package javax.microedition.lcdui;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import bootstrap.JsBridge;

public class Graphics {
    public static final int HCENTER = 1;
    public static final int VCENTER = 2;
    public static final int LEFT = 4;
    public static final int RIGHT = 8;
    public static final int TOP = 16;
    public static final int BOTTOM = 32;
    public static final int BASELINE = 64;
    public static final int SOLID = 0;
    public static final int DOTTED = 1;

    final CanvasRenderingContext2D ctx;
    final int width, height;
    int tx, ty;
    int color;
    Font font = Font.getDefaultFont();
    String css = "#000000";
    int clipX, clipY, clipW, clipH;

    public Graphics(CanvasRenderingContext2D ctx, int w, int h) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;
        this.clipX = 0;
        this.clipY = 0;
        this.clipW = w;
        this.clipH = h;
        // One immutable root save per canvas context — never nest extras in the constructor
        // (extra saves capture active clips and break later setClip restore).
        ensureRoot(ctx);
        // Start each Graphics with a full-canvas clip (MIDP default)
        applyClip(0, 0, w, h);
    }

    public void setColor(int RGB) {
        color = RGB;
        int r = (RGB >> 16) & 255, g = (RGB >> 8) & 255, b = RGB & 255;
        css = "rgb(" + r + "," + g + "," + b + ")";
        ctx.setFillStyle(css);
        ctx.setStrokeStyle(css);
    }
    public void setColor(int r, int g, int b) { setColor((r<<16)|(g<<8)|b); }
    public int getColor() { return color; }
    public void setFont(Font f) { if (f != null) { font = f; ctx.setFont(f.css()); } }
    public Font getFont() { return font; }
    public void translate(int x, int y) { tx += x; ty += y; }
    public int getTranslateX() { return tx; }
    public int getTranslateY() { return ty; }

    public void setClip(int x, int y, int w, int h) {
        if (w <= 0 || h <= 0) { w = width; h = height; x = 0; y = 0; }
        clipX = x; clipY = y; clipW = w; clipH = h;
        applyClip(x + tx, y + ty, w, h);
        ctx.setFillStyle(css);
        ctx.setStrokeStyle(css);
        if (font != null) ctx.setFont(font.css());
    }

    public void clipRect(int x, int y, int w, int h) {
        int x2 = Math.max(clipX, x);
        int y2 = Math.max(clipY, y);
        int x3 = Math.min(clipX + clipW, x + w);
        int y3 = Math.min(clipY + clipH, y + h);
        setClip(x2, y2, Math.max(0, x3 - x2), Math.max(0, y3 - y2));
    }

    public int getClipX() { return clipX; }
    public int getClipY() { return clipY; }
    public int getClipWidth() { return clipW; }
    public int getClipHeight() { return clipH; }

    public void fillRect(int x, int y, int w, int h) {
        ctx.setFillStyle(css);
        ctx.fillRect(x + tx, y + ty, w, h);
    }
    public void drawRect(int x, int y, int w, int h) {
        ctx.setStrokeStyle(css);
        ctx.strokeRect(x + tx + 0.5, y + ty + 0.5, w, h);
    }
    public void drawLine(int x1, int y1, int x2, int y2) {
        int ax1 = x1 + tx, ay1 = y1 + ty, ax2 = x2 + tx, ay2 = y2 + ty;
        // MIDP drawLine(x,y,x,y) paints a single pixel — required for bitmap fonts.
        if (ax1 == ax2 && ay1 == ay2) {
            ctx.setFillStyle(css);
            ctx.fillRect(ax1, ay1, 1, 1);
            return;
        }
        if (ax1 == ax2) {
            int y = Math.min(ay1, ay2);
            int h = Math.abs(ay2 - ay1) + 1;
            ctx.setFillStyle(css);
            ctx.fillRect(ax1, y, 1, h);
            return;
        }
        if (ay1 == ay2) {
            int x = Math.min(ax1, ax2);
            int w = Math.abs(ax2 - ax1) + 1;
            ctx.setFillStyle(css);
            ctx.fillRect(x, ay1, w, 1);
            return;
        }
        ctx.setStrokeStyle(css);
        ctx.beginPath();
        ctx.moveTo(ax1 + 0.5, ay1 + 0.5);
        ctx.lineTo(ax2 + 0.5, ay2 + 0.5);
        ctx.stroke();
    }
    public void fillTriangle(int x1,int y1,int x2,int y2,int x3,int y3) {
        ctx.setFillStyle(css);
        ctx.beginPath();
        ctx.moveTo(x1+tx,y1+ty); ctx.lineTo(x2+tx,y2+ty); ctx.lineTo(x3+tx,y3+ty);
        ctx.closePath(); ctx.fill();
    }
    public void drawString(String str, int x, int y, int anchor) {
        if (str == null) return;
        ctx.setFillStyle(css);
        ctx.setFont(font.css());
        double ax = x + tx, ay = y + ty;
        double tw = ctx.measureText(str).getWidth();
        double th = font.getHeight();
        if ((anchor & HCENTER) != 0) ax -= tw / 2;
        else if ((anchor & RIGHT) != 0) ax -= tw;
        if ((anchor & VCENTER) != 0) ay += th / 2;
        else if ((anchor & TOP) != 0) ay += th;
        else if ((anchor & BOTTOM) != 0) { /* baseline-ish */ }
        else ay += th;
        if ((anchor & (TOP|BOTTOM|VCENTER|BASELINE)) == 0) {
            ay = y + ty + th;
        }
        ctx.fillText(str, ax, ay);
    }
    public void drawSubstring(String str, int offset, int len, int x, int y, int anchor) {
        if (str == null) return;
        drawString(str.substring(offset, offset+len), x, y, anchor);
    }
    public void drawChar(char character, int x, int y, int anchor) {
        drawString(String.valueOf(character), x, y, anchor);
    }
    public void drawChars(char[] data, int offset, int length, int x, int y, int anchor) {
        drawString(new String(data, offset, length), x, y, anchor);
    }
    public void drawImage(Image img, int x, int y, int anchor) {
        if (img == null) return;
        int ax = x + tx, ay = y + ty;
        int iw = img.getWidth(), ih = img.getHeight();
        if ((anchor & HCENTER) != 0) ax -= iw / 2;
        else if ((anchor & RIGHT) != 0) ax -= iw;
        if ((anchor & VCENTER) != 0) ay -= ih / 2;
        else if ((anchor & BOTTOM) != 0) ay -= ih;
        img.drawTo(ctx, ax, ay);
    }
    public void drawRegion(Image src, int x_src, int y_src, int width, int height, int transform, int x_dest, int y_dest, int anchor) {
        if (src == null) return;
        int ax = x_dest + tx, ay = y_dest + ty;
        if ((anchor & HCENTER) != 0) ax -= width / 2;
        else if ((anchor & RIGHT) != 0) ax -= width;
        if ((anchor & VCENTER) != 0) ay -= height / 2;
        else if ((anchor & BOTTOM) != 0) ay -= height;
        src.drawRegionTo(ctx, x_src, y_src, width, height, ax, ay, transform);
    }
    public void drawRGB(int[] rgbData, int offset, int scanlength, int x, int y, int w, int h, boolean processAlpha) {
        if (rgbData == null || w <= 0 || h <= 0) return;
        HTMLCanvasElement tmp = JsBridge.createCanvas(w, h);
        JsBridge.ctxDrawRGB(JsBridge.ctx2d(tmp), rgbData, offset, scanlength, 0, 0, w, h, processAlpha);
        drawCanvasJS(ctx, tmp, x + tx, y + ty);
    }

    @org.teavm.jso.JSBody(params = {"ctx","c","x","y"}, script = "ctx.drawImage(c,x,y);")
    private static native void drawCanvasJS(CanvasRenderingContext2D ctx, HTMLCanvasElement c, int x, int y);

    public void setStrokeStyle(int style) {}
    public int getStrokeStyle() { return SOLID; }
    public void fillRoundRect(int x,int y,int w,int h,int arcW,int arcH) { fillRect(x,y,w,h); }
    public void drawRoundRect(int x,int y,int w,int h,int arcW,int arcH) { drawRect(x,y,w,h); }
    public void fillArc(int x,int y,int w,int h,int startAngle,int arcAngle) { fillRect(x,y,w,h); }
    public void drawArc(int x,int y,int w,int h,int startAngle,int arcAngle) { drawRect(x,y,w,h); }

    @org.teavm.jso.JSBody(params = {"ctx"}, script =
        "if(!ctx.__hlzRoot){ctx.save();ctx.__hlzRoot=1;ctx.__hlzDepth=0;}")
    private static native void ensureRoot(CanvasRenderingContext2D ctx);

    @org.teavm.jso.JSBody(params = {"ctx", "x", "y", "w", "h"}, script =
        "if(!ctx.__hlzRoot){ctx.save();ctx.__hlzRoot=1;ctx.__hlzDepth=0;}"
      + "while((ctx.__hlzDepth|0)>0){ctx.restore();ctx.__hlzDepth--;}"
      + "ctx.save();ctx.__hlzDepth=1;"
      + "ctx.beginPath();ctx.rect(x|0,y|0,w|0,h|0);ctx.clip();")
    private static native void applyClip(CanvasRenderingContext2D ctx, int x, int y, int w, int h);

    private void applyClip(int x, int y, int w, int h) {
        applyClip(ctx, x, y, w, h);
    }
}
