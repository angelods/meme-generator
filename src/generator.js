const memeLib = require('nodejs-meme-generator');

const memeGenerator = new memeLib({
    canvasOptions: {
      canvasWidth: 500,
      canvasHeight: 500
    },
    fontOptions: {
      fontSize: 26,
      fontFamily: 'impact',
      lineHeight: 2
    }
  });
  
module.exports.generate = (topText, bottomText, url) => {
    return memeGenerator.generateMeme({
        topText: topText,
        bottomText: bottomText,
        url: url || 'https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg'
      });
}