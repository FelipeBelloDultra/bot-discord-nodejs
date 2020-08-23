const Discord = require('discord.js');
const config = require('./config/botConfig');

class Bot {
  constructor() {
    this.client = new Discord.Client();
    this.client.login(config.token);
  }

  receiveMessage() {
    this.client.on('message', msg => {
      if (msg.content === 'ping') {
        msg.reply('ping');
      }
    });
  }

  render() {
    this.receiveMessage();
  }
}

module.exports = Bot;
