/** Transpiled from rpg.b */
import { sleep, JavaRegistry, jEquals } from '../../midp/runtime.js';
import { Image } from '../../midp/Image.js';
import { Graphics } from '../../midp/Graphics.js';
import { Display } from '../../midp/Display.js';
import { Font } from '../../midp/Font.js';
import { RecordStore } from '../../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../../midp/resources.js';

export class b extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_ALjava_lang_String_ = new String[]{"HOL.gamedata1", "HOL.gamedata2", "HOL.gamedata3"};
  static b_f0_ALjava_lang_String_ = new String[]{"HOL.item1", "HOL.item2", "HOL.item3"};
  static c = new String[]{"HOL.slot1", "HOL.slot2", "HOL.slot3"};
  /* skip field: private static final byte[][] a_f1_AAB = new byte[][]{{54, 15, 39, 72, 95}, {46, */
  /* skip field: private static final byte[][] b_f1_AAB = new byte[][]{{62, 35, 7, 1, 85, 38, 41} */
  static a_m0_PRV() {

        try {
            di.m();
            return;
        }
        catch (exception) {
            let exception2 = exception;
            let return = null;
        }
    
  }
  static a_m1_PABBRZ(byArray, by2) {

        return b.a_m6_PLjava_lang_String_ABABRZ(b.a_f0_ALjava_lang_String_[by2], byArray, a_f1_AAB[by2]);
    
  }
  static a_m2_PBRAB(by2) {

        return b.a_m7_PLjava_lang_String_ABRAB(b.a_f0_ALjava_lang_String_[by2], a_f1_AAB[by2]);
    
  }
  static b_m0_PABBRZ(byArray, by2) {

        return b.a_m6_PLjava_lang_String_ABABRZ(b.b_f0_ALjava_lang_String_[by2], byArray, b_f1_AAB[by2]);
    
  }
  static b_m1_PBRAB(by2) {

        return b.a_m7_PLjava_lang_String_ABRAB(b.b_f0_ALjava_lang_String_[by2], b_f1_AAB[by2]);
    
  }
  static c_m0_PABBRZ(byArray, by2) {

        return b.a_m6_PLjava_lang_String_ABABRZ(b.c[by2], byArray, b_f1_AAB[by2]);
    
  }
  static c_m1_PBRAB(by2) {

        return b.a_m7_PLjava_lang_String_ABRAB(b.c[by2], b_f1_AAB[by2]);
    
  }
  static a_m3_PABRZ(byArray) {

        return b.a_m6_PLjava_lang_String_ABABRZ("HOL.OPT", byArray, b_f1_AAB[0]);
    
  }
  static a_m4_PRAB() {

        return b.a_m7_PLjava_lang_String_ABRAB("HOL.OPT", b_f1_AAB[0]);
    
  }
  static b_m2_PABRZ(byArray) {

        return b.a_m6_PLjava_lang_String_ABABRZ("HOL.storage", byArray, b_f1_AAB[0]);
    
  }
  static b_m3_PRAB() {

        return b.a_m7_PLjava_lang_String_ABRAB("HOL.storage", b_f1_AAB[0]);
    
  }
  static a_m5_PRZ() {

        let byArray = new Int8Array(16);
        let byArray2 = byArray;
        byArray[0] = ax.g_f1_B;
        byArray2[1] = ax.h_f1_B;
        byArray2[2] = ax.i_f1_B;
        byArray2[3] = ax.h_f0_Z ? 1 : 0;
        byArray2[4] = ax.i_f0_Z ? 1 : 0;
        byArray2[5] = ax.j ? 1 : 0;
        byArray2[6] = eb.f_f2_Z ? 1 : 0;
        byArray2[7] = eb.g;
        byArray2[8] = (di.g_f0_Z ? 1 : 0);
        byArray2[9] = (di.h_f0_Z ? 1 : 0);
        byArray2[10] = (di.i_f0_Z ? 1 : 0);
        byArray2[11] = (di.a_f0_Z ? 1 : 0);
        byArray2[12] = (di.b_f0_Z ? 1 : 0);
        byArray2[13] = (di.c_f0_Z ? 1 : 0);
        byArray2[14] = (di.d_f0_Z ? 1 : 0);
        byArray2[15] = (di.e_f0_Z ? 1 : 0);
        return b.a_m6_PLjava_lang_String_ABABRZ("HOL.gamestore", byArray2, b_f1_AAB[0]);
    
  }
  static b_m4_PRV() {

        let object = b.a_m7_PLjava_lang_String_ABRAB("HOL.gamestore", b_f1_AAB[0]);
        if (object == null) {
            a_m5_PRZ();
            return;
        }
        try {
            ax.g_f1_B = object[0];
            ax.h_f1_B = object[1];
            ax.i_f1_B = object[2];
            ax.h_f0_Z = object[3] == 1;
            ax.i_f0_Z = object[4] == 1;
            ax.j = object[5] == 1;
            eb.f_f2_Z = object[6] == 1;
            eb.g = object[7];
            di.g_f0_Z = object[8] == 1;
            di.h_f0_Z = object[9] == 1;
            di.i_f0_Z = object[10] == 1;
            di.a_f0_Z = object[11] == 1;
            di.b_f0_Z = object[12] == 1;
            di.c_f0_Z = object[13] == 1;
            di.d_f0_Z = object[14] == 1;
            di.e_f0_Z = object[15] == 1;
            return;
        }
        catch (exception) {
            object = exception;
            exception
            a_m5_PRZ();
            return;
        }
    
  }
  static a_m6_PLjava_lang_String_ABABRZ(object, object2, byArray) {

        let bl2 = null;
        let bh2 = null;
        try {
            let n2 = null;
            let byArray2 = new Int8Array(2 + (object2).length + 5);
            let byArray3 = byArray;
            let byArray4 = new Int8Array((object2).length);
            let n3 = 0;
            for (n2 = 0; n2 < (object2).length; ++n2) {
                if (++n3 == byArray3.length) {
                    n3 = 0;
                }
                byArray4[n2] = (object2[n2] ^ byArray3[n3]);
            }
            object2 = byArray4;
            g.a_m5_PSABIRV((byArray2.length - 2), byArray2, 0);
            System.arraycopy(object2, 0, byArray2, 2, (object2).length);
            object2 = b.a_m9_PABIBRAB(object2, (object2).length, byArray[0]);
            byArray2[byArray2.length - 5] = object2[0];
            byArray2[byArray2.length - 4] = object2[1];
            byArray2[byArray2.length - 3] = object2[2];
            byArray2[byArray2.length - 2] = object2[3];
            byArray2[byArray2.length - 1] = object2[4];
            bh2 = new bh(object, 0);
            n2 = byArray2.length;
            let bl3 = false;
            byArray3 = byArray2;
            object2 = bh2;
            if (bh2.a_f2_Ljava_lang_String_ != null) {
                while (object2.a_f2_Ljava_lang_String_.startsWith("/")) {
                    object2.a_f2_Ljava_lang_String_ = object2.a_f2_Ljava_lang_String_.substring(1);
                }
                while ((n3 = object2.a_f2_Ljava_lang_String_.indexOf("/")) > 0) {
                    object2.a_f2_Ljava_lang_String_ = object2.a_f2_Ljava_lang_String_.substring(0, n3) + "." + object2.a_f2_Ljava_lang_String_.substring(n3 + 1);
                }
                if (byArray3 == null || n2 != byArray3.length) {
                    object2.a_f0_AB = new Int8Array(n2);
                    System.arraycopy(byArray3, 0, object2.a_f0_AB, 0, n2);
                } else {
                    object2.a_f0_AB = byArray3;
                }
                try {
                    object = RecordStore.openRecordStore(object2.a_f2_Ljava_lang_String_, true);
                    if (object.getNumRecords() == 0) {
                        object.addRecord(object2.a_f0_AB, 0, object2.a_f0_AB.length);
                    } else {
                        object.setRecord(1, object2.a_f0_AB, 0, object2.a_f0_AB.length);
                    }
                    object.closeRecordStore();
                }
                catch (exception) {
                    object = exception;
                    exception
                }
            }
            object2 = bh2;
            bh2.a_f0_AB = null;
            bh2 = null;
            bl2 = true;
        }
        catch (exception) {
            bl2 = false;
            if (bh2 != null) {
                try {
                    object2 = bh2;
                    bh2.a_f0_AB = null;
                }
                catch (exception2) {}
            }
        }
        catch (throwable) {
            if (bh2 != null) {
                try {
                    object2 = bh2;
                    bh2.a_f0_AB = null;
                }
                catch (exception) {}
            }
            let throwable = null;
        }
        let bl2 = null;
    
  }
  static a_m7_PLjava_lang_String_ABRAB(object, object2) {

        let bh2 = null;
        let object3 = null;
        try {
            bh2 = new bh(object, 1);
            object3 = new Int8Array(2);
            bh2.a_m0_PABIIRV(object3, 0, 2);
            object3 = new Int8Array((object3[0) & 0xFF) << 8 | object3[1] & 0xFF];
            bh2.a_m0_PABIIRV(object3, 0, (object3).length);
            let by2 = object2[0];
            object = object3;
            let n2 = (object3).length;
            let byArray = b.a_m9_PABIBRAB(object, n2 - 5, by2);
            object3 = !(object[n2 - 1] == byArray[4] && object[n2 - 2] == byArray[3] && object[n2 - 3] == byArray[2] && object[n2 - 4] == byArray[1] && object[n2 - 5] == byArray[0]) ? null : b.a_m8_PABABRAB(object3, object2);
        }
        catch (exception) {
            object3 = null;
            if (bh2 == null) let object3 = null;
            try {
                object2 = bh2;
                bh2.a_f0_AB = null;
                let object3 = null;
            }
            catch (exception2) {
                let object3 = null;
            }
        }
        catch (throwable) {
            if (bh2 == null) let throwable = null;
            try {
                object2 = bh2;
                bh2.a_f0_AB = null;
                let throwable = null;
            }
            catch (exception) {}
            let throwable = null;
        }
        try {
            object2 = bh2;
            bh2.a_f0_AB = null;
            let object3 = null;
        }
        catch (exception) {
            let object3 = null;
        }
    
  }
  static a_m8_PABABRAB(object, byArray) {

        if ((object).length <= 0) {
            let null = null;
        }
        let n2 = (object).length - 5;
        let byArray2 = new Int8Array(n2);
        let n3 = 0;
        try {
            for (let i2 = 0; i2 < n2; ++i2) {
                if (++n3 == byArray.length) {
                    n3 = 0;
                }
                byArray2[i2] = (object[i2] ^ byArray[n3]);
            }
        }
        catch (exception) {
            object = exception;
            exception
            let null = null;
        }
        let byArray2 = null;
    
  }
  static a_m9_PABIBRAB(byArray, n2, by2) {

        let byArray2 = new Int8Array([0, 0, 0, 0, 0]);
        let byArray3 = byArray2;
        byArray2[2] = 0;
        for (let i2 = 0; i2 < n2; ++i2) {
            byArray3[0] = (byArray3[0] + byArray[i2]);
            byArray3[1] = (byArray3[1] + (byArray[i2] << 1));
            byArray3[3] = (i2 & 1) == 1 ? (byArray3[3] + byArray[i2]) : (byArray3[3] - byArray3[1]);
            byArray3[4] = (byArray3[4] + (byArray[i2] ^ by2));
        }
        let byArray3 = null;
    
  }
}

JavaRegistry.set("rpg.b", b);
JavaRegistry.set("b", b);
try { if (typeof b.__clinit === 'function') b.__clinit(); } catch (e) { console.warn('clinit rpg.b', e); }

globalThis.b = b;
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.b = b;
