/** Transpiled from ao */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ao extends (JavaRegistry.get("cl") || class {}) {
  a_f0_AB = new Int8Array([2, 1, 1, 1, 1, 1, 1]);
  b = new Int8Array([2, 1, 1, 4]);
  a_f1_Z = false;
  constructor(do_) {
    super();

        super;
    
  }
  a_m0_PBIRZ(by2, n2) {

        let n3 = -1;
        let by3 = n2 == this.a_f0_AB[by2] ? 1 : 0;
        let n4 = 0;
        let ao2 = this;
        let by4 = 1;
        switch {
            case 0: 
            case 1: 
            case 2: {
                if (by3 != 0) {
                    this.a_f1_Z = this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, false, false, false);
                    if {
                        this.c_m1_PBRV;
                    } else {
                        let false = null;
                    }
                }
                let true = null;
            }
            case 3: {
                if (!this.a_f1_Z) {
                    this.a_f0_Ldo_.b_m4_PIRV(0);
                    let true = null;
                }
                this.a_m1_PIRV;
                if (by3 != 0) {
                    n4 = this.c();
                    this.a_m4_PBRV;
                    this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, n4 != 0, false, false);
                }
                let true = null;
            }
            case 4: {
                this.a_m1_PIRV;
                if (by3 != 0) {
                    let cd2 = this.a_f0_Ldo_.b_m9_PRLcd_();
                    if (cd2 != null) {
                        n3 = this.a_m7_PBZRI(4, false);
                        this.a_f0_Ldo_.a_m10_PLcd_BIBBZZZRZ(cd2, by2, n3, this.a_f0_Ldo_.c_f0_B, 22, this.c(), false, false);
                        for (by3 = 1; by3 <= 8; by3 = (by3 + 1)) {
                            let bl2 = this.c();
                            n4 = 22;
                            let n5 = n3;
                            let by5 = by3;
                            let by6 = by2;
                            let cd3 = cd2;
                            let ao3 = this;
                            let bl3 = (cd3 = cd3.a_m12_PBRLcd_) != null ? ao3.a_f0_Ldo_.a_m10_PLcd_BIBBZZZRZ(cd3, by6, n5, ao3.a_f0_Ldo_.c_f0_B, 22, bl2, false, false) : false;
                        }
                    }
                    this.a_m4_PBRV;
                }
                let true = null;
            }
            case 5: {
                if (by3 != 0) {
                    this.a_m4_PBRV;
                    this.a_f0_Ldo_.e_m2_PBRZ(3);
                } else if (n2 == 2 && this.a_f0_Ldo_.a_m16_PRLcd_() != null) {
                    this.a_f0_Ldo_.f_m0_PBRV(6);
                }
                let true = null;
            }
            case 6: {
                this.a_m1_PIRV;
                if (by3 == 0) break;
                this.a_m4_PBRV;
                n3 = this.a_m7_PBZRI(5, false);
                n4 = this.c();
            }
        }
        if (by3 != 0) {
            if (this.a_f0_Ldo_.a_m11_PBIBZZZRZ(by2, n3, by4, n4 != 0, false, false)) {
                this.a_m4_PBRV;
            } else {
                let false = null;
            }
        }
        let true = null;
    
  }
  a_m1_PIRV(n2) {

        if (n2 == 2) {
            this.a_f0_Ldo_.m_m1_PIRV(5);
            return;
        }
        if (n2 == 4) {
            this.a_f0_Ldo_.m_m1_PIRV(-3);
        }
    
  }
  a_m2_PRB() {

        return 1;
    
  }
  a_m3_PBRZ(by2) {

        return this.a_m8_PRZ();
    
  }
  c() {

        return g.a_m7_PIIRI(1, 100) < this.c_m0_PBRI(11);
    
  }
  a_m4_PBRV(by2) {

        let by3 = 8;
        switch {
            case 3: 
            case 4: 
            case 6: {
                by3 = 2;
            }
        }
        bq.a_m2_PBRV;
    
  }
  b(by2) {

        return by2 != 4;
    
  }
}

JavaRegistry.set("ao", ao);
JavaRegistry.set("ao", ao);
try { if (typeof ao.__clinit === 'function') ao.__clinit(); } catch (e) { console.warn('clinit ao', e); }

globalThis.ao = ao;
