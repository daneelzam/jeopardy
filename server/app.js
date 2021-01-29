const express = require('express')
const { Config } = require('./middleware/index')
const authRouter = require('./routes/auth')
const app = express()

Config(app)

app.use('/api/auth', authRouter)

module.exports = app
