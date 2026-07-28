/** Transpiled from by */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class by extends (JavaRegistry.get("cq") || class {}) {
  by(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2);
        switch {
            case 106: 
            case 129: {
                this.c_f0_Z = true;
                this.g = 0;
                break;
            }
            case 107: 
            case 130: {
                this.d_f0_Z = true;
                this.g = 1;
                break;
            }
            case 108: 
            case 131: {
                this.e = true;
                this.g = 2;
            }
        }
        this.Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 11);
        this.a_m0_PABRV;
        cs.a_m0_PLaf_BRV(this, this.g);
    
  }
  a_m0_PRV() {

        switch {
            case 0: 
            case 1: 
            case 2: 
            case 4: 
            case 5: {
                this.h_f0_B = (this.b_m0_PRZ() ? 2 : 0);
                break;
            }
            case 6: {
                this.h_f0_B = 1;
                break;
            }
            case 7: {
                this.h_f0_B = 2;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  z() {

        this.h_f0_B = 3;
        this.a_m2_PBRV(3);
    
  }
  A() {

        this.h_f0_B = (this.g + (this.b_m0_PRZ() ? 13 : 4));
        this.a_m2_PBRV(3);
    
  }
  a_m1_PIRZ(n2) {

        if (this.h_f0_B == 3 && n2 == 8) {
            g.a_m16_PIRV(1);
            new t((4 + this.g), (this.h + 5), ((this).i + 5), this.a_f1_Ls_, 12, true, this, this.a_m21_PRS(), 0, 0);
        }
        let false = null;
    
  }
  b() {

    
  }
  a_m2_PBRV(by2) {

        super.a_m1_PBRV;
        if (this.b_f1_B == 6) {
            this.i = true;
            for (by2 = 1; by2 < 3; by2 = (by2 + 1)) {
                cs.a[(this.g + by2) % 3].a_m5_PLaf_RV;
            }
        }
    
  }
}

JavaRegistry.set("by", by);
JavaRegistry.set("by", by);
try { if (typeof by.__clinit === 'function') by.__clinit(); } catch (e) { console.warn('clinit by', e); }

globalThis.by = by;
