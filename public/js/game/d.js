/** Transpiled from d */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class d extends (JavaRegistry.get("cl") || class {}) {
  a = new Int8Array([1, 2, 2, 1, 0, 0, 0, 2, 0, 6]);
  b = new Int8Array([0, 0, 1, 0]);
  constructor(do_) {
    super();

        super;
    
  }
  a_m0_PBIRZ(by2, n2) {

        let by3 = n2 == this.a[by2] ? 1 : 0;
        switch {
            case 3: {
                if (n2 == 3) {
                    by3 = 1;
                }
            }
            case 0: 
            case 1: 
            case 2: {
                if (by3 == 0) break;
                if (this.a_m9_PBBIZZZRZ(this.b[by2], by2, -1, false, false, false)) {
                    this.c_m1_PBRV;
                    break;
                }
                let false = null;
            }
            case 4: {
                this.a_m2_PIRV;
                n2 = by3;
                let d2 = this;
                if (n2 != 0) {
                    let cd2 = d2.a_f0_Ldo_.a_m16_PRLcd_();
                    return d2.a_m1_PLcd_BBRZ(cd2, 4, d2.a_m4_PRB());
                }
                let true = null;
            }
            case 5: {
                if (by3 == 0) break;
                this.a_m6_PBRV;
                by2 = this.a_m5_PBIZRI(5, this.a_f0_Ldo_.f_m2_PBRI(0), false);
                this.a_f0_Ldo_.c_m5_PIRV;
                break;
            }
            case 6: {
                this.a_m2_PIRV;
                n2 = by3;
                let d3 = this;
                if (n2 != 0) {
                    let cd3 = d3.a_f0_Ldo_.a_m16_PRLcd_();
                    if (d3.a_m1_PLcd_BBRZ(cd3, 6, 3)) {
                        cd3.c_m5_PIRV(30);
                    } else {
                        let false = null;
                    }
                }
                let true = null;
            }
            case 7: {
                if (by3 == 0) break;
                this.a_m6_PBRV;
                this.a_f0_Ldo_.k_m1_PRV();
                break;
            }
            case 8: {
                this.a_m2_PIRV;
                n2 = by3;
                let d4 = this;
                if (n2 != 0) {
                    let cd4 = d4.a_f0_Ldo_.a_m16_PRLcd_();
                    if (d4.a_m1_PLcd_BBRZ(cd4, 8, 3)) {
                        by3 = d4.a_f0_Ldo_.c_f0_B;
                        cd4.b_m4_PBRV;
                        d4.a_f0_Ldo_.b_m4_PBRV;
                    } else {
                        let false = null;
                    }
                }
                let true = null;
            }
            case 9: {
                if (by3 == 0) break;
                this.a_m6_PBRV;
                by2 = this.c_m0_PBRI;
                this.a_f0_Ldo_.b_m14_PBBRV(80, by2);
            }
        }
        let true = null;
    
  }
  a_m1_PLcd_BBRZ(cd2, by2, by3) {

        if (cd2 != null) {
            let n2 = null;
            let by4 = by2;
            let d2 = this;
            let bm2 = d2.a_f0_Ldo_.a_m29_PBRLbm_(5);
            let n3 = -2;
            if (bm2 != null) {
                let n4 = d2.a_f0_Ldo_.a_m9_PZRI;
                n3 = n4 + bm2.b + (bm2.c_f0_S - bm2.b) * g.a_m7_PIIRI(1, 100) / 100;
                let n5 = d2.a_m5_PBIZRI(by4, n4, false);
                n3 += n5;
            }
            if (cd2.a_m12_PLdo_BIZBBZZZRZ(this.a_f0_Ldo_, by2, n2 = n3, true, this.a_f0_Ldo_.c_f0_B, by3, true, true, false)) {
                this.a_m6_PBRV;
                let true = null;
            }
        }
        let false = null;
    
  }
  a_m2_PIRV(n2) {

        if (n2 == 0) {
            this.a_m3_PIZRV(3, true);
            return;
        }
        if (n2 == 2) {
            this.a_m3_PIZRV(1, false);
        }
    
  }
  a_m3_PIZRV(n2, bl2) {

        if (this.a_f0_Ldo_.c_f0_B <= 2) {
            di.a_f4_Lg_.c_m4_PIIRV(n2, bl2 ? 0 : 1);
            return;
        }
        di.a_f4_Lg_.b_m4_PIIRV(n2, bl2 ? 0 : 1);
    
  }
  a_m4_PRB() {

        let n2 = 2;
        let bm2 = this.a_f0_Ldo_.a_m29_PBRLbm_(3);
        if (bm2 != null && bm2.a_f1_B == 3) {
            n2 = 4;
        }
        let n2 = null;
    
  }
  a_m5_PBRZ(by2) {

        switch {
            case 4: 
            case 6: 
            case 8: {
                return this.b_m3_PRZ();
            }
            case 5: 
            case 9: {
                let true = null;
            }
        }
        return this.a_m8_PRZ();
    
  }
  a_m6_PBRV(by2) {

        let n2 = 7;
        switch {
            case 4: 
            case 6: 
            case 8: {
                break;
            }
            case 5: 
            case 7: 
            case 9: {
                n2 = 0;
                break;
            }
            default: {
                let bm2 = this.a_f0_Ldo_.a_m29_PBRLbm_(3);
                if (bm2 == null || bm2.a_f1_B != 2) break;
                n2 = 4;
            }
        }
        bq.a_m2_PBRV(n2);
    
  }
  b(by2) {

        switch {
            case 5: 
            case 7: 
            case 9: {
                let false = null;
            }
        }
        let true = null;
    
  }
}

JavaRegistry.set("d", d);
JavaRegistry.set("d", d);
try { if (typeof d.__clinit === 'function') d.__clinit(); } catch (e) { console.warn('clinit d', e); }

globalThis.d = d;
