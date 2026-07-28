/** Transpiled from bk */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bk extends (JavaRegistry.get("dg") || class {}) {
  f = 0;
  a = null;
  b = null;
  h = false;
  bk(n2, by2) {

        /*super*/(n2, 12, 3, 4);
        this.f = by2;
        this.e_f1_I = 0;
        this.h = true;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            let by2 = null;
            let bk2 = this;
            let do_ = di.a_f9_Ldo_;
            if (bk2.a != null) {
                do_.a_m31_PLbm_RV;
                bk2.a = null;
            }
            if ((by2 = dg.b[bk2.f]) >= 0) {
                let bm2 = di.a_m12_PRLbj_().a_m1_PIRLas_;
                do_.a_m30_PBLbm_RV(bk2.f, bm2);
            }
            do_.i_m1_PRV();
            this.a_f1_Ln_.a_f2_B = this.f;
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            n2 = this.a_f2_B + this.e_f1_I * 12;
            let bm3 = this.a_m3_PIRLbm_;
            if (bm3 == null) {
                let true = null;
            }
            this.b_f1_Ln_ = new dj(this, ax.a_f1_Lch_.a_m1_PIIRAAB(39, 25), 1);
            let true = null;
        }
        if (n3 == 52 || n2 == 2) {
            if {
                this.e_f1_I = (this.e_f1_I + this.f_f0_I - 1) % this.f_f0_I;
            } else if {
                this.f_f1_Z = false;
            } else if (this.f_f0_I > 1 && this.a_f2_B % 4 == 0) {
                this.e_f2_Z = true;
            } else {
                this.b_m3_PBRV(3);
                this.h = true;
            }
            let true = null;
        }
        if (n3 == 54 || n2 == 5) {
            if {
                this.e_f2_Z = false;
            } else if {
                this.e_f1_I = (this.e_f1_I + 1) % this.f_f0_I;
            } else if (this.f_f0_I > 1 && this.a_f2_B % 4 == 3) {
                this.f_f1_Z = true;
            } else {
                this.b_m3_PBRV(4);
                this.h = true;
            }
            let true = null;
        }
        if (this.e_m1_PIIRZ(n2, n3)) {
            this.h = true;
            let true = null;
        }
        let true = null;
    
  }
  a_m1_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 == 6) {
            if (by3 == 0) {
                this.b_f1_Ln_ = new br(this, ax.a_f1_Lch_.a_m0_PIRAB(57), '\u0000');
                let bk2 = this;
                let do_ = di.a_f9_Ldo_;
                do_.a_m30_PBLbm_RV(bk2.f, bk2.a);
                do_.i_m1_PRV();
                let by4 = dg.a_f0_AB[bk2.f];
                if (by4 >= 0) {
                    e.a_m11_PLca_IRV(e.a_f2_Lca_, by4);
                }
                dg.g = true;
                this.a_f1_Ln_.c_m0_PRV();
                return;
            }
            if (by3 == 1) {
                this.b_f1_Ln_ = new cj(this, this.a);
            }
        }
    
  }
  a_m2_PLcm_RV(cm2) {

        if {
            let n2 = this.a_f2_B + this.e_f1_I * 12;
            this.b = this.a_m3_PIRLbm_;
            if (this.b != null) {
                let bm2 = this.b;
                let bk2 = this;
                let do_ = di.a_f9_Ldo_;
                bk2.a = bm2;
                do_.a_m30_PBLbm_RV(bk2.f, bk2.a);
                do_.i_m1_PRV();
                dg.e_f0_AI = new Int32Array(7);
                dg.e_f0_AI = dg.a_m5_PRAI();
            }
            this.h = false;
        }
        this.a_m0_PLcm_BLas_ZZRV(cm2, this.f, this.b, this.b != null, this.f == 5);
    
  }
  b(cm2) {

        if {
            this.e(cm2, n.b_f0_AI[this.e_f0_B], this.a_ + (rpg.f.b - 122 >> 1) + 56, this.b_ + 17 + 21);
            return;
        }
        if {
            this.f(cm2, n.b_f0_AI[this.e_f0_B], this.a_ + 105 + 73 - 11, this.b_ + 17 + 21);
            return;
        }
        let n2 = this.a_f2_B / this.c_f0_B;
        let n3 = this.a_f2_B % this.c_f0_B;
        n3 = this.a_ + (rpg.f.b - 122 >> 1) + 56 + n3 * 15;
        n2 = this.b_ + 17 + n2 * 15;
        this.a_m4_PLcm_IIIIRV(cm2, n3, n2, 13, 13);
    
  }
  a_m3_PIRLbm_(n2) {

        let byArray = dg.a_f1_AAB[this.f];
        let bm2 = null;
        if (byArray != null && n2 < byArray.length) {
            bm2 = di.a_m12_PRLbj_().a_m1_PIRLas_(byArray[n2]);
        }
        let bm2 = null;
    
  }
}

JavaRegistry.set("bk", bk);
JavaRegistry.set("bk", bk);
try { if (typeof bk.__clinit === 'function') bk.__clinit(); } catch (e) { console.warn('clinit bk', e); }

globalThis.bk = bk;
