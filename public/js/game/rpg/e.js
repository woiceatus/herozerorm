/** Transpiled from rpg.e */
import { sleep, JavaRegistry, jEquals } from '../../midp/runtime.js';
import { Image } from '../../midp/Image.js';
import { Graphics } from '../../midp/Graphics.js';
import { Display } from '../../midp/Display.js';
import { Font } from '../../midp/Font.js';
import { RecordStore } from '../../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../../midp/resources.js';

export class e extends (JavaRegistry.get("Object") || class {}) {
  /* deferred: e.a_f0_Lrpg_e_ */ static get e.a_f0_Lrpg_e_(){ if(!this.___a_f0_Lrpg_e_) this.___a_f0_Lrpg_e_=new e(); return this.___a_f0_Lrpg_e_; }
  static a_f1_Lch_ = null;
  static b_f0_Lch_ = null;
  static c_f0_Lch_ = null;
  static d_f0_Lch_ = null;
  static a_f2_Lca_ = null;
  static a_f3_ALs_ = null;
  static a_f4_Ls_ = null;
  static a_f5_ALcg_ = null;
  static b_f1_ALcg_ = null;
  static c_f1_ALcg_ = null;
  static d_f1_ALcg_ = null;
  static e_f0_ALcg_ = null;
  static f_f0_ALcg_ = null;
  static e_f1_Lch_ = null;
  static f_f1_Lch_ = null;
  static g_f0_Lch_ = null;
  static h_f0_Lch_ = null;
  static a_f6_Lcg_ = null;
  static b_f2_Lcg_ = null;
  static c_f2_Lcg_ = null;
  static d_f2_Lcg_ = null;
  static i_f0_Lch_ = null;
  static j_f0_Lch_ = null;
  static k_f0_Lch_ = null;
  static a_f7_Ljava_lang_String_ = null;
  static e_f2_Lcg_ = null;
  static f_f2_Lcg_ = null;
  static g_f1_ALcg_ = null;
  static g_f2_Lcg_ = null;
  static h_f1_ALcg_ = null;
  static i_f1_ALcg_ = null;
  static j_f1_ALcg_ = null;
  static h_f2_Lcg_ = null;
  static i_f2_Lcg_ = null;
  static j_f2_Lcg_ = null;
  static k_f1_Lcg_ = null;
  static l_f0_Lcg_ = null;
  static m_f0_Lcg_ = null;
  static n = null;
  static o = null;
  static p = null;
  static x = null;
  static q = null;
  static r = null;
  static s = null;
  static t = null;
  static u = null;
  static k_f2_ALcg_ = null;
  static l_f1_ALcg_ = null;
  static v = null;
  static w = null;
  static m_f1_ALcg_ = null;
  static a_f8_AB = null;
  static a_m0_PRLrpg_e_() {

        let e.a_f0_Lrpg_e_ = null;
    
  }
  a_m1_PRV() {

        let aj2 = new aj("/img/sui");
        e.a_f6_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/imgbox.png");
        e.b_f2_Lcg_ = aj2.a_m3_PIRLcg_(3);
        e.k_f1_Lcg_ = aj2.a_m3_PIRLcg_(4);
        e.c_f2_Lcg_ = aj2.a_m3_PIRLcg_(5);
        e.d_f2_Lcg_ = aj2.a_m3_PIRLcg_(6);
        a.c_m0_PRV();
        e.i_f0_Lch_ = new ch("/e.t/sm");
        a.c_m0_PRV();
        e.a_f4_Ls_ = e.s.a_m5_PLjava_lang_String_Ljava_lang_String_RLs_("/hero/hs", "/img/hs");
        a.c_m0_PRV();
        e.e_f2_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/title.png");
        a.c_m0_PRV();
        if (e.h_f0_Lch_ == null) {
            e.h_f0_Lch_ = new ch("/e.t/nui");
        }
        aj2 = new aj("/img/gm");
        e.b_f1_ALcg_ = new cg[6];
        for (let i2 = 0; i2 < 6; ++i2) {
            e.b_f1_ALcg_[i2] = aj2.a_m3_PIRLcg_;
        }
        a.c_m0_PRV();
    
  }
  b() {

        e.a_f4_Ls_ = null;
        e.e_f2_Lcg_ = null;
        e.a_f6_Lcg_ = null;
        e.b_f2_Lcg_ = null;
        e.c_f2_Lcg_ = null;
        e.d_f2_Lcg_ = null;
        e.x = null;
        e.i_f0_Lch_ = null;
    
  }
  a_m2_PRLca_() {

        let byArray = e.a_m6_PLjava_lang_String_RAB("/hero/e.h" + di.b_f4_B);
        let ca2 = new ca();
        ca2.a_m1_PABZRV(byArray, true);
        for (let i2 = 0; i2 <= 7; ++i2) {
            a_m11_PLca_IRV(ca2, i2);
        }
        ca2.a_m0_PRV();
        let ca2 = null;
    
  }
  c() {

        let n2 = null;
        let aj2 = new aj("/img/em");
        e.a_f5_ALcg_ = aj2.a_m4_PRALcg_();
        aj2 = new aj("/img/gm");
        e.c_f1_ALcg_ = new cg[2];
        for (n2 = 0; n2 < 2; ++n2) {
            e.c_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2 + 6);
        }
        a.c_m0_PRV();
        d();
        a.c_m0_PRV();
        e.h_f1_ALcg_ = new cg[8];
        e.i_f1_ALcg_ = new cg[4];
        e.j_f1_ALcg_ = new cg[2];
        aj2 = new aj("/img/etc");
        e.g_f2_Lcg_ = aj2.a_m3_PIRLcg_(0);
        for (n2 = 0; n2 < 4; ++n2) {
            e.h_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2 + 1);
            e.i_f1_ALcg_[n2] = cg.a_m4_PLjava_lang_String_RLcg_("/miss" + n2 + ".png");
        }
        e.h_f1_ALcg_[4] = cg.a_m4_PLjava_lang_String_RLcg_("/yellowNum.png");
        e.h_f1_ALcg_[5] = cg.a_m4_PLjava_lang_String_RLcg_("/redNum.png");
        e.h_f1_ALcg_[6] = cg.a_m4_PLjava_lang_String_RLcg_("/yellowNumBig.png");
        e.h_f1_ALcg_[7] = cg.a_m4_PLjava_lang_String_RLcg_("/redNumBig.png");
        a.c_m0_PRV();
        e.h_f2_Lcg_ = aj2.a_m3_PIRLcg_(11);
        e.n = aj2.a_m3_PIRLcg_(12);
        e.i_f2_Lcg_ = aj2.a_m3_PIRLcg_(13);
        e.j_f2_Lcg_ = aj2.a_m3_PIRLcg_(14);
        if (a.a_f0_I > 120 && a.a_f0_I <= 176) {
            e.k_f1_Lcg_ = aj2.a_m3_PIRLcg_(15);
        }
        if (a.a_f0_I == 320) {
            e.l_f0_Lcg_ = cg.a_m4_PLjava_lang_String_RLcg_("/_imgSkull.png");
        }
        e.m_f0_Lcg_ = aj2.a_m3_PIRLcg_(16);
        aj2.a_m3_PIRLcg_(17);
        e.o = cg.a_m4_PLjava_lang_String_RLcg_("/ff.png");
        e.p = cg.a_m4_PLjava_lang_String_RLcg_("/minimap1.png");
        a.c_m0_PRV();
        aj2 = new aj("/img/si");
        e.g_f1_ALcg_ = aj2.a_m4_PRALcg_();
        a.c_m0_PRV();
        e.a_f4_Ls_ = new e.s();
        e.a_f4_Ls_.a_m4_PLjava_lang_String_Ljava_lang_String_RV("/hero/target", "/img/et");
        a.c_m0_PRV();
        bq.g();
        e.j_f0_Lch_ = new ch("/e.t/qm");
        e.k_f0_Lch_ = new ch("/e.t/qs");
    
  }
  static d() {

        let aj2 = new aj("/img/sk");
        e.f_f2_Lcg_ = aj2.a_m3_PIRLcg_;
    
  }
  e() {

        e.a_f5_ALcg_ = null;
        e.f_f0_ALcg_ = null;
        e.a_f2_Lca_ = null;
        if (di.a_f4_Lg_ != null) {
            e.g.h_m1_PRV();
        }
        dt.a_m3_PRV();
        e.c_f1_ALcg_ = null;
        e.c_f1_ALcg_ = null;
        e.f_f2_Lcg_ = null;
        e.n = null;
        e.o = null;
        e.g_f2_Lcg_ = null;
        e.h_f1_ALcg_ = null;
        e.i_f1_ALcg_ = null;
        e.h_f2_Lcg_ = null;
        e.i_f2_Lcg_ = null;
        e.j_f2_Lcg_ = null;
        e.m_f0_Lcg_ = null;
        if (e.k_f1_Lcg_ != null) {
            e.k_f1_Lcg_ = null;
        }
        if (e.l_f0_Lcg_ != null) {
            e.l_f0_Lcg_ = null;
        }
        if (e.q != null) {
            e.q = null;
        }
        e.g_f1_ALcg_ = null;
        di.g_m0_PRV();
        e.j_f0_Lch_ = null;
        e.k_f0_Lch_ = null;
    
  }
  static i() {

        e.f_f0_ALcg_ = null;
        e.f_f0_ALcg_ = new cg[24];
    
  }
  a_m3_PABRV(byArray) {

        let aj2 = null;
        if (e.f_f0_ALcg_ == null) {
            i();
        }
        let n2 = -1;
        for (let i2 = 0; i2 < 6; ++i2) {
            if (byArray[i2] < 0) continue;
            let n3 = byArray[i2];
            let n4 = n3 / 4;
            n3 -= n4 << 2;
            if (n4 != n2) {
                n2 = n4;
                aj2 = new aj("/img/e.f" + n4);
            }
            e.f_f0_ALcg_[byArray[i2]] = aj2.a_m3_PIRLcg_;
        }
    
  }
  static a_m4_PBBRV(by2, by3) {

        let aj2 = new aj("/img/e.s");
        let bl2 = false;
        if (by2 >= 7 && by2 <= 17) {
            bl2 = true;
        }
        if (by3 >= 7 && by3 <= 17) {
            bl2 = true;
        }
        e.e_f0_ALcg_ = new cg[2];
        for (by2 = 0; by2 < 2; by2 = (by2 + 1)) {
            e.e_f0_ALcg_[by2] = aj2.a_m3_PIRLcg_(by2 + (bl2 ? 2 : 0));
        }
    
  }
  static a_m5_PIIABABABRV(n2, n3, byArray, byArray2, byArray3) {

        if (n3 < 0) {
            n3 += 256;
        }
        dt.a_m1_PBSABABABRV(n2, n3, byArray, byArray2, byArray3);
    
  }
  static f() {

        ac.a_m10_PRV();
        e.b_f0_Lch_ = new ch("/e.t/com");
        e.c_f0_Lch_ = new ch("/e.t/m");
        e.d_f0_Lch_ = new ch("/e.t/c");
        e.a_f1_Lch_ = new ch("/e.t/lot");
    
  }
  static g() {

        let n2 = null;
        e.g_f0_Lch_ = new ch("/e.t/it");
        a.c_m0_PRV();
        e.e_f1_Lch_ = new ch("/e.t/e.h");
        e.f_f1_Lch_ = new ch("/e.t/a");
        a.c_m0_PRV();
        let aj2 = new aj("/img/glb");
        e.r = aj2.a_m3_PIRLcg_(0);
        e.t = aj2.a_m3_PIRLcg_(1);
        e.u = aj2.a_m3_PIRLcg_(2);
        e.s = aj2.a_m3_PIRLcg_(3);
        e.d_f1_ALcg_ = new cg[6];
        for (n2 = 0; n2 < 6; ++n2) {
            e.d_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2 + 4);
        }
        aj2 = new aj("/img/it");
        e.k_f2_ALcg_ = aj2.a_m4_PRALcg_();
        a.c_m0_PRV();
        aj2 = new aj("/img/gt");
        e.l_f1_ALcg_ = new cg[8];
        for (n2 = 0; n2 < 8; ++n2) {
            e.l_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_;
        }
        e.v = aj2.a_m3_PIRLcg_(8);
        e.w = aj2.a_m3_PIRLcg_(9);
        e.m_f1_ALcg_ = new cg[3];
        for (n2 = 0; n2 < 3; ++n2) {
            e.m_f1_ALcg_[n2] = aj2.a_m3_PIRLcg_(n2 + 10);
        }
    
  }
  static h() {

        let byArray = null;
        bq.b_m0_PRV();
        bq.f();
        i();
        let n2 = di.a_f3_B;
        if (n2 < 0) {
            n2 += 256;
        }
        if (e.g.a_f13_Lcg_ != null) {
            e.g.a_f13_Lcg_ = null;
        }
        if (di.a_f10_Lh_ != null) {
            di.a_f10_Lh_ = null;
        }
        let do_ = di.a_f9_Ldo_;
        do_.d;
        do_.a_m38_PRLo_().a_m1_PZRV;
        e.g.e_m1_PRV();
        if (di.a_f4_Lg_ != null) {
            di.a_f4_Lg_.d_m2_PLdu_RV;
            do_.b = null;
            do_.a = null;
            e.g.h_m1_PRV();
            di.a_f4_Lg_ = null;
        }
        if (am.a_f0_ALs_ == null) {
            am.a_f0_ALs_ = null;
        }
        if (am.a_f1_AB != null) {
            am.a_f1_AB = null;
        }
        if (am.b != null) {
            am.b = null;
        }
        a.c_m0_PRV();
        if (n2 < 100) {
            byArray = e.a_m6_PLjava_lang_String_RAB("/m/m/" + (n2 < 10 ? "0" : "") + n2 + ".m");
        } else {
            let n3 = n2 % 10;
            let byArray2 = new Int8Array(1);
            let byArray3 = byArray2;
            byArray2[0] = 97;
            byArray3[0] = (byArray3[0] + ((n2 - n3) / 10 - 10));
            byArray = e.a_m6_PLjava_lang_String_RAB("/m/m2/" + new String+ n3 + ".m");
        }
        di.a_f4_Lg_ = let e.g = null;
        di.a_f4_Lg_.a_m6_PABRV;
        di.a_f4_Lg_.b_m1_PRV();
        do_.m_m2_PRV();
    
  }
  static a_m6_PLjava_lang_String_RAB(object) {

        let inputStream = null;
        block21: {
            block22: {
                inputStream = null;
                inputStream = new Object().getClass().getResourceAsStream(object);
                if (inputStream != null) let block21 = null;
                if (!ah.a(object)) let block22 = null;
                let bh2 = new bh(object, 1);
                let object2 = bh2;
                let object3 = object = new Int8Array(bh2.a_f0_AB != null ? (object2).a_f0_AB.length - (object2).a_f1_I : 0);
                object2 = bh2;
                try {
                    System.arraycopy((object2).a_f0_AB, (object2).a_f1_I, object3, 0, (object3).length);
                    (object2).a_f1_I += (object3).length;
                }
                catch (exception) {
                    object2 = exception;
                    exception
                }
                v1.a_f0_AB = null;
                try {
                    if (inputStream != null) {
                        inputStream.close();
                    }
                }
                catch (exception) {}
                let object = null;
            }
            try {
                if (inputStream != null) {
                    inputStream.close();
                }
            }
            catch (exception) {}
            let null = null;
        }
        object = new Int8Array(inputStream.available());
        inputStream.read(object);
        let object4 = object;
        try {
            if (inputStream != null) {
                inputStream.close();
            }
        }
        catch (exception) {}
        let object4 = null;
        catch (iOException) {
            try {
                if (inputStream != null) {
                    inputStream.close();
                }
            }
            catch (exception) {}
            let null = null;
        }
        catch (throwable) {
            try {
                if (inputStream != null) {
                    inputStream.close();
                }
            }
            catch (exception) {}
            let throwable = null;
        }
    
  }
  static a_m7_PLjava_lang_String_IRAB(object, n2) {

        let byArray = null;
        try {
            let byArray2 = e.a_m6_PLjava_lang_String_RAB(object);
            object = byArray2;
            byArray = e.a_m8_PABIRAB(byArray2, n2);
        }
        catch (exception) {}
        let byArray = null;
    
  }
  static a_m8_PABIRAB(byArray, n2) {

        let s2 = null;
        let n3 = 0;
        for (let i2 = 0; i2 < n2; ++i2) {
            s2 = rpg.g.b_m1_PABIRS(byArray, n3);
            n3 += s2 + 2;
        }
        s2 = rpg.g.b_m1_PABIRS(byArray, n3);
        let byArray2 = new Int8Array(s2);
        System.arraycopy(byArray, n3 += 2, byArray2, 0, s2);
        let byArray2 = null;
    
  }
  static a_m9_PABRZ(byArray) {

        let by2 = 0;
        let n2 = byArray.length - 1;
        for (let i2 = 0; i2 < n2; ++i2) {
            by2 = (by2 + byArray[i2]);
        }
        let by2 == byArray[n2];
    
  }
  static a_m10_PIRV(n2) {

        e.a_f4_Ls_.a_m4_PLjava_lang_String_Ljava_lang_String_RV(e.a_f7_Ljava_lang_String_ + n2, e.a_f7_Ljava_lang_String_ + "ed" + n2);
    
  }
  static a_m11_PLca_IRV(ca2, n2) {

        let object = di.a_f9_Ldo_;
        let by2 = 0;
        let by3 = 0;
        let n3 = -1;
        if ((object = (object).a_m29_PBRLbm_(e.a_f8_AB[n2])) != null) {
            by2 = (object).a_f1_B;
            by3 = (object).g;
            n3 = (object).a;
            if (by3 < 0) {
                by3 = 0;
            }
        }
        switch {
            case 0: {
                object = "/hero/" + n2 + "/" + (by3 < 10 ? "0" : "") + by3;
                break;
            }
            case 1: 
            case 2: 
            case 3: {
                object = "/hero/" + n2 + "/" + (di.a_m17_PRZ() ? "" : "l") + (by3 < 10 ? "0" : "") + by3;
                break;
            }
            case 4: {
                object = "/hero/" + n2 + "/" + di.b_f4_B;
                break;
            }
            case 5: {
                object = "/hero/eh";
                break;
            }
            case 6: 
            case 7: {
                if (object == null) {
                    ca2.a_m2_PIRV;
                    return;
                }
                object = "/hero/e.w/" + by2 + (by3 < 10 ? "0" : "") + by3;
                break;
            }
            default: {
                return;
            }
        }
        let byArray = null;
        if (n3 >= 0) {
            byArray = e.a_m7_PLjava_lang_String_IRAB("/hero/e.h.p", n3);
        }
        ca2.a_m0_PILjava_lang_String_ABRV(n2, object, byArray);
    
  }
  static a_m12_PABBBABRV(byArray, by2, by3, byArray2) {

        byArray = e.a_m8_PABIRAB(byArray, by2);
        am.a_m0_PABBABRV(byArray, by3, byArray2);
    
  }
  static __clinit() {

        e.a_f3_ALs_ = new e.s[11];
        e.h_f0_Lch_ = null;
        e.a_f7_Ljava_lang_String_ = "/img/ed/";
        e.x = null;
        e.q = null;
        e.a_f8_AB = new Int8Array([1, 4, 0, 6, -1, -1, 3, 5]);
    
  }
}

JavaRegistry.set("rpg.e", e);
JavaRegistry.set("e", e);
try { if (typeof e.__clinit === 'function') e.__clinit(); } catch (e) { console.warn('clinit rpg.e', e); }

globalThis.e = e;
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.e = e;
