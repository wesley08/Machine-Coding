class Player {
  #playerName;
  #symbol;
  #status = "-";

  constructor(playerName, symbol) {
    this.#playerName = playerName;
    this.#symbol = symbol;
  }

  setStatus(status) {
    this.#status = status;
  }
  getStatus() {
    return this.#status;
  }
  getSymbol() {
    return this.#symbol;
  }
  getName() {
    return this.#playerName;
  }
}

module.exports = { Player };
