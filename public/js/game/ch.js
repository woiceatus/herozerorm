/** Transpiled from ch */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ch extends (JavaRegistry.get("Object") || class {}) {
  a_f0_ALjava_lang_Object_ = null;
  a_f1_S = null;
  ch(object) {

        object = e.a_m6_PLjava_lang_String_RAB((object).concat(".tdf"));
        let n2 = 0;
        ++n2;
        this.a_f1_S = (object[0] & 0xFF);
        this.a_f0_ALjava_lang_Object_ = new Object[this.a_f1_S];
        for (let i2 = 0; i2 < this.a_f1_S; ++i2) {
            let n3 = (object[n2++] & 0xFF) << 8;
            this.a_f0_ALjava_lang_Object_[i2] = new Int8Array(n3 += object[n2++) & 0xFF];
            System.arraycopy(object, n2, this.a_f0_ALjava_lang_Object_[i2], 0, n3);
            n2 += n3;
        }
    
  }
  a_m0_PIRAB(n2) {

        return this.a_f0_ALjava_lang_Object_[n2];
    
  }
  /* unparsed: public final byte[][] a_m1_PIIRAAB(int n2, int n3) {
        */
  /* unparsed: public final byte[][] a_m2_PIIIRAAB(int n2, int n3, int n4)  */
  /* unparsed: public final byte[][] a_m3_PIIIIRAAB(int n2, int n3, int n4, */
  /* unparsed: public final byte[][] a_m4_PAIRAAB(int[] nArray) {
        b */
}

JavaRegistry.set("ch", ch);
JavaRegistry.set("ch", ch);
try { if (typeof ch.__clinit === 'function') ch.__clinit(); } catch (e) { console.warn('clinit ch', e); }

globalThis.ch = ch;
