/** Transpiled from dn */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dn extends (JavaRegistry.get("cr") || class {}) {
  constructor(by2, by3, n2) {
    super();

        /*super*/(by2, 10, n2);
        this.b_f2_Z = by2 == 45;
    
  }
  a(n2, n3) {

        this.a_f0_Ls_.a_m2_PBBIIIRI(this.c, di.a_f9_Ldo_.c_f0_B, this.b_f0_I % this.a_f1_I, n2, n3);
    
  }
}

JavaRegistry.set("dn", dn);
JavaRegistry.set("dn", dn);
try { if (typeof dn.__clinit === 'function') dn.__clinit(); } catch (e) { console.warn('clinit dn', e); }

globalThis.dn = dn;
