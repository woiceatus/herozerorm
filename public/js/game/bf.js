/** Transpiled from bf */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bf extends (JavaRegistry.get("Object") || class {}) {
  a = null;
  a_m0_PLjava_lang_String_RAB(string) {

        let n2 = string.length;
        if (n2 >= 16) {
            string = string.substring(0, 16);
        } else {
            let n3 = 0;
            while (n3 < 16 - n2) {
                string = string.concat("0");
                ++n3;
            }
        }
        this.a = string.getBytes();
        return this.a;
    
  }
  a_m1_PLjava_lang_String_RLjava_lang_String_(object) {

        let string = "";
        try {
            object = new String(this.a_m8_PABABZRAB(this.a, bf.a_m9_PABRAB((object).getBytes()), false));
            let n2 = (object).length;
            object = (object).substring(0, n2 - 6);
            let object = null;
        }
        catch (exception) {
            try {
                object = exception;
                exception
            }
            catch (throwable) {
                object = throwable;
                let throwable = null;
            }
        }
        let string = null;
    
  }
  static a_m2_PABIRI(byArray, n2) {

        return (byArray[n2] << 8 & 0xFF00) + (byArray[n2 + 1] & 0xFF);
    
  }
  static a_m3_PIABIRV(n2, byArray, n3) {

        byArray[n3] = (n2 >>> 8);
        byArray[n3 + 1] = n2;
    
  }
  static a_m4_PIIRI(n2, n3) {

        if (n2 == 0) {
            n2 = 65537 - n3;
        } else if (n3 == 0) {
            n2 = 65537 - n2;
        } else {
            n2 *= n3;
            n2 = n3 - n2 + ((n3 = n2 & 0xFFFF) < (n2 >>>= 16) ? 1 : 0);
        }
        return n2 & 0xFFFF;
    
  }
  a_m5_PABRAI(byArray) {

        let nArray = new Int32Array(52);
        if (byArray.length < 16) {
            let byArray2 = new Int8Array(16);
            System.arraycopy(byArray, 0, byArray2, byArray2.length - byArray.length, byArray.length);
            byArray = byArray2;
        }
        let n2 = 0;
        while (n2 < 8) {
            nArray[n2] = bf.a_m2_PABIRI(byArray, n2 << 1);
            ++n2;
        }
        n2 = 8;
        while (n2 < 52) {
            nArray[n2] = (n2 & 7) < 6 ? ((nArray[n2 - 7] & 0x7F) << 9 | nArray[n2 - 6] >> 7) & 0xFFFF : ((n2 & 7) == 6 ? ((nArray[n2 - 7] & 0x7F) << 9 | nArray[n2 - 14] >> 7) & 0xFFFF : ((nArray[n2 - 15] & 0x7F) << 9 | nArray[n2 - 14] >> 7) & 0xFFFF);
            ++n2;
        }
        let nArray = null;
    
  }
  static a_m6_PIRI(n2) {

        if (n2 < 2) {
            let n2 = null;
        }
        let n3 = 1;
        let n4 = 65537 / n2;
        let n5 = 65537 % n2;
        while (n5 != 1) {
            let n6 = n2 / n5;
            n3 = n3 + n4 * n6 & 0xFFFF;
            if ((n2 %= n5) == 1) {
                let n3 = null;
            }
            n6 = n5 / n2;
            n5 %= n2;
            n4 = n4 + n3 * n6 & 0xFFFF;
        }
        return 1 - n4 & 0xFFFF;
    
  }
  static a_m7_PABIRAB(byArray, n2) {

        let n3 = byArray.length;
        n2 -= n3 % n2;
        let n4 = n3 + n2;
        let byArray2 = new Int8Array(n4);
        System.arraycopy(byArray, 0, byArray2, 0, n3);
        let n5 = n3;
        while (n5 < n4) {
            byArray2[n5] = n2;
            ++n5;
        }
        let byArray2 = null;
    
  }
  a_m8_PABABZRAB(byArray, byArray2, bl2) {

        byArray = bf.a_m7_PABIRAB(byArray, 16);
        byArray2 = bf.a_m7_PABIRAB(byArray2, 8);
        let byArray3 = byArray2.length;
        let n2 = byArray3 / 8;
        let byArray4 = new Int8Array(byArray3);
        let n3 = 0;
        while (n3 < n2) {
            let n4 = null;
            let n5 = null;
            let n6 = null;
            let n7 = null;
            let n8 = null;
            let by2 = null;
            let nArray = null;
            let object = new Int8Array(16);
            let objectArray = new Int8Array(8);
            System.arraycopy(byArray, 0, object, 0, 16);
            System.arraycopy(byArray2, n3 << 3, objectArray, 0, 8);
            let n9 = 0;
            let byArray5 = objectArray;
            objectArray = object;
            object = this;
            let byArray6 = new Int8Array(8);
            let n10 = objectArray;
            objectArray = object;
            if (n9 != 0) {
                nArray = super.a_m5_PABRAI;
            } else {
                let byArray7 = objectArray;
                objectArray = super.a_m5_PABRAI;
                by2 = byArray7;
                n8 = 52;
                n7 = 0;
                let nArray2 = new Int32Array(52);
                ++n7;
                let n11 = bf.a_m6_PIRI(objectArray[0]);
                ++n7;
                let by3 = objectArray[1];
                n6 = 0 - by3 & 0xFFFF;
                ++n7;
                by3 = objectArray[2];
                n5 = 0 - by3 & 0xFFFF;
                ++n7;
                n4 = bf.a_m6_PIRI(objectArray[3]);
                --n8;
                nArray2[51] = n4;
                --n8;
                nArray2[50] = n5;
                --n8;
                nArray2[49] = n6;
                --n8;
                nArray2[48] = n11;
                n9 = 1;
                while (n9 < 8) {
                    n11 = objectArray[n7++];
                    n6 = objectArray[n7++];
                    nArray2[--n8] = n6;
                    nArray2[--n8] = n11;
                    n11 = bf.a_m6_PIRI(objectArray[n7++]);
                    by3 = objectArray[n7++];
                    n6 = 0 - by3 & 0xFFFF;
                    by3 = objectArray[n7++];
                    n5 = 0 - by3 & 0xFFFF;
                    n4 = bf.a_m6_PIRI(objectArray[n7++]);
                    nArray2[--n8] = n4;
                    nArray2[--n8] = n6;
                    nArray2[--n8] = n5;
                    nArray2[--n8] = n11;
                    ++n9;
                }
                n11 = objectArray[n7++];
                n6 = objectArray[n7++];
                nArray2[--n8] = n6;
                nArray2[--n8] = n11;
                n11 = bf.a_m6_PIRI(objectArray[n7++]);
                by3 = objectArray[n7++];
                n6 = 0 - by3 & 0xFFFF;
                by3 = objectArray[n7++];
                n5 = 0 - by3 & 0xFFFF;
                n4 = bf.a_m6_PIRI(objectArray[n7]);
                nArray2[--n8] = n4;
                nArray2[--n8] = n5;
                nArray2[--n8] = n6;
                nArray2[--n8] = n11;
                nArray = nArray2;
            }
            objectArray = nArray;
            by2 = byArray6;
            n10 = byArray5;
            let n92 = objectArray;
            objectArray = object;
            let objectArray2 = 0;
            n8 = bf.a_m2_PABIRI(n10, 0);
            n7 = bf.a_m2_PABIRI(n10, 2);
            let nArray2 = bf.a_m2_PABIRI(n10, 4);
            let byArray7 = bf.a_m2_PABIRI(n10, 6);
            n6 = 0;
            while (n6 < 8) {
                n8 = bf.a_m4_PIIRI(n8, n92[objectArray2++]);
                n7 += n92[objectArray2++];
                nArray2 += n92[objectArray2++];
                byArray7 = bf.a_m4_PIIRI(byArray7, n92[objectArray2++]);
                n5 = n7 &= 0xFFFF;
                n4 = nArray2 &= 0xFFFF;
                nArray2 ^= n8;
                n7 ^= byArray7;
                nArray2 = bf.a_m4_PIIRI(nArray2, n92[objectArray2++]);
                n7 += nArray2;
                n7 &= 0xFFFF;
                n7 = bf.a_m4_PIIRI(n7, n92[objectArray2++]);
                nArray2 += n7;
                n8 ^= n7;
                byArray7 ^= (nArray2 &= 0xFFFF);
                n7 ^= n4;
                nArray2 ^= n5;
                ++n6;
            }
            a_m3_PIABIRV(bf.a_m4_PIIRI(n8, n92[objectArray2++]), by2, 0);
            a_m3_PIABIRV(nArray2 + n92[objectArray2++], by2, 2);
            a_m3_PIABIRV(n7 + n92[objectArray2++], by2, 4);
            a_m3_PIABIRV(bf.a_m4_PIIRI(byArray7, n92[objectArray2]), by2, 6);
            object = byArray6;
            System.arraycopy(byArray6, 0, byArray4, n3 << 3, 8);
            ++n3;
        }
        let byArray4 = null;
    
  }
  static a_m9_PABRAB(byArray) {

        if (byArray.length % 2 != 0) {
            throw new IllegalArgumentException("Length Not Double Num");
        }
        let byArray2 = new Int8Array(byArray.length / 2);
        let n2 = 0;
        while (n2 < byArray.length) {
            let string = new String(byArray, n2, 2);
            byArray2[n2 / 2] = Integer.parseInt(string, 16);
            n2 += 2;
        }
        let byArray2 = null;
    
  }
}

JavaRegistry.set("bf", bf);
JavaRegistry.set("bf", bf);
try { if (typeof bf.__clinit === 'function') bf.__clinit(); } catch (e) { console.warn('clinit bf', e); }

globalThis.bf = bf;
