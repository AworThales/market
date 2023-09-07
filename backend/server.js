import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();
dotenv.config();


const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONDB);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

app.listen(process.env.PORT || 5000, () =>{
    connect();
    console.log("backend Server is running")
});