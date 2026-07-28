/** Transpiled from dt */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dt extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_ALdt_ = null;
  a_f1_Ls_ = null;
  a_f2_AB = null;
  k = null;
  a_f3_B = null;
  l = null;
  c_f0_AB = new Int8Array(4);
  d_f0_AB = new Int8Array(6);
  b_f0_B = null;
  c_f1_B = null;
  a_f4_S = null;
  b_f1_S = null;
  c_f2_S = null;
  d_f1_B = null;
  d_f2_S = null;
  e_f0_S = null;
  f_f0_S = null;
  a_f5_Z = null;
  b_f2_Z = null;
  c_f3_Z = null;
  e_f1_B = null;
  f_f1_B = null;
  b_f3_AB = null;
  g = null;
  h = null;
  i = null;
  j = null;
  d_f3_Z = null;
  static a_m0_PIRV(n2) {

        dt.a_f0_ALdt_ = new dt[n2];
    
  }
  static a_m1_PBSABABABRV(by2, s2, byArray, byArray2, byArray3) {

        let byArray4 = e.a_m8_PABIRAB(byArray, s2);
        if (!e.a_m9_PABRZ) {
            dt.a_f0_ALdt_[by2] = null;
            return;
        }
        let dt2 = new dt();
        let n2 = byArray4[0];
        dt2.a_f2_AB = new Int8Array(n2);
        System.arraycopy(byArray4, 1, dt2.a_f2_AB, 0, n2);
        let n3 = ++n2;
        dt2.k = byArray4[n3];
        let n4 = ++n2;
        dt2.a_f3_B = byArray4[n4];
        let n5 = ++n2;
        dt2.l = byArray4[n5];
        System.arraycopy(byArray4, ++n2, dt2.c_f0_AB, 0, 4);
        System.arraycopy(byArray4, n2 += 4, dt2.d_f0_AB, 0, 6);
        n2 += 6;
        if (dt2.d_f0_AB[0] == 0 && dt2.d_f0_AB[1] == 0 && dt2.d_f0_AB[2] == 0 && dt2.d_f0_AB[3] == 0 && dt2.d_f0_AB[4] == 0 && dt2.d_f0_AB[5] == 0) {
            dt2.d_f0_AB = null;
        }
        dt2.b_f0_B = byArray4[n2++];
        dt2.c_f1_B = byArray4[n2++];
        dt2.a_f4_S = rpg.g.b_m1_PABIRS(byArray4, n2);
        dt2.b_f1_S = rpg.g.b_m1_PABIRS(byArray4, n2 += 2);
        dt2.c_f2_S = rpg.g.b_m1_PABIRS(byArray4, n2 += 2);
        n2 += 2;
        dt2.d_f1_B = byArray4[n2++];
        dt2.d_f2_S = rpg.g.b_m1_PABIRS(byArray4, n2);
        dt2.e_f0_S = rpg.g.b_m1_PABIRS(byArray4, n2 += 2);
        dt2.f_f0_S = rpg.g.b_m1_PABIRS(byArray4, n2 += 2);
        n2 += 2;
        dt2.a_f5_Z = byArray4[n2++] == 1;
        dt2.b_f2_Z = byArray4[n2++] == 1;
        dt2.c_f3_Z = byArray4[n2++] == 1;
        dt2.e_f1_B = byArray4[n2++];
        dt2.b_f3_AB = new Int8Array(24);
        System.arraycopy(byArray4, n2, dt2.b_f3_AB, 0, 24);
        n2 += 24;
        dt2.g = byArray4[n2++];
        dt2.h = byArray4[n2++];
        dt2.i = byArray4[n2++];
        dt2.j = byArray4[n2++];
        if (dt2.a_f3_B == 5) {
            dt2.j = 0;
        }
        dt2.d_f3_Z = byArray4[n2] == 0;
        dt.a_f0_ALdt_[by2] = dt2;
        let dt3 = dt2;
        if (dt3.l >= 0) {
            dt3.a_f1_Ls_ = new s();
            byArray4 = e.a_m6_PLjava_lang_String_RAB((dt3.k == 0 ? "/en/cif/h" : "/en/cif/a") + (dt3.l < 10 ? "0" : "") + dt3.l);
            dt3.a_f1_Ls_.a_m1_PABZRV(byArray4, true);
        }
        if (dt2.a_f1_Ls_ != null) {
            dt2.a_m2_PABABRV(byArray2, byArray3);
            dt2.a_f1_Ls_.a_f3_AAB = null;
        }
        dt2.d_f0_AB = null;
        dt2.c_f0_AB = null;
    
  }
  a_m2_PABABRV(byArray, object) {

        if (this.d_f0_AB == null) {
            return;
        }
        byArray = this.k == 0 ? byArray : object;
        for (let i2 = 0; i2 < 6; ++i2) {
            if (this.d_f0_AB[i2] == 0) continue;
            object = "/en/";
            if (this.k == 0) {
                object = object + i2 + "/";
            }
            object = object + (this.d_f0_AB[i2] < 10 ? "0" : "") + this.d_f0_AB[i2];
            let byArray2 = null;
            if (i2 < this.c_f0_AB.length && this.c_f0_AB[i2] > 0) {
                byArray2 = e.a_m8_PABIRAB(byArray, this.c_f0_AB[i2] - 1);
            }
            this.a_f1_Ls_.a_m0_PILjava_lang_String_ABRV(i2, object, byArray2);
        }
    
  }
  static a_m3_PRV() {

        dt.a_f0_ALdt_ = null;
        av.a_f0_Lav_ = null;
        av.a_f1_ALbi_ = null;
        ap.a = null;
        cw.a = null;
    
  }
}

JavaRegistry.set("dt", dt);
JavaRegistry.set("dt", dt);
try { if (typeof dt.__clinit === 'function') dt.__clinit(); } catch (e) { console.warn('clinit dt', e); }

globalThis.dt = dt;
