
package javax.microedition.lcdui;
import javax.microedition.midlet.MIDlet;
import bootstrap.JsBridge;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.browser.Window;

public class Display {
    private static Display instance;
    private Displayable current;
    private final MIDlet midlet;
    private HTMLCanvasElement dom;

    private Display(MIDlet m) {
        this.midlet = m;
        this.dom = JsBridge.gameCanvas();
    }

    public static void initForWeb(MIDlet m) {
        instance = new Display(m);
    }

    public static Display getDisplay(MIDlet m) {
        if (instance == null) instance = new Display(m);
        return instance;
    }

    public void setCurrent(Displayable next) {
        this.current = next;
        if (next instanceof Canvas) {
            Canvas c = (Canvas) next;
            if (dom != null) {
                c.attachDom(dom);
            }
            c.showNotify();
            c.repaint();
        }
    }

    public Displayable getCurrent() { return current; }

    public boolean flashBacklight(int duration) { return false; }
    public boolean vibrate(int duration) { return false; }
    public int numColors() { return 65536; }
    public boolean isColor() { return true; }
    public int numAlphaLevels() { return 256; }
    public void callSerially(Runnable r) {
        Window.requestAnimationFrame(ts -> r.run());
    }
}
