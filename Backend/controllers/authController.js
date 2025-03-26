 import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {User} from '../models/User.js';

export const registerUser = async (req,res) =>{
try {
    const {name,email,password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password,12);
    const user = new User({name,email,password:hashedPassword});
    await user.save();
    res.status(200).json({message:"User registered successfully"});
} catch (error) {
    res.status(400).json({error : error.message});
}
};

//Login user
export const loginUser = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({message:"User does not exist"});
        }
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = jwt.sign({email:existingUser.email,id:existingUser._id},process.env.JWT_SECRET,{expiresIn:"1d"});
        res.status(200).json({result:existingUser,token});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
    };