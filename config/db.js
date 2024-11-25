const mongoose = require("mongoose");
console.log(process.env.mongoURI)
const db = process.env.mongoURI
const connectDb = async () => {
  try {
    await mongoose.connect(db);

    console.log("db connected");
  } catch (e) {
    
    throw new Error(e)
  }
};

module.exports = connectDb;
