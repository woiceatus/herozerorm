/** Transpiled from cn */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cn extends (JavaRegistry.get("l") || class {}) {
  cn(n2) {

        /*super*/(n2, 2);
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            if (this.b_f1_Ln_ != null) {
                this.c_m0_PRV();
            } else {
                this.a_f1_Ln_.a_f2_B = -2;
                this.a_f1_Ln_.c_m0_PRV();
            }
            let true = null;
        }
        if (n2 == 8 || n3 == 53 || n3 == -6) {
            let cn2 = this;
            switch {
                case 0: {
                    cn2.b_f1_Ln_ = let cc = null;
                    break;
                }
                case 1: {
                    if (!di.e_f0_Z) {
                        let byArray = e.a_f1_Lch_.a_m0_PIRAB(28);
                        if {
                            byArray = g.a_m0_PABABRAB(d.t, byArray);
                            di.i_f0_Z = false;
                            b.a_m5_PRZ();
                        }
                        cn2.b_f1_Ln_ = new br(cn2, byArray, '\u0000');
                        (cn2.b_f1_Ln_).e = true;
                        break;
                    }
                    di.k();
                    cn2.b_f1_Ln_ = let aw = null;
                    break;
                }
                default: {
                    let false = null;
                }
            }
            cn2.a_f3_Z = true;
            let true = null;
        }
        this.c_m2_PIIRZ(n2, n3);
        let true = null;
    
  }
  a_m1_PBBRV(by2, by3) {

        if (by2 == 3 && by3 == 0) {
            di.e_f0_Z = true;
            b.a_m5_PRZ();
            di.k();
            this.c_m0_PRV();
            this.b_f1_Ln_ = let aw = null;
            return;
        }
        this.c_m0_PRV();
    
  }
  a_m2_PLcm_RV(cm2) {

        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        this.a_m3_PLcm_IIZRI(cm2, 71, f.h, false);
    
  }
}

JavaRegistry.set("cn", cn);
JavaRegistry.set("cn", cn);
try { if (typeof cn.__clinit === 'function') cn.__clinit(); } catch (e) { console.warn('clinit cn', e); }

globalThis.cn = cn;
