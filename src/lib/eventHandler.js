const command = require("./command.js");

const messageHandler = (msg) => {
  const client = require("./client.js");
  const prefix = (msg.body[0]=="!") ? msg.body.toLowerCase().split(" ")[0]:null;
  const params = msg.body.split(" ");
  params.shift();

  switch (prefix) {
    case "!help":
      command.helpCommand(client, msg, params);
      break;
    case "!sticker":
      command.stickerCommand(client, msg, params);
      break;
    case "!chatgpt":
      command.chatgpt(client, msg, params);
      break;
    case "!qr":
      command.generateQr(client, msg, params);
      break;
    default:
      command.unknownPrefix(client, msg, prefix);
      break;
  }
}

module.exports = {
  messageHandler
};