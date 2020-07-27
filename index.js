#!/usr/bin/env node
const memeLib = require('nodejs-meme-generator');
const fs = require('fs');
const Prompt = require('prompt-base');

const topTextPrompt = new Prompt({
  message: 'Enter the top text of the meme',
  name: 'top'
});
const bottomTextPrompt = new Prompt({
  message: 'Enter the bottom text of the meme',
  name: 'bottom'
});
const imageUrlPrompt = new Prompt({
  message: 'Enter the image url',
  name: 'url'
});


const memeGenerator = new memeLib({
  canvasOptions: { // optional
    canvasWidth: 500,
    canvasHeight: 500
  },
  fontOptions: { // optional
    fontSize: 26,
    fontFamily: 'impact',
    lineHeight: 2
  }
});

let topText = '';
let bottomText = '';
let imageUrl = '';
topTextPrompt.run()
  .then( topTextInput => {
    topText = topTextInput;
    return bottomTextPrompt.run();
  })
  .then( bottomTextInput => {
    bottomText = bottomTextInput;
    return imageUrlPrompt.run();
  })
  .then( imageUrlInput => {
    imageUrl = imageUrlInput;
    return memeGenerator.generateMeme({
      topText: topText,
      bottomText: bottomText,
      url: 'https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg'
    });
  })
  .then( data => {
    fs.writeFileSync('./meme.png', data);
    return;
  })
  .catch( error => console.error(error));