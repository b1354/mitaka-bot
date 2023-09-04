
# MITAKA BOT (masih dalam proses pengembangan)

Bot sederhana menggunakan NodeJs, dengan library ``whatsapp-web``

# Instalasi

> __NOTE :__
  jika ingin menginstall bot di server, atau sistem tanpa GUI seperti linux shell
  gunakan cara ini [(instalasi ke OS tanpa GUI)](#instalasi-tanpa-gui)

- buka cmd, lalu clone repository ini
  ```sh
  git clone https://github.com/b1354/mitaka-bot
  cd mitaka-bot
  ```

- Install dependencies
  ```sh
  npm install
  ```

- Tambahkan token chatgpt
  
  [cara menambahkan token chatgpt](#chat-gpt-token)

- Jalankan program
  ```sh
  node .
  ```

  Jika ingin menjalankan dalam proses development:
  ```sh
  npm run dev
  ```
  > __NOTE:__
  program yang berjalan akan langsung direstart ketika perubahan di save
  dan mulai kembali secara otomatis dalam mode ini,
  sehingga tidak perlu mengetik ``node .`` lagi.

# Instalasi Tanpa GUI
- buka cmd, lalu clone repository ini
  ```sh
  git clone https://github.com/b1354/mitaka-bot
  cd mitaka-bot
  ```

- Install dependecies yang dibutuhkan
  ```sh
  sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

  ```

- tambahkan konfigurasi ``no-sandbox`` pada client
  ```javascript
  const client = new Client({
    puppeter: {
      args: ['--no-sandbox']
    }
  })
  ```

- Tambahkan token chatgpt

  [cara menambahkan token chatgpt](#chat-gpt-token)

# Chat GPT Token
- tambahkan token chat-gpt dengna menyalin file ``env-example``
  ```
  OPEN_AI_TOKEN = <isi token disini>
  ```
  >__NOTE:__
  saat memasukan token tidak perlu diapit dengan tanda kutip
 
- install dependencies yang dibutuhkan
  ```sh
  npm install
  ```

- jalankan program:
  ```sh
  node .
  ```