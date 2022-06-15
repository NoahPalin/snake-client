// setup interface to handle user input from stdin

let connection;

const setupInput = function (conn) {
  connection = conn;
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
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case '1':
      connection.write("Say: nerd");
      break;
    case '2':
      connection.write("Say: GGEZ");
      break;
    case '3':
      connection.write("Say: yum");
      break;
  }
};

module.exports = {setupInput};