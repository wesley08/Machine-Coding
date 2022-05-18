const { Redis } = require("./models/keyvalue");
const { RedisCommand } = require("./services/command");

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const redis = new Redis();
redis.setValue("sde_bootcamp", {
  title: "SDE-Bootcamp",
  price: 30000,
  enrolled: false,
  estimated_time: 30,
});
redis.setValue("b", {
  title: "SDE-Bootcamp",
  price: 40000,
  enrolled: true,
  estimated_time: 30,
});

const get = new RedisCommand(redis);

const play = () => {
  rl.prependOnceListener("line", (x) => {
    const input = x.split(" ");

    if (get.command[input[0]]) get.command[input[0]](input);
    else console.log("input invalid");

    if (input[0] == "exit") rl.close();
    play();
  });
};

rl.prependOnceListener("close", () => {
  console.log("BYE BYE");
});

play();
