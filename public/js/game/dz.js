/** Transpiled from dz */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dz extends (JavaRegistry.get("b") || class {}) {
  f = null;
  g = null;
  a = null;
  b = null;
  h = null;
  i = null;
  dz(n2, by2, by3, by4, by5) {

        /*super*/(n2, 0);
        this.f = by3;
        this.g = by2;
        this.h = by4;
        this.i = by5;
        switch {
            case 0: 
            case 2: {
                this.a = ax.b.a_m0_PIRAB(this.g << 1);
                this.b = ax.b.a_m0_PIRAB((this.g << 1) + 1);
                return;
            }
            case 1: {
                this.a = ax.c.a_m0_PIRAB(this.g << 1);
                this.b = ax.c.a_m0_PIRAB((this.g << 1) + 1);
            }
        }
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3) || n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
        }
        let true = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        let n2 = null;
        this.a_m8_PLcm_ZZABZRV(cm2, false, true, e.b_f0_Lch_.a_m0_PIRAB(30), false);
        cm2.a_m2_PIRV(0);
        let n3 = this.b_ + 12;
        cm2.a_m4_PIIIIRV(this.a_, n3, d.e_, 16);
        let n4 = d.e_ - 70 - 6;
        let n5 = d.e_ - 4;
        let n6 = this.a_ + 2;
        let n7 = this.a_ + 2 + 70 + 2;
        let n8 = n3 + 16 + 1;
        let n9 = n8 + 14 + 3;
        let n10 = n9 + 14 + 3;
        for (n2 = 0; n2 < 2; ++n2) {
            n.c_m3_PLcm_IIIIRV(cm2, n6, n8 + n2 * 17, 70, 14);
            n.c_m3_PLcm_IIIIRV(cm2, n7, n8 + n2 * 17, n4, 14);
            cm2.e(this.a_, n9 - 2 + n2 * 17, this.a_ + d.e_, n9 - 2 + n2 * 17);
        }
        n.c_m3_PLcm_IIIIRV(cm2, this.a_ + 2, n10, n5, 102);
        cm2.a_m2_PIRV(14597755);
        for (n2 = 0; n2 < 2; ++n2) {
            ac.a_m2_PLcm_IIABIIRV(cm2, this.a_ + 2 + 35, n8 + n2 * 17 + 1, ax.a_f1_Lch_.a_m0_PIRAB(n2 + 26), 0, 1);
        }
        cm2.a_m2_PIRV(0xFFFFFF);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n3 + 1, this.a, 0, 1);
        ac.a_m2_PLcm_IIABIIRV(cm2, n7 + (n4 >> 1), n8 + 1, e.d_f0_Lch_.a_m0_PIRAB(7 + this.f), 0, 1);
        ac.a_m1_PLcm_IIIIABRV(cm2, this.a_ + 2 + 10, n10 + 4, n5 - 20, 0, this.b);
        n3 = (44 - this.i + 1) / this.i;
        for (n4 = 0; n4 < this.i; ++n4) {
            cm2.a_m2_PIRV(this.h > n4 ? 16755968 : 3550755);
            cm2.a_m4_PIIIIRV(n7 + 15 + n4 * (n3 + 1), n9 + 4, n3, 4);
        }
    
  }
}

JavaRegistry.set("dz", dz);
JavaRegistry.set("dz", dz);
try { if (typeof dz.__clinit === 'function') dz.__clinit(); } catch (e) { console.warn('clinit dz', e); }

globalThis.dz = dz;
