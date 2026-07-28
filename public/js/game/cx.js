/** Transpiled from cx */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cx extends (JavaRegistry.get("af") || class {}) {
  i = false;
  o = -1;
  p = 100;
  cx(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_);
        this.b_f0_Z = false;
        this.c_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 18);
        this.u();
    
  }
  f() {

        this.a_f2_Lal_ = this.a_f1_Ldo_;
    
  }
  k() {

        if (this.a_f1_S <= 0 && !this.f_f2_Z) {
            this.f();
            let n2 = this.a_m4_PLdu_RI;
            if (n2 < this.o) {
                this.a_f2_B = 2;
                this.a_m1_PBRV(3);
                return;
            }
            if (n2 > this.p) {
                this.a_f2_B = 1;
                this.a_m1_PBRV(3);
                return;
            }
            if (!this.a_() && !this.a_m3_PLdu_BRZ(this.a_f2_Lal_, (this).i) && this.a_m8_PLdu_RZ) {
                let cx2 = this;
                this.b_f2_I = (cx2.b_f2_I + 1) % cx2.b_f1_AB.length;
                cx2.a_f2_B = cx2.b_f1_AB[cx2.b_f2_I];
                this.a_m1_PBRV(3);
            }
        }
    
  }
  /* skip field: protected abstract boolean a_(); */
  a_m0_PIIRV(n2, n3) {

        switch {
            case 0: 
            case 1: 
            case 2: 
            case 3: 
            case 4: {
                this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.c_f0_B, this.c_f1_I, n2, n3);
                return;
            }
            case 6: {
                rpg.e.a_f4_Ls_.a_m2_PBBIIIRI(this.h_f0_B, 1, this.c_f1_I, n2, n3);
                return;
            }
            case 100: {
                this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, 1, this.c_f1_I, n2, n3);
            }
        }
    
  }
  a_m1_PBBZRV(by2, by3, bl2) {

        let g2 = di.a_f4_Lg_;
        let by4 = bl2 ? 0 : this.a_f1_Ldo_.c_f0_B;
        let n2 = 0;
        do {
            let by5 = null;
            let by6 = null;
            if (g2.a_m12_PLal_IIRZ(this, by6 = (by2 + rpg.d.J[by4]), by5 = (by3 + rpg.d.K[by4]))) {
                this.v();
                this.a_m0_PSSRV((by6 << 4), (by5 << 4));
                this.E();
                this.u();
                this.c_m0_PBRV(rpg.d.P[bl2 ? this.c_f0_B : this.a_f1_Ldo_.c_f0_B]);
                return;
            }
            if ((by4 = (by4 + 1)) <= 4) continue;
            by4 = 1;
        } while (n2++ < 5);
    
  }
  l() {

        let byArray = new Int8Array([rpg.d.J[this.c_f0_B], rpg.d.K[this.c_f0_B], (rpg.d.J[this.c_f0_B] << 1), (rpg.d.K[this.c_f0_B] << 1), (rpg.d.J[this.c_f0_B] * 3), (rpg.d.K[this.c_f0_B] * 3)]);
        return this.a_m22_PABSZRZ(byArray, this.a_m21_PRS(), this.i);
    
  }
  m() {

        let byArray = new Int8Array([rpg.d.J[this.c_f0_B], rpg.d.K[this.c_f0_B], rpg.d.J[rpg.d.M[this.c_f0_B]], rpg.d.K[rpg.d.M[this.c_f0_B]], rpg.d.J[rpg.d.L[this.c_f0_B]], rpg.d.K[rpg.d.L[this.c_f0_B]]]);
        return this.a_m22_PABSZRZ(byArray, this.a_m21_PRS(), this.i);
    
  }
  b_m0_PRZ() {

        return super.b_m1_PRZ() || this.b_f1_B == 100;
    
  }
  b_m1_PBIRV(by2, n2) {

        if (!this.b_m0_PRZ()) {
            super.b_m0_PBIRV(by2, n2);
        }
    
  }
  a_m2_PBBIRV(by2, by3, n2) {

        if (!this.b_m0_PRZ()) {
            super.a_m2_PBBIRV(by2, by3, n2);
        }
    
  }
  a_m3_PBIRZ(by2, n2) {

        if (!this.b_m0_PRZ()) {
            return super.a_m4_PBIRZ(by2, n2);
        }
        let true = null;
    
  }
  a_m4_PBRZ(by2) {

        if (!this.b_m0_PRZ()) {
            return super.a_m3_PBRZ;
        }
        let true = null;
    
  }
  z() {

        this.h_f0_B = 0;
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
}

JavaRegistry.set("cx", cx);
JavaRegistry.set("cx", cx);
try { if (typeof cx.__clinit === 'function') cx.__clinit(); } catch (e) { console.warn('clinit cx', e); }

globalThis.cx = cx;
