const net = require("net");
const {ip, port} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: ip,// IP address here,
    port: port// PORT number here,
  });

  // Logs data sent by the server to the user.
  conn.on("data", (data) => {
    console.log(data);
  });
  
  // Displays the snake name.
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: TBS");

    // The following line moves the snake up.
    //conn.write("Move up");
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};