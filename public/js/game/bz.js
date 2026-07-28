/** Transpiled from bz */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bz extends (JavaRegistry.get("u") || class {}) {
  a_f0_AB = new Int8Array([18, 19, 18]);
  b_f0_AB = new Int8Array([3, 3, 7]);
  a_f1_Ldo_ = null;
  e = null;
  f = null;
  b_f1_I = null;
  constructor(do_, by2, by3, n2) {
    super();

        /*super*/(by2, do_.c_f0_B, (do_.s + rpg.d.J[do_.c_f0_B]), (do_.t + rpg.d.K[do_.c_f0_B]), true);
        this.a_f1_Ldo_ = do_;
        this.f = this.b_f0_AB[by2];
        this.b_f1_I = n2;
        this.e = by3;
        this.a_f1_S = rpg.e.a_f2_Lca_.a_m3_PBRB(this.a_f0_AB[by2]);
    
  }
  a_m0_PRV() {

        if (this.f > 0) {
            this.c(this.s, this.t);
            if (this.c == 2) {
                this.c(this.s + rpg.d.O[this.d], this.t + rpg.d.O[this.d]);
                this.c(this.s + rpg.d.N[this.d], this.t + rpg.d.N[this.d]);
            }
            let by2 = (this.s + rpg.d.J[this.d]);
            let by3 = (this.t + rpg.d.K[this.d]);
            if (by2 >= 0 && by2 < g.c_f3_B && by3 >= 0 && by3 < g.d_f2_B) {
                if (!di.a_f4_Lg_.b_m2_PIIRZ(by2, by3)) {
                    this.a_m0_PSSRV((by2 << 4), ((by3 << 4) + 1));
                    this.E();
                } else {
                    this.f = 0;
                }
                this.f = (this.f - 1);
            } else {
                this.a_f3_Z = true;
            }
            di.a_f4_Lg_.c_m4_PIIRV(2, this.f);
            return;
        }
        this.a_f3_Z = true;
    
  }
  a_m1_PIIRV(n2, n3) {

        n2 = n2 + this.h + this.q;
        n3 = n3 + this.i + this.r - (this.b_f1_Z ? u.a_f0_B : u.b_f0_B);
        rpg.e.a_f2_Lca_.a_m2_PBBIIIRI(this.a_f0_AB[this.c], this.d, this.a_f2_I, n2, n3);
    
  }
  c(n2, n3) {

        if (n2 < 0 || n3 < 0 || n2 >= g.c_f3_B || n3 >= g.d_f2_B) {
            return;
        }
        let du2 = di.a_f4_Lg_.a_f4_AALdu_[n3][n2];
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h)) {
            (du2).a_m12_PLdo_BIZBBZZZRZ(this.a_f1_Ldo_, this.e, this.b_f1_I, false, this.d, 2, false, true, false);
        }
    
  }
}

JavaRegistry.set("bz", bz);
JavaRegistry.set("bz", bz);
try { if (typeof bz.__clinit === 'function') bz.__clinit(); } catch (e) { console.warn('clinit bz', e); }

globalThis.bz = bz;
