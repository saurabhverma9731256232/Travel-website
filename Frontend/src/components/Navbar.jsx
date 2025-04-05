import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Link to="/" className="text-2xl font-bold">TravelApp</Link>
      <div className="space-x-4">
        <Link to="/destinations" className="hover:underline">Destinations</Link>
        <Link to="/addDestination" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">
          Add Destination
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/bookings" className="hover:underline">Bookings</Link>
            <button onClick={handleLogout} className=" px-3 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
