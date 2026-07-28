/** Transpiled from t */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class t extends (JavaRegistry.get("u") || class {}) {
  a_f0_Ls_ = null;
  b = null;
  e_f0_B = null;
  a_f1_Lcd_ = null;
  c = null;
  f = null;
  g = null;
  d = null;
  e_f1_I = null;
  constructor(by2, s2, s3, s4, by3, bl2, cd2, n2, by4, by5) {
    super();

        /*super*/(by2, 1, s2, s3, bl2);
        this.a_f1_Lcd_ = cd2;
        this.c = n2;
        this.f = by4;
        this.g = by5;
        this.a_f0_Ls_ = s4;
        this.e_f0_B = by3;
        this.b = 0;
        this.a_f1_S = this.a_f0_Ls_.a_m3_PBRB;
        di.a_f4_Lg_.a_m3_PLdu_RV;
        switch ((this).c) {
            case 4: {
                this.g = 6;
                this.d = (100 - this.h) / this.g;
                this.e_f1_I = (150 - this.i) / this.g;
                return;
            }
            case 5: {
                this.g = 6;
                this.d = (160 - this.h) / this.g;
                this.e_f1_I = (150 - this.i) / this.g;
                return;
            }
            case 6: {
                this.g = 3;
                this.d = (230 - this.h) / this.g;
                this.e_f1_I = (150 - this.i) / this.g;
            }
        }
    
  }
  a_m0_PRV() {

        if (this.a_f2_I > this.a_f1_S) {
            this.a_f2_I = -1;
        }
        if (this.b++ >= this.a_f1_S) {
            this.a_f3_Z = true;
        }
        block0 : switch ((this).c) {
            case 1: {
                let alArray = cd.a_m24_PRALal_();
                for (let i2 = 0; i2 < 2; ++i2) {
                    if (alArray[i2] == null || alArray[i2].h_m1_PRZ() || alArray[i2].s != this.s || alArray[i2].t != this.t || alArray[i2].h_m1_PRZ()) continue;
                    alArray[i2].f_m1_PIRV(50);
                    alArray[i2].c_m4_PIIRV(60, 30);
                }
                if (!this.a_f3_Z) break;
                this.b = 0;
                this.a_f2_I = -1;
                switch {
                    case 16: {
                        this.a_f3_Z = false;
                        this.e_f0_B = ((al.a_f1_Ljava_util_Random_.nextInt() & 1) == 0 ? 17 : 18);
                        this.a_f1_S = (Math.abs(al.a_f1_Ljava_util_Random_.nextInt() & 0xFF) % 8 + 35);
                        return;
                    }
                    case 19: {
                        this.a_f3_Z = true;
                        return;
                    }
                }
                this.a_f3_Z = false;
                this.e_f0_B = 19;
                this.a_f1_S = this.a_f0_Ls_.a_m3_PBRB;
                return;
            }
            case 3: {
                if (this.g > 0) {
                    this.g = (this.g - 1);
                    this.a_f3_Z = false;
                    let by2 = (this.s + rpg.d.J[this.f]);
                    let by3 = (this.t + rpg.d.K[this.f]);
                    if (!g.a_m5_PIIRZ(by2, by3) && !di.a_f4_Lg_.b_m2_PIIRZ(by2, by3)) {
                        this.a_m0_PSSRV((by2 << 4), (by3 << 4));
                        this.E();
                        let blArray = new boolean[]{false, false};
                        let alArray = cd.a_m24_PRALal_();
                        for (let i3 = 0; i3 < 2; ++i3) {
                            for (let i4 = 0; i4 < this.u; ++i4) {
                                if (alArray[i3] == null || blArray[i3] || alArray[i3].t != this.t || alArray[i3].s != this.s + i4) continue;
                                blArray[i3] = true;
                                this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i3], this.c, this.f);
                                this.a_f3_Z = true;
                            }
                        }
                        break;
                    }
                    this.a_f3_Z = true;
                    return;
                }
                this.a_f3_Z = true;
                return;
            }
            case 14: {
                if (this.b == 1) {
                    let blArray = new boolean[]{false, false};
                    let alArray = cd.a_m24_PRALal_();
                    for (let i5 = 0; i5 < 2; ++i5) {
                        for (let i6 = 0; i6 < this.u; ++i6) {
                            if (alArray[i5] == null || blArray[i5] || alArray[i5].t != this.t || alArray[i5].s != this.s + i6) continue;
                            blArray[i5] = true;
                            this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i5], this.c, this.f);
                        }
                    }
                    return;
                }
                if (this.b != 2 || this.g <= 1) break;
                this.g = (this.g - 1);
                let by4 = (this.s + rpg.d.J[this.f]);
                let by5 = (this.t + rpg.d.K[this.f]);
                if (!g.a_m5_PIIRZ(by4, by5) && !di.a_f4_Lg_.b_m2_PIIRZ(by4, by5)) {
                    new t((this).c, (by4 << 4), (by5 << 4), this.a_f0_Ls_, this.e_f0_B, this.b_f1_Z, this.a_f1_Lcd_, this.c, this.f, this.g);
                }
                return;
            }
            case 13: {
                if (this.b != this.g) break;
                let blArray = new boolean[]{false, false};
                let alArray = cd.a_m24_PRALal_();
                for (let i7 = 0; i7 < 2; ++i7) {
                    for (let i8 = 0; i8 < this.u; ++i8) {
                        if (alArray[i7] == null || blArray[i7] || alArray[i7].s != this.s + i8 || alArray[i7].t != this.t) continue;
                        blArray[i7] = true;
                        this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i7], this.c, this.f);
                    }
                }
                return;
            }
            case 9: {
                if (this.b != this.g) break;
                let by6 = (this.s - 1);
                let by7 = (this.s + 3);
                let by8 = (this.t - 3);
                let by9 = (this.t + 2);
                let alArray = cd.a_m24_PRALal_();
                for (let i9 = 0; i9 < 2; ++i9) {
                    if (alArray[i9] == null || alArray[i9].s < by6 || alArray[i9].s > by7 || alArray[i9].t < by8 || alArray[i9].t > by9) continue;
                    this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i9], this.c, this.f);
                    let block0 = null;
                }
                return;
            }
            case 4: 
            case 5: 
            case 6: {
                if (this.g > 0) {
                    this.a_f3_Z = false;
                    this.g = (this.g - 1);
                    this.h = (this.h + this.d);
                    this.i = (this.i + this.e_f1_I);
                    this.a_m0_PSSRV(this.h, this.i);
                    this.E();
                    return;
                }
                this.a_f3_Z = true;
                new t(7, this.h, (this.i + 16), this.a_f0_Ls_, 8, true, this.a_f1_Lcd_, this.c, 1, 10);
                new t(7, this.h, this.i, this.a_f0_Ls_, 9, true, this.a_f1_Lcd_, this.c, 2, 10);
                return;
            }
            case 7: {
                if (this.g > 0) {
                    this.g = (this.g - 1);
                    this.a_f3_Z = false;
                    let by10 = (this.t + rpg.d.K[this.f]);
                    if (by10 >= 0 && by10 < g.d_f2_B) {
                        this.a_m0_PSSRV(this.h, (by10 << 4));
                        this.E();
                        let alArray = cd.a_m24_PRALal_();
                        for (let i10 = 0; i10 < 2; ++i10) {
                            if (alArray[i10] == null || alArray[i10].s < this.s - 2 || alArray[i10].s >= this.s + 2 || alArray[i10].t != this.t) continue;
                            this.a_f1_Lcd_.b_m5_PLal_IBRZ(alArray[i10], this.c, this.f);
                            this.a_f3_Z = true;
                            new t(0, alArray[i10].h, alArray[i10].i, this.a_f0_Ls_, 10, true, null, 0, 0, 0);
                        }
                        break;
                    }
                    this.a_f3_Z = true;
                    return;
                }
                this.a_f3_Z = true;
            }
        }
    
  }
  a_m1_PIIRV(n2, n3) {

        switch ((this).c) {
            case 2: {
                n3 = n3 + this.i + this.r;
                while (n3 <= rpg.a.b_f0_I) {
                    this.a_f0_Ls_.a_m2_PBBIIIRI(this.e_f0_B, 1, this.a_f2_I, n2 + this.h + this.q, n3 += 16);
                }
                break;
            }
            case 8: {
                n3 = n3 + this.i + this.r - 8;
                while (n3 > 0) {
                    this.a_f0_Ls_.a_m2_PBBIIIRI(this.e_f0_B, 1, this.a_f2_I, n2 + this.h + this.q, n3 -= 16);
                }
                break;
            }
            default: {
                this.a_f0_Ls_.a_m2_PBBIIIRI(this.e_f0_B, (this).d, this.a_f2_I % this.a_f1_S, n2 + this.h + this.q + (this.u - 1 << 3), n3 + this.i + this.r);
            }
        }
    
  }
}

JavaRegistry.set("t", t);
JavaRegistry.set("t", t);
try { if (typeof t.__clinit === 'function') t.__clinit(); } catch (e) { console.warn('clinit t', e); }

globalThis.t = t;
