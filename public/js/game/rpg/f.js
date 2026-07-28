/** Transpiled from rpg.f */
import { sleep, JavaRegistry, jEquals } from '../../midp/runtime.js';
import { Image } from '../../midp/Image.js';
import { Graphics } from '../../midp/Graphics.js';
import { Display } from '../../midp/Display.js';
import { Font } from '../../midp/Font.js';
import { RecordStore } from '../../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../../midp/resources.js';

export class f.f extends (JavaRegistry.get("Object") || class {}) {
  static a = rpg.a.a_f0_I - 10;
  static f.b = rpg.a.a_f0_I - 10;
  static c = rpg.a.a_f0_I - f.f.b >> 1;
  static f.d = rpg.a.b_f0_I - 174 >> 1;
  static e = f.f.b;
  static f = f.f.b - 10;
  static g = f.f.b - 20;
  static f.h = rpg.a.a_f0_I - 20;
}

JavaRegistry.set("rpg.f", f.f);
JavaRegistry.set("f", f.f);
try { if (typeof f.f.__clinit === 'function') f.f.__clinit(); } catch (f.e) { console.warn('clinit rpg.f', f.e); }

globalThis.f = f;
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.f = f;
