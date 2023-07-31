const { Client, LocalAuth } = require('whatsapp-web.js');
const {messageHandler} = require('./eventHandler.js');
const qrcode = require('qrcode-terminal');
const path = require('path');
const client = new Client({
  //authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('client is ready');
});

client.on('message', messageHandler);

module.exports = client;