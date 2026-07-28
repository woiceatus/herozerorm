/** Transpiled from bg */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bg extends (JavaRegistry.get("Object") || class {}) {
  a = "0123456789abcdef";
  a_m0_PIRLjava_lang_String_(n2) {

        let string = "";
        let n3 = 0;
        while (n3 <= 3) {
            string = String.valueOf+ this.a.charAt(n2 >> (n3 << 3) + 4 & 0xF) + this.a.charAt(n2 >> (n3 << 3) & 0xF);
            ++n3;
        }
        let string = null;
    
  }
  static a_m1_PIIRI(n2, n3) {

        return (n2 & Integer.MAX_VALUE) + (n3 & Integer.MAX_VALUE) ^ n2 & Integer.MIN_VALUE ^ n3 & Integer.MIN_VALUE;
    
  }
  a_m2_PIIIIIIRI(n2, n3, n4, n5, n6, n7) {

        let n8 = bg.a_m1_PIIRI(bg.a_m1_PIIRI(n3, n2), bg.a_m1_PIIRI(n5, n7));
        n3 = n6;
        n2 = n8;
        return bg.a_m1_PIIRI(n8 << n3 | n2 >>> 32 - n3, n4);
    
  }
  a_m3_PIIIIIIIRI(n2, n3, n4, n5, n6, n7, n8) {

        return this.a_m2_PIIIIIIRI(n3 & n4 | ~n3 & n5, n2, n3, n6, n7, n8);
    
  }
  b(n2, n3, n4, n5, n6, n7, n8) {

        return this.a_m2_PIIIIIIRI(n3 & n5 | n4 & ~n5, n2, n3, n6, n7, n8);
    
  }
  c(n2, n3, n4, n5, n6, n7, n8) {

        return this.a_m2_PIIIIIIRI(n3 ^ n4 ^ n5, n2, n3, n6, n7, n8);
    
  }
  d(n2, n3, n4, n5, n6, n7, n8) {

        return this.a_m2_PIIIIIIRI(n4 ^ (n3 | ~n5), n2, n3, n6, n7, n8);
    
  }
  a_m4_PLjava_lang_String_RLjava_lang_String_(object) {

        let n2 = ((object).length + 8 >> 6) + 1;
        let nArray = new Int32Array(n2 << 4);
        let n3 = 0;
        while (n3 < n2 << 4) {
            nArray[n3] = 0;
            ++n3;
        }
        n3 = 0;
        while (n3 < (object).length) {
            let n4 = n3 >> 2;
            nArray[n4] = nArray[n4] | (object).charAt<< (n3 % 4 << 3);
            ++n3;
        }
        let n5 = n3 >> 2;
        nArray[n5] = nArray[n5] | 128 << (n3 % 4 << 3);
        nArray[(n2 << 4) - 2] = (object).length << 3;
        object = nArray;
        n2 = 1732584193;
        let n6 = -271733879;
        n3 = -1732584194;
        let n7 = 271733878;
        let n8 = 0;
        while (n8 < (object).length) {
            let n9 = n2;
            let n10 = n6;
            let n11 = n3;
            let n12 = n7;
            n2 = this.a_m3_PIIIIIIIRI(n2, n6, n3, n7, object[n8], 7, -680876936);
            n7 = this.a_m3_PIIIIIIIRI(n7, n2, n6, n3, object[n8 + 1], 12, -389564586);
            n3 = this.a_m3_PIIIIIIIRI(n3, n7, n2, n6, object[n8 + 2], 17, 606105819);
            n6 = this.a_m3_PIIIIIIIRI(n6, n3, n7, n2, object[n8 + 3], 22, -1044525330);
            n2 = this.a_m3_PIIIIIIIRI(n2, n6, n3, n7, object[n8 + 4], 7, -176418897);
            n7 = this.a_m3_PIIIIIIIRI(n7, n2, n6, n3, object[n8 + 5], 12, 1200080426);
            n3 = this.a_m3_PIIIIIIIRI(n3, n7, n2, n6, object[n8 + 6], 17, -1473231341);
            n6 = this.a_m3_PIIIIIIIRI(n6, n3, n7, n2, object[n8 + 7], 22, -45705983);
            n2 = this.a_m3_PIIIIIIIRI(n2, n6, n3, n7, object[n8 + 8], 7, 1770035416);
            n7 = this.a_m3_PIIIIIIIRI(n7, n2, n6, n3, object[n8 + 9], 12, -1958414417);
            n3 = this.a_m3_PIIIIIIIRI(n3, n7, n2, n6, object[n8 + 10], 17, -42063);
            n6 = this.a_m3_PIIIIIIIRI(n6, n3, n7, n2, object[n8 + 11], 22, -1990404162);
            n2 = this.a_m3_PIIIIIIIRI(n2, n6, n3, n7, object[n8 + 12], 7, 1804603682);
            n7 = this.a_m3_PIIIIIIIRI(n7, n2, n6, n3, object[n8 + 13], 12, -40341101);
            n3 = this.a_m3_PIIIIIIIRI(n3, n7, n2, n6, object[n8 + 14], 17, -1502002290);
            n6 = this.a_m3_PIIIIIIIRI(n6, n3, n7, n2, object[n8 + 15], 22, 1236535329);
            n2 = this.b(n2, n6, n3, n7, object[n8 + 1], 5, -165796510);
            n7 = this.b(n7, n2, n6, n3, object[n8 + 6], 9, -1069501632);
            n3 = this.b(n3, n7, n2, n6, object[n8 + 11], 14, 643717713);
            n6 = this.b(n6, n3, n7, n2, object[n8], 20, -373897302);
            n2 = this.b(n2, n6, n3, n7, object[n8 + 5], 5, -701558691);
            n7 = this.b(n7, n2, n6, n3, object[n8 + 10], 9, 38016083);
            n3 = this.b(n3, n7, n2, n6, object[n8 + 15], 14, -660478335);
            n6 = this.b(n6, n3, n7, n2, object[n8 + 4], 20, -405537848);
            n2 = this.b(n2, n6, n3, n7, object[n8 + 9], 5, 568446438);
            n7 = this.b(n7, n2, n6, n3, object[n8 + 14], 9, -1019803690);
            n3 = this.b(n3, n7, n2, n6, object[n8 + 3], 14, -187363961);
            n6 = this.b(n6, n3, n7, n2, object[n8 + 8], 20, 1163531501);
            n2 = this.b(n2, n6, n3, n7, object[n8 + 13], 5, -1444681467);
            n7 = this.b(n7, n2, n6, n3, object[n8 + 2], 9, -51403784);
            n3 = this.b(n3, n7, n2, n6, object[n8 + 7], 14, 1735328473);
            n6 = this.b(n6, n3, n7, n2, object[n8 + 12], 20, -1926607734);
            n2 = this.c(n2, n6, n3, n7, object[n8 + 5], 4, -378558);
            n7 = this.c(n7, n2, n6, n3, object[n8 + 8], 11, -2022574463);
            n3 = this.c(n3, n7, n2, n6, object[n8 + 11], 16, 1839030562);
            n6 = this.c(n6, n3, n7, n2, object[n8 + 14], 23, -35309556);
            n2 = this.c(n2, n6, n3, n7, object[n8 + 1], 4, -1530992060);
            n7 = this.c(n7, n2, n6, n3, object[n8 + 4], 11, 1272893353);
            n3 = this.c(n3, n7, n2, n6, object[n8 + 7], 16, -155497632);
            n6 = this.c(n6, n3, n7, n2, object[n8 + 10], 23, -1094730640);
            n2 = this.c(n2, n6, n3, n7, object[n8 + 13], 4, 681279174);
            n7 = this.c(n7, n2, n6, n3, object[n8], 11, -358537222);
            n3 = this.c(n3, n7, n2, n6, object[n8 + 3], 16, -722521979);
            n6 = this.c(n6, n3, n7, n2, object[n8 + 6], 23, 76029189);
            n2 = this.c(n2, n6, n3, n7, object[n8 + 9], 4, -640364487);
            n7 = this.c(n7, n2, n6, n3, object[n8 + 12], 11, -421815835);
            n3 = this.c(n3, n7, n2, n6, object[n8 + 15], 16, 530742520);
            n6 = this.c(n6, n3, n7, n2, object[n8 + 2], 23, -995338651);
            n2 = this.d(n2, n6, n3, n7, object[n8], 6, -198630844);
            n7 = this.d(n7, n2, n6, n3, object[n8 + 7], 10, 1126891415);
            n3 = this.d(n3, n7, n2, n6, object[n8 + 14], 15, -1416354905);
            n6 = this.d(n6, n3, n7, n2, object[n8 + 5], 21, -57434055);
            n2 = this.d(n2, n6, n3, n7, object[n8 + 12], 6, 1700485571);
            n7 = this.d(n7, n2, n6, n3, object[n8 + 3], 10, -1894986606);
            n3 = this.d(n3, n7, n2, n6, object[n8 + 10], 15, -1051523);
            n6 = this.d(n6, n3, n7, n2, object[n8 + 1], 21, -2054922799);
            n2 = this.d(n2, n6, n3, n7, object[n8 + 8], 6, 1873313359);
            n7 = this.d(n7, n2, n6, n3, object[n8 + 15], 10, -30611744);
            n3 = this.d(n3, n7, n2, n6, object[n8 + 6], 15, -1560198380);
            n6 = this.d(n6, n3, n7, n2, object[n8 + 13], 21, 1309151649);
            n2 = this.d(n2, n6, n3, n7, object[n8 + 4], 6, -145523070);
            n7 = this.d(n7, n2, n6, n3, object[n8 + 11], 10, -1120210379);
            n3 = this.d(n3, n7, n2, n6, object[n8 + 2], 15, 718787259);
            n6 = this.d(n6, n3, n7, n2, object[n8 + 9], 21, -343485551);
            n2 = bg.a_m1_PIIRI(n2, n9);
            n6 = bg.a_m1_PIIRI(n6, n10);
            n3 = bg.a_m1_PIIRI(n3, n11);
            n7 = bg.a_m1_PIIRI(n7, n12);
            n8 += 16;
        }
        return String.valueOf(this.a_m0_PIRLjava_lang_String_) + this.a_m0_PIRLjava_lang_String_+ this.a_m0_PIRLjava_lang_String_+ this.a_m0_PIRLjava_lang_String_;
    
  }
}

JavaRegistry.set("bg", bg);
JavaRegistry.set("bg", bg);
try { if (typeof bg.__clinit === 'function') bg.__clinit(); } catch (e) { console.warn('clinit bg', e); }

globalThis.bg = bg;
