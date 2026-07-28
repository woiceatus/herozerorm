/** Transpiled from ci */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ci extends (JavaRegistry.get("cd") || class {}) {
  ci(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_, false);
        this.b_f1_B = 1;
        this.c_f1_I = -1;
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB(0);
    
  }
  a_m0_PBRV(by2) {

        if (by2 == 6 || by2 == 7) {
            super.a_m1_PBRV;
        }
    
  }
  c() {

        if (this.b_f1_B == 6) {
            ++this.c_f1_I;
        }
        this.t();
        if (this.b_f1_B == 6) {
            this.y();
        }
    
  }
  n() {

    
  }
  a_m1_PLal_IRV(al2, n2) {

        super.a_m16_PLal_IRV(al2, n2);
        this.c_f1_I = this.f_f0_I - this.f_f0_I * this.c_m0_PRI() / this.d_m0_PRI() - 1;
    
  }
  a_m2_PIIRV(n2, n3) {

        switch {
            case 0: 
            case 1: 
            case 2: 
            case 3: 
            case 4: {
                this.a_f1_Ls_.a_m2_PBBIIIRI(0, 1, this.c_f1_I, n2, n3);
                return;
            }
            case 6: {
                super.a_m3_PIIRV(n2, n3);
            }
        }
    
  }
  b(by2, n2) {

    
  }
  a_m3_PBBIRV(by2, by3, n2) {

    
  }
  a_m4_PBIRZ(by2, n2) {

        let true = null;
    
  }
  a_m5_PBRZ(by2) {

        let true = null;
    
  }
}

JavaRegistry.set("ci", ci);
JavaRegistry.set("ci", ci);
try { if (typeof ci.__clinit === 'function') ci.__clinit(); } catch (e) { console.warn('clinit ci', e); }

globalThis.ci = ci;
