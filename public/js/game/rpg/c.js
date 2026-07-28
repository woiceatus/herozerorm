/** Hand-ported rpg.c — main game loop / lifecycle (async for browser) */
import { sleep, JavaRegistry } from '../../midp/runtime.js';
import { ct } from '../ct.js';

export class c {
  static a_f0_AB = new Int8Array([6, 10, 14, 18]);
  static a_f1_Lrpg_c_ = null;
  static a_f4_B = 3;
  static b_f0_B = 2;
  static c_f0_B = 2;
  static a_f5_Z = true;
  static e_f0_B = 0;
  static b_f1_Z = false;
  static c_f1_Z = false;
  static g = true;
  static d_f0_B = 0;
  static a_f6_J = 0;
  static d_f1_Z = true;
  static a_f7_I = 0;
  static b_f2_I = 50;
  static b_f3_J = 0;
  static e_f1_Z = false;
  static a_f8_Lar_ = null;
  static a_f9_Lds_ = null;
  static f = false;

  constructor() {
    this.a_f2_Lct_ = null;
    this.a_f3_Lrpg_a_ = null;
  }

  static a_m0_PRLrpg_c_() {
    if (!c.a_f1_Lrpg_c_) c.a_f1_Lrpg_c_ = new c();
    return c.a_f1_Lrpg_c_;
  }

  a_m1_PRV() {
    c.e_f1_Z = true;
    globalThis.bq?.b_m0_PRV?.();
    c.a_m1_PZRV?.(true);
    this.a_f3_Lrpg_a_?.a_m0_PRV?.();
  }

  b() {
    if (c.e_f1_Z) c.e_f1_Z = false;
    this.a_f3_Lrpg_a_?.b_m0_PRV?.();
  }

  c() {
    // Init display/canvas binder first
    this.a_f2_Lct_ = ct.a_m2_PRLct_();

    const e = JavaRegistry.get('rpg.e') || globalThis.rpg?.e;
    try {
      e?.f?.();
    } catch (err) {
      console.warn('rpg.e.f', err);
    }

    const bv = globalThis.bv || JavaRegistry.get('bv');
    try {
      this.a_f3_Lrpg_a_ = bv?.a_m0_PRLbv_?.();
      this.a_f3_Lrpg_a_?.a_m3_PBRV?.(1);
      if (this.a_f3_Lrpg_a_) ct.a_m1_PLaz_RV(this.a_f3_Lrpg_a_);
    } catch (err) {
      console.warn('bv boot', err);
      // Still show canvas so touch UI is usable
      const display = ct.a_f0_Ljavax_microedition_lcdui_Display_;
      const canvas = ct.a_f2_Ljavax_microedition_lcdui_Canvas_;
      if (display && canvas) display.setCurrent(canvas);
    }

    // Start async game loop (non-blocking)
    queueMicrotask(() => this.run());

    if (c.a_f9_Lds_ == null) {
      const RPGHeroEx = JavaRegistry.get('rpg.RPGHeroEx');
      const ds = globalThis.ds || JavaRegistry.get('ds');
      try {
        c.a_f9_Lds_ = new ds(RPGHeroEx.a);
      } catch (_) {
        c.a_f9_Lds_ = { a_f7_Z: true };
      }
    }

    // Kick a repaint immediately
    ct.a_f2_Ljavax_microedition_lcdui_Canvas_?.repaint?.();
  }

  d() {
    const bs = globalThis.bs || JavaRegistry.get('bs');
    this.a_f3_Lrpg_a_ = bs?.a_m0_PRLbs_?.();
    globalThis.di?.b_m0_PRV?.();
    if (this.a_f3_Lrpg_a_) ct.a_m1_PLaz_RV(this.a_f3_Lrpg_a_);
    globalThis.bv?.d_m0_PRV?.();
  }

  async run() {
    if (c.f) return;
    c.f = true;
    c.a_m2_PIRV(c.a_f0_AB[c.b_f0_B] || 10);
    while (c.f) {
      try {
        const canvas = ct.a_f2_Ljavax_microedition_lcdui_Canvas_;
        const fCls = globalThis.f || JavaRegistry.get('f');
        if (fCls?.a_f2_Z || fCls?.b_f1_Z) {
          canvas?.repaint?.();
          await sleep(50);
          continue;
        }
        fCls?.a_m0_PRV?.();
        const now = Date.now();
        const elapsed = now - c.b_f3_J;
        if (elapsed < c.b_f2_I) await sleep(c.b_f2_I - elapsed);
        else await sleep(10);
        c.b_f3_J = Date.now();
        if (c.e_f1_Z) continue;
        if (!globalThis.di?.f_f0_Z) globalThis.bq?.a_m0_PRV?.();
        const aCls = JavaRegistry.get('rpg.a') || globalThis.rpg?.a;
        this.a_f3_Lrpg_a_?.a_m2_PIIRV?.(aCls?.a_f0_I ?? 0, aCls?.b_f0_I ?? 0);
        canvas?.repaint?.();
      } catch (e) {
        console.error('[game loop]', e);
        await sleep(100);
      }
    }
  }

  static a_m2_PIRV(n2) {
    c.b_f2_I = n2 > 0 ? 1000 / n2 : 50;
  }

  static a_m1_PZRV(_v) {}
  static a_m3_PBRV(by2) {
    c.b_f0_B = by2;
    c.a_f7_I = c.a_f0_AB[by2];
  }

  f() {
    c.a_m2_PIRV(c.a_f7_I || 10);
  }
  g() {
    c.a_m2_PIRV(10);
  }
  h() {
    c.a_m2_PIRV(20);
  }
}

JavaRegistry.set('rpg.c', c);
// Do not set globalThis.c — default-package class `c` also exists.
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.c = c;
