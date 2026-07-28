/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.rms.RecordStore
 */
import java.io.InputStream;
import javax.microedition.rms.RecordStore;

public final class ah {
    public static String a_f0_Ljava_lang_String_ = null;
    public static byte[] a_f1_AB = null;

    public static boolean a(String string) {
        int n2;
        if (string == null) {
            return false;
        }
        try {
            InputStream inputStream = string.getClass().getResourceAsStream(string);
            if (inputStream != null) {
                a_f1_AB = new byte[inputStream.available()];
                inputStream.read(a_f1_AB);
                inputStream.close();
                return true;
            }
        }
        catch (Exception exception) {
            a_f1_AB = null;
            exception.printStackTrace();
        }
        while (string.startsWith("/")) {
            string = string.substring(1);
        }
        while ((n2 = string.indexOf("/")) > 0) {
            string = string.substring(0, n2) + "." + string.substring(n2 + 1);
        }
        try {
            RecordStore recordStore = RecordStore.openRecordStore((String)string, (boolean)true);
            if (recordStore.getNumRecords() == 0) {
                try {
                    recordStore.closeRecordStore();
                }
                catch (Exception exception) {}
                return false;
            }
            a_f1_AB = recordStore.getRecord(1);
            a_f0_Ljava_lang_String_ = string;
            try {
                recordStore.closeRecordStore();
            }
            catch (Exception exception) {}
            return true;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return false;
        }
    }
}

