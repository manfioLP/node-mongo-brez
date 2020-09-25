FROM node:11-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 1337

CMD nodemon -L --watch . index.js
