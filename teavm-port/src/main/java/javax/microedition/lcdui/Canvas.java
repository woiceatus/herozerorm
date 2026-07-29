package javax.microedition.lcdui;
import bootstrap.JsBridge;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.browser.Window;

public abstract class Canvas extends Displayable {
    public static final int UP = 1;
    public static final int DOWN = 6;
    public static final int LEFT = 2;
    public static final int RIGHT = 5;
    public static final int FIRE = 8;
    public static final int GAME_A = 9;
    public static final int GAME_B = 10;
    public static final int GAME_C = 11;
    public static final int GAME_D = 12;
    public static final int KEY_NUM0 = 48;
    public static final int KEY_NUM1 = 49;
    public static final int KEY_NUM2 = 50;
    public static final int KEY_NUM3 = 51;
    public static final int KEY_NUM4 = 52;
    public static final int KEY_NUM5 = 53;
    public static final int KEY_NUM6 = 54;
    public static final int KEY_NUM7 = 55;
    public static final int KEY_NUM8 = 56;
    public static final int KEY_NUM9 = 57;
    public static final int KEY_STAR = 42;
    public static final int KEY_POUND = 35;

    private boolean fullScreen;
    private HTMLCanvasElement dom;
    private Graphics g;
    private int pendingRaf;
    public static Canvas active;

    protected Canvas() {
        active = this;
    }

    public void setFullScreenMode(boolean mode) { fullScreen = mode; }

    public void attachDom(HTMLCanvasElement canvas) {
        this.dom = canvas;
        this.width = canvas.getWidth();
        this.height = canvas.getHeight();
        if (this.width <= 0) this.width = 240;
        if (this.height <= 0) this.height = 320;
        CanvasRenderingContext2D ctx = JsBridge.ctx2d(canvas);
        this.g = new Graphics(ctx, width, height);
        active = this;
    }

    public final void repaint() { repaint(0,0,width,height); }

    public final void repaint(int x, int y, int w, int h) {
        if (pendingRaf != 0) return;
        pendingRaf = 1;
        Window.requestAnimationFrame(ts -> {
            pendingRaf = 0;
            serviceRepaints();
        });
    }

    public final void serviceRepaints() {
        if (g == null && dom != null) {
            g = new Graphics(JsBridge.ctx2d(dom), width, height);
        }
        if (g != null) {
            try {
                paint(g);
                // Ensure something visible while port matures: dim frame if fully black buffer
            } catch (Throwable t) {
                JsBridge.error("paint: " + t);
                t.printStackTrace();
            }
        }
    }

    protected abstract void paint(Graphics g);

    protected void keyPressed(int keyCode) {}
    protected void keyReleased(int keyCode) {}
    protected void keyRepeated(int keyCode) {}
    protected void pointerPressed(int x, int y) {}
    protected void pointerReleased(int x, int y) {}
    protected void pointerDragged(int x, int y) {}
    protected void showNotify() {}
    protected void hideNotify() {}

    public int getGameAction(int keyCode) {
        switch (keyCode) {
            case -1: case 50: return UP;
            case -2: case 56: return DOWN;
            case -3: case 52: return LEFT;
            case -4: case 54: return RIGHT;
            case -5: case 53: return FIRE;
            default: return 0;
        }
    }

    public int getKeyCode(int gameAction) {
        switch (gameAction) {
            case UP: return -1;
            case DOWN: return -2;
            case LEFT: return -3;
            case RIGHT: return -4;
            case FIRE: return -5;
            default: return 0;
        }
    }

    public String getKeyName(int keyCode) { return String.valueOf(keyCode); }
    public boolean hasPointerEvents() { return true; }
    public boolean hasPointerMotionEvents() { return true; }
    public boolean hasRepeatEvents() { return true; }

    public static void webKeyPressed(int keyCode) {
        if (active != null) active.keyPressed(keyCode);
    }
    public static void webKeyReleased(int keyCode) {
        if (active != null) active.keyReleased(keyCode);
    }
    public static void webPointerPressed(int x, int y) {
        if (active != null) active.pointerPressed(x, y);
    }
    public static void webPointerReleased(int x, int y) {
        if (active != null) active.pointerReleased(x, y);
    }
    public static void webPointerDragged(int x, int y) {
        if (active != null) active.pointerDragged(x, y);
    }
}
