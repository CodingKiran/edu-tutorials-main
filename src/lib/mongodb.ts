import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI as string;

export async function connectDB() {
  try {
    mongoose.connect(MONGO_URI);
    mongoose.connection.on("connected", () => {
      console.log("mongoDB connected");
    });
  } catch (error) {
    console.log(error);
  }
}
