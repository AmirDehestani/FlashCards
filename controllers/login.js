const express = require('express');
const loginRouter = express.Router();
const User = require('../models/user'); // Get mongoose model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

loginRouter.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user == null) {
      return res.status(404).send('User not found');
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      const userForToken = {
        username: user.username,
        id: user._id,
      };
      const accessToken = jwt.sign(
        userForToken,
        process.env.ACCESS_TOKEN_SECRET
      );
      res
        .status(200)
        .send({ accessToken, username: user.username, name: user.name });
    } else {
      return res.status(401).json({
        error: 'Invalid password',
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = loginRouter;
