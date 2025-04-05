import React from "react";
import { Link } from "react-router-dom";


const DestinationCard = ({ destination = {} }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={destination?.image || "https://via.placeholder.com/400x300?text=No+Image"}
        alt={destination?.name || "Destination"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{destination?.name || "Unknown Destination"}</h3>
        <p className="text-gray-600">{destination?.location || "Unknown Location"}</p>
        <p className="mt-2">{destination?.description ? destination.description.substring(0, 80) + "..." : "No description available."}</p>
        <p className="font-bold text-blue-600 mt-2">${destination?.price || "N/A"}</p>
        {destination?._id && (
          <Link
            to={`/destination/${destination._id}`}
            className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Explore
          </Link>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;
