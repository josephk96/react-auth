const mongoose = require('mongoose');
require('dotenv').config();

const db = 'mongodb://localhost:27017/react-auth';
mongoose.set('useCreateIndex', true);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // eslint-disable-next-line
    console.log('MongoDB Connected!');
  } catch (err) {
    // eslint-disable-next-line
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
