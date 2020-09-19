const jimp = require('jimp');
const path = require('path');

const randomPhoto = require('../../../utils/randomPhoto');

class GenerateImageWithTextService {
  async execute(message) {
    const max = randomPhoto.length;
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

    const fontBlack = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    const fontWhite = await jimp.loadFont(jimp.FONT_SANS_32_WHITE);
    const image = await jimp.read(randomPhoto[photo]);

    const resizeImage = image.resize(500, 500);

    // Text down
    if (photo === 0 || photo === 7) {
      resizeImage.print(fontBlack, 10, 450, message, 400).write(writePath);

      return writePath;
    }

    // Text up and white
    if (photo === 3 || photo === 6 || photo === 9 || photo === 15) {
      resizeImage.print(fontWhite, 10, 10, message, 400).write(writePath);

      return writePath;
    }

    // Text down and white
    if (
      photo === 12 ||
      photo === 13 ||
      photo === 14 ||
      photo === 16 ||
      photo === 18
    ) {
      resizeImage.print(fontWhite, 10, 450, message, 400).write(writePath);

      return writePath;
    }

    resizeImage.print(fontBlack, 10, 10, message, 400).write(writePath);

    return writePath;
  }
}

module.exports = GenerateImageWithTextService;
