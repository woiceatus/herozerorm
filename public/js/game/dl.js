/** Transpiled from dl */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dl extends (JavaRegistry.get("de") || class {}) {
  a_f0_Ljava_util_Vector_ = new Vector();
  a_f1_Lbx_ = null;
  dl(n2) {

        /*super*/(n2, 6);
        let bl2 = true;
        let dl2 = this;
        let byArray = c.a_m2_PBABRAB(20, null);
        dl2.a_m1_PABZZRV(byArray, true, false);
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            if (this.a_f2_B < this.a_f0_Ljava_util_Vector_.size()) {
                let bx2 = this.a_f1_Lbx_ = this.a_f0_Ljava_util_Vector_.elementAt;
                this.b_f1_Ln_ = new dj(this, rpg.e.h_f0_Lch_.a_m1_PIIRAAB(33, 35));
            }
            let true = null;
        }
        return this.c_m2_PIIRZ(n2, n3);
    
  }
  a_m1_PBBRV(by2, by3) {

        this.c_m0_PRV();
        if (by2 != 6) {
            if (by2 != 3) return;
            if (by3 != 0) return;
            let dl2 = this;
            let byArray = new Int8Array(8);
            g.a_m6_PJABIRV(0, byArray, 0);
            byArray = c.a_m2_PBABRAB(22, byArray);
            dl2.a_m1_PABZZRV(byArray, true, false);
            return;
        }
        let dl3 = this;
        let bx2 = dl3.a_f1_Lbx_;
        if (by3 == 0) {
            dl3.k();
            return;
        }
        if (by3 != 1) return;
        dl3.b_f1_Ln_ = new bt(dl3, rpg.e.h_f0_Lch_.a_m0_PIRAB(45), 3, true, true);
    
  }
  k() {

        let byArray = new Int8Array(8);
        g.a_m6_PJABIRV(0, byArray, 0);
        byArray = c.a_m2_PBABRAB(21, byArray);
        this.a_m1_PABZZRV(byArray, true, false);
    
  }
  a_m2_PLcm_RV(cm2) {

        a.a_m3_PLcm_ZRV(cm2, true);
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, a.d - 58, rpg.e.h_f0_Lch_.a_m0_PIRAB(31), 0, 1);
        let n2 = this.a_f0_Ljava_util_Vector_.size();
        let n3 = this.a_f2_B / 6 * 6;
        let n4 = this.a_f2_B % 6;
        for (let n5 = 0; n5 < 6; n5 = ((n5 + 1))) {
            let n6 = this.b_ + 16 + n5 * 13;
            n.a_m6_PLcm_IIIIIIRV(cm2, this.a_ + 3, n6, 108, 12, n4 == n5 ? 0x660000 : 3550755, this.a_f2_B == n5 ? 0xBD0000 : 7027456);
            if (n3 < n2) {
                let bl2 = n4 == n5;
                let n7 = n6;
                let n8 = this.a_;
                let cm3 = cm2;
                let bx2 = this.a_f0_Ljava_util_Vector_.elementAt;
                bx2 = bx2;
                cm3.a_m2_PIRV(bl2 ? 0xFFFFFF : 12630160);
                ac.a_m0_PLcm_IIABIRV(cm3, n8 + 24, n7, null, 0);
                ac.a_m2_PLcm_IIABIIRV(cm3, n8 + 109, n7, null, 0, 8);
            }
            ++n3;
        }
        this.a_m0_PLcm_IIIIIRV(cm2, a.c + 52, a.d - 55, this.a_f2_B / 6 + 1, this.b_f2_B / 6, 8);
        this.e_m2_PLcm_IIIIRV(cm2, a.c + 54, a.d - 37, this.a_f2_B / 6, this.b_f2_B / 6);
    
  }
}

JavaRegistry.set("dl", dl);
JavaRegistry.set("dl", dl);
try { if (typeof dl.__clinit === 'function') dl.__clinit(); } catch (e) { console.warn('clinit dl', e); }

globalThis.dl = dl;
