const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: Number,
  status: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
