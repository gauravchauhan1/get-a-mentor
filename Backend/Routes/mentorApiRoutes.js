import express from 'express';
import MentorToken from '../Middleware/Authentication';
import mentorApiController from '../Controller/mentorApiController';
import upload from 'multer';

const router = express.Router;
const signUp = mentorApiController.signUp;
const signIn = mentorApiController.signIn;
const signOut = mentorApiController.signOut;
const createCourse = mentorApiController.createCourse;
const addVideo = mentorApiController.addVideos;

router.post('/uploader/signUp', signUp);
router.post('/uploader/signIn', signIn);
router.delete('/uploader/signOut', MentorToken, signOut);
router.post('/createCourse', MentorToken, createCourse);
router.post('/addVideo/:courseId',upload().single('video'), uploaderToken, addVideos);

export default router;