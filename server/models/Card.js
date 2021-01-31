const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
