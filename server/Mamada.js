const mongoose = require('mongoose');
const { Schema } = mongoose;

const MamadaSchema = new Schema({
  time: {
    type: String,
    required: true
  },
  depth: {
    type: String,
  },
  inverted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('mamada', MamadaSchema);
