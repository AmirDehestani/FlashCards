const express = require('express');
const flashcardsRouter = express.Router();
const Card = require('../models/flashcard');
const User = require('../models/user');
const Deck = require('../models/deck');
const jwt = require('jsonwebtoken');

// TODO: Ensure authorization for all endpoints

const getTokenFrom = (req) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.split(' ')[1];
  }
  return null;
};

// Get all cards
flashcardsRouter.get('/', async (req, res) => {
  try {
    const cards = await Card.find().populate('user').sort({ date: -1 });
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one card
flashcardsRouter.get('/:id', async (req, res) => {
  try {
    const card = await Card.findById(req.params.id).populate('user');
    res.json(card);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Add card
flashcardsRouter.post('/', async (req, res) => {
  try {
    // Decode JWT token
    const decodedToken = jwt.verify(
      getTokenFrom(req),
      process.env.ACCESS_TOKEN_SECRET
    );
    // Set user based on ID if it exists
    if (!decodedToken.id) {
      return res.status(401).json({ error: 'invalid token' });
    }
    const user = await User.findById(decodedToken.id);
    const deck = await Deck.findById(req.body.deckId);

    const card = new Card({
      term: req.body.term,
      definition: req.body.definition,
      user: user._id,
      deck: req.body.deckId,
    });

    const newCard = await card.save();
    user.cards = user.cards.concat(newCard._id);
    await user.save();
    deck.cards = deck.cards.concat(newCard._id);
    await deck.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete card
flashcardsRouter.delete('/:id', async (req, res) => {
  try {
    const deletedCard = await Card.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update card
flashcardsRouter.put('/:id', async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(updatedCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = flashcardsRouter;
