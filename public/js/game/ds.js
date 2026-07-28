/** Stub for SMS midlet helper (not needed in web port). */
import { JavaRegistry } from '../midp/runtime.js';

export class ds {
  static a_f7_Z = true;
  constructor(_midlet) {}
  run() {}
}
JavaRegistry.set('ds', ds);

globalThis.ds = ds;
