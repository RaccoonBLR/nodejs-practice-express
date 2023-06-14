const Jimp = require("jimp");

const avatarHandler = async (path) => {
  await Jimp.read(path).then((image) => {
    image.resize(250, 250).write(path);
  });
};

module.exports = avatarHandler;
