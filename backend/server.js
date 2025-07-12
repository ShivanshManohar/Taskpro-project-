import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js"; // ✅ import your routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ parse JSON requests

// ✅ this is the exact base route you must expose
app.use("/api/tasks", taskRoutes); 

// test route
app.get("/", (req, res) => res.send("API is running..."));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port", process.env.PORT || 5000);
    });
  })
  .catch(err => console.error("DB connection failed:", err));
