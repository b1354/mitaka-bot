const qrcode = require('qrcode');
const { MessageMedia } = require('whatsapp-web.js');

const commandsManual = require('./commandsManual.js');
const openai = require('./openai/openai.js');


const helpCommand = (client, msg, params) => {
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

const stickerCommand = async(client, msg, params) => {
  const author = (params[0]) ? params[0]:"Mitaka";
  const name = (params[1]) ? params.slice(1).join(" "):"Mitaka-sticker"

  if(msg.hasMedia && msg.type === "image") {
    const media = await msg.downloadMedia();
    if(media) {
      msg.reply(media, null, {
        sendMediaAsSticker: true,
        stickerAuthor: author,
        stickerName: name
      })
      return;
    }
  }
  client.sendMessage(msg.from, "maaf ya\nada masalah waktu ngeproses gambarnya:( (gambarnya ga ada/yang dikirim bukan gambar)");
}

const chatgpt = async(client, msg, params) => {
  const prompt = params.join(" ");
  
  if (!prompt || prompt == " ") {
    client.sendMessage(msg.from, "prompt tidak boleh kosong");
    return;
  }

  client.sendMessage(msg.from, "sedang membuat request...")

  try {
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: prompt}]
    });
    client.sendMessage(msg.from, result.data.choices[0].message.content);
  } catch (err) {
    // console.log(err);
    client.sendMessage(msg.from, "terjadi kesalahan:(\n tidak dapat membuat request");
  }
}

const generateQr = async (client, msg, params) => {
  const text = params.join(" ");
  const chat = msg.getChat();

  if (!text || text == " ") {
    client.sendMessage(msg.from, "masukan text yang ingin di ubah ke qr");
    return;
  }

  qrcode.toDataURL(text, {version: 5, width: 480},function(err, data){
    if (err) {
      client.sendMessage(msg.from, "terjadi error");
      return;
    }
    let base64Image = data.split(';base64,').pop();
    const media = new MessageMedia('image/png', base64Image);
    msg.reply(media);
  })
}

const unknownPrefix = (client, msg, prefix) => {
  const message = msg.body.toLowerCase();
  switch (message) {
    case "hi":
    case "hello":
    case "p":
    case "test":
      client.sendMessage(msg.from, `Hi, Selamat datang di Mitaka-Bot,\nketik "!help" untuk list command`);
      break;
    default:
      break;
  }
  
  if (prefix) {
    client.sendMessage(msg.from, `perintah ${prefix} tidak diketahui`)
  }
}

module.exports = {
  helpCommand,
  stickerCommand,
  chatgpt,
  generateQr,
  unknownPrefix
}