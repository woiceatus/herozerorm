/** Transpiled from ca */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ca extends (JavaRegistry.get("s") || class {}) {
  /* skip field: private cg[][] b; */
  a_m0_PRV() {

        this.b = new cg[4][];
        let aj2 = new aj("/hero/0/t");
        this.b[0] = aj2.a_m4_PRALcg_();
        let n2 = aj2.a_m2_PRI();
        let cgArray = new cg[n2];
        let byArray = this.a_f3_AAB[0];
        n2 = byArray.length;
        for (let i2 = 0; i2 < n2; ++i2) {
            cgArray[byArray[i2]] = aj2.b_m0_PIRLcg_(byArray[i2]);
        }
        this.b[1] = cgArray;
    
  }
  a_m1_PZRV(bl2) {

        let n2 = 2;
        if {
            if (this.a_f4_AALcg_[0] != this.b[0]) {
                this.b[2] = this.a_f4_AALcg_[0];
                this.b[3] = this.a_f4_AALcg_[0 + this.a_f2_B];
            }
            n2 = 0;
        }
        this.a_f4_AALcg_[0] = this.b[n2];
        this.a_f4_AALcg_[0 + this.a_f2_B] = this.b[n2 + 1];
    
  }
  a_m2_PIRV(n2) {

        if (n2 >= this.a_f2_B) {
            return;
        }
        if (this.a_f4_AALcg_[n2] != null) {
            this.a_f4_AALcg_[n2] = null;
        }
        if (this.a_f4_AALcg_[n2 + this.a_f2_B] != null) {
            this.a_f4_AALcg_[n2 + this.a_f2_B] = null;
        }
    
  }
}

JavaRegistry.set("ca", ca);
JavaRegistry.set("ca", ca);
try { if (typeof ca.__clinit === 'function') ca.__clinit(); } catch (e) { console.warn('clinit ca', e); }

globalThis.ca = ca;
