/** Hand-ported from remapped ct.java — display / canvas binder */
import { JavaRegistry } from '../midp/runtime.js';
import { Display } from '../midp/Display.js';
import { f } from './f.js';

export class ct {
  static a_f0_Ljavax_microedition_lcdui_Display_ = null;
  static a_f1_Lct_ = null;
  static a_f2_Ljavax_microedition_lcdui_Canvas_ = null;

  constructor(display) {
    ct.a_f0_Ljavax_microedition_lcdui_Display_ = display;
  }

  static a_m0_PIRI(n2) {
    if (ct.a_f2_Ljavax_microedition_lcdui_Canvas_ != null) {
      return ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getGameAction(n2);
    }
    return n2;
  }

  static a_m1_PLaz_RV(az2) {
    if (f.a_m1_PLaz_RZ(az2)) {
      ct.a_f0_Ljavax_microedition_lcdui_Display_.setCurrent(
        ct.a_f2_Ljavax_microedition_lcdui_Canvas_
      );
    }
  }

  static a_m2_PRLct_() {
    if (ct.a_f1_Lct_ == null) {
      const RPGHeroEx = JavaRegistry.get('rpg.RPGHeroEx');
      ct.a_f1_Lct_ = new ct(Display.getDisplay(RPGHeroEx.a));
      ct.a_f2_Ljavax_microedition_lcdui_Canvas_ = new f();
    }
    return ct.a_f1_Lct_;
  }
}

JavaRegistry.set('ct', ct);
globalThis.ct = ct;
