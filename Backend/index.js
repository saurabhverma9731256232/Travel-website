import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import destinationRoutes from './routes/destinationRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js'


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
});

const PORT = process.env.PORT || 5000;

app.use('/api/auth',authRoutes);
app.use('/api/booking',bookingRoutes);
app.use('/api/destination',destinationRoutes);
app.use('/api/review',reviewRoutes);


app.get('/',(req,res)=>{
    res.send("Travel  website backend is running...");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port at http://localhost:${PORT}`);
});