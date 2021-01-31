const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,
  answer: String,
  cost: Number,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
