/*
 * Decompiled with CFR 0.152.
 */
final class x
extends ea {
    private int a_f0_I = 0;
    private int b;
    private final int[] a_f1_AI = new int[]{1, 2, 3};
    private byte[][] a_f2_AAB = new byte[][]{"[A]".getBytes(), "[a]".getBytes(), "[1]".getBytes()};

    public x(int n2) {
        super("");
        this.a_f0_I = n2;
        this.b = 0;
    }

    public final String a_m0_PRLjava_lang_String_() {
        return super.a_m0_PRLjava_lang_String_();
    }

    public final boolean a_m1_PIIRZ(int n2, int n3) {
        if (n2 == -6) {
            x x2 = this;
            this.b = (x2.b + 1) % x2.a_f1_AI.length;
        }
        return true;
    }

    public final byte[] a_m2_PRAB() {
        return this.a_f2_AAB[this.b];
    }
}

