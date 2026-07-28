/** Transpiled from m */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class m extends (JavaRegistry.get("Object") || class {}) {
  a_f0_AB = null;
  a_f1_I = 0;
  b = 0;
  static a_m0_PLm_RLm_(m2) {

        let m3 = m2;
        m2 = new m();
        new m().a_f0_AB = m3.a_f0_AB;
        m2.a_f1_I = m3.a_f1_I;
        m2.b = m3.b;
        let m2 = null;
    
  }
  static a_m1_PABRLm_(object) {

        let byArray = object;
        object = new m();
        new m().a_f0_AB = byArray;
        byArray = object;
        byArray.a_m3_PIIRV(0, byArray.a_f0_AB != null ? byArray.a_f0_AB.length : 0);
        let object = null;
    
  }
  m() {

    
  }
  a_m2_PIRV(n2) {

        this.a_f1_I = n2;
    
  }
  a_m3_PIIRV(n2, n3) {

        this.a_f1_I = n2;
        this.b = n3;
    
  }
  a_m4_PRI() {

        return this.a_f1_I;
    
  }
  a_m5_PABIRV(byArray, n2) {

        if (this.a_f0_AB != null) {
            System.arraycopy(this.a_f0_AB, this.a_f1_I, byArray, 0, n2);
            this.a_f1_I += n2;
        }
    
  }
  a_m6_PRB() {

        if (this.a_f0_AB != null) {
            return this.a_f0_AB[this.a_f1_I++];
        }
        return 0;
    
  }
  a_m7_PRS() {

        let s2 = null;
        if (this.a_f0_AB == null) {
            return 0;
        }
        if ((s2 = this.a_f0_AB[this.a_f1_I++]) < 0) {
            s2 = (s2 + 256);
        }
        return (s2 + (this.a_f0_AB[this.a_f1_I++] << 8));
    
  }
  b() {

        if (this.a_f0_AB == null) {
            return 0;
        }
        let n2 = this.a_f0_AB[this.a_f1_I++];
        let n3 = this.a_f0_AB[this.a_f1_I++];
        if (n2 < 0) {
            n2 += 256;
        }
        if (n3 < 0) {
            n3 += 256;
        }
        return n2 += n3 << 8;
    
  }
  a_m8_PRZ() {

        return this.a_f1_I >= this.b;
    
  }
}

JavaRegistry.set("m", m);
JavaRegistry.set("m", m);
try { if (typeof m.__clinit === 'function') m.__clinit(); } catch (e) { console.warn('clinit m', e); }

globalThis.m = m;
