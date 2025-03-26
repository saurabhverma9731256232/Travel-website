import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    destinationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Destination",
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    }
},{timestamps:true});

export const Review  = mongoose.model("Review",reviewSchema);