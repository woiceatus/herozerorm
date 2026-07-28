/** Transpiled from bq */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class bq extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_I = 10;
  static a_f1_J = null;
  static b_f0_J = null;
  static a_f2_B = null;
  static b_f1_B = null;
  static a_f3_ALjavax_microedition_media_Player_ = null;
  static a_f4_Ljavax_microedition_media_Player_ = null;
  static c = null;
  static a_f5_AB = null;
  static a_m0_PRV() {

        if (!rpg.c.b_f1_Z) {
            return;
        }
        if (bq.a_f3_ALjavax_microedition_media_Player_[14] == null) {
            return;
        }
        if (bq.a_f2_B == 14 && bq.a_f3_ALjavax_microedition_media_Player_[14].getState() == 400) {
            return;
        }
        if (bq.a_f1_J != 0 && bq.a_f1_J > Date.now()) {
            return;
        }
        a_m1_PBZRV(14, true);
        bq.a_f1_J = 0;
    
  }
  static b_m0_PRV() {

        bq.b_f0_J = 0;
        bq.a_f2_B = -1;
        if (bq.a_f4_Ljavax_microedition_media_Player_ == null || bq.a_f4_Ljavax_microedition_media_Player_.getState() != 400) {
            return;
        }
        try {
            bq.a_f4_Ljavax_microedition_media_Player_.stop();
            return;
        }
        catch (exception) {
            let exception2 = exception;
            let return = null;
        }
    
  }
  static c() {

        if (bq.a_f2_B == 14) {
            b_m0_PRV();
        }
    
  }
  static d() {

        c();
        bq.a_f1_J = Date.now() << 1;
    
  }
  static e() {

        bq.a_f1_J = 0;
        a_m0_PRV();
    
  }
  static f() {

        c();
        k();
    
  }
  static a_m1_PBZRV(by2, bl2) {

        try {
            b_m0_PRV();
            if (bq.a_f2_B != by2) {
                bq.a_f4_Ljavax_microedition_media_Player_ = bq.a_f3_ALjavax_microedition_media_Player_[by2];
            } else if (bq.a_f4_Ljavax_microedition_media_Player_ == null) {
                let by3 = by2;
                if (by3 == 14) {
                    bq.b_m2_PBRV;
                } else {
                    bq.b_m3_PIRV;
                }
                bq.a_f4_Ljavax_microedition_media_Player_ = bq.a_f3_ALjavax_microedition_media_Player_[by3];
            }
            bq.a_f2_B = by2;
            bq.a_f4_Ljavax_microedition_media_Player_.setLoopCount(bl2 ? -1 : 1);
            bq.a_f4_Ljavax_microedition_media_Player_.start();
        }
        catch (exception) {
            let exception2 = exception;
            exception
        }
        bq.a_f1_J = Date.now() + 3000;
    
  }
  static b_m1_PBZRV(by2, bl2) {

        c();
        bq.b_m2_PBRV;
        if {
            bq.a_f1_J = 0;
            a_m0_PRV();
            return;
        }
        by2 = 0;
        by2 = 14;
        a_m1_PBZRV(14, false);
    
  }
  static a_m2_PBRV(by2) {

        if {
            if (Date.now() - bq.b_f0_J < 127) {
                return;
            }
            if (bq.a_f3_ALjavax_microedition_media_Player_[by2] == null) {
                bq.b_m3_PIRV;
            }
            a_m1_PBZRV(by2, false);
            bq.b_f0_J = Date.now();
        }
    
  }
  static a_m3_PIRV(n2) {

        if (n2 < 0) {
            n2 = 0;
        } else if (n2 > bq.a_f0_I) {
            n2 = bq.a_f0_I;
        }
        if (bq.a_f4_Ljavax_microedition_media_Player_ != null) {
            try {
                let volumeControl = null;
                if (bq.a_f4_Ljavax_microedition_media_Player_.getState() != 400 && (volumeControl = bq.a_f4_Ljavax_microedition_media_Player_.getControl("VolumeControl")) != null) {
                    volumeControl.setLevel(n2 * 100 / bq.a_f0_I);
                }
                return;
            }
            catch (exception) {}
        }
    
  }
  static b_m2_PBRV(by2) {

        if (by2 >= 17) {
            return;
        }
        bq.c = by2;
        try {
            let object = bq.e.a_m6_PLjava_lang_String_RAB("/snd/b/" + by2);
            object = new ByteArrayInputStream(object);
            bq.a_f3_ALjavax_microedition_media_Player_[14] = Manager.createPlayer(object, "audio/midi");
            bq.a_f3_ALjavax_microedition_media_Player_[14].realize();
            bq.a_f3_ALjavax_microedition_media_Player_[14].prefetch();
            return;
        }
        catch (exception) {
            let exception2 = exception;
            let return = null;
        }
    
  }
  static k() {

        if (bq.a_f3_ALjavax_microedition_media_Player_[14] != null) {
            bq.a_f3_ALjavax_microedition_media_Player_[14].close();
            bq.a_f3_ALjavax_microedition_media_Player_[14] = null;
        }
    
  }
  static g() {

        b_m3_PIRV(10);
        b_m3_PIRV(11);
        b_m3_PIRV(13);
        for (let i2 = 1; i2 <= 4; ++i2) {
            bq.b_m3_PIRV;
        }
    
  }
  static h() {

        for (let i2 = 0; i2 < 6; ++i2) {
            if (bq.a_f3_ALjavax_microedition_media_Player_[bq.a_f5_AB[i2]] == null) continue;
            bq.a_f3_ALjavax_microedition_media_Player_[bq.a_f5_AB[i2]] = null;
        }
        b_m3_PIRV(bq.a_f5_AB[di.b_f4_B]);
        try {
            let object = bq.e.a_m6_PLjava_lang_String_RAB("/snd/bq.e/" + (di.a_m17_PRZ() ? 12 : 11));
            object = new ByteArrayInputStream(object);
            bq.a_f3_ALjavax_microedition_media_Player_[11] = Manager.createPlayer(object, "audio/x-wav");
            bq.a_f3_ALjavax_microedition_media_Player_[11].realize();
            bq.a_f3_ALjavax_microedition_media_Player_[11].prefetch();
            return;
        }
        catch (exception) {
            let exception2 = exception;
            let return = null;
        }
    
  }
  static b_m3_PIRV(n2) {

        try {
            let object = bq.e.a_m6_PLjava_lang_String_RAB("/snd/bq.e/" + n2);
            object = new ByteArrayInputStream(object);
            bq.a_f3_ALjavax_microedition_media_Player_[n2] = Manager.createPlayer(object, "audio/x-wav");
            bq.a_f3_ALjavax_microedition_media_Player_[n2].realize();
            bq.a_f3_ALjavax_microedition_media_Player_[n2].prefetch();
            return;
        }
        catch (exception) {
            let exception2 = exception;
            let return = null;
        }
    
  }
  static i() {

        if (bq.a_f2_B == 14) {
            b_m0_PRV();
            if (bq.c >= 0) {
                k();
            }
        }
    
  }
  static j() {

        if (bq.c >= 0) {
            bq.b_m2_PBRV;
        }
    
  }
  static __clinit() {

        bq.a_f2_B = -1;
        bq.b_f1_B = -1;
        bq.a_f3_ALjavax_microedition_media_Player_ = new Player[15];
        bq.c = -1;
        bq.a_f5_AB = new Int8Array([8, 5, 7, 9, 8, 6]);
    
  }
}

JavaRegistry.set("bq", bq);
JavaRegistry.set("bq", bq);
try { if (typeof bq.__clinit === 'function') bq.__clinit(); } catch (bq.e) { console.warn('clinit bq', bq.e); }

globalThis.bq = bq;
