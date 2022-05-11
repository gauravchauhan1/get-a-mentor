import express from "express";
import Authentication from "../Middleware/Authentication.js";
import mentorApiController from "../Controller/mentorApiController.js";
import upload from "multer";

const router = express.Router();
const signUp = mentorApiController.signUp;
const signIn = mentorApiController.signIn;
const signOut = mentorApiController.signOut;
const createCourse = mentorApiController.createCourse;
const addVideo = mentorApiController.addVideos;
const MentorToken = Authentication.mentorToken;

router.post("/mentor/signUp", signUp);
router.post("/mentor/signIn", signIn);
router.delete("/mentor/signOut", MentorToken, signOut);
router.post("/createCourse", MentorToken, createCourse);
router.post(
  "/addVideo/:courseId",
  upload().single("video"),
  MentorToken,
  addVideo
);

export default router;
