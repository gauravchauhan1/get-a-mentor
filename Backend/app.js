import express from "express";
import menteeApiController from "./Controller/menteeApiController.js";
import MentorApiController from "./Controller/mentorApiController.js";
import dotnet from "dotenv";
import cors from "cors";
import AppError from "./utils/appError.js";

const app = express();
app.use(cors());
app.use(express.json());
dotnet.config();

const port = process.env.PORT || 5000;

app.use(menteeApiController);
app.use(MentorApiController);
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
