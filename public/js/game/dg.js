/** Transpiled from dg */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dg extends (JavaRegistry.get("p") || class {}) {
  static a_f0_AB = new Int8Array([2, 0, -1, 6, 1, 7, 3]);
  static b = null;
  /* skip field: protected static byte[][] a_f1_AAB; */
  static d = null;
  static e_f0_AI = null;
  e_f1_I = null;
  f_f0_I = null;
  e_f2_Z = false;
  f_f1_Z = false;
  static g = null;
  dg(n2, by2, by3, by4) {

        /*super*/(n2, by2, 3, by4);
        this.e_f0_B = 0;
        this.e_f1_I = 0;
        this.f_f0_I = 1;
        this.f_f1_Z = false;
        this.e_f2_Z = false;
        this.b_f3_Z = true;
    
  }
  a_m0_PLcm_BLas_ZZRV(cm2, by2, as2, bl2, bl3) {

        let var5_10 = null;
        let n2 = null;
        let byArray = null;
        let n3 = null;
        let n4 = null;
        let bm2 = null;
        this.a_m7_PLcm_ZZZZRV(cm2, false, true, true, false);
        let n5 = this.b_ + 66;
        n.a_m12_PLcm_IIIRV(cm2, this.a_, n5, 15);
        this.a_m8_PLcm_IILas_ZZRV(cm2, this.a_, n5 + 2, as2, false, true);
        let n8 = this.a_ + (f.b - 122 >> 1);
        n5 = this.b_ + 24;
        for (bm2 = 0; bm2 < 6; bm2 = (bm2 + 1)) {
            n4 = bm2 / 3;
            this.a_m1_PLcm_BIIRV(cm2, bm2, n8 + n3 * 15, n5 + n4 * 15 + ((n3 = bm2 % 3) == 1 ? -7 : 0));
        }
        this.a_m1_PLcm_BIIRV(cm2, 6, n8 + 15, n5 + 30 - 7);
        n4 = by2;
        n3 = this.b_ + 17;
        n5 = this.a_ + (f.b - 122 >> 1) + 56;
        let cm3 = cm2;
        let dg2 = this;
        cm3.a_m2_PIRV(0xAAA27A);
        n.c_m3_PLcm_IIIIRV(cm3, n5 - 7, n3 - 2, 73, 48);
        cm3.a_m2_PIRV(15723216);
        n.c_m3_PLcm_IIIIRV(cm3, n5 - 6, n3 - 1, 71, 46);
        cm3.a_m2_PIRV(0xAAA27A);
        cm3.d_m0_PIIIIRV(n5 - 7 + 5, n3 - 2, 62, 47);
        for (bm2 = 0; bm2 < 3; ++bm2) {
            for (byArray = 0; byArray < 4; ++byArray) {
                n.c_m3_PLcm_IIIIRV(cm3, n5 + byArray * 15, n3 + bm2 * 15, 14, 14);
            }
        }
        cm3.a_m2_PIRV(3550755);
        for (bm2 = 0; bm2 < 4; ++bm2) {
            for (byArray = 0; byArray < 3; ++byArray) {
                cm3.a_m4_PIIIIRV(n5 + 1 + bm2 * 15, n3 + 1 + byArray * 15, 12, 12);
            }
        }
        if (a_f1_AAB[n4] != null) {
            let byArray2 = a_f1_AAB[n4];
            n4 = byArray2.length;
            dg2.f_f0_I = n4 / 12 + 1;
            block5: for (let i2 = 0; i2 < 3; ++i2) {
                for (let i3 = 0; i3 < 4; ++i3) {
                    bm2 = i3 + (i2 << 2);
                    if ((bm2 += dg2.e_f1_I * 12) >= n4) let block5 = null;
                    let bm3 = di.a_m12_PRLbj_().a_m1_PIRLas_(byArray2[bm2]);
                    if (bm3 == null) continue;
                    n2 = n5 + i3 * 15;
                    let n6 = n3 + i2 * 15;
                    bm3.a_m9_PLcm_IIRV(cm3, n2, n6);
                }
            }
            if (dg2.f_f0_I > 1) {
                dg2.e(cm3, 0xAAA27A, n5 - 6, n3 + 21);
                dg2.f(cm3, 0xAAA27A, n5 + 73 - 11, n3 + 21);
            }
        }
        n3 = var5_10;
        n5 = bl2 ? 1 : 0;
        cm3 = cm2;
        dg2 = this;
        n4 = dg2.a_ + 20;
        let n10 = 2 + (a.a_f0_I >> 1);
        let n7 = dg2.b_ + 100;
        cm3.b_m0_PIIIIRV(dg2.a_, dg2.b_, rpg.d.e_, 174);
        cm3.a_m2_PIRV(3550755);
        cm3.a_m4_PIIIIRV(n4 + 60, n7 - 1, 18, 68);
        cm3.a_m4_PIIIIRV(n10 + 70, n7 - 1, 18, 68);
        cm3.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[2], n4, n7, 20);
        cm3.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[4], n4, n7 + 25, 20);
        cm3.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[5], n4, n7 + 50, 20);
        cm3.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[3], n10, n7, 20);
        cm3.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[6], n10, n7 + 25, 20);
        cm3.a_m1_PLcg_IIIRV(e.l_f1_ALcg_[7], n10, n7 + 50, 20);
        for (n2 = 0; n2 < 3; n2 = ((n2 + 1))) {
            dg2.a_m3_PLcm_IIIZZRV(cm3, n2, n4 + 60 + 18, n7 + n2 * 25 + 5, n5 != 0, n3 != 0);
            dg2.a_m3_PLcm_IIIZZRV(cm3, n2 + 3, n10 + 70 + 18, n7 + n2 * 25 + 5, n5 != 0, n3 != 0);
        }
    
  }
  a_m1_PLcm_BIIRV(cm2, by2, n2, n3) {

        if (dg.b == null || dg.b[by2] < 0) {
            let n4 = n2;
            let n5 = n3;
            n3 = by2;
            n2 = n5;
            by2 = n4;
            cm2.b_m0_PIIIIRV(by2, n2, 14, 14);
            cm2.a_m1_PLcg_IIIRV(e.n, by2 - n3 * 14, n2, 20);
            bs.e_m0_PLcm_RV;
            return;
        }
        let as2 = dg.a_m4_PBRLas_;
        as2.a_m9_PLcm_IIRV(cm2, n2, n3);
        cm2.a_m2_PIRV(15723216);
        cm2.d_m0_PIIIIRV(n2, n3, 13, 13);
    
  }
  static a_m2_PLcm_IIBIZRV(cm2, n2, n3, by2, n4, bl2) {

        cm2.a_m2_PIRV;
        for (n4 = 0; n4 < 3; ++n4) {
            if (by2 == 4) {
                cm2.e(n2 + n4, n3 - n4, n2 + n4, n3 + n4);
                continue;
            }
            cm2.e(n2 + 3 - n4 - 1, n3 - n4, n2 + 3 - n4 - 1, n3 + n4);
        }
    
  }
  e(cm2, n2, n3, n4) {

        a_m2_PLcm_IIBIZRV(cm2, n3, n4, 4, n2, false);
    
  }
  f(cm2, n2, n3, n4) {

        a_m2_PLcm_IIBIZRV(cm2, n3, n4, 3, n2, false);
    
  }
  a_m3_PLcm_IIIZZRV(cm2, n2, n3, n4, bl2, bl3) {

        let n5 = n2;
        if (n2 == 1 && bl3) {
            n5 = 6;
        }
        n.b_m6_PLcm_IIIIIRV(cm2, dg.d[n5], n3 - 26, n4, 8, 0);
        if {
            n2 = 0;
            if (dg.e_f0_AI[n5] > 0) {
                n2 = dg.e_f0_AI[n5] - dg.d[n5];
            }
            if (n2 == 0) {
                this.b(cm2, n3 - 24, n4 + 2);
                return;
            }
            if (n2 > 0) {
                g(cm2, n3 - 20, n4 + 3, 0x6666FF);
            } else {
                g(cm2, n3 - 20, n4 + 3, 0xFF0000);
            }
            n.b_m6_PLcm_IIIIIRV(cm2, dg.e_f0_AI[n5], n3 - 1, n4, 8, 0);
            return;
        }
        this.b(cm2, n3 - 24, n4 + 2);
    
  }
  static g(cm2, n2, n3, n4) {

        let n5 = null;
        cm2.a_m2_PIRV(3550755);
        for (n5 = 0; n5 < 4; ++n5) {
            cm2.e(n2 - n5, n3 - n5, n2 - n5, n3 + n5);
        }
        cm2.e(n2 - 4, n3 - 3, n2 - 4, n3 + 3);
        cm2.a_m2_PIRV;
        for (n5 = 0; n5 < 3; ++n5) {
            cm2.e(n2 - 1 - n5, n3 - n5, n2 - 1 - n5, n3 + n5);
        }
    
  }
  b(cm2, n2, n3) {

        cm2.a_m2_PIRV(3550755);
        cm2.a_m4_PIIIIRV(n2, n3, 5, 3);
        cm2.a_m2_PIRV(0xFFFFFF);
        cm2.e(n2 + 1, n3 + 1, n2 + 3, n3 + 1);
        dg.b.a_m1_PLcm_IIRV(cm2, n2 + 12, n3 + 1);
    
  }
  static a_m4_PBRLas_(by2) {

        let as2 = null;
        if (dg.b != null && dg.b[by2] >= 0) {
            as2 = di.a_m12_PRLbj_().a_m1_PIRLas_(dg.b[by2]);
        }
        let as2 = null;
    
  }
  static a_m5_PRAI() {

        let do_ = di.a_f9_Ldo_;
        let nArray = new Int32Array(7);
        do_.i_m1_PRV();
        nArray[0] = do_.f_m2_PBRI(0);
        nArray[3] = do_.f_m2_PBRI(1);
        nArray[1] = do_.b_m5_PZRI;
        nArray[4] = do_.b_m10_PBRI(2);
        nArray[2] = do_.a_f7_I;
        nArray[5] = do_.b_m10_PBRI(0);
        nArray[6] = do_.b_m5_PZRI;
        let nArray = null;
    
  }
  a_m6_PRV() {

        dg.d = new Int32Array(7);
        dg.d = dg.a_m5_PRAI();
    
  }
  static __clinit() {

        dg.g = false;
    
  }
}

JavaRegistry.set("dg", dg);
JavaRegistry.set("dg", dg);
try { if (typeof dg.__clinit === 'function') dg.__clinit(); } catch (e) { console.warn('clinit dg', e); }

globalThis.dg = dg;
