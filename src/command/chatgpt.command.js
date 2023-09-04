const openai = require('./lib/openai.js');

module.exports = async(client, msg, params) => {
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