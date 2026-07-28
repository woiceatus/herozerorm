/** Transpiled from br */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class br extends (JavaRegistry.get("eb") || class {}) {
  g = null;
  m = null;
  a = null;
  e = false;
  br(n2, byArray, c2) {

        /*super*/(n2, 0, 0, 0, 1);
        this.a = byArray;
        this.a_m0_PIRV(ac.a_m7_PABIRI(this.a, d.i_f1_I));
        this.g = false;
    
  }
  br(n2, byArray, by2) {

        this(n2, byArray, '\u0000');
        this.f_f0_B = by2;
    
  }
  a_m0_PIRV(n2) {

        this.l = n2;
        this.j = d.f_;
        this.k = 18 + this.l * 12 + (this.l - 1 << 1);
        (this).e = rpg.a.c - (this.j >> 1);
        this.f_f1_I = rpg.a.d - (this.k >> 1);
    
  }
  br(n2, byArray) {

        this(n2, byArray, '\u0000');
        this.j = ac.a_m8_PABRI+ 16;
        (this).e = rpg.a.c - (this.j >> 1);
        this.g = true;
    
  }
  a_m1_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if {
            if (n2 == -6) {
                this.a_f1_Ln_.a_m3_PBBRV(3, 0);
            } else if (n2 == -7) {
                this.a_f1_Ln_.a_m3_PBBRV(3, 1);
            }
            let true = null;
        }
        if {
            let true = null;
        }
        if (this.a_f1_Ln_ != null && (n.f_m0_PIIRZ(n2, n3) || n.g(n2, n3))) {
            this.a_f1_Ln_.a_m3_PBBRV(this.f_f0_B, -1);
        }
        let true = null;
    
  }
  a_m2_PLcm_RV(cm2) {

        cm2.a_m2_PIRV(7228201);
        cm2.d_m0_PIIIIRV((this).e - 3, this.f_f1_I - 3, this.j + 5, this.k + 5);
        cm2.a_m2_PIRV(10646341);
        cm2.d_m0_PIIIIRV((this).e - 2, this.f_f1_I - 2, this.j + 3, this.k + 3);
        eb.f(cm2, (this).e, this.f_f1_I, this.j, this.k);
        cm2.a_m2_PIRV(7228201);
        cm2.d_m0_PIIIIRV((this).e - 1, this.f_f1_I - 1, this.j + 1, this.k + 1);
        let n2 = this.f_f1_I + 9;
        cm2.a_m2_PIRV(3550755);
        if {
            this.m = this.m > 100 ? 0 : ++this.m;
            let n3 = this.a.length - this.m % 4;
            let byArray = new Int8Array(n3);
            System.arraycopy(this.a, 0, byArray, 0, n3);
            ac.a_m0_PLcm_IIABIRV(cm2, (this).e + 8, n2, byArray, 0);
            this.a_f3_Z = true;
            return;
        }
        if (this.l == 1) {
            ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n2, this.a, 1, 1);
            return;
        }
        ac.a_m1_PLcm_IIIIABRV(cm2, (this).e + 8, n2, d.i_f1_I, 1, this.a);
    
  }
}

JavaRegistry.set("br", br);
JavaRegistry.set("br", br);
try { if (typeof br.__clinit === 'function') br.__clinit(); } catch (e) { console.warn('clinit br', e); }

globalThis.br = br;
