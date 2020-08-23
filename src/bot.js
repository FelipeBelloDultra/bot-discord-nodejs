const Discord = require('discord.js');
const config = require('./config/botConfig');

class Bot {
  constructor() {
    this.client = new Discord.Client();
    this.client.login(config.token);
  }

  receiveMessage() {
    this.client.on('message', async msg => {
      if (msg.author.bot) return;

      if (msg.content === 'ping') {
        await msg.channel.send(msg.content);
      }
    });
  }

  render() {
    this.receiveMessage();
  }
}

module.exports = Bot;
