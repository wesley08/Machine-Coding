const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (x) => {
  console.log("again");
  if (x == "CREATE_PARKING_LOT2")
    rl.on("line", (aa) => {
      console.log(aa, "Dfds");
      return;
    });
  else if (x == "CREATE_PARKING_LOT")
    rl.on("line", (a) => {
      console.log(a, "df");
    });
});
