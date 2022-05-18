const { Board } = require("./model/Board");
const { Player } = require("./model/Player");
const { PlayingGame } = require("./services/PlayingGame");

const board = new Board(3);
const player = [new Player("AWS", "X"), new Player("SWA", "O")];
const playingGame = new PlayingGame(board, player);

board.printBoard();
playingGame.play();
