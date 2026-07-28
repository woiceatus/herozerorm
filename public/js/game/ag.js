/** Transpiled from ag */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ag extends (JavaRegistry.get("cd") || class {}) {
  b = false;
  ag(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_, false);
        if (this.c_f0_S == bc.b) {
            ++bc.e;
        }
    
  }
  b() {

        let bl2 = false;
        let bl3 = false;
        for (let by2 = 1; by2 <= 8; by2 = (by2 + 1)) {
            let du2 = this.a_m5_PBLdu_RLdu_(by2, null);
            if (du2 == null) continue;
            if (du2 instanceof do && !bl2) {
                bl2 = true;
                this.b_m5_PLal_IBRZ(du2, this.f_f1_S, by2);
            }
            if (!(du2 instanceof h) || bl3) continue;
            bl3 = true;
            this.b_m5_PLal_IBRZ(du2, this.f_f1_S, by2);
        }
    
  }
  e() {

        this.b = true;
        this.a_m16_PLal_IRV(null, this.k_f2_I);
        this.a_m17_PRZ();
    
  }
  a(by2) {

        if (by2 == 6) {
            if (this.c_f0_S == bc.b) {
                --bc.e;
            }
            by2 = 7;
        }
        super.a_m1_PBRV;
    
  }
  o() {

        if (!this.b) {
            super.o();
        }
    
  }
  i() {

        this.b = false;
        super.i();
    
  }
  n() {

        if (!this.b) {
            super.n();
        }
    
  }
}

JavaRegistry.set("ag", ag);
JavaRegistry.set("ag", ag);
try { if (typeof ag.__clinit === 'function') ag.__clinit(); } catch (e) { console.warn('clinit ag', e); }

globalThis.ag = ag;
