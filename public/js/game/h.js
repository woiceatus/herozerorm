/** Transpiled from h */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class h extends (JavaRegistry.get("cd") || class {}) {
  a = null;
  b = -1;
  static a_m0_PLdo_SRV(al2, s2) {

        if (di.a_f10_Lh_ != null) {
            al2 = di.a_f10_Lh_;
            di.a_f10_Lh_.a_f2_Lal_ = null;
            (al2).h_m1_PIRV((al2).j_f2_I);
            (al2).a_m2_PBRV(8);
            (al2).b = s2;
            return;
        }
        new h(al2, s2);
    
  }
  h(do_, s2) {

        /*super*/(do_.h, do_.i);
        this.a = do_;
        this.n = this.a.a_m28_PRB();
        this.k_f2_I = this.j_f2_I = this.a.f_m2_PBRI(0);
        this.e_f0_S = this.d = this.a.a_f7_I;
        this.g_f0_S = this.a.e_m3_PBRI(1);
        this.c_f0_S = -1;
        this.i = 1;
        this.b = s2;
        this.a_f0_Z = true;
        this.a_f2_Lal_ = null;
        this.a_f1_Ls_ = rpg.e.a_f2_Lca_;
        this.j_f0_B = 3;
        this.k_f0_B = 2;
        if (this.a_m1_PBBRZ(1, 4)) {
            di.a_f4_Lg_.a_m3_PLdu_RV;
            di.a_f10_Lh_ = this;
        }
    
  }
  a_m1_PBBRZ(by2, by3) {

        this.a_f1_S = 0;
        if (this.a_m18_PSSBBRZ(this.a.s, this.a.t, 1, 4)) {
            this.a_m2_PBRV(8);
            let true = null;
        }
        this.a_m2_PBRV(7);
        let false = null;
    
  }
  b_m0_PIIRV(n2, n3) {

        n2 = n2 + this.h + this.q;
        n3 = n3 + (this).i + this.r + 1;
        if (this.l > 0) {
            this.l = (this.l - 1);
            if (this.l % 2 == 0) {
                n2 += rpg.d.J[this.m] << 1;
                n3 += rpg.d.K[this.m] << 1;
            }
        }
        if (n2 < -16 || n3 < 0 || n2 > bs.j + 16 || n3 > bs.k + 32) {
            this.a_f0_Z = false;
            return;
        }
        this.a_f0_Z = true;
        this.a_m4_PIIZRV(n2, n3, false);
        this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.h_f0_B == 4 ? 1 : this.c_f0_B, this.c_f1_I, n2, n3);
        this.b_m3_PIIZRV(n2, n3, true);
        this.d_m2_PIIRV(n2, n3);
    
  }
  a_m2_PBRV(by2) {

        if (by2 != 4) {
            super.a_m1_PBRV;
        }
    
  }
  a_m3_PRV() {

        switch {
            case 2: {
                this.h_f0_B = 2;
                break;
            }
            case 3: {
                this.h_f0_B = 6;
                break;
            }
            case 6: {
                this.h_f0_B = 4;
                break;
            }
            case 8: {
                this.h_f0_B = 16;
                break;
            }
            default: {
                this.h_f0_B = 0;
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  c() {

        this.b = (this.b - 1);
        if (this.b < 0 && this.b_f1_B != 6 && this.b_f1_B != 7) {
            this.a_m2_PBRV(6);
            return;
        }
        if (!this.a_f0_Z || this.a_m3_PLdu_RB> 6 && this.b_m2_PLdu_RB> 6) {
            this.a_f2_Lal_ = null;
            this.v();
            if (!this.a_m1_PBBRZ(1, 8)) {
                this.b = 0;
                return;
            }
        } else {
            super.c_m2_PRV();
        }
    
  }
  d() {

        if (this.j()) {
            this.a_m2_PIRV(0);
        }
    
  }
  b_m1_PRV() {

        if (this.a_f2_Lal_ == this.a_m5_PBLdu_RLdu_(this.c_f0_B, this.a_f2_Lal_)) {
            this.b_m5_PLal_IBRZ(this.a_f2_Lal_, this.a_m10_PRS(), this.c_f0_B);
        }
    
  }
  e() {

        this.a_m2_PIRV;
    
  }
  f() {

        let al2 = null;
        let vector = this.a_m14_PBRLjava_util_Vector_(4);
        while (vector.size() > 0) {
            let n2 = (al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % vector.size();
            let du2 = vector.elementAt;
            if (du2 instanceof cd && !(du2 instanceof h)) {
                al2 = du2;
                break;
            }
            vector.removeElementAt;
        }
        if (al2 != null && this.b_m3_PLdu_RZ) {
            this.a_f2_Lal_ = al2;
        }
    
  }
  a_m4_PRB() {

        return this.a.a_m28_PRB();
    
  }
  a_m5_PRI() {

        return this.a.a_m25_PRI();
    
  }
  a_m6_PBRI(by2) {

        return this.a.a_m22_PBRI;
    
  }
  a_m7_PLal_RZ(al2) {

        return this.a.a_m32_PLal_RZ;
    
  }
  a_m8_PIRZ(n2) {

        let n2 == 1 || n2 == 4;
    
  }
  g() {

        this.a = null;
        this.b = -1;
        this.a_m2_PBRV(7);
        di.a_f10_Lh_ = null;
        di.a_f4_Lg_.d_m2_PLdu_RV;
    
  }
  h() {

        if (this.a_f2_Lal_ == null || this.a_m4_PLdu_RI> 1) {
            let by2 = this.c_f0_B;
            for (let i2 = 0; i2 < 4; ++i2) {
                let du2 = this.a_m5_PBLdu_RLdu_(by2, null);
                if (du2 != null && du2 instanceof cd) {
                    this.a_f2_Lal_ = du2;
                    this.c_m0_PBRV;
                    this.a_m2_PBRV(3);
                    return;
                }
                by2 = rpg.d.O[by2];
            }
        }
        super.h_m0_PRV();
    
  }
  a_m9_PLdu_RZ(du2) {

        if (du2 == null) {
            this.a_f2_Lal_ = null;
            let false = null;
        }
        if (du2 instanceof al && (du2).b_f1_B == 7) {
            this.a_f2_Lal_ = null;
            let false = null;
        }
        if (du2 instanceof cd) {
            for (let by2 = 1; by2 <= 4; by2 = (by2 + 1)) {
                if (this.a_m5_PBLdu_RLdu_(by2, du2) != du2) continue;
                this.c_m0_PBRV;
                let true = null;
            }
        }
        return super.a_m8_PLdu_RZ;
    
  }
  b_m2_PRI() {

        return this.a.b_m11_PRI();
    
  }
  a_m10_PRS() {

        let n2 = null;
        let n3 = n2 = this.c_f1_I == 4 ? this.a.a_m9_PZRI: this.a.a_m9_PZRI;
        if (!this.a.b_f5_Z && this.h_f1_Z) {
            return ((n2 << 2) / 5);
        }
        let n2 = null;
    
  }
}

JavaRegistry.set("h", h);
JavaRegistry.set("h", h);
try { if (typeof h.__clinit === 'function') h.__clinit(); } catch (e) { console.warn('clinit h', e); }

globalThis.h = h;
