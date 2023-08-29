const qrcode = require('qrcode');
const { MessageMedia } = require('whatsapp-web.js');

module.exports = async (client, msg, params) => {
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