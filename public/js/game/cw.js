/** Transpiled from cw */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cw extends (JavaRegistry.get("cx") || class {}) {
  static a = null;
  Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 19);
  cw(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2);
        this.o = 3;
        this.b_f1_AB = new Int8Array([0]);
        if (this.c_f0_S == 112 || this.c_f0_S == 114) {
            cw.a = this;
        }
    
  }
  a_m0_PRV() {

        if (this.b_f1_B == 6) {
            this.z();
            return;
        }
        switch {
            case 3: {
                switch {
                    case 0: {
                        this.h_f0_B = 4;
                        break;
                    }
                    case 2: {
                        this.h_f0_B = 3;
                        break;
                    }
                    case 3: {
                        this.h_f0_B = 4;
                    }
                }
                break;
            }
            case 4: {
                this.h_f0_B = 2;
                break;
            }
            case 100: {
                this.h_f0_B = 9;
                break;
            }
            case 2: {
                this.h_f0_B = 1;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  a_m1_PIRZ(n2) {

        let bl2 = false;
        switch {
            case 0: {
                bl2 = n2 == 4;
                break;
            }
            case 2: {
                bl2 = n2 == 4;
                break;
            }
            case 3: {
                bl2 = n2 % 3 == 1;
            }
        }
        let bl2 = null;
    
  }
  b() {

        switch {
            case 0: {
                new t(3, this.h, (this).i, this.a_f1_Ls_, 7, false, this, this.a_m21_PRS(), this.d_f0_B, (this).i);
                return;
            }
            case 2: {
                let by2 = Math.abs(this.Q[0] - this.s);
                let n2 = Math.abs(this.Q[1] - this.s);
                let n3 = Math.abs(this.Q[2] - this.t);
                let n4 = Math.abs(this.Q[3] - this.t);
                let by3 = by2 > n2 ? this.Q[0] : this.Q[1];
                let by4 = n3 > n4 ? this.Q[2] : this.Q[3];
                this.a_m1_PBBZRV(by3, by4, true);
                return;
            }
            case 3: {
                new t(13, this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_, 5, true, this, this.a_m21_PRS(), this.d_f0_B, 3);
            }
        }
    
  }
  a_() {

        if (this.a_f2_B == 2) {
            this.a_f2_B = 3;
            this.a_m1_PBRV(3);
            let true = null;
        }
        let false = null;
    
  }
  y() {

        if (this.j()) {
            if (ap.a == null || ap.a.b_m0_PRZ()) {
                if (ap.a != null) {
                    ap.a.g_m0_PRV();
                    ap.a = null;
                }
                cw.a = null;
                this.g_m0_PRV();
                return;
            }
            this.a_m1_PBRV(100);
        }
    
  }
}

JavaRegistry.set("cw", cw);
JavaRegistry.set("cw", cw);
try { if (typeof cw.__clinit === 'function') cw.__clinit(); } catch (e) { console.warn('clinit cw', e); }

globalThis.cw = cw;
