import {Review} from '../models/Review.js'

// get all reviews

export const getReviews = async (req,res) =>{
    try {
        const reviews = await Review.find({destinationId:req.params.destinationId}).populate("userId","name");
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

// Add a new review

export const addReview = async (req,res) =>{
    try {
        const {userId,destinationId,comment,rating} = req.body;
        const newReview = new Review({userId,destinationId,comment,rating});
        await newReview.save();
        res.status(200).json({message:"Review added successfully"});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};