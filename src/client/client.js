const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const messageHandler = require('./messageHandler.js');
const environment = process.env.BOT_ENVIRONMENT

const productionArgs = {
  args: ['--no-sandbox', '--disable-setuid-sandbox']
}

const client = new Client({
  authStrategy: new LocalAuth(),
  pupeteer: (environment == 'production') ? productionArgs : {}
});

client.on('qr', (qr) => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('client is ready');
});

client.on('message', messageHandler);

module.exports = client;