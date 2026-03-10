import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateTrip() {

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await api.post("/trips", {
        title,
        destination,
        startDate,
        endDate,
        notes,
      });

      alert("Trip created!");
      navigate("/dashboard");

      setTitle("");
      setDestination("");
      setStartDate("");
      setEndDate("");
      setNotes("");

    } catch {
      alert("Failed to create trip");
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">Create Trip</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Trip Title"
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Destination"
          className="border p-2 w-full"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 w-full"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 w-full"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <textarea
          placeholder="Notes"
          className="border p-2 w-full"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Trip
        </button>

      </form>

    </div>
  );
}

export default CreateTrip;