const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Connnect to MongoDB
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

// Middewares
app.use(cors());
app.use(express.json()); // Allows app to use JSON

// Routes
const flashcardsRouter = require('./controllers/flashcards');
app.use('/flashcards', flashcardsRouter);
const usersRouter = require('./controllers/users');
app.use('/users', usersRouter);

app.listen(config.PORT, () => {
  console.log(`App listening on port ${config.PORT}`);
});
