const mongoose = require('mongoose');

connectDB = async () => {
  const URI = process.env.MONGO_URI;

  try {
    const conn = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(`failed`);
    console.error(`Error ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
