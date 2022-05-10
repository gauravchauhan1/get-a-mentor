import express from "express";
import menteeApiController from "../Controller/menteeApiController.js";
import Authentication from "../Middleware/Authentication.js";

const router = express.Router();
const signIn = menteeApiController.signIn;
const signOut = menteeApiController.signOut;
const signUp = menteeApiController.signUp;
const getCourses = menteeApiController.getCourses;
const getParticularCourse = menteeApiController.getParticularCourse;
const buyCourse = menteeApiController.buyCourse;
const getUserData = menteeApiController.getUserData;
const MenteeToken = Authentication.menteeToken;

router.post("/mentee/signUp", signUp);
router.post("/mentee/signIn", signIn);
router.delete("/mentee/signOut", MenteeToken, signOut);
router.get("/getallCourses", getCourses);
router.get("/getParticularCourse/:courseId", getParticularCourse);
router.post("/buyCourse/:courseId", MenteeToken, buyCourse);
router.get("/getUserData", getUserData);

export default router;
