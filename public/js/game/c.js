/** Transpiled from c */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class c extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_Z = false;
  static a_f1_Ljava_io_InputStream_ = null;
  static a_f2_Ljava_io_DataInputStream_ = null;
  static a_f3_Ljava_io_OutputStream_ = null;
  static a_m0_PRZ() {

        let false = null;
    
  }
  static a_m1_PZRV(bl2) {

    
  }
  static a_m2_PBABRAB(by2, byArray) {

        let n2 = 5;
        if (byArray != null) {
            n2 = 5 + byArray.length;
        }
        let byArray2 = new Int8Array(n2);
        let byArray3 = byArray2;
        byArray2[0] = (n2 >>> 24);
        byArray3[1] = (n2 >> 16);
        byArray3[2] = (n2 >> 8);
        byArray3[3] = n2;
        byArray3[4] = by2;
        if (byArray != null) {
            System.arraycopy(byArray, 0, byArray3, 5, byArray.length);
        }
        let byArray3 = null;
    
  }
}

JavaRegistry.set("c", c);
JavaRegistry.set("c", c);
try { if (typeof c.__clinit === 'function') c.__clinit(); } catch (e) { console.warn('clinit c', e); }

globalThis.c = c;
