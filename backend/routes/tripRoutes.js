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

// UPDATE TRIP
router.put("/trips/:id", authMiddleware, async (req, res) => {

  try {

    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTrip);

  } catch (error) {

    res.status(500).json({ message: "Update failed" });

  }

});

// DELETE TRIP
router.delete("/trips/:id", authMiddleware, async (req, res) => {

  try {

    await Trip.findByIdAndDelete(req.params.id);

    res.json({ message: "Trip deleted" });

  } catch (error) {

    res.status(500).json({ message: "Delete failed" });

  }

});

export default router;