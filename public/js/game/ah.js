/** Transpiled from ah */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ah extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_Ljava_lang_String_ = null;
  static a_f1_AB = null;
  static a(string) {

        let n2 = null;
        if (string == null) {
            let false = null;
        }
        try {
            let inputStream = string.getClass().getResourceAsStream;
            if (inputStream != null) {
                ah.a_f1_AB = new Int8Array(inputStream.available());
                inputStream.read;
                inputStream.close();
                let true = null;
            }
        }
        catch (exception) {
            ah.a_f1_AB = null;
            exception
        }
        while (string.startsWith("/")) {
            string = string.substring(1);
        }
        while ((n2 = string.indexOf("/")) > 0) {
            string = string.substring(0, n2) + "." + string.substring(n2 + 1);
        }
        try {
            let recordStore = RecordStore.openRecordStore(string, true);
            if (recordStore.getNumRecords() == 0) {
                try {
                    recordStore.closeRecordStore();
                }
                catch (exception) {}
                let false = null;
            }
            ah.a_f1_AB = recordStore.getRecord(1);
            ah.a_f0_Ljava_lang_String_ = string;
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

JavaRegistry.set("ah", ah);
JavaRegistry.set("ah", ah);
try { if (typeof ah.__clinit === 'function') ah.__clinit(); } catch (e) { console.warn('clinit ah', e); }

globalThis.ah = ah;
