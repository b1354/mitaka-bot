const helpCommand = require("../command/help.command.js");
const stickerCommand = require("../command/sticker.command.js");
const chatgptCommand = require("../command/chatgpt.command.js");
const qrCommand = require("../command/qrcode.command.js");

const unknownPrefix = require("../command/lib/unknownPrefix.js");

module.exports = (msg) => {
  const client = require("./client.js");
  const prefix = (msg.body[0]=="!") ? msg.body.toLowerCase().split(" ")[0]:null;
  const params = msg.body.split(" ");
  params.shift();

  switch (prefix) {
    case "!help":
      helpCommand(client, msg, params);
      break;
    case "!sticker":
      stickerCommand(client, msg, params);
      break;
    case "!chatgpt":
      chatgptCommand(client, msg, params);
      break;
    case "!qr":
      qrCommand(client, msg, params);
      break;
    default:
      unknownPrefix(client, msg, prefix);
      break;
  }
}