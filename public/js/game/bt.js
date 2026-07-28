/** Transpiled from bt */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bt extends (JavaRegistry.get("eb") || class {}) {
  m = 0;
  a_f0_AB = null;
  /* skip field: private byte[][] a_f1_AAB = null; */
  n = null;
  o = 1;
  e = true;
  g = false;
  h = true;
  constructor(n2, byArray, byArray2, n3) {
    super();

        /*super*/(n2, byArray2.length, byArray2.length, 1, 6);
        this.h = n3;
        this.a_f0_AB = byArray;
        this.a_f1_AAB = byArray2;
        this.l = byArray2.length;
        for (n3 = 0; n3 < this.l; ++n3) {
            let n4 = ac.a_m8_PABRI(byArray2[n3]);
            if (n4 <= this.j) continue;
            this.j = n4;
        }
        this.j = !this.h && this.j < d.f_ - 5 ? d.f_ : (this.j += 5);
        this.o = 2;
        let n5 = this.j;
        let n6 = ac.a_m8_PABRI;
        if (n6 > this.j) {
            this.j = n6;
        }
        this.j += 11;
        if (this.j > d.f_) {
            this.j = d.f_;
            this.o = ac.a_m7_PABIRI(byArray, this.j - 10);
        }
        this.k = (this.l + this.o << 4) + 10 + 3;
        if (!this.h) {
            this.k -= 16;
        }
        this.f_f1_I = a.d - (this.k >> 1);
        (this).e = a.c - (this.j >> 1);
        this.n = 4;
        this.m = a.c - (n5 >> 1);
        this.g = false;
    
  }
  constructor(n2, byArray, byArray2) {
    super();

        this(n2, byArray, byArray2, true);
    
  }
  constructor(n2, byArray, by2, bl2) {
    super();

        this(n2, byArray, rpg.e.b_f0_Lch_.a_m1_PIIRAAB(2, 3), false);
        this.f_f0_B = by2;
        this.n = 1;
        this.m = a.c + 1;
        this.e = bl2;
        if (this.f_f0_B == 4) {
            this.a_f2_B = 1;
        }
        if (by2 == 3) {
            this.g = true;
        }
    
  }
  constructor(n2, byArray, by2, bl2, bl3) {
    super();

        this(n2, byArray, by2, bl2);
        this.g = true;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if {
            if (this.c_m2_PIIRZ(n2, n3)) {
                this.a_f3_Z = true;
                let true = null;
            }
        } else if (this.d_m2_PIIRZ(n2, n3)) {
            this.a_f3_Z = true;
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            this.a_f1_Ln_.a_m3_PBBRV(this.f_f0_B, this.a_f2_B);
        } else if (this.g && n.g(n2, n3)) {
            this.a_f1_Ln_.a_m3_PBBRV(this.f_f0_B, 1);
        }
        let true = null;
    
  }
  a_m1_PLcm_RV(cm2) {

        let n2 = null;
        let n3 = null;
        if {
            eb.f(cm2, (this).e, this.f_f1_I, this.j, this.k);
            cm2.a_m2_PIRV(15723216);
            cm2.d_m0_PIIIIRV((this).e, this.f_f1_I, this.j - 1, this.k - 1);
            cm2.a_m2_PIRV(3550755);
        } else {
            let n4 = this.k;
            let n5 = this.j;
            n3 = this.f_f1_I;
            n2 = (this).e;
            let cm3 = cm2;
            cm3.b_m0_PIIIIRV(n2 - 1, n3 - 1, n5 + 2, n4 + 2);
            cm3.a_m2_PIRV(3550755);
            cm3.a_m4_PIIIIRV(n2 - 1, n3 - 1, n5 + 2, n4 + 2);
            cm3.a_m2_PIRV(7027456);
            cm3.d_m0_PIIIIRV(n2, n3, n5 - 1, n4 - 1);
            cm2.a_m2_PIRV(0x660000);
        }
        if {
            cm2.a_m4_PIIIIRV((this).e + 2, this.f_f1_I + 5 + (this.a_f2_B + this.o << 4) + 3, this.j - 4, 16);
        }
        if (!this.e) {
            cm2.a_m2_PIRV(0xFFFFFF);
        }
        if (this.o == 1) {
            ac.a_m2_PLcm_IIABIIRV(cm2, a.c + 1, this.f_f1_I + 5 + 1, this.a_f0_AB, 0, 1);
        } else {
            ac.a_m1_PLcm_IIIIABRV(cm2, (this).e + 5, this.f_f1_I + 5 + 1, this.j - 10, 0, this.a_f0_AB);
        }
        if {
            for (let i2 = 0; i2 < this.l; ++i2) {
                cm2.a_m2_PIRV(i2 == this.a_f2_B ? 0xFFFFFF : (this.e ? 0 : 12630160));
                ac.a_m2_PLcm_IIABIIRV(cm2, this.m, this.f_f1_I + 5 + 1 + (i2 + this.o << 4) + 3, this.a_f1_AAB[i2], 0, this.n);
            }
            return;
        }
        n2 = this.f_f1_I + 5 + 1 + (this.o << 4) + 3;
        for (n3 = 0; n3 < this.l; ++n3) {
            let n6 = a.c - 30 + n3 * 60;
            if (n3 == this.a_f2_B) {
                cm2.a_m2_PIRV(0x660000);
                cm2.a_m4_PIIIIRV(n6 - 26, n2 - 1, 52, 15);
            }
            cm2.a_m2_PIRV(n3 == this.a_f2_B ? 0xFFFFFF : (this.e ? 0 : 12630160));
            ac.a_m2_PLcm_IIABIIRV(cm2, n6, n2, this.a_f1_AAB[n3], 0, 1);
        }
    
  }
}

JavaRegistry.set("bt", bt);
JavaRegistry.set("bt", bt);
try { if (typeof bt.__clinit === 'function') bt.__clinit(); } catch (e) { console.warn('clinit bt', e); }

globalThis.bt = bt;
