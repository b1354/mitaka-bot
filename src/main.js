require('dotenv').config();
const client = require("./client/client.js");

console.log("Preparing bot,");
console.log("Please wait...");

client.initialize();