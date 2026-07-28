/** Transpiled from bn */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bn extends (JavaRegistry.get("Object") || class {}) {
  a_f0_Ljavax_microedition_lcdui_Font_ = null;
  /* deferred: bn.a_f1_Lbn_ */ static get bn.a_f1_Lbn_(){ if(!this.___a_f1_Lbn_) this.___a_f1_Lbn_=new bn(Font.getDefaultFont()); return this.___a_f1_Lbn_; }
  bn(font) {

        this.a_f0_Ljavax_microedition_lcdui_Font_ = font;
    
  }
  static a_m0_PRLbn_() {

        let bn.a_f1_Lbn_ = null;
    
  }
  a_m1_PLjava_lang_String_IIRI(string, n2, n3) {

        return this.a_f0_Ljavax_microedition_lcdui_Font_.substringWidth(string, 0, n3);
    
  }
}

JavaRegistry.set("bn", bn);
JavaRegistry.set("bn", bn);
try { if (typeof bn.__clinit === 'function') bn.__clinit(); } catch (e) { console.warn('clinit bn', e); }

globalThis.bn = bn;
