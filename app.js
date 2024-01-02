const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
mongooseConnect().catch((err) => console.log(err));

async function mongooseConnect() {
  await mongoose.connect(MONGODB_URI);

  const cardSchema = new mongoose.Schema({
    term: String,
    definition: String,
  });

  const Card = mongoose.model('Card', cardSchema);

  const exampleCard = new Card({ term: 'a', definition: 'one' });
  await exampleCard.save();
}

console.log(`Connected to ${MONGODB_URI}`);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
