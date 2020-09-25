const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const mamada = require('./Mamada')

app.use(bodyParser.json());
app.use('/api/mamada', mamada)

mongoose
  .connect('mongodb://db:27017/breza-merdao', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('DB Connected');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(1337, () => console.log('breza merdao na 1337'));
