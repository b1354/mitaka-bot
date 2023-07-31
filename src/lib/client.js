const { Client, LocalAuth } = require('whatsapp-web.js');
const {messageHandler} = require('./eventHandler.js');
const qrcodeTerminal = require('qrcode-terminal');
const qrcode = require('qrcode');
const path = require('path');
const client = new Client({
  // authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  qrcodeTerminal.generate(qr, {small: true});
  qrcode.toFile(path.join(__dirname,'../public/qr.png'), qr,{
    errorCorrectionLevel: 'H'
  }, err => {
    if (err) throw err;
    console.log('qr_code generated');
  });
});

client.on('ready', () => {
  console.log('client is ready');
});

client.on('message', messageHandler);

module.exports = client;