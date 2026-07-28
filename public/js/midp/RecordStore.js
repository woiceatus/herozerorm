/** javax.microedition.rms.RecordStore — localStorage backend */
const stores = Object.create(null);

export class RecordStore {
  constructor(name) {
    this.name = name;
    this.records = stores[name] || (stores[name] = []);
    this._persist();
  }

  static openRecordStore(name, createIfNecessary) {
    if (!stores[name]) {
      try {
        const raw = localStorage.getItem('rms:' + name);
        stores[name] = raw ? JSON.parse(raw).map((b) => Uint8Array.from(b)) : [];
      } catch {
        stores[name] = [];
      }
      if (!stores[name].length && !createIfNecessary) {
        const e = new Error('RecordStoreNotFound');
        e.name = 'RecordStoreNotFoundException';
        throw e;
      }
    }
    return new RecordStore(name);
  }

  static deleteRecordStore(name) {
    delete stores[name];
    localStorage.removeItem('rms:' + name);
  }

  _persist() {
    try {
      localStorage.setItem(
        'rms:' + this.name,
        JSON.stringify(this.records.map((r) => Array.from(r)))
      );
    } catch (_) {}
  }

  closeRecordStore() {
    this._persist();
  }

  getNumRecords() {
    return this.records.length;
  }

  addRecord(data, offset, numBytes) {
    const slice = Uint8Array.from(data).subarray(offset, offset + numBytes);
    this.records.push(new Uint8Array(slice));
    this._persist();
    return this.records.length; // 1-based id
  }

  getRecord(recordId) {
    const r = this.records[recordId - 1];
    if (!r) throw new Error('InvalidRecordID');
    return new Int8Array(r);
  }

  setRecord(recordId, data, offset, numBytes) {
    const slice = Uint8Array.from(data).subarray(offset, offset + numBytes);
    this.records[recordId - 1] = new Uint8Array(slice);
    this._persist();
  }

  deleteRecord(recordId) {
    this.records.splice(recordId - 1, 1);
    this._persist();
  }
}
