/** Transpiled from cj */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cj extends (JavaRegistry.get("p") || class {}) {
  a = null;
  cj(n2, as2) {

        /*super*/(n2, 0, 0, 0);
        this.a = as2;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3) || n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
        }
        let true = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        this.a_m8_PLcm_ZZABZRV(cm2, false, true, e.b_f0_Lch_.a_m0_PIRAB(29), false);
        this.b_m1_PLcm_IILas_RV(cm2, this.a_, this.b_ + 13 + 1, this.a);
    
  }
}

JavaRegistry.set("cj", cj);
JavaRegistry.set("cj", cj);
try { if (typeof cj.__clinit === 'function') cj.__clinit(); } catch (e) { console.warn('clinit cj', e); }

globalThis.cj = cj;
