/** Transpiled from dr */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dr extends (JavaRegistry.get("cl") || class {}) {
  a = new Int8Array([2, 2, -1, -1, 0, 10, 1, 0, 0, 1, 0, 3]);
  b = new Int8Array([0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0]);
  constructor(do_) {
    super();

        super;
    
  }
  a_m0_PBIRZ(by2, n2) {

        let bl2 = n2 == this.a[by2];
        block0 : switch {
            case 4: {
                let dr2 = this;
                if (n2 == 0) {
                    dr2.a_m3_PBRV(4);
                    n2 = dr2.a_f0_Ldo_.f_m2_PBRI(0) / 10;
                    dr2.a_f0_Ldo_.c_m5_PIRV(-n2);
                    n2 = dr2.c_m0_PBRI(4);
                    dr2.a_f0_Ldo_.i_m0_PIRV;
                }
                let true = null;
            }
            case 5: {
                let dr3 = this;
                switch {
                    case 3: {
                        dr3.a_m3_PBRV(5);
                    }
                    case 5: 
                    case 7: 
                    case 9: {
                        di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                        break;
                    }
                    case 10: {
                        n2 = dr3.c_m0_PBRI(5);
                        dr3.a_f0_Ldo_.n_m0_PIRV;
                    }
                }
                let true = null;
            }
            case 9: {
                if (n2 == 1) {
                    di.a_f4_Lg_.c_m4_PIIRV(3, 1);
                    break;
                }
                if (n2 != 3) break;
                di.a_f4_Lg_.c_m4_PIIRV(1, 2);
                break;
            }
            case 10: {
                switch {
                    case 0: 
                    case 1: 
                    case 2: 
                    case 3: {
                        bl2 = true;
                    }
                }
                break;
            }
            case 11: {
                switch {
                    case 2: {
                        this.a_m3_PBRV;
                        g.a_m16_PIRV(1);
                        let block0 = null;
                    }
                    case 3: 
                    case 4: 
                    case 5: {
                        di.a_f4_Lg_.a_m3_PLdu_RV(new bz(this.a_f0_Ldo_, 2, 11, -1));
                    }
                }
            }
        }
        if {
            if (this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, false, false, false)) {
                this.c_m1_PBRV;
            } else {
                let false = null;
            }
        }
        let true = null;
    
  }
  a_m1_PRB() {

        return 2;
    
  }
  a_m2_PBRZ(by2) {

        switch {
            case 4: 
            case 5: {
                let true = null;
            }
        }
        return this.a_m8_PRZ();
    
  }
  b_m0_PRB() {

        return (this.a_f0_Ldo_.b_f4_I > 0 ? 6 : 2);
    
  }
  a_m3_PBRV(by2) {

        let by3 = 6;
        switch {
            case 11: {
                by3 = 2;
                break;
            }
            case 4: 
            case 5: {
                by3 = 0;
            }
        }
        bq.a_m2_PBRV;
    
  }
  b_m1_PBRZ(by2) {

        switch {
            case 4: 
            case 5: {
                let false = null;
            }
        }
        let true = null;
    
  }
}

JavaRegistry.set("dr", dr);
JavaRegistry.set("dr", dr);
try { if (typeof dr.__clinit === 'function') dr.__clinit(); } catch (e) { console.warn('clinit dr', e); }

globalThis.dr = dr;
