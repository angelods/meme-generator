const generator = require('./src/generator');
const Prompt = require('prompt-base');
const fs = require('fs');

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
    return generator.generate(topText, bottomText, imageUrl)
  })
  .then( data => {
    fs.writeFileSync('./meme.png', data);
  })
  .catch( error => console.error(error));
