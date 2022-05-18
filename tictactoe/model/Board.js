class Board {
  board = [];
  theme;

  constructor(size, theme = " ") {
    this.theme = theme;
    this.board = Array.from(Array(size), () => new Array(size));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        this.board[i][j] = theme;
      }
    }
  }

  printBoard() {
    let line = "*";
    for (let i = 0; i < this.board.length * 3 + this.board.length - 1; i++) {
      line += "-";
    }

    for (let i = 0; i < this.board.length; i++) {
      let row = "|";
      for (let j = 0; j < this.board[i].length; j++) {
        row += " " + this.board[i][j] + " |";
      }
      console.log(line + "*");
      console.log(row);
    }
    console.log(line + "*");
  }

  setPosition(x, y, symbol) {
    this.board[x][y] = symbol;
    this.printBoard();
  }

  getposition(x, j) {
    return this.board[x][j];
  }

  getBoard() {
    return this.board;
  }

  getTheme() {
    return this.theme;
  }
}

module.exports = { Board };
