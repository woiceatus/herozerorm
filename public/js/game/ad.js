/** Transpiled from ad */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ad extends (JavaRegistry.get("cl") || class {}) {
  a = null;
  b = null;
  constructor(do_) {
    super();

        super;
    
  }
  a_m0_PBIRZ(by2, n2) {

        block53: {
            block0 : switch {
                case 0: {
                    let ad2 = this;
                    let bl2 = false;
                    let bl3 = false;
                    if (n2 == 0) {
                        bl2 = true;
                        ad2.c_m1_PBRV(0);
                    } else if (n2 == 2) {
                        bl3 = true;
                        bl2 = true;
                    }
                    if (!bl2) break;
                    let ad3 = ad2;
                    ad2.a_m2_PBIBZRZ(0, -1, 4, bl3);
                    break;
                }
                case 4: {
                    let ad4 = this;
                    let bl4 = false;
                    let bl5 = false;
                    let ad5 = ad4;
                    let by3 = 4;
                    switch {
                        case 2: {
                            if (ad4.a_f0_Ldo_.a_m29_PBRLbm_(3) != null) {
                                by3 = 12;
                            }
                        }
                        case 0: {
                            bl4 = true;
                            break;
                        }
                        case 6: {
                            if (ad4.a_f0_Ldo_.a_m29_PBRLbm_(5) != null) {
                                by3 = 13;
                            }
                        }
                        case 4: {
                            bl5 = true;
                            bl4 = true;
                        }
                    }
                    if (!bl4) break;
                    n2 = ad4.a_m5_PBIZRI(4, ad4.a_f0_Ldo_.a_m22_PBRI(1), false);
                    ad4.a_m2_PBIBZRZ(4, n2 += ad4.a_f0_Ldo_.c_m2_PZRI, by3, bl5);
                    ad4.a_m5_PBRV(4);
                    break;
                }
                case 5: {
                    let ad6 = this;
                    switch {
                        case 0: {
                            ad6.a_m5_PBRV(5);
                            ad6.b = ad6.a_m1_PRLcd_();
                            if (ad6.b == null) break;
                            ad6.b.b_m0_PIRV(14);
                            ad6.b.a_m1_PLat_RV(new ak(14, 14));
                            break;
                        }
                        case 9: {
                            g.a_m16_PIRV(1);
                            break;
                        }
                        case 10: {
                            ad6.a_f0_Ldo_.m_m1_PIRV(-3);
                            if (ad6.b != null) {
                                let n3 = ad6.b_m0_PBIZRI(5, ad6.a_f0_Ldo_.a_m9_PZRI, false);
                                let ad7 = ad6;
                                ad6.b.a_m12_PLdo_BIZBBZZZRZ(ad6.a_f0_Ldo_, 5, n3, false, ad6.a_f0_Ldo_.c_f0_B, 4, false, false, false);
                            }
                            bq.a_m2_PBRV(1);
                            break;
                        }
                        case 12: {
                            ad6.a_f0_Ldo_.m_m1_PIRV(1);
                        }
                    }
                    break;
                }
                case 6: {
                    let n4 = null;
                    let ad8 = this;
                    let bl6 = false;
                    switch {
                        case 1: {
                            ad8.b = ad8.a_m1_PRLcd_();
                            ad8.a_f0_Ldo_.b_m4_PBRV(d.P[ad8.a_f0_Ldo_.c_f0_B]);
                        }
                        case 3: {
                            bl6 = true;
                        }
                        case 5: {
                            n4 = ad8.b_m0_PBIZRI(6, ad8.a_f0_Ldo_.a_m9_PZRI, bl6);
                            ad8.a_m5_PBRV(6);
                            break;
                        }
                        default: {
                            let block0 = null;
                        }
                    }
                    if (ad8.b == null) {
                        ad8.b = ad8.a_m1_PRLcd_();
                    }
                    if (ad8.b == null) break;
                    let ad9 = ad8;
                    ad8.a_f0_Ldo_.a_m10_PLcd_BIBBZZZRZ(ad8.b, 6, n4, ad8.a_f0_Ldo_.c_f0_B, 4, false, false, false);
                    break;
                }
                case 7: {
                    let ad10 = this;
                    let bl7 = false;
                    switch {
                        case 0: {
                            ad10.a_m1_PRLcd_();
                        }
                        case 4: 
                        case 8: 
                        case 12: {
                            ad10.a_m5_PBRV(7);
                            break;
                        }
                        case 2: 
                        case 6: 
                        case 10: {
                            bl7 = true;
                            break;
                        }
                        default: {
                            let block0 = null;
                        }
                    }
                    let n5 = ad10.a_m5_PBIZRI(7, ad10.a_f0_Ldo_.a_m9_PZRI, false);
                    if (n5 <= 0) break;
                    let ad11 = ad10;
                    ad10.a_f0_Ldo_.a_m12_PBIBZZRZ(7, n5, 4, bl7, false);
                    break;
                }
                case 8: {
                    let ad12 = this;
                    switch {
                        case 0: {
                            ad12.a_m5_PBRV(8);
                            break;
                        }
                        case 2: {
                            g.a_m16_PIRV(1);
                            break;
                        }
                        case 5: {
                            ad12.a = ad12.a_m1_PRLcd_();
                            if (ad12.a == null) break;
                            ad12.a.b_m0_PBIRV(16, 1);
                        }
                    }
                    break;
                }
                case 9: {
                    let ad13 = this;
                    switch {
                        case 0: {
                            ad13.a_m5_PBRV(9);
                            ad13.b = ad13.a_m1_PRLcd_();
                            if (ad13.b != null) {
                                ad13.b.b_m0_PIRV(14);
                                ad13.b.a_m1_PLat_RV(new ak(14, 14));
                                let block0 = null;
                            }
                            let block53 = null;
                        }
                        case 11: {
                            ad13.a_f0_Ldo_.m_m1_PIRV(-3);
                            let block0 = null;
                        }
                        case 12: {
                            if (ad13.b != null) {
                                let n6 = null;
                                if (ad13.b instanceof af) {
                                    n6 = -90;
                                } else {
                                    let n7 = ad13.c_m0_PBRI(9);
                                    n6 = rpg.g.a_m7_PIIRI(0, 99) < n7 ? ad13.b.k_f2_I + ad13.b.b_m7_PRI() : ad13.a_f0_Ldo_.c_m2_PZRI<< 1;
                                }
                                ad13.b.a_m12_PLdo_BIZBBZZZRZ(ad13.a_f0_Ldo_, 9, n6, false, ad13.a_f0_Ldo_.c_f0_B, 15, false, false, false);
                            }
                            bq.a_m2_PBRV(1);
                            let block0 = null;
                        }
                        case 13: {
                            ad13.a_f0_Ldo_.m_m1_PIRV(1);
                        }
                    }
                }
            }
        }
        let true = null;
    
  }
  b_m0_PBIZRI(by2, n2, bl2) {

        let n3 = this.a_m5_PBIZRI(by2, n2, false);
        by2 = n3;
        let n4 = n3 + this.a_f0_Ldo_.c_m2_PZRI;
        by2 = n4;
        let n4 = null;
    
  }
  a_m1_PRLcd_() {

        if (this.a != null && this.a.k_m1_PRZ()) {
            if (this.a.b_m1_PRZ()) {
                this.a = null;
            } else {
                let n2 = null;
                let n3 = this.a_f0_Ldo_.h - this.a.h;
                let n4 = Math.abs;
                if (n4 <= 96 && (n2 = Math.abs(n4 = this.a_f0_Ldo_.i - (this.a).i)) <= 96) {
                    if (n4 > n3 || n3 == 0) {
                        this.a_f0_Ldo_.c_f0_B = (n4 > 0 ? 1 : 2);
                    } else if (n4 > n3 || n4 == 0) {
                        this.a_f0_Ldo_.c_f0_B = (n3 > 0 ? 3 : 4);
                    }
                    return this.a;
                }
            }
        }
        this.b = this.a_f0_Ldo_.b_m9_PRLcd_();
        return this.b;
    
  }
  a_m2_PBIBZRZ(by2, n2, by3, bl2) {

        if (bl2 && !this.b_m3_PRZ()) {
            let false = null;
        }
        this.b = this.a_m1_PRLcd_();
        if (this.b != null) {
            return this.a_f0_Ldo_.a_m10_PLcd_BIBBZZZRZ(this.b, by2, n2, this.a_f0_Ldo_.c_f0_B, by3, false, bl2, false);
        }
        let false = null;
    
  }
  a_m3_PRB() {

        return 4;
    
  }
  a_m4_PBRZ(by2) {

        return this.a_m8_PRZ();
    
  }
  a_m5_PBRV(by2) {

        let by3 = 9;
        switch {
            case 5: 
            case 8: 
            case 9: {
                by3 = 0;
            }
        }
        bq.a_m2_PBRV;
    
  }
  b_m1_PBRZ(by2) {

        let false = null;
    
  }
}

JavaRegistry.set("ad", ad);
JavaRegistry.set("ad", ad);
try { if (typeof ad.__clinit === 'function') ad.__clinit(); } catch (e) { console.warn('clinit ad', e); }

globalThis.ad = ad;
