/** Transpiled from ac */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ac extends (JavaRegistry.get("Object") || class {}) {
  static b_f0_Z = false;
  static a_f0_Z = true;
  static a_f1_AB = new Int8Array([38, 124, 36, 123, 125, 94, 92]);
  static a_f2_AI = new Int32Array([0xFFFFFF, 0xFFFF00, 1630207, 0xFF9F3F, 14597755, 65280, 0x7F7F7F]);
  static a_f3_I = null;
  static b_f1_I = null;
  static a_f4_Ljava_lang_String_ = null;
  static c_f0_I = null;
  /* skip field: private static byte[][] a_f5_AAB; */
  static d = null;
  static b_f2_AI = null;
  static b_f3_AB = null;
  static c_f1_AB = null;
  static e = null;
  static a_m0_PLcm_IIABIRV(cm2, n2, n3, byArray, n4) {

        a_m3_PLcm_IIIIABIIIRV(cm2, n2, n3, 1000, n4, byArray, 0, 0, byArray.length);
    
  }
  static a_m1_PLcm_IIIIABRV(cm2, n2, n3, n4, n5, byArray) {

        a_m3_PLcm_IIIIABIIIRV(cm2, n2, n3, n4, n5, byArray, 0, 0, byArray.length);
    
  }
  static a_m2_PLcm_IIABIIRV(cm2, n2, n3, byArray, n4, n5) {

        let byArray2 = byArray;
        let n6 = ac.b(byArray, 0, 0);
        switch {
            case 4: {
                n6 = 0;
                break;
            }
            case 1: {
                n6 /= 2;
            }
        }
        a_m3_PLcm_IIIIABIIIRV(cm2, n2 - n6, n3, 1000, n4, byArray, 0, 0, byArray.length);
    
  }
  static a_m3_PLcm_IIIIABIIIRV(cm2, n2, n3, n4, n5, byArray, n6, n7, n8) {

        a_m4_PLcm_IIIABIIIRV(cm2, n2, n3, n4, byArray, n6, n8, 4);
    
  }
  static a_m4_PLcm_IIIABIIIRV(cm2, n2, n3, n4, byArray, n5, n6, n7) {

        try {
            if (!ac.b_f0_Z) {
                return;
            }
            let n8 = n5;
            let n9 = n2;
            switch {
                case 4: {
                    n9 = n2;
                    break;
                }
                case 1: {
                    n9 = n2 - (ac.b(byArray, n5, n4) >> 1);
                }
            }
            let n10 = 0;
            while (n8 < byArray.length && n8 < n5 + n6) {
                let n11 = null;
                let n12 = null;
                let n13 = null;
                let n14 = null;
                let n15 = null;
                let n16 = null;
                block27: {
                    n16 = byArray[n8];
                    for (n15 = 0; n15 < ac.a_f1_AB.length; ++n15) {
                        if (n16 != ac.a_f1_AB[n15]) continue;
                        n14 = ac.a_f2_AI[n15];
                        let block27 = null;
                    }
                    n14 = n16 = -1;
                }
                if (n14 != -1 && ac.a_f0_Z) {
                    cm2.a_m2_PIRV;
                    ++n8;
                    continue;
                }
                if (n10 == 0 && byArray[n8] == 32) {
                    ++n8;
                    continue;
                }
                n15 = ac.b_f1_I >> 2;
                let n17 = ac.a_f4_Ljava_lang_String_.indexOf(byArray[n8]);
                if (n17 >= 0 && n17 < ac.b_f3_AB.length) {
                    n15 = ac.b_f3_AB[n17];
                }
                let n18 = 0;
                if (byArray[n8] == 32) {
                    n16 = n10;
                    for (n13 = n8 + 1; n13 < byArray.length && byArray[n13] != 32 && byArray[n13] != 59; ++n13) {
                        n12 = ac.b_f1_I >> 2;
                        n11 = ac.a_f4_Ljava_lang_String_.indexOf(byArray[n13]);
                        if (n11 >= 0 && n11 < ac.b_f3_AB.length) {
                            n12 = ac.b_f3_AB[n11];
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
                    n3 += ac.a_f3_I + 2;
                    if (byArray[n8] == 59) {
                        ++n8;
                    }
                    switch {
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
                if (n17 >= 0 && n17 < ac.e) {
                    n13 = 0;
                    n12 = 0;
                    n11 = 0;
                    while (n11 < a_f5_AAB[n17].length) {
                        n16 = 7 - ac.c_f1_AB[n17];
                        n18 = ac.b_f3_AB[n17];
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
        catch (exception) {
            let exception2 = exception;
            let return = null;
        }
    
  }
  static a_m5_PABIIIRI(byArray, n2, n3, n4) {

        let n5 = n2;
        let n6 = 0;
        let n7 = 0;
        let n8 = 0;
        while (n6 < n4 && n2 < byArray.length) {
            if (byArray[n2] == 32) {
                n7 = n2;
            }
            if (byArray[n2] == 32 && n8 == 0) {
                ++n2;
                continue;
            }
            if ((byArray[n2] & 0xF0) == 240) {
                if (n8 + ac.b_f1_I > n3) {
                    ++n6;
                    n8 = 0;
                    continue;
                }
                n8 += ac.b_f1_I + 1;
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
            let n9 = ac.b_f1_I >> 2;
            let n10 = ac.a_f4_Ljava_lang_String_.indexOf(byArray[n2]);
            if (n10 >= 0 && n10 < ac.b_f3_AB.length) {
                n9 = ac.b_f3_AB[n10];
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
  static a_m6_PABIIRI(byArray, n2, n3) {

        n3 = n2 + n3;
        let bl2 = false;
        while (n3 < byArray.length) {
            if (byArray[n3] == 32 || ac.a_m9_PBRZ(byArray[n3])) {
                ++n3;
                continue;
            }
            if ((byArray[n3] & 0x80) != 0) {
                if {
                    return n3 + 2 - n2;
                }
                bl2 = true;
                n3 += 2;
                continue;
            }
            if {
                return n3 + 1 - n2;
            }
            bl2 = true;
            ++n3;
        }
        return byArray.length - n2;
    
  }
  static a_m7_PABIRI(byArray, n2) {

        let n3 = 0;
        let n4 = ac.a_m5_PABIIIRI(byArray, 0, n2, 0);
        while (n4 < byArray.length) {
            n4 = ac.a_m5_PABIIIRI(byArray, 0, n2, ++n3);
        }
        let n3 = null;
    
  }
  static a_m8_PABRI(byArray) {

        return ac.b(byArray, 0, 0);
    
  }
  static b(byArray, n2, n3) {

        let n4 = 1;
        while (n2 < byArray.length) {
            let n5 = n4;
            if ((byArray[n2] & 0xF0) == 240) {
                n4 += ac.b_f1_I + 1;
                n2 += 2;
            } else if ((byArray[n2] & 0x80) != 0) {
                n4 += 9;
                n2 += 2;
            } else {
                if (byArray[n2] == 59) break;
                if (ac.a_m9_PBRZ(byArray[n2])) {
                    ++n2;
                } else {
                    let n6 = ac.b_f1_I >> 2;
                    let n7 = ac.a_f4_Ljava_lang_String_.indexOf(byArray[n2]);
                    if (n7 >= 0 && n7 < ac.b_f3_AB.length) {
                        n6 = ac.b_f3_AB[n7];
                    }
                    n4 += n6;
                    ++n2;
                }
            }
            if (n3 <= 0 || n4 <= n3) continue;
            let n5 = null;
        }
        if (n4 == 1) {
            return 0;
        }
        let n4 = null;
    
  }
  static a_m9_PBRZ(by2) {

        if (by2 == 59) {
            let true = null;
        }
        for (let i2 = 0; i2 < ac.a_f1_AB.length; ++i2) {
            if (by2 != ac.a_f1_AB[i2]) continue;
            let true = null;
        }
        let false = null;
    
  }
  static a_m10_PRV() {

        if {
            return;
        }
        try {
            let dataInputStream = new DataInputStream("".getClass().getResourceAsStream("/dotFontSmall.dat"));
            ac.e = dataInputStream.readInt();
            ac.b_f3_AB = new Int8Array(ac.e);
            ac.c_f1_AB = new Int8Array(ac.e);
            ac.a_f4_Ljava_lang_String_ = dataInputStream.readUTF();
            ac.c_f0_I = ac.a_f4_Ljava_lang_String_.length;
            ac.a_f4_Ljava_lang_String_ = ac.a_f4_Ljava_lang_String_.substring(0, ac.e);
            let n2 = dataInputStream.readInt() - 2;
            ac.b_f1_I = dataInputStream.readByte();
            ac.a_f3_I = dataInputStream.readByte();
            ac.b_f2_AI = new Int32Array(ac.b_f1_I * ac.a_f3_I);
            ac.d = (ac.b_f1_I >> 3) + ((ac.b_f1_I & 7) == 0 ? 0 : 1);
            let n3 = ac.a_f3_I * ac.d;
            if (n3 * ac.c_f0_I != n2) {
                console.log("************************************\n");
                console.log("       DOT FONT LOAD ERROR!!!");
                console.log("\n************************************");
            } else {
                a_f5_AAB = new Int8Array(ac.c_f0_I)[n3];
                for (n2 = 0; n2 < ac.c_f0_I; ++n2) {
                    dataInputStream.read(a_f5_AAB[n2]);
                }
                for (n2 = 0; n2 < ac.e; ++n2) {
                    let n4 = null;
                    let n5 = null;
                    let n6 = null;
                    let n7 = 0;
                    for (n3 = 0; n3 < a_f5_AAB[n2].length; ++n3) {
                        n6 = 7;
                        n5 = ac.b_f1_I;
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
                    n3 = ac.b_f1_I - 1;
                    for (n6 = 0; n6 < ac.b_f1_I; ++n6) {
                        n5 = 0;
                        for (n4 = 0; n4 < ac.b_f2_AI.length; n4 += ac.b_f1_I) {
                            if (ac.b_f2_AI[n6 + n4] != 1) continue;
                            n5 = 1;
                            break;
                        }
                        if (n5 == 0) continue;
                        n7 = n6;
                        break;
                    }
                    for (n6 = ac.b_f1_I - 1; n6 >= 0; --n6) {
                        n5 = 0;
                        for (n4 = 0; n4 < ac.b_f2_AI.length; n4 += ac.b_f1_I) {
                            if (ac.b_f2_AI[n6 + n4] != 1) continue;
                            n5 = 1;
                            break;
                        }
                        if (n5 == 0) continue;
                        n3 = n6;
                        break;
                    }
                    ac.c_f1_AB[n2] = n7;
                    ac.b_f3_AB[n2] = (n3 - n7 + 2);
                    if (ac.c_f1_AB[n2] + ac.b_f3_AB[n2] > ac.b_f1_I) {
                        ac.b_f3_AB[n2] = (ac.b_f1_I - ac.c_f1_AB[n2]);
                    }
                    if (ac.a_f4_Ljava_lang_String_.substring(n2, n2 + jEquals(1), ".")) {
                        let n8 = n2;
                        ac.c_f1_AB[n8] = (ac.c_f1_AB[n8] - 1);
                        let n9 = n2;
                        ac.b_f3_AB[n9] = (ac.b_f3_AB[n9] + 3);
                        continue;
                    }
                    if (!ac.a_f4_Ljava_lang_String_.substring(n2, n2 + jEquals(1), " ")) continue;
                    ac.c_f1_AB[n2] = 0;
                    ac.b_f3_AB[n2] = 6;
                }
            }
        }
        catch (exception) {
            let exception2 = exception;
            exception
        }
        ac.b_f0_Z = true;
    
  }
  static __clinit() {

        ac.e = 0;
    
  }
}

JavaRegistry.set("ac", ac);
JavaRegistry.set("ac", ac);
try { if (typeof ac.__clinit === 'function') ac.__clinit(); } catch (ac.e) { console.warn('clinit ac', ac.e); }

globalThis.ac = ac;
