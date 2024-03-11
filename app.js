require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');

// Load all enviornment variables
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// Connnect to MongoDB
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to MongoDB database'));

// Middewares
app.use(express.json()); // Allows app to use JSON

// Routes
const flashcardsRouter = require('./routes/flashcards');
app.use('/flashcards', flashcardsRouter);
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
