import React, { useEffect, useState } from "react";
import axios from "axios";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/destinations")
      .then((response) => setDestinations(response.data))
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Top Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div key={destination._id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">{destination.name}</h3>
            <p className="text-gray-600">{destination.location}</p>
            <p className="mt-2">{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
