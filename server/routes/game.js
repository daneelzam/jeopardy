/* eslint-disable no-underscore-dangle */
const express = require('express');

const router = express.Router();
const Card = require('../models/Card');
const Question = require('../models/Question');
const Game = require('../models/Game');
const User = require('../models/User');

router.get('/game', async (req, res) => {
  const cards = await Card.find({}).populate('questions');
  const frontCards = cards.map((card) => {
    const newQ = card.questions.map(
      (quest) => ({ cost: quest.cost, title: quest.title, id: quest._id }),
    );
    return {
      id: card._id, title: card.title, ...card[0], questions: newQ,
    };
  });
  res.json({ frontCards });
});

router.get('/games', async (req, res) => {
  const games = await Game.find().populate('user');
  res.json(games);
});

router.post('/game/:id', async (req, res) => {
  // получаем из тела запроса юзера и его ответ
  const { answer, user } = req.body;
  // получаем id вопроса
  const { id } = req.params;
  // находим вопрос среди нашей коллекции
  const dbUser = await User.findOne({ _id: user._id });
  const question = await Question.findOne({ _id: id });
  // ищем среди наших игр ту, которая закреплена за юзером
  let game = await Game.findOne({ user: dbUser._id });
  // если игры нет, то создаем новую
  if (!game) {
    game = await new Game({
      user: dbUser.id,
      score: 0,
    });
  }
  // отмечаем, что игрок сыграл этот вопрос
  game.status.push(question.id);
  // если ответ верный
  if (answer.trim().toLowerCase() === question.answer.trim().toLowerCase()) {
    // увеличиваем счет
    game.score += question.cost;
  }
  // сохраняем игру
  game.save();
  res.json({ score: game.score, status: game.status });
});

module.exports = router;
