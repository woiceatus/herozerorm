/** Transpiled from dd */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class dd extends (JavaRegistry.get("de") || class {}) {
  b = null;
  e = 0;
  a = null;
  c = null;
  dd(n2, as2) {

        /*super*/(n2, 5);
        if (de.a_f1_ALbj_ == null || this.f_f1_Z) {
            this.g();
        }
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.g(n2, n3)) {
            this.c_m0_PRV();
            this.a_f1_Ln_.c_m0_PRV();
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3)) {
            switch {
                case 0: {
                    this.b_f1_Ln_ = new cv(this, 0, rpg.e.h_f0_Lch_.a_m0_PIRAB(61));
                    break;
                }
                case 1: {
                    this.b_f1_Ln_ = new bb(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(65));
                    break;
                }
                case 2: {
                    this.b_f1_Ln_ = new dj(this, rpg.e.h_f0_Lch_.a_m1_PIIRAAB(66, 67));
                    break;
                }
                case 3: {
                    this.b_f1_Ln_ = new cv(this, 1, rpg.e.h_f0_Lch_.a_m0_PIRAB(63));
                    break;
                }
                case 4: {
                    this.b_f1_Ln_ = this.b == null || this.b.length == 0 ? new br(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(38), '\u0000') : (this.e == 0 && this.a == null && (this.c == null || this.c.trim().length == 0) ? new br(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(26), '\u0000') : new bt(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(64), 3, false, true));
                }
            }
            let true = null;
        }
        return this.c_m2_PIIRZ(n2, n3);
    
  }
  a_m1_PBBRV(by2, by3) {

        let byArray = null;
        block31: {
            this.c_m0_PRV();
            if (by2 == 10) {
                switch {
                    case 0: {
                        this.b = de.a_f0_Ljava_lang_String_;
                        break;
                    }
                    case 3: {
                        this.c = de.a_f0_Ljava_lang_String_;
                        break;
                    }
                }
                de.a_f0_Ljava_lang_String_ = "";
            } else if (by2 == 6) {
                if (by3 == 0) {
                    this.b_f1_Ln_ = new dk(this, 1);
                } else {
                    this.a = null;
                }
            }
            if (by2 != 3) return;
            if (by3 != 0) return;
            this.b_f1_Ln_ = new br(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(4));
            let byteArrayOutputStream = new ByteArrayOutputStream();
            let dataOutputStream = let DataOutputStream = null;
            byArray = null;
            try {
                if (this.b == null) {
                    dataOutputStream.writeByte(0);
                } else {
                    byArray = this.b.getBytes();
                    dataOutputStream.writeByte;
                    (dataOutputStream).write;
                }
                dataOutputStream.writeInt;
                if (this.a == null) {
                    dataOutputStream.writeLong(0);
                } else {
                    dataOutputStream.writeLong;
                }
                if (this.c == null) {
                    dataOutputStream.writeByte(0);
                } else {
                    byArray = this.c.getBytes();
                    dataOutputStream.writeByte;
                    (dataOutputStream).write;
                }
                byArray = byteArrayOutputStream.toByteArray();
            }
            catch (exception) {
                byArray = null;
                try {
                    dataOutputStream.close();
                }
                catch (exception2) {}
                try {
                    byteArrayOutputStream.close();
                }
                catch (exception3) {}
                let block31 = null;
            }
            catch (throwable) {
                try {
                    dataOutputStream.close();
                }
                catch (exception) {}
                try {
                    byteArrayOutputStream.close();
                    let throwable = null;
                }
                catch (exception) {}
                let throwable = null;
            }
            try {
                dataOutputStream.close();
            }
            catch (exception) {}
            try {
                byteArrayOutputStream.close();
            }
            catch (exception) {}
        }
        if (byArray == null) {
            this.c_m0_PRV();
            return;
        }
        byArray = c.a_m2_PBABRAB(24, byArray);
        this.a_m1_PABZZRV(byArray, false, false);
    
  }
  a_m2_PLcm_RV(cm2) {

        this.a_m9_PLcm_ABZZRV(cm2, rpg.e.h_f0_Lch_.a_m0_PIRAB(2), true, false);
        let n2 = this.a_ + 4;
        let n3 = this.a_ + 22;
        let n4 = this.a_ + 68;
        let n5 = this.b_ + 18;
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, n5, 14, 12, this.a_f2_B == 0 ? 0x660000 : 3550755, this.a_f2_B == 0 ? 0xBD0000 : 7027456);
        n.a_m6_PLcm_IIIIIIRV(cm2, n3, n5, 93, 12, this.a_f2_B == 0 ? 0x660000 : 3550755, this.a_f2_B == 0 ? 0xBD0000 : 7027456);
        if (this.b != null && this.b.length != 0) {
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, this.b.getBytes(), 0, 1);
        } else {
            cm2.a_m2_PIRV(this.a_f2_B == 0 ? 16775602 : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(57), 0, 1);
        }
        ac.a_m0_PLcm_IIABIRV(cm2, this.a_ + 5, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(46), 0);
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, n5 += 14, 14, 12, this.a_f2_B == 1 ? 0x660000 : 3550755, this.a_f2_B == 1 ? 0xBD0000 : 7027456);
        cm2.a_m1_PLcg_IIIRV(rpg.e.t, n2 + 7, n5 + 5, 3);
        n.a_m6_PLcm_IIIIIIRV(cm2, n3, n5, 93, 12, this.a_f2_B == 1 ? 0x660000 : 3550755, this.a_f2_B == 1 ? 0xBD0000 : 7027456);
        if (this.e > 0) {
            n.b_m6_PLcm_IIIIIRV(cm2, this.e, n4, n5 + 2, 1, 0);
        } else {
            cm2.a_m2_PIRV(this.a_f2_B == 1 ? 16775602 : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(58), 0, 1);
        }
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, n5 += 14, 14, 14, this.a_f2_B == 2 ? 0x660000 : 3550755, this.a_f2_B == 2 ? 0xBD0000 : 7027456);
        n.a_m6_PLcm_IIIIIIRV(cm2, n3, n5, 93, 12, this.a_f2_B == 2 ? 0x660000 : 3550755, this.a_f2_B == 2 ? 0xBD0000 : 7027456);
        if (this.a != null) {
            this.a.a_m10_PLcm_IIZZRV(cm2, n2, n5 - 1, true, true);
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, this.a.a_f3_AB, 0, 1);
        } else {
            cm2.a_m2_PIRV(this.a_f2_B == 2 ? 16775602 : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(59), 0, 1);
        }
        n.a_m6_PLcm_IIIIIIRV(cm2, n3, n5 += 14, 93, 41, this.a_f2_B == 3 ? 0x660000 : 3550755, this.a_f2_B == 3 ? 0xBD0000 : 7027456);
        if (this.c != null && this.c.length > 0) {
            cm2.a_m2_PIRV(0xFFFFFF);
            ac.a_m1_PLcm_IIIIABRV(cm2, n3 + 2, n5 + 2, 89, 0, this.c.getBytes());
        } else {
            cm2.a_m2_PIRV(this.a_f2_B == 3 ? 16775602 : 12630160);
            ac.a_m2_PLcm_IIABIIRV(cm2, n4, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(60), 0, 1);
        }
        n.a_m6_PLcm_IIIIIIRV(cm2, n2, n5 += 43, 111, 12, this.a_f2_B == 4 ? 0x660000 : 3550755, this.a_f2_B == 4 ? 0xBD0000 : 7027456);
        cm2.a_m2_PIRV(this.a_f2_B == 4 ? 16775602 : 12630160);
        ac.a_m2_PLcm_IIABIIRV(cm2, rpg.a.c, n5, rpg.e.h_f0_Lch_.a_m0_PIRAB(2), 0, 1);
    
  }
}

JavaRegistry.set("dd", dd);
JavaRegistry.set("dd", dd);
try { if (typeof dd.__clinit === 'function') dd.__clinit(); } catch (e) { console.warn('clinit dd', e); }

globalThis.dd = dd;
