// Will be set equal to conn and will be used to interact with the snake inside the game.
let connection;

/* Setup interface to handle user input from stdin.
conn: an object that is used to create the server and snake.
*/
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

/* This function handles user input.
data: any input sent to the server from the user.
*/
const handleUserInput = function(data) {

  // Switch case for handeling user input.
  switch (data) {

  // Allows the user to exit the game with contol + c.
  case "\u0003":
    process.exit();
    break;

    // The following cases are for snake movement.
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

  // The following cases are for sending canned messages to the server.
  case '1':
    connection.write("Say: Nerd");
    break;
  case '2':
    connection.write("Say: GGEZ");
    break;
  case '3':
    connection.write("Say: Yum");
    break;
  case '4':
    connection.write("Say: Bye");
    break;
  case "5":
    connection.write("Say: LOL");
    break;
  }
};

module.exports = {setupInput};