class Player {
  name;
  index;
  position;
  constructor(name, index, position) {
    this.name = name;
    this.index = index;
    this.position = position;
  }
  setPosition(n) {
    this.position = n;
  }
  getPosition() {
    return this.position;
  }
  getName() {
    return this.name;
  }
}

module.exports = { Player };
