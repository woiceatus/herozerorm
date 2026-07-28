/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.io.Connector
 *  javax.microedition.lcdui.Canvas
 *  javax.microedition.lcdui.Display
 *  javax.microedition.midlet.MIDlet
 *  javax.wireless.messaging.Message
 *  javax.wireless.messaging.MessageConnection
 *  javax.wireless.messaging.TextMessage
 */
import javax.microedition.io.Connector;
import javax.microedition.lcdui.Canvas;
import javax.microedition.lcdui.Display;
import javax.microedition.midlet.MIDlet;
import javax.wireless.messaging.Message;
import javax.wireless.messaging.MessageConnection;
import javax.wireless.messaging.TextMessage;

public final class ds
implements Runnable {
    private static final String[] a_f0_ALjava_lang_String_ = new String[]{"01", "06", "03", "03", "03", "15", "10", "10"};
    private static final byte[][] a_f1_AAB;
    private static final byte[] a_f2_AB;
    private static final byte[][] b_f0_AAB;
    private static int a_f3_I;
    private boolean b_f1_Z = false;
    private String[] b_f2_ALjava_lang_String_ = null;
    private String a_f4_Ljava_lang_String_;
    private String b_f3_Ljava_lang_String_;
    private static a a_f5_La_;
    private int b_f4_I;
    private String c_f0_Ljava_lang_String_ = null;
    private String d = null;
    private static MIDlet a_f6_Ljavax_microedition_midlet_MIDlet_;
    public static boolean a_f7_Z;
    private boolean c_f1_Z = false;

    public ds(MIDlet mIDlet) {
        a_f6_Ljavax_microedition_midlet_MIDlet_ = mIDlet;
        a_f5_La_ = new a(a_f6_Ljavax_microedition_midlet_MIDlet_);
        this.b_f4_I = a.a_m9_PRI();
        this.c_f0_Ljava_lang_String_ = a_f6_Ljavax_microedition_midlet_MIDlet_.getAppProperty("EA-Porting-Test-SMS-Mode");
        if (this.c_f0_Ljava_lang_String_ != null) {
            this.c_f0_Ljava_lang_String_ = this.c_f0_Ljava_lang_String_.trim().length() <= 0 ? null : this.c_f0_Ljava_lang_String_.toLowerCase().trim();
        }
        this.d = a_f6_Ljavax_microedition_midlet_MIDlet_.getAppProperty("EA-Porting-Test-SMS-Phone");
        if (this.d != null) {
            if (this.d.trim().length() <= 0) {
                this.d = null;
                return;
            }
            this.d = this.d.toLowerCase().trim();
        }
    }

    public final byte[] a_m0_PIRAB(int n2) {
        byte[] byArray = new byte[2];
        byte[] byArray2 = byArray;
        byArray[0] = a_f2_AB[n2];
        byArray2[1] = b_f0_AAB[this.b_f4_I][n2];
        return byArray2;
    }

    public final boolean a_m1_PIRZ(int n2) {
        System.out.println("send pay : " + n2);
        this.c_f1_Z = false;
        if (this.c_f0_Ljava_lang_String_ != null) {
            return !this.c_f0_Ljava_lang_String_.equals("false");
        }
        this.b_f2_ALjava_lang_String_ = null;
        a_f3_I = a_f1_AAB[this.b_f4_I][n2];
        this.a_f4_Ljava_lang_String_ = a_f0_ALjava_lang_String_[n2];
        if (this.b_f4_I == 0) {
            a_f3_I = a_f1_AAB[1][n2];
            ds ds2 = this;
            String string = a.a_m8_PRLjava_lang_String_();
            String string2 = a.b_m0_PRLjava_lang_String_();
            String string3 = a.d();
            String string4 = a.c();
            String string5 = a.e();
            StringBuffer stringBuffer = new StringBuffer();
            stringBuffer.append(" 146 ");
            stringBuffer.append("011 ");
            stringBuffer.append("Z600 ");
            stringBuffer.append(string + " ");
            stringBuffer.append(string2 + " ");
            stringBuffer.append(string3 + " ");
            stringBuffer.append(string4 + " ");
            stringBuffer.append(string5 + " ");
            stringBuffer.append(ds2.a_f4_Ljava_lang_String_ + " ");
            stringBuffer.append(0);
            stringBuffer.append(a_f3_I + " ");
            stringBuffer.append("Z600");
            ds2.b_f3_Ljava_lang_String_ = stringBuffer.toString();
            this.b_f2_ALjava_lang_String_ = a.a_m7_PIRALjava_lang_String_(a_f1_AAB[this.b_f4_I][n2]);
            this.b_f2_ALjava_lang_String_[0] = this.b_f2_ALjava_lang_String_[0] + this.b_f3_Ljava_lang_String_;
        } else if (this.b_f4_I == 1) {
            this.b_f2_ALjava_lang_String_ = a_f5_La_.a_m10_PIIRALjava_lang_String_(a_f3_I, Integer.parseInt("146"));
        }
        if (this.d != null) {
            this.b_f2_ALjava_lang_String_[1] = this.d;
        }
        this.b_f1_Z = false;
        a_f7_Z = false;
        new Thread(this).start();
        while (!a_f7_Z) {
            try {
                Canvas canvas = (Canvas)Display.getDisplay((MIDlet)a_f6_Ljavax_microedition_midlet_MIDlet_).getCurrent();
                canvas.repaint();
                canvas.serviceRepaints();
                Thread.sleep(100L);
            }
            catch (InterruptedException interruptedException) {
                InterruptedException interruptedException2 = interruptedException;
                interruptedException.printStackTrace();
            }
        }
        return this.b_f1_Z;
    }

    /*
     * Loose catch block
     * Enabled force condition propagation
     * Lifted jumps to return sites
     */
    private boolean a_m2_PALjava_lang_String_RZ(String[] stringArray) {
        boolean bl2 = true;
        MessageConnection messageConnection = null;
        String string = "sms://" + stringArray[1];
        messageConnection = (MessageConnection)Connector.open((String)string);
        TextMessage textMessage = (TextMessage)messageConnection.newMessage("text");
        textMessage.setAddress(string);
        textMessage.setPayloadText(stringArray[0]);
        messageConnection.send((Message)textMessage);
        if (messageConnection == null) return bl2;
        try {
            messageConnection.close();
            return bl2;
        }
        catch (Exception exception) {}
        return bl2;
        catch (Exception exception) {
            try {
                Exception exception2 = exception;
                exception.printStackTrace();
                bl2 = false;
                if (messageConnection == null) return bl2;
            }
            catch (Throwable throwable) {
                if (messageConnection == null) throw throwable;
                try {
                    messageConnection.close();
                    throw throwable;
                }
                catch (Exception exception3) {}
                throw throwable;
            }
            try {
                messageConnection.close();
                return bl2;
            }
            catch (Exception exception4) {}
            return bl2;
        }
    }

    public final void run() {
        this.b_f1_Z = this.a_m2_PALjava_lang_String_RZ(this.b_f2_ALjava_lang_String_);
        a_f7_Z = true;
    }

    static {
        byte[][] byArrayArray = new byte[][]{{4, 2, 2, 2, 2, 1, 1, 1}, {1, 2, 3, 3, 3, 4, 5, 5}};
        a_f1_AAB = byArrayArray;
        a_f2_AB = byArrayArray[0];
        b_f0_AAB = new byte[][]{{2, 1, 1, 1, 1, 1, 1, 1}, {1, 1, 1, 1, 1, 1, 1, 1}};
        a_f3_I = 1;
        a_f6_Ljavax_microedition_midlet_MIDlet_ = null;
        a_f7_Z = true;
    }
}

