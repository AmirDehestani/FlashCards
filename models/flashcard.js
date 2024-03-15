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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
