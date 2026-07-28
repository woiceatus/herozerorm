/** Transpiled from k */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class k extends (JavaRegistry.get("al") || class {}) {
  a_f0_Z = false;
  a_f1_S = 0;
  a_f2_I = 0;
  k(s2, s3, by2, by3) {

        /*super*/(s2, s3, 8, by3);
    
  }
  h() {

    
  }
  i() {

        this.a_m2_PIRV(0);
        this.b_f0_Ljava_util_Vector_.removeAllElements();
        this.a_f0_Ljava_util_Vector_.removeAllElements();
        if (this.a_f2_I > 0) {
            this.a_f2_I = 0;
        }
    
  }
  a_m0_PZRV(bl2) {

        let by2 = null;
        if (this.a_f2_I != 0) {
            return;
        }
        if ((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 6 == 0) {
            this.a_m1_PBIRV(((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 4 + 1), 0);
            return;
        }
        let n2 = 0;
        while (!di.a_f4_Lg_.a_m13_PLal_BRZ(this, by2 = ((al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 4 + 1)) && ++n2 < 5) {
        }
        this.a_m1_PBIRV(by2, (al.a_f1_Ljava_util_Random_.nextInt() & 0xF) % 2 + (bl2 ? 1 + this.u : 1));
    
  }
  a_m1_PBIRV(by2, n2) {

        if (this.f > 0) {
            this.a_f1_S = (16 / this.f * n2);
        }
        this.c_m0_PBRV;
        if (n2 > 0) {
            this.a_m0_PBRV(2);
        }
    
  }
  a_m2_PIRV(n2) {

        this.a_f1_S = n2;
        this.a_m0_PBRV(1);
    
  }
  a_m3_PLdu_BRZ(du2, by2) {

        let by3 = null;
        let by4 = this.a_m3_PLdu_RB;
        let by5 = this.b_m2_PLdu_RB;
        let by6 = by4;
        if (du2.s > this.s) {
            by6 = 0 - by4;
        }
        let by7 = by5;
        if (du2.t > this.t) {
            by7 = 0 - by5;
        }
        let by8 = 0;
        let by9 = 0;
        if (by7 != 0) {
            let by10 = by8 = by7 > 0 ? 1 : 2;
        }
        if (by6 != 0) {
            by9 = by6 > 0 ? 3 : 4;
        }
        by6 = 0;
        if (by4 < by5) {
            by7 = by8;
            by3 = by9;
        } else {
            by7 = by9;
            by3 = by8;
        }
        let g2 = di.a_f4_Lg_;
        if (by4 + by5 <= by2) {
            if (by2 > 1 && by4 != by5 && by4 * by5 != 0) {
                if (g2.a_m13_PLal_BRZ(this, by3)) {
                    this.a_m1_PBIRV(by3, 1);
                    let true = null;
                }
                if (!g2.a_m13_PLal_BRZ(this, by7)) let false = null;
                this.a_m1_PBIRV(by7, 1);
                let true = null;
            }
            this.c_m0_PBRV;
            if (by4 != by5) let false = null;
            this.d_f0_B = ((by8 << 1) + by9);
            let false = null;
        }
        if (this.a_f2_I != 0) let false = null;
        by8 = 0;
        by9 = g2.a_m13_PLal_BRZ(this, this.c_f0_B) ? 1 : 0;
        if ((this.c_f0_B == by7 || this.c_f0_B == by3) && this.c_f0_B != 0 && by9 != 0) {
            by8 = 1;
            by6 = this.c_f0_B;
        } else if (by3 != 0 && d.P[this.c_f0_B] != by3 && g2.a_m13_PLal_BRZ(this, by3)) {
            by8 = 1;
            by6 = by3;
        } else if (by7 != 0 && d.P[this.c_f0_B] != by7 && g2.a_m13_PLal_BRZ(this, by7)) {
            by8 = 1;
            by6 = by7;
        } else {
            if (this.c_m3_PBRZ) {
                this.a_f1_S = (16 / this.f << 1);
                let true = null;
            }
            if (this.c_m3_PBRZ) {
                this.a_f1_S = (16 / this.f << 1);
                let true = null;
            }
        }
        if (by8 != 0) {
            if (this instanceof bl && (this).a_m0_PRZ()) {
                this.a_m1_PBIRV(by6, by6 == 3 || by6 == 4 ? by4 - (by2 - 1) : by5 - (by2 - 1));
                return by8 != 0;
            } else {
                this.a_m1_PBIRV(by6, 1);
            }
            return by8 != 0;
        } else {
            this.a_m0_PZRV;
        }
        return by8 != 0;
    
  }
  j() {

        if (this.a_f1_S > 0) {
            this.w();
        }
        this.d_m1_PRZ();
    
  }
  k() {

        this.a_m0_PZRV;
    
  }
  b_m0_PIRV(n2) {

        this.a_f2_I = n2;
    
  }
  b_m1_PRZ() {

        return this.b_f1_B == 7 || this.b_f1_B == 6;
    
  }
  a_m4_PIIZRV(n2, n3, bl2) {

        if (this.b_m1_PRZ()) {
            return;
        }
        let cm2 = rpg.a.a_f3_Lcm_;
        if (this.u == 1) {
            cm2.a_m1_PLcg_IIIRV(rpg.e.e_f0_ALcg_[bl2 ? 1 : 0], n2, n3 + 6, 33);
            return;
        }
        cm2.a_m1_PLcg_IIIRV(rpg.e.e_f0_ALcg_[bl2 ? 1 : 0], n2 - 2, n3 + 6, 33);
        cm2.a_m1_PLcg_IIIRV(rpg.e.e_f0_ALcg_[bl2 ? 1 : 0], n2 + 2, n3 + 6, 33);
    
  }
}

JavaRegistry.set("k", k);
JavaRegistry.set("k", k);
try { if (typeof k.__clinit === 'function') k.__clinit(); } catch (e) { console.warn('clinit k', e); }

globalThis.k = k;
