const { Dice } = require("../models/Dice");

class PlaySnakeLadder {
  counter = 0;
  entities;
  rollDice;
  boardSize;
  constructor(entities, boardSize = 100) {
    this.entities = entities;
    this.rollDice = new Dice();
    this.boardSize = boardSize;
  }

  play() {
    const switchPlayer = (this.counter % 2) + 1;
    const player = this.entities.getPlayer()[switchPlayer];
    const { name = getName(), position = getPosiotion() } = player;

    if (position < this.boardSize) {
      const num = this.rollDice.getNumberDice();
      let moveTo = parseInt(position + num);

      if (moveTo >= this.boardSize) {
        moveTo = this.boardSize * 2 - moveTo;
      }

      const checkGetSnake = this.entities.getSnake(moveTo);
      const checkGetLadder = this.entities.getLadder(moveTo);

      console.log(
        `${name} rolled a `,
        num,
        ` and moved from `,
        position,
        ` to `,
        moveTo
      );

      if (checkGetLadder) {
        moveTo = checkGetLadder;
        console.log(`because get ladder move to`, moveTo);
      } else if (checkGetSnake) {
        moveTo = checkGetSnake;
        console.log(`because get snake move to `, moveTo);
      }
      console.log();

      player.setPosition(moveTo);
      if (moveTo == 100) {
        console.log(name, " WINNER WINNER CHICKEN DINNER");
      } else {
        this.counter++;
        this.play();
      }
    }
  }
}

module.exports = { PlaySnakeLadder };
