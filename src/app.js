const Discord = require('discord.js');
const config = require('./config/bot');

class App {
  constructor() {
    this.client = new Discord.Client();
    this.client.login(config.token);
  }

  receiveMessage() {
    this.client.on('message', msg => {
      if (msg.content === 'ping') {
        msg.reply('pong');
      }
    });
  }

  render() {
    this.receiveMessage();
  }
}

module.exports = App;
