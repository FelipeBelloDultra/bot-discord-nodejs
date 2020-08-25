const Discord = require('discord.js');
const config = require('../../../config/botConfig');

const GenerateImageWithTextService = require('../../../modules/bot/services/GenerateImageWithTextService');
const GeneratePrefixAndMessageService = require('../../../modules/bot/services/GeneratePrefixAndMessageService');

const client = new Discord.Client();

const generateImageWithText = new GenerateImageWithTextService();
const generatePrefixAndMessage = new GeneratePrefixAndMessageService();

client.login(process.env.TOKEN);

class Bot {
  async init() {
    client.on('message', async msg => {
      if (msg.author.bot) return;

      const { prefix, content } = generatePrefixAndMessage.execute(msg.content);

      if (prefix === config.prefix) {
        if (!content) {
          msg.channel.send(
            `Essa foi boa, ${msg.author.username}, mas vai ficar sem meme!`,
          );

          return;
        }

        const url = await generateImageWithText.execute(content);

        msg.channel.send('', { files: [url] });
      }
    });
  }
}

module.exports = Bot;
