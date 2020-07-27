FROM node:10.21.0-alpine as node

COPY . /meme-generator

WORKDIR /meme-generator

RUN apk add --no-cache build-base g++ cairo-dev jpeg-dev pango-dev imagemagick pkgconfig python giflib-dev fontconfig
RUN apk add --update  --repository http://dl-3.alpinelinux.org/alpine/edge/testing libmount ttf-dejavu ttf-droid ttf-freefont ttf-liberation ttf-ubuntu-font-family fontconfig


USER node
