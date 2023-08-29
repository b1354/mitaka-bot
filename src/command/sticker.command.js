module.exports = async(client, msg, params) => {
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
  client.sendMessage(msg.from, "maaf \nada masalah waktu ngeproses gambarnya:( (gambarnya ga ada/yang dikirim bukan gambar)");
}