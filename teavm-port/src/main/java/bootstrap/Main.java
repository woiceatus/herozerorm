package bootstrap;

import javax.microedition.lcdui.Canvas;
import javax.microedition.lcdui.Display;
import javax.microedition.midlet.MIDlet;
import rpg.RPGHeroEx;

public final class Main {
    public static void main(String[] args) {
        JsBridge.log("Heroes Lore Zero TeaVM boot");
        try {
            installInput();
            RPGHeroEx midlet = new RPGHeroEx();
            Display.initForWeb(midlet);
            midlet.startAppPublic();
            // Ensure screen metrics match the DOM canvas (constructor may run before attach)
            try {
                org.teavm.jso.dom.html.HTMLCanvasElement dom = JsBridge.gameCanvas();
                if (dom != null) {
                    int w = Math.max(240, dom.getWidth());
                    int h = Math.max(320, dom.getHeight());
                    rpg.a.a_f0_I = w;
                    rpg.a.b_f0_I = h;
                    rpg.a.c = w >> 1;
                    rpg.a.d = h >> 1;
                }
            } catch (Throwable ignored) {}
            JsBridge.log("startApp invoked");
        } catch (Throwable t) {
            JsBridge.error(String.valueOf(t));
            t.printStackTrace();
        }
    }

    private static void installInput() {
        JsBridge.installInput(
                Canvas::webKeyPressed,
                Canvas::webKeyReleased,
                Canvas::webPointerPressed,
                Canvas::webPointerReleased,
                Canvas::webPointerDragged
        );
    }
}
