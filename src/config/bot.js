const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  prefix: '!-',
  token: process.env.TOKEN,
};
