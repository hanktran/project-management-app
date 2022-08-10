import mongoose from "mongoose";

const connectDB = async () => {
  const db = await mongoose.connect(process.env.MONGODB_URI!);
  console.log(`MongoDB Connected: ${db.connection.host}`);
};

export default connectDB;
