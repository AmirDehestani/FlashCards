const express = require('express');
const usersRouter = express.Router();
const User = require('../models/user'); // Get mongoose model
const bcrypt = require('bcrypt');

usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('cards');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

usersRouter.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    if (
      err.name === 'MongoServerError' &&
      err.message.includes('E11000 duplicate key error')
    ) {
      res
        .status(400)
        .json({ message: 'expected `username` and `e-mail` to be unique' });
    }
    res.status(500).json({ message: err.message });
  }
});

usersRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user == null) {
      return res.status(404).send('User not found');
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success');
    } else {
      res.send('Access denied');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = usersRouter;
