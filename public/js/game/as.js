/** Transpiled from as */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class as extends (JavaRegistry.get("Object") || class {}) {
  d = null;
  a_f0_J = null;
  a_f1_B = null;
  b_f0_B = null;
  c = null;
  a_f2_I = null;
  a_f3_AB = null;
  b_f1_AB = null;
  a_f4_Z = null;
  as(by2, by3) {

        this.c = 1;
        this.a_f3_AB = null;
        this.b_f1_AB = null;
        this.a_f4_Z = true;
        this.a_f1_B = by2;
        this.b_f0_B = by3;
        this.c = 1;
    
  }
  static a_m0_PBBRLas_(by2, by3) {

        let as2 = by2 >= 0 && by2 <= 15 ? new bm(by2, by3) : (by2 == 18 ? new dv(by2, by3) : (by2 == 17 ? new ba(by2, by3) : new as(by2, by3)));
        let byArray = e.a_m7_PLjava_lang_String_IRAB("/itm/" + (by2 < 10 ? "0" : "") + by2, by3);
        if (!e.a_m9_PABRZ) {
            as2 = null;
        } else {
            try {
                let n2 = as2.a_m7_PABIRI(byArray, 0);
                if (by2 == 19) {
                    as2.a_f4_Z = byArray[n2] != 0;
                }
            }
            catch (exception) {
                as2 = null;
            }
        }
        let as2 = null;
    
  }
  static a_m1_PABRLas_(byArray) {

        let as2 = null;
        block16: {
            as2 = null;
            let byteArrayInputStream = null;
            let filterInputStream = null;
            try {
                byteArrayInputStream = let ByteArrayInputStream = null;
                filterInputStream = let DataInputStream = null;
                let by2 = (filterInputStream).readByte();
                let by3 = (filterInputStream).readByte();
                as2 = as.a_m0_PBBRLas_(by2, by3);
                if (as2 != null) {
                    as2.a_m6_PLjava_io_DataInputStream_RV(filterInputStream);
                }
            }
            catch (exception) {
                as2 = null;
                try {
                    filterInputStream.close();
                }
                catch (exception2) {}
                try {
                    byteArrayInputStream.close();
                }
                catch (exception3) {}
                let block16 = null;
            }
            catch (throwable) {
                try {
                    filterInputStream.close();
                }
                catch (exception) {}
                try {
                    byteArrayInputStream.close();
                    let throwable = null;
                }
                catch (exception) {}
                let throwable = null;
            }
            try {
                filterInputStream.close();
            }
            catch (exception) {}
            try {
                byteArrayInputStream.close();
            }
            catch (exception) {}
        }
        if (as2 == null) let as2 = null;
        if (as2.a_m3_PRB() == as2.d) let as2 = null;
        let null = null;
    
  }
  static a_m2_PLas_RAB(as2) {

        let byteArrayOutputStream = new ByteArrayOutputStream();
        let dataOutputStream = let DataOutputStream = null;
        as2.d = as2.a_m3_PRB();
        try {
            dataOutputStream = as2.a_m5_PLjava_io_DataOutputStream_RLjava_io_DataOutputStream_;
            dataOutputStream.close();
            byteArrayOutputStream.close();
        }
        catch (exception) {
            let null = null;
        }
        return byteArrayOutputStream.toByteArray();
    
  }
  a_m3_PRB() {

        let n2 = 0 + as.a_m4_PJIRI(this.a_f0_J, 10);
        n2 += as.a_m4_PJIRI(this.a_f0_J, 100);
        n2 += as.a_m4_PJIRI(this.a_f0_J, 100000);
        n2 += this.c << 3;
        n2 += this.a_f1_B << 6;
        return ((n2 += this.b_f0_B << 3) % 100);
    
  }
  static a_m4_PJIRI(l2, n2) {

        if (l2 == 0) {
            return 0;
        }
        return (l2 / n2 % 10);
    
  }
  a_m5_PLjava_io_DataOutputStream_RLjava_io_DataOutputStream_(dataOutputStream) {

        dataOutputStream.writeByte;
        dataOutputStream.writeByte;
        dataOutputStream.writeByte;
        dataOutputStream.writeLong;
        dataOutputStream.writeByte;
        let dataOutputStream = null;
    
  }
  a_m6_PLjava_io_DataInputStream_RV(dataInputStream) {

        this.c = dataInputStream.readByte();
        this.a_f0_J = dataInputStream.readLong();
        this.d = dataInputStream.readByte();
    
  }
  a_m7_PABIRI(byArray, n2) {

        let by2 = byArray[n2++];
        this.a_f3_AB = new Int8Array(by2);
        System.arraycopy(byArray, n2, this.a_f3_AB, 0, by2);
        this.a_f2_I = g.a_m2_PABIRI(byArray, n2 += by2);
        n2 += 4;
        this.a_f0_J = Date.now();
        by2 = byArray[n2++];
        this.b_f1_AB = new Int8Array(by2);
        System.arraycopy(byArray, n2, this.b_f1_AB, 0, by2);
        return n2 += by2;
    
  }
  a_m8_PIRV(n2) {

        this.c = (this.c + n2);
    
  }
  a_m9_PLcm_IIRV(cm2, n2, n3) {

        this.a_m10_PLcm_IIZZRV(cm2, n2, n3, false, true);
    
  }
  a_m10_PLcm_IIZZRV(cm2, n2, n3, bl2, bl3) {

        if {
            cm2.b_m0_PIIIIRV(n2 + 1, n3 + 1, 12, 12);
        } else {
            cm2.b_m0_PIIIIRV(n2, n3, 14, 14);
        }
        cm2.a_m1_PLcg_IIIRV(e.k_f2_ALcg_[29], n2, n3, 20);
        let n4 = this.a_f1_B + (this.a_f1_B == 20 ? this.b_f0_B : 0);
        cm2.a_m1_PLcg_IIIRV(e.k_f2_ALcg_[n4], n2 + 7, n3 + 7, 3);
        a.a_m1_PLcm_RV;
    
  }
  a_m11_PRZ() {

        return this.a_f1_B == 20 && this.b_f0_B >= 2;
    
  }
  b() {

        return this let bm = null;
    
  }
  c() {

        return this instanceof bm && (this).i >= 0;
    
  }
  d() {

        return this.a_f4_Z;
    
  }
  as() {

    
  }
  static a_m12_PBRV(by2) {

        ct.a_f0_Ljavax_microedition_lcdui_Display_.vibrate(80);
    
  }
}

JavaRegistry.set("as", as);
JavaRegistry.set("as", as);
try { if (typeof as.__clinit === 'function') as.__clinit(); } catch (e) { console.warn('clinit as', e); }

globalThis.as = as;
