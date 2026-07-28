/** Transpiled from eb */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class eb extends (JavaRegistry.get("n") || class {}) {
  f_f0_B = null;
  e = 0;
  f_f1_I = 0;
  j = 0;
  k = null;
  l = null;
  static f_f2_Z = false;
  static g = 0;
  eb(n2, n3, n4, n5, by2) {

        /*super*/(n2, n3, n4, n5);
        this.f_f0_B = by2;
    
  }
  a() {

        return this.a_f2_B;
    
  }
  static f(cm2, n2, n3, n4, n5) {

        cm2.b_m0_PIIIIRV(n2 - 1, n3 - 1, n4 + 2, n5 + 2);
        let n6 = n4 / 20 + 1;
        let n7 = n5 / 20 + 1;
        for (let i2 = 0; i2 < n6; ++i2) {
            for (let i3 = 0; i3 < n7; ++i3) {
                cm2.a_m1_PLcg_IIIRV(rpg.e.u, n2 + i2 * 20, n3 + i3 * 20, 20);
            }
        }
        cm2.a_m2_PIRV(15723216);
        cm2.d_m0_PIIIIRV(n2, n3, n4 - 1, n5 - 1);
        cm2.a_m2_PIRV(3550755);
        cm2.d_m0_PIIIIRV(n2 - 1, n3 - 1, n4 + 1, n5 + 1);
    
  }
}

JavaRegistry.set("eb", eb);
JavaRegistry.set("eb", eb);
try { if (typeof eb.__clinit === 'function') eb.__clinit(); } catch (e) { console.warn('clinit eb', e); }

globalThis.eb = eb;
