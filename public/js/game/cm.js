/** Transpiled from cm */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cm extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_Ljavax_microedition_lcdui_Image_ = Image.createImage(ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getWidth(), ct.a_f2_Ljavax_microedition_lcdui_Canvas_.getHeight());
  static a_f1_Ljavax_microedition_lcdui_Graphics_ = cm.a_f0_Ljavax_microedition_lcdui_Image_.getGraphics();
  /* deferred: cm.a_f2_Lcm_ */ static get cm.a_f2_Lcm_(){ if(!this.___a_f2_Lcm_) this.___a_f2_Lcm_=new cm(); return this.___a_f2_Lcm_; }
  b_f0_Ljavax_microedition_lcdui_Graphics_ = null;
  a_f3_I = -1;
  b_f1_I = 0;
  cm() {

        this.b_f0_Ljavax_microedition_lcdui_Graphics_ = cm.a_f1_Ljavax_microedition_lcdui_Graphics_;
    
  }
  cm(graphics) {

        this.b_f0_Ljavax_microedition_lcdui_Graphics_ = graphics;
    
  }
  static a_m0_PRLcm_() {

        let cm.a_f2_Lcm_ = null;
    
  }
  a_m1_PLcg_IIIRV(cg2, n2, n3, n4) {

        try {
            if (this.a_f3_I != -1) {
                let n5 = cg2.a_m0_PRLjavax_microedition_lcdui_Image_().getWidth();
                let n6 = cg2.a_m0_PRLjavax_microedition_lcdui_Image_().getHeight();
                let nArray = new Int32Array(n5 * n6);
                cg2.a_m0_PRLjavax_microedition_lcdui_Image_().getRGB(nArray, 0, n5, 0, 0, n5, n6);
                for (let i2 = nArray.length - 1; i2 >= 0; --i2) {
                    if (nArray[i2] >>> 24 == 0) continue;
                    let n7 = i2;
                    nArray[n7] = nArray[n7] & this.a_f3_I;
                }
                let image = Image.createRGBImage(nArray, n5, n6, true);
                this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawImage(image, n2, n3, n4);
                return;
            }
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawImage(cg2.a_m0_PRLjavax_microedition_lcdui_Image_(), n2, n3, n4);
        }
        catch (exception) {
            let exception2 = exception;
            exception
        }
    
  }
  a_m2_PIRV(n2) {

        this.b_f0_Ljavax_microedition_lcdui_Graphics_.setColor;
        this.b_f1_I = n2;
    
  }
  a_m3_PIIIRV(n2, n3, n4) {

        this.b_f0_Ljavax_microedition_lcdui_Graphics_.setColor(n2, n3, n4);
        this.b_f1_I = (n2 & 0xFF) << 16 | (n3 & 0xFF) << 8 | n4 & 0xFF;
    
  }
  a_m4_PIIIIRV(n2, n3, n4, n5) {

        if (this.a_f3_I == -1) {
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.fillRect(n2, n3, n4, n5);
            return;
        }
        let nArray = new Int32Array(n4 * n5);
        let n6 = (this.b_f1_I | 0xFF000000) & this.a_f3_I;
        for (let i2 = nArray.length - 1; i2 >= 0; --i2) {
            nArray[i2] = n6;
        }
        this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawRGB(nArray, 0, n4, n2, n3, n4, n5, true);
    
  }
  b_m0_PIIIIRV(n2, n3, n4, n5) {

        this.b_f0_Ljavax_microedition_lcdui_Graphics_.setClip(n2, n3, n4, n5);
    
  }
  c_m0_PIIIIRV(n2, n3, n4, n5) {

        this.b_f0_Ljavax_microedition_lcdui_Graphics_.clipRect(n2, n3, n4, n5);
    
  }
  d_m0_PIIIIRV(n2, n3, n4, n5) {

        if (this.a_f3_I == -1) {
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawRect(n2, n3, n4, n5);
        }
    
  }
  e(n2, n3, n4, n5) {

        if (this.a_f3_I == -1) {
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawLine(n2, n3, n4, n5);
        }
    
  }
  a_m5_PLjava_lang_String_IIIRV(string, n2, n3, n4) {

        if (this.a_f3_I == -1) {
            this.b_f0_Ljavax_microedition_lcdui_Graphics_.drawString(string, n2, n3, n4);
        }
    
  }
  b_m1_PIRV(n2) {

        this.a_f3_I = (n2 & 0xFF) << 24 | 0xFFFFFF;
    
  }
  a_m6_PRI() {

        return this.b_f0_Ljavax_microedition_lcdui_Graphics_.getClipX();
    
  }
  b_m2_PRI() {

        return this.b_f0_Ljavax_microedition_lcdui_Graphics_.getClipY();
    
  }
  c_m1_PRI() {

        return this.b_f0_Ljavax_microedition_lcdui_Graphics_.getClipWidth();
    
  }
  d_m1_PRI() {

        return this.b_f0_Ljavax_microedition_lcdui_Graphics_.getClipHeight();
    
  }
  a_m7_PIIIIIIRV(n2, n3, n4, n5, n6, n7) {

        this.b_f0_Ljavax_microedition_lcdui_Graphics_.fillTriangle(n2, n3, n4, n5, n6, n7);
    
  }
}

JavaRegistry.set("cm", cm);
JavaRegistry.set("cm", cm);
try { if (typeof cm.__clinit === 'function') cm.__clinit(); } catch (e) { console.warn('clinit cm', e); }

globalThis.cm = cm;
