class RedisCommand {
  command;
  constructor(KeyValue) {
    this.KeyValue = KeyValue;
    this.command = {
      get: (x) => this.getCommand(x),
      put: (x) => this.putCommand(x),
      delete: (x) => this.deleteCommand(x),
      search: (x) => this.searchCommand(x),
      keys: () => this.keysCommand(),
    };
  }

  getCommand(input) {
    if (input.length > 2) return console.log("input invalid");

    console.log(this.KeyValue.getValue(input[1]));
  }

  putCommand(input) {
    if (input.length % 2 != 0) return console.log("input invalid");

    const values = new Map();
    for (let i = 2; i < input.length; i += 2) {
      values.set(input[i], input[i + 1]);
    }
    this.KeyValue.setValue(input[1], values);
  }

  keysCommand() {
    console.log(Array.from(this.KeyValue.getAllKeys()).join(", "));
  }

  deleteCommand(input) {
    if (input.length > 2) return console.log("input invalid");

    this.KeyValue.deleteKeyValue(input[1]);
  }

  searchCommand(input) {
    if (input.length > 3) return console.log("input invalid");

    const keyResult = [];
    this.KeyValue.getKeyValue().forEach((value, key) => {
      for (var valueKey in value) {
        if (valueKey == input[1] && value[valueKey].toString() == input[2])
          keyResult.push(key);
      }
    });
    console.log(keyResult.join(", "));
  }
}

module.exports = { RedisCommand };
