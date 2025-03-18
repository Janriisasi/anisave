import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    user = new User({ fullName, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
	const { email, password } = req.body;
  
	try {
	  let user = await User.findOne({ email });
	  if (!user) return res.status(400).json({ message: "User not found" });
  
	  const isMatch = await bcrypt.compare(password, user.password);
	  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
		
	  console.log("JWT_SECRET:", process.env.JWT_SECRET);

	  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
	  res.json({ token, user: { id: user._id, fullName: user.fullName, email: user.email } });
	} catch (error) {
	  console.error("Login Error:", error);  // Log error in server console
	  res.status(500).json({ message: "Server Error", error: error.message });
	}
  });
  
  
export default router;