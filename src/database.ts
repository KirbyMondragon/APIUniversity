// src/database.ts
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://137.184.5.176/folios");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;