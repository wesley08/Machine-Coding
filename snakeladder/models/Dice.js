class Dice {
  getNumberDice() {
    return Math.floor(Math.random() * 6 + 1);
  }
}
module.exports = { Dice };
