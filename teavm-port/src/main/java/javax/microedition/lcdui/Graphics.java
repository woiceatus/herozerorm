
package javax.microedition.lcdui;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.JSObject;
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
        this.clipW = w;
        this.clipH = h;
        // Base state for MIDP setClip (replace, don't nest)
        ctx.save();
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
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.rect(x + tx, y + ty, w, h);
        ctx.clip();
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
        ctx.setStrokeStyle(css);
        ctx.beginPath();
        ctx.moveTo(x1 + tx + 0.5, y1 + ty + 0.5);
        ctx.lineTo(x2 + tx + 0.5, y2 + ty + 0.5);
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
        else ay += th; // TOP default-ish for MIDP baseline=y
        // MIDP: y is baseline for default anchor
        if ((anchor & (TOP|BOTTOM|VCENTER|BASELINE)) == 0) {
            // default TOP in some impls; MIDP default is TOP
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
        // Draw into a temp canvas then blit so clip/transform still apply via drawImage
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
}
