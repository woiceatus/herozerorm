/** Transpiled from bh */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bh extends (JavaRegistry.get("Object") || class {}) {
  a_f0_AB = null;
  a_f1_I = 0;
  a_f2_Ljava_lang_String_ = null;
  bh(string, by2) {

        this.a_f2_Ljava_lang_String_ = string;
        if (by2 == 1) {
            if (string.equals) {
                this.a_f0_AB = new Int8Array(ah.a_f1_AB.length);
                System.arraycopy(ah.a_f1_AB, 0, this.a_f0_AB, 0, ah.a_f1_AB.length);
                ah.a_f1_AB = null;
                ah.a_f0_Ljava_lang_String_ = null;
                return;
            }
            if (!this.a_m1_PRZ()) {
                throw new IOException("No such file : " + string);
            }
        }
    
  }
  a_m0_PABIIRV(byArray, n2, n3) {

        try {
            this.a_f1_I = this.a_f1_I;
            System.arraycopy(this.a_f0_AB, this.a_f1_I, byArray, 0, n3);
            this.a_f1_I += n3;
            return;
        }
        catch (exception) {
            console.log;
            let return = null;
        }
    
  }
  a_m1_PRZ() {

        let n2 = null;
        let object = null;
        if (this.a_f2_Ljava_lang_String_ == null) {
            let false = null;
        }
        try {
            object = this.a_f2_Ljava_lang_String_.getClass().getResourceAsStream;
            if (object != null) {
                this.a_f0_AB = new Int8Array((object).available());
                (object).read;
                (object).close();
                let true = null;
            }
        }
        catch (exception) {
            object = exception;
            exception
        }
        while (this.a_f2_Ljava_lang_String_.startsWith("/")) {
            this.a_f2_Ljava_lang_String_ = this.a_f2_Ljava_lang_String_.substring(1);
        }
        while ((n2 = this.a_f2_Ljava_lang_String_.indexOf("/")) > 0) {
            this.a_f2_Ljava_lang_String_ = this.a_f2_Ljava_lang_String_.substring(0, n2) + "." + this.a_f2_Ljava_lang_String_.substring(n2 + 1);
        }
        try {
            let recordStore = RecordStore.openRecordStore(this.a_f2_Ljava_lang_String_, true);
            if (recordStore.getNumRecords() == 0) {
                try {
                    recordStore.closeRecordStore();
                }
                catch (exception) {}
                let false = null;
            }
            this.a_f0_AB = recordStore.getRecord(1);
            try {
                recordStore.closeRecordStore();
            }
            catch (exception) {}
            let true = null;
        }
        catch (exception) {
            let exception2 = exception;
            exception
            let false = null;
        }
    
  }
}

JavaRegistry.set("bh", bh);
JavaRegistry.set("bh", bh);
try { if (typeof bh.__clinit === 'function') bh.__clinit(); } catch (e) { console.warn('clinit bh', e); }

globalThis.bh = bh;
