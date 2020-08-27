const dotenv = require('dotenv');

dotenv.config();

module.exports = [
  process.env.IMAGE_0,
  process.env.IMAGE_1,
  process.env.IMAGE_2,
  process.env.IMAGE_3,
];
