
package javax.microedition.media;
import java.io.InputStream;
public final class Manager {
    private Manager() {}
    public static Player createPlayer(InputStream stream, String type) throws MediaException {
        return new NullPlayer();
    }
    public static Player createPlayer(String locator) throws MediaException {
        return new NullPlayer();
    }
    public static String[] getSupportedContentTypes(String protocol) { return new String[]{"audio/midi","audio/x-wav"}; }
    public static String[] getSupportedProtocols(String contentType) { return new String[]{"http","file"}; }
}
