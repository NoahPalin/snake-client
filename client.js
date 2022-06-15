const net = require("net");
const {ip, port} = require('./constants');

// Establishes a connection with the game server.
const connect = function() {
  const conn = net.createConnection({
    host: ip,
    port: port
  });

  // Logs data sent by the server to the user.
  conn.on("data", (data) => {
    console.log(data);
  });
  
  // Tells the user the connected to the server and displays the name of the snake.
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: TBS");
  });

  // Interpret incoming data as text.
  conn.setEncoding("utf8");

  // Returning the conn object to allow for communication with the server in other parts of the program.
  return conn;
};

module.exports = {connect};