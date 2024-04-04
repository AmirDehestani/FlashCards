const express = require('express');
const decksRouter = express.Router();
const Deck = require('../models/deck'); // Get mongoose model
const User = require('../models/user'); // Get mongoose model
const jwt = require('jsonwebtoken');

// TODO: Ensure authorization for all endpoints

const getTokenFrom = (req) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.split(' ')[1];
  }
  return null;
};

// Get all decks
decksRouter.get('/', async (req, res) => {
  try {
    const decks = await Deck.find().sort({ createdAt: -1 });
    res.json(decks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one deck
decksRouter.get('/:id', async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id);
    res.json(deck);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Add deck
decksRouter.post('/', async (req, res) => {
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

    const deck = new Deck({
      name: req.body.name,
      owner: user._id,
    });

    const newDeck = await deck.save();
    user.decks = user.decks.concat(newDeck._id);
    await user.save();
    res.status(201).json(newDeck);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete deck
decksRouter.delete('/:id', async (req, res) => {
  try {
    const deletedDeck = await Deck.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedDeck);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update deck
decksRouter.put('/:id', async (req, res) => {
  try {
    req.body.lastUpdated = new Date();
    const updatedDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // ensures that the updated deck is returned instead of the original one
    });
    res.status(201).json(updatedDeck);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = decksRouter;
