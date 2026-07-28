/** Transpiled from p */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class p extends (JavaRegistry.get("b") || class {}) {
  static c = new Int32Array([0xFFFFFF, 0xFFFF00, 16722152, 65280]);
  static e = d.e_ / 2 - 3;
  static f = d.e_ / 2 - 3;
  p(n2, by2, by3, by4) {

        /*super*/(n2, by2, by3, by4);
    
  }
  p(n2, by2) {

        this(n2, by2, 1, 1);
    
  }
  a_m0_PLcm_IIBBRV(cm2, n2, n3, by2, by3) {

        cm2.b_m0_PIIIIRV(this.a_, this.b_, d.e_, 174);
        if (by3 == -3) {
            cm2.a_m2_PIRV(15723216);
            for (by3 = 0; by3 < 2; by3 = (by3 + 1)) {
                cm2.e(n2 + 1, n3 + by3 * 13, n2 + by2 - 2, n3 + by3 * 13);
                cm2.e(n2 + by3 * (by2 - 1), n3 + 1, n2 + by3 * (by2 - 1), n3 + 14 - 2);
            }
            return;
        }
        cm2.a_m2_PIRV(6379080);
        n.c_m3_PLcm_IIIIRV(cm2, n2, n3, by2, 14);
        if (by3 == -2) {
            return;
        }
        if (by3 == -1) {
            b.a_m1_PLcm_IIRV(cm2, n2 + 25, n3 + 6);
        } else {
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m2_PLcm_IIABIIRV(cm2, n2 + (by2 >> 1), n3 + 1, p.a_m1_PBRAB, 1, 1);
        }
        a_m2_PLcm_IIBZRV(cm2, n2 + 1, n3 + 3, by3, false);
    
  }
  static a_m1_PBRAB(by2) {

        return rpg.e.g_f0_Lch_.a_m0_PIRAB(by2 + 35);
    
  }
  static a_m2_PLcm_IIBZRV(cm2, n2, n3, by2, bl2) {

        cm2.b_m0_PIIIIRV(n2, n3, 6, 6);
        if (by2 >= 0) {
            cm2.a_m1_PLcg_IIIRV(rpg.e.s, n2 - by2 * 6, n3, 20);
        } else if {
            if (by2 == -1) {
                cm2.a_m2_PIRV(0);
                cm2.a_m4_PIIIIRV(n2 + 1, n3 + 1, 4, 4);
            }
            cm2.a_m2_PIRV(0xAAA27A);
            cm2.d_m0_PIIIIRV(n2, n3, 5, 5);
        } else {
            cm2.a_m2_PIRV(0);
            n.c_m3_PLcm_IIIIRV(cm2, n2, n3, 6, 6);
        }
        a.a_m1_PLcm_RV;
    
  }
  static b_m0_PLcm_IILas_ZRV(cm2, n2, n3, as2, bl2) {

        if {
            cm2.a_m2_PIRV(p.c[(as2).e]);
        } else {
            cm2.a_m2_PIRV(0xFFFFFF);
        }
        if (as2.a_f3_AB != null) {
            ac.a_m0_PLcm_IIABIRV(cm2, n2, n3, as2.a_f3_AB, 0);
        }
    
  }
  a_m3_PLcm_BIIIRV(cm2, by2, n2, n3, n4) {

        let by3 = by2;
        ac.a_m2_PLcm_IIABIIRV(cm2, n2, n3, rpg.e.g_f0_Lch_.a_m0_PIRAB, 0, n4);
    
  }
  a_m4_PLcm_BIIZRV(cm2, by2, n2, n3, bl2) {

        cm2.a_m2_PIRV(di.a_f9_Ldo_.a_m28_PRB() < by2 ? 0xFF0000 : 0xFFFFFF);
        let byArray = g.a_m0_PABABRAB(d.n, ("" + by2).getBytes());
        ac.a_m0_PLcm_IIABIRV(cm2, n2, n3, byArray, 1);
    
  }
  a_m5_PLcm_IILbm_RV(cm2, n2, n3, bm2) {

        let n4 = bm2.a_m5_PRI();
        cm2.a_m2_PIRV(7368792);
        n.c_m3_PLcm_IIIIRV(cm2, n2, n3, 45, 8);
        for (let i2 = 0; i2 < n4; ++i2) {
            a_m2_PLcm_IIBZRV(cm2, n2 + 2 + i2 * 7, n3 + 1, bm2.c_f1_AB[i2], true);
        }
        a.a_m1_PLcm_RV;
    
  }
  a_m6_PLcm_IILas_RV(cm2, n2, n3, as2) {

        this.a_m7_PLcm_IILas_ZRV(cm2, n2, n3, as2, false);
    
  }
  a_m7_PLcm_IILas_ZRV(cm2, n2, n3, as2, bl2) {

        this.a_m8_PLcm_IILas_ZZRV(cm2, n2, n3, as2, bl2, false);
    
  }
  a_m8_PLcm_IILas_ZZRV(object, n2, n3, as2, bl2, n4) {

        let bm2 = null;
        let n5 = null;
        if (n4 != 0) {
            n.a_m12_PLcm_IIIRV(object, this.a_, n3 - 2, 30);
        }
        if (as2 == null) {
            (object).a_m2_PIRV(0x7F7F7F);
            let n6 = 24;
            ac.a_m0_PLcm_IIABIRV(object, n2 + 9, n3, rpg.e.g_f0_Lch_.a_m0_PIRAB, 0);
            return;
        }
        (object).b_m0_PIIIIRV(this.a_, this.b_, d.e_, 174);
        let n7 = as2.a_f1_B;
        let n8 = as2 let bm = null;
        b_m0_PLcm_IILas_ZRV(object, n2 + 9, n3, as2, n8 != 0);
        if {
            (object).a_m2_PIRV(14597755);
            this.a_m3_PLcm_BIIIRV(object, n7, n2 + d.e_ - 9, n3, 8);
        } else if (n4 != 0) {
            (object).a_m2_PIRV(14597755);
            this.a_m3_PLcm_BIIIRV(object, n7, n2 + d.e_ - 9, n3, 8);
            let bm3 = as2;
            if (bm3.a_m5_PRI() > 0) {
                n8 = n2 + 9;
                n5 = n3 + 15;
                this.a_m5_PLcm_IILbm_RV(object, n8, n5, bm3);
            }
        } else if (n8 != 0 && (bm2 = as2).a_m5_PRI() > 0) {
            n8 = n2 + d.e_ - 46;
            n5 = n3 + 2;
            this.a_m5_PLcm_IILbm_RV(object, n8, n5, bm2);
        }
        if (!bl2 && n4 == 0) {
            let as3 = as2;
            let n9 = n3 + 15 + 6;
            n3 = n2;
            let cm2 = object;
            object = this;
            n4 = as3.a_f1_B;
            n7 = as3 let bm = null;
            let bm4 = null;
            cm2.a_m2_PIRV(0);
            if (n7 != 0) {
                bm4 = as3;
            }
            n5 = n3 + 2;
            let n10 = n5 + p.e + 2;
            let n11 = n10 + (p.f >> 1);
            super.f(cm2, n3, n9, n9, 32);
            if (n7 == 0 || dp.a_m4_PLas_RZ) {
                cm2.a_m2_PIRV(0xFFFFFF);
            } else {
                cm2.a_m2_PIRV(0xFF0000);
            }
            super.a_m3_PLcm_BIIIRV(cm2, n4, n11, n9 + 1, 1);
            let n12 = n9 + 17;
            cm2.a_m2_PIRV(0);
            if (n7 != 0) {
                super.f(cm2, n3, n9, n12, n7 != 0 ? 33 : 34);
                (object).a_m4_PLcm_BIIZRV(cm2, bm4.d_f0_B, n10 + 46, n12 + 1, false);
                n7 = bm4.d_f1_S > 0 ? 1 : 0;
                super.f(cm2, n3, n9, n12 += 17, n7 != 0 ? 52 : 51);
                object = n7 != 0 ? new String("" + bm4.d_f1_S) : (n4 == 11 ? (bm4.c_f0_S > 0 ? new String("" + bm4.c_f0_S) : new String("---")) : new String("" + bm4.b + "-" + bm4.c_f0_S + "/" + bm4.h + "%"));
                cm2.a_m2_PIRV(0xFFFFFF);
                ac.a_m2_PLcm_IIABIIRV(cm2, n11, n12 + 1, (object).getBytes(), 1, 1);
                return;
            }
            n7 = rpg.f.b - 4;
            n.c_m3_PLcm_IIIIRV(cm2, n5, n12, n7, 43);
            cm2.a_m2_PIRV(0xFFFFFF);
            if (!(as3 instanceof dv) && as3.b_f1_AB != null) {
                ac.a_m1_PLcm_IIIIABRV(cm2, n5 + 2, n12 + 2, n7 - 4, 0, as3.b_f1_AB);
            }
        }
    
  }
  f(cm2, n2, n3, n4, n5) {

        let n6 = n5;
        let byArray = rpg.e.g_f0_Lch_.a_m0_PIRAB;
        n3 = n4;
        let cm3 = cm2;
        n5 = n2 + 2;
        let n7 = n5 + p.e + 2;
        cm3.a_m2_PIRV(0);
        n.c_m3_PLcm_IIIIRV(cm3, n5, n3, p.e, 14);
        n.c_m3_PLcm_IIIIRV(cm3, n7, n3, p.f, 14);
        cm3.e(n2, n3 + 14 + 1, n2 + d.e_ - 1, n3 + 14 + 1);
        cm3.a_m2_PIRV(14597755);
        if (byArray != null) {
            ac.a_m2_PLcm_IIABIIRV(cm3, n5 + (p.e >> 1) + 1, n3 + 1, byArray, 0, 1);
        }
    
  }
  b_m1_PLcm_IILas_RV(cm2, n2, n3, as2) {

        let n4 = as2.a_f1_B;
        let n5 = as2 let bm = null;
        let bm2 = null;
        let n6 = n2 + 20;
        cm2.a_m2_PIRV(0);
        cm2.a_m4_PIIIIRV(n2, n3, d.e_, 16);
        as2.a_m10_PLcm_IIZZRV(cm2, n2 + 1, n3 + 1, true, true);
        b_m0_PLcm_IILas_ZRV(cm2, n6, n3 + 3, as2, n5 != 0);
        if (n5 != 0) {
            bm2 = as2;
            n6 = 28 + bm2.e;
            ac.a_m2_PLcm_IIABIIRV(cm2, n2 + d.e_ - 3, n3 + 3, rpg.e.g_f0_Lch_.a_m0_PIRAB, 0, 8);
        }
        n6 = n2 + 2;
        let n7 = n6 + p.e + 2;
        let n8 = n7 + (p.f >> 1);
        let n9 = n3 + 16 + 1;
        this.f(cm2, n2, n3, n9, 32);
        cm2.a_m2_PIRV(0xFFFFFF);
        this.a_m3_PLcm_BIIIRV(cm2, n4, n8, n9 + 1, 1);
        n9 += 17;
        cm2.a_m2_PIRV(0);
        if (n5 != 0) {
            this.f(cm2, n2, n3, n9, n5 != 0 ? 33 : 34);
            this.a_m4_PLcm_BIIZRV(cm2, bm2.d_f0_B, n7 + 8, n9 + 1, false);
            n5 = bm2.d_f1_S > 0 ? 1 : 0;
            this.f(cm2, n2, n3, n9 += 17, n5 != 0 ? 52 : 51);
            let string = n5 != 0 ? new String("" + bm2.d_f1_S) : (n4 == 11 ? (bm2.c_f0_S > 0 ? new String("" + bm2.c_f0_S) : new String("---")) : new String("" + bm2.b + "-" + bm2.c_f0_S + "/" + bm2.h + "%"));
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m2_PLcm_IIABIIRV(cm2, n8, n9 + 1, string.getBytes(), 1, 1);
            n9 += 17;
            for (n4 = 0; n4 < 6; ++n4) {
                let n10 = n4 >> 1;
                n3 = n4 % 2;
                let by2 = n3 > 0 ? f : p.e;
                this.a_m0_PLcm_IIBBRV(cm2, n6 + n3 * (p.e + 2), n9 + n10 * 15, by2, bm2.c_f1_AB[n4]);
            }
            return;
        }
        n5 = rpg.f.b - 5;
        n.c_m3_PLcm_IIIIRV(cm2, n6, n9, n5, 119);
        cm2.a_m2_PIRV(0xFFFFFF);
        if (as2.b_f1_AB != null) {
            ac.a_m1_PLcm_IIIIABRV(cm2, n6 + 2, n9 + 2, n5 - 4, 0, as2.b_f1_AB);
        }
    
  }
  a_m9_PLas_RV(as2) {

        this.b_f1_Ln_ = new cj(this, as2);
    
  }
  b_m2_PLcm_RV(cm2) {

        this.e;
    
  }
  e(cm2) {

        let n2 = this.a_f2_B / this.c_f0_B;
        let n3 = this.a_f2_B % this.c_f0_B;
        n3 = this.a_ + 70 + n3 * 15;
        n2 = this.b_ + 17 + n2 * 15;
        let n4 = n3;
        n3 = n2;
        n2 = n4;
        cm2.a_m2_PIRV(0x660000);
        cm2.d_m0_PIIIIRV(n2, n3 - 1, 13, 15);
        cm2.e(n2 - 1, n3, n2 - 1, n3 + 14 - 1);
        cm2.e(n2 + 14, n3, n2 + 14, n3 + 14 - 1);
        cm2.a_m2_PIRV(0xFF0000);
        cm2.e(n2, n3 + 1, n2, n3 + 14 - 1 - 1);
        cm2.e(n2 + 14 - 1, n3 + 1, n2 + 14 - 1, n3 + 14 - 1 - 1);
        cm2.e(n2 + 1, n3, n2 + 14 - 2, n3);
        cm2.e(n2 + 1, n3 + 14 - 1, n2 + 14 - 2, n3 + 14 - 1);
    
  }
  a_m10_PLcm_Lbj_BZBBIRV(cm2, bj2, by2, bl2, n2, n3, n4) {

        let n5 = null;
        let n6 = null;
        let n7 = this.b_ + 80;
        n.a_m12_PLcm_IIIRV(cm2, this.a_, n7, 15);
        let n8 = this.a_ + 70;
        let n9 = this.b_ + 17;
        let n10 = n2 * 14 + n2;
        let n11 = n3 * 14 + n3;
        cm2.a_m2_PIRV(15723216);
        n.c_m3_PLcm_IIIIRV(cm2, n8 - 1, n9 - 1, n10 + 1, n11 + 1);
        for (n6 = 0; n6 < n3; ++n6) {
            for (n5 = 0; n5 < n2; ++n5) {
                n11 = n8 + n5 * 15;
                let n12 = n9 + n6 * 15;
                let as2 = bj2.a_m1_PIRLas_(n6 * n2 + n5);
                if (as2 != null) {
                    as2.a_m9_PLcm_IIRV(cm2, n11, n12);
                    if (as2.c > 1) {
                        n.b_m6_PLcm_IIIIIRV(cm2, as2.c, n11 + 14 - 1, n12 + 14 - 7, 8, 0);
                    }
                    if (!as2.c()) continue;
                    cm2.a_m2_PIRV(0xFF0000);
                    cm2.d_m0_PIIIIRV(n11, n12, 13, 13);
                    continue;
                }
                cm2.a_m2_PIRV(0);
                n.c_m3_PLcm_IIIIRV(cm2, n11, n12, 14, 14);
            }
        }
        if {
            cm2.a_m2_PIRV(0xFFFFFF);
            let n13 = by2 + 25;
            ac.a_m0_PLcm_IIABIRV(cm2, this.a_ + 9, n7 + 2, rpg.e.g_f0_Lch_.a_m0_PIRAB, 0);
        } else {
            this.b_m2_PLcm_RV;
            this.a_m6_PLcm_IILas_RV(cm2, this.a_, n7 + 2, bj2.a_m1_PIRLas_);
        }
        cm2.b_m0_PIIIIRV(this.a_, this.b_, d.e_, 174);
        cm2.a_m2_PIRV(3550755);
        n6 = this.a_ + 9;
        n5 = this.b_ + 174 - 14;
        ac.a_m0_PLcm_IIABIRV(cm2, n6, n5 + 1, rpg.e.b_f0_Lch_.a_m0_PIRAB(31), 0);
        this.b_m5_PLcm_IIIRV(cm2, this.a_ + 111, n5 + 5, n4);
    
  }
}

JavaRegistry.set("p", p);
JavaRegistry.set("p", p);
try { if (typeof p.__clinit === 'function') p.__clinit(); } catch (p.e) { console.warn('clinit p', p.e); }

globalThis.p = p;
