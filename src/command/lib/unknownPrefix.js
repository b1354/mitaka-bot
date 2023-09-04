module.exports = (client, msg, prefix) => {
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