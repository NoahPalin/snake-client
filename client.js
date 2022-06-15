const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: "50541",// PORT number here,
  });

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