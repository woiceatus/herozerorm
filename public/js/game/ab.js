/** Transpiled from ab */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ab extends (JavaRegistry.get("cl") || class {}) {
  a = new Int8Array([2, 3, 1, 4]);
  b = new Int8Array([0, 3, 1, 1]);
  constructor(do_) {
    super();

        super;
    
  }
  a_m0_PBIRZ(by2, n2) {

        switch {
            case 4: {
                if (n2 >= 2 && n2 <= 5) {
                    this.a_f0_Ldo_.c_m4_PZRV;
                } else if (n2 == 7 || n2 == 9) {
                    di.a_f4_Lg_.c_m4_PIIRV(2, n2);
                    this.a_f0_Ldo_.c_m4_PZRV;
                }
                if (n2 == 7) {
                    n2 = this.a_m7_PBZRI(4, false);
                    this.a_f0_Ldo_.a_m11_PBIBZZZRZ(by2, n2, this.a_m1_PRB(), false, false, false);
                    this.c_m1_PBRV;
                }
                let true = null;
            }
            case 5: {
                let ab2 = this;
                if (n2 != 3) break;
                let cd2 = ab2.a_f0_Ldo_.a_m16_PRLcd_();
                if (cd2 != null && cd2.a_m12_PLdo_BIZBBZZZRZ(ab2.a_f0_Ldo_, 5, -1, false, ab2.a_f0_Ldo_.c_f0_B, ab2.a_m1_PRB(), false, true, false)) {
                    let n3 = ab2.c_m0_PBRI(5);
                    cd2.c_m5_PIRV;
                }
                ab2.c_m1_PBRV(5);
                break;
            }
            case 6: {
                let ab3 = this;
                if (n2 != 4) break;
                n2 = ab3.a_m7_PBZRI(6, false);
                ab3.a_f0_Ldo_.a_m18_PBBBIRZ(6, 3, ab3.a_m1_PRB(), n2);
                ab3.c_m1_PBRV(6);
                break;
            }
            case 7: {
                let ab4 = this;
                if (n2 == 4) {
                    n2 = ab4.c_m0_PBRI(7);
                    for (let by3 = 1; by3 <= 12; by3 = (by3 + 1)) {
                        let cd3 = ab4.a_f0_Ldo_.b_m6_PBRLcd_;
                        if (cd3 == null) continue;
                        if (rpg.g.a_m7_PIIRI(0, 99) < n2) {
                            cd3.g_m1_PIRV(75);
                            cd3.a_m12_PLdo_BIZBBZZZRZ(ab4.a_f0_Ldo_, 7, -1, false, ab4.a_f0_Ldo_.c_f0_B, 1, false, true, false);
                            continue;
                        }
                        cd3.D();
                    }
                    ab4.a_m3_PBRV(7);
                }
                let true = null;
            }
            case 8: {
                let ab5 = this;
                if (n2 == 6) {
                    n2 = ab5.a_f0_Ldo_.f_m2_PBRI(0) / 10;
                    let n4 = ab5.a_m5_PBIZRI(8, n2, false);
                    ab5.a_f0_Ldo_.c_m5_PIRV(-n2);
                    ab5.a_f0_Ldo_.h_m1_PIRV;
                    bs.c_f0_Z = true;
                    ab5.a_m3_PBRV(8);
                } else if (n2 == 4) {
                    g.a_m16_PIRV(1);
                }
                let true = null;
            }
            case 9: {
                if (n2 == 0 || n2 == 2 || n2 == 4) {
                    n2 = this.a_m7_PBZRI(9, false);
                    if (this.a_f0_Ldo_.a_m15_PBIBRZ(9, n2, this.a_m1_PRB())) {
                        this.c_m1_PBRV(9);
                    } else {
                        let false = null;
                    }
                }
                let true = null;
            }
            case 0: 
            case 1: 
            case 2: 
            case 3: {
                if ((n2 = n2 == this.a[by2] ? 1 : 0) == 0) break;
                if (this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, false, false, false)) {
                    this.c_m1_PBRV;
                    break;
                }
                let false = null;
            }
        }
        let true = null;
    
  }
  a_m1_PRB() {

        let n2 = 1;
        let bm2 = this.a_f0_Ldo_.a_m29_PBRLbm_(3);
        if (bm2 != null && bm2.a_f1_B == 0) {
            n2 = 3;
        }
        let n2 = null;
    
  }
  a_m2_PBRZ(by2) {

        switch {
            case 7: 
            case 8: {
                let true = null;
            }
        }
        return this.a_m8_PRZ();
    
  }
  a_m3_PBRV(by2) {

        let by3 = 8;
        switch {
            case 4: {
                by3 = 1;
                break;
            }
            case 5: {
                by3 = 3;
                break;
            }
            case 6: 
            case 7: 
            case 8: {
                by3 = 0;
            }
        }
        bq.a_m2_PBRV;
    
  }
  b(by2) {

        switch {
            case 6: 
            case 7: 
            case 8: 
            case 9: {
                let false = null;
            }
        }
        let true = null;
    
  }
}

JavaRegistry.set("ab", ab);
JavaRegistry.set("ab", ab);
try { if (typeof ab.__clinit === 'function') ab.__clinit(); } catch (e) { console.warn('clinit ab', e); }

globalThis.ab = ab;
