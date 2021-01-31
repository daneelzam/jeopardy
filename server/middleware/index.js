const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const dotenv = require('dotenv');
const { dbConnect } = require('./db-connect');

const Config = function (app) {
  dotenv.config();
  app.use(cors());

  dbConnect();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());
  app.use(
    session({
      store: new FileStore(),
      key: 'auth',
      secret: 'JD@JFHF&JkdfjfjfjfKD%KFKFJR*FjdjdJDJD',
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 6000000,
        httpOnly: true,
      },
    }),
  );
};

module.exports = { Config };
