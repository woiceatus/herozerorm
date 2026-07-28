/** Transpiled from rpg.d */
import { sleep, JavaRegistry, jEquals } from '../../midp/runtime.js';
import { Image } from '../../midp/Image.js';
import { Graphics } from '../../midp/Graphics.js';
import { Display } from '../../midp/Display.js';
import { Font } from '../../midp/Font.js';
import { RecordStore } from '../../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../../midp/resources.js';

export class d extends (JavaRegistry.get("Object") || class {}) {
  static a_ = "yes".getBytes();
  static b_ = "Would you like to revive?".getBytes();
  static g_f0_AB = null;
  static h_f0_AB = null;
  static i_f0_AB = null;
  static j = null;
  static k = null;
  static l = null;
  static m = null;
  static n = null;
  static o = null;
  static p = null;
  static q = null;
  /* skip field: public static final byte[][] b; */
  /* skip field: public static final byte[][] c; */
  /* skip field: public static final byte[][] d; */
  /* skip field: public static final byte[][] e; */
  static r = null;
  /* skip field: public static final byte[][] f; */
  /* skip field: public static final byte[][] g_f1_AAB; */
  static s = null;
  static t = null;
  static u = null;
  static v = null;
  static w = null;
  static x = null;
  static y = null;
  static z = null;
  static A = null;
  /* skip field: public static final byte[][] h_f1_AAB; */
  static B = null;
  static C = null;
  static D = null;
  static E = null;
  static F = null;
  static G = null;
  static H = null;
  static I = null;
  static J = null;
  static K = null;
  static L = null;
  static M = null;
  static N = null;
  static O = null;
  static P = null;
  static e_ = null;
  static f_ = null;
  static i_f1_I = null;
  static __clinit() {

        "Portrait let count =".getBytes();
        "learning".getBytes();
        d.g_f0_AB = "Refining Stones ".getBytes();
        d.h_f0_AB = "red stone".getBytes();
        d.i_f0_AB = "polishing powder".getBytes();
        d.j = "Amethyst".getBytes();
        " more".getBytes();
        "Room".getBytes();
        "blank".getBytes();
        "Character Conversion: Menu Keys [".getBytes();
        "ended up]".getBytes();
        "youngso]".getBytes();
        "number]".getBytes();
        "symbol]".getBytes();
        "Hangul]".getBytes();
        "a".getBytes();
        d.k = "more".getBytes();
        "Former costs".getBytes();
        "d.G is.".getBytes();
        d.l = "yes".getBytes();
        d.m = "No".getBytes();
        "Want to play more? You need to".getBytes();
        "TRY AND BUY?".getBytes();
        d.n = "LV".getBytes();
        d.o = "#".getBytes();
        d.p = "NULL".getBytes();
        d.q = "Failed! Please try again".getBytes();
        "Congratulations! You have activated this game!".getBytes();
        b = new byte[][]{"You have already purchased ".getBytes(), ". ;You do not need to buy it again.".getBytes()};
        byte[][] byArrayArray = new byte[][]{"Purchase ".getBytes(), " for ".getBytes(), " RMB.".getBytes(), " ".getBytes(), " ;You have finished ".getBytes(), ", still need to send ".getBytes(), ", continue?".getBytes()};
        c = new byte[][]{"Purchase ".getBytes(), " for ".getBytes(), " RMB.;Do you want to purchase now?".getBytes()};
        d = new byte[][]{"You have purchased ".getBytes(), " successfully! ".getBytes()};
        e = new byte[][]{"20000 gold".getBytes(), "Double EXP".getBytes(), "Double Money".getBytes(), "Pocket Shop".getBytes(), "Increase level".getBytes(), "Magic combine".getBytes(), "Resurrect".getBytes()};
        d.r = "Bought".getBytes();
        f = new byte[][]{"Purchase 20000 gold".getBytes(), "Purchase double exp".getBytes(), "Purchase double coin earning".getBytes(), "Purchase pocket shop".getBytes(), "Purchase 10 levels increase".getBytes(), "Purchase instant magic combo.".getBytes(), "Resurrect and invincible for 5 sec.".getBytes()};
        g_f1_AAB = new byte[][]{"Price: ".getBytes(), "RMB".getBytes()};
        "LV".getBytes();
        "EXP".getBytes();
        "HP".getBytes();
        "SP".getBytes();
        "ATK".getBytes();
        "DEF".getBytes();
        "CRITICAL".getBytes();
        "DODGE".getBytes();
        "DEXINTCONSTR".getBytes();
        d.s = "Gold".getBytes();
        d.t = "Public storage can store and transfer your gold, equipments, and items. You can select a slot, and then transfer the gold, equipments, and items stored in  storage. You can use 1,3 keys to switch between personal and  storage.".getBytes();
        d.u = "Are you sure you want to quit?".getBytes();
        d.v = "Your current class does not allow you to equip with this equipment.".getBytes();
        d.w = "This combination does not require any elements.".getBytes();
        d.x = "Please select the combination book.".getBytes();
        d.y = "Please start or load a game before purchasing this item.".getBytes();
        d.z = "You do not have all the elements required for this combination.;You can force combine magic for 1RMB.;Do you want to purchase the combination now?".getBytes();
        d.A = "You has reached the highest level, can no longer raise".getBytes();
        h_f1_AAB = new byte[][]{"Level up! You have reached level ".getBytes(), ".;".getBytes()};
        d.B = "You do not have enough gold.;".getBytes();
        "You do not have all the elements required for this combination.;You can force combine magic.;".getBytes();
        d.C = "Press Any Key To Continue".getBytes();
        d.D = "Please play game in portrait mode.".getBytes();
        d.E = new Int8Array([-14, 119, -14, 120, -15, 48, -14, 71, -16, -50, -15, 88, 46, 46, 46]);
        d.F = "Do you want to continue? ;Your game will exit.".getBytes();
        d.G = "Go to www.eamobile.com let get = null;more EA games for your phone!".getBytes();
        d.H = " The fee for changing professions is ".getBytes();
        d.I = " Gold. Continue?".getBytes();
        d.J = new Int8Array([0, 0, 0, -1, 1, -1, 1, -1, 1, 0, 0, -2, 2, 0, 0, -3, 3, -1, 1, 1, -1, -2, -2, 2, 2]);
        d.K = new Int8Array([0, -1, 1, 0, 0, -1, -1, 1, 1, -2, 2, 0, 0, -3, 3, 0, 0, -2, -2, 2, 2, -1, 1, -1, 1]);
        d.L = new Int8Array([0, 6, 7, 5, 8]);
        d.M = new Int8Array([0, 5, 8, 7, 6]);
        d.N = new Int8Array([0, 4, 3, 1, 2]);
        d.O = new Int8Array([0, 3, 4, 2, 1]);
        d.P = new Int8Array([0, 2, 1, 4, 3]);
        d.e_ = rpg.f.b;
        d.f_ = rpg.f.a;
        d.i_f1_I = d.f_ - 16;
    
  }
}

JavaRegistry.set("rpg.d", d);
JavaRegistry.set("d", d);
try { if (typeof d.__clinit === 'function') d.__clinit(); } catch (e) { console.warn('clinit rpg.d', e); }

globalThis.d = d;
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.d = d;
