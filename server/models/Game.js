const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  date: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  gain: Number,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
