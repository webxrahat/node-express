import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/conectDb.js";
import studentRoutes from "./routes/students.routes.js";
dotenv.config();
const app = express();

// Connect Database
connectDb();

// MiddleWare
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
