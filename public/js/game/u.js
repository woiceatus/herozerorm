/** Transpiled from u */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class u extends (JavaRegistry.get("du") || class {}) {
  static a_f0_B = 2;
  static b_f0_B = -5;
  c = null;
  a_f1_S = null;
  a_f2_I = null;
  d = null;
  a_f3_Z = null;
  b_f1_Z = null;
  /* skip field: abstract void a_m0_PIIRV(int var1, int var2); */
  /* skip field: abstract void a_m1_PRV(); */
  constructor(by2, by3, by4, by5, bl2) {
    super();

        /*super*/((by4 << 4), (by5 << 4), 8, (8 + u.a_f0_B));
        this.b_f1_Z = true;
        this.c = by2;
        this.d = by3;
        this.a_f2_I = -1;
        this.a_f3_Z = false;
    
  }
  constructor(by2, by3, s2, s3, bl2) {
    super();

        /*super*/(s2, s3, 8, (8 + (bl2 ? a_f0_B : u.b_f0_B)));
        this.b_f1_Z = bl2;
        this.c = by2;
        this.d = 1;
        this.a_f2_I = -1;
        this.a_f3_Z = false;
    
  }
  b(n2, n3) {

        let u2 = this;
        ++u2.a_f2_I;
        u2.a_m1_PRV();
        if {
            di.a_f4_Lg_.d_m2_PLdu_RV;
            return;
        }
        this.a_m0_PIIRV(n2, n3);
    
  }
}

JavaRegistry.set("u", u);
JavaRegistry.set("u", u);
try { if (typeof u.__clinit === 'function') u.__clinit(); } catch (e) { console.warn('clinit u', e); }

globalThis.u = u;
