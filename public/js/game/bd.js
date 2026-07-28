/** Transpiled from bd */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bd extends (JavaRegistry.get("l") || class {}) {
  e = null;
  constructor(n2, bl2) {
    super();

        /*super*/(n2, 7);
        this.e = bl2;
        this.b_f3_Z = true;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3) || n.g(n2, n3)) {
            if (n2 == -7) {
                try {
                    c.a_m0_PRLrpg_c_().j();
                }
                catch (exception) {}
                n.c_f1_Z = false;
                this.a_f1_Ln_.a_f2_B = (this.e ? 1 : 3);
                this.a_f1_Ln_.c_m0_PRV();
            }
            let true = null;
        }
        if (n.h(n2, n3)) {
            switch {
                case -100: {
                    c.a_f4_B = bd.a_m1_PBBRB(c.a_f4_B, 10);
                    break;
                }
                case 2: {
                    c.b_f0_B = bd.a_m1_PBBRB(c.b_f0_B, 4);
                    break;
                }
                case 3: {
                    c.c_f0_B = bd.a_m1_PBBRB(c.c_f0_B, 4);
                    break;
                }
                case 5: {
                    c.d_f0_B = bd.a_m1_PBBRB(c.d_f0_B, 2);
                }
            }
            this.c;
            let true = null;
        }
        if (n.i(n2, n3)) {
            switch {
                case -100: {
                    let by2 = c.a_f4_B;
                    n3 = 10;
                    n2 = by2;
                    c.a_f4_B = ((by2 + 1) % n3);
                    bq.a_m3_PIRV;
                    break;
                }
                case 2: {
                    let by3 = c.b_f0_B;
                    n3 = 4;
                    n2 = by3;
                    c.b_f0_B = ((by3 + 1) % n3);
                    break;
                }
                case 3: {
                    let by4 = c.c_f0_B;
                    n3 = 4;
                    n2 = by4;
                    c.c_f0_B = ((by4 + 1) % n3);
                    break;
                }
                case 5: {
                    let by5 = c.d_f0_B;
                    n3 = 2;
                    n2 = by5;
                    c.d_f0_B = ((by5 + 1) % n3);
                }
            }
            this.c;
            let true = null;
        }
        return this.c_m2_PIIRZ(n2, n3);
    
  }
  static a_m1_PBBRB(by2, by3) {

        return ((by2 + by3 - 1) % by3);
    
  }
  c(by2) {

        switch {
            case 0: {
                if (c.b_f1_Z = !c.b_f1_Z) break;
                bq.b_m0_PRV();
                return;
            }
            case 1: {
                if (!(c.c_f1_Z = !c.c_f1_Z)) break;
                bq.a_m2_PBRV(0);
                return;
            }
            case 4: {
                c.a_f5_Z = !c.a_f5_Z;
                c.k();
                return;
            }
            case -100: {
                bq.a_m3_PIRV;
                if (c.a_f4_B == 0) {
                    bq.b_m0_PRV();
                    return;
                }
                if {
                    bq.a_f1_J = 0;
                    bq.a_m0_PRV();
                    break;
                }
                bq.a_m1_PBZRV(0, false);
                bq.a_f1_J = Date.now() + 3000;
                return;
            }
            case 2: {
                c.a_m3_PBRV;
                return;
            }
            case 6: {
                c.d_f1_Z = !c.d_f1_Z;
            }
        }
    
  }
  a_m2_PLcm_RV(cm2) {

        let n2 = a.d;
        if {
            this.a_m7_PLcm_ZZZZRV(cm2, false, false, true, false);
            n2 = this.a_m3_PLcm_IIZRI(cm2, -1, f.b - 2, false);
        } else {
            a.a_m3_PLcm_ZRV(cm2, true);
            n2 = a.b_f0_I <= 208 ? (n2 -= 60) : (n2 -= 32);
        }
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, f.d, rpg.e.b_f0_Lch_.a_m0_PIRAB(7), 0, 1);
        let n3 = a.c - 75;
        cm2.a_m2_PIRV(0xFFFFFF);
        let n4 = 0;
        let n5 = n2;
        while (n4 < 7) {
            ac.a_m0_PLcm_IIABIRV(cm2, n3, n5, rpg.e.b_f0_Lch_.a_m0_PIRAB(n4 + 16), 0);
            ++n4;
            n5 += 15;
        }
        n3 = a.c + 24 + 25 + 8;
        this.a_m3_PLcm_IIZBRV(cm2, n3, n2, c.b_f1_Z, 0);
        this.a_m3_PLcm_IIZBRV(cm2, n3, n2 + 14 + 1, c.c_f1_Z, 1);
        cm2.a_m2_PIRV(this.a_f2_B == 2 ? 0xFFFFFF : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, n3, n2 + 1 + 28 + 2, rpg.e.b_f0_Lch_.a_m0_PIRAB(23 + c.b_f0_B), 0, 1);
        let n6 = n2 + 1 + 42 + 2;
        let n7 = n3;
        let cm3 = cm2;
        let bd2 = this;
        if (c.c_f0_B == 0) {
            let n8 = 3;
            n7 = n6;
            let bd3 = bd2;
            cm3.a_m2_PIRV(bd3.a_f2_B == 3 ? 0xFFFFFF : 12630160);
            ac.a_m0_PLcm_IIABIRV(cm3, a.c + 24 + 25, n7 + 1, rpg.e.b_f0_Lch_.a_m0_PIRAB(38), 0);
        } else {
            cm3.a_m2_PIRV(bd2.a_f2_B == 3 ? 0xFFFFFF : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm3, n7, n6, ("" + c.c_f0_B).getBytes(), 0, 1);
        }
        this.a_m3_PLcm_IIZBRV(cm2, n3, n2 + 56 + 4, c.a_f5_Z, 4);
        cm2.a_m2_PIRV(this.a_f2_B == 5 ? 0xFFFFFF : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, n3, n2 + 70 + 6, rpg.e.b_f0_Lch_.a_m0_PIRAB(35 + c.d_f0_B), 0, 1);
        cm2.a_m2_PIRV(this.a_f2_B == 6 ? 0xFFFFFF : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, n3, n2 + 84 + 6, rpg.e.b_f0_Lch_.a_m0_PIRAB(c.d_f1_Z ? 37 : 38), 0, 1);
        n.a_m0_PLcm_IRV(cm2, 2);
    
  }
  b(cm2) {

        let n2 = a.d + 4 + 15 * (this.a_f2_B - 3) + (this.e ? -24 : 14);
        if (a.b_f0_I <= 208 && !this.e) {
            n2 -= 28;
        }
        n2 = this.e ? (n2 += 17) : (n2 += 3);
        n.a_m14_PLcm_IIIIZRV(cm2, a.c + 21, n2, 69, 0xFFFFFF, false);
    
  }
  a_m3_PLcm_IIZBRV(cm2, n2, n3, bl2, by2) {

        cm2.a_m2_PIRV(this.a_f2_B == by2 ? 0xFFFFFF : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, n2, n3 + 1, rpg.e.b_f0_Lch_.a_m0_PIRAB(bl2 ? 37 : 38), 0, 1);
    
  }
}

JavaRegistry.set("bd", bd);
JavaRegistry.set("bd", bd);
try { if (typeof bd.__clinit === 'function') bd.__clinit(); } catch (e) { console.warn('clinit bd', e); }

globalThis.bd = bd;
