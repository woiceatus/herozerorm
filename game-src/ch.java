/*
 * Decompiled with CFR 0.152.
 */
import rpg.e;

public final class ch {
    private Object[] a_f0_ALjava_lang_Object_;
    private short a_f1_S;

    public ch(String object) {
        object = e.a_m6_PLjava_lang_String_RAB(((String)object).concat(".tdf"));
        int n2 = 0;
        ++n2;
        this.a_f1_S = (short)(object[0] & 0xFF);
        this.a_f0_ALjava_lang_Object_ = new Object[this.a_f1_S];
        for (int i2 = 0; i2 < this.a_f1_S; ++i2) {
            int n3 = (object[n2++] & 0xFF) << 8;
            this.a_f0_ALjava_lang_Object_[i2] = new byte[n3 += object[n2++] & 0xFF];
            System.arraycopy(object, n2, this.a_f0_ALjava_lang_Object_[i2], 0, n3);
            n2 += n3;
        }
    }

    public final byte[] a_m0_PIRAB(int n2) {
        return (byte[])this.a_f0_ALjava_lang_Object_[n2];
    }

    public final byte[][] a_m1_PIIRAAB(int n2, int n3) {
        return this.a_m4_PAIRAAB(new int[]{n2, n3});
    }

    public final byte[][] a_m2_PIIIRAAB(int n2, int n3, int n4) {
        return this.a_m4_PAIRAAB(new int[]{n2, n3, n4});
    }

    public final byte[][] a_m3_PIIIIRAAB(int n2, int n3, int n4, int n5) {
        return this.a_m4_PAIRAAB(new int[]{n2, n3, n4, 25});
    }

    public final byte[][] a_m4_PAIRAAB(int[] nArray) {
        byte[][] byArrayArray = new byte[nArray.length][];
        for (int i2 = 0; i2 < nArray.length; ++i2) {
            byArrayArray[i2] = (byte[])(nArray[i2] < 0 ? null : this.a_m0_PIRAB(nArray[i2]));
        }
        return byArrayArray;
    }
}

