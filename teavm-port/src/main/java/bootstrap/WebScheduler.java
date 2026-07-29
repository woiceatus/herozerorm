package bootstrap;

import org.teavm.jso.browser.Window;

/**
 * Browser-friendly game loop scheduler replacing Thread.start + blocking sleep.
 * Uses TeaVM Window.setTimeout so callbacks run in a proper Java/TeaVM context.
 */
public final class WebScheduler {
    private static Runnable loop;
    private static boolean armed;

    private WebScheduler() {}

    public static void startLoop(Runnable runnable) {
        loop = runnable;
        armed = true;
        JsBridge.log("WebScheduler.startLoop");
        Window.setTimeout(() -> tick(), 0);
    }

    /**
     * One-shot Thread.start replacement. Run synchronously so loaders (bv/bs/…)
     * complete before the next frame; Object.wait-based workers are patched no-op.
     */
    public static void startOnce(Runnable runnable) {
        if (runnable == null) {
            return;
        }
        String who;
        try {
            who = String.valueOf(runnable.getClass().getName());
        } catch (Throwable t) {
            who = "?";
        }
        // TeaVM sometimes wraps Thread targets oddly; skip known-broken null-named shells
        if ("null".equals(who)) {
            JsBridge.log("startOnce skip null-named");
            return;
        }
        try {
            JsBridge.log("startOnce run:" + who);
            runnable.run();
            JsBridge.log("startOnce done:" + who);
        } catch (Throwable t) {
            JsBridge.error("startOnce fail:" + who + " " + t);
            t.printStackTrace();
        }
    }

    public static void stop() {
        armed = false;
    }

    private static void tick() {
        if (!armed || loop == null) {
            return;
        }
        try {
            loop.run();
        } catch (Throwable t) {
            JsBridge.error("frame: " + t);
            t.printStackTrace();
        }
        if (!armed) {
            return;
        }
        Window.setTimeout(() -> tick(), 33);
    }
}
