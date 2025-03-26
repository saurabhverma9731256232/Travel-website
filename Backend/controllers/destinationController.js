import {Destination} from "../models/Destination.js";


// get all destinations
export const getDestinations = async (req,res) =>{
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);

    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

// Add a new destination

export const addDestination = async (req,res) =>{
    try {
        const{name,location,description,price,image} = req.body;
        const newDestination = new Destination({name,location,description,price,image});
        await newDestination.save();
        res.status(200).json({message:"Destination added successfully"});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};
