/** Transpiled from dh */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dh extends (JavaRegistry.get("l") || class {}) {
  f = 0;
  dh(n2) {

        /*super*/(n2, 4);
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (this.f != 0) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            if (this.b_f1_Ln_ != null) {
                this.c_m0_PRV();
            } else if {
                di.a_m2_PBBRV(7, 0);
            } else {
                this.a_f1_Ln_.a_f2_B = 7;
                this.a_f1_Ln_.c_m0_PRV();
            }
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            return this.a_m1_PRZ();
        }
        this.c_m2_PIIRZ(n2, n3);
        let true = null;
    
  }
  a_m1_PRZ() {

        switch {
            case 0: {
                if {
                    this.b_f1_Ln_ = new bt(this, ax.a_f1_Lch_.a_m0_PIRAB(18), 3, true, true);
                    break;
                }
                this.b_f1_Ln_ = new br(this, ax.a_f1_Lch_.a_m0_PIRAB(61), 20);
                break;
            }
            case 1: {
                n.c_f1_Z = true;
                this.b_f1_Ln_ = new bd(this, true);
                break;
            }
            case 2: {
                n.c_f1_Z = true;
                this.b_f1_Ln_ = new r(this, true);
                break;
            }
            case 3: {
                let byArray = e.a_f1_Lch_.a_m0_PIRAB(31);
                let dh2 = this;
                this.b_f1_Ln_ = new bt(dh2, byArray, 3, false, true);
                break;
            }
            default: {
                let false = null;
            }
        }
        this.a_f3_Z = true;
        let true = null;
    
  }
  a_m2_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == 3) {
            if (by3 == 0) {
                if (this.a_f2_B == 3) {
                    di.a_m2_PBBRV(7, 1);
                    return;
                }
                this.f = 2;
                this.b_f1_Ln_ = new br(this, ax.a_f1_Lch_.a_m0_PIRAB(17), '\u0000');
                return;
            }
            if {
                di.a_m2_PBBRV(7, 0);
                return;
            }
        } else if (by2 == 20 && ax.f_f1_Z) {
            di.a_m2_PBBRV(7, 0);
        }
    
  }
  a_m3_PLcm_RV(cm2) {

        if (this.f == 2) {
            this.f = 1;
            this.d_m0_PRV();
        } else if (this.f == 1) {
            this.f = 0;
            try {
                di.k();
                this.c_m0_PRV();
                if {
                    di.a_m2_PBBRV(7, 0);
                } else {
                    this.b_f1_Ln_ = new br(this, ax.a_f1_Lch_.a_m0_PIRAB(16), '\u0000');
                }
            }
            catch (exception) {}
        }
        if {
            return;
        }
        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        this.a_m3_PLcm_IIZRI(cm2, 49, rpg.f.h, false);
    
  }
}

JavaRegistry.set("dh", dh);
JavaRegistry.set("dh", dh);
try { if (typeof dh.__clinit === 'function') dh.__clinit(); } catch (e) { console.warn('clinit dh', e); }

globalThis.dh = dh;
