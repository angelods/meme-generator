## README

This package is a meme generator

The generator can be booted:
 - as CLI by running `bin/task run-prompt` , follow the instructions in order to provide the needed data
 - as http server by running `bin/task run-server`: the server will run on port 3000 and will expose a `POST /generate` endpoint that accept the following parameters:
 ```$xslt
top_text: top text of the meme (mantatory)
bottom_text: bottom text of the meme (mantatory)
image_url: meme base (optional)
```
In both cases, if no image will be provided the service will fallback to https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg

NB: the image url should refer to a public image

Enjoy ;) 
