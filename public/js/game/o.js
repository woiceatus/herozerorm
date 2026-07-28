/** Transpiled from o */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class o extends (JavaRegistry.get("Object") || class {}) {
  static b_f0_AB = new Int8Array([6, 0, 0, 0, 21, 0, 21, 0, 23, 0]);
  c_f0_AB = null;
  d_f0_AB = null;
  a_f0_AZ = null;
  a_f1_AB = null;
  a_f2_B = null;
  b_f1_B = 0;
  c_f1_B = null;
  Q = null;
  R = null;
  a_f3_Ldo_ = null;
  a_f4_Z = false;
  S = new Int8Array([12, 12, 4, 2]);
  d_f1_B = null;
  e = null;
  o(do_) {

        this.a_f3_Ldo_ = do_;
    
  }
  a_m0_PRV() {

        this.c_f0_AB = new Int8Array(10);
        this.d_f0_AB = new Int8Array(10);
        for (let i2 = 4; i2 < 10; ++i2) {
            this.d_f0_AB[i2] = -1;
            this.c_f0_AB[i2] = -1;
        }
        this.g();
        this.a_m1_PZRV;
        this.a_f4_Z = false;
    
  }
  g() {

        this.a_f1_AB = new Int8Array(2);
        for (let i2 = 0; i2 < 2; ++i2) {
            this.a_f1_AB[i2] = -1;
        }
    
  }
  a_m1_PZRV(bl2) {

        this.h();
        if {
            let o2 = this;
            if {
                let n2 = di.b_f5_AB[2];
                let by2 = di.b_f5_AB[3];
                for (let i2 = 0; i2 < 10; ++i2) {
                    if (i2 == n2 || i2 == by2 || rpg.e.a_f3_ALs_[i2] == null) continue;
                    rpg.e.a_f3_ALs_[i2] = null;
                }
                o2.a_f4_Z = false;
            }
        }
    
  }
  b_m0_PRV() {

        if (this.b_f1_B == 0) {
            return;
        }
        let by2 = this.c_f1_B = (this.c_f1_B + 1);
        let o2 = this;
        if (by2 == 0) {
            o.b_m7_PBRV;
        }
        switch {
            case 0: {
                let by3 = by2;
                let o3 = o2;
                switch {
                    case 0: {
                        g.a_m16_PIRV(1);
                        break;
                    }
                    case 1: {
                        let n2 = null;
                        o3.a_f3_Ldo_.f_m1_PRV();
                        let cd2 = o3.a_f3_Ldo_.a_m16_PRLcd_();
                        if (cd2 != null) {
                            n2 = o3.e_m0_PBRI(0);
                            cd2.a_m13_PIBRZ(n2, o3.a_f3_Ldo_.c_f0_B);
                            cd2.a_m1_PLat_RV(new cr(30, 0, 1));
                        }
                    }
                    case 3: 
                    case 5: {
                        let n2 = 2 - by3 / 2 + 1;
                        di.a_f4_Lg_.c_m4_PIIRV(n2, 1);
                    }
                }
                break;
            }
            case 1: {
                if (by2 != 0) break;
                a_m10_PBBIRV(31, 1, 1);
                break;
            }
            case 2: {
                if (by2 != 0) break;
                a_m10_PBBIRV(33, 2, 1);
                break;
            }
            case 3: {
                if (by2 != 0) break;
                let n3 = o2.b_m4_PBIRI(3, o2.a_f3_Ldo_.f_m2_PBRI(0)) + o2.c_m3_PBRI(3);
                o2.a_f3_Ldo_.c_m5_PIRV;
                o2.a_f3_Ldo_.a_m1_PLat_RV(new cr(35, 3, 1));
                break;
            }
            case 4: {
                let by4 = by2;
                let o4 = o2;
                switch {
                    case 3: 
                    case 7: 
                    case 11: 
                    case 15: {
                        g.a_m16_PIRV(1);
                        break;
                    }
                    default: {
                        g.b_m5_PIRV(0);
                    }
                }
                let n4 = 0;
                switch {
                    case 1: {
                        n4 = -5;
                        break;
                    }
                    case 5: 
                    case 8: 
                    case 10: 
                    case 13: {
                        n4 = 4;
                        break;
                    }
                    case 12: {
                        bq.a_m2_PBRV(2);
                    }
                    case 9: 
                    case 14: 
                    case 17: 
                    case 19: {
                        n4 = 6;
                        break;
                    }
                    case 20: {
                        n4 = 3;
                    }
                }
                if (n4 != 0) {
                    di.a_f4_Lg_.c_m4_PIIRV(n4, n4 < 0 ? 2 : 1);
                }
                switch {
                    case 0: {
                        o4.a_m14_PBBIZRV(36, 4, 1, false);
                        break;
                    }
                    case 4: 
                    case 8: {
                        bq.a_m2_PBRV(1);
                    }
                    case 1: 
                    case 6: 
                    case 10: 
                    case 12: 
                    case 14: 
                    case 16: {
                        let n5 = o4.e_m0_PBRI(4);
                        o4.d_m3_PIRV;
                    }
                }
                break;
            }
            case 5: {
                if (by2 != 0) break;
                o2.a_f3_Ldo_.f_f1_I = o2.c_m3_PBRI(5);
                a_m10_PBBIRV(38, 5, -1);
                a_m10_PBBIRV(37, 5, -1);
                break;
            }
            case 6: {
                let n6 = null;
                let by5 = by2;
                let o5 = o2;
                switch {
                    case 0: {
                        o5.a_m14_PBBIZRV(40, 6, 1, true);
                        break;
                    }
                    case 5: 
                    case 9: {
                        di.a_f4_Lg_.c_m4_PIIRV(2, 2);
                        break;
                    }
                    case 12: {
                        di.a_f4_Lg_.a_m23_PLat_RV(new dq(true, 0xFFFF57, o5.S, o5.d_f1_B << 4, o5.e << 4));
                        break;
                    }
                    case 14: {
                        g.a_m16_PIRV(1);
                        break;
                    }
                    case 15: 
                    case 16: {
                        g.b_m5_PIRV(0);
                    }
                    case 17: 
                    case 18: {
                        di.a_f4_Lg_.c_m4_PIIRV(3 * (19 - by5), 2);
                    }
                }
                if (by5 != 5 && by5 != 9 && by5 != 15) break;
                let n7 = n6 = o5.e_m0_PBRI(6);
                let o6 = o5;
                for (let by6 = 1; by6 <= 8; by6 = (by6 + 1)) {
                    let cd3 = o6.a_m13_PBRLcd_;
                    if (cd3 == null) continue;
                    cd3.a_m13_PIBRZ(n7, by6);
                    cd3.c_m5_PIRV(60);
                }
                bq.a_m2_PBRV(by5 == 15 ? 2 : 3);
                break;
            }
            case 7: {
                if (by2 != 0) break;
                let by7 = 7;
                let o7 = o2;
                o2.a_f3_Ldo_.e_f1_I = o7.b_m4_PBIRI(by7, 1) + o2.c_m3_PBRI(7);
                a_m10_PBBIRV(41, 7, -1);
                a_m10_PBBIRV(42, 7, -1);
                break;
            }
            case 8: {
                let by8 = by2;
                let o8 = o2;
                switch {
                    case 0: {
                        o8.a_m14_PBBIZRV(43, 8, 1, true);
                        break;
                    }
                    case 3: {
                        o8.a_f3_Ldo_.k_m0_PIRV(30);
                        g.a_m16_PIRV(1);
                        break;
                    }
                    case 23: {
                        di.a_f4_Lg_.c_m4_PIIRV(1, 2);
                        break;
                    }
                    default: {
                        if (by8 <= 4 || by8 >= 22 || by8 % 2 != 1) break;
                        di.a_f4_Lg_.c_m4_PIIRV(3, 2);
                    }
                }
                if (by8 >= 5 && by8 <= 21) {
                    let n8 = o8.e_m0_PBRI(8);
                    o8.d_m3_PIRV;
                }
                if (by8 % 7 != 6) break;
                b_m7_PBRV(8);
                break;
            }
            case 9: {
                if (by2 != 0) break;
                let n9 = o2.c_m3_PBRI(9);
                o2.a_f3_Ldo_.a_f10_Z = true;
                a_m10_PBBIRV(44, 9, n9);
            }
        }
        if (by2 >= o.b_f0_AB[o2.a_f2_B]) {
            o2.h();
        }
    
  }
  h() {

        this.b_f1_B = 0;
        this.c_f1_B = -1;
        this.a_f2_B = -1;
    
  }
  a_m2_PBRB(by2) {

        return this.c_f0_AB[by2];
    
  }
  b_m1_PBRB(by2) {

        return this.d_f0_AB[by2];
    
  }
  a_m3_PBRZ(by2) {

        let by3 = by2;
        this.c_f0_AB[by3] = (this.c_f0_AB[by3] + 1);
        return o.a_m6_PABRZ;
    
  }
  b_m2_PBRZ(by2) {

        let by3 = by2;
        this.d_f0_AB[by3] = (this.d_f0_AB[by3] + 1);
        return o.a_m6_PABRZ;
    
  }
  c_m0_PBRZ(by2) {

        return this.a_f0_AZ[by2];
    
  }
  a_m4_PIBRV(n2, by2) {

        for (let i2 = 0; i2 < 2; ++i2) {
            if (this.a_f1_AB[i2] != by2) continue;
            this.a_f1_AB[i2] = -1;
        }
        this.a_m5_PIRV;
        this.a_f1_AB[n2] = by2;
        this.a_f0_AZ[by2] = true;
    
  }
  a_m5_PIRV(n2) {

        let by2 = this.a_f1_AB[n2];
        if (by2 >= 0) {
            this.a_f0_AZ[by2] = false;
        }
        this.a_f1_AB[n2] = -1;
    
  }
  c_m1_PRV() {

        let n2 = null;
        this.a_f0_AZ = new Array(10).fill(false);
        for (n2 = 0; n2 < 10; ++n2) {
            this.a_f0_AZ[n2] = false;
        }
        for (n2 = 0; n2 < 2; ++n2) {
            if (this.a_f1_AB[n2] < 0) continue;
            this.a_f0_AZ[this.a_f1_AB[n2]] = true;
        }
    
  }
  static a_m6_PABRZ(byArray) {

        let n2 = null;
        if (byArray[4] >= 0) {
            let false = null;
        }
        let n3 = 0;
        for (n2 = 0; n2 < 4; ++n2) {
            n3 += byArray[n2];
        }
        if (n3 >= 6) {
            for (n2 = 4; n2 < 10; ++n2) {
                if (byArray[n2] >= 0) continue;
                byArray[n2] = 0;
            }
            let true = null;
        }
        let false = null;
    
  }
  b_m3_PIRV(n2) {

        if ((n2 = di.b_f5_AB[n2]) < 0) {
            return;
        }
        if (rpg.e.a_f3_ALs_[n2] != null) {
            return;
        }
        a_m17_PBRV(n2);
        this.a_f4_Z = true;
    
  }
  d_m0_PRV() {

        a_m17_PBRV(10);
    
  }
  e_m0_PBRI(by2) {

        let by3 = by2;
        let o2 = this;
        by2 = (o2.b_m4_PBIRI(by3, 1) + this.c_m3_PBRI);
        return this.a_f3_Ldo_.c_m10_PIRI;
    
  }
  a_m7_PLcd_RZ(cd2) {

        let by2 = 5;
        let o2 = this;
        let n2 = o2.b_m4_PBIRI(by2, 1);
        if (rpg.g.a_m7_PIIRI(1, 100) > n2) {
            if (cd2 instanceof af) {
                cd2.a_m1_PLat_RV(new z(-3));
                let false = null;
            }
            cd2.a_m1_PLat_RV(new cr(39, 5, 1));
            let true = null;
        }
        let false = null;
    
  }
  static c_m2_PIRV(n2) {

        switch {
            case 7: {
                g.a_m16_PIRV(1);
                return;
            }
            case 8: {
                g.b_m5_PIRV(0);
                return;
            }
            case 9: {
                di.a_f4_Lg_.c_m4_PIIRV(2, 2);
            }
        }
    
  }
  a_m8_PIRI(n2) {

        return this.b_m4_PBIRI(9, n2);
    
  }
  a_m9_PRZ() {

        let by2 = 9;
        let o2 = this;
        return rpg.g.a_m7_PIIRI(1, 100) < o2.a_m12_PBIRI(by2, 1);
    
  }
  static a_m10_PBBIRV(by2, by3, n2) {

        di.a_f9_Ldo_.a_m2_PBBIRV(by2, by3, n2);
    
  }
  a_m11_PBRI(by2) {

        return this.a_m12_PBIRI(by2, 1);
    
  }
  a_m12_PBIRI(by2, n2) {

        let by3 = by2;
        let o2 = this;
        if (!o2.a_f0_AZ[by3]) {
            return 0;
        }
        let n3 = by2 * 3;
        by3 = by2;
        o2 = this;
        let n4 = this.R[n3] + this.R[n3 + 1] * o2.d_f0_AB[by3];
        by2 = n4;
        return n4 * n2 / this.R[n3 + 2];
    
  }
  b_m4_PBIRI(by2, n2) {

        let n3 = by2 * 8;
        return n2 * (this.Q[n3] + this.Q[n3 + 1] * this.c_f0_AB[by2]) / this.Q[n3 + 2];
    
  }
  b_m5_PBRI(by2) {

        return this.b_m4_PBIRI(by2, 1);
    
  }
  c_m3_PBRI(by2) {

        by2 = (by2 << 3);
        let by3 = this.Q[by2 + 3];
        by2 = this.Q[by2 + 7];
        return di.a_f9_Ldo_.a_m22_PBRI(3) / by3 + by2;
    
  }
  d_m1_PBRI(by2) {

        let s2 = rpg.g.b_m1_PABIRS(this.Q, (by2 << 3) + 5);
        by2 = s2;
        let s2 = null;
    
  }
  d_m2_PBRZ(n2) {

        if (n2 < 0) {
            let false = null;
        }
        if (this.b_f1_B != 0) {
            let false = null;
        }
        if (this.a_f2_B != -1) {
            let false = null;
        }
        let n3 = n2;
        let o2 = this;
        n3 = o2.Q[(n3 << 3) + 4];
        n3 -= o2.a_m12_PBIRI(8, n3);
        let n4 = n3;
        if (n3 > di.a_f9_Ldo_.c_m7_PRI()) {
            this.a_f3_Ldo_.k_m2_PBRV(1);
            let false = null;
        }
        this.a_f2_B = n2;
        di.a_f9_Ldo_.i_m0_PIRV(-n4);
        di.b_m8_PBZRV(n2, false);
        n3 = n2;
        let o3 = this;
        switch {
            case 1: {
                n2 = 7;
                break;
            }
            case 2: {
                n2 = 6;
                break;
            }
            case 5: {
                n2 = 1;
                break;
            }
            case 9: {
                n2 = 8;
                break;
            }
            default: {
                o3.a_f3_Ldo_.a_m0_PBRV(10);
                o3.a_f3_Ldo_.c_f1_I = 0;
                let true = null;
            }
        }
        n3 = o3.c_m3_PBRI(n3) * n2;
        o3.a_f3_Ldo_.o_m0_PIRV;
        o3.a_f3_Ldo_.n_m1_PRV();
        let false = null;
    
  }
  e_m1_PRV() {

        this.c_f1_B = -1;
        this.b_f1_B = 1;
    
  }
  d_m3_PIRV(n2) {

        this.b_m6_PBBIRV(1, 12, n2);
        this.b_m6_PBBIRV(17, 24, n2);
    
  }
  b_m6_PBBIRV(by2, by3, n2) {

        for (let by4 = by2; by4 <= by3; by4 = (by4 + 1)) {
            let cd2 = this.a_m13_PBRLcd_;
            if (cd2 == null) continue;
            cd2.b_m4_PIRZ;
        }
    
  }
  a_m13_PBRLcd_(by2) {

        let du2 = du.a_m2_PBBBBBRLdu_(this.d_f1_B, this.e, by2, 0, 0);
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h)) {
            let du2 = null;
        }
        let null = null;
    
  }
  a_m14_PBBIZRV(by2, by3, n2, bl2) {

        let o2 = this;
        this.d_f1_B = o2.a_f3_Ldo_.s;
        o2.e = o2.a_f3_Ldo_.t;
        di.a_f4_Lg_.a_m23_PLat_RV(new dm(by2, by3, 1, this.a_f3_Ldo_.h, this.a_f3_Ldo_.i, bl2));
    
  }
  a_m15_PRAB() {

        let byArray = null;
        let byteArrayOutputStream = null;
        let filterOutputStream = null;
        try {
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = let DataOutputStream = null;
            (filterOutputStream).write;
            (filterOutputStream).write;
            (filterOutputStream).write;
            byArray = byteArrayOutputStream.toByteArray();
        }
        catch (iOException) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) let null = null;
                byteArrayOutputStream.close();
                let null = null;
            }
            catch (iOException2) {
                let null = null;
            }
        }
        catch (throwable) {
            try {
                if (filterOutputStream != null) {
                    filterOutputStream.close();
                }
                if (byteArrayOutputStream == null) let throwable = null;
                byteArrayOutputStream.close();
                let throwable = null;
            }
            catch (iOException) {}
            let throwable = null;
        }
        try {
            filterOutputStream.close();
            byteArrayOutputStream.close();
            let byArray = null;
        }
        catch (iOException) {}
        let byArray = null;
    
  }
  i() {

        let by2 = null;
        let n2 = 0;
        for (by2 = 0; by2 < this.c_f0_AB.length; ++by2) {
            if (this.c_f0_AB[by2] <= 0) continue;
            n2 += this.c_f0_AB[by2];
            this.c_f0_AB[by2] = 0;
        }
        for (by2 = 0; by2 < this.d_f0_AB.length; ++by2) {
            if (this.d_f0_AB[by2] <= 0) continue;
            n2 += this.d_f0_AB[by2];
            this.d_f0_AB[by2] = 0;
        }
        di.a_f9_Ldo_.b_f3_S = (di.a_f9_Ldo_.b_f3_S + n2);
        this.g();
        for (by2 = 0; by2 < 2; by2 = (by2 + 1)) {
            di.a_m15_PBZRV(by2, false);
        }
    
  }
  a_m16_PABRV(object) {

        let filterInputStream = null;
        let byteArrayInputStream = null;
        block14: {
            byteArrayInputStream = null;
            filterInputStream = null;
            byteArrayInputStream = new ByteArrayInputStream(object);
            filterInputStream = let DataInputStream = null;
            (filterInputStream).read;
            (filterInputStream).read;
            (filterInputStream).read;
            if (!di.a_m20_PBRZ(4)) let block14 = null;
            this.i();
        }
        try {
            filterInputStream.close();
            byteArrayInputStream.close();
            return;
        }
        catch (iOException) {
            return;
        }
        catch (iOException) {
            try {
                object = iOException;
                iOException
            }
            catch (throwable) {
                try {
                    if (filterInputStream != null) {
                        filterInputStream.close();
                    }
                    if (byteArrayInputStream != null) {
                        byteArrayInputStream.close();
                    }
                }
                catch (iOException2) {}
                let throwable = null;
            }
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream != null) {
                    byteArrayInputStream.close();
                }
                return;
            }
            catch (iOException3) {
                return;
            }
        }
    
  }
  f() {

        this.Q = rpg.e.a_m6_PLjava_lang_String_RAB("/s/d/a");
        this.R = new Int8Array(30);
        this.R = rpg.e.a_m6_PLjava_lang_String_RAB("/s/d/p");
    
  }
  static a_m17_PBRV(by2) {

        rpg.e.a_f3_ALs_[by2] = s.a_m5_PLjava_lang_String_Ljava_lang_String_RLs_("/s/cif/" + by2, "/s/" + by2);
    
  }
  static b_m7_PBRV(by2) {

        switch {
            case 0: 
            case 4: {
                by2 = 1;
                break;
            }
            case 8: {
                by2 = 2;
                break;
            }
            default: {
                return;
            }
        }
        bq.a_m2_PBRV;
    
  }
  b_m8_PRZ() {

        let n2 = 5 + this.a_f3_Ldo_.a_m22_PBRI(3);
        let by2 = 6;
        let o2 = this;
        let n3 = n2 + o2.a_m12_PBIRI(by2, 1);
        return rpg.g.a_m7_PIIRI(0, 99) < n3;
    
  }
}

JavaRegistry.set("o", o);
JavaRegistry.set("o", o);
try { if (typeof o.__clinit === 'function') o.__clinit(); } catch (e) { console.warn('clinit o', e); }

globalThis.o = o;
