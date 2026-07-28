/** Transpiled from be */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class be extends (JavaRegistry.get("q") || class {}) {
  static a = null;
  static b = null;
  static c = null;
  e_f0_I = 0;
  f = rpg.a.c;
  j = rpg.a.d + 1;
  k = 5;
  e_f1_Z = null;
  be(n2) {

        /*super*/(n2, 6, 1, 1);
        this.b_f3_Z = true;
        be.a = new ch("/t/j");
        be.b = cg.a_m4_PLjava_lang_String_RLcg_("/gunsword.png");
        be.c = cg.a_m4_PLjava_lang_String_RLcg_("/wizard.png");
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = di.j;
            be.a = null;
            be.b = null;
            be.c = null;
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.a_m1_PBRZ) {
                di.b_f4_B = this.a_f2_B;
                di.a_m5_PIRV(0);
                be.b = null;
                be.c = null;
            } else {
                this.b_f1_Ln_ = new br(this, be.a.a_m0_PIRAB(4), '\u0000');
            }
            let true = null;
        }
        if (this.d_m2_PIIRZ(n2, n3)) {
            this.k = 0;
            this.e_f0_I = 0;
            this.e_f1_Z = n.i(n2, n3);
        }
        let true = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        rpg.a.a_m3_PLcm_ZRV(cm2, true);
        di.b_f4_B = this.a_f2_B;
        this.a_m0_PLcm_BRI(cm2, (this.a_f2_B + 6));
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, rpg.f.d, e.i_f0_Lch_.a_m0_PIRAB(4), 0, 1);
        if (this.b_f1_Ln_ != null && this.b_f3_Z) {
            this.b;
        }
        n.a_m0_PLcm_IRV(cm2, 3);
    
  }
  b(cm2) {

        cm2.b_m0_PIIIIRV(this.a_, this.j - 33, d.e_, 44);
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(this.a_, this.j - 33, d.e_, 44);
        let n2 = (this.a_f2_B + this.b_f2_B - 1) % this.b_f2_B;
        let n3 = (this.a_f2_B + 1) % this.b_f2_B;
        if (this.k == 5) {
            e.a_f4_Ls_.a_m2_PBBIIIRI(8, 1, 0, this.f, this.j);
            a_m2_PIIIRV(this.f - 35, this.j - 5, n3);
            a_m2_PIIIRV(this.f + 35, this.j - 5, n2);
            if (this.a_f2_B >= 4) {
                let n4 = this.j;
                let n5 = this.f;
                let n6 = this.e_f0_I;
                n3 = this.a_f2_B;
                let be2 = this;
                if (n3 == 4) {
                    if (!di.g_f0_Z) {
                        a_m2_PIIIRV(n5, n4, n3);
                    } else if (be.b != null) {
                        let n7 = rpg.a.a_f3_Lcm_.a_m6_PRI();
                        n3 = rpg.a.a_f3_Lcm_.b_m2_PRI();
                        let n8 = rpg.a.a_f3_Lcm_.c_m1_PRI();
                        let n9 = rpg.a.a_f3_Lcm_.d_m1_PRI();
                        rpg.a.a_f3_Lcm_.c_m0_PIIIIRV(n5 - 28, n4 - 26, 42, 42);
                        let n10 = 0;
                        let n11 = 0;
                        if (n6 < 3) {
                            n10 = n6 == 0 ? 0 : (n6 == 1 ? 42 : 84);
                        } else if (n6 < 6) {
                            n11 = 42;
                            n10 = n6 == 3 ? 0 : (n6 == 4 ? 42 : 84);
                        } else if (n6 < 8) {
                            n11 = 84;
                            n10 = n6 == 6 ? 0 : 42;
                        } else {
                            n6 = 0;
                        }
                        rpg.a.a_f3_Lcm_.a_m1_PLcg_IIIRV(be.b, n5 - 28 - n10, n4 - 26 - n11, 0);
                        rpg.a.a_f3_Lcm_.b_m0_PIIIIRV(n7, n3, n8, n9);
                    }
                } else if (n3 == 5) {
                    if (!di.h_f0_Z) {
                        a_m2_PIIIRV(n5, n4, n3);
                    } else if (be.c != null) {
                        let n12 = rpg.a.a_f3_Lcm_.a_m6_PRI();
                        n3 = rpg.a.a_f3_Lcm_.b_m2_PRI();
                        let n13 = rpg.a.a_f3_Lcm_.c_m1_PRI();
                        let n14 = rpg.a.a_f3_Lcm_.d_m1_PRI();
                        rpg.a.a_f3_Lcm_.c_m0_PIIIIRV(n5 - 17, n4 - 22, 27, 27);
                        let n15 = 0;
                        let n16 = 0;
                        if (n6 < 3) {
                            n15 = n6 == 0 ? 0 : (n6 == 1 ? 27 : 54);
                        } else if (n6 < 6) {
                            n16 = 27;
                            n15 = n6 == 3 ? 0 : (n6 == 4 ? 27 : 54);
                        } else if (n6 < 8) {
                            n16 = 54;
                            n15 = n6 == 6 ? 0 : 27;
                        } else {
                            n6 = 0;
                        }
                        rpg.a.a_f3_Lcm_.a_m1_PLcg_IIIRV(be.c, n5 - 17 - n15, n4 - 22 - n16, 0);
                        rpg.a.a_f3_Lcm_.b_m0_PIIIIRV(n12, n3, n13, n14);
                    }
                }
                this.e_f0_I = n6 + 1;
            } else {
                this.e_f0_I = e.a_f4_Ls_.a_m2_PBBIIIRI(this.a_f2_B, 1, this.e_f0_I, this.f, this.j) + 1;
            }
        } else if {
            let n17 = (n2 + this.b_f2_B - 1) % this.b_f2_B;
            a_m2_PIIIRV(this.f - 70 + 7 * this.k, this.j - 5, n3);
            a_m2_PIIIRV(this.f + 7 * this.k, this.j - this.k, n2);
            a_m2_PIIIRV(this.f + 35 + 7 * this.k, this.j - 5, n17);
            a_m2_PIIIRV(this.f - 35 + 7 * this.k, this.j - 5 + this.k, this.a_f2_B);
        } else {
            let n18 = (n3 + 1) % this.b_f2_B;
            a_m2_PIIIRV(this.f - 35 - 7 * this.k, this.j - 5, n18);
            a_m2_PIIIRV(this.f - 7 * this.k, this.j - this.k, n3);
            a_m2_PIIIRV(this.f + 70 - 7 * this.k, this.j - 5, n2);
            a_m2_PIIIRV(this.f + 35 - 7 * this.k, this.j - 5 + this.k, this.a_f2_B);
        }
        if (this.k < 5) {
            ++this.k;
        }
    
  }
  static a_m2_PIIIRV(n2, n3, n4) {

        if (n4 >= 6) {
            return;
        }
        if (n4 >= 4) {
            if (n4 == 4) {
                if (be.b != null) {
                    n4 = rpg.a.a_f3_Lcm_.a_m6_PRI();
                    let n5 = rpg.a.a_f3_Lcm_.b_m2_PRI();
                    let n6 = rpg.a.a_f3_Lcm_.c_m1_PRI();
                    let n7 = rpg.a.a_f3_Lcm_.d_m1_PRI();
                    rpg.a.a_f3_Lcm_.c_m0_PIIIIRV(n2 - 28, n3 - 26, 42, 42);
                    rpg.a.a_f3_Lcm_.a_m1_PLcg_IIIRV(be.b, n2 - 112, n3 - 110, 0);
                    rpg.a.a_f3_Lcm_.b_m0_PIIIIRV(n4, n5, n6, n7);
                    return;
                }
            } else if (n4 == 5 && be.c != null) {
                n4 = rpg.a.a_f3_Lcm_.a_m6_PRI();
                let n8 = rpg.a.a_f3_Lcm_.b_m2_PRI();
                let n9 = rpg.a.a_f3_Lcm_.c_m1_PRI();
                let n10 = rpg.a.a_f3_Lcm_.d_m1_PRI();
                rpg.a.a_f3_Lcm_.c_m0_PIIIIRV(n2 - 17, n3 - 22, 27, 27);
                rpg.a.a_f3_Lcm_.a_m1_PLcg_IIIRV(be.c, n2 - 71, n3 - 76, 0);
                rpg.a.a_f3_Lcm_.b_m0_PIIIIRV(n4, n8, n9, n10);
                return;
            }
        } else {
            e.a_f4_Ls_.a_m2_PBBIIIRI((n4 + 4), 1, 0, n2, n3);
        }
    
  }
  static __clinit() {

        be.b = null;
        be.c = null;
    
  }
}

JavaRegistry.set("be", be);
JavaRegistry.set("be", be);
try { if (typeof be.__clinit === 'function') be.__clinit(); } catch (e) { console.warn('clinit be', e); }

globalThis.be = be;
