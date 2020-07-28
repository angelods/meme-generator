const generator = require('./src/generator')
const express = require('express');
const app = express();
app.use(express.json());

app.post('/generate', function (req, res) {
  const topText = req.body.top_text;
  const bottomText = req.body.bottom_text;
  const imageUrl = req.body.image_url;
  if (!topText || !bottomText) {
    res.status(400).send('missing parameters, `top_text` and `bottom_text` are mandatory')
  }
  generator.generate(topText, bottomText, imageUrl)
    .then( data => {
      res.set('Content-Type', 'image/png');
      res.send(data);
    })
    .catch( error => {
      console.log(error);
      res.status(500).send('Something went wrong');
    });
});

app.listen(3000, () => console.log(`Listening on ${ 3000 }`));
