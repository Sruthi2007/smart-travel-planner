
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();     // Load environment variables from .env file

mongoose.connect(process.env.MONGO_URI) 
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err)); // Connect to MongoDB

const app=express();          // Create an Express application
app.use(cors());              // Enable CORS for all routes
app.use(express.json());       // Middleware to parse JSON bodies
app.get("/",(req,res)=>{                    // Test route
    res.send("Server is running");
});
const PORT=5000;       // Define the port number
app.use("/api", authRoutes);    // Use auth routes with /api prefix
app.listen(PORT,()=>{               // Start the server
    console.log(`Server is running on port ${PORT}`);
});