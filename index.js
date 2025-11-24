import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/conectDb.js";
import studentRoutes from "./routes/students.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
dotenv.config();
const app = express();

// Connect Database
connectDb();

// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/students", studentRoutes);

app.use(errorHandler);

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
