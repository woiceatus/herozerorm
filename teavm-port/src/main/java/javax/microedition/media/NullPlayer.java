
package javax.microedition.media;
import javax.microedition.media.control.VolumeControl;
class NullPlayer implements Player {
    private int state = UNREALIZED;
    private final VolumeControl volume = new VolumeControl() {
        int v = 50; boolean mute;
        public void setMute(boolean mute) { this.mute = mute; }
        public boolean isMuted() { return mute; }
        public int setLevel(int level) { v = level; return v; }
        public int getLevel() { return v; }
    };
    public void realize() { state = REALIZED; }
    public void prefetch() { state = PREFETCHED; }
    public void start() { state = STARTED; }
    public void stop() { if (state == STARTED) state = PREFETCHED; }
    public void deallocate() { state = REALIZED; }
    public void close() { state = CLOSED; }
    public int getState() { return state; }
    public void setLoopCount(int count) {}
    public long setMediaTime(long now) { return now; }
    public long getMediaTime() { return 0; }
    public long getDuration() { return 0; }
    public String getContentType() { return "audio/midi"; }
    public void addPlayerListener(PlayerListener listener) {}
    public void removePlayerListener(PlayerListener listener) {}
    public Control[] getControls() { return new Control[]{volume}; }
    public Control getControl(String controlType) {
        if (controlType != null && controlType.contains("VolumeControl")) return volume;
        return null;
    }
}
