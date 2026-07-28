/** Transpiled from cf */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cf extends (JavaRegistry.get("b") || class {}) {
  a_f0_AB = null;
  b_f0_Ljava_lang_String_ = null;
  b_f1_Lcg_ = null;
  c_f0_Lcg_ = null;
  d = null;
  static a_f1_Ljava_lang_String_ = null;
  static c_f1_Ljava_lang_String_ = null;
  static e = true;
  constructor(n2) {
    super();

        /*super*/(n2, 3);
        this.a_f2_B = 0;
        if (cf.a_f1_Ljava_lang_String_ != null && !jEquals(cf.a_f1_Ljava_lang_String_, "off")) {
            if (jEquals(cf.a_f1_Ljava_lang_String_, "")) {
                this.a_f0_AB = rpg.d.G;
            } else {
                this.a_f0_AB = rpg.d.F;
                this.b_f0_Ljava_lang_String_ = RPGHeroEx.a.getAppProperty("MoreGames_WAP_URI").trim();
            }
        }
        n2 = this;
        try {
            (n2).c_f0_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/sks/no.png");
            (n2).b_f1_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/sks/yes.png");
            (n2).d = cg.a_m4_PLjava_lang_String_RLcg_("/sks/back.png");
            return;
        }
        catch (exception) {
            return;
        }
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.a_f2_B = 6;
            this.a_f1_Ln_.c_m0_PRV();
            let cf2 = this;
            try {
                cf2.c_f0_Lcg_ = null;
                cf2.b_f1_Lcg_ = null;
                cf2.d = null;
                System.gc();
            }
            catch (exception) {}
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (!jEquals(cf.a_f1_Ljava_lang_String_, "")) {
                let string = this.b_f0_Ljava_lang_String_;
                try {
                    RPGHeroEx.a.platformRequest;
                    RPGHeroEx.a.notifyDestroyed();
                }
                catch (exception) {
                    console.log("excpeton occured" + exception);
                    RPGHeroEx.a.notifyDestroyed();
                }
                finally {
                    RPGHeroEx.a.notifyDestroyed();
                }
            } else {
                let true = null;
            }
            let true = null;
        }
        let true = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        a.a_m3_PLcm_ZRV(cm2, true);
        let n2 = a.d;
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n2 + 3, this.a_f0_AB, 0, 1);
        if (jEquals(cf.a_f1_Ljava_lang_String_, "")) {
            cm2.a_m1_PLcg_IIIRV(this.d, a.a_f0_I, a.b_f0_I, 40);
            return;
        }
        cm2.a_m1_PLcg_IIIRV(this.b_f1_Lcg_, 0, a.b_f0_I, 36);
        cm2.a_m1_PLcg_IIIRV(this.c_f0_Lcg_, a.a_f0_I, a.b_f0_I, 40);
    
  }
  a_m2_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == 3 && by3 == 0) {
            RPGHeroEx.a.a("Tj" + (this.a_f2_B + 1) + "URL");
        }
    
  }
  static a_m3_PRV() {

        cf.a_f1_Ljava_lang_String_ = RPGHeroEx.a.getAppProperty("MoreGames_Impl");
        if (cf.a_f1_Ljava_lang_String_ == null) {
            cf.a_f1_Ljava_lang_String_ = "off";
            return;
        }
        if (!((cf.a_f1_Ljava_lang_String_ = cf.a_f1_Ljava_lang_String_.toLowerCase(jEquals()), "") || jEquals(cf.a_f1_Ljava_lang_String_, "wap") || jEquals(cf.a_f1_Ljava_lang_String_, "wapstatic"))) {
            cf.a_f1_Ljava_lang_String_ = "off";
            return;
        }
        cf.c_f1_Ljava_lang_String_ = RPGHeroEx.a.getAppProperty("MoreGames_WAP_URI");
        if (jEquals(cf.a_f1_Ljava_lang_String_, "wap") && (!cf.e || cf.c_f1_Ljava_lang_String_ == null || cf.c_f1_Ljava_lang_String_.trim(jEquals(), ""))) {
            cf.a_f1_Ljava_lang_String_ = "off";
        }
        if (jEquals(cf.a_f1_Ljava_lang_String_, "wapstatic") && (!cf.e || cf.c_f1_Ljava_lang_String_ == null || cf.c_f1_Ljava_lang_String_.trim(jEquals(), ""))) {
            cf.a_f1_Ljava_lang_String_ = "";
        }
    
  }
}

JavaRegistry.set("cf", cf);
JavaRegistry.set("cf", cf);
try { if (typeof cf.__clinit === 'function') cf.__clinit(); } catch (cf.e) { console.warn('clinit cf', cf.e); }

globalThis.cf = cf;
