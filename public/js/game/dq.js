/** Transpiled from dq */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dq extends (JavaRegistry.get("at") || class {}) {
  d = null;
  c = false;
  e = null;
  f = null;
  a = null;
  j = null;
  constructor(bl2, n2, byArray, n3, n4) {
    super();

        /*super*/(-10);
        this.c = bl2;
        this.d = n2;
        this.a = byArray;
        this.b_f2_Z = false;
        if {
            this.e = n3 + 8;
            this.f = 0;
            this.j = bs.k;
        } else {
            this.e = 0;
            this.f = n4 - 8 + 2;
            this.j = bs.j;
        }
        this.a_f1_I = byArray.length;
    
  }
  a(n2, n3) {

        n2 += this.e;
        n3 += this.f;
        let cm2 = rpg.a.a_f3_Lcm_;
        cm2.a_m2_PIRV;
        let by2 = this.a[this.b_f0_I];
        if {
            cm2.a_m4_PIIIIRV(n2 - (by2 >> 1), 0, by2, this.j);
            return;
        }
        cm2.a_m4_PIIIIRV(0, n3 - (by2 >> 1), this.j, by2);
    
  }
}

JavaRegistry.set("dq", dq);
JavaRegistry.set("dq", dq);
try { if (typeof dq.__clinit === 'function') dq.__clinit(); } catch (e) { console.warn('clinit dq', e); }

globalThis.dq = dq;
