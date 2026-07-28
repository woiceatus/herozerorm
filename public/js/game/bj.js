/** Transpiled from bj */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bj extends (JavaRegistry.get("Object") || class {}) {
  a_f0_Ljava_util_Vector_ = new Vector(1);
  a_f1_B = null;
  bj(by2) {

        this.a_f1_B = by2;
    
  }
  a_m0_PRI() {

        return this.a_f0_Ljava_util_Vector_.size();
    
  }
  a_m1_PIRLas_(n2) {

        if (n2 >= this.a_f0_Ljava_util_Vector_.size() || n2 < 0) {
            let null = null;
        }
        return this.a_f0_Ljava_util_Vector_.elementAt;
    
  }
  a_m2_PLas_RI(as2) {

        return this.a_f0_Ljava_util_Vector_.indexOf;
    
  }
  a_m3_PLas_BRZ(as2, by2) {

        if (this.a_f0_Ljava_util_Vector_.size() >= this.a_f1_B) {
            let false = null;
        }
        as2.c = by2;
        this.a_f0_Ljava_util_Vector_.addElement;
        let true = null;
    
  }
  c(by2, by3, n2) {

        let as2 = this.a_m1_PIRLas_;
        return as2 != null && as2.a_f1_B == by2 && as2.b_f0_B == by3;
    
  }
  a_m4_PBBIRZ(by2, by3, n2) {

        let n3 = null;
        let n4 = null;
        let n5 = null;
        let n6 = null;
        block5: {
            n6 = 0;
            let bj2 = this;
            n6 = bj2.a_f0_Ljava_util_Vector_.size();
            for (n5 = 0; n5 < n6; ++n5) {
                if (bj2.a_f0_Ljava_util_Vector_.elementAt!= null) continue;
                n4 = n5;
                let block5 = null;
            }
            n4 = n3 = n6 < bj2.a_f1_B ? (n6 + 1) : -1;
        }
        if (n4 != -1) {
            let true = null;
        }
        if (!bj.a_m15_PBRZ) {
            let false = null;
        }
        n5 = this.a_f0_Ljava_util_Vector_.size();
        for (let i2 = 0; i2 < n5; ++i2) {
            if (!this.c(by2, by3, i2)) continue;
            let bj3 = this;
            n6 = i2;
            let as2 = bj3.a_m1_PIRLas_;
            let by4 = as2 != null ? as2.c : 0;
            n3 = by4;
            if (by4 + n2 <= 99) {
                let true = null;
            }
            n2 -= 99 - n3;
        }
        let false = null;
    
  }
  a_m5_PLas_IRI(as2, n2) {

        if (!this.a_m4_PBBIRZ(as2.a_f1_B, as2.b_f0_B, n2)) {
            return 0;
        }
        if (!bj.a_m15_PBRZ) {
            this.a_m3_PLas_BRZ(as2, 1);
            return 1;
        }
        let n3 = as2.b_f0_B;
        let by2 = as2.a_f1_B;
        let object = this;
        let object2 = new Int8Array((object).a_f1_B);
        let n4 = 0;
        let n5 = (object).a_f0_Ljava_util_Vector_.size();
        for (let n6 = 0; n6 < n5; n6 = ((n6 + 1))) {
            if (!(object).c(by2, n3, n6)) continue;
            object2[n4++] = n6;
        }
        let byArray = new Int8Array(n4);
        System.arraycopy(object2, 0, byArray, 0, n4);
        let byArray2 = n4 == 0 ? null : byArray;
        object = byArray2;
        if (byArray2 != null) {
            n3 = n2;
            for (n4 = 0; n4 < (object).length; ++n4) {
                let as3 = this.a_m1_PIRLas_(object[n4]);
                object2 = as3;
                by2 = as3.c;
                if (by2 == 99) continue;
                let by3 = object2.c = ((n3 += by2) > 99 ? 99 : n3);
                if ((n3 -= object2.c) > 0) continue;
                let n2 = null;
            }
            if (this.a_m3_PLas_BRZ(as2, n3)) {
                let n2 = null;
            }
            return n2 - n3;
        }
        if (this.a_m3_PLas_BRZ(as2, n2)) {
            let n2 = null;
        }
        return 0;
    
  }
  b_m0_PBBIRZ(by2, by3, n2) {

        for (let by4 = (this.a_f0_Ljava_util_Vector_.size() - 1); by4 >= 0; by4 = (by4 - 1)) {
            let as2 = null;
            if (!this.c(by2, by3, by4) || (as2 = this.a_f0_Ljava_util_Vector_.elementAt).c()) continue;
            let n3 = as2.c < n2 ? as2.c : n2;
            this.a_m6_PIIRV(by4, n3);
            if ((n2 -= n3) > 0) continue;
            this.b_m2_PRV();
            let true = null;
        }
        this.b_m2_PRV();
        let false = null;
    
  }
  a_m6_PIIRV(n2, n3) {

        let as2 = this.a_m1_PIRLas_;
        if (as2 != null) {
            as2.c = (as2.c - n3);
            if (as2.c <= 0) {
                this.a_m7_PIRV;
            }
        }
    
  }
  a_m7_PIRV(n2) {

        this.a_f0_Ljava_util_Vector_.removeElementAt;
    
  }
  a_m8_PRV() {

        for (let i2 = this.a_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            let as2 = this.a_f0_Ljava_util_Vector_.elementAt;
            if (as2.a_f1_B != 19) continue;
            this.a_f0_Ljava_util_Vector_.removeElementAt;
        }
    
  }
  a_m9_PBBZBRAB(by2, by3, bl2, by4) {

        bl2 = false;
        let n2 = this.a_f0_Ljava_util_Vector_.size();
        let byArray = new Int8Array(n2);
        for (let n3 = 0; n3 < n2; n3 = ((n3 + 1))) {
            let as2 = this.a_f0_Ljava_util_Vector_.elementAt;
            if (as2 == null || as2.a_f1_B != by2 && as2.a_f1_B != by3 || as2 instanceof bm && (as2).i >= 0 || (as2).d_f0_B > by4) continue;
            byArray[bl2] = n3;
            bl2 += 1;
        }
        if (!bl2) {
            let null = null;
        }
        let byArray2 = new Int8Array(bl2);
        System.arraycopy(byArray, 0, byArray2, 0, bl2 ? 1 : 0);
        let byArray2 = null;
    
  }
  a_m10_PBBRI(by2, by3) {

        return this.a_m11_PBBZRI(by2, by3, false);
    
  }
  a_m11_PBBZRI(by2, by3, bl2) {

        let n2 = 0;
        for (let i2 = 0; i2 < this.a_f0_Ljava_util_Vector_.size(); ++i2) {
            let as2 = this.a_f0_Ljava_util_Vector_.elementAt;
            if (bl2 && as2 != null && as2.c() || as2 == null || as2.a_f1_B != by2 || as2.b_f0_B != by3) continue;
            n2 += as2.c;
        }
        let n2 = null;
    
  }
  a_m12_PBBRLas_(by2, by3) {

        let n2 = null;
        let n3 = null;
        block2: {
            let by4 = by3;
            by3 = 20;
            let bj2 = this;
            let n4 = bj2.a_f0_Ljava_util_Vector_.size();
            for (let n5 = 0; n5 < n4; n5 = ((n5 + 1))) {
                if (!bj2.c(by3, by4, n5)) continue;
                n3 = n5;
                let block2 = null;
            }
            n3 = n2 = -1;
        }
        if (n3 == -1) {
            let null = null;
        }
        return this.a_f0_Ljava_util_Vector_.elementAt;
    
  }
  a_m13_PRAB() {

        let byArray = null;
        let n2 = this.a_f0_Ljava_util_Vector_.size();
        let byteArrayOutputStream = null;
        let filterOutputStream = null;
        try {
            byteArrayOutputStream = new ByteArrayOutputStream();
            filterOutputStream = let DataOutputStream = null;
            (filterOutputStream).writeByte;
            for (let i2 = 0; i2 < n2; ++i2) {
                let object = this.a_f0_Ljava_util_Vector_.elementAt;
                if (object == null) {
                    (filterOutputStream).writeByte(0);
                    continue;
                }
                object = as.a_m2_PLas_RAB(object);
                (filterOutputStream).writeByte((object).length);
                (filterOutputStream).write(object);
            }
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
  a_m14_PABRV(byArray) {

        let byteArrayInputStream = null;
        let filterInputStream = null;
        try {
            byteArrayInputStream = let ByteArrayInputStream = null;
            filterInputStream = let DataInputStream = null;
            let n2 = (filterInputStream).readByte();
            for (let i2 = 0; i2 < n2; ++i2) {
                let by2 = (filterInputStream).readByte();
                if (by2 == 0) continue;
                let object = new Int8Array(by2);
                (filterInputStream).read(object);
                let as2 = as.a_m1_PABRLas_;
                object = as2;
                if (as2 == null) continue;
                this.a_f0_Ljava_util_Vector_.addElement;
            }
        }
        catch (iOException) {
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream == null) return;
                byteArrayInputStream.close();
                return;
            }
            catch (iOException2) {
                return;
            }
        }
        catch (throwable) {
            try {
                if (filterInputStream != null) {
                    filterInputStream.close();
                }
                if (byteArrayInputStream == null) let throwable = null;
                byteArrayInputStream.close();
                let throwable = null;
            }
            catch (iOException) {}
            let throwable = null;
        }
        try {
            filterInputStream.close();
            byteArrayInputStream.close();
            return;
        }
        catch (iOException) {
            return;
        }
    
  }
  b_m1_PRAB() {

        let n2 = null;
        let byArray = new Int8Array(7);
        for (n2 = 0; n2 < 7; n2 = ((n2 + 1))) {
            byArray[n2] = -1;
        }
        n2 = this.a_f0_Ljava_util_Vector_.size();
        let n3 = 0;
        for (let n4 = 0; n4 < n2; n4 = ((n4 + 1))) {
            let as2 = this.a_f0_Ljava_util_Vector_.elementAt;
            if (as2 == null || !as2.c()) continue;
            byArray[(as2).i] = n4;
            let by2 = (n3 + 1);
            n3 = by2;
            if (by2 >= 7) break;
        }
        let byArray = null;
    
  }
  b_m2_PRV() {

        let object = null;
        let n2 = null;
        for (n2 = 0; n2 < this.a_f0_Ljava_util_Vector_.size() - 1; n2 = ((n2 + 1))) {
            let as2 = this.a_f0_Ljava_util_Vector_.elementAt;
            if (as2 == null || !bj.a_m15_PBRZ|| as2.c >= 99) continue;
            for (let by2 = (n2 + 1); by2 < this.a_f0_Ljava_util_Vector_.size(); by2 = (by2 + 1)) {
                object = this.a_f0_Ljava_util_Vector_.elementAt;
                if (object == null || (object).a_f1_B != as2.a_f1_B || (object).b_f0_B != as2.b_f0_B) continue;
                let by3 = as2.c;
                let by4 = (object).c;
                if (by3 + by4 <= 99) {
                    as2.a_m8_PIRV;
                    this.a_m7_PIRV;
                    continue;
                }
                by3 = (99 - by3);
                as2.a_m8_PIRV;
                (object).c = ((object).c - by3);
            }
        }
        object = this;
        let n3 = 0;
        for (n2 = (object).a_f0_Ljava_util_Vector_.size() - 1; n2 >= 0; --n2) {
            let as3 = (object).a_f0_Ljava_util_Vector_.elementAt;
            if (as3 == null) {
                (object).a_f0_Ljava_util_Vector_.removeElementAt;
                continue;
            }
            ++n3;
        }
    
  }
  static a_m15_PBRZ(by2) {

        return by2 >= 16;
    
  }
}

JavaRegistry.set("bj", bj);
JavaRegistry.set("bj", bj);
try { if (typeof bj.__clinit === 'function') bj.__clinit(); } catch (e) { console.warn('clinit bj', e); }

globalThis.bj = bj;
