const Config = function(app) {
  const express = require('express')
  const cookieParser = require('cookie-parser')
  const session = require('express-session')
  const FileStore = require('session-file-store')(session)
  const { dbConnect } = require('./db-connect')
  
  dbConnect()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(cookieParser())
  app.use(
    session({
      store: new FileStore(),
      key: "auth",
      secret: "JD@JFHF&JkdfjfjfjfKD%KFKFJR*FjdjdJDJD",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 6000000,
        httpOnly: true
      }
    })
  )
}  

module.exports = { Config }
