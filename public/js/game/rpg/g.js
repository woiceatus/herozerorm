/** Transpiled from rpg.g */
import { sleep, JavaRegistry, jEquals } from '../../midp/runtime.js';
import { Image } from '../../midp/Image.js';
import { Graphics } from '../../midp/Graphics.js';
import { Display } from '../../midp/Display.js';
import { Font } from '../../midp/Font.js';
import { RecordStore } from '../../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../../midp/resources.js';

export class g extends (JavaRegistry.get("Object") || class {}) {
  static a = new Random();
  static a_m0_PABABRAB(byArray, byArray2) {

        let byArray3 = new Int8Array(byArray.length + byArray2.length);
        System.arraycopy(byArray, 0, byArray3, 0, byArray.length);
        System.arraycopy(byArray2, 0, byArray3, byArray.length, byArray2.length);
        let byArray3 = null;
    
  }
  static a_m1_PABIRJ(byArray, n2) {

        return g.a_m2_PABIRI(byArray, n2) << 32 | g.a_m2_PABIRI(byArray, n2 + 4) & 0xFFFFFFFFL;
    
  }
  static a_m2_PABIRI(byArray, n2) {

        return (byArray[n2] & 0xFF) << 24 | (byArray[n2 + 1] & 0xFF) << 16 | (byArray[n2 + 2] & 0xFF) << 8 | byArray[n2 + 3] & 0xFF;
    
  }
  static b_m0_PABIRI(byArray, n2) {

        return (byArray[n2 + 3] & 0xFF) << 24 | (byArray[n2 + 2] & 0xFF) << 16 | (byArray[n2 + 1] & 0xFF) << 8 | byArray[n2] & 0xFF;
    
  }
  static a_m3_PABIRS(byArray, n2) {

        return ((byArray[n2 + 1] & 0xFF) << 8 | byArray[n2] & 0xFF);
    
  }
  static b_m1_PABIRS(byArray, n2) {

        return ((byArray[n2] & 0xFF) << 8 | byArray[n2 + 1] & 0xFF);
    
  }
  static a_m4_PIABIRV(n2, byArray, n3) {

        let byArray2 = new Int8Array([0, 0, 0, 0]);
        byArray2[0] = (n2 >>> 24);
        byArray2[1] = (n2 >> 16);
        byArray2[2] = (n2 >> 8);
        byArray2[3] = n2;
        System.arraycopy(byArray2, 0, byArray, n3, 4);
    
  }
  static a_m5_PSABIRV(s2, byArray, n2) {

        byArray[n2] = (s2 >> 8);
        byArray[n2 + 1] = s2;
    
  }
  static a_m6_PJABIRV(l2, byArray, n2) {

        let n3 = (l2 >> 32);
        a_m4_PIABIRV(n3, byArray, n2);
        n3 = l2;
        a_m4_PIABIRV(n3, byArray, n2 + 4);
    
  }
  static a_m7_PIIRI(n2, n3) {

        if ((n3 = n3 - n2 + 1) == 0) {
            return 0;
        }
        n3 = Math.abs(g.a.nextInt()) % n3;
        return n2 + n3;
    
  }
  static a_m8_PLjava_util_Random_IIRI(random, n2, n3) {

        if ((n3 = n3 - n2 + 1) == 0) {
            return 0;
        }
        let n4 = Math.abs(random.nextInt()) % n3;
        return n2 + n4;
    
  }
  static a_m9_PRJ() {

        return Date.now() / 1000;
    
  }
}

JavaRegistry.set("rpg.g", g);
JavaRegistry.set("g", g);
try { if (typeof g.__clinit === 'function') g.__clinit(); } catch (e) { console.warn('clinit rpg.g', e); }

globalThis.g = g;
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.g = g;
