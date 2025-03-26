import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TravelSite</Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
        <ul className={`md:flex md:space-x-6 absolute md:static w-full md:w-auto bg-blue-600 md:bg-transparent ${isOpen ? "block" : "hidden"}`}>
          <li><Link to="/" className="block p-3">Home</Link></li>
          <li><Link to="/destinations" className="block p-3">Destinations</Link></li>
          <li><Link to="/bookings" className="block p-3">Bookings</Link></li>
          <li><Link to="/login" className="block p-3">Login</Link></li>
          <li><Link to="/register" className="block p-3">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
