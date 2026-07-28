/** Transpiled from af */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class af extends (JavaRegistry.get("cd") || class {}) {
  static a_f0_AB = null;
  a_f1_Ldo_ = null;
  b_f0_Z = true;
  c_f0_Z = false;
  d_f0_Z = false;
  e = false;
  a_f2_B = null;
  b_f1_AB = null;
  b_f2_I = -1;
  c_f1_AB = null;
  d_f1_AB = null;
  af(s2, s3, s4, by2, s5) {

        /*super*/(s2, s3, s4, by2, s5, true);
        this.h_f0_B = 0;
        this.a_f1_Ldo_ = di.a_f9_Ldo_;
        this.a_m7_PSRV(-1);
        if (af.a_f0_AB == null) {
            af.a_f0_AB = rpg.e.a_m6_PLjava_lang_String_RAB("/t/bd");
        }
        g.f_f1_Z = true;
    
  }
  static a_() {

        af.a_f0_AB = null;
    
  }
  c_m0_PIRV(n2) {

    
  }
  a_m0_PABRV(byArray) {

        let g2 = di.a_f4_Lg_;
        for (let i2 = 0; i2 < byArray.length; i2 += 2) {
            try {
                g2.a_f4_AALdu_[this.t + byArray[i2 + 1]][this.s + byArray[i2]] = this;
                continue;
            }
            catch (exception) {}
        }
    
  }
  o() {

    
  }
  p() {

        this.n = this.a_f0_Ldt_.d_f1_B;
        let s2 = this.a_f0_Ldt_.d_f2_S;
        this.j_f2_I = s2;
        this.k_f2_I = s2;
        this.d = this.a_f0_Ldt_.b_f1_S;
        this.e_f0_S = this.a_f0_Ldt_.c_f2_S;
        this.f_f1_S = this.a_f0_Ldt_.e_f0_S;
        this.g_f0_S = this.a_f0_Ldt_.f_f0_S;
    
  }
  q() {

    
  }
  b_m0_PABRV(byArray) {

        let g2 = di.a_f4_Lg_;
        for (let i2 = 0; i2 < byArray.length; i2 += 2) {
            try {
                g2.a_f4_AALdu_[this.t + byArray[i2 + 1]][this.s + byArray[i2]] = null;
                continue;
            }
            catch (exception) {}
        }
    
  }
  a_m1_PIIZRV(n2, n3, bl2) {

        if (!this.b_f0_Z) {
            super.a_m4_PIIZRV(n2, n3, bl2);
        }
    
  }
  b_m1_PBRV(by2) {

        if {
            return;
        }
        super.b_m4_PBRV;
    
  }
  c_m1_PRZ() {

        let true = null;
    
  }
  c_m2_PIIRV(n2, n3) {

    
  }
  a_m2_PBBRZ(by2, by3) {

        switch {
            case 101: 
            case 102: 
            case 103: 
            case 104: 
            case 105: 
            case 106: 
            case 107: 
            case 108: 
            case 124: 
            case 125: 
            case 126: 
            case 127: 
            case 128: 
            case 129: 
            case 130: 
            case 131: {
                di.a_f4_Lg_.b_m0_PLdu_RV;
                break;
            }
            default: {
                di.a_f4_Lg_.a_m3_PLdu_RV;
            }
        }
        let true = null;
    
  }
  a_m3_PLal_IRV(al2, n2) {

        super.a_m16_PLal_IRV(al2, n2);
        if {
            al2.a_m13_PLal_IBBRV(this, n2 / 5, 0, 2);
        }
    
  }
  a_m4_PIRI(n2) {

        super.a_m2_PIRI;
        let n2 = null;
    
  }
  a_m5_PLaf_RV(af2) {

        this.c_f0_Z = this.c_f0_Z || af2.c_f0_Z;
        this.d_f0_Z = this.d_f0_Z || af2.d_f0_Z;
        this.e = this.e || af2.e;
        af2.e = false;
        af2.d_f0_Z = false;
        af2.c_f0_Z = false;
    
  }
  a_m6_PLdo_BIZBBZZZRZ(do_, by2, n2, bl2, by3, by4, bl3, bl4, bl5) {

        if {
            return super.a_m12_PLdo_BIZBBZZZRZ(do_, by2, n2, bl2, by3, by4, bl3, bl4, bl5);
        }
        return super.a_m12_PLdo_BIZBBZZZRZ(do_, by2, bl5 ? -90 : n2, bl2, by3, by4, bl3, bl4, bl5);
    
  }
  a_m7_PIIRV(n2, n3) {

        if (this.a_f1_Ls_ != null) {
            this.a_f1_Ls_.a_m2_PBBIIIRI(this.h_f0_B, this.c_f0_B, this.c_f1_I, n2, n3);
        }
    
  }
  e() {

        this.a_m2_PIRV(this.c_f1_AB == null ? 0 : this.c_f1_AB[this.a_f2_B]);
    
  }
}

JavaRegistry.set("af", af);
JavaRegistry.set("af", af);
try { if (typeof af.__clinit === 'function') af.__clinit(); } catch (e) { console.warn('clinit af', e); }

globalThis.af = af;
