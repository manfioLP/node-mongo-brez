const express = require('express');
const router = express.Router();

const Mamada = require('./Mamada');

router.post('/mamada', (req, res) => {
  const mamada = new Mamada({
    depth: req.body.depth,
    duration: req.body.time
  });

  mamada
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
