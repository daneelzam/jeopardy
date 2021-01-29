const express = require('express')
const { Config } = require('./middleware/index')
const authRouter = require('./routes/auth')
const gameRouter = require('./routes/game')
const app = express()

Config(app)

app.use('/api/auth', authRouter)
app.use('/api', gameRouter)

module.exports = app
