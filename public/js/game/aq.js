/** Transpiled from aq */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class aq extends (JavaRegistry.get("de") || class {}) {
  g = false;
  static f = 5;
  c = new Int8Array([0, 2, 31, 29, 1, 30]);
  aq(n2) {

        /*super*/(n2, aq.f);
        this.a_f2_B = 0;
        this.f_m1_PRV();
        let bl2 = false;
        let aq2 = this;
        if {
            aq2.a_f2_B = 0;
            aq2.g = false;
            aq.f = 5;
            if {
                aq.f = (aq.f + 1);
            }
            aq2.b_f2_B = aq.f;
        }
        queueMicrotask(() => { try { let __r =this; (__r.run?__r.run():__r()); } catch{console.error;} });
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            de.j();
            i.a_m0_PRLi_().c_m0_PRV();
            bq.e();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            switch {
                case 3: {
                    this.b_f1_Ln_ = new bt(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(70), 11, false, true);
                    break;
                }
                case 4: {
                    let byArray = c.a_m2_PBABRAB(50, null);
                    this.a_m1_PABZZRV(byArray, true, false);
                    break;
                }
                case 0: {
                    this.b_f1_Ln_ = let aw = null;
                    break;
                }
                case 1: {
                    this.b_f1_Ln_ = new dd(this, null);
                    break;
                }
                case 2: {
                    this.b_f1_Ln_ = let dl = null;
                    break;
                }
                case 5: {
                    this.b_f1_Ln_ = new bt(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(86), 13, false, true);
                }
            }
            let true = null;
        }
        return this.c_m2_PIIRZ(n2, n3);
    
  }
  a_m1_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (de.e && by2 == 3) {
            if (by3 == 0) {
                let i2 = i.a_m0_PRLi_();
                i2.c_m0_PRV();
                i2.b_f1_Ln_ = let aq = null;
                return;
            }
            de.j();
            i.a_m0_PRLi_().c_m0_PRV();
            return;
        }
        if (by2 == 13) {
            if (by3 == 0) {
                let byArray = c.a_m2_PBABRAB(61, null);
                this.a_m1_PABZZRV(byArray, true, false);
                return;
            }
        } else if (by2 == 11) {
            if (this.a_f2_B == 3 && by3 == 0) {
                let byArray = new Int8Array(2 + .length + 2 + .length);
                let s2 = .length;
                rpg.g.a_m5_PSABIRV(s2, byArray, 0);
                System.arraycopy(null, 0, byArray, 2, s2);
                by3 = (s2 + 2);
                s2 = .length;
                rpg.g.a_m5_PSABIRV(s2, byArray, by3);
                by3 = (by3 + 2);
                System.arraycopy(null, 0, byArray, by3, s2);
                byArray = c.a_m2_PBABRAB(60, byArray);
                this.a_m1_PABZZRV(byArray, true, false);
                return;
            }
            if (this.a_f2_B == 5 && by3 == 0) {
                let byArray = c.a_m2_PBABRAB(62, null);
                this.a_m1_PABZZRV(byArray, true, false);
                return;
            }
        } else if (by2 == 10) {
            let byArray = de.a_f0_Ljava_lang_String_.getBytes();
            let byArray2 = new Int8Array(1 + byArray.length);
            let byArray3 = byArray2;
            byArray2[0] = byArray.length;
            System.arraycopy(byArray, 0, byArray3, 1, byArray3[0]);
            byArray3 = c.a_m2_PBABRAB(3, byArray3);
            this.a_m1_PABZZRV(byArray3, true, false);
        }
    
  }
  a_m2_PLcm_RV(cm2) {

        a.a_m3_PLcm_ZRV(cm2, true);
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.d - 58, rpg.e.b_f0_Lch_.a_m0_PIRAB(9), 0, 1);
        for (let by2 = 0; by2 < aq.f; by2 = (by2 + 1)) {
            let n2 = this.b_ + 16 + by2 * 13;
            n.a_m6_PLcm_IIIIIIRV(cm2, this.a_ + 3, n2, 113, 12, this.a_f2_B == by2 ? 0x660000 : 3550755, this.a_f2_B == by2 ? 0xBD0000 : 7027456);
            cm2.a_m2_PIRV(this.a_f2_B == by2 ? 0xFFFFFF : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n2, rpg.e.h_f0_Lch_.a_m0_PIRAB(this.c[by2]), 0, 1);
        }
    
  }
}

JavaRegistry.set("aq", aq);
JavaRegistry.set("aq", aq);
try { if (typeof aq.__clinit === 'function') aq.__clinit(); } catch (e) { console.warn('clinit aq', e); }

globalThis.aq = aq;
