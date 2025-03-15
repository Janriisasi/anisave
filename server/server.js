import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Allows parsing JSON data
app.use(cookieParser()); // Allows parsing cookies	
app.use(cors({credentials: true})); // Enables frontend-backend communication

//api endpoints
app.get("/", (req, res) => res.send("API is working!")); // Test Route
app.use("/api/auth", authRouter); // Auth Routes
// Start Server
const port = 4000; // create a port variable

connectDB(); //maggwa ni sa output if connected d ang database

// listen to our server on our localhost
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})