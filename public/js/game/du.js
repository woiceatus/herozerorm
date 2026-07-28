/** Transpiled from du */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class du extends (JavaRegistry.get("Object") || class {}) {
  h = null;
  i = null;
  q = null;
  r = null;
  s = null;
  t = null;
  j = null;
  k = null;
  u = 1;
  l = true;
  a = null;
  b = null;
  m = false;
  /* skip field: public abstract void b_m0_PIIRV(int var1, int var2); */
  constructor(s2, s3, by2, by3) {
    super();

        this.a_m0_PSSRV(s2, s3);
        this.q = by2;
        this.r = by3;
        this.E();
        s3 = 1;
        let du2 = this;
        this.l = s3;
    
  }
  E() {

        this.s = (this.h >> 4);
        this.t = (this.i >> 4);
        this.j = (this.h & 0xF) != 0;
        this.k = (this.i & 0xF) != 0;
    
  }
  a_m0_PSSRV(s2, s3) {

        this.h = s2;
        this.i = s3;
    
  }
  d(bl2) {

        this.l = bl2;
    
  }
  a_m1_PBBBRLdu_(by2, by3, by4) {

        return du.a_m2_PBBBBBRLdu_(this.s, this.t, by2, by3, by4);
    
  }
  static a_m2_PBBBBBRLdu_(by2, by3, by4, by5, by6) {

        let g2 = di.a_f4_Lg_;
        by2 = (by2 + d.J[by4]);
        by3 = (by3 + d.K[by4]);
        switch {
            case 1: {
                let n2 = by3 - by6;
                by3 = n2;
                if (n2 >= 0) break;
                let null = null;
            }
            case 2: {
                let n3 = by3 + by6;
                by3 = n3;
                if (n3 < g.d_f2_B) break;
                let null = null;
            }
            case 3: {
                let n4 = by2 - by6;
                by2 = n4;
                if (n4 >= 0) break;
                let null = null;
            }
            case 4: {
                let n5 = by2 + by6;
                by2 = n5;
                if (n5 < g.c_f3_B) break;
                let null = null;
            }
            default: {
                if (by6 > 0) {
                    let null = null;
                }
                by2 = (by2 + d.J[by5]);
                by3 = (by3 + d.K[by5]);
            }
            case 0: {
                if (by2 >= 0 && by3 >= 0 && by2 < g.c_f3_B && by3 < g.d_f2_B) break;
                let null = null;
            }
        }
        return g2.a_f4_AALdu_[by3][by2];
    
  }
  a_m3_PLdu_RB(du2) {

        let n2 = this.b_m1_PLdu_RI;
        let n3 = du2.b_m1_PLdu_RI;
        return Math.min(n2, n3);
    
  }
  b_m1_PLdu_RI(du2) {

        let n2 = Math.abs(du2.s - this.s);
        let n3 = Math.abs(du2.s - (this.s + this.u - 1));
        return Math.min(n2, n3);
    
  }
  b_m2_PLdu_RB(du2) {

        let n2 = du2.t - this.t;
        return Math.abs;
    
  }
  a_m4_PLdu_RI(du2) {

        return this.a_m3_PLdu_RB+ this.b_m2_PLdu_RB;
    
  }
}

JavaRegistry.set("du", du);
JavaRegistry.set("du", du);
try { if (typeof du.__clinit === 'function') du.__clinit(); } catch (e) { console.warn('clinit du', e); }

globalThis.du = du;
