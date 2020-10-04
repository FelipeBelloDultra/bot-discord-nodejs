const Discord = require('discord.js');
const config = require('../config/botConfig');

const GeneratePrefixAndMessageService = require('../app/services/GeneratePrefixAndMessageService');
const GenerateImageWithTextService = require('../app/services/GenerateImageWithTextService');

const client = new Discord.Client();

const generatePrefixAndMessage = new GeneratePrefixAndMessageService();
const generateImageWithText = new GenerateImageWithTextService();

client.login(process.env.TOKEN);

class Bot {
  async init() {
    client.on('message', async msg => {
      if (msg.author.bot) return;

      const { prefix, content } = generatePrefixAndMessage.execute(msg.content);

      if (prefix === 'invalid' && content === 'invalid') {
        msg.reply(
          `para usar o bot tem que ter espaço depois do ${config.prefix}`,
        );

        return;
      }

      if (prefix === config.prefix) {
        if (!content) {
          msg.channel.send(
            `Essa foi boa, ${msg.author.username}, mas vai ficar sem meme!`,
          );

          return;
        }

        if (content === 'help') {
          msg.reply(`Só colocar a frase depois do ${config.prefix}`);

          return;
        }

        const url = await generateImageWithText.execute(content);

        msg.channel.send('', { files: [url] });
      }
    });
  }
}

module.exports = Bot;
