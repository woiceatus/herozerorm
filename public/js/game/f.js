/** Hand-ported from remapped f.java — main game Canvas */
import { JavaRegistry } from '../midp/runtime.js';
import { Canvas } from '../midp/Canvas.js';

export class f extends Canvas {
  static a_f0_Laz_ = null;
  static a_f1_I = 0;
  static b_f0_I = 0;
  static c_f0_I = 0;
  static a_f2_Z = false;
  static a_f3_B = 0;
  static a_f4_Lea_ = null;
  static c_f1_Z = false;
  static b_f1_Z = false;

  constructor() {
    super();
    this.setFullScreenMode(true);
    this.setSize(240, 320);
  }

  getWidth() {
    return 240;
  }
  getHeight() {
    return 320;
  }

  paint(g) {
    const ds = globalThis.ds;
    const cm = globalThis.cm;
    const ac = globalThis.ac;
    const d = JavaRegistry.get('rpg.d') || globalThis.rpg?.d;

    if (f.b_f1_Z) {
      const n2 = this.getWidth();
      const n3 = this.getHeight();
      g.setClip(0, 0, n3, n2);
      g.setColor(0);
      g.fillRect(0, 0, n3, n2);
      g.setColor(0xffffff);
      // rotated pause — draw message if helpers exist
      if (ac && d) {
        try {
          const wrap = new cm(g);
          ac.a_m2_PLcm_IIABIIRV(wrap, n3 >> 1, n2 >> 1, d.D, 0, 1);
        } catch (_) {
          g.drawString('Paused', n3 >> 1, n2 >> 1, 1 | 2);
        }
      }
      return;
    }
    if (ds && !ds.a_f7_Z) {
      const n4 = this.getWidth();
      const n5 = this.getHeight();
      g.setClip(0, 0, n4, n5);
      g.setColor(0);
      g.fillRect(0, 0, n4, n5);
      g.setColor(0xffffff);
      g.drawString('Loading…', n4 >> 1, n5 >> 1, 1 | 2);
      return;
    }
    if (f.a_f2_Z) {
      const n6 = this.getWidth();
      const n7 = this.getHeight();
      g.setClip(0, 0, n6, n7);
      g.setColor(0);
      g.fillRect(0, 0, n6, n7);
      g.setColor(0xffffff);
      if (f.a_f3_B < 20) {
        g.drawString('Paused', n6 >> 1, n7 >> 1, 1 | 2);
      }
      const by2 = f.a_f3_B;
      f.a_f3_B = (by2 + 1) & 0xff;
      if (by2 > 30) f.a_f3_B = 0;
      return;
    }
    if (cm && cm.a_f0_Ljavax_microedition_lcdui_Image_ != null) {
      g.drawImage(cm.a_f0_Ljavax_microedition_lcdui_Image_, 0, 0, 20);
    } else {
      // Fallback frame so touch devices always see something
      g.setColor(0);
      g.fillRect(0, 0, this.getWidth(), this.getHeight());
      g.setColor(0xc4a35a);
      g.drawString('Heroes Lore: Zero', this.getWidth() >> 1, 24, 1);
      g.setColor(0xffffff);
      g.drawString('Touch pad to play', this.getWidth() >> 1, this.getHeight() >> 1, 1 | 2);
    }
  }

  keyPressed(n2) {
    if (n2 === -12) {
      globalThis.bq?.i?.();
    }
    if (f.b_f1_Z) return;
    if (globalThis.ds && !globalThis.ds.a_f7_Z) return;
    if (f.a_f2_Z) {
      if (this.isShown()) {
        f.a_f2_Z = false;
        globalThis.bq?.j?.();
        f.a_f0_Laz_?.b?.();
      }
      return;
    }
    f.a_f1_I = n2;
  }

  keyReleased(n2) {
    f.b_f0_I = n2;
  }

  static a_m0_PRV() {
    if (f.a_f1_I !== 0) {
      if (f.c_f0_I !== 0) {
        f.a_f0_Laz_?.a_m0_PIIRZ?.(1, f.c_f0_I);
        f.c_f0_I = 0;
      }
      f.c_f0_I = f.a_f1_I;
      f.a_f0_Laz_?.a_m0_PIIRZ?.(0, f.a_f1_I);
      f.a_f1_I = 0;
    }
    if (f.b_f0_I !== 0) {
      if (f.c_f0_I !== 0) {
        f.a_f0_Laz_?.a_m0_PIIRZ?.(1, f.c_f0_I);
        f.c_f0_I = 0;
      }
      f.b_f0_I = 0;
    }
  }

  hideNotify() {
    if (globalThis.ds && !globalThis.ds.a_f7_Z) return;
    f.a_f2_Z = true;
    globalThis.bq?.i?.();
    if (f.a_f0_Laz_) {
      f.a_f0_Laz_.a_m0_PIIRZ?.(1, f.c_f0_I);
      f.c_f0_I = 0;
      f.a_f0_Laz_.a_m1_PRV?.();
    }
  }

  static a_m1_PLaz_RZ(az2) {
    const first = f.a_f0_Laz_ == null;
    f.a_f0_Laz_ = az2;
    return first;
  }

  sizeChanged(n2, n3) {
    f.b_f1_Z = n2 > n3;
  }
}

JavaRegistry.set('f', f);
globalThis.f = f;
