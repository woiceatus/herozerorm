/** Transpiled from de */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class de extends (JavaRegistry.get("p") || class {}) {
  static a_f0_Ljava_lang_String_ = null;
  static e = false;
  static f_f0_I = 0;
  static a_f1_ALbj_ = null;
  f_f1_Z = true;
  static a_f2_AB = null;
  static b = null;
  de(n2, by2) {

        /*super*/(n2, by2);
    
  }
  a_m0_PRV() {

        di.a_f7_J = di.a_f8_AJ[di.j] = Date.now();
        di.b_f3_J = di.a_f8_AJ[di.j];
        di.l();
    
  }
  de(n2, by2, by3, by4) {

        /*super*/(n2, by2, by3, by4);
    
  }
  run() {

        h();
        di.m();
    
  }
  a_m1_PABZZRV(byArray, bl2, bl3) {

        if {
            this.c_m0_PRV();
            this.b_f1_Ln_ = new br(this, rpg.e.h_f0_Lch_.a_m0_PIRAB(4));
        }
    
  }
  g() {

        let byArray = c.a_m2_PBABRAB(30, null);
        this.a_m1_PABZZRV(byArray, true, false);
    
  }
  static h() {

        let n2 = null;
        let byArray = rpg.b.b_m3_PRAB();
        if (byArray == null) {
            byArray = new Int8Array(6);
            de.f_f0_I = 0;
            g.a_m4_PIABIRV(0, byArray, 0);
            byArray[4] = 84;
            byArray[5] = 0;
            rpg.b.b_m2_PABRZ;
        }
        let n3 = 0;
        de.f_f0_I = g.a_m2_PABIRI(byArray, 0);
        n3 += 4;
        ++n3;
        let n4 = byArray[4];
        let n5 = (n4 - 1) / 28 + 1;
        if (n5 <= 0) {
            n5 = 1;
        }
        de.a_f1_ALbj_ = new bj[n5];
        n5 = 0;
        while (n4 > 0) {
            n2 = Math.min(28, n4);
            n4 -= n2;
            de.a_f1_ALbj_[n5++] = new bj(n2);
        }
        ++n3;
        n2 = byArray[5];
        n5 = 0;
        for (let i2 = 0; i2 < n2; ++i2) {
            n4 = byArray[n3++];
            let byArray2 = new Int8Array(n4);
            System.arraycopy(byArray, n3, byArray2, 0, n4);
            n3 += n4;
            let as2 = as.a_m1_PABRLas_;
            if (as2 == null) continue;
            de.a_f1_ALbj_[n5].a_m5_PLas_IRI(as2, as2.c);
            if (de.a_f1_ALbj_[n5].a_m0_PRI() < de.a_f1_ALbj_[n5].a_f1_B) continue;
            ++n5;
        }
    
  }
  static i() {

        try {
            let n2 = null;
            let byteArrayOutputStream = new ByteArrayOutputStream();
            let dataOutputStream = let DataOutputStream = null;
            dataOutputStream.writeInt;
            dataOutputStream.writeByte(84);
            let n3 = 0;
            for (n2 = 0; n2 < 3; ++n2) {
                n3 += de.a_f1_ALbj_[n2].a_m0_PRI();
            }
            dataOutputStream.writeByte;
            for (n2 = 0; n2 < 3; ++n2) {
                n3 = de.a_f1_ALbj_[n2].a_m0_PRI();
                for (let i2 = 0; i2 < n3; ++i2) {
                    let object = de.a_f1_ALbj_[n2].a_m1_PIRLas_;
                    if (object == null) continue;
                    object = as.a_m2_PLas_RAB(object);
                    dataOutputStream.writeByte((object).length);
                    (dataOutputStream).write(object);
                }
            }
            rpg.b.b_m2_PABRZ(byteArrayOutputStream.toByteArray());
            return;
        }
        catch (exception) {
            let exception2 = exception;
            let return = null;
        }
    
  }
  static j() {

        if (c.a_m0_PRZ()) {
            c.a_m1_PZRV;
        }
        di.g_m0_PRV();
        de.a_f1_ALbj_ = null;
        bq.e();
    
  }
  b(cm2) {

    
  }
}

JavaRegistry.set("de", de);
JavaRegistry.set("de", de);
try { if (typeof de.__clinit === 'function') de.__clinit(); } catch (de.e) { console.warn('clinit de', de.e); }

globalThis.de = de;
