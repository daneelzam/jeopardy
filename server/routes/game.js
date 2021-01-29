const express = require('express')
const router = express.Router()
const Card = require('../models/Card');
const Question = require('../models/Question');

router.get('/game', async (req, res) => {
  const cards = await Card.find({}).populate('questions')
  const frontCards = cards.map(card => {
    const newQ = card.questions.map(quest => ({cost: quest.cost, title: quest.title, id: quest._id}))
    return {id: card._id, title: card.title, ...card[0], questions: newQ}
  })
  res.json({frontCards})
})

module.exports =router