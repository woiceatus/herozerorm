/** Transpiled from co */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class co extends (JavaRegistry.get("cd") || class {}) {
  static a = null;
  static b_f0_S = null;
  b_f1_Z = null;
  co(s2, s3, bl2) {

        /*super*/(s2, s3, co.b_f0_S, co.a, av.a_f0_Lav_.a_f1_Ls_, true);
        this.c_m0_PBRV(1);
        this.a_m1_PBRV(8);
        this.b_f1_Z = bl2;
    
  }
  a_m0_PRV() {

        this.h_f0_B = this.b_f1_B == 8 ? 8 : (this.b_f1_B == 6 ? 10 : 9);
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  l() {

        switch {
            case 8: {
                if (!this.j()) break;
                this.a_m1_PBRV(1);
                return;
            }
            case 6: {
                if (!this.j()) break;
                this.a_m1_PBRV(7);
                return;
            }
            default: {
                if (!this.b_f1_Z || this.a_f1_S != 0) break;
                let alArray = cd.a_m24_PRALal_();
                for (let i2 = 0; i2 < 2; ++i2) {
                    if (alArray[i2] == null || this.a_m4_PLdu_RI(alArray[i2]) > this.i) continue;
                    this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), 0);
                    this.a_f1_S = this.j_f0_B;
                }
            }
        }
    
  }
  a_m1_PIIRV(n2, n3) {

        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.c_f0_B, this.c_f1_I, n2, n3);
    
  }
  c(n2) {

    
  }
  g() {

        this.m();
    
  }
  b(by2, n2) {

    
  }
  a_m2_PBBIRV(by2, by3, n2) {

    
  }
  a_m3_PBIRZ(by2, n2) {

        let true = null;
    
  }
  a_m4_PBRZ(by2) {

        let true = null;
    
  }
  a_m5_PIRI(n2) {

        super.a_m2_PIRI;
        let n2 = null;
    
  }
}

JavaRegistry.set("co", co);
JavaRegistry.set("co", co);
try { if (typeof co.__clinit === 'function') co.__clinit(); } catch (e) { console.warn('clinit co', e); }

globalThis.co = co;
