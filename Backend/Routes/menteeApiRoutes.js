import express from 'express';
import menteeApiController from '../Controller/menteeApiController';
import MenteeApiController from '../Controller/menteeApiController';
import MenteeToken from '../Middleware/Authentication';

const router = express.router;
const signIn = menteeApiController.signIn;
const signOut = menteeApiController.signOut; 
const signUp = menteeApiController.signUp;
const getCourses = menteeApiController.getCourses;
const getParticularCourse = menteeApiController.getParticularCourse;
const buyCourse = menteeApiController.buyCourse;
const getUserData = menteeApiController.getUserData;

router.post('/consumer/signUp', signUp)
router.post('/consumer/signIn', signIn)
router.delete('/consumer/signOut', consumerToken, signOut)
router.get('/getallCourses', getCourses)
router.get('/getParticularCourse/:courseId', getParticularCourse)
router.post('/buyCourse/:courseId', consumerToken, buyCourse)
router.get('/getUserData', getUserData)

export default router;