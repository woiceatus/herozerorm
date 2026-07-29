package javax.microedition.lcdui;
import bootstrap.JsBridge;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.typedarrays.Uint8Array;

/**
 * MIDP Image backed by an HTMLCanvasElement so pixels are always synchronously drawable.
 */
public class Image {
    HTMLCanvasElement canvas;
    int width, height;
    boolean mutable;

    private Image() {}

    public static Image createImage(int w, int h) {
        Image img = new Image();
        img.width = Math.max(1, w);
        img.height = Math.max(1, h);
        img.mutable = true;
        img.canvas = JsBridge.createCanvas(img.width, img.height);
        return img;
    }

    public static Image createImage(String name) throws java.io.IOException {
        String path = name;
        if (!path.startsWith("/")) path = "/" + path;
        String url = "/res" + path;
        Uint8Array bytes = JsBridge.getResource(path);
        if (bytes == null) bytes = JsBridge.getResource(url);
        if (bytes == null) bytes = JsBridge.httpGetBytes(url);
        if (bytes == null) {
            throw new java.io.IOException("Missing image: " + name);
        }
        return fromDecoded(bytes, guessMime(path), false);
    }

    public static Image createImage(byte[] data, int offset, int length) {
        Uint8Array u8 = Uint8Array.create(length);
        for (int i = 0; i < length; i++) {
            u8.set(i, (short) (data[offset + i] & 0xFF));
        }
        return fromDecoded(u8, "image/png", false);
    }

    private static Image fromDecoded(Uint8Array bytes, String mime, boolean mutable) {
        Image img = new Image();
        img.mutable = mutable;
        img.canvas = JsBridge.decodeImageToCanvas(bytes, mime);
        img.width = Math.max(1, img.canvas.getWidth());
        img.height = Math.max(1, img.canvas.getHeight());
        // Prefer IHDR if canvas is still 1x1 pending async fallback
        int[] wh = pngSize(bytes);
        if (wh != null && (img.width <= 1 || img.height <= 1)) {
            img.width = wh[0];
            img.height = wh[1];
            if (img.canvas.getWidth() != img.width || img.canvas.getHeight() != img.height) {
                // keep pending canvas; onload will resize
            }
        }
        return img;
    }

    private static int[] pngSize(Uint8Array bytes) {
        if (bytes == null || bytes.getLength() < 24) return null;
        if ((bytes.get(0) & 0xff) != 0x89 || (bytes.get(1) & 0xff) != 0x50) return null;
        int w = ((bytes.get(16) & 0xff) << 24) | ((bytes.get(17) & 0xff) << 16)
              | ((bytes.get(18) & 0xff) << 8) | (bytes.get(19) & 0xff);
        int h = ((bytes.get(20) & 0xff) << 24) | ((bytes.get(21) & 0xff) << 16)
              | ((bytes.get(22) & 0xff) << 8) | (bytes.get(23) & 0xff);
        if (w <= 0 || h <= 0 || w > 4096 || h > 4096) return null;
        return new int[]{w, h};
    }

    private static String guessMime(String path) {
        String p = path.toLowerCase();
        if (p.endsWith(".png")) return "image/png";
        if (p.endsWith(".jpg") || p.endsWith(".jpeg")) return "image/jpeg";
        if (p.endsWith(".gif")) return "image/gif";
        return "image/png";
    }

    public static Image createImage(Image source, int x, int y, int w, int h, int transform) {
        Image img = createImage(w, h);
        Graphics g = img.getGraphics();
        g.drawRegion(source, x, y, w, h, transform, 0, 0, Graphics.TOP | Graphics.LEFT);
        return img;
    }

    public static Image createRGBImage(int[] rgb, int w, int h, boolean processAlpha) {
        Image img = createImage(w, h);
        if (rgb != null && w > 0 && h > 0) {
            JsBridge.ctxDrawRGB(JsBridge.ctx2d(img.canvas), rgb, 0, w, 0, 0, w, h, processAlpha);
        }
        return img;
    }

    public int getWidth() { return width; }
    public int getHeight() { return height; }
    public boolean isMutable() { return mutable; }

    public Graphics getGraphics() {
        if (canvas == null) {
            canvas = JsBridge.createCanvas(width, height);
        }
        // Refresh dims from canvas
        if (canvas.getWidth() > 0) width = canvas.getWidth();
        if (canvas.getHeight() > 0) height = canvas.getHeight();
        return new Graphics(JsBridge.ctx2d(canvas), width, height);
    }

    void drawTo(CanvasRenderingContext2D ctx, int x, int y) {
        if (canvas == null || width <= 0 || height <= 0) return;
        if (canvas.getWidth() > 0) width = canvas.getWidth();
        if (canvas.getHeight() > 0) height = canvas.getHeight();
        drawCanvasJS(ctx, canvas, x, y);
    }

    void drawRegionTo(CanvasRenderingContext2D ctx, int sx, int sy, int w, int h, int dx, int dy, int transform) {
        if (canvas == null || w <= 0 || h <= 0) return;
        drawCanvasRegionJS(ctx, canvas, sx, sy, w, h, dx, dy);
    }

    @org.teavm.jso.JSBody(params = {"ctx","c","x","y"}, script = "ctx.drawImage(c,x,y);")
    private static native void drawCanvasJS(CanvasRenderingContext2D ctx, HTMLCanvasElement c, int x, int y);

    @org.teavm.jso.JSBody(params = {"ctx","c","sx","sy","w","h","dx","dy"}, script = "ctx.drawImage(c,sx,sy,w,h,dx,dy,w,h);")
    private static native void drawCanvasRegionJS(CanvasRenderingContext2D ctx, HTMLCanvasElement c, int sx, int sy, int w, int h, int dx, int dy);

    public void getRGB(int[] rgbData, int offset, int scanlength, int x, int y, int w, int h) {
        if (rgbData == null || canvas == null || w <= 0 || h <= 0) return;
        JsBridge.canvasGetRGB(canvas, rgbData, offset, scanlength, x, y, w, h);
    }
}
