
package javax.microedition.midlet;

public abstract class MIDlet {
    private boolean destroyed;

    protected MIDlet() {}

    protected abstract void startApp() throws MIDletStateChangeException;
    protected abstract void pauseApp();
    protected abstract void destroyApp(boolean unconditional) throws MIDletStateChangeException;

    public final void notifyDestroyed() { destroyed = true; }
    public final void notifyPaused() {}
    public final String getAppProperty(String key) { return null; }
    public final boolean platformRequest(String url) { return false; }
    public final int checkPermission(String permission) { return 0; }

    /** Web adapter entry */
    public final void startAppPublic() {
        try { startApp(); } catch (MIDletStateChangeException e) { throw new RuntimeException(e); }
    }
}
