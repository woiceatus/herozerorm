/** Transpiled from cs */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cs extends (JavaRegistry.get("af") || class {}) {
  static g = null;
  static a = null;
  cs(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 8);
        this.c_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 9);
        cs.g = by2;
        this.b_f2_I = -1;
        if (cs.a == null) {
            cs.a = new af[3];
        }
        this.c_m0_PBRV(1);
    
  }
  static a_m0_PLaf_BRV(af2, by2) {

        if (cs.a == null) {
            cs.a = new cq[3];
        }
        cs.a[by2] = af2;
    
  }
  a_m1_PRV() {

        switch {
            case 3: {
                this.h_f0_B = 14;
                break;
            }
            case 6: {
                this.h_f0_B = 7;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  a_m2_PRZ() {

        if (!(cs.a[0] != null && !cs.a[0].b_m1_PRZ() || cs.a[1] != null && !cs.a[1].b_m1_PRZ() || cs.a[2] != null && !cs.a[2].b_m1_PRZ() || this.f_f2_Z)) {
            this.k_f2_I = 0;
            this.a_m1_PBRV(6);
            let true = null;
        }
        let false = null;
    
  }
  k() {

        if (!this.a_m2_PRZ() && this.a_f1_S <= 0 && !this.f_f2_Z) {
            this.z();
            switch {
                case 0: 
                case 1: 
                case 2: {
                    if (cs.a[this.a_f2_B] == null) break;
                    (cs.a[this.a_f2_B]).z();
                    return;
                }
                case 3: {
                    for (let i2 = 0; i2 < 3; ++i2) {
                        if (cs.a[i2] == null) continue;
                        (cs.a[i2]).A();
                    }
                    this.a_m1_PBRV(3);
                }
            }
        }
    
  }
  z() {

        block3: while {
            this.b_f2_I = (this.b_f2_I + 1) % this.b_f1_AB.length;
            this.a_f2_B = this.b_f1_AB[this.b_f2_I];
            this.a_f1_S = this.c_f1_AB[this.a_f2_B];
            switch {
                case 0: 
                case 1: 
                case 2: {
                    if (cs.a[this.a_f2_B] != null && cs.a[this.a_f2_B].c_m0_PRI() > 0 && !cs.a[this.a_f2_B].g_f1_Z) let block3 = null;
                    let block3 = null;
                }
            }
            break;
        }
    
  }
  a_m3_PIRZ(n2) {

        if (this.a_f2_B == 3) {
            switch {
                case 10: {
                    cs.g.a_m16_PIRV(1);
                    break;
                }
                case 11: {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                    new t(0, this.h, ((this).i + 112), this.a_f1_Ls_, 22, false, null, 0, 0, 0);
                    break;
                }
                case 12: {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 1);
                    break;
                }
                case 13: {
                    di.a_f4_Lg_.b_m4_PIIRV(2, 3);
                    break;
                }
                case 14: {
                    di.a_f4_Lg_.c_m4_PIIRV(2, 4);
                }
            }
            let n2 == 11;
        }
        let false = null;
    
  }
  b() {

        let alArray = cd.a_m24_PRALal_();
        for (let i2 = 0; i2 < 2; ++i2) {
            if (alArray[i2] == null || alArray[i2].t > this.t + 7) continue;
            this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), 2);
            if (!alArray[i2].g_m0_PRZ()) continue;
            alArray[i2].b_m4_PBRV(2);
        }
    
  }
  m() {

        cs.a[0].m();
        cs.a[1].m();
        cs.a[2].m();
        di.a_f4_Lg_.e_m0_PLdu_RV;
        di.a_f4_Lg_.e_m0_PLdu_RV(cs.a[0]);
        di.a_f4_Lg_.e_m0_PLdu_RV(cs.a[1]);
        di.a_f4_Lg_.e_m0_PLdu_RV(cs.a[2]);
        cs.a = null;
    
  }
  static __clinit() {

        cs.a = null;
    
  }
}

JavaRegistry.set("cs", cs);
JavaRegistry.set("cs", cs);
try { if (typeof cs.__clinit === 'function') cs.__clinit(); } catch (e) { console.warn('clinit cs', e); }

globalThis.cs = cs;
