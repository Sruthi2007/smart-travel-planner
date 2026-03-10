import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditTrip() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {

    const fetchTrip = async () => {

      const res = await api.get("/trips");

      const trip = res.data.find(t => t._id === id);

      if (trip) {
        setTitle(trip.title);
        setDestination(trip.destination);
        setStartDate(trip.startDate);
        setEndDate(trip.endDate);
        setNotes(trip.notes);
      }

    };

    fetchTrip();

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(`/trips/${id}`, {
        title,
        destination,
        startDate,
        endDate,
        notes,
      });

      alert("Trip updated!");

      navigate("/dashboard");

    } catch {

      alert("Update failed");

    }

  };

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">Edit Trip</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="text"
          value={destination}
          onChange={(e)=>setDestination(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="date"
          value={startDate}
          onChange={(e)=>setStartDate(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="date"
          value={endDate}
          onChange={(e)=>setEndDate(e.target.value)}
          className="border p-2 w-full"
        />

        <textarea
          value={notes}
          onChange={(e)=>setNotes(e.target.value)}
          className="border p-2 w-full"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Trip
        </button>

      </form>

    </div>

  );

}

export default EditTrip;