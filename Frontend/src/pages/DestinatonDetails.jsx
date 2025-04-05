import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const placeholderImage = "https://via.placeholder.com/600x400?text=No+Image";

  useEffect(() => {
    axios.get(`http://localhost:5000/api/destinations/${id}`)
    
      .then((response) => setDestination(response.data))
      .catch((error) => console.error("Error fetching destination:", error));
  }, [id]);

  if (!destination) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={destination.image || placeholderImage} 
          alt={destination.name} 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{destination.name}</h1>
          <p className="text-gray-500">{destination.location}</p>
          <p className="mt-4 text-gray-700">{destination.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
