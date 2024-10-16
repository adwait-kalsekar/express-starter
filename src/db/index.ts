import mongoose from "mongoose";

import { MONGODB_URL } from "../constants";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${MONGODB_URL}`);
    console.log(`MongoDB Connected \n${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error", error);
    process.exit(1);
  }
};

export default connectDB;
