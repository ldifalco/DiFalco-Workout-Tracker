const { connect, connection } = require('mongoose');


const connectString =
  process.env.MONGODB_URI || 'mongodb://localhost/workout';

connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;