import mongoose from "mongoose";
import express from "express";
import dotnet from "dotenv";

dotnet.config();
const uri = process.env.uri;
const app = express();

const mongooseConnection = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Connected to Database Successfully.");
  } catch (error) {
    console.log("Error In Connecting to the DB - ", error);
  }
};

export default mongooseConnection;
