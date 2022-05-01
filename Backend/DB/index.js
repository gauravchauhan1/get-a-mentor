import mongoose from 'mongoose';
import express from 'express';
import dotnet from 'dotenv';

dotnet.config();
//const uri = 'mongodb://localhost:27017/get-a-mentor';
const app = express();
//password : GwMAvz439VZHeEVx


const mongooseConnection = async ()=>{
    try{
        await mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true});
        console.log("Connected to Database Successfully.")
    }catch(error){
        console.log("Error In Connecting to the DB - ", error);
    }
}

export default mongooseConnection;