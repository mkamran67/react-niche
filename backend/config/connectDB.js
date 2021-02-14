const mongoose = require('mongoose');

connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
