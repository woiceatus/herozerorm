/*
 * Decompiled with CFR 0.152.
 */
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.OutputStream;
import rpg.g;

public final class bm
extends as {
    public byte d_f0_B;
    public byte e;
    public byte f;
    public byte g;
    public short a;
    public short b;
    public short c_f0_S;
    public short d_f1_S;
    public byte h;
    private static byte[] d_f2_AB = new byte[]{5, 5, 5, 5, 50, 1, 8, 5, 1, 100, 8, 8, 8, 8, 1, 3};
    public byte[] c_f1_AB = new byte[]{-3, -3, -3, -3, -3, -3};
    public byte i;

    public bm(byte by2, byte by3) {
        super(by2, by3);
        this.e = by3 < 16 ? (byte)0 : 1;
        this.i = (byte)-1;
    }

    protected final byte a_m0_PRB() {
        int n2 = super.a_m3_PRB();
        for (int i2 = 0; i2 < this.c_f1_AB.length; ++i2) {
            n2 += this.c_f1_AB[i2] << ((i2 & 1) == 0 ? 2 : 3);
        }
        return (byte)(n2 % 100);
    }

    protected final DataOutputStream a_m1_PLjava_io_DataOutputStream_RLjava_io_DataOutputStream_(DataOutputStream dataOutputStream) {
        dataOutputStream = super.a_m5_PLjava_io_DataOutputStream_RLjava_io_DataOutputStream_(dataOutputStream);
        dataOutputStream.writeShort(this.b);
        dataOutputStream.writeShort(this.c_f0_S);
        dataOutputStream.writeShort(this.d_f1_S);
        dataOutputStream.writeByte(this.h);
        ((OutputStream)dataOutputStream).write(this.c_f1_AB);
        dataOutputStream.write(this.i);
        return dataOutputStream;
    }

    protected final void a_m2_PLjava_io_DataInputStream_RV(DataInputStream dataInputStream) {
        super.a_m6_PLjava_io_DataInputStream_RV(dataInputStream);
        this.b = dataInputStream.readShort();
        this.c_f0_S = dataInputStream.readShort();
        this.d_f1_S = dataInputStream.readShort();
        this.h = dataInputStream.readByte();
        dataInputStream.read(this.c_f1_AB);
        this.i = dataInputStream.readByte();
    }

    protected final int a_m3_PABIRI(byte[] byArray, int n2) {
        n2 = super.a_m7_PABIRI(byArray, n2);
        this.d_f0_B = byArray[n2++];
        this.e = byArray[n2++];
        this.f = byArray[n2++];
        this.g = byArray[n2++];
        this.a = rpg.g.b_m1_PABIRS(byArray, n2);
        this.b = rpg.g.b_m1_PABIRS(byArray, n2 += 2);
        this.c_f0_S = rpg.g.b_m1_PABIRS(byArray, n2 += 2);
        this.d_f1_S = rpg.g.b_m1_PABIRS(byArray, n2 += 2);
        n2 += 2;
        this.h = byArray[n2++];
        System.arraycopy(byArray, n2, this.c_f1_AB, 0, this.c_f1_AB.length);
        n2 += this.c_f1_AB.length;
        for (int i2 = 0; i2 < this.c_f1_AB.length; ++i2) {
            if (this.c_f1_AB[i2] != 100) continue;
            this.c_f1_AB[i2] = (byte)rpg.g.a_m7_PIIRI(0, 15);
        }
        return n2;
    }

    public final int a_m4_PIRI(int n2) {
        int n3 = 0;
        for (int i2 = 0; i2 < this.c_f1_AB.length; ++i2) {
            if (this.c_f1_AB[i2] != n2) continue;
            n3 += d_f2_AB[n2];
        }
        return n3;
    }

    public final int a_m5_PRI() {
        int n2;
        for (n2 = 0; n2 < this.c_f1_AB.length && this.c_f1_AB[n2] != -3; ++n2) {
        }
        return n2;
    }
}

