const { checkValidInput, checkboard } = require("../validation");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class PlayingGame {
  counter = 0;
  board;
  player;
  size;
  historyPlayer = [];
  boardTheme;

  constructor(board, player) {
    this.board = board;
    this.player = player;
    this.size = board.getBoard().length;
  }

  returnStatusGame(query = "INVALID INPUT", next = true) {
    console.log(query);
    if (next) this.play();
    else rl.close();
  }

  play() {
    const num = this.counter % 2;
    const name = this.player[num].getName();
    const sym = this.player[num].getSymbol();

    rl.question(`Player${num + 1} ${name} move to? `, (x) => {
      const loc = x.split(",").map(Number);
      if (x == "back") {
        if (this.historyPlayer.length > 0) {
          const delPosition = this.historyPlayer[this.historyPlayer.length - 1];
          this.board.setPosition(
            delPosition[0],
            delPosition[1],
            this.board.getTheme()
          );

          this.historyPlayer.pop();
          this.counter--;
          this.play();
        } else {
          this.returnStatusGame();
        }
      } else if (checkValidInput(loc, x, this.board)) {
        this.returnStatusGame();
      } else {
        this.board.setPosition(loc[0], loc[1], sym);
        this.historyPlayer.push([loc[0], loc[1]]);
        console.log(this.historyPlayer);
        this.counter++;

        if (checkboard(loc[0], loc[1], sym, this.board)) {
          this.returnStatusGame(
            `${name} WINNER WINNER CHICKEN DINNER!!`,
            false
          );
        } else if (this.counter == this.size * this.size) {
          this.returnStatusGame("DRAW", false);
        } else {
          this.play();
        }
      }
    });
  }
}

module.exports = { PlayingGame };
