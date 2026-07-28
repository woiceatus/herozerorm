/** Hand-ported from rpg.RPGHeroEx */
import { JavaRegistry } from '../../midp/runtime.js';
import { MIDlet } from '../../midp/MIDlet.js';

export class RPGHeroEx extends MIDlet {
  static a = null;

  startApp() {
    if (RPGHeroEx.a == null) {
      RPGHeroEx.a = this;
      const game = JavaRegistry.get('rpg.c') || globalThis.rpg?.c || globalThis.c;
      game.a_m0_PRLrpg_c_().c();
      return;
    }
    globalThis.bq?.b_m0_PRV?.();
    const game = JavaRegistry.get('rpg.c') || globalThis.rpg?.c;
    game?.a_m0_PRLrpg_c_()?.b?.();
  }

  pauseApp() {
    const game = JavaRegistry.get('rpg.c') || globalThis.rpg?.c;
    game?.a_m0_PRLrpg_c_()?.a_m1_PRV?.();
  }

  destroyApp(_unconditional) {
    const game = JavaRegistry.get('rpg.c') || globalThis.rpg?.c;
    if (game) game.f = false;
    this.notifyDestroyed();
  }
}

JavaRegistry.set('rpg.RPGHeroEx', RPGHeroEx);
JavaRegistry.set('RPGHeroEx', RPGHeroEx);
globalThis.RPGHeroEx = RPGHeroEx;
globalThis.rpg = globalThis.rpg || {};
globalThis.rpg.RPGHeroEx = RPGHeroEx;
