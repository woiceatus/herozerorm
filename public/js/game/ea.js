/** Transpiled from ea */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ea extends (JavaRegistry.get("Object") || class {}) {
  a_f0_Ljava_lang_String_ = null;
  a_f1_Lea_ = this;
  ea(string) {

        this.a_f0_Ljava_lang_String_ = string;
    
  }
  a_m0_PRLjava_lang_String_() {

        return this.a_f0_Ljava_lang_String_;
    
  }
  a_m1_PIIRZ(n2, n3) {

        let true = null;
    
  }
}

JavaRegistry.set("ea", ea);
JavaRegistry.set("ea", ea);
try { if (typeof ea.__clinit === 'function') ea.__clinit(); } catch (e) { console.warn('clinit ea', e); }

globalThis.ea = ea;
