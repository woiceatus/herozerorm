/** Transpiled from bv */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bv extends (JavaRegistry.get("a") || class {}) {
  b_f0_B = 0;
  static a_f0_Lbv_ = null;
  a_f1_Lcg_ = null;
  j = null;
  static b_f1_Z = null;
  static b_f2_Lcg_ = null;
  static a_f2_J = null;
  static a_m0_PRLbv_() {

        if (bv.a_f0_Lbv_ == null) {
            bv.a_f0_Lbv_ = new bv();
        }
        let bv.a_f0_Lbv_ = null;
    
  }
  a_m1_PRV() {

    
  }
  b_m0_PRV() {

        a.e = 3;
        if (this.b_f0_B == 2) {
            bq.a_f1_J = 0;
            bq.a_m0_PRV();
        }
    
  }
  static d_m0_PRV() {

        if (bv.a_f0_Lbv_ != null) {
            bv.a_f0_Lbv_ = null;
        }
    
  }
  a_m2_PIIRZ(n2, n3) {

        if (n2 != 0) {
            let true = null;
        }
        n2 = ct.a_m0_PIRI;
        switch {
            case 1: {
                break;
            }
            case 4: {
                switch {
                    case 2: {
                        n3 = 52;
                        break;
                    }
                    case 5: {
                        n3 = 54;
                        break;
                    }
                    case 8: {
                        n3 = 53;
                    }
                }
                switch {
                    case -6: 
                    case 53: {
                        if {
                            rpg.c.a_f4_B = 3;
                            rpg.c.c_f1_Z = true;
                            rpg.c.b_f1_Z = true;
                            bq.b_m1_PBZRV(0, true);
                        } else {
                            rpg.c.a_f4_B = 0;
                            rpg.c.c_f1_Z = false;
                            rpg.c.b_f1_Z = false;
                            bq.b_m2_PBRV(0);
                        }
                        this.b_m1_PBRV(2);
                        break;
                    }
                    case 52: {
                        bv.b_f1_Z = !bv.b_f1_Z;
                        break;
                    }
                    case 54: {
                        bv.b_f1_Z = !bv.b_f1_Z;
                        break;
                    }
                    case -7: {
                        rpg.c.a_f4_B = 0;
                        rpg.c.c_f1_Z = false;
                        rpg.c.b_f1_Z = false;
                        bq.b_m2_PBRV(0);
                        this.b_m1_PBRV(2);
                    }
                }
                break;
            }
            case 2: {
                rpg.c.a_m0_PRLrpg_c_().d();
            }
        }
        let true = null;
    
  }
  d_m1_PLcm_RV(object) {

        a.a_f3_Lcm_ = object;
        switch {
            case 3: {
                a.b_m1_PLcm_RV;
                break;
            }
            case 1: {
                cf.a_m3_PRV();
                let cm2 = a.a_f3_Lcm_;
                object = this;
                a.a_m2_PLcm_IRV(cm2, 0);
                a.a_f3_Lcm_.b_m1_PIRV((object).j < 25 ? (object).j * 10 : 255);
                if ((object).a_f1_Lcg_ != null) {
                    cm2.a_m1_PLcg_IIIRV((object).a_f1_Lcg_, a.c, a.d, 3);
                }
                ++(object).j;
                if ((object).j <= 50) break;
                super.b_m1_PBRV(4);
                break;
            }
            case 4: {
                let cm3 = a.a_f3_Lcm_;
                object = this;
                a.c_m1_PLcm_RV;
                eb.f(cm3, rpg.f.c, a.d + 15, rpg.d.e_, 70);
                cm3.a_m2_PIRV(15723216);
                cm3.d_m0_PIIIIRV(rpg.f.c, a.d + 15, rpg.d.e_ - 1, 69);
                cm3.a_m2_PIRV(0);
                ac.a_m2_PLcm_IIABIIRV(cm3, a.c, a.d + 25, rpg.e.a_f1_Lch_.a_m0_PIRAB(26), 0, 1);
                object = cm3;
                let n2 = a.d + 58;
                (object).a_m2_PIRV(0x660000);
                if {
                    (object).a_m4_PIIIIRV(a.c - 50 - 25, n2, 50, 20);
                    (object).a_m2_PIRV(0xFFFFFF);
                    ac.a_m2_PLcm_IIABIIRV(object, a.c - 50, n2 + 4, rpg.e.a_f1_Lch_.a_m0_PIRAB(0), 0, 1);
                    (object).a_m2_PIRV(0);
                    ac.a_m2_PLcm_IIABIIRV(object, a.c + 50, n2 + 4, rpg.e.a_f1_Lch_.a_m0_PIRAB(1), 0, 1);
                    break;
                }
                (object).a_m4_PIIIIRV(a.c + 25, n2, 50, 20);
                (object).a_m2_PIRV(0);
                ac.a_m2_PLcm_IIABIIRV(object, a.c - 50, n2 + 4, rpg.e.a_f1_Lch_.a_m0_PIRAB(0), 0, 1);
                (object).a_m2_PIRV(0xFFFFFF);
                ac.a_m2_PLcm_IIABIIRV(object, a.c + 50, n2 + 4, rpg.e.a_f1_Lch_.a_m0_PIRAB(1), 0, 1);
                break;
            }
            case 2: {
                let cm4 = a.a_f3_Lcm_;
                object = this;
                a.c_m1_PLcm_RV;
                if ((object).j % 10 < 8) {
                    cm4.a_m2_PIRV(0xFFFFFF);
                    ac.a_m2_PLcm_IIABIIRV(cm4, a.c, a.d + (a.d >> 1), rpg.d.C, 0, 1);
                }
                ++(object).j;
                if ((object).j <= 124) break;
                (object).j = 1;
            }
        }
        rpg.c.e();
    
  }
  async run() {

        if (this.b_f0_B == 3) {
            switch {
                case 1: {
                    rpg.c.a_m0_PRLrpg_c_().i();
                    b.b_m4_PRV();
                    a.c_m0_PRV();
                    let string = "/ealogo.png";
                    let object = this;
                    this.a_f1_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_;
                    a.c_m0_PRV();
                    rpg.e.a_m0_PRLrpg_e_().a_m1_PRV();
                    a.c_m0_PRV();
                    bq.b_m3_PIRV(0);
                    a.c_m0_PRV();
                    rpg.e.g();
                    a.c_m0_PRV();
                    di.m();
                    a.c_m0_PRV();
                    bv.a_f2_J = Date.now() - bv.a_f2_J;
                    if (bv.a_f2_J < 2000) {
                        try {
                            await sleep(2000 - bv.a_f2_J);
                        }
                        catch (exception) {
                            object = exception;
                            exception
                        }
                    }
                    this.b_m1_PBRV(1);
                }
            }
            this.a_f2_B = -1;
        }
    
  }
  a_m3_PBRV(by2) {

        this.a_f2_B = 1;
        this.b_m1_PBRV(3);
        queueMicrotask(() => { try { let __r =bv.a_f0_Lbv_; (__r.run?__r.run():__r()); } catch{console.error;} });
    
  }
  b_m1_PBRV(by2) {

        this.b_f0_B = by2;
        this.j = 0;
        switch {
            case 3: {
                a.a_m4_PZRV;
                return;
            }
        }
        rpg.c.a_m0_PRLrpg_c_().h();
    
  }
  static __clinit() {

        bv.b_f1_Z = true;
        bv.b_f2_Lcg_ = null;
        bv.a_f2_J = 0;
    
  }
}

JavaRegistry.set("bv", bv);
JavaRegistry.set("bv", bv);
try { if (typeof bv.__clinit === 'function') bv.__clinit(); } catch (e) { console.warn('clinit bv', e); }

globalThis.bv = bv;
