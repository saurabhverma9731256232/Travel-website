import React, { useEffect, useState } from "react";
import axios from "axios";
import DestinationCard from "../components/DestinationCard";

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
          <DestinationCard 
            key={destination._id} 
            id={destination._id} 
            name={destination.name} 
            location={destination.location} 
            description={destination.description} 
            image={destination.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
