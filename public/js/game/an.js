/** Transpiled from an */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class an extends (JavaRegistry.get("cs") || class {}) {
  an(s2, s3, s4, by2) {

        /*super*/(1, 1, s4, by2);
    
  }
  a_m0_PIIRV(n2, n3) {

    
  }
  a_m1_PIRZ(n2) {

        if (this.a_f2_B == 3) {
            switch {
                case 9: {
                    g.a_m16_PIRV(1);
                    break;
                }
                case 10: {
                    di.a_f4_Lg_.c_m4_PIIRV(5, 2);
                    new t(0, 180, 170, this.a_f1_Ls_, 11, false, null, 0, 0, 0);
                }
            }
            let n2 == 10;
        }
        let false = null;
    
  }
  b() {

        let alArray = cd.a_m24_PRALal_();
        for (let i2 = 0; i2 < 2; ++i2) {
            if (alArray[i2] == null || alArray[i2].t > this.t + 10) continue;
            this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), 2);
            if (!alArray[i2].g_m0_PRZ()) continue;
            alArray[i2].b_m4_PBRV(3);
        }
    
  }
  a_m2_PRV() {

        switch {
            case 3: {
                this.h_f0_B = 4;
                break;
            }
            case 6: {
                this.h_f0_B = 1;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
}

JavaRegistry.set("an", an);
JavaRegistry.set("an", an);
try { if (typeof an.__clinit === 'function') an.__clinit(); } catch (e) { console.warn('clinit an', e); }

globalThis.an = an;
