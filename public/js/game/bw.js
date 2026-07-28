/** Transpiled from bw */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bw extends (JavaRegistry.get("l") || class {}) {
  static b = cg.a_m4_PLjava_lang_String_RLcg_("/mtx.png");
  static a_f0_ALcg_ = new cg[6];
  static e_f0_Z = false;
  a_f1_Las_ = null;
  a_f2_AB = null;
  static e_f1_I = null;
  static f = null;
  static j = null;
  bw(n2) {

        /*super*/(n2, 6);
        bw.e_f0_Z = false;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            if (this.a_f2_B == 6 && n2 == -7) {
                di.d_f3_B = 3;
                ax.a_m0_PRLax_().g();
                if (n2 == -7) {
                    di.a_f9_Ldo_.b_m3_PRV();
                    ax.g_f0_Z = false;
                }
            } else if ((this.a_f2_B == 7 || this.a_f2_B == 8) && n2 == -7) {
                ax.g_f0_Z = false;
                this.a_f1_Ln_.a_m3_PBBRV(-1, -1);
            }
            let true = null;
        }
        if (n.g(n2, n3)) {
            if (this.b_f1_Ln_ != null) {
                this.c_m0_PRV();
            } else if {
                ax.g_f0_Z = false;
                di.a_m2_PBBRV(7, 0);
            } else {
                this.a_f1_Ln_.c_m0_PRV();
            }
            bw.e_f1_I = 34;
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            let bw2 = this;
            switch {
                case 0: {
                    bw2.b_f1_Ln_ = new ae(bw2, bw2.a_m1_PBBRAB(0, 0), 3, true);
                    break;
                }
                case 1: {
                    if {
                        bw2.b_f1_Ln_ = new br(bw2, bw2.a_m1_PBBRAB(1, 1), 1);
                        break;
                    }
                    bw2.b_f1_Ln_ = new ae(bw2, bw2.a_m1_PBBRAB(0, 1), 3, true);
                    break;
                }
                case 2: {
                    if {
                        bw2.b_f1_Ln_ = new br(bw2, bw2.a_m1_PBBRAB(1, 2), 1);
                        break;
                    }
                    bw2.b_f1_Ln_ = new ae(bw2, bw2.a_m1_PBBRAB(0, 2), 3, true);
                    break;
                }
                case 3: {
                    if {
                        bw2.b_f1_Ln_ = new br(bw2, bw2.a_m1_PBBRAB(1, 3), 1);
                        break;
                    }
                    bw2.b_f1_Ln_ = new ae(bw2, bw2.a_m1_PBBRAB(0, 3), 3, true);
                    break;
                }
                case 4: {
                    if (di.a_f9_Ldo_ == null || di.a_f9_Ldo_.a_m28_PRB() >= 99) {
                        bw2.b_f1_Ln_ = new br(bw2, d.A, 1);
                        break;
                    }
                    bw2.b_f1_Ln_ = new ae(bw2, bw2.a_m1_PBBRAB(0, 4), 3, true);
                    break;
                }
                case 5: {
                    bw2.b_f1_Ln_ = new da(bw2, true);
                    break;
                }
                default: {
                    let false = null;
                }
            }
            bw2.a_f3_Z = true;
            let true = null;
        }
        if (n3 == 50 || n2 == 1) {
            if (this.a_f2_B > 0) {
                this.a_f2_B = (this.a_f2_B - 1);
            }
            if (bw.e_f1_I >= 34 - (6 - bw.f) * 42 && this.a_f2_B <= 6 - bw.f) {
                bw.e_f1_I = -this.a_f2_B * 42 + 34;
            }
            let true = null;
        }
        if (n3 == 56 || n2 == 6) {
            if (this.a_f2_B < 5) {
                this.a_f2_B = (this.a_f2_B + 1);
            }
            if (bw.e_f1_I > 34 - (6 - bw.f) * 42) {
                bw.e_f1_I = -this.a_f2_B * 42 + 34;
            }
            let true = null;
        }
        let true = null;
    
  }
  a_m1_PBBRAB(by2, by3) {

        if (by2 == 2) {
            return d.q;
        }
        if (by2 == 0) {
            byte[][] byArrayArray = new Int8Array(2)[];
            if (this.a_f2_B == 7) {
                by3 = 0;
            } else if (this.a_f2_B == 8) {
                by3 = 5;
            }
            byArrayArray[0] = d.e[by3];
            let byArray = c.a_f9_Lds_.a_m0_PIRAB(by3 + 1);
            byArrayArray[1] = ("" + byArray[0]).getBytes();
            if (this.a_f2_B == 5 || this.a_f2_B == 8) {
                return d.z;
            }
            if (this.a_f2_B == 7) {
                return d.B;
            }
            return bw.a_m6_PAABAABRAB(d.c, byArrayArray);
        }
        if (by2 == 3) {
            if (this.a_f2_B == 5) {
                return this.a_f2_AB;
            }
            if (this.a_f2_B == 4) {
                byte[][] byArrayArray = new Int8Array(1)[];
                byte[][] byArrayArray2 = byArrayArray;
                byArrayArray[0] = ("" + (di.a_f9_Ldo_.a_m28_PRB() + 5 > 99 ? 99 : di.a_f9_Ldo_.a_m28_PRB() + 5)).getBytes();
                let byArray = bw.a_m6_PAABAABRAB(d.h_f1_AAB, byArrayArray2);
                let byArray = null;
            }
            if (this.a_f2_B == 7) {
                by3 = 0;
            } else if (this.a_f2_B == 8) {
                return this.a_f2_AB;
            }
            byte[][] byArrayArray = new Int8Array(1)[];
            byte[][] byArrayArray3 = byArrayArray;
            byArrayArray[0] = d.e[by3];
            let byArray = bw.a_m6_PAABAABRAB(d.d, byArrayArray3);
            let byArray = null;
        }
        if (by2 == 1) {
            byte[][] byArrayArray = new Int8Array(1)[];
            byte[][] byArrayArray4 = byArrayArray;
            byArrayArray[0] = d.e[by3];
            return bw.a_m6_PAABAABRAB(d.b, byArrayArray4);
        }
        let null = null;
    
  }
  a_m2_PABILas_RV(byArray, n2, as2) {

        this.c_m0_PRV();
        if (n2 == 0) {
            this.b_f1_Ln_ = new br(this, byArray, 1);
            return;
        }
        if (n2 == 1) {
            this.a_f1_Las_ = as2;
            this.a_f2_AB = byArray;
            this.b_f1_Ln_ = new ae(this, this.a_m1_PBBRAB(0, 5), 3, true);
        }
    
  }
  a_m3_PBBRV(by2, by3) {

        block19: {
            block16: {
                block18: {
                    block17: {
                        this.c_m0_PRV();
                        if (by2 != 3 || by3 != 0) let block16 = null;
                        by2 = this.a_f2_B;
                        if (this.a_f2_B == 7) {
                            by2 = 0;
                        } else if (this.a_f2_B == 8) {
                            by2 = 5;
                        }
                        if (!c.a_f9_Lds_.a_m1_PIRZ(by2 + 1)) let block17 = null;
                        this.b_f1_Ln_ = new br(this, this.a_m1_PBBRAB(3, this.a_f2_B), 1);
                        switch {
                            case 0: {
                                di.e_f1_I += 20000;
                                di.l();
                                let block18 = null;
                            }
                            case 1: {
                                ax.i_f0_Z = true;
                                rpg.b.a_m5_PRZ();
                                let block18 = null;
                            }
                            case 2: {
                                ax.j = true;
                                rpg.b.a_m5_PRZ();
                                let block18 = null;
                            }
                            case 3: {
                                ax.h_f0_Z = true;
                                rpg.b.a_m5_PRZ();
                                let block18 = null;
                            }
                            case 5: {
                                di.a_m11_PBRLbj_.a_m5_PLas_IRI(this.a_f1_Las_, 1);
                                di.l();
                                let block18 = null;
                            }
                            case 4: {
                                di.a_f9_Ldo_.g_m1_PRV();
                                di.k();
                                let block18 = null;
                            }
                            case 6: {
                                di.d_f3_B = 3;
                                ax.a_m0_PRLax_().g();
                                di.a_f9_Ldo_.d_m0_PRV();
                                let block18 = null;
                            }
                            case 7: {
                                di.e_f1_I += 20000;
                                di.l();
                                let block18 = null;
                            }
                            case 8: {
                                di.a_m11_PBRLbj_.a_m5_PLas_IRI(this.a_f1_Las_, 1);
                                di.l();
                            }
                        }
                        let block19 = null;
                    }
                    this.b_f1_Ln_ = new br(this, this.a_m1_PBBRAB(2, this.a_f2_B), 1);
                }
                return;
            }
            if (by2 == 1 && (this.a_f2_B == 7 || this.a_f2_B == 8)) {
                this.a_f1_Ln_.a_m3_PBBRV(-2, -2);
                return;
            }
            if (this.a_f2_B == 6 && by2 == 1) {
                this.b_f1_Ln_ = new ae(this, this.a_m1_PBBRAB(0, 6), 3, true);
            }
        }
    
  }
  static a_m4_PRV() {

        di.d_f3_B = 7;
        ax.a_m0_PRLax_().g();
        di.a_f9_Ldo_.d_m0_PRV();
        di.k();
    
  }
  a_m5_PLcm_RV(cm2) {

        if (this.a_f2_B < 6) {
            let n2 = null;
            let n3 = null;
            cm2.a_m2_PIRV(0);
            cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            cm2.b_m1_PIRV(255);
            cm2.a_m4_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            if (e.k_f1_Lcg_ != null) {
                n3 = e.k_f1_Lcg_.a_m5_PRI();
                bw.j = e.k_f1_Lcg_.b();
                for (n2 = 0; n2 < a.a_f0_I; n2 += n3) {
                    cm2.a_m1_PLcg_IIIRV(e.k_f1_Lcg_, n2, 1, 20);
                    cm2.a_m1_PLcg_IIIRV(e.k_f1_Lcg_, n2, a.b_f0_I - 1, 36);
                }
            }
            n3 = bw.e_f1_I;
            n2 = n3 + 21;
            let n4 = a.a_f0_I - 48 - 8;
            cm2.b_m0_PIIIIRV(0, 34, a.a_f0_I, a.b_f0_I - 68);
            for (let i2 = 0; i2 < 6; ++i2) {
                let n5 = null;
                cm2.a_m1_PLcg_IIIRV(bw.b, 0, n3, 20);
                cm2.a_m1_PLcg_IIIRV(bw.a_f0_ALcg_[i2], 24, n2, 3);
                if (i2 == this.a_f2_B) {
                    cm2.b_m1_PIRV(40);
                    cm2.a_m2_PIRV(0xFFFF00);
                    cm2.a_m4_PIIIIRV(0, n3, a.a_f0_I, 42);
                    cm2.b_m1_PIRV(255);
                }
                cm2.a_m2_PIRV(0xFFFFFF);
                ac.a_m4_PLcm_IIIABIIIRV(cm2, 48, n3 + 6, n4, d.f[i2], 0, d.f[i2].length, 4);
                let n6 = i2;
                switch {
                    case 1: {
                        if {
                            n5 = 1;
                            break;
                        }
                        n5 = 0;
                        break;
                    }
                    case 2: {
                        if {
                            n5 = 1;
                            break;
                        }
                        n5 = 0;
                        break;
                    }
                    case 3: {
                        if {
                            n5 = 1;
                            break;
                        }
                        n5 = 0;
                        break;
                    }
                    case 5: {
                        n5 = 0;
                        break;
                    }
                    case 4: {
                        if (di.a_f9_Ldo_ != null && di.a_f9_Ldo_.a_m28_PRB() < 99) {
                            n5 = 0;
                            break;
                        }
                        n5 = 1;
                        break;
                    }
                    default: {
                        n5 = n6 = 0;
                    }
                }
                if (n5 == 0) {
                    cm2.a_m2_PIRV(65535);
                    let object = c.a_f9_Lds_.a_m0_PIRAB(i2 + 1);
                    object = "" + object[0];
                    byte[][] byArrayArray = new Int8Array(1)[];
                    byte[][] byArrayArray2 = byArrayArray;
                    byArrayArray[0] = object.getBytes();
                    object = bw.a_m6_PAABAABRAB(d.g_f1_AAB, byArrayArray2);
                    ac.a_m4_PLcm_IIIABIIIRV(cm2, a.a_f0_I - 2 - ac.b(object, 0, n4), n3 + 42 - ac.a_f3_I - 4, n4, object, 0, (object).length, 4);
                } else {
                    cm2.a_m2_PIRV(0x888888);
                    ac.a_m4_PLcm_IIIABIIIRV(cm2, a.a_f0_I - 2 - ac.b(d.r, 0, n4), n3 + 42 - ac.a_f3_I - 4, n4, d.r, 0, d.r.length, 4);
                }
                n3 += 42;
                n2 += 42;
            }
            if (bw.f != 6) {
                cm2.a_m2_PIRV(16765952);
                if (bw.e_f1_I == 34) {
                    cm2.b_m0_PIIIIRV(a.c - 8, a.b_f0_I - bw.j, 16, 8);
                    cm2.a_m7_PIIIIIIRV(a.c - 8, a.b_f0_I - bw.j, a.c + 8, a.b_f0_I - bw.j, a.c, a.b_f0_I - bw.j + 8);
                } else if (bw.e_f1_I < 34 && bw.e_f1_I > 34 - (6 - bw.f) * 42) {
                    cm2.b_m0_PIIIIRV(a.c - 8, bw.j - 8, 16, 8);
                    cm2.a_m7_PIIIIIIRV(a.c - 8, bw.j, a.c + 8, bw.j, a.c, bw.j - 8);
                    cm2.b_m0_PIIIIRV(a.c - 8, a.b_f0_I - bw.j, 16, 8);
                    cm2.a_m7_PIIIIIIRV(a.c - 8, a.b_f0_I - bw.j, a.c + 8, a.b_f0_I - bw.j, a.c, a.b_f0_I - bw.j + 8);
                } else if (bw.e_f1_I == 34 - (6 - bw.f) * 42) {
                    cm2.b_m0_PIIIIRV(a.c - 8, bw.j - 8, 16, 8);
                    cm2.a_m7_PIIIIIIRV(a.c - 8, bw.j, a.c + 8, bw.j, a.c, bw.j - 8);
                }
                cm2.b_m0_PIIIIRV(0, 0, a.a_f0_I, a.b_f0_I);
            }
        } else {
            a.a_f1_Z = true;
        }
        n.a_m0_PLcm_IRV(cm2, 3);
    
  }
  static a_m6_PAABAABRAB(byArray, byArray2) {

        if (byArray == null || byArray2 == null || byArray.length != byArray2.length + 1) {
            let null = null;
        }
        let byArray3 = byArray[0];
        for (let i2 = 0; i2 < byArray2.length; ++i2) {
            if (byArray2[i2] != null) {
                byArray3 = g.a_m0_PABABRAB(byArray3, byArray2[i2]);
            }
            if (byArray[i2 + 1] == null) continue;
            byArray3 = g.a_m0_PABABRAB(byArray3, byArray[i2 + 1]);
        }
        let byArray3 = null;
    
  }
  static __clinit() {

        for (let i2 = 0; i2 < 6; ++i2) {
            bw.a_f0_ALcg_[i2] = cg.a_m4_PLjava_lang_String_RLcg_("/mtx" + i2 + ".png");
        }
        bw.e_f1_I = 34;
        bw.f = (a.b_f0_I - 68) / 42;
    
  }
}

JavaRegistry.set("bw", bw);
JavaRegistry.set("bw", bw);
try { if (typeof bw.__clinit === 'function') bw.__clinit(); } catch (e) { console.warn('clinit bw', e); }

globalThis.bw = bw;
