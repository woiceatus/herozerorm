
package javax.wireless.messaging;
import java.io.IOException;
public class MessageConnectionStub implements MessageConnection {
    private final String name;
    public MessageConnectionStub(String name) { this.name = name; }
    public Message newMessage(String type) { return new TextMessageImpl(); }
    public Message newMessage(String type, String address) {
        TextMessageImpl m = new TextMessageImpl(); m.setAddress(address); return m;
    }
    public void send(Message msg) {}
    public Message receive() throws IOException { throw new IOException("no sms"); }
    public void setMessageListener(MessageListener l) {}
    public int numberOfSegments(Message msg) { return 1; }
    public void close() {}
    static class TextMessageImpl implements TextMessage {
        String addr, text;
        public String getAddress() { return addr; }
        public void setAddress(String a) { addr = a; }
        public java.util.Date getTimestamp() { return null; }
        public String getPayloadText() { return text; }
        public void setPayloadText(String t) { text = t; }
    }
}
