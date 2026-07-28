/** Transpiled from bu */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bu extends (JavaRegistry.get("at") || class {}) {
  constructor(by2) {
    super();

        super;
        let by3 = e.a_f4_Ls_.a_m3_PBRB;
        this.a_f1_I = by3;
        this.c = by3;
    
  }
  constructor(by2, n2) {
    super();

        this;
        this.c = n2;
    
  }
  a_m0_PIIRV(n2, n3) {

        e.a_f4_Ls_.a_m2_PBBIIIRI(this.a_f0_B, 1, this.b_f0_I % this.a_f1_I, n2, n3);
    
  }
  a_m1_PRV() {

        ++this.b_f0_I;
        if (this.b_f0_I >= this.c) {
            this.a_f2_Z = true;
        }
    
  }
}

JavaRegistry.set("bu", bu);
JavaRegistry.set("bu", bu);
try { if (typeof bu.__clinit === 'function') bu.__clinit(); } catch (e) { console.warn('clinit bu', e); }

globalThis.bu = bu;
