/*
 * Decompiled with CFR 0.152.
 */
public final class ar
implements Runnable {
    private boolean a_f0_Z;
    private Thread a_f1_Ljava_lang_Thread_;
    private Object a_f2_Ljava_lang_Object_ = new Object();
    private boolean b = false;

    public ar() {
        this.a_f1_Ljava_lang_Thread_ = new Thread(this);
        this.a_f1_Ljava_lang_Thread_.start();
        this.a_f0_Z = true;
    }

    /*
     * WARNING - Removed try catching itself - possible behaviour change.
     */
    public final void run() {
        if (this.b) {
            return;
        }
        while (this.a_f0_Z) {
            try {
                Object object = this.a_f2_Ljava_lang_Object_;
                synchronized (object) {
                    while (!this.b) {
                        this.a_f2_Ljava_lang_Object_.wait(100000L);
                    }
                    try {
                        as.a_m12_PBRV((byte)80);
                        Thread.sleep(80L);
                    }
                    catch (Exception exception) {}
                    try {
                        as.a_m12_PBRV((byte)80);
                        Thread.sleep(500L);
                    }
                    catch (Exception exception) {}
                }
            }
            catch (Exception exception) {
            }
            finally {
                this.b = false;
            }
        }
    }

    /*
     * WARNING - Removed try catching itself - possible behaviour change.
     */
    public final void a() {
        if (this.b) {
            return;
        }
        Object object = this.a_f2_Ljava_lang_Object_;
        synchronized (object) {
            this.b = true;
            this.a_f2_Ljava_lang_Object_.notify();
            return;
        }
    }
}

