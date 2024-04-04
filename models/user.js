const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requierd: true,
  },
  decks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deck',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
