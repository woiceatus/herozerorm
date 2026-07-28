/** Transpiled from ax */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ax extends (JavaRegistry.get("l") || class {}) {
  static a_f0_Lax_ = null;
  static a_f1_Lch_ = null;
  static f_f0_B = null;
  static b = null;
  static c = null;
  static e = null;
  static f_f1_Z = null;
  static g_f0_Z = null;
  static h_f0_Z = null;
  static i_f0_Z = null;
  static j = null;
  static g_f1_B = null;
  static h_f1_B = null;
  static i_f1_B = null;
  static k = null;
  static a_m0_PRLax_() {

        if (ax.a_f0_Lax_ == null) {
            ax.a_f0_Lax_ = new ax();
        }
        let ax.a_f0_Lax_ = null;
    
  }
  ax() {

        /*super*/(null, 8);
        if (eb.f_f2_Z && this.a_f2_B == -1) {
            this.a_f2_B = 0;
        }
    
  }
  a_m1_PRV() {

        if (ax.a_f1_Lch_ == null) {
            ax.a_f1_Lch_ = new ch("/t/gm");
        }
        ax.e = di.h_f1_B > 0 || di.a_m9_PIRB(4) == 2;
        rpg.c.a_m0_PRLrpg_c_().h();
        ax.f_f1_Z = false;
        ax.g_f0_Z = false;
    
  }
  c(by2) {

        switch {
            case 1: {
                this.a_f2_B = 2;
                this.d(2);
                ax.f_f1_Z = false;
                ax.g_f0_Z = false;
                return;
            }
            case 2: {
                this.a_f2_B = 7;
                this.d(7);
                (this.b_f1_Ln_).a_m1_PRZ();
                ax.f_f1_Z = true;
                ax.g_f0_Z = false;
                return;
            }
            case 3: {
                this.a_f2_B = -1;
                this.d(-1);
                ax.g_f0_Z = true;
            }
        }
    
  }
  g() {

        this.a_f2_B = 0;
        ax.a_f0_Lax_ = null;
        ax.a_f1_Lch_ = null;
        if (ax.b != null) {
            ax.b = null;
        }
        if (ax.c != null) {
            ax.c = null;
        }
        dp.g();
        if (this.b_f1_Ln_ != null) {
            this.b_f1_Ln_ = null;
        }
        System.gc();
        Runtime.getRuntime().gc();
        rpg.c.a_m0_PRLrpg_c_().f();
        bs.c_f0_Z = true;
    
  }
  a_m2_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n3 >= 49 && n3 <= 56) {
            this.a_f2_B = n3 == 48 ? 9 : (n3 - 49);
            this.d;
        } else if (n.g(n2, n3)) {
            di.a_m2_PBBRV(7, 0);
        } else if (n.f_m0_PIIRZ(n2, 49)) {
            this.d;
        } else if (this.c_m2_PIIRZ(n2, 49)) {
            if (eb.f_f2_Z && this.a_f2_B == -1) {
                this.c_m2_PIIRZ(n2, 49);
            } else if (!ax.h_f0_Z && this.a_f2_B == -2) {
                this.c_m2_PIIRZ(n2, 49);
            }
        }
        let true = null;
    
  }
  d(by2) {

        ax.f_f0_B = by2;
        switch {
            case 0: {
                this.b_f1_Ln_ = let dc = null;
                return;
            }
            case 1: {
                this.b_f1_Ln_ = new cy(this, 0);
                return;
            }
            case 2: {
                this.b_f1_Ln_ = let dp = null;
                return;
            }
            case 3: {
                this.b_f1_Ln_ = let y = null;
                return;
            }
            case 4: {
                this.b_f1_Ln_ = let ce = null;
                return;
            }
            case 5: {
                this.b_f1_Ln_ = let ai = null;
                return;
            }
            case 7: {
                this.b_f1_Ln_ = let dh = null;
                return;
            }
            case 6: {
                di.a_m1_PBBBRV(3, 8, 3);
                bs.e_f0_Z = true;
                return;
            }
            case -2: {
                this.b_f1_Ln_ = let cn = null;
                return;
            }
            case -1: {
                this.b_f1_Ln_ = let bw = null;
            }
        }
    
  }
  e(cm2) {

        if {
            ax.k = false;
            di.a_f4_Lg_.c_m2_PRV();
        }
        this.d_m1_PLcm_RV;
    
  }
  a_m3_PLcm_RV(cm2) {

        if (ax.f_f1_Z || ax.g_f0_Z) {
            return;
        }
        if (a.a_f0_I > 120) {
            cm2.a_m2_PIRV(0);
            cm2.b_m0_PIIIIRV((a.a_f0_I - d.e_ >> 1) - 2, this.b_ - 2, d.e_ + 4, 178);
            cm2.a_m4_PIIIIRV((a.a_f0_I - d.e_ >> 1) - 2, this.b_ - 2, d.e_ + 4, 178);
        }
        cm2.b_m0_PIIIIRV(a.a_f0_I - d.e_ >> 1, this.b_, d.e_, 174);
        n.b_m4_PLcm_IIIIRV(cm2, a.a_f0_I - d.e_ >> 1, this.b_, d.e_ + 12, 174);
        let n2 = d.e_ - 9;
        let n3 = f.h >> 1;
        let n4 = a.a_f0_I - n2 >> 1;
        let n5 = this.b_ + 5 + 24;
        cm2.a_m2_PIRV(15723216);
        cm2.d_m0_PIIIIRV(n4 + 1, n5 + 1, n2, n3);
        cm2.a_m2_PIRV(0);
        cm2.d_m0_PIIIIRV(n4, n5, n2, n3);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, this.b_ + 3, ax.a_f1_Lch_.a_m0_PIRAB(40), 0, 1);
        this.a_m3_PLcm_IIZRI(cm2, 0, f.h, true);
        n.a_m0_PLcm_IRV(cm2, 3);
    
  }
  static __clinit() {

        ax.e = false;
        ax.f_f1_Z = false;
        ax.g_f0_Z = false;
        ax.h_f0_Z = false;
        ax.i_f0_Z = false;
        ax.j = false;
        ax.g_f1_B = 0;
        ax.h_f1_B = 0;
        ax.i_f1_B = 0;
        ax.k = false;
    
  }
}

JavaRegistry.set("ax", ax);
JavaRegistry.set("ax", ax);
try { if (typeof ax.__clinit === 'function') ax.__clinit(); } catch (ax.e) { console.warn('clinit ax', ax.e); }

globalThis.ax = ax;
