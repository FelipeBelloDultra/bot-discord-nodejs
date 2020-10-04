const jimp = require('jimp');
const path = require('path');

const randomPhoto = require('../../../utils/randomPhoto');

class GenerateImageWithTextService {
  async execute(message) {
    const max = randomPhoto.length;

    const background = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'utils',
      'img',
      'background.jpg',
    );

    const writePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'tmp',
      'image.png',
    );

    const photo = Math.floor(Math.random() * max);

    const fontWhite = await jimp.loadFont(jimp.FONT_SANS_32_WHITE);

    const image = await jimp.read(randomPhoto[photo]);
    const backgroundImage = await jimp.read(background);

    image.resize(600, 600);
    backgroundImage.resize(600, 700);

    backgroundImage.print(fontWhite, 10, 10, message, 550);

    backgroundImage.composite(image, 0, 100).write(writePath);

    return writePath;
  }
}

module.exports = GenerateImageWithTextService;
