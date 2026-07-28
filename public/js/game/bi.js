/** Transpiled from bi */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bi extends (JavaRegistry.get("af") || class {}) {
  Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 13);
  bi(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2, null);
        this.a_m0_PABRV;
        av.a_m6_PLbi_RV;
    
  }
  a_m0_PRV() {

    
  }
  l() {

    
  }
  a_m1_PBRV(by2) {

    
  }
  a_m2_PIIRV(n2, n3) {

    
  }
  b(by2, n2) {

        av.a_f0_Lav_.b_m0_PBIRV(by2, n2);
    
  }
  a_m3_PBBIRV(by2, by3, n2) {

        av.a_f0_Lav_.a_m2_PBBIRV(by2, by3, n2);
    
  }
  a_m4_PBIRZ(by2, n2) {

        return av.a_f0_Lav_.a_m4_PBIRZ(by2, n2);
    
  }
  a_m5_PLal_IRV(al2, n2) {

        av.a_f0_Lav_.a_m3_PLal_IRV(al2, n2);
    
  }
  h(n2) {

        av.a_f0_Lav_.h_m1_PIRV;
    
  }
  c() {

        return av.a_f0_Lav_.c_m0_PRI();
    
  }
  a_m6_PRZ() {

        return av.a_f0_Lav_.a_m17_PRZ();
    
  }
  a_m7_PLal_IBBRV(al2, n2, by2, by3) {

        super.a_m11_PLal_IBBRV(al2, n2 / 4, by2, by3);
        al2 = this;
        if (!av.a_f0_Lav_.a_m17_PRZ()) {
            this.l = 0;
            av.a_f0_Lav_.l = 2;
            av.a_f0_Lav_.m = by2;
        }
    
  }
  m() {

        this.b_m0_PABRV;
        super.m();
    
  }
}

JavaRegistry.set("bi", bi);
JavaRegistry.set("bi", bi);
try { if (typeof bi.__clinit === 'function') bi.__clinit(); } catch (e) { console.warn('clinit bi', e); }

globalThis.bi = bi;
