/** Transpiled from az */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class az extends (JavaRegistry.get("Object") || class {}) {
  /* skip field: protected abstract void d(cm var1); */
  /* skip field: protected abstract boolean a_m0_PIIRZ(int var1, int var2); */
  /* skip field: public abstract void a_m1_PRV(); */
  /* skip field: public abstract void b(); */
  a_m2_PIIRV(n2, n3) {

        cm.a_m0_PRLcm_().b_m0_PIIIIRV(0, 0, n2, n3);
        cm.a_m0_PRLcm_().c_m0_PIIIIRV(0, 0, n2, n3);
        this.d(cm.a_m0_PRLcm_());
        ct.a_f2_Ljavax_microedition_lcdui_Canvas_.repaint();
    
  }
}

JavaRegistry.set("az", az);
JavaRegistry.set("az", az);
try { if (typeof az.__clinit === 'function') az.__clinit(); } catch (e) { console.warn('clinit az', e); }

globalThis.az = az;
