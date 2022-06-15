// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  switch (data) {
    case "\u0003":
      process.exit();
      break;
    case 'w':
      console.log("Move: up");
      break;
    case 'a':
      console.log("Move: left");
      break;
    case 's':
      console.log("Move: down");
      break;
    case 'd':
      console.log("Move: right");
      break;
  }
};

module.exports = {setupInput};