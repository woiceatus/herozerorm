/** Transpiled from cz */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cz extends (JavaRegistry.get("Object") || class {}) {
  b = 10;
  a_f0_I = 0;
  a_f1_ALm_ = new m[this.b];
  cz(db2) {

    
  }
  a(m2) {

        if (this.a_f0_I >= this.b) {
            let mArray = new m[this.b + 5];
            for (let i2 = 0; i2 < this.b + 5; ++i2) {
                mArray[i2] = i2 < this.a_f0_I ? this.a_f1_ALm_[i2] : null;
            }
            this.a_f1_ALm_ = null;
            this.a_f1_ALm_ = mArray;
            this.b += 5;
        }
        this.a_f1_ALm_[this.a_f0_I++] = m2;
    
  }
}

JavaRegistry.set("cz", cz);
JavaRegistry.set("cz", cz);
try { if (typeof cz.__clinit === 'function') cz.__clinit(); } catch (e) { console.warn('clinit cz', e); }

globalThis.cz = cz;
