class Entities {
  players;
  snakes;
  ladders;
  // entities;
  constructor() {
    this.players = {};
    this.snakes = {};
    this.ladders = {};
  }

  getSnake(x) {
    return this.snakes[x];
  }
  setSnake(x, y) {
    this.snakes[x] = y;
  }

  getLadder(x) {
    return this.ladders[x];
  }
  setLadder(x, y) {
    this.ladders[x] = y;
  }

  getPlayer() {
    return this.players;
  }
  setPlayer(x, y) {
    this.players[x] = y;
  }

  getEntities() {
    if (!this.entities) {
      this.entities = new Entities();
    }
    return this.entities;
  }
}

module.exports = { Entities };
