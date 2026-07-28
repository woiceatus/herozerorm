/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.rms.RecordStore
 */
import java.io.IOException;
import java.io.InputStream;
import javax.microedition.rms.RecordStore;

public final class bh {
    public byte[] a_f0_AB = null;
    public int a_f1_I = 0;
    public String a_f2_Ljava_lang_String_ = null;

    public bh(String string, byte by2) {
        this.a_f2_Ljava_lang_String_ = string;
        if (by2 == 1) {
            if (string.equals(ah.a_f0_Ljava_lang_String_)) {
                this.a_f0_AB = new byte[ah.a_f1_AB.length];
                System.arraycopy(ah.a_f1_AB, 0, this.a_f0_AB, 0, ah.a_f1_AB.length);
                ah.a_f1_AB = null;
                ah.a_f0_Ljava_lang_String_ = null;
                return;
            }
            if (!this.a_m1_PRZ()) {
                throw new IOException("No such file : " + string);
            }
        }
    }

    public final void a_m0_PABIIRV(byte[] byArray, int n2, int n3) {
        try {
            this.a_f1_I = this.a_f1_I;
            System.arraycopy(this.a_f0_AB, this.a_f1_I, byArray, 0, n3);
            this.a_f1_I += n3;
            return;
        }
        catch (Exception exception) {
            System.out.println(this.a_f2_Ljava_lang_String_);
            exception.printStackTrace();
            return;
        }
    }

    private boolean a_m1_PRZ() {
        int n2;
        Object object;
        if (this.a_f2_Ljava_lang_String_ == null) {
            return false;
        }
        try {
            object = this.a_f2_Ljava_lang_String_.getClass().getResourceAsStream(this.a_f2_Ljava_lang_String_);
            if (object != null) {
                this.a_f0_AB = new byte[((InputStream)object).available()];
                ((InputStream)object).read(this.a_f0_AB);
                ((InputStream)object).close();
                return true;
            }
        }
        catch (Exception exception) {
            object = exception;
            exception.printStackTrace();
        }
        while (this.a_f2_Ljava_lang_String_.startsWith("/")) {
            this.a_f2_Ljava_lang_String_ = this.a_f2_Ljava_lang_String_.substring(1);
        }
        while ((n2 = this.a_f2_Ljava_lang_String_.indexOf("/")) > 0) {
            this.a_f2_Ljava_lang_String_ = this.a_f2_Ljava_lang_String_.substring(0, n2) + "." + this.a_f2_Ljava_lang_String_.substring(n2 + 1);
        }
        try {
            RecordStore recordStore = RecordStore.openRecordStore((String)this.a_f2_Ljava_lang_String_, (boolean)true);
            if (recordStore.getNumRecords() == 0) {
                try {
                    recordStore.closeRecordStore();
                }
                catch (Exception exception) {}
                return false;
            }
            this.a_f0_AB = recordStore.getRecord(1);
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

