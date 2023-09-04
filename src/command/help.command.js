const commandsManual = require('./lib/commandsManual.js');

module.exports = (client, msg, params) => {
  const message = "Command yang tersedia: \n" +
                  "*!help* - menampilkan halaman help\n" +
                  "*!sticker* - convert gambar ke sticker\n" +
                  "*!chatgpt* - tanya chatgpt\n" +
                  "*!qr* - menggenerate qr dari teks\n\n" +
                  "untuk detail tiap command gunakan:\n" +
                  "*!help <command>*\n" +
                  "contoh:\n" +
                  "*!help sticker*";

  if (params[0]) {
    client.sendMessage(msg.from, commandsManual(params[0]));
    return;
  }

  client.sendMessage(msg.from, message);
  client.sendMessage(msg.from, "source-code:\nhttps://github.com/b1354/mitaka-bot");
}