/** Transpiled from at */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class at extends (JavaRegistry.get("Object") || class {}) {
  a_f0_B = null;
  a_f1_I = null;
  b_f0_I = null;
  c = null;
  b_f1_B = null;
  a_f2_Z = null;
  b_f2_Z = null;
  constructor(by2) {
    super();

        this.a_f0_B = by2;
        this.a_f1_I = 1;
        this.c = 1;
        this.b_f1_B = 0;
        this.b_f0_I = 0;
        this.b_f2_Z = true;
    
  }
  /* skip field: abstract void a_m0_PIIRV(int var1, int var2); */
  a_m1_PIIZRV(n2, n3, bl2) {

        if (this.b_f2_Z != bl2 || this.a_f2_Z) {
            return;
        }
        this.a_m0_PIIRV(n2, n3);
        if (di.d_f3_B != 5) {
            this.a_m2_PRV();
        }
    
  }
  a_m2_PRV() {

        ++this.b_f0_I;
        if (this.c != -1 && this.b_f0_I >= this.a_f1_I * this.c) {
            this.a_f2_Z = true;
        }
    
  }
  static a_m3_PBRZ(by2) {

        switch {
            case 1: 
            case 2: 
            case 3: 
            case 4: {
                let true = null;
            }
        }
        let false = null;
    
  }
}

JavaRegistry.set("at", at);
JavaRegistry.set("at", at);
try { if (typeof at.__clinit === 'function') at.__clinit(); } catch (e) { console.warn('clinit at', e); }

globalThis.at = at;
