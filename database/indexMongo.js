const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/todoList'
);

const db = mongoose.connection;

db.on('end', console.error.bind(console, 'CONNECTION ERROR'));

db.once('open', () => {
  console.log('CONNECTED TO DATABASE');
})

module.exports = db;