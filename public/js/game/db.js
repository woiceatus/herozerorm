/** Transpiled from db */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class db extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_Lcb_ = null;
  static b = null;
  static a_f1_Lcz_ = null;
  static a_f2_Lm_ = null;
  static a_f3_AB = null;
  static a_f4_I = 0;
  /* skip field: private static byte[][] a_f5_AAB = null; */
  static a_f6_Z = false;
  a_m0_PABIRI(object, n2) {

        a_m1_PRV();
        db.a_f2_Lm_ = null;
        db.a_f1_Lcz_ = let cz = null;
        db.a_f0_Lcb_ = let cb = null;
        db.b = let cb = null;
        n2 = db.a_f0_Lcb_.a(object, n2, 1);
        n2 = db.b.a(object, n2, 2);
        let n3 = object[n2] < 0 ? 256 + object[n2] : object[n2];
        ++n2;
        a_f5_AAB = null;
        if (n3 > 0) {
            let n4 = null;
            a_f5_AAB = new Int8Array(n3)[];
            for (n4 = 0; n4 < n3; ++n4) {
                let n5 = object[n2] < 0 ? 256 + object[n2] : object[n2];
                ++n2;
                db.a_f5_AAB[n4] = new Int8Array(n5);
            }
            for (n4 = 0; n4 < n3; ++n4) {
                System.arraycopy(object, n2, a_f5_AAB[n4], 0, a_f5_AAB[n4].length);
                n2 += a_f5_AAB[n4].length + 1;
            }
        }
        object = db.a_f1_Lcz_;
        db.a_f1_Lcz_.a_f0_I = 0;
        let n2 = null;
    
  }
  static a_m1_PRV() {

        db.a_f0_Lcb_ = null;
        db.b = null;
        db.a_f1_Lcz_ = null;
        db.a_f2_Lm_ = null;
        db.a_f3_AB = null;
        db.a_f4_I = 0;
        a_f5_AAB = null;
        db.a_f6_Z = false;
    
  }
  static a_m2_PRZ() {

        return db.a_f0_Lcb_ != null && db.b != null && db.a_f1_Lcz_ != null;
    
  }
  static b_m0_PRV() {

        db.a_f6_Z = true;
    
  }
  static a_m3_PIRAB(n2) {

        if (a_f5_AAB == null) {
            return d.p;
        }
        if (n2 >= a_f5_AAB.length) {
            return d.p;
        }
        return a_f5_AAB[n2];
    
  }
  static c() {

        db.a_f2_Lm_ = null;
    
  }
  static a_m4_PIRV(n2) {

        db.a_f1_Lcz_.a;
        db.a_f2_Lm_ = m.a_m0_PLm_RLm_;
        let n3 = db.a_f4_I;
        for (let i2 = 0; i2 < n2; ++i2) {
            n3 += db.a_f3_AB[i2] < 0 ? 256 + db.a_f3_AB[i2] : db.a_f3_AB[i2];
        }
        db.a_f2_Lm_.a_m3_PIIRV(n3, n3 + (db.a_f3_AB[n2] < 0 ? 256 + db.a_f3_AB[n2] : db.a_f3_AB[n2]));
        db.a_f3_AB = null;
    
  }
  a_m5_PLm_RZ(m2) {

        let bl2 = false;
        while (!m2.a_m8_PRZ()) {
            let by2 = m2.a_m6_PRB();
            if (by2 >= 0 && by2 < db.b.a_f2_S) {
                let m3 = m.a_m0_PLm_RLm_;
                m3.a_m3_PIIRV(db.b.a_f1_AS[by2], db.b.a_f1_AS[by2 + 1]);
                db.a_f1_Lcz_.a;
                bl2 = true;
                continue;
            }
            if (by2 == -1) {
                let n2 = null;
                let n3 = m2.a_m6_PRB();
                let byArray = new Int8Array(n3);
                for (n2 = 0; n2 < n3; ++n2) {
                    byArray[n2] = m2.a_m6_PRB();
                }
                let m4 = m.a_m0_PLm_RLm_;
                let n4 = m2.a_m4_PRI();
                let n5 = m2.a_m4_PRI();
                for (n2 = 0; n2 < n3; ++n2) {
                    n5 += byArray[n2];
                }
                for (n2 = 0; n2 < n3; ++n2) {
                    m4.a_m3_PIIRV(n4, n4 + byArray[n2]);
                    if (this.a_m5_PLm_RZ) {
                        bl2 = true;
                        break;
                    }
                    n4 += byArray[n2];
                }
                m2.a_m2_PIRV;
                continue;
            }
            if (this.a_m7_PBLm_RZ((-2 - by2), m2)) continue;
            let bl2 = null;
        }
        let bl2 = null;
    
  }
  a_m6_PIRZ(n2) {

        if (db.a_f0_Lcb_ == null || db.b == null) {
            let false = null;
        }
        if (db.a_f2_Lm_ != null) {
            let false = null;
        }
        if (n2 >= db.a_f0_Lcb_.a_f1_AS.length - 1 || n2 < 0) {
            let false = null;
        }
        let m2 = db.a_f0_Lcb_.a_f3_Lm_;
        m2.a_m3_PIIRV(db.a_f0_Lcb_.a_f1_AS[n2], db.a_f0_Lcb_.a_f1_AS[n2 + 1]);
        this.a_m5_PLm_RZ;
        return db.a_f1_Lcz_.a_f0_I > 0;
    
  }
  b_m1_PRZ() {

        if (db.a_f0_Lcb_ == null || db.b == null) {
            let false = null;
        }
        if (db.a_f3_AB != null) {
            let true = null;
        }
        do {
            let bl2 = null;
            block13: {
                let n2 = null;
                let object = null;
                if (db.a_f2_Lm_ == null) {
                    let m2 = null;
                    object = db.a_f1_Lcz_;
                    if ((object).a_f0_I > 0) {
                        let m3 = (object).a_f1_ALm_[0];
                        for (n2 = 1; n2 < (object).a_f0_I; ++n2) {
                            (object).a_f1_ALm_[n2 - 1] = (object).a_f1_ALm_[n2];
                        }
                        (object).a_f1_ALm_[(object).a_f0_I - 1] = null;
                        --(object).a_f0_I;
                        m2 = m3;
                    } else {
                        m2 = db.a_f2_Lm_ = null;
                    }
                }
                if (db.a_f2_Lm_ == null) continue;
                object = this;
                let by2 = 0;
                let m4 = db.a_f2_Lm_;
                while (!m4.a_m8_PRZ()) {
                    let by3 = m4.a_m6_PRB();
                    n2 = 0;
                    if (by3 == -1) {
                        by2 = m4.a_m6_PRB();
                        n2 = m4.a_m6_PRB();
                    }
                    if (n2 == 0) {
                        if ((object).b_m2_PBLm_RZ(by3, m4)) continue;
                        bl2 = false;
                    } else {
                        let byArray = new Int8Array(n2);
                        db.a_f3_AB = new Int8Array(n2);
                        let n3 = 0;
                        for (let i2 = 0; i2 < n2; ++i2) {
                            byArray[i2] = m4.a_m6_PRB();
                            db.a_f3_AB[i2] = m4.a_m6_PRB();
                            n3 += db.a_f3_AB[i2] < 0 ? 256 + db.a_f3_AB[i2] : db.a_f3_AB[i2];
                        }
                        db.a_f4_I = m4.a_m4_PRI();
                        (object).a_m8_PBABRV(by2, byArray);
                        m4.a_m2_PIRV(m4.a_m4_PRI() + n3);
                        bl2 = false;
                    }
                    let block13 = null;
                }
                db.a_f2_Lm_ = null;
                bl2 = true;
            }
            let continue = null;
            let true = null;
        } while (db.a_f1_Lcz_.a_f0_I > 0);
        if {
            db.a_f6_Z = false;
            return this.a_m6_PIRZ(1);
        }
        let false = null;
    
  }
  /* skip field: protected abstract boolean a_m7_PBLm_RZ(db.byte var1, m var2); */
  /* skip field: protected abstract boolean b_m2_PBLm_RZ(db.byte var1, m var2); */
  /* skip field: protected abstract void a_m8_PBABRV(db.byte var1, db.byte[] var2); */
}

JavaRegistry.set("db", db);
JavaRegistry.set("db", db);
try { if (typeof db.__clinit === 'function') db.__clinit(); } catch (e) { console.warn('clinit db', e); }

globalThis.db = db;
