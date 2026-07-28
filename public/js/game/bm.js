/** Transpiled from bm */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bm extends (JavaRegistry.get("as") || class {}) {
  d_f0_B = null;
  e = null;
  f = null;
  g = null;
  a = null;
  b = null;
  c_f0_S = null;
  d_f1_S = null;
  h = null;
  static d_f2_AB = new Int8Array([5, 5, 5, 5, 50, 1, 8, 5, 1, 100, 8, 8, 8, 8, 1, 3]);
  c_f1_AB = new Int8Array([-3, -3, -3, -3, -3, -3]);
  i = null;
  bm(by2, by3) {

        /*super*/(by2, by3);
        this.e = by3 < 16 ? 0 : 1;
        this.i = -1;
    
  }
  a_m0_PRB() {

        let n2 = super.a_m3_PRB();
        for (let i2 = 0; i2 < this.c_f1_AB.length; ++i2) {
            n2 += this.c_f1_AB[i2] << ((i2 & 1) == 0 ? 2 : 3);
        }
        return (n2 % 100);
    
  }
  a_m1_PLjava_io_DataOutputStream_RLjava_io_DataOutputStream_(dataOutputStream) {

        dataOutputStream = super.a_m5_PLjava_io_DataOutputStream_RLjava_io_DataOutputStream_;
        dataOutputStream.writeShort;
        dataOutputStream.writeShort;
        dataOutputStream.writeShort;
        dataOutputStream.writeByte;
        (dataOutputStream).write;
        dataOutputStream.write;
        let dataOutputStream = null;
    
  }
  a_m2_PLjava_io_DataInputStream_RV(dataInputStream) {

        super.a_m6_PLjava_io_DataInputStream_RV;
        this.b = dataInputStream.readShort();
        this.c_f0_S = dataInputStream.readShort();
        this.d_f1_S = dataInputStream.readShort();
        this.h = dataInputStream.readByte();
        dataInputStream.read;
        this.i = dataInputStream.readByte();
    
  }
  a_m3_PABIRI(byArray, n2) {

        n2 = super.a_m7_PABIRI(byArray, n2);
        this.d_f0_B = byArray[n2++];
        this.e = byArray[n2++];
        this.f = byArray[n2++];
        this.g = byArray[n2++];
        this.a = rpg.g.b_m1_PABIRS(byArray, n2);
        this.b = rpg.g.b_m1_PABIRS(byArray, n2 += 2);
        this.c_f0_S = rpg.g.b_m1_PABIRS(byArray, n2 += 2);
        this.d_f1_S = rpg.g.b_m1_PABIRS(byArray, n2 += 2);
        n2 += 2;
        this.h = byArray[n2++];
        System.arraycopy(byArray, n2, this.c_f1_AB, 0, this.c_f1_AB.length);
        n2 += this.c_f1_AB.length;
        for (let i2 = 0; i2 < this.c_f1_AB.length; ++i2) {
            if (this.c_f1_AB[i2] != 100) continue;
            this.c_f1_AB[i2] = rpg.g.a_m7_PIIRI(0, 15);
        }
        let n2 = null;
    
  }
  a_m4_PIRI(n2) {

        let n3 = 0;
        for (let i2 = 0; i2 < this.c_f1_AB.length; ++i2) {
            if (this.c_f1_AB[i2] != n2) continue;
            n3 += bm.d_f2_AB[n2];
        }
        let n3 = null;
    
  }
  a_m5_PRI() {

        let n2 = null;
        for (n2 = 0; n2 < this.c_f1_AB.length && this.c_f1_AB[n2] != -3; ++n2) {
        }
        let n2 = null;
    
  }
}

JavaRegistry.set("bm", bm);
JavaRegistry.set("bm", bm);
try { if (typeof bm.__clinit === 'function') bm.__clinit(); } catch (e) { console.warn('clinit bm', e); }

globalThis.bm = bm;
