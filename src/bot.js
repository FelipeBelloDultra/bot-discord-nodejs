const Discord = require('discord.js');
const config = require('./config/botConfig');

const generateImage = require('./utils/generateImage');
const valdadePrefix = require('./utils/validadePrefix');

function initBot() {
  const client = new Discord.Client();
  client.login(config.token);

  client.on('message', async msg => {
    if (msg.author.bot) return;

    const { prefix, content } = valdadePrefix(msg.content);

    if (prefix === config.prefix) {
      if (!content) {
        msg.channel.send(
          `Essa foi boa, ${msg.author.username}, mas vai ficar sem meme!`,
        );

        return;
      }

      const url = await generateImage(content);

      msg.channel.send('', { files: [url] });
    }
  });
}

module.exports = initBot;
