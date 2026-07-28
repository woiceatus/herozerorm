/** Transpiled from v */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class v extends (JavaRegistry.get("af") || class {}) {
  Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 0);
  R = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 1);
  e = null;
  l = null;
  i = false;
  v(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2, dt.a_f0_ALdt_[by2].a_f1_Ls_);
        this.b_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 2);
        this.c_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 3);
        this.d_f1_AB = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 4);
        this.a_m0_PABRV;
        this.b_f2_I = 2;
        this.a_f2_B = this.b_f1_AB[this.b_f2_I];
        this.i = false;
        this.h_f0_B = 0;
        this.a_f1_S = this.c_f1_AB[this.a_f2_B];
        this.l = this.e = this.k_f2_I * 10 / 100;
    
  }
  l_m0_PRV() {

        if (this.b_f1_B != 30) {
            super.l();
            return;
        }
        if (this.j()) {
            this.a_m1_PBRV(1);
        }
    
  }
  c() {

        if (this.l_m1_PRZ()) {
            return this.k_f2_I;
        }
        return this.l;
    
  }
  l_m1_PRZ() {

        return this.l <= 0;
    
  }
  d() {

        if (this.l_m1_PRZ()) {
            return this.j_f2_I;
        }
        return this.e;
    
  }
  k() {

        if (this.a_f1_S <= 0 && !this.f_f2_Z) {
            this.z();
            this.a_m1_PBRV(3);
            return;
        }
        let n2 = this.a_m3_PLdu_RB;
        let n3 = this.b_m2_PLdu_RB;
        let n4 = n2;
        if (this.a_f1_Ldo_.s > this.s) {
            n4 = 0 - n2;
        }
        let n5 = n3;
        if (this.a_f1_Ldo_.t > this.t) {
            n5 = 0 - n3;
        }
        let by2 = 0;
        let by3 = 0;
        if (n5 != 0) {
            let by4 = by2 = n5 > 0 ? 1 : 2;
        }
        if (n4 != 0) {
            let by5 = by3 = n4 > 0 ? 3 : 4;
        }
        if (n2 < n3) {
            this.c_m0_PBRV;
            return;
        }
        this.c_m0_PBRV;
    
  }
  a_m0_PIIRV(n2, n3) {

        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.h_f0_B == 1 || this.h_f0_B == 2 ? this.c_f0_B : 1, this.c_f1_I, n2, n3);
    
  }
  z() {

        do {
            let by2 = this.a_f2_B;
            this.b_f2_I = (this.b_f2_I + 1) % this.b_f1_AB.length;
            this.a_f2_B = this.b_f1_AB[this.b_f2_I];
            if (by2 == 2 && this.l_m1_PRZ()) {
                this.b_f2_I = 1;
                this.a_f2_B = this.b_f1_AB[this.b_f2_I];
                this.i = true;
                return;
            }
            if (!this.l_m1_PRZ() || this.a_f2_B != 0) continue;
            this.b_f2_I = 0;
            this.a_f2_B = this.b_f1_AB[this.b_f2_I];
            this.i = true;
            return;
        } while (this.a_f2_B == 2 && !this.l_m1_PRZ());
    
  }
  a_m1_PIRZ(n2) {

        let n2 == this.d_f1_AB[this.a_f2_B];
    
  }
  b() {

        switch {
            case 0: {
                this.a_m22_PABSZRZ(this.Q, this.a_m21_PRS(), true);
                return;
            }
            case 1: {
                for (let i2 = 0; i2 < 6; ++i2) {
                    let n2 = this.a_f1_Ldo_.s + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 4 - 2;
                    let n3 = this.a_f1_Ldo_.t + (Math.abs(al.a_f1_Ljava_util_Random_.nextInt()) & 0xFF) % 4 - 2;
                    if (n2 < 0 || n2 >= g.c_f3_B || n3 < 0 || n3 >= g.d_f2_B) continue;
                    new t(1, (n2 << 4), (n3 << 4), this.a_f1_Ls_, 16, false, this, 0, 0, 0);
                }
                break;
            }
        }
    
  }
  e() {

        if (this.a_f2_B == 1) {
            new ck(this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_);
            new ck(this.a_f1_Ldo_.h, this.a_f1_Ldo_.i, this.a_f1_Ls_);
        }
        this.a_m2_PIRV(this.c_f1_AB[this.a_f2_B]);
    
  }
  a_m2_PRV() {

        switch {
            case 0: 
            case 1: 
            case 2: {
                if (this.l > 0) {
                    this.h_f0_B = this.i != false ? 1 : 0;
                    break;
                }
                v0 = this;
                v1 = 2;
                ** GOTO lbl37
            }
            case 3: {
                switch {
                    case 0: {
                        this.h_f0_B = (this.i != false ? 6 : 5);
                        this.i = this.i == false;
                        break;
                    }
                    case 1: {
                        this.h_f0_B = (this.l > 0 ? 3 : 4);
                        break;
                    }
                    case 2: {
                        this.h_f0_B = 20;
                        this.l = this.e;
                    }
                }
                break;
            }
            case 4: {
                if (this.l > 0) {
                    this.h_f0_B = (this.i != false ? 8 : 7);
                    break;
                }
                v0 = this;
                v1 = 9;
                ** GOTO lbl37
            }
            case 6: 
            case 7: {
                break;
            }
            case 8: {
                break;
            }
            case 30: {
                v0 = this;
                v1 = this.i != false ? 15 : 14;
lbl37:
                

                v0.h_f0_B = v1;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  a_m3_PLal_IRV(al2, n2) {

        if (this.l > 0) {
            this.l -= n2;
            if (this.l <= 0) {
                this.l = 0;
                this.a_m1_PBRV(30);
                return;
            }
        } else {
            this.k_f2_I -= n2;
            if (this.k_f2_I <= 0) {
                this.k_f2_I = 0;
            }
        }
    
  }
  m() {

        di.a_f4_Lg_.d_m2_PLdu_RV;
        this.b_m0_PABRV;
    
  }
}

JavaRegistry.set("v", v);
JavaRegistry.set("v", v);
try { if (typeof v.__clinit === 'function') v.__clinit(); } catch (e) { console.warn('clinit v', e); }

globalThis.v = v;
