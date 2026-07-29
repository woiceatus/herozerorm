
package javax.microedition.io;
import java.io.IOException;
public class Connector {
    public static final int READ = 1;
    public static final int WRITE = 2;
    public static final int READ_WRITE = 3;
    public static Connection open(String name) throws IOException {
        return open(name, READ_WRITE);
    }
    public static Connection open(String name, int mode) throws IOException {
        if (name != null && name.startsWith("sms:")) {
            return new javax.wireless.messaging.MessageConnectionStub(name);
        }
        throw new IOException("Unsupported: " + name);
    }
    public static Connection open(String name, int mode, boolean timeouts) throws IOException {
        return open(name, mode);
    }
}
