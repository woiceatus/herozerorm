/*
 * Decompiled with CFR 0.152.
 */
import java.io.DataInputStream;

public final class ac {
    private static boolean b_f0_Z = false;
    public static boolean a_f0_Z = true;
    private static final byte[] a_f1_AB = new byte[]{38, 124, 36, 123, 125, 94, 92};
    private static final int[] a_f2_AI = new int[]{0xFFFFFF, 0xFFFF00, 1630207, 0xFF9F3F, 14597755, 65280, 0x7F7F7F};
    public static int a_f3_I;
    private static int b_f1_I;
    private static String a_f4_Ljava_lang_String_;
    private static int c_f0_I;
    private static byte[][] a_f5_AAB;
    private static int d;
    private static int[] b_f2_AI;
    private static byte[] b_f3_AB;
    private static byte[] c_f1_AB;
    private static int e;

    public static void a_m0_PLcm_IIABIRV(cm cm2, int n2, int n3, byte[] byArray, int n4) {
        ac.a_m3_PLcm_IIIIABIIIRV(cm2, n2, n3, 1000, n4, byArray, 0, 0, byArray.length);
    }

    public static void a_m1_PLcm_IIIIABRV(cm cm2, int n2, int n3, int n4, int n5, byte[] byArray) {
        ac.a_m3_PLcm_IIIIABIIIRV(cm2, n2, n3, n4, n5, byArray, 0, 0, byArray.length);
    }

    public static void a_m2_PLcm_IIABIIRV(cm cm2, int n2, int n3, byte[] byArray, int n4, int n5) {
        byte[] byArray2 = byArray;
        int n6 = ac.b(byArray, 0, 0);
        switch (n5) {
            case 4: {
                n6 = 0;
                break;
            }
            case 1: {
                n6 /= 2;
            }
        }
        ac.a_m3_PLcm_IIIIABIIIRV(cm2, n2 - n6, n3, 1000, n4, byArray, 0, 0, byArray.length);
    }

    public static void a_m3_PLcm_IIIIABIIIRV(cm cm2, int n2, int n3, int n4, int n5, byte[] byArray, int n6, int n7, int n8) {
        ac.a_m4_PLcm_IIIABIIIRV(cm2, n2, n3, n4, byArray, n6, n8, 4);
    }

    public static void a_m4_PLcm_IIIABIIIRV(cm cm2, int n2, int n3, int n4, byte[] byArray, int n5, int n6, int n7) {
        try {
            if (!b_f0_Z) {
                return;
            }
            int n8 = n5;
            int n9 = n2;
            switch (n7) {
                case 4: {
                    n9 = n2;
                    break;
                }
                case 1: {
                    n9 = n2 - (ac.b(byArray, n5, n4) >> 1);
                }
            }
            int n10 = 0;
            while (n8 < byArray.length && n8 < n5 + n6) {
                int n11;
                int n12;
                int n13;
                int n14;
                int n15;
                int n16;
                block27: {
                    n16 = byArray[n8];
                    for (n15 = 0; n15 < a_f1_AB.length; ++n15) {
                        if (n16 != a_f1_AB[n15]) continue;
                        n14 = a_f2_AI[n15];
                        break block27;
                    }
                    n14 = n16 = -1;
                }
                if (n14 != -1 && a_f0_Z) {
                    cm2.a_m2_PIRV(n16);
                    ++n8;
                    continue;
                }
                if (n10 == 0 && byArray[n8] == 32) {
                    ++n8;
                    continue;
                }
                n15 = b_f1_I >> 2;
                int n17 = a_f4_Ljava_lang_String_.indexOf((char)byArray[n8]);
                if (n17 >= 0 && n17 < b_f3_AB.length) {
                    n15 = b_f3_AB[n17];
                }
                int n18 = 0;
                if (byArray[n8] == 32) {
                    n16 = n10;
                    for (n13 = n8 + 1; n13 < byArray.length && byArray[n13] != 32 && byArray[n13] != 59; ++n13) {
                        n12 = b_f1_I >> 2;
                        n11 = a_f4_Ljava_lang_String_.indexOf((char)byArray[n13]);
                        if (n11 >= 0 && n11 < b_f3_AB.length) {
                            n12 = b_f3_AB[n11];
                        }
                        if (n16 + n12 > n4 - 7) {
                            n18 = 1;
                            break;
                        }
                        n16 += n12;
                    }
                }
                if (n10 + n15 > n4 || byArray[n8] == 59 || n18 != 0) {
                    n10 = 0;
                    n3 += a_f3_I + 2;
                    if (byArray[n8] == 59) {
                        ++n8;
                    }
                    switch (n7) {
                        case 4: {
                            n9 = n2;
                            break;
                        }
                        case 1: {
                            n9 = n2 - (ac.b(byArray, n8, n4) >> 1);
                        }
                    }
                    continue;
                }
                if (n17 >= 0 && n17 < e) {
                    n13 = 0;
                    n12 = 0;
                    n11 = 0;
                    while (n11 < a_f5_AAB[n17].length) {
                        n16 = 7 - c_f1_AB[n17];
                        n18 = b_f3_AB[n17];
                        while (n18 > 0) {
                            if (n16 < 0) {
                                ++n11;
                                n16 = 7;
                            }
                            if ((a_f5_AAB[n17][n11] & 1 << n16) != 0) {
                                cm2.e(n9 + n12, n3 + n13, n9 + n12, n3 + n13);
                            }
                            ++n12;
                            --n18;
                            --n16;
                        }
                        n11 += n11 + 1 & 1;
                        ++n11;
                        ++n13;
                        n12 = 0;
                    }
                }
                n9 += n15;
                n10 += n15;
                ++n8;
            }
            return;
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
            return;
        }
    }

    public static final int a_m5_PABIIIRI(byte[] byArray, int n2, int n3, int n4) {
        int n5 = n2;
        int n6 = 0;
        int n7 = 0;
        int n8 = 0;
        while (n6 < n4 && n2 < byArray.length) {
            if (byArray[n2] == 32) {
                n7 = n2;
            }
            if (byArray[n2] == 32 && n8 == 0) {
                ++n2;
                continue;
            }
            if ((byArray[n2] & 0xF0) == 240) {
                if (n8 + b_f1_I > n3) {
                    ++n6;
                    n8 = 0;
                    continue;
                }
                n8 += b_f1_I + 1;
                n2 += 2;
                continue;
            }
            if ((byArray[n2] & 0x80) != 0) {
                if (n8 + 8 > n3) {
                    ++n6;
                    n8 = 0;
                    continue;
                }
                n8 += 9;
                n2 += 2;
                continue;
            }
            if (ac.a_m9_PBRZ(byArray[n2])) {
                if (byArray[n2] == 59) {
                    ++n6;
                    n8 = 0;
                }
                ++n2;
                continue;
            }
            int n9 = b_f1_I >> 2;
            int n10 = a_f4_Ljava_lang_String_.indexOf((char)byArray[n2]);
            if (n10 >= 0 && n10 < b_f3_AB.length) {
                n9 = b_f3_AB[n10];
            }
            if (n8 + n9 > n3 - 7) {
                ++n6;
                n8 = 0;
                n2 = n7;
                continue;
            }
            n8 += n9;
            ++n2;
        }
        return n2 - n5;
    }

    public static final int a_m6_PABIIRI(byte[] byArray, int n2, int n3) {
        n3 = n2 + n3;
        boolean bl2 = false;
        while (n3 < byArray.length) {
            if (byArray[n3] == 32 || ac.a_m9_PBRZ(byArray[n3])) {
                ++n3;
                continue;
            }
            if ((byArray[n3] & 0x80) != 0) {
                if (bl2) {
                    return n3 + 2 - n2;
                }
                bl2 = true;
                n3 += 2;
                continue;
            }
            if (bl2) {
                return n3 + 1 - n2;
            }
            bl2 = true;
            ++n3;
        }
        return byArray.length - n2;
    }

    public static final int a_m7_PABIRI(byte[] byArray, int n2) {
        int n3 = 0;
        int n4 = ac.a_m5_PABIIIRI(byArray, 0, n2, 0);
        while (n4 < byArray.length) {
            n4 = ac.a_m5_PABIIIRI(byArray, 0, n2, ++n3);
        }
        return n3;
    }

    public static final int a_m8_PABRI(byte[] byArray) {
        return ac.b(byArray, 0, 0);
    }

    public static final int b(byte[] byArray, int n2, int n3) {
        int n4 = 1;
        while (n2 < byArray.length) {
            int n5 = n4;
            if ((byArray[n2] & 0xF0) == 240) {
                n4 += b_f1_I + 1;
                n2 += 2;
            } else if ((byArray[n2] & 0x80) != 0) {
                n4 += 9;
                n2 += 2;
            } else {
                if (byArray[n2] == 59) break;
                if (ac.a_m9_PBRZ(byArray[n2])) {
                    ++n2;
                } else {
                    int n6 = b_f1_I >> 2;
                    int n7 = a_f4_Ljava_lang_String_.indexOf((char)byArray[n2]);
                    if (n7 >= 0 && n7 < b_f3_AB.length) {
                        n6 = b_f3_AB[n7];
                    }
                    n4 += n6;
                    ++n2;
                }
            }
            if (n3 <= 0 || n4 <= n3) continue;
            return n5;
        }
        if (n4 == 1) {
            return 0;
        }
        return n4;
    }

    private static final boolean a_m9_PBRZ(byte by2) {
        if (by2 == 59) {
            return true;
        }
        for (int i2 = 0; i2 < a_f1_AB.length; ++i2) {
            if (by2 != a_f1_AB[i2]) continue;
            return true;
        }
        return false;
    }

    public static final void a_m10_PRV() {
        if (b_f0_Z) {
            return;
        }
        try {
            DataInputStream dataInputStream = new DataInputStream("".getClass().getResourceAsStream("/dotFontSmall.dat"));
            e = dataInputStream.readInt();
            b_f3_AB = new byte[e];
            c_f1_AB = new byte[e];
            a_f4_Ljava_lang_String_ = dataInputStream.readUTF();
            c_f0_I = a_f4_Ljava_lang_String_.length();
            a_f4_Ljava_lang_String_ = a_f4_Ljava_lang_String_.substring(0, e);
            int n2 = dataInputStream.readInt() - 2;
            b_f1_I = dataInputStream.readByte();
            a_f3_I = dataInputStream.readByte();
            b_f2_AI = new int[b_f1_I * a_f3_I];
            d = (b_f1_I >> 3) + ((b_f1_I & 7) == 0 ? 0 : 1);
            int n3 = a_f3_I * d;
            if (n3 * c_f0_I != n2) {
                System.out.println("************************************\n");
                System.out.println("       DOT FONT LOAD ERROR!!!");
                System.out.println("\n************************************");
            } else {
                a_f5_AAB = new byte[c_f0_I][n3];
                for (n2 = 0; n2 < c_f0_I; ++n2) {
                    dataInputStream.read(a_f5_AAB[n2]);
                }
                for (n2 = 0; n2 < e; ++n2) {
                    int n4;
                    int n5;
                    int n6;
                    int n7 = 0;
                    for (n3 = 0; n3 < a_f5_AAB[n2].length; ++n3) {
                        n6 = 7;
                        n5 = b_f1_I;
                        while (n5 > 0) {
                            if (n6 < 0) {
                                ++n3;
                                n6 = 7;
                            }
                            ac.b_f2_AI[n7] = (a_f5_AAB[n2][n3] & 1 << n6) != 0 ? 1 : 0;
                            ++n7;
                            --n5;
                            --n6;
                        }
                    }
                    n7 = 0;
                    n3 = b_f1_I - 1;
                    for (n6 = 0; n6 < b_f1_I; ++n6) {
                        n5 = 0;
                        for (n4 = 0; n4 < b_f2_AI.length; n4 += b_f1_I) {
                            if (b_f2_AI[n6 + n4] != 1) continue;
                            n5 = 1;
                            break;
                        }
                        if (n5 == 0) continue;
                        n7 = n6;
                        break;
                    }
                    for (n6 = b_f1_I - 1; n6 >= 0; --n6) {
                        n5 = 0;
                        for (n4 = 0; n4 < b_f2_AI.length; n4 += b_f1_I) {
                            if (b_f2_AI[n6 + n4] != 1) continue;
                            n5 = 1;
                            break;
                        }
                        if (n5 == 0) continue;
                        n3 = n6;
                        break;
                    }
                    ac.c_f1_AB[n2] = (byte)n7;
                    ac.b_f3_AB[n2] = (byte)(n3 - n7 + 2);
                    if (c_f1_AB[n2] + b_f3_AB[n2] > b_f1_I) {
                        ac.b_f3_AB[n2] = (byte)(b_f1_I - c_f1_AB[n2]);
                    }
                    if (a_f4_Ljava_lang_String_.substring(n2, n2 + 1).equals(".")) {
                        int n8 = n2;
                        c_f1_AB[n8] = (byte)(c_f1_AB[n8] - 1);
                        int n9 = n2;
                        b_f3_AB[n9] = (byte)(b_f3_AB[n9] + 3);
                        continue;
                    }
                    if (!a_f4_Ljava_lang_String_.substring(n2, n2 + 1).equals(" ")) continue;
                    ac.c_f1_AB[n2] = 0;
                    ac.b_f3_AB[n2] = 6;
                }
            }
        }
        catch (Exception exception) {
            Exception exception2 = exception;
            exception.printStackTrace();
        }
        b_f0_Z = true;
    }

    static {
        e = 0;
    }
}

