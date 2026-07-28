/**
 * Resource / stream helpers mimicking Java ME Class.getResourceAsStream
 * and DataInputStream over fetched JAR assets under /res.
 */
export async function preloadResources(manifestPaths) {
  const cache = Object.create(null);
  await Promise.all(
    manifestPaths.map(async (p) => {
      const url = p.startsWith('/res') ? p : '/res' + (p.startsWith('/') ? p : '/' + p);
      try {
        const res = await fetch(url);
        if (!res.ok) return;
        cache[normalize(p)] = new Uint8Array(await res.arrayBuffer());
      } catch (_) {}
    })
  );
  ResourceStore.cache = cache;
  return cache;
}

function normalize(p) {
  if (!p) return p;
  let s = String(p);
  if (!s.startsWith('/')) s = '/' + s;
  return s;
}

export const ResourceStore = {
  cache: Object.create(null),
  get(path) {
    const n = normalize(path);
    return this.cache[n] || this.cache[n.replace(/^\/res/, '')] || null;
  },
};

export class ByteArrayInputStream {
  constructor(bytes) {
    this.bytes = bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes);
    this.pos = 0;
  }
  read() {
    if (this.pos >= this.bytes.length) return -1;
    return this.bytes[this.pos++];
  }
  available() {
    return this.bytes.length - this.pos;
  }
  close() {}
}

export class DataInputStream {
  constructor(stream) {
    if (stream instanceof Uint8Array) this.stream = new ByteArrayInputStream(stream);
    else this.stream = stream;
  }
  readUnsignedByte() {
    const v = this.stream.read();
    if (v < 0) throw new Error('EOF');
    return v;
  }
  readByte() {
    const v = this.readUnsignedByte();
    return v > 127 ? v - 256 : v;
  }
  readBoolean() {
    return this.readUnsignedByte() !== 0;
  }
  readUnsignedShort() {
    return (this.readUnsignedByte() << 8) | this.readUnsignedByte();
  }
  readShort() {
    const v = this.readUnsignedShort();
    return v > 0x7fff ? v - 0x10000 : v;
  }
  readInt() {
    return (
      ((this.readUnsignedByte() << 24) |
        (this.readUnsignedByte() << 16) |
        (this.readUnsignedByte() << 8) |
        this.readUnsignedByte()) |
      0
    );
  }
  readFully(buf, off = 0, len = buf.length) {
    for (let i = 0; i < len; i++) buf[off + i] = this.readByte();
  }
  readUTF() {
    const len = this.readUnsignedShort();
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = this.readUnsignedByte();
    return new TextDecoder('utf-8').decode(bytes);
  }
  skip(n) {
    for (let i = 0; i < n; i++) if (this.stream.read() < 0) break;
  }
  close() {
    this.stream.close?.();
  }
}

/** Install getResourceAsStream on Function prototype for transpiled `"".getClass().getResourceAsStream` patterns */
export function installResourceHooks() {
  const getter = function (path) {
    const data = ResourceStore.get(path);
    if (!data) {
      console.warn('[resource miss]', path);
      return null;
    }
    return new ByteArrayInputStream(data);
  };
  // Emulate "".getClass().getResourceAsStream
  // eslint-disable-next-line no-extend-native
  String.prototype.getClass = function () {
    return { getResourceAsStream: getter };
  };
  // Object fake
  const proto = Object.prototype;
  if (!proto.getClass) {
    proto.getClass = function () {
      return { getResourceAsStream: getter };
    };
  }
}
