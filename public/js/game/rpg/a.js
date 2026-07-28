/** Transpiled from rpg.a */
import { sleep, JavaRegistry, jEquals } from '../../midp/runtime.js';
import { Image } from '../../midp/Image.js';
import { Graphics } from '../../midp/Graphics.js';
import { Display } from '../../midp/Display.js';
import { Font } from '../../midp/Font.js';
import { RecordStore } from '../../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../../midp/resources.js';

export class a extends (JavaRegistry.get("az") || class {}) {
  static a_f0_I = null;
  static b_f0_I = null;
  static c = null;
  static d = null;
  static e = null;
  static b_f1_B = null;
  static a_f1_Z = null;
  a_f2_B = -1;
  static a_f3_Lcm_ = null;
  static f = null;
  /* skip field: public abstract void a_m0_PRV(); */
  /* skip field: public abstract void b_m0_PRV(); */
  a() {

        a.a_f0_I = ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getWidth();
        a.b_f0_I = ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getHeight();
        a.c = a.a_f0_I >> 1;
        a.d = a.b_f0_I >> 1;
    
  }
  static a_m1_PLcm_RV(cm2) {

        cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
    
  }
  static a_m2_PLcm_IRV(cm2, n2) {

        cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
        cm2.a_m2_PIRV;
        cm2.a_m4_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
    
  }
  static c_m0_PRV() {

        if ((a.b_f1_B = (a.b_f1_B + 5)) < 0 || a.b_f1_B > 100) {
            a.b_f1_B = 100;
        }
    
  }
  static b_m1_PLcm_RV(cm2) {

        let n2 = a.d;
        cm2.b_m1_PIRV(255);
        if (a.e == 3) {
            a_m2_PLcm_IRV(cm2, 0);
            cm2.a_m2_PIRV(14663551);
            ac.a_m0_PLcm_IIABIRV(cm2, a.c - 48, n2 - 18, rpg.e.b_f0_Lch_.a_m0_PIRAB(1), 0);
            cm2.e(a.c - 50, n2, a.c + 48, n2);
            cm2.a_m4_PIIIIRV(a.c - 51, n2 + 1, 2, 2);
            cm2.a_m4_PIIIIRV(a.c + 48, n2 + 1, 2, 2);
            cm2.a_m2_PIRV(10452799);
            cm2.e(a.c - 50, n2 + 5, a.c + 48, n2 + 5);
            cm2.a_m4_PIIIIRV(a.c - 51, n2 + 3, 2, 2);
            cm2.a_m4_PIIIIRV(a.c + 48, n2 + 3, 2, 2);
        }
        if (a.e > 3) {
            cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            cm2.a_m2_PIRV(0);
            cm2.a_m4_PIIIIRV(a.c + 25, n2 - 16, 18, 10);
            cm2.a_m2_PIRV(14663551);
            ac.a_m0_PLcm_IIABIRV(cm2, a.c + 25, n2 - 16, "...".substring(0, 3).getBytes(), 1);
            cm2.a_m2_PIRV(14655295);
            cm2.a_m4_PIIIIRV(a.c - 48, n2 + 2, 95 * a.b_f1_B / 100, 1);
            cm2.a_m2_PIRV(0xFFFF7F);
            cm2.a_m4_PIIIIRV(a.c - 48, n2 + 3, 95 * a.b_f1_B / 100, 1);
        } else if (a.e < 3) {
            cm2.a_m2_PIRV(0);
            let n3 = (a.b_f0_I + 11) / 12;
            for (let i2 = 0; i2 < n3; ++i2) {
                cm2.a_m4_PIIIIRV(0, i2 * 12 + (a.e << 2), a.a_f0_I, 4);
            }
        }
        a.e = a.e < 100 ? ++e : 4;
        cm2.a_m2_PIRV(0xFFFFFF);
        let byArray = rpg.e.a_f1_Lch_.a_m0_PIRAB(15 + a.f);
        ac.a_m1_PLcm_IIIIABRV(cm2, 10, n2 + 10, a.a_f0_I - 20, 0, byArray);
    
  }
  static a_m3_PLcm_ZRV(cm2, bl2) {

        let n2 = null;
        a_m2_PLcm_IRV(cm2, 10159117);
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(0, 0, a.a_f0_I, a.d);
        let n3 = rpg.e.b_f2_Lcg_.a_m5_PRI();
        let n4 = rpg.e.b_f2_Lcg_.b();
        let n5 = a.a_f0_I / n3 + 1;
        n4 = a.b_f0_I - n4 >> 1;
        for (n2 = 0; n2 < n5; ++n2) {
            cm2.a_m1_PLcg_IIIRV(rpg.e.b_f2_Lcg_, n2 * n3, n4, 20);
        }
        if (bl2 && a.b_f0_I >= 200) {
            n3 = rpg.e.k_f1_Lcg_.a_m5_PRI();
            n4 = rpg.e.k_f1_Lcg_.b();
            n5 = a.a_f0_I / n3 + 1;
            for (n2 = 0; n2 < n5; ++n2) {
                if (a.b_f0_I > 240) {
                    cm2.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, n2 * n3, 0, 20);
                    cm2.a_m1_PLcg_IIIRV(rpg.e.c_f2_Lcg_, n2 * n3, n4, 20);
                }
                cm2.a_m1_PLcg_IIIRV(rpg.e.k_f1_Lcg_, n2 * n3, a.b_f0_I - n4, 20);
            }
        }
    
  }
  static c_m1_PLcm_RV(cm2) {

        a_m3_PLcm_ZRV(cm2, false);
        if (rpg.e.e_f2_Lcg_ == null) {
            System.gc();
            Runtime.getRuntime().gc();
            rpg.e.e_f2_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/title.png");
        }
        cm2.a_m1_PLcg_IIIRV(rpg.e.e_f2_Lcg_, a.c, a.d - a.d / 3, 3);
        cm2.a_m2_PIRV(0xFF0000);
    
  }
  static a_m4_PZRV(bl2) {

        if {
            a.e = 3;
        } else {
            a.b_f1_B = 0;
            a.e = 3;
        }
        rpg.c.a_m0_PRLrpg_c_().g();
    
  }
}

JavaRegistry.set("rpg.a", a);
JavaRegistry.set("a", a);
try { if (typeof a.__clinit === 'function') a.__clinit(); } catch (a.e) { console.warn('clinit rpg.a', a.e); }

globalThis.a = a;
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.a = a;
