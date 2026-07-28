/** Transpiled from ap */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ap extends (JavaRegistry.get("cx") || class {}) {
  static a = null;
  ap(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2);
        this.p = 3;
        this.b_f1_AB = new Int8Array([0]);
        this.c_f1_AB[0] = 10;
        if (this.c_f0_S == 111 || this.c_f0_S == 113) {
            ap.a = this;
            this.i = true;
        }
        this.c_f1_AB[0] = 10;
    
  }
  a_m0_PIRZ(n2) {

        let bl2 = false;
        switch {
            case 0: {
                bl2 = n2 == 4 || n2 == 7;
                break;
            }
            case 1: {
                bl2 = n2 == 4;
            }
        }
        let bl2 = null;
    
  }
  a_() {

        let false = null;
    
  }
  b() {

        switch {
            case 0: {
                if (this.c_f1_I == 4) {
                    this.l();
                    return;
                }
                this.m();
                return;
            }
            case 1: {
                this.a_m1_PBBZRV(this.a_f1_Ldo_.s, this.a_f1_Ldo_.t, false);
            }
        }
    
  }
  a_m1_PRV() {

        if (this.b_f1_B == 6) {
            this.z();
            return;
        }
        switch {
            case 3: {
                switch {
                    case 0: {
                        this.h_f0_B = 2;
                        break;
                    }
                    case 1: {
                        this.h_f0_B = 4;
                    }
                }
                break;
            }
            case 4: {
                this.h_f0_B = 3;
                break;
            }
            case 100: {
                this.h_f0_B = 5;
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
  y() {

        if (this.j()) {
            if (cw.a == null || cw.a.b_m0_PRZ()) {
                if (cw.a != null) {
                    cw.a.g_m0_PRV();
                    cw.a = null;
                }
                ap.a = null;
                this.g_m0_PRV();
                return;
            }
            this.a_m1_PBRV(100);
        }
    
  }
}

JavaRegistry.set("ap", ap);
JavaRegistry.set("ap", ap);
try { if (typeof ap.__clinit === 'function') ap.__clinit(); } catch (e) { console.warn('clinit ap', e); }

globalThis.ap = ap;
