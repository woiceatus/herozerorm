/** Transpiled from cl */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cl extends (JavaRegistry.get("Object") || class {}) {
  a_f0_Ldo_ = null;
  a_f1_AB = null;
  a_f2_AS = null;
  b = null;
  /* skip field: public abstract boolean a_m0_PBRZ(byte var1); */
  /* skip field: public abstract boolean a_m1_PBIRZ(byte var1, int var2); */
  /* skip field: public abstract boolean b_m0_PBRZ(byte var1); */
  /* skip field: protected abstract byte a_m2_PRB(); */
  /* skip field: protected abstract void a_m3_PBRV(byte var1); */
  constructor(do_) {
    super();

        this.a_f0_Ldo_ = do_;
    
  }
  b_m1_PBRV(n2) {

        let n3 = null;
        let byArray = e.a_m6_PLjava_lang_String_RAB("/hero/hsd1");
        let n4 = 0;
        for (n3 = 0; n3 < n2; ++n3) {
            n4 += 56;
        }
        n3 = 0;
        this.a_f1_AB = new Int8Array(24);
        this.a_f2_AS = new Int16Array(6);
        this.b = new Int16Array(6);
        for (n2 = 0; n2 < 8; ++n2) {
            System.arraycopy(byArray, n4, this.a_f1_AB, n3, 3);
            n3 += 3;
            if (n2 < 6) {
                this.a_f2_AS[n2] = g.b_m1_PABIRS(byArray, n4 + 3);
                this.b[n2] = g.b_m1_PABIRS(byArray, n4 + 5);
            }
            n4 += 7;
        }
    
  }
  a_m4_PBRI(by2) {

        let n2 = by2 - 4;
        by2 = n2;
        if (n2 < 0 || by2 >= 6) {
            return 0;
        }
        return this.b[by2];
    
  }
  b_m2_PBRI(by2) {

        let n2 = by2 - 4;
        by2 = n2;
        if (n2 < 0 || by2 >= 6) {
            return 0;
        }
        return this.a_f2_AS[by2];
    
  }
  c_m0_PBRI(by2) {

        let n2 = (by2 - 4) * 3;
        return this.a_m6_PIIRI(di.a_f9_Ldo_.a_m2_PBRB, n2);
    
  }
  a_m5_PBIZRI(by2, n2, bl2) {

        let n3 = null;
        let n4 = n3 = (by2 - 4) * 3;
        n3 = bl2 ? 1 : 0;
        let n5 = n2;
        n2 = di.a_f9_Ldo_.a_m2_PBRB;
        let cl2 = this;
        n2 = cl2.a_f1_AB[n4] + cl2.a_f1_AB[n4 + 1] * n2;
        n2 = n3 != 0 ? (n2 += n5) : (n2 *= n5);
        return n2 /= cl2.a_f1_AB[n4 + 2];
    
  }
  a_m6_PIIRI(n2, n3) {

        n2 = this.a_f1_AB[n3] + this.a_f1_AB[n3 + 1] * n2;
        return n2 /= this.a_f1_AB[n3 + 2];
    
  }
  a_m7_PBZRI(by2, bl2) {

        let n2 = this.a_m5_PBIZRI(by2, this.a_f0_Ldo_.a_m9_PZRI, false);
        by2 = n2;
        let n3 = n2 + this.a_f0_Ldo_.c_m2_PZRI;
        by2 = n3;
        let n3 = null;
    
  }
  a_m8_PRZ() {

        return this.a_f0_Ldo_.a_m29_PBRLbm_(3) != null;
    
  }
  b_m3_PRZ() {

        return this.a_f0_Ldo_.a_m29_PBRLbm_(5) != null;
    
  }
  b_m4_PRB() {

        let n2 = this.a_m6_PIIRI(di.a_f9_Ldo_.a_m2_PBRB(10), 18);
        return (n2 > 4 ? 4 : n2);
    
  }
  c_m1_PBRV(by2) {

        if (do.h_f1_B > 0 && by2 < 4) {
            bq.a_m2_PBRV;
        } else {
            this.a_m3_PBRV;
        }
        do.h_f1_B = -1;
    
  }
  a_m9_PBBIZZZRZ(by2, by3, n2, bl2, bl3, n3) {

        n2 = 0;
        let vector = this.a_f0_Ldo_.b_m7_PBRLjava_util_Vector_;
        if (vector == null) {
            let false = null;
        }
        n3 = vector.size();
        for (let i2 = 0; i2 < n3; ++i2) {
            let cd2 = vector.elementAt;
            if (cd2 == null || !cd2.a_m12_PLdo_BIZBBZZZRZ(this.a_f0_Ldo_, by3, -1, bl2, this.a_f0_Ldo_.c_f0_B, this.a_m2_PRB(), bl3, true, false)) continue;
            n2 = 1;
        }
        return n2 != 0;
    
  }
}

JavaRegistry.set("cl", cl);
JavaRegistry.set("cl", cl);
try { if (typeof cl.__clinit === 'function') cl.__clinit(); } catch (e) { console.warn('clinit cl', e); }

globalThis.cl = cl;
