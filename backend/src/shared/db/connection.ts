import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@to-do-list-cluster.wzuilze.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connect to MongoDB");
  } catch (err) {
    throw err;
  }
};
