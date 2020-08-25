const jimp = require('jimp');
const path = require('path');

const randomPhoto = require('../../../utils/randomPhoto');

class GenerateImageWithTextService {
  async execute(message) {
    const max = randomPhoto.length;
    const min = 0;
    const writePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'tmp',
      'image.png',
    );

    const photo = Math.floor(Math.random() * (max - min) + min);

    const fontBlack = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    const fontWhite = await jimp.loadFont(jimp.FONT_SANS_32_WHITE);
    const image = await jimp.read(randomPhoto[photo]);

    const resizeImage = image.resize(500, 500);

    if (photo === 0) {
      resizeImage.print(fontBlack, 10, 450, message).write(writePath);

      return writePath;
    }

    if (photo === 3 || photo === 6 || photo === 9) {
      resizeImage.print(fontWhite, 10, 10, message).write(writePath);

      return writePath;
    }
    resizeImage.print(fontBlack, 10, 10, message).write(writePath);

    return writePath;
  }
}

module.exports = GenerateImageWithTextService;
