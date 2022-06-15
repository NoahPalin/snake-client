const {setupInput} = require('./input');
const {connect} = require('./client');

console.log("Connecting ...");

// Passes the function setupInput the returned object from connect to allow for the user to communicate with the server.
setupInput(connect());
