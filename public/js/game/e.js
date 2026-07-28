/** Transpiled from e */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class e extends (JavaRegistry.get("cx") || class {}) {
  e(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 21);
    
  }
  a_m0_PRV() {

        if (this.b_f1_B == 6) {
            this.z();
            return;
        }
        switch {
            case 3: {
                switch {
                    case 1: {
                        this.h_f0_B = 7;
                        break;
                    }
                    case 4: {
                        this.h_f0_B = 3;
                        break;
                    }
                    case 5: {
                        this.h_f0_B = 4;
                        break;
                    }
                    case 6: {
                        this.h_f0_B = 5;
                        break;
                    }
                    case 7: {
                        this.h_f0_B = 6;
                    }
                }
                break;
            }
            case 4: {
                this.h_f0_B = 2;
                break;
            }
            case 2: {
                this.h_f0_B = 1;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  a_m1_PIRZ(n2) {

        let bl2 = false;
        switch {
            case 1: {
                bl2 = n2 == 4;
                break;
            }
            case 4: 
            case 5: {
                bl2 = n2 == 2 || n2 == 5 || n2 == 7;
                break;
            }
            case 6: {
                bl2 = n2 == 15;
                break;
            }
            case 7: {
                bl2 = n2 >= 3 && n2 % 2 == 0;
            }
        }
        let bl2 = null;
    
  }
  a_() {

        let n2 = (this.b_f2_I + 1) % this.b_f1_AB.length;
        let by2 = this.b_f1_AB[n2];
        let bl2 = false;
        switch {
            case 10: {
                bl2 = true;
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                this.p = 3;
                break;
            }
            case 11: {
                bl2 = true;
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                this.p = 100;
                break;
            }
            case 1: {
                if (this.a_m4_PLdu_RI< 3) {
                    this.b_f2_I = n2;
                    this.a_f2_B = by2;
                    break;
                }
                bl2 = true;
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                this.a_m1_PBRV(3);
                break;
            }
            case 6: 
            case 7: {
                bl2 = true;
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                this.a_m1_PBRV(3);
            }
        }
        let bl2 = null;
    
  }
  b() {

        switch {
            case 1: {
                this.a_m1_PBBZRV(this.a_f1_Ldo_.s, this.a_f1_Ldo_.t, false);
                return;
            }
            case 4: 
            case 5: {
                let bl2 = null;
                this.a_f1_Ldo_.j_f1_I = 0;
                if (this.c_f1_I == 2) {
                    bl2 = this.l();
                } else {
                    let bl3 = bl2 = this.m();
                }
                if (!bl2) break;
                if (this.a_f2_B == 4) {
                    if (!this.a_f1_Ldo_.h_m5_PRZ()) {
                        this.a_f1_Ldo_.g_m4_PIRV(50);
                    }
                    if (!this.a_f1_Ldo_.h_m5_PRZ()) {
                        this.a_f1_Ldo_.c_m11_PIIRV(60, 30);
                    }
                    this.a_f1_Ldo_.a_m1_PLat_RV(new aa(this.a_f1_Ls_, 9));
                    return;
                }
                if (this.a_f2_B != 5) break;
                this.h_m1_PIRV;
                this.a_f1_Ldo_.a_m1_PLat_RV(new aa(this.a_f1_Ls_, 8));
                return;
            }
            case 6: {
                for (let i2 = 0; i2 < 15; ++i2) {
                    let n2 = null;
                    let n3 = this.s + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 7 + -3;
                    if (g.a_m5_PIIRZ(n3, n2 = this.t + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 7 + -3)) continue;
                    new t(13, (n3 << 4), (n2 << 4), this.a_f1_Ls_, 10, true, this, this.a_m21_PRS(), this.d_f0_B, 3);
                }
                return;
            }
            case 7: {
                new t(13, this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_, 11, true, this, this.a_m21_PRS(), this.d_f0_B, 3);
            }
        }
    
  }
  a_m2_PIIRV(n2, n3) {

        switch {
            case 6: {
                rpg.e.a_f4_Ls_.a_m2_PBBIIIRI(0, 1, this.c_f1_I, n2, n3);
                return;
            }
        }
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.h_f0_B == 5 ? 1 : this.c_f0_B, this.c_f1_I, n2, n3);
    
  }
}

JavaRegistry.set("e", e);
JavaRegistry.set("e", e);
try { if (typeof e.__clinit === 'function') e.__clinit(); } catch (e) { console.warn('clinit e', e); }

globalThis.e = e;
