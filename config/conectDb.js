import mongoose from "mongoose";

// Connect MongoDB at default port 27017.

export const connectDb = async () => {
  const mongoUri = process.env.MONGO_URI;

  try {
    const result = await mongoose.connect(mongoUri);
    if (result) {
      console.log("Database connect successfully");
    }
  } catch (error) {
    console.log("Database Does not connect");
  }
};
