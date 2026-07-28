/** Transpiled from ck */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ck extends (JavaRegistry.get("cd") || class {}) {
  static a = 0;
  static b_f0_S = null;
  b_f1_I = 0;
  ck(s2, s3, s4) {

        /*super*/(s2, s3, ck.b_f0_S, ck.a, s4, true);
        this.a_m1_PBRV(8);
        this.b_f1_I = 50;
    
  }
  c() {

        --this.b_f1_I;
        if (this.b_f1_I == 0) {
            this.k_f2_I = 0;
            this.a_m1_PBRV(6);
        }
        super.c_m2_PRV();
    
  }
  a_m0_PRV() {

        switch {
            case 8: {
                this.h_f0_B = 10;
                break;
            }
            case 3: {
                this.h_f0_B = 11;
                break;
            }
            case 6: {
                this.h_f0_B = 13;
                break;
            }
            default: {
                this.h_f0_B = 12;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  a_m1_PIIRV(n2, n3) {

        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.h_f0_B == 12 ? this.c_f0_B : 1, this.c_f1_I, n2, n3);
    
  }
  d() {

        if (this.c_f1_I == 1) {
            this.a_m22_PABSZRZ(dy.f, this.a_m21_PRS(), true);
        }
        if (this.j()) {
            this.a_m1_PBRV(1);
        }
    
  }
  g() {

        this.a_m1_PBRV(7);
        di.a_f4_Lg_.d_m2_PLdu_RV;
    
  }
}

JavaRegistry.set("ck", ck);
JavaRegistry.set("ck", ck);
try { if (typeof ck.__clinit === 'function') ck.__clinit(); } catch (e) { console.warn('clinit ck', e); }

globalThis.ck = ck;
