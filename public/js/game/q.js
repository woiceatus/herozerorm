/** Transpiled from q */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class q extends (JavaRegistry.get("l") || class {}) {
  a_f0_Lch_ = null;
  a_f1_AZ = null;
  static a_f2_Ljava_lang_String_ = null;
  constructor(n2, by2, by3, by4) {
    super();

        /*super*/(n2, 6, 1, 1);
        if (this.a_f0_Lch_ == null) {
            this.a_f0_Lch_ = new ch("/t/jd");
        }
        this.a_f1_AZ = new Array(6).fill(false);
        for (let by5 = 0; by5 < 6; by5 = (by5 + 1)) {
            this.a_f1_AZ[by5] = di.b_m11_PBRZ;
        }
    
  }
  a_m0_PLcm_BRI(cm2, by2) {

        let n2 = null;
        if (by2 >= 6) {
            n2 = this.a_m1_PLcm_ZZZZZRI(cm2, false, false, true, false, true);
            by2 = (by2 - 6);
        } else {
            n2 = this.a_m1_PLcm_ZZZZZRI(cm2, false, false, true, false, false);
        }
        let n3 = this.b_ + 174 - 60;
        cm2.a_m2_PIRV(3550755);
        cm2.a_m4_PIIIIRV(this.a_, n3, d.e_, 60);
        let bl2 = this.a_m1_PBRZ;
        cm2.a_m2_PIRV(0xFFFFFF);
        let n4 = 4;
        if (!bl2) {
            n4 = 2;
        }
        for (let i2 = 0; i2 < n4; ++i2) {
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n3 + 4 + i2 * 14, this.a_f0_Lch_.a_m0_PIRAB(i2 + (bl2 ? by2 << 2 : 24)), 1, 1);
        }
        n.a_m6_PLcm_IIIIIIRV(cm2, this.a_ + (d.e_ - 114) / 2, n3 -= 14, 114, 14, 0x660000, 0x810000);
        n.a_m14_PLcm_IIIIZRV(cm2, this.a_ + (d.e_ - 75) / 2, n3 + 5, 75, 0xFFFFFF, false);
        if {
            cm2.a_m2_PIRV(0xFFFFFF);
        } else {
            cm2.a_m2_PIRV(0x7F7F7F);
        }
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, n3, e.d_f0_Lch_.a_m0_PIRAB(by2 + 1), 1, 1);
        let n2 = null;
    
  }
  a_m1_PBRZ(by2) {

        try {
            q.a_f2_Ljava_lang_String_ = RPGHeroEx.a.getAppProperty("UnlockAllCharacters");
        }
        catch (exception) {
            q.a_f2_Ljava_lang_String_ = null;
        }
        if (q.a_f2_Ljava_lang_String_ != null && jEquals(q.a_f2_Ljava_lang_String_, "true")) {
            let true = null;
        }
        return this.a_f1_AZ[by2];
    
  }
}

JavaRegistry.set("q", q);
JavaRegistry.set("q", q);
try { if (typeof q.__clinit === 'function') q.__clinit(); } catch (e) { console.warn('clinit q', e); }

globalThis.q = q;
