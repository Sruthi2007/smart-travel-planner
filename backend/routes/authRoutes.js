import express from "express";
import User from "../models/User.js"; // Import the User model
const router=express.Router();
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid password" });
  }

  res.json({ message: "Login successful", user });
});

router.post("/register",async(req,res)=>{
  const {name,email,password}=req.body;
   const newUser = new User({
    name,
    email,
    password,
  });

  await newUser.save();

  res.json({ message: "User registered successfully" });
});

export default router;