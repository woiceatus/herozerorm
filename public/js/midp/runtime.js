/**
 * Shared runtime helpers for the Heroes Lore Zero JS port.
 */
export const JavaRegistry = {
  _map: Object.create(null),
  set(name, cls) {
    this._map[name] = cls;
  },
  get(name) {
    return this._map[name];
  },
};

export function sleep(ms) {
  return new Promise((r) => setTimeout(r, Math.max(0, Number(ms) || 0)));
}

export function javaString(v) {
  return v == null ? null : String(v);
}

/** Rough Java String helpers used by transpiled code */
export function jEquals(a, b) {
  if (a == null || b == null) return a === b;
  return String(a) === String(b);
}
