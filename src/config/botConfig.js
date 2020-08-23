const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  prefix: process.env.PREFIX,
  token: process.env.TOKEN,
};
