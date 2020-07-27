#!/usr/bin/env node
const memeLib = require('nodejs-meme-generator');
const fs = require('fs');

const memeGenerator = new memeLib({
  canvasOptions: { // optional
    canvasWidth: 500,
    canvasHeight: 500
  },
  fontOptions: { // optional
    fontSize: 46,
    fontFamily: 'impact',
    lineHeight: 2
  }
});

console.log(process.argv);
const [executor, index, imageUrl, topText, bottomText] = process.argv;
memeGenerator.generateMeme({
  // you can use either topText or bottomText
  // or both of them at the same time
  topText: topText,
  bottomText: bottomText,
  url: 'https://i.imgur.com/7FHoSIG.png'
})
  .then(function(data) {
    fs.writeFileSync('./meme.png', data);
    return;
  });