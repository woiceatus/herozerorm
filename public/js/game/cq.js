/** Transpiled from cq */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class cq extends (JavaRegistry.get("af") || class {}) {
  Q = null;
  R = null;
  o = null;
  p = null;
  g = null;
  i = false;
  static v = 8;
  static w = 13;
  cq(s2, s3, s4, by2) {

        /*super*/(s2, s3, s4, by2, dt.a_f0_ALdt_[cs.g].a_f1_Ls_);
        s2 = 1;
        switch {
            case 102: 
            case 125: {
                this.c_f0_Z = true;
                this.g = 0;
                this.o = 19;
                this.p = 41;
                break;
            }
            case 103: 
            case 126: {
                this.t = 5;
                this.d_f0_Z = true;
                this.g = 1;
                this.o = 7;
                this.p = 26;
                break;
            }
            case 104: 
            case 127: {
                this.e = true;
                this.g = 2;
                this.o = 5;
                this.p = 38;
                break;
            }
            default: {
                s2 = 0;
            }
        }
        if (s2 != 0) {
            this.R = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 10);
            this.Q = rpg.e.a_m8_PABIRAB(af.a_f0_AB, 5 + this.g);
            this.a_m0_PABRV;
            cs.a_m0_PLaf_BRV(this, this.g);
        }
        this.c_m0_PBRV(1);
        this.a_m1_PBRV(1);
    
  }
  a_m0_PRV() {

        switch {
            case 0: 
            case 1: 
            case 2: 
            case 4: 
            case 5: {
                this.h_f0_B = (this.g + (this.b_m0_PRZ() ? 4 : 1));
                break;
            }
            case 6: {
                this.h_f0_B = (8 + this.g);
                break;
            }
            case 7: {
                this.h_f0_B = (4 + this.g);
            }
        }
        this.f_f0_I = this.a_f1_Ls_.a_m3_PBRB;
    
  }
  z() {

        this.h_f0_B = (11 + this.g);
        this.a_m1_PBRV(3);
    
  }
  A() {

        this.h_f0_B = (this.g + (this.b_m0_PRZ() ? 18 : 15));
        this.a_m1_PBRV(3);
    
  }
  g() {

        this.i = true;
        this.a_m1_PBRV(1);
    
  }
  k() {

    
  }
  b_m0_PRZ() {

        return this.i || this.c_m0_PRI() <= 0;
    
  }
  a_m1_PIRZ(n2) {

        if (this.h_f0_B == (11 + this.g)) {
            if (n2 == 6) {
                g.a_m16_PIRV(1);
            } else if (n2 == 7) {
                new t(2, (this.h + this.o), ((this).i + this.p), this.a_f1_Ls_, 21, true, null, 0, 0, 0);
            }
            return n2 >= cq.v && n2 <= cq.w && n2 % 2 == 0;
        }
        let false = null;
    
  }
  b_m1_PRV() {

        let n2 = this.s + this.R[this.g << 1];
        let n3 = this.s + this.R[(this.g << 1) + 1];
        let alArray = cd.a_m24_PRALal_();
        for (let i2 = 0; i2 < 2; ++i2) {
            if (alArray[i2] == null || alArray[i2].s < n2 || alArray[i2].s > n3) continue;
            this.b_m5_PLal_IBRZ(alArray[i2], this.a_m21_PRS(), 2);
            if (!alArray[i2].g_m0_PRZ()) continue;
            alArray[i2].b_m4_PBRV(2);
        }
    
  }
  m() {

        this.b_m0_PABRV;
    
  }
}

JavaRegistry.set("cq", cq);
JavaRegistry.set("cq", cq);
try { if (typeof cq.__clinit === 'function') cq.__clinit(); } catch (e) { console.warn('clinit cq', e); }

globalThis.cq = cq;
