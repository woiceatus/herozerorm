/** Transpiled from cu */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cu extends (JavaRegistry.get("cl") || class {}) {
  a_f0_AB = new Int8Array([1, 1, 2, 2, 5, 4, 5, 2, 2, -1, -1]);
  b = new Int8Array([3, 0, 6]);
  c = new Int8Array([0, 0, 0, 0, 0, 0, 2]);
  d = new Int8Array([40, 45, 45, 40, 27, 27, 27, 27, 27, 27, 27, 27, 10, -2, 4]);
  a_f1_Z = false;
  a_f2_Lcd_ = null;
  constructor(do_) {
    super();

        super;
    
  }
  a_m0_PBIRZ(by2, n2) {

        let n3 = 0;
        let n4 = n2 == this.a_f0_AB[by2] ? 1 : 0;
        switch {
            case 0: 
            case 1: 
            case 2: {
                if (n2 == this.b[by2]) {
                    n3 = 1;
                    n4 = 1;
                }
            }
            case 3: {
                if (n4 == 0) let true = null;
                if (!this.a_m9_PBBIZZZRZ(this.c[(by2 << 1) + (n3 != 0 ? 1 : 0)], by2, -1, false, n3 != 0, false)) let false = null;
                this.c_m1_PBRV;
                let true = null;
            }
            case 4: {
                let cu2 = this;
                n3 = 1;
                switch {
                    case 0: {
                        cu2.a_f1_Z = false;
                        return n3 != 0;
                    }
                    case 2: 
                    case 5: {
                        n2 = cu2.a_m5_PBIZRI(4, cu2.a_f0_Ldo_.b_m10_PBRI(1), true);
                        let n5 = n2 = rpg.g.a_m7_PIIRI(0, 99) < n2 ? -100 : -2;
                        if (cu2.a_f0_Ldo_.a_m18_PBBBIRZ(4, 2, 11, n2)) {
                            cu2.a_m3_PBRV(4);
                        } else {
                            n3 = 0;
                        }
                        cu2.a_f1_Z = cu2.a_f0_Ldo_.g_f0_B > 0;
                        return n3 != 0;
                    }
                    case 4: 
                    case 6: {
                        if (!cu2.a_f1_Z) return n3 != 0;
                        cu2.a_f0_Ldo_.c_m0_PBRV(rpg.d.P[cu2.a_f0_Ldo_.c_f0_B]);
                        cu2.a_f1_Z = false;
                        return n3 != 0;
                    }
                }
                return n3 != 0;
            }
            case 5: {
                let cu3 = this;
                switch {
                    case 4: {
                        let cd2 = cu3.a_f0_Ldo_.a_m16_PRLcd_();
                        if (cd2 != null && !cd2.b_m1_PRZ()) {
                            if (rpg.g.a_m7_PIIRI(0, 99) < cu3.c_m0_PBRI(5)) {
                                n4 = cu3.a_f0_Ldo_.c_m2_PZRI;
                                cd2.c_m6_PIIRV(75, n4);
                            } else {
                                cd2.D();
                            }
                        }
                        cu3.a_m3_PBRV(5);
                    }
                    case 6: {
                        di.a_f4_Lg_.c_m4_PIIRV(2, n2);
                        let true = null;
                    }
                }
                let true = null;
            }
            case 6: {
                let cu4 = this;
                n3 = 0;
                n4 = 0;
                if (n2 > 0 && n2 < 13) {
                    di.a_f4_Lg_.c_m4_PIIRV(cu4.d[n2 - 1] >> 1, 2);
                }
                switch {
                    case 1: {
                        cu4.a_f2_Lcd_ = cu4.a_f0_Ldo_.a_m16_PRLcd_();
                        if (cu4.a_f2_Lcd_ == null) {
                            cu4.a_f1_Z = false;
                            let true = null;
                        }
                        n2 = cu4.a_m7_PBZRI(6, false);
                        let cu5 = cu4;
                        cu4.a_f1_Z = cu4.a_f2_Lcd_.a_m12_PLdo_BIZBBZZZRZ(cu4.a_f0_Ldo_, 6, n2, false, cu4.a_f0_Ldo_.c_f0_B, 2, false, true, true);
                        if {
                            cu4.a_f2_Lcd_.c_m3_PABRV;
                            let true = null;
                        }
                    }
                    case 2: {
                        if let true = null;
                        cu4.a_f0_Ldo_.c_f1_I = 15;
                        let true = null;
                    }
                    case 3: {
                        cu4.a_f0_Ldo_.c_m4_PZRV;
                        break;
                    }
                    case 8: 
                    case 12: {
                        n4 = 1;
                    }
                    case 5: {
                        n3 = 1;
                        break;
                    }
                    case 13: {
                        cu4.a_f0_Ldo_.c_m4_PZRV;
                        if (cu4.a_f2_Lcd_ == null) break;
                        cu4.a_f2_Lcd_ = null;
                        break;
                    }
                    case 14: {
                        di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                    }
                }
                if (n3 == 0) let true = null;
                if (cu4.a_f2_Lcd_ != null) {
                    n2 = cu4.a_m7_PBZRI(6, n4 != 0);
                    let cu6 = cu4;
                    cu4.a_f2_Lcd_.a_m12_PLdo_BIZBBZZZRZ(cu4.a_f0_Ldo_, 6, n2, false, cu4.a_f0_Ldo_.c_f0_B, 2, false, true, true);
                }
                cu4.a_m3_PBRV(6);
                let true = null;
            }
            case 7: {
                if (n4 == 0) let true = null;
                by2 = this.c_m0_PBRI(7);
                let cu7 = this;
                this.a_f0_Ldo_.a_m18_PBBBIRZ(7, by2, 2, -2);
                this.a_m3_PBRV(7);
                let true = null;
            }
            case 8: {
                let cu8 = this;
                n3 = n2 == 4 ? 1 : 0;
                switch {
                    case 1: 
                    case 4: {
                        n4 = cu8.a_m7_PBZRI(8, n3 != 0);
                        di.a_f4_Lg_.a_m3_PLdu_RV(new bz(cu8.a_f0_Ldo_, n2 == 4 ? 1 : 0, 8, n4));
                        cu8.a_m3_PBRV(7);
                        let true = null;
                    }
                }
                let true = null;
            }
            case 9: {
                let cu9 = this;
                if (n2 != 5) let true = null;
                cu9.a_f0_Ldo_.f_m0_PBRV(10);
                g.a_m16_PIRV(1);
                for (n3 = 1; n3 <= 4; n3 = ((n3 + 1))) {
                    cu9.a_f0_Ldo_.i_m2_PBRV(n3);
                }
                n3 = cu9.c_m0_PBRI(9);
                h.a_m0_PLdo_SRV(di.a_f9_Ldo_, n3);
                cu9.a_m3_PBRV(9);
                let true = null;
            }
        }
        let true = null;
    
  }
  a_m1_PRB() {

        return 2;
    
  }
  a_m2_PBRZ(by2) {

        if (by2 == 7) {
            let true = null;
        }
        return this.a_m8_PRZ();
    
  }
  a_m3_PBRV(by2) {

        let by3 = 5;
        switch {
            case 5: 
            case 7: 
            case 9: {
                by3 = 0;
                break;
            }
            case 8: {
                by3 = 4;
            }
        }
        bq.a_m2_PBRV;
    
  }
  b(by2) {

        switch {
            case 7: 
            case 9: 
            case 10: {
                let false = null;
            }
        }
        let true = null;
    
  }
}

JavaRegistry.set("cu", cu);
JavaRegistry.set("cu", cu);
try { if (typeof cu.__clinit === 'function') cu.__clinit(); } catch (e) { console.warn('clinit cu', e); }

globalThis.cu = cu;
