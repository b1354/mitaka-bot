module.exports = (params) => {
  const command = params.toLowerCase();
  let message;

  switch(command){
    case 'sticker':
    case '!sticker':
      message = "kirim gambar dan ubah menjadi sticker\n" +
                "Penggunaan:\n" +
                "*!sticker <author> <name> (opsional)*\n\n" +
                "*keterangan:* \n" +
                "author: nama pembuat sticker\n" +
                "name: nama sticker\n" +
                "(keduanya tidak wajib diisi)\n\n" +
                "*contoh command*:\n" +
                "*!sticker*\n" +
                "*!sticker john_doe nama sticker*\n\n" +
                "*note*\n" +
                "pastikan yang dikirim adalah gambar";
                
      break;
      case 'chatgpt':
      case '!chatgpt':
        message = "Jawab pertanyaan kamu dengan bantuan OpenAI ChatGPT\n" +
                  "perintah ini menggunakan api yang disediakan oleh chatgp " +
                  "dengan pilihan layanan gratis, sehingga mungkin terdapat beberapa keterbatasan\n\n" +
                  "Penggunaan:\n" +
                  "*!chatgpt <prompt>* \n\n" +
                  "*keterangan:*\n" +
                  "prompt: pertanyaan yang akan diberikan ke chatgpt (wajib diisi) \n\n" +
                  "*contoh command:*\n" +
                  "!chatgpt cara membuat http request menggunakan javascript"
        break;
    default:
      message = `command ${command} tidak ditemukan`;
      break;
  }

  return message;
}