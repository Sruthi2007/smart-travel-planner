import api from "../services/api";
import { Link } from "react-router-dom";
function TripCard({ trip, refreshTrips }) {

  const handleDelete = async () => {

    if (!window.confirm("Delete this trip?")) return;

    try {

      await api.delete(`/trips/${trip._id}`);

      refreshTrips();

    } catch {

      alert("Delete failed");

    }

  };

  return (

    <div className="border rounded-lg p-4 shadow-md bg-white">

      <h2 className="text-xl font-bold">{trip.title}</h2>

      <p className="text-gray-600">{trip.destination}</p>

      <p className="text-sm mt-2">
        {trip.startDate} → {trip.endDate}
      </p>

      <p className="mt-2">{trip.notes}</p>

      <div className="flex gap-3 mt-4">

        <Link
                to={`/edit-trip/${trip._id}`}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>

    </div>

  );

}

export default TripCard;