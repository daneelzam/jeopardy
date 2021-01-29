const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body
  try {
    const user = new User({
      username,
      email,
      password: await bcrypt.hash(password, saltRounds)
    })
    await user.save()
    res.json({ status: true })
  } catch (error) {
    res.json(error.message)
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)
  const user = await User.findOne({ email })
  console.log(user)
  if(user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user
    res.json({ user })
  } else {
    res.json({ status: false })
  }
})

router.get('/logout', async (req, res) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie('auth');
    } catch (error) {}
  }
});

module.exports = router

