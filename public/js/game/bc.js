/** Transpiled from bc */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bc extends (JavaRegistry.get("cx") || class {}) {
  static b = -1;
  static g = null;
  static e = null;
  bc(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 20);
    
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
                        this.h_f0_B = 8;
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
                        this.h_f0_B = 6;
                        break;
                    }
                    case 7: {
                        this.h_f0_B = 5;
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
                bl2 = n2 == 5 || n2 == 7 || n2 == 10;
                break;
            }
            case 6: {
                bl2 = n2 == 5;
                break;
            }
            case 7: {
                bl2 = n2 == 14;
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
            case 6: {
                this.b_f2_I = n2;
                this.a_f2_B = by2;
                if (bc.e > 0) break;
                bl2 = true;
                this.a_m1_PBRV(3);
                break;
            }
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
                if (this.c_f1_I == 5) {
                    bl2 = this.l();
                } else {
                    let bl3 = bl2 = this.m();
                }
                if (this.a_f2_B != 5 || !bl2) break;
                this.h_m1_PIRV;
                this.a_f1_Ldo_.a_m1_PLat_RV(new aa(this.a_f1_Ls_, 10));
                return;
            }
            case 6: {
                for (let i2 = 0; i2 < 5; ++i2) {
                    new ag(this.h, (this).i, bc.b, bc.g);
                }
                return;
            }
            case 7: {
                for (let i3 = 0; i3 < 15; ++i3) {
                    let n2 = null;
                    let n3 = this.s + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 9 + -4;
                    if (bc.g.a_m5_PIIRZ(n3, n2 = this.t + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 9 + -4)) continue;
                    new t(13, (n3 << 4), (n2 << 4), this.a_f1_Ls_, 9, true, this, this.a_m21_PRS(), this.d_f0_B, 3);
                }
                break;
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
  static __clinit() {

        bc.e = 0;
    
  }
}

JavaRegistry.set("bc", bc);
JavaRegistry.set("bc", bc);
try { if (typeof bc.__clinit === 'function') bc.__clinit(); } catch (bc.e) { console.warn('clinit bc', bc.e); }

globalThis.bc = bc;
