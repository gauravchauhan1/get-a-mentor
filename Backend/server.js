import express from "express";
import mongooseConnection from "./DB/index.js";
import router from "./Routes/route.js";
import dotnet from 'dotenv';

const app = express();
app.use(express.json());



const port = process.env.PORT || 5000;

app.use("/", router);

app.all("*", (req, res) => {
  res.send("Invalid Request. Please contact Adminitstrator.");
});

const initializeServer = async () => {
  await mongooseConnection();
  app.listen(port, (err) => {
    console.log(`http://localhost:${port}`);
    if (err) {
      console.log(`Error Starting Application Server`);
    }
  });
};

initializeServer();
