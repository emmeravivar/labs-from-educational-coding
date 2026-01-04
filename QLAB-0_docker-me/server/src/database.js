const mongoose = require('mongoose');
const User = require('./models/user.model');

const connection = 'mongodb://mongo:27017/dockerize-me';
// const connection = 'mongodb+srv://root:root@cluster0.i04c4yl.mongodb.net/';

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
