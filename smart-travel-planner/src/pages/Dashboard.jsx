/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import api from "../services/api";
import TripCard from "../components/TripCard";
import { Link } from "react-router-dom";

function Dashboard() {

  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {

    const res = await api.get("/trips");

    setTrips(res.data);

  };

  useEffect(() => {

    fetchTrips();

  }, []);

  return (

    <div className="p-10">

      <div className="flex justify-between mb-6">

        <h1 className="text-2xl font-bold">My Trips</h1>

        <Link
          to="/create-trip"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Trip
        </Link>

      </div>

      <div className="grid grid-cols-3 gap-6">

        {trips.map((trip) => (

          <TripCard
            key={trip._id}
            trip={trip}
            refreshTrips={fetchTrips}
          />

        ))}

      </div>

    </div>

  );

}

export default Dashboard;