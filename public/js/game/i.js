/** Transpiled from i */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class i extends (JavaRegistry.get("n") || class {}) {
  static a = null;
  static a_m0_PRLi_() {

        if (i.a == null) {
            i.a = new i();
        }
        let i.a = null;
    
  }
  static a_m1_PRV() {

        if (i.a != null) {
            i.a = null;
        }
        di.a_f12_AAB = null;
        System.gc();
        Runtime.getRuntime().gc();
    
  }
  i() {

        /*super*/(null, 8);
        this.a_f2_B = di.i_f1_B > 0 ? 1 : 0;
        this.f_m1_PRV();
    
  }
  a_m2_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            while (this.a_f2_B == 1 && di.i_f1_B <= 0 || this.a_f2_B == 6 && cf.jEquals(a_f1_Ljava_lang_String_, "off")) {
                if (n2 == 5 || n3 == 54) {
                    this.a_f2_B = (this.a_f2_B + 1);
                    continue;
                }
                this.a_f2_B = (this.a_f2_B - 1);
            }
            this.f_m1_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            n3 = this.a_f2_B;
            let i2 = this;
            switch {
                case 0: 
                case 1: {
                    i2.b_f1_Ln_ = new au(i2, n3);
                    break;
                }
                case 3: {
                    i2.b_f1_Ln_ = new bd(i2, false);
                    break;
                }
                case 4: {
                    i2.b_f1_Ln_ = new r(i2, false);
                    break;
                }
                case 5: {
                    i2.b_f1_Ln_ = let j = null;
                    break;
                }
                case 6: {
                    i2.b_f1_Ln_ = let cf = null;
                    break;
                }
                case 2: {
                    i2.b_f1_Ln_ = new au(i2, n3);
                    break;
                }
                case 7: {
                    let byArray = d.u;
                    v0.b_f1_Ln_ = new bt(i2, byArray, 3, false, true);
                }
            }
            let true = null;
        }
        let false = null;
    
  }
  a_m3_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == 3 && by3 == 0) {
            switch {
                case 7: {
                    RPGHeroEx.a.destroyApp;
                }
            }
        }
    
  }
  a_m4_PLcm_RV(cm2) {

        bs.a_m0_PRLbs_();
        rpg.a.c_m1_PLcm_RV;
        if (!this.b_f3_Z) {
            this.b_m0_PLcm_RV;
        }
    
  }
  b_m0_PLcm_RV(cm2) {

        let n2 = null;
        if (this.e_f0_B < 8) {
            n2 = 30 * this.e_f0_B;
            cm2.a_m3_PIIIRV(n2, n2, n2);
        } else {
            cm2.a_m2_PIRV(0xFFFFFF);
        }
        n2 = rpg.a.d + (rpg.a.d >> 1) - 3;
        if (e.a_f6_Lcg_ == null) {
            e.a_f6_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/imgbox.png");
        }
        cm2.a_m1_PLcg_IIIRV(e.a_f6_Lcg_, rpg.a.c, n2, 17);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n2 + 3, e.c_f0_Lch_.a_m0_PIRAB, 0, 1);
    
  }
  b_m1_PRV() {

        if (this.e_f0_B > 8) {
            this.b_f3_Z = false;
        }
    
  }
}

JavaRegistry.set("i", i);
JavaRegistry.set("i", i);
try { if (typeof i.__clinit === 'function') i.__clinit(); } catch (e) { console.warn('clinit i', e); }

globalThis.i = i;
