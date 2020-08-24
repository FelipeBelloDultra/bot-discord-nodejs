const jimp = require('jimp');
const path = require('path');

async function generateImage(message) {
  const max = 5;
  const min = 1;
  const writePath = path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    'uploads',
    'image.png',
  );
  const photo = Math.floor(Math.random() * (max - min + 1) + min);

  const fontBlack = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
  const fontWhite = await jimp.loadFont(jimp.FONT_SANS_32_WHITE);
  const image = await jimp.read(
    path.resolve(__dirname, '..', '..', 'tmp', `${photo}.png`),
  );

  const resizeImage = image.resize(500, 500);

  if (photo === 1) {
    resizeImage.print(fontBlack, 10, 450, message).write(writePath);

    return writePath;
  }

  if (photo === 4) {
    resizeImage.print(fontWhite, 10, 10, message).write(writePath);

    return writePath;
  }
  resizeImage.print(fontBlack, 10, 10, message).write(writePath);

  return writePath;
}

module.exports = generateImage;
