import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoutes"; // Import Protected Route
import DestinationDetails from "./pages/DestinatonDetails";
import AddDestination from "./pages/AddDestination";

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/addDestination" element={<AddDestination/>}/>
        <Route path="/destination/:id" element={<DestinationDetails/>}/>


        {/* Protected Route: Booking only if logged in */}
        <Route element={<PrivateRoute />}>
          <Route path="/bookings" element={<Booking />} />
        </Route>

        {/* Redirect to Home if already logged in */}
        <Route
          path="/login"
          element={localStorage.getItem("token") ? <Home /> : <Login />}
        />
        <Route
          path="/register"
          element={localStorage.getItem("token") ? <Home /> : <Register />}
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
  );
}

export default App;
