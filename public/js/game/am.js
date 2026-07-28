/** Transpiled from am */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class am extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_ALs_ = null;
  static a_f1_AB = null;
  static b = null;
  static a_m0_PABBABRV(byArray, by2, byArray2) {

        let by3 = byArray[0];
        let byArray3 = e.a_m6_PLjava_lang_String_RAB("/en/cif/h" + (by3 < 10 ? "0" : "") + by3);
        am.a_f0_ALs_[by2] = new s();
        am.a_f0_ALs_[by2].a_m1_PABZRV(byArray3, true);
        byArray3 = new Int8Array(4);
        System.arraycopy(byArray, 1, byArray3, 0, 4);
        let byArray4 = new Int8Array(4);
        System.arraycopy(byArray, 5, byArray4, 0, 4);
        a_m1_PLs_ABABABRV(am.a_f0_ALs_[by2], byArray3, byArray4, byArray2);
        am.a_f0_ALs_[by2].a_f3_AAB = null;
        am.a_f1_AB[by2] = byArray[9];
        am.b[by2] = byArray[10];
    
  }
  static a_m1_PLs_ABABABRV(s2, byArray, byArray2, byArray3) {

        for (let i2 = 0; i2 < byArray2.length; ++i2) {
            if (byArray2[i2] == 0) continue;
            let string = "/en/" + i2 + "/" + (byArray2[i2] < 10 ? "0" : "") + byArray2[i2];
            let byArray4 = null;
            if (byArray[i2] > 0) {
                byArray4 = e.a_m8_PABIRAB(byArray3, byArray[i2] - 1);
            }
            s2.a_m0_PILjava_lang_String_ABRV(i2, string, byArray4);
        }
        s2.a_f3_AAB = null;
    
  }
}

JavaRegistry.set("am", am);
JavaRegistry.set("am", am);
try { if (typeof am.__clinit === 'function') am.__clinit(); } catch (e) { console.warn('clinit am', e); }

globalThis.am = am;
