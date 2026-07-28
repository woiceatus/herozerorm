/** Transpiled from bo */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bo extends (JavaRegistry.get("p") || class {}) {
  a_f0_Lch_ = new ch("/t/n");
  a_f1_AB = null;
  f = 0;
  bo(n2) {

        /*super*/(n2, 28, 4, 7);
        this.b_ = a.b_f0_I < 240 ? a.b_f0_I - 174 - 33 >> 1 : this.b_;
        this.b_ = this.b_ < 0 ? 0 : this.b_;
    
  }
  a_m0_PLas_RZ(as2) {

        let true = null;
    
  }
  a_m1_PLcm_Lbj_RV(cm2, bj2) {

        let n2 = this.a_ + 70;
        let n3 = this.b_ + 17;
        cm2.a_m2_PIRV(15723216);
        n.c_m3_PLcm_IIIIRV(cm2, n2 - 1, n3 - 1, 106, 61);
        for (let i2 = 0; i2 < 28; ++i2) {
            let as2 = bj2.a_m1_PIRLas_;
            let n4 = i2 / 7;
            let n5 = i2 - n4 * 7;
            n5 = n2 + n5 * 15;
            n4 = n3 + n4 * 15;
            if (as2 != null) {
                let bl2 = this.a_m0_PLas_RZ;
                if (!bl2) {
                    cm2.b_m1_PIRV(127);
                }
                as2.a_m9_PLcm_IIRV(cm2, n5, n4);
                if (!bl2) {
                    cm2.b_m1_PIRV(255);
                }
                if (as2.c > 1) {
                    n.b_m6_PLcm_IIIIIRV(cm2, as2.c, n5 + 14 - 1, n4 + 14 - 7, 8, 0);
                }
                if (!as2.c()) continue;
                cm2.a_m2_PIRV(0xFF0000);
                cm2.d_m0_PIIIIRV(n5, n4, 13, 13);
                continue;
            }
            cm2.a_m2_PIRV(0);
            n.c_m3_PLcm_IIIIRV(cm2, n5, n4, 14, 14);
        }
    
  }
  b_m0_PLcm_RV(cm2) {

        let n2 = this.a_f2_B / 7;
        let n3 = this.a_f2_B % 7;
        n3 = this.a_ + 70 + n3 * 15;
        n2 = this.b_ + 17 + n2 * 15;
        b_m1_PLcm_IIRV(cm2, n3, n2);
    
  }
  static b_m1_PLcm_IIRV(cm2, n2, n3) {

        cm2.a_m2_PIRV(0x660000);
        cm2.d_m0_PIIIIRV(n2, n3 - 1, 13, 15);
        cm2.e(n2 - 1, n3, n2 - 1, n3 + 14 - 1);
        cm2.e(n2 + 14, n3, n2 + 14, n3 + 14 - 1);
        cm2.a_m2_PIRV(0xFF0000);
        cm2.e(n2, n3 + 1, n2, n3 + 14 - 1 - 1);
        cm2.e(n2 + 14 - 1, n3 + 1, n2 + 14 - 1, n3 + 14 - 1 - 1);
        cm2.e(n2 + 1, n3, n2 + 14 - 2, n3);
        cm2.e(n2 + 1, n3 + 14 - 1, n2 + 14 - 2, n3 + 14 - 1);
    
  }
  a_m2_PLcm_BBZRV(cm2, n2, by2, bl2) {

        let n3 = this.b_ + 16;
        let byArray = new Int8Array(1);
        let byArray2 = byArray;
        byArray[0] = 65;
        for (let i2 = 0; i2 < n2; ++i2) {
            cm2.a_m2_PIRV(i2 == by2 ? (bl2 ? 0xFF0000 : 15723216) : 3550755);
            let n4 = n3 + i2 * 10 + 3;
            cm2.a_m4_PIIIIRV(this.a_ + 50, n4, 11, 12);
            cm2.e(this.a_ + 11 + 50, n4 + 1, this.a_ + 11 + 50, n4 + 9 - 2);
            cm2.a_m2_PIRV(!bl2 && i2 == by2 ? 3550755 : 0xFFFFFF);
            ac.a_m0_PLcm_IIABIRV(cm2, this.a_ + 2 + 50, n4 - 2, byArray2, 0);
            byArray2[0] = (byArray2[0] + 1);
        }
    
  }
  static a_m3_PLcm_IIABIRV(cm2, n2, n3, byArray, n4) {

        let n5 = 3 + n4 * 15;
        cm2.b_m0_PIIIIRV(n2 + 10, n3 + (n5 + 174 >> 1), d.e_ - 20, n5);
        n.b_m4_PLcm_IIIIRV(cm2, n2 + 10, n3 + (n5 + 174 >> 1), d.e_ - 20, n5);
        cm2.a_m2_PIRV(0);
        cm2.d_m0_PIIIIRV(n2 + 10, n3 + (n5 + 174 >> 1), d.e_ - 20 - 1, n5 - 1);
        cm2.a_m2_PIRV(0xFFFFFF);
        cm2.d_m0_PIIIIRV(n2 + 10 + 1, n3 + (n5 + 174 >> 1) + 1, d.e_ - 20 - 3, n5 - 3);
        cm2.a_m2_PIRV(0);
        if (n4 < 2) {
            ac.a_m2_PLcm_IIABIIRV(cm2, n2 + (d.e_ >> 1), n3 + (n5 + 174 >> 1) + 2, byArray, 0, 1);
            return;
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, n2 + 10 + 5, n3 + (n5 + 174 >> 1) + 2, byArray, 0, 4);
    
  }
}

JavaRegistry.set("bo", bo);
JavaRegistry.set("bo", bo);
try { if (typeof bo.__clinit === 'function') bo.__clinit(); } catch (e) { console.warn('clinit bo', e); }

globalThis.bo = bo;
