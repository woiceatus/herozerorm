package bootstrap;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import org.teavm.jso.typedarrays.Int8Array;
import org.teavm.jso.typedarrays.Uint8Array;

/**
 * Load original game assets from /res over HTTP (sync XHR for MIDP-style streaming).
 */
public final class Resources {
    private Resources() {}

    public static InputStream open(String path) {
        if (path == null) {
            return null;
        }
        // Save-game / RMS keys are not classpath resources
        if (!path.startsWith("/") && !path.contains(".") && !path.contains("/")) {
            return null;
        }
        if (path.startsWith("HOL.")) {
            return null;
        }
        String p = path;
        if (!p.startsWith("/")) {
            p = "/" + p;
        }
        // Prefer preloaded bytes, then /res URL
        Uint8Array pre = JsBridge.getResource(p);
        if (pre == null) {
            pre = JsBridge.getResource("/res" + p);
        }
        if (pre == null) {
            pre = JsBridge.httpGetBytes("/res" + p);
        }
        if (pre == null) {
            pre = JsBridge.httpGetBytes(p);
        }
        if (pre == null) {
            JsBridge.error("resource missing: " + path);
            return null;
        }
        int n = pre.getLength();
        byte[] data = new byte[n];
        for (int i = 0; i < n; i++) {
            data[i] = (byte) (pre.get(i) & 0xFF);
        }
        return new ByteArrayInputStream(data);
    }
}
