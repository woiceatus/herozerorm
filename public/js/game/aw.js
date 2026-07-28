/** Transpiled from aw */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class aw extends (JavaRegistry.get("de") || class {}) {
  aw(n2) {

        /*super*/(n2, 2);
        this.a_f2_B = 0;
        this.f_m1_PRV();
        de.h();
        di.m();
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            switch {
                case 0: {
                    this.b_f1_Ln_ = let w = null;
                    break;
                }
                case 1: {
                    this.b_f1_Ln_ = new dk(this, 0);
                }
            }
            let true = null;
        }
        return this.c_m2_PIIRZ(n2, n3);
    
  }
  a_m1_PLcm_RV(cm2) {

        a.a_m3_PLcm_ZRV(cm2, true);
        let n2 = f.e;
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.d - 64, rpg.e.b_f0_Lch_.a_m0_PIRAB(9), 0, 1);
        for (let by2 = 0; by2 < 2; by2 = (by2 + 1)) {
            let n3 = this.b_ + 25 + by2 * 17;
            n.a_m6_PLcm_IIIIIIRV(cm2, this.a_, n3, n2, 15, this.a_f2_B == by2 ? 0x660000 : 3550755, this.a_f2_B == by2 ? 0xBD0000 : 7027456);
            cm2.a_m2_PIRV(this.a_f2_B == by2 ? 0xFFFFFF : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n3, rpg.e.h_f0_Lch_.a_m0_PIRAB(by2 + 18), 0, 1);
        }
        n.a_m0_PLcm_IRV(cm2, 3);
    
  }
}

JavaRegistry.set("aw", aw);
JavaRegistry.set("aw", aw);
try { if (typeof aw.__clinit === 'function') aw.__clinit(); } catch (e) { console.warn('clinit aw', e); }

globalThis.aw = aw;
