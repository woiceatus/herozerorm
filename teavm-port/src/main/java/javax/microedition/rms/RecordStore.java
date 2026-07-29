
package javax.microedition.rms;
import bootstrap.JsBridge;
import java.util.ArrayList;
import java.util.List;

public class RecordStore {
    private final String name;
    private final List<byte[]> records = new ArrayList<>();
    private static final java.util.HashMap<String, RecordStore> OPEN = new java.util.HashMap<>();

    private RecordStore(String name) { this.name = name; load(); }

    public static RecordStore openRecordStore(String name, boolean createIfNecessary) throws RecordStoreException {
        RecordStore rs = OPEN.get(name);
        if (rs == null) {
            String existing = JsBridge.storageGet(name);
            if (existing == null && !createIfNecessary) throw new RecordStoreException("missing");
            rs = new RecordStore(name);
            OPEN.put(name, rs);
        }
        return rs;
    }
    public void closeRecordStore() { save(); }
    public static void deleteRecordStore(String name) {
        OPEN.remove(name);
        JsBridge.storageRemove(name);
    }
    public int getNumRecords() { return records.size(); }
    public int addRecord(byte[] data, int offset, int numBytes) {
        byte[] copy = new byte[numBytes];
        System.arraycopy(data, offset, copy, 0, numBytes);
        records.add(copy);
        save();
        return records.size();
    }
    public void setRecord(int recordId, byte[] data, int offset, int numBytes) throws RecordStoreException {
        ensure(recordId);
        byte[] copy = new byte[numBytes];
        System.arraycopy(data, offset, copy, 0, numBytes);
        records.set(recordId - 1, copy);
        save();
    }
    public byte[] getRecord(int recordId) throws RecordStoreException {
        ensure(recordId);
        byte[] src = records.get(recordId - 1);
        byte[] copy = new byte[src.length];
        System.arraycopy(src, 0, copy, 0, src.length);
        return copy;
    }
    public int getRecord(int recordId, byte[] buffer, int offset) throws RecordStoreException {
        byte[] r = getRecord(recordId);
        System.arraycopy(r, 0, buffer, offset, r.length);
        return r.length;
    }
    public void deleteRecord(int recordId) throws RecordStoreException {
        ensure(recordId);
        records.set(recordId - 1, new byte[0]);
        save();
    }
    public int getRecordSize(int recordId) throws RecordStoreException {
        ensure(recordId); return records.get(recordId-1).length;
    }
    public int getNextRecordID() { return records.size() + 1; }
    public long getLastModified() { return System.currentTimeMillis(); }
    public int getVersion() { return 1; }
    public String getName() { return name; }
    public int getSize() { int s=0; for (byte[] r: records) s+=r.length; return s; }
    public int getSizeAvailable() { return 1024*1024; }
    private void ensure(int id) throws RecordStoreException {
        if (id < 1 || id > records.size()) throw new RecordStoreException("id");
    }
    private void save() {
        // store as base64-ish simple hex of lengths — keep small
        StringBuilder sb = new StringBuilder();
        for (byte[] r : records) {
            sb.append(r.length).append(':');
            for (byte b : r) sb.append(String.format("%02x", b & 0xff));
            sb.append(';');
        }
        JsBridge.storageSet(name, sb.toString());
    }
    private void load() {
        String s = JsBridge.storageGet(name);
        if (s == null || s.isEmpty()) return;
        for (String part : s.split(";")) {
            if (part.isEmpty()) continue;
            int colon = part.indexOf(':');
            if (colon < 0) continue;
            String hex = part.substring(colon + 1);
            byte[] data = new byte[hex.length()/2];
            for (int i=0;i<data.length;i++) data[i]=(byte)Integer.parseInt(hex.substring(i*2,i*2+2),16);
            records.add(data);
        }
    }
}
