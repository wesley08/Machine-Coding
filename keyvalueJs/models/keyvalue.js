class Redis {
  KeyValue;
  constructor() {
    this.KeyValue = new Map();
  }
  getAllKeys() {
    return this.KeyValue.keys();
  }
  getValue(key) {
    return this.KeyValue.get(key);
  }
  setValue(key, value) {
    this.KeyValue.set(key, value);
  }
  getKeyValue() {
    return this.KeyValue;
  }
  deleteKeyValue(x) {
    this.KeyValue.delete(x);
  }
}

module.exports = { Redis };
