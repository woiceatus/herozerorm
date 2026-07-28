/** Transpiled from aj */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class aj extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_ALjava_lang_String_ = new String[]{"IHDR", "cHRM", "gAMA", "iCCP", "sBIT", "sRGB", "tEXt", "zTXt", "iTXt", "pHYs", "sPLT", "tIME", "PLTE", "tRNS", "hIST", "bKGD", "IDAT", "IEND"};
  static a_f1_AB = new Int8Array([-119, 80, 78, 71, 13, 10, 26, 10]);
  static b_f0_AB = new Int8Array([0, 0, 0, 0, 73, 69, 78, 68, -82, 66, 96, -126]);
  a_f2_Ljava_lang_String_ = null;
  a_f3_Z = null;
  b_f1_Z = null;
  a_f4_I = null;
  a_f5_AI = null;
  c_f0_AB = null;
  a_f6_ALjava_lang_Object_ = null;
  a_f7_AC = null;
  b_f2_I = null;
  c_f1_I = null;
  c_f2_Z = true;
  static b_f3_AI = new Int32Array(256);
  d = -1;
  e = 1;
  aj(string) {

        this.a_m0_PLjava_lang_String_RV;
    
  }
  a_m0_PLjava_lang_String_RV(object) {

        let n2 = null;
        this.a_f5_AI = null;
        this.c_f0_AB = null;
        this.a_f6_ALjava_lang_Object_ = null;
        this.a_f7_AC = null;
        this.a_f2_Ljava_lang_String_ = object;
        object = rpg.e.a_m6_PLjava_lang_String_RAB(this.a_f2_Ljava_lang_String_.concat(".mpm"));
        this.c_f0_AB = aj.a_m1_PABIRAB(object, 0);
        let n3 = 0 + (2 + this.c_f0_AB.length);
        let aj2 = this;
        let n4 = aj.a_m10_PABIRI(aj2.c_f0_AB, 0);
        aj2.a_f3_Z = (n4 >> 27) % 2 == 1;
        aj2.b_f1_Z = (n4 >> 26) % 2 == 1;
        n4 = aj2.a_m2_PRI();
        aj2.a_f4_I = 0;
        for (n2 = 0; n2 < n4; ++n2) {
            if (aj2.a_f4_I >= aj.a_m11_PABIRC(aj2.c_f0_AB, 8 + n2 * 8) + '\u0001') continue;
            aj2.a_f4_I = aj.a_m11_PABIRC(aj2.c_f0_AB, 8 + n2 * 8) + '\u0001';
        }
        aj2.a_f5_AI = new Int32Array(aj2.a_f4_I);
        for (n2 = 0; n2 < n4; ++n2) {
            let c2 = aj.a_m11_PABIRC(aj2.c_f0_AB, 8 + n2 * 8);
            aj2.a_f5_AI[c2] = aj2.a_f5_AI[c2] + 1;
        }
        aj2.a_f6_ALjava_lang_Object_ = new Object[aj2.a_f4_I];
        aj2.a_f7_AC = new char[n4];
        for (n2 = 0; n2 < n4; ++n2) {
            aj2.a_f7_AC[n2] = aj.a_m11_PABIRC(aj2.c_f0_AB, 8 + n2 * 8 + 6);
        }
        aj2.b_f2_I = aj.b_m2_PABIRI(aj2.c_f0_AB, 12);
        aj2.c_f1_I = aj.b_m2_PABIRI(aj2.c_f0_AB, 13);
        for (let i2 = 0; i2 < this.a_f4_I; ++i2) {
            let byArray = aj.a_m1_PABIRAB(object, n3);
            this.a_f6_ALjava_lang_Object_[i2] = byArray;
            n3 += 2 + byArray.length;
        }
    
  }
  static a_m1_PABIRAB(byArray, n2) {

        let s2 = ((byArray[n2] & 0xFF) << 8 | byArray[n2 + 1] & 0xFF);
        let byArray2 = new Int8Array(s2);
        System.arraycopy(byArray, n2 + 2, byArray2, 0, s2);
        let byArray2 = null;
    
  }
  a_m2_PRI() {

        return aj.a_m10_PABIRI(this.c_f0_AB, 4);
    
  }
  a_m3_PIRLcg_(n2) {

        let byArray = this.b_m1_PIRAB;
        return cg.a_m3_PABIIRLcg_(byArray, 0, byArray.length);
    
  }
  a_m4_PRALcg_() {

        let bl2 = true;
        let aj2 = this;
        this.c_f2_Z = true;
        let n2 = this.a_m2_PRI();
        let cgArray = new cg[n2];
        for (let i2 = 0; i2 < n2; ++i2) {
            cgArray[i2] = this.a_m3_PIRLcg_;
        }
        let cgArray = null;
    
  }
  a_m5_PALcg_IRV(cgArray, n2) {

        n2 = 1;
        let aj2 = this;
        this.c_f2_Z = true;
        let n3 = this.a_m2_PRI();
        for (let i2 = 0; i2 < n3; ++i2) {
            cgArray[i2 + 0] = this.a_m3_PIRLcg_;
        }
    
  }
  b_m0_PIRLcg_(n2) {

        let byArray = null;
        block7: {
            let n3 = null;
            let n4 = null;
            if (!this.b_f1_Z) {
                return this.a_m3_PIRLcg_;
            }
            byArray = this.b_m1_PIRAB;
            let n5 = aj.a_m9_PABIIIRI(byArray, 16, 8, byArray.length);
            let n6 = aj.a_m9_PABIIIRI(byArray, 0, 8, byArray.length);
            let n7 = aj.a_m10_PABIRI(byArray, n6 + 8);
            let n8 = aj.a_m10_PABIRI(byArray, n6 + 12);
            n6 = byArray[n6 + 16];
            let n9 = n5;
            let n10 = n6;
            let n11 = n8;
            n5 = n7;
            n6 = n9;
            let byArray2 = byArray;
            let aj2 = this;
            let n12 = 8 / n10;
            let n13 = (n5 - 1) / n12 + 1;
            let n14 = 255 >> 8 - n10;
            let n15 = n6 + 15;
            let n16 = (n13 + 1) * n11;
            let n17 = n5 / 2;
            let n18 = n15 + n16;
            let n19 = n18 + 4;
            n6 += 4;
            for (n4 = 0; n4 < n11; ++n4) {
                if (byArray2[n15 + (n13 + 1) * n4] == 0) {
                    continue;
                }
                let block7 = null;
            }
            for (let i2 = 0; i2 < n11; ++i2) {
                n4 = n15 + (n13 + 1) * i2 + 1;
                for (let i3 = 0; i3 < n17; ++i3) {
                    n3 = n5 - 1 - i3;
                    let n20 = n4 + i3 / n12;
                    let n21 = n4 + n3 / n12;
                    let n22 = i3 % n12;
                    n3 %= n12;
                    n22 = ((n12 - n22 - 1) * n10);
                    n3 = ((n12 - n3 - 1) * n10);
                    let by2 = (byArray2[n20] >> n22 & n14);
                    let by3 = (byArray2[n21] >> n3 & n14);
                    byArray2[n20] = (byArray2[n20] & ~(n14 << n22) | by3 << n22);
                    byArray2[n21] = (byArray2[n21] & ~(n14 << n3) | by2 << n3);
                }
            }
            let aj3 = aj2;
            aj2.e = 1;
            n12 = n16;
            n10 = n15;
            let byArray3 = byArray2;
            aj3 = aj2;
            n13 = aj3.e & 0xFFFF;
            n14 = aj3.e >> 16 & 0xFFFF;
            while (n12 > 0) {
                n15 = n12 < 5552 ? n12 : 5552;
                n12 -= n15;
                while (n15-- > 0) {
                    n14 += (n13 += byArray3[n10++] & 0xFF);
                }
                n13 %= 65521;
                n14 %= 65521;
            }
            aj3.e = n14 << 16 | n13;
            aj3 = aj2;
            let l2 = aj3.e;
            System.arraycopy(aj.c(l2), 0, byArray2, n18, 4);
            aj3 = aj2;
            aj2.d = -1;
            aj2.a_m13_PABIIRV(byArray2, n6, n16 + 15);
            aj3 = aj2;
            n3 = ~aj3.d;
            System.arraycopy(aj.c, 0, byArray2, n19, 4);
        }
        return cg.a_m3_PABIIRLcg_(byArray, 0, byArray.length);
    
  }
  a_m6_PIIRV(n2, n3) {

        if (!this.a_f3_Z) {
            return;
        }
        let n4 = n3;
        let n5 = n2;
        n2 = 4;
        let n6 = this.b_f2_I;
        let byArray = this.c_f0_AB;
        let aj2 = this;
        let n7 = aj.a_m10_PABIRI(byArray, n6);
        let n8 = n6 + 8;
        let n9 = n8 + n7;
        let n10 = n5 >> 16;
        let by2 = (n5 >> 8);
        n5 = n5;
        let by3 = (n4 >> 16);
        let by4 = (n4 >> 8);
        n4 = n4;
        for (let i2 = 0; i2 < n7 / 3; ++i2) {
            if (byArray[n8 + i2 * 3] != n10 || byArray[n8 + i2 * 3 + 1] != by2 || byArray[n8 + i2 * 3 + 2] != n5) continue;
            byArray[n8 + i2 * 3] = by3;
            byArray[n8 + i2 * 3 + 1] = by4;
            byArray[n8 + i2 * 3 + 2] = n4;
        }
        let aj3 = aj2;
        aj2.d = -1;
        aj2.a_m13_PABIIRV(byArray, n6 + 4, n7 + 4);
        aj3 = aj2;
        n10 = ~aj3.d;
        System.arraycopy(aj.c, 0, byArray, n9, 4);
    
  }
  a_m7_PIRAB(n2) {

        n2 = aj.a_m11_PABIRC(this.c_f0_AB, 8 + n2 * 8);
        if (this.c_f2_Z && this.a_f6_ALjava_lang_Object_[n2] == null) {
            let aj2 = this;
            for (let i2 = 0; i2 < aj2.a_f4_I; ++i2) {
                aj2.a_f6_ALjava_lang_Object_[i2] = null;
            }
            this.a_f6_ALjava_lang_Object_[n2] = rpg.e.a_m6_PLjava_lang_String_RAB(this.a_f2_Ljava_lang_String_.concat("_").concat(String.valueOf).concat(".mpd"));
        }
        return this.a_f6_ALjava_lang_Object_[n2];
    
  }
  b_m1_PIRAB(n2) {

        if {
            let byArray = this.a_m7_PIRAB;
            let n3 = aj.a_m10_PABIRI(this.c_f0_AB, 8 + (n2 << 3) + 2);
            let n4 = this.a_m8_PIRI;
            let n5 = 8 + (this.c_f0_AB.length - ((aj.a_m10_PABIRI(this.c_f0_AB, 4) << 3) + 8));
            n5 += n4;
            let byArray2 = new Int8Array(n5 += 12);
            System.arraycopy(aj.a_f1_AB, 0, byArray2, 0, 8);
            let n6 = aj.a_m9_PABIIIRI(byArray, 0, n3, n4);
            if (n6 == -1) {
                let null = null;
            }
            let n7 = aj.a_m10_PABIRI(byArray, n6) + 12;
            System.arraycopy(byArray, n6, byArray2, 8, n7);
            let n8 = n7 + 8;
            block3: for (let i2 = 0; i2 < 18; ++i2) {
                if (!this.a_m12_PIIRZ(n2, i2)) continue;
                switch {
                    case 1: 
                    case 2: 
                    case 3: 
                    case 4: 
                    case 5: 
                    case 9: 
                    case 10: {
                        n6 = aj.a_m9_PABIIIRI(byArray, i2, n3, n4);
                        if (n6 == -1) let block3 = null;
                        n7 = aj.a_m10_PABIRI(byArray, n6) + 12;
                        System.arraycopy(byArray, n6, byArray2, n8, n7);
                        n8 += n7;
                    }
                }
            }
            n6 = this.b_f2_I;
            n7 = aj.a_m10_PABIRI(this.c_f0_AB, n6) + 12;
            System.arraycopy(this.c_f0_AB, n6, byArray2, n8, n7);
            n8 += n7;
            n6 = this.c_f1_I;
            if (n6 != -1) {
                n7 = aj.a_m10_PABIRI(this.c_f0_AB, n6) + 12;
                System.arraycopy(this.c_f0_AB, n6, byArray2, n8, n7);
                n8 += n7;
            }
            if (this.a_m12_PIIRZ(n2, 14) && (n6 = aj.a_m9_PABIIIRI(byArray, 14, n3, n4)) != -1) {
                n7 = aj.a_m10_PABIRI(byArray, n6) + 12;
                System.arraycopy(byArray, n6, byArray2, n8, n7);
                n8 += n7;
            }
            if (this.a_m12_PIIRZ(n2, 15) && (n6 = aj.a_m9_PABIIIRI(byArray, 15, n3, n4)) != -1) {
                n7 = aj.a_m10_PABIRI(byArray, n6) + 12;
                System.arraycopy(byArray, n6, byArray2, n8, n7);
                n8 += n7;
            }
            n6 = aj.a_m9_PABIIIRI(byArray, 16, n3, n4);
            n7 = aj.a_m10_PABIRI(byArray, n6) + 12;
            System.arraycopy(byArray, n6, byArray2, n8, n7);
            System.arraycopy(aj.b_f0_AB, 0, byArray2, n8 += n7, 12);
            let byArray2 = null;
        }
        let byArray = this.a_m7_PIRAB;
        let n9 = aj.a_m10_PABIRI(this.c_f0_AB, 8 + (n2 << 3) + 2);
        let n10 = this.a_m8_PIRI;
        let n11 = n10 + 8;
        let byArray3 = new Int8Array(n11 += 12);
        System.arraycopy(aj.a_f1_AB, 0, byArray3, 0, 8);
        System.arraycopy(byArray, n9, byArray3, 8, n10);
        let n12 = n10 + 8;
        System.arraycopy(aj.b_f0_AB, 0, byArray3, n12, 12);
        let byArray3 = null;
    
  }
  a_m8_PIRI(n2) {

        let byArray = this.a_m7_PIRAB;
        let n3 = aj.a_m10_PABIRI(this.c_f0_AB, 8 + (n2 << 3) + 2);
        n2 = n2 == this.a_m2_PRI() - 1 || aj.a_m11_PABIRC(this.c_f0_AB, 8 + (n2 << 3)) != aj.a_m11_PABIRC(this.c_f0_AB, 8 + (n2 + 1 << 3)) ? byArray.length : aj.a_m10_PABIRI(this.c_f0_AB, 8 + (n2 + 1 << 3) + 2);
        return n2 - n3;
    
  }
  static a_m9_PABIIIRI(byArray, n2, n3, n4) {

        let string = aj.a_f0_ALjava_lang_String_[n2];
        n4 = n4 == -1 ? byArray.length : n3 + n4;
        while (n3 < n4) {
            if (byArray[n3 + 4] == string.charAt(0) && byArray[n3 + 5] == string.charAt(1) && byArray[n3 + 6] == string.charAt(2) && byArray[n3 + 7] == string.charAt(3)) {
                let n3 = null;
            }
            n3 += aj.a_m10_PABIRI(byArray, n3) + 12;
        }
        return -1;
    
  }
  static a_m10_PABIRI(byArray, n2) {

        if (byArray.length - 4 < n2) {
            throw new ArrayIndexOutOfBoundsException();
        }
        let n3 = 0 + ((byArray[n2] & 0xFF) << 24);
        n3 += (byArray[n2 + 1] & 0xFF) << 16;
        n3 += (byArray[n2 + 2] & 0xFF) << 8;
        return n3 += byArray[n2 + 3] & 0xFF;
    
  }
  static a_m11_PABIRC(byArray, n2) {

        if (byArray.length - 2 < n2) {
            throw new ArrayIndexOutOfBoundsException();
        }
        let c2 = (0 + ((byArray[n2] & 0xFF) << 8));
        c2 = (c2 + (byArray[n2 + 1] & 0xFF));
        let c2 = null;
    
  }
  a_m12_PIIRZ(n2, n3) {

        n2 = this.a_f7_AC[n2];
        if (n3 <= 0 || n3 > 16) {
            let false = null;
        }
        return (n2 >> n3 - 1 & 1) == 1;
    
  }
  static b_m2_PABIRI(byArray, n2) {

        let string = aj.a_f0_ALjava_lang_String_[n2];
        let n3 = byArray.length;
        for (let i2 = 0; i2 < n3 - 3; ++i2) {
            if (byArray[i2] != string.charAt(0) || byArray[i2 + 1] != string.charAt(1) || byArray[i2 + 2] != string.charAt(2) || byArray[i2 + 3] != string.charAt(3)) continue;
            return i2 - 4;
        }
        return -1;
    
  }
  static c(n2) {

        let byArray = new Int8Array(4);
        let byArray2 = byArray;
        byArray[0] = (n2 >>> 24);
        byArray2[1] = (n2 >> 16);
        byArray2[2] = (n2 >> 8);
        byArray2[3] = n2;
        let byArray2 = null;
    
  }
  a_m13_PABIIRV(byArray, n2, n3) {

        for (let i2 = n2; i2 < n3 + n2; ++i2) {
            this.d = this.d >>> 8 & 0xFFFFFF ^ aj.b_f3_AI[(this.d ^ byArray[i2]) & 0xFF];
        }
    
  }
  static __clinit() {

        for (let n2 = 0; n2 < 256; n2 = ((n2 + 1))) {
            let n3 = n2;
            for (let n4 = 1; n4 < 9; n4 = ((n4 + 1))) {
                n3 = (n3 & 1) == 1 ? n3 >>> 1 ^ 0xEDB88320 : n3 >>> 1;
            }
            aj.b_f3_AI[n2] = n3;
        }
    
  }
}

JavaRegistry.set("aj", aj);
JavaRegistry.set("aj", aj);
try { if (typeof aj.__clinit === 'function') aj.__clinit(); } catch (e) { console.warn('clinit aj', e); }

globalThis.aj = aj;
