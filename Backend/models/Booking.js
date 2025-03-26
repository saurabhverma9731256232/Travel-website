import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
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
    bookingDate:{
        type:Date,
        required:true
    },
    guests:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["pending","confirmed","cancelled"],
        default:"pending"
    }
},{timestamps:true});

export const Booking  = mongoose.model("Booking",bookingSchema);