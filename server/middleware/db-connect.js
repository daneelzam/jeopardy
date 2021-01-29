const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const local = "mongodb://localhost:27017/MyOwnGame";
const global = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4ufny.mongodb.net/${process.env.DB_NAME}`
const dbConnect = () => {
  mongoose.connect(global, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
module.exports = { dbConnect }
