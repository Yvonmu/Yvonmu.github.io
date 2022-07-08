import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI;

const connectDb = () => {
  try {
    mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("db connected..!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
