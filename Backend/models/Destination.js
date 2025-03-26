import mongoose from "mongoose";
 const destinationSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    image:{
        type:String,
        required : true,
    },
    description:{
        type:String,
        required : true,
    },
    location:{
        type:String,
        required : true,
    },
    rating:{
        type:Number,
        default:0,
    },
   
    price:{
        type:Number,
        required : true,
    },
  
 },{timestamps:true});

 export const Destination  = mongoose.model("Destination",destinationSchema);