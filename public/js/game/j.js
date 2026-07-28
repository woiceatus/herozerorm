/** Transpiled from j */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class j extends (JavaRegistry.get("b") || class {}) {
  a_f0_AB = null;
  b = null;
  a_f1_AS = null;
  e = f.b;
  constructor(n2) {
    super();

        /*super*/(n2, 1);
        n2 = this;
        this.a_f0_AB = rpg.e.f_f1_Lch_.a_m0_PIRAB(0);
        let object = "Version: " + RPGHeroEx.a.getAppProperty("MIDlet-Version");
        (n2).b = ("Heroes Lore Zero Copyright 2012 Electronic Arts Inc.;Published by Electronic Arts Inc.;" + object + ";Customer Service: Send email to help@eamobile.com;Copyright 2012 Electronic Arts Inc, EA, the EA logo and Heroes Lore are trademarks of Electronic Arts Inc. All other trademarks are the property of their respective owners.;Copyright 2012 Electronic Arts Inc, All trademarks are the property of their respective owners.;Copyright 2012 Electronic Arts Inc, EA, the EA logo and heroes Lore are trademarks of Electronic Arts Inc." + ";;;|CREDITS&;EA let Studio = null;EA let Studio = null;;;Last revised by EA Hyderabad:;\\Engineering Lead&;let Domakonda = null;;\\Engineers&;let Gorantla = null;let Jadhav = null;Ranjith Akuthota").getBytes();
        object = new Int16Array(20);
        let n3 = 0;
        for (let i2 = 0; i2 < (n2).b.length; i2 += ac.a_m5_PABIIIRI((n2).b, i2, (n2).e, 8)) {
            object[n3++] = i2;
        }
        (n2).a_f1_AS = new Int16Array(n3);
        System.arraycopy(object, 0, (n2).a_f1_AS, 0, (n2).a_f1_AS.length);
        n2.b_f2_B = (n2).a_f1_AS.length;
        n2.a_f2_B = 0;
    
  }
  a_m0_PIIRZ(n2, n3) {

        if (this.b_m2_PIIRZ(n2, n3)) {
            let true = null;
        }
        if (n.f_m0_PIIRZ(n2, n3) || n.g(n2, n3)) {
            if (n2 == -7) {
                this.a_f1_Ln_.a_f2_B = 5;
                this.a_f1_Ln_.c_m0_PRV();
            }
            let true = null;
        }
        return this.c_m2_PIIRZ(n2, n3);
    
  }
  a_m1_PLcm_RV(cm2) {

        let n2 = a.d;
        a.a_m3_PLcm_ZRV(cm2, true);
        n2 -= 36;
        cm2.a_m2_PIRV(14597755);
        ac.a_m2_PLcm_IIABIIRV(cm2, a.c, f.d, this.a_f0_AB, 0, 1);
        cm2.a_m2_PIRV(0xCCCCCC);
        let s2 = this.a_f1_AS[this.a_f2_B];
        let s3 = this.a_f2_B == this.b_f2_B - 1 ? this.b.length : this.a_f1_AS[this.a_f2_B + 1];
        let n3 = a.a_f0_I - this.e >> 1;
        ac.a_m3_PLcm_IIIIABIIIRV(cm2, n3 + 5, n2, this.e, 1, this.b, s2, 0, s3 - s2);
        if (this.b_f2_B > 1) {
            this.a_m0_PLcm_IIIIIRV(cm2, this.a_ + d.e_ - 10, n2 - 10, this.a_f2_B + 1, this.b_f2_B, 8);
        }
        this.e_m2_PLcm_IIIIRV(cm2, n3 + this.e - 2, n2 - 2, this.a_f2_B, this.b_f2_B);
        n.a_m0_PLcm_IRV(cm2, 2);
    
  }
}

JavaRegistry.set("j", j);
JavaRegistry.set("j", j);
try { if (typeof j.__clinit === 'function') j.__clinit(); } catch (e) { console.warn('clinit j', e); }

globalThis.j = j;
