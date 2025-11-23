import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/conectDb.js";
dotenv.config();
const app = express();

// Connect Database
connectDb();

// MiddleWare
app.use(express.json());

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
