import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-cover bg-center" 
         style={{ backgroundImage: "url(https://www.vecteezy.com/vector-art/4928975-travel-around-the-world-vector-landmark-design-famous-landmarks-around-the-world-elements-with-travel-vacation-text-in-blue-background-vector-illustration)" }}>
      
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center bg-black bg-opacity-75 p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold text-white">Discover Amazing Places</h1>
        <p className="text-white mt-3">
          Explore the world's best destinations with us.
        </p>
        <button className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold 
                           hover:bg-blue-700 transition duration-300 shadow-lg">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Home;
