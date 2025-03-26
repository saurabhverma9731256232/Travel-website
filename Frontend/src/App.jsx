import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import Destination from './pages/Destination';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
 

  return (
<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/destinations" element={<Destination/>}/>
    <Route path="/bookings" element={<Booking/>}/>
    <Route path="/login" element={<Login/>}/> 
    <Route path="/register" element={<Register/>}/>
  </Routes>
  </>
  )
}

export default App
