
import express from "express";
import menteeApiRoutes from "./Routes/menteeApiRoutes.js";
import mentorApiRoutes from "./Routes/mentorApiRoutes.js";
import dotnet from "dotenv";
import cors from "cors";
import AppError from "./utils/appError.js";
import bodyParser from "body-parser";
import errorHandler from "./Handler/errorHandler.js";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
dotnet.config();

app.use(menteeApiRoutes);
app.use(mentorApiRoutes);
app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(errorHandler);

app.all("*", (req, _, next) => {
  next(
    new AppError(`cannot find the route ${req.originalUrl} in the server`, 404)
  );
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

export default app;
