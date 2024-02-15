const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
