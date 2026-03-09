import express from "express";
import Trip from "../models/Trip.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// CREATE TRIP
router.post("/trips", authMiddleware, async (req, res) => {
  try {

    const { title, destination, startDate, endDate, notes } = req.body;

    const trip = new Trip({
      userId: req.user.id,
      title,
      destination,
      startDate,
      endDate,
      notes,
    });

    await trip.save();

    res.json({ message: "Trip created", trip });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// GET USER TRIPS
router.get("/trips", authMiddleware, async (req, res) => {

  const trips = await Trip.find({ userId: req.user.id });

  res.json(trips);

});

export default router;