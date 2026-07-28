/** Transpiled from s */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class s extends (JavaRegistry.get("Object") || class {}) {
  a_f0_AB = null;
  a_f1_AI = null;
  b = null;
  a_f2_B = null;
  /* skip field: public byte[][] a_f3_AAB; */
  /* skip field: protected cg[][] a_f4_AALcg_; */
  a_m0_PILjava_lang_String_ABRV(n2, object, byArray) {

        let n3 = null;
        object = new aj(object);
        if (byArray != null) {
            let n4 = 0;
            ++n4;
            n3 = byArray[0];
            for (let n5 = 0; n5 < n3; n5 = (n5 + 1)) {
                let n6 = g.b_m0_PABIRI(byArray, n4);
                let n7 = g.b_m0_PABIRI(byArray, n4 += 4);
                n4 += 4;
                (object).a_m6_PIIRV(n6, n7);
            }
        }
        this.a_f4_AALcg_[n2] = (object).a_m4_PRALcg_();
        let byArray2 = this.a_f3_AAB[n2];
        if (byArray2 != null) {
            this.a_f4_AALcg_[n2 + this.a_f2_B] = new cg[(object).a_m2_PRI()];
            for (n3 = 0; n3 < byArray2.length; ++n3) {
                this.a_f4_AALcg_[n2 + this.a_f2_B][byArray2[n3]] = (object).b_m0_PIRLcg_(byArray2[n3]);
            }
        }
    
  }
  a_m1_PABZRV(byArray, bl2) {

        let n2 = null;
        let n3 = null;
        let n4 = byArray[0];
        let n5 = n4 + 1;
        this.a_f2_B = n4;
        this.a_f4_AALcg_ = new cg[n4 * (bl2 ? 2 : 1)][];
        this.a_f3_AAB = new Int8Array(n4)[];
        for (n3 = 0; n3 < n4; ++n3) {
            n2 = byArray[n5++];
            let by2 = byArray[n5++];
            this.a_f3_AAB[n3] = new Int8Array(n2);
            System.arraycopy(byArray, n5, this.a_f3_AAB[n3], 0, n2);
            n5 += by2 + n2;
        }
        n3 = byArray[n5++];
        this.a_f1_AI = new Int32Array(n3);
        this.b = new Int8Array(n3);
        n4 = n5;
        for (n2 = 0; n2 < n3; ++n2) {
            this.a_f1_AI[n2] = n5 - n4;
            this.b[n2] = byArray[n5++];
            for (let i2 = 0; i2 < this.b[n2]; ++i2) {
                for (let i3 = 0; i3 < 4; ++i3) {
                    let by3 = byArray[n5++];
                    n5 += by3 * 4;
                }
            }
        }
        n2 = n5 - n4;
        this.a_f0_AB = new Int8Array(n2);
        System.arraycopy(byArray, n4, this.a_f0_AB, 0, n2);
    
  }
  a_m2_PBBIIIRI(n2, by2, n3, n4, n5) {

        let n6 = null;
        let n7 = this.a_f1_AI[n2];
        ++n7;
        if (n3 >= this.b[n2] || n3 < 0) {
            n3 = 0;
        }
        for (n6 = 0; n6 < n3; ++n6) {
            for (let i2 = 0; i2 < 4; ++i2) {
                n2 = this.a_f0_AB[n7++];
                n7 += n2 << 2;
            }
        }
        for (n6 = 0; n6 < by2 - 1; ++n6) {
            n2 = this.a_f0_AB[n7++];
            n7 += n2 << 2;
        }
        n2 = this.a_f0_AB[n7++];
        let cm2 = a.a_f3_Lcm_;
        for (let i3 = 0; i3 < n2; ++i3) {
            n6 = this.a_f0_AB[n7] & 0x7F;
            let cgArray = this.a_f4_AALcg_[n6 += this.a_f0_AB[n7] >> 7 == 0 ? 0 : this.a_f2_B];
            n6 = this.a_f0_AB[n7 + 1];
            if (cgArray != null && cgArray[n6] != null) {
                cm2.a_m1_PLcg_IIIRV(cgArray[n6], n4 + this.a_f0_AB[n7 + 2], n5 + this.a_f0_AB[n7 + 3], 20);
            }
            n7 += 4;
        }
        let n3 = null;
    
  }
  a_m3_PBRB(by2) {

        return this.b[by2];
    
  }
  a_m4_PLjava_lang_String_Ljava_lang_String_RV(object, string) {

        object = e.a_m6_PLjava_lang_String_RAB(object);
        this.a_m1_PABZRV(object, false);
        object = let aj = null;
        this.a_f4_AALcg_[0] = (object).a_m4_PRALcg_();
    
  }
  static a_m5_PLjava_lang_String_Ljava_lang_String_RLs_(object, string) {

        object = e.a_m6_PLjava_lang_String_RAB(object);
        let s2 = new s();
        s2.a_m1_PABZRV(object, true);
        s2.a_m0_PILjava_lang_String_ABRV(0, string, null);
        let s2 = null;
    
  }
}

JavaRegistry.set("s", s);
JavaRegistry.set("s", s);
try { if (typeof s.__clinit === 'function') s.__clinit(); } catch (e) { console.warn('clinit s', e); }

globalThis.s = s;
