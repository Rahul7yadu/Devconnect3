const mongoose = require("mongoose");
const config = require("config");
const db = process.env.mongoUri;

mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("db connected");
  } catch (e) {
    process.exit(1);
  }
};

module.exports = connectDb;
