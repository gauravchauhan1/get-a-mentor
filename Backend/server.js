import express from "express";
import mongooseConnection from "./DB/index.js";
import router from "./Routes/route.js";
import dotnet from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());
dotnet.config();


const port = process.env.PORT || 5000;

app.use("/", router);
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended : true }));
app.use( bodyParser.json());
app.use(express.json());
app.use(errorHandler);

app.all("*", (req, res) => {
  res.send(`cannot find the route ${req.originalUrl} in the server`, 404);
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



