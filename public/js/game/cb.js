/** Transpiled from cb */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cb extends (JavaRegistry.get("Object") || class {}) {
  a_f0_AB = null;
  a_f1_AS = null;
  a_f2_S = 0;
  a_f3_Lm_ = null;
  constructor(db2) {
    super();

    
  }
  a(byArray, n2, n3) {

        this.a_f2_S = byArray[n2++];
        if (this.a_f2_S < 0) {
            this.a_f2_S = (256 + this.a_f2_S);
        }
        this.a_f1_AS = new Int16Array(this.a_f2_S + 1);
        let n4 = 0;
        this.a_f1_AS[0] = 0;
        for (let s2 = 0; s2 < this.a_f2_S; s2 = (s2 + 1)) {
            let s3 = (byArray[n2] < 0 ? 256 + byArray[n2] : byArray[n2]);
            if (n3 > 1) {
                s3 = (s3 + ((byArray[++n2] < 0 ? 256 + byArray[n2] : byArray[n2]) << 8));
            }
            this.a_f1_AS[s2 + 1] = n4 = ((n4 + s3));
            ++n2;
        }
        this.a_f0_AB = null;
        if (n4 > 0) {
            this.a_f0_AB = new Int8Array(n4);
            System.arraycopy(byArray, n2, this.a_f0_AB, 0, n4);
            n2 += n4;
        }
        this.a_f3_Lm_ = m.a_m1_PABRLm_;
        let n2 = null;
    
  }
}

JavaRegistry.set("cb", cb);
JavaRegistry.set("cb", cb);
try { if (typeof cb.__clinit === 'function') cb.__clinit(); } catch (e) { console.warn('clinit cb', e); }

globalThis.cb = cb;
