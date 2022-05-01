import mongoose from 'mongoose';
import express from 'express';


const uri = 'mongodb+srv://ashishad:GwMAvz439VZHeEVx@cluster0.6ymzo.mongodb.net/School-Management-System?retryWrites=true&w=majority';
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