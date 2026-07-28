/** Transpiled from b */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class b extends (JavaRegistry.get("n") || class {}) {
  constructor(n2, by2, by3, by4) {
    super();

        /*super*/(n2, by2, by3, by4);
    
  }
  constructor(n2, by2) {
    super();

        this(n2, by2, 1, 1);
    
  }
  a_m0_PLcm_IIIIIRV(cm2, n2, n3, n4, n5, n6) {

        let n7 = n.a_m13_PIRI;
        let n8 = n2;
        if (n6 == 8) {
            n8 = n2 - (n7 + 7 + n.a_m13_PIRI);
        } else if (n6 == 1) {
            n8 = n2 - (n7 + 7 + n.a_m13_PIRI>> 1);
        }
        n.b_m6_PLcm_IIIIIRV(cm2, n4, n8, n3, 4, 0);
        cm2.b_m0_PIIIIRV(n8 + n7, n3, 7, 7);
        cm2.a_m1_PLcg_IIIRV(e.w, n8 + n7 - 7, n3, 20);
        n.b_m6_PLcm_IIIIIRV(cm2, n5, n8 + n7 + 7, n3, 4, 0);
    
  }
  static a_m1_PLcm_IIRV(cm2, n2, n3) {

        cm2.a_m2_PIRV(0xFFFFFF);
        for (let i2 = 0; i2 < 3; ++i2) {
            cm2.e(n2 + (i2 << 2), n3, n2 + (i2 << 2) + 2, n3);
        }
    
  }
  a_m2_PABRV(byArray) {

        this.b_f1_Ln_ = new br(this, byArray, '\u0000');
    
  }
}

JavaRegistry.set("b", b);
JavaRegistry.set("b", b);
try { if (typeof b.__clinit === 'function') b.__clinit(); } catch (e) { console.warn('clinit b', e); }

globalThis.b = b;
