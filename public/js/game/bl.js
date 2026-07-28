/** Transpiled from bl */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bl extends (JavaRegistry.get("k") || class {}) {
  static a_f0_AB = new Int8Array([2, 3, 4, 1]);
  a_f1_B = null;
  g = null;
  h = null;
  i = null;
  j = null;
  k = null;
  bl(s2, s3, by2, by3) {

        /*super*/(s2, s3, 8, 8);
        this.g = by2;
        this.a_f1_B = by3;
        this.b_f1_B = 1;
        this.i = 0;
        this.c_f0_B = 2;
        this.h = 0;
        this.a_f1_S = 0;
        this.d_m3_PBRV(am.a_f1_AB[this.a_f1_B]);
        if (this.f <= 0) {
            this.b_m0_PIRV(-1);
        }
        this.j = this.s;
        this.k = this.t;
        for (s2 = 0; s2 < 4; s2 = ((s2 + 1))) {
            if (!this.d(bl.a_f0_AB[s2])) continue;
            this.c_m0_PBRV(bl.a_f0_AB[s2]);
            return;
        }
    
  }
  d(by2) {

        return (am.b[this.a_f1_B] & 1 << by2) != 0;
    
  }
  e_m0_PBRV(by2) {

        if (this.d) {
            this.c_m0_PBRV;
            return;
        }
        if (by2 != 1 && this.d(2)) {
            this.c_m0_PBRV(2);
        }
    
  }
  b_m0_PIIRV(n2, n3) {

        if ((n2 = n2 + (this).h + this.q) + 16 < 0 || n2 > bs.j + 16) {
            this.a_f0_Z = false;
            return;
        }
        if ((n3 = n3 + (this).i + this.r) + 16 < 0 || n3 > bs.k + 16) {
            this.a_f0_Z = false;
            return;
        }
        this.a_f0_Z = true;
        if (!this.l) {
            return;
        }
        this.a_m4_PIIZRV(n2, n3, false);
        this.c_f1_I = am.a_f0_ALs_[this.a_f1_B].a_m2_PBBIIIRI(this.i, this.c_f0_B, this.c_f1_I, n2, n3);
        this.d_m2_PIIRV(n2, n3);
    
  }
  b_m1_PRZ() {

        let false = null;
    
  }
  c_m0_PRV() {

        super.c_m2_PRV();
        ++this.c_f1_I;
        let bl2 = this;
        if {
            let n2 = null;
            let n3 = n2 = !(bl2).j && !(bl2).k ? 1 : 0;
            if (bl2.a_f0_Z || bl2.b_f1_B == 2 || bl2.a_m0_PRZ()) {
                switch {
                    case 2: {
                        if (bl2.a_f1_S == 0 && n2 != 0) {
                            if (bl2.a_m0_PRZ() && bl2.c_m1_PRZ()) {
                                n2 = bl2.c_f1_I;
                                bl2.a_m3_PLdu_BRZ(di.a_f9_Ldo_, 1);
                                if (bl2.b_f1_B == 2) {
                                    bl2.j();
                                    bl2.c_f1_I = n2;
                                    break;
                                }
                                bl2.a_m1_PIRV(16);
                                break;
                            }
                            bl2.a_m1_PIRV(16);
                            break;
                        }
                        bl2.j();
                        break;
                    }
                    case 0: 
                    case 1: {
                        if (bl2.a_f1_S != 0 || n2 == 0) break;
                        bl2.k();
                    }
                }
            }
        }
        this.d_m0_PIRV(am.a_f0_ALs_[this.a_f1_B].a_m3_PBRB);
        if (this.a_f1_S > 0) {
            this.a_f1_S = (this.a_f1_S - 1);
        }
    
  }
  h() {

        this.a_m1_PIRV(16);
    
  }
  f(by2) {

        this.h = by2;
    
  }
  b_m2_PRB() {

        if (this.b_f1_B == 1) {
            return this.h;
        }
        return -1;
    
  }
  e_m1_PRZ() {

        if (di.d_f3_B == 4) {
            let false = null;
        }
        return super.e_m0_PRZ();
    
  }
  u() {

        if (this.g != 1 && this.g != 47) {
            super.u();
        }
    
  }
  v() {

        if (this.g != 1 && this.g != 47) {
            super.v();
        }
    
  }
  a_m0_PRZ() {

        if (di.d_f3_B == 4) {
            let false = null;
        }
        return this.g == 1 || this.g == 47;
    
  }
  a_m1_PIRV(n2) {

        this.a_f1_S = this.a_m0_PRZ() ? 0 : n2;
        this.a_m2_PBRV(1);
        this.c_f1_I = 0;
    
  }
  c_m1_PRZ() {

        let n2 = this.a_m4_PLdu_RI;
        return n2 > 2 || !di.a_f9_Ldo_.j && !di.a_f9_Ldo_.k;
    
  }
  k() {

        if (this.a_f2_I == 0) {
            if (this.a_m0_PRZ()) {
                if (this.c_m1_PRZ()) {
                    this.a_m3_PLdu_BRZ(di.a_f9_Ldo_, 1);
                    return;
                }
            } else if (this.l && di.d_f3_B == 3) {
                if (this.s == this.j && this.t == this.k) {
                    let by2 = am.b[this.a_f1_B];
                    let by3 = this.c_f0_B;
                    if (by2 == 30) {
                        by3 = ((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 4 + 1);
                    } else if (by2 == 6) {
                        by3 = ((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 2 + 1);
                    } else if (by2 == 24) {
                        by3 = ((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 2 + 3);
                    }
                    this.a_m1_PBIRV(by3, (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 3);
                    return;
                }
                if (this.s != this.j) {
                    let by4 = this.s > this.j ? 3 : 4;
                    this.a_m1_PBIRV(by4, Math.abs(this.s - this.j));
                    return;
                }
                if (this.t != this.k) {
                    let by5 = this.t > this.k ? 1 : 2;
                    this.a_m1_PBIRV(by5, Math.abs(this.t - this.k));
                }
            }
        }
    
  }
  a_m2_PBRV(by2) {

        if (by2 == 2 && this.f == 0) {
            this.d_m3_PBRV(8);
        } else if (by2 == 1) {
            this.d_m3_PBRV(am.a_f1_AB[this.a_f1_B]);
        }
        super.a_m0_PBRV;
        this.i = this.b_f1_B == 2 ? 1 : 0;
    
  }
  a_m3_PIRB(n2) {

        return am.a_f0_ALs_[this.a_f1_B].a_m3_PBRB(n2);
    
  }
  g(by2) {

        this.a_m2_PBRV(99);
        this.i = by2;
    
  }
}

JavaRegistry.set("bl", bl);
JavaRegistry.set("bl", bl);
try { if (typeof bl.__clinit === 'function') bl.__clinit(); } catch (e) { console.warn('clinit bl', e); }

globalThis.bl = bl;
