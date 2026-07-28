/** Transpiled from cv */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cv extends (JavaRegistry.get("br") || class {}) {
  h = null;
  static a = null;
  cv(n2, by2, byArray) {

        /*super*/(n2, byArray, '\u0000');
        de.a_f0_Ljava_lang_String_ = "";
        this.h = by2;
        switch {
            case 0: 
            case 2: {
                this.a_m0_PIRV(this.l + 2);
                return;
            }
            case 1: {
                this.a_m0_PIRV(this.l + 5);
            }
        }
    
  }
  a_m0_PLcm_RV(cm2) {

        let cv2 = this;
        if (cv.a == null) {
            switch {
                case 0: 
                case 2: {
                    cv.a = new x(8);
                    break;
                }
                case 1: {
                    cv.a = new x(25);
                }
            }
        }
        if (cv.a == null) {
            return;
        }
        super.a_m2_PLcm_RV;
        let n2 = (this).e + 4;
        let n3 = this.j - 8;
        let n4 = this.f_f1_I + 38;
        n.a_m6_PLcm_IIIIIIRV(cm2, n2 + 89, n4 - 11, 20, 12, 0x660000, 0xBD0000);
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m2_PLcm_IIABIIRV(cm2, n2 + 100, n4 - 11, cv.a.a_m2_PRAB(), 0, 1);
        switch {
            case 0: 
            case 2: {
                n.a_m6_PLcm_IIIIIIRV(cm2, n2, n4, n3, 17, 0x660000, 0xBD0000);
                cm2.a_m2_PIRV(0xFFFFFF);
                cm2.a_m5_PLjava_lang_String_IIIRV(cv.a.a_m0_PRLjava_lang_String_(), rpg.a.c, n4 + 1, 17);
                return;
            }
            case 1: {
                let n5 = n4;
                n.a_m6_PLcm_IIIIIIRV(cm2, n2, n4, n3, 59, 0x660000, 0xBD0000);
                cm2.a_m2_PIRV(0xFFFFFF);
                let string = cv.a.a_m0_PRLjava_lang_String_();
                n3 = string.length;
                while (n3 > 0) {
                    while (bn.a_m0_PRLbn_().a_m1_PLjava_lang_String_IIRI(string, 0, n3) >= d.i_f1_I) {
                        --n3;
                    }
                    let string2 = string.substring(0, n3);
                    cm2.a_m5_PLjava_lang_String_IIIRV(string2, (this).e + 5, n5, 20);
                    n5 += 15;
                    string = string.substring;
                    n3 = string.length;
                }
                break;
            }
        }
    
  }
  a_m1_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3) && cv.a.a_m0_PRLjava_lang_String_().length == 0) {
            if (this.h == 2) {
                de.j();
                i.a_m0_PRLi_().c_m0_PRV();
                c.a_m1_PZRV;
            } else {
                cv.a = null;
                this.a_f1_Ln_.c_m0_PRV();
            }
            let true = null;
        }
        if (n2 == 8 && n3 != 53) {
            let bl2 = null;
            let string = null;
            let string2 = string = cv.a.a_m0_PRLjava_lang_String_();
            if (string == null) {
                bl2 = false;
            } else if (string2.length != 0) {
                for (let i2 = 0; i2 < string2.length; ++i2) {
                    let string3 = string2.substring(i2, i2 + 1);
                    let c2 = string3.charAt(0);
                    if (c2 > '/' && c2 < ':' || c2 > '@' && c2 < '[') continue;
                    if (c2 > '`' && c2 < '{') {
                        bl2 = false;
                    } else {
                        if (c2 == ' ') continue;
                        if (c2 > '\u3130' && c2 < '\u3164') {
                            bl2 = false;
                        } else {
                            if (c2 > '\uabff' && c2 < '\ud789') continue;
                            bl2 = false;
                        }
                    }
                    break;
                }
            } else {
                bl2 = true;
            }
            if {
                if (this.h == 0 || this.h == 2) {
                    if ((string = string.trim()).length > 5) {
                        this.b_f1_Ln_ = new br(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(73), '\u0000');
                    } else if (string.length > 0) {
                        de.a_f0_Ljava_lang_String_ = string;
                        cv.a = null;
                        this.a_f1_Ln_.a_m3_PBBRV(10, this.a_f2_B);
                    }
                } else {
                    de.a_f0_Ljava_lang_String_ = string;
                    cv.a = null;
                    this.a_f1_Ln_.a_m3_PBBRV(10, this.a_f2_B);
                }
            } else {
                this.b_f1_Ln_ = new br(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(62), '\u0000');
            }
            let true = null;
        }
        this.d_m0_PRV();
        return cv.a.a_m1_PIIRZ(n2, n3);
    
  }
}

JavaRegistry.set("cv", cv);
JavaRegistry.set("cv", cv);
try { if (typeof cv.__clinit === 'function') cv.__clinit(); } catch (e) { console.warn('clinit cv', e); }

globalThis.cv = cv;
