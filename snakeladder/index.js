const { Entities } = require("./models/Entities");
const { Player } = require("./models/Player");
const { PlaySnakeLadder } = require("./services/PlaySnakeLadder");

const entities = new Entities();

entities.setSnake(62, 5);
entities.setSnake(33, 6);
entities.setSnake(49, 9);
entities.setSnake(88, 16);
entities.setSnake(41, 20);
entities.setSnake(56, 53);
entities.setSnake(98, 64);
entities.setSnake(93, 73);
entities.setSnake(95, 75);

entities.setLadder(2, 37);
entities.setLadder(27, 46);
entities.setLadder(10, 32);
entities.setLadder(51, 68);
entities.setLadder(61, 79);
entities.setLadder(65, 84);
entities.setLadder(71, 91);
entities.setLadder(81, 100);

entities.setPlayer(1, new Player("Gaurav", 1, 0));
entities.setPlayer(2, new Player("Sear", 2, 0));

new PlaySnakeLadder(entities).play();

// const a = entities.getPlayer()[2];
// a.setPosition(100);
// console.log(entities.getPlayer()[2]);
// console.log(playerTwo);

// const inputSnake = async (n) => {
//   if (n > 0)
//     rl.question(`input snake location, still (${n})`, async (y) => {
//       const loc = y.split(",").map(Number);
//       entitites.setSnake(loc[0], loc[1]);
//       await inputSnake(n - 1);
//     });
//   else {
//     rl.question("input how many ladder ->", (asd) => {
//       console.log(asd);
//       rl.();
//     });
//   }
// };

// rl.question("input how many snake ->", async (x) => {
//   rl.on("line", (input) => {
//     console.log(input);
//     if (x > 0) {
//       const loc = input.split(",").map(Number);
//       entitites.setSnake(loc[0], loc[1]);
//       console.log(entitites.getSnake());
//       x--;
//       console.log(x);
//     } else {
//       rl.close();
//       console.log(entitites.getSnake());
//       console.log("Game Ended!");
//     }
//   });
// });

// rl.question("input how many asdf ->", async (x) => {
//   rl.on("line", (input) => {
//     console.log(input);
//     if (x > 0) {
//       const loc = input.split(",").map(Number);
//       entitites.setSnake(loc[0], loc[1]);
//       console.log(entitites.getSnake());
//       x--;
//       console.log(x);
//       // continue playing
//     } else {
//       console.log(entitites.getSnake());
//       console.log("Game Ended!");
//     }
//   });
// });

// rl.on("sdf", function saveInput() {
//   console.log("\nBYE BYE !!!");
//   process.exit(0);
// });
