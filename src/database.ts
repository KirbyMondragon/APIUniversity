// src/database.ts
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://mongo:IPDjzGBqrOpaWkQlIsHqoXKMllMXimdR@monorail.proxy.rlwy.net:36004");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
