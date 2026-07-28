/** Transpiled from ar */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class ar extends (JavaRegistry.get("Object") || class {}) {
  a_f0_Z = null;
  a_f1_Ljava_lang_Thread_ = null;
  a_f2_Ljava_lang_Object_ = new Object();
  b = false;
  ar() {

        this.a_f1_Ljava_lang_Thread_ = let Thread = null;
        this.a_f1_Ljava_lang_Thread_.start();
        this.a_f0_Z = true;
    
  }
  async run() {

        if {
            return;
        }
        while {
            try {
                let object = this.a_f2_Ljava_lang_Object_;
                 {
                    while (!this.b) {
                        this.a_f2_Ljava_lang_Object_.wait(100000);
                    }
                    try {
                        as.a_m12_PBRV(80);
                        await sleep(80);
                    }
                    catch (exception) {}
                    try {
                        as.a_m12_PBRV(80);
                        await sleep(500);
                    }
                    catch (exception) {}
                }
            }
            catch (exception) {
            }
            finally {
                this.b = false;
            }
        }
    
  }
  a() {

        if {
            return;
        }
        let object = this.a_f2_Ljava_lang_Object_;
         {
            this.b = true;
            this.a_f2_Ljava_lang_Object_.notify();
            return;
        }
    
  }
}

JavaRegistry.set("ar", ar);
JavaRegistry.set("ar", ar);
try { if (typeof ar.__clinit === 'function') ar.__clinit(); } catch (e) { console.warn('clinit ar', e); }

globalThis.ar = ar;
