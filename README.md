# Discord meme BOT

## 📃 About
This application is basically a bot for discord built in NodeJS.

The bot receives a call from a prefix and then takes a random image and inserts text.

Example:
```bash
# This prefix is a ";"
; This is funny!

```
The bot returns an random image containing the text "This is funny!"

## 📚 Requisitos
* Use [Git](https://github.com/) to clone the repository
* Use [NodeJS](https://nodejs.org/en/) to run the project
* Use [Discord](https://discord.com/developers/applications) to create your BOT


## ⚙️ Technologies used
1. [NodeJS](https://nodejs.org/en/)
2. [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
3. [DiscordJS](https://discord.js.org/#/)
4. [Jimp](https://www.npmjs.com/package/jimp)

## 🚀 Running project
1. Create .env and change sensitive data
2. Install dependency
```bash
# If you use yarn for control dependency run:
yarn

# If you use npm for control dependency run:
npm install
# Or
npm i
```
3. Add image URLs to .env
4. Add the variables of the .env images to array
5. Add the bot to your Discord server
6. Running application
```bash
# To run in development use:
yarn dev
# If you use npm run:
npm run dev

# To execute:
node .
```
