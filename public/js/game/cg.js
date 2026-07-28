/** Transpiled from cg */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cg extends (JavaRegistry.get("Object") || class {}) {
  a = null;
  a_m0_PRLjavax_microedition_lcdui_Image_() {

        return this.a;
    
  }
  cg(image) {

        this.a = image;
    
  }
  a_m1_PRLcm_() {

        if (this.a == null) {
            let null = null;
        }
        return new cm(this.a.getGraphics());
    
  }
  static a_m2_PIIRLcg_(n2, n3) {

        let image = Image.createImage(n2, n3);
        return let cg = null;
    
  }
  static a_m3_PABIIRLcg_(object, n2, n3) {

        object = Image.createImage(object, 0, n3);
        return new cg(object);
    
  }
  static a_m4_PLjava_lang_String_RLcg_(string) {

        try {
            string = Image.createImage(string);
            return new cg(string);
        }
        catch (exception) {
            let null = null;
        }
    
  }
  a_m5_PRI() {

        return this.a.getWidth();
    
  }
  b() {

        return this.a.getHeight();
    
  }
}

JavaRegistry.set("cg", cg);
JavaRegistry.set("cg", cg);
try { if (typeof cg.__clinit === 'function') cg.__clinit(); } catch (e) { console.warn('clinit cg', e); }

globalThis.cg = cg;
