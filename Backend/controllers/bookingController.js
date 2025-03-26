import {Booking} from '../models/Booking.js';

// Get all bookings

export const getBookings = async (req,res) =>{
    try {
        const bookings = await Booking.find().populate("userId destinationId");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

// Add a new booking

export const addBooking = async (req,res) =>{
    try {
        const {userId,destinationId, bookingId,date,guests} = req.body;
        const newBooking = new Booking({userId,destinationId, bookingId,date,guests});
        await newBooking.save();
        res.status(200).json({message:"Booking added successfully"});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};