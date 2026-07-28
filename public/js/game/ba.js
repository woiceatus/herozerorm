/** Transpiled from ba */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ba extends (JavaRegistry.get("as") || class {}) {
  d = -1;
  ba(by2, by3) {

        /*super*/(by2, by3);
    
  }
  a(byArray, n2) {

        n2 = super.a_m7_PABIRI(byArray, n2);
        this.d = byArray[n2++];
        let n2 = null;
    
  }
}

JavaRegistry.set("ba", ba);
JavaRegistry.set("ba", ba);
try { if (typeof ba.__clinit === 'function') ba.__clinit(); } catch (e) { console.warn('clinit ba', e); }

globalThis.ba = ba;
