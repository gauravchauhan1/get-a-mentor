import express from 'express';
import { User_register } from '../Authenticity and Authorization/Authentication.js';

import {Teacher_data,Student_data,registerMentee,registerMentor,search_student,search_teacher} from '../controller/data_controller.js';

import {Image,Hello} from '../controller/data_controller.js';
import {Data_student,Data_teacher} from '../Models/data.model.js';


const router = express.Router();

router.get('/', Hello);
router.get('/Image', Image);
//router.post('/register/mentee', registerMentee);
//router.post('/create/mentor', registerMentor);
router.get('/Student', Student_data);
router.get('/Teacher', Teacher_data);
//router.get('/Search/:name', search_student);
//router.get('/Search/:names', search_teacher);
router.post('/register', User_register);
router.post('/login', User_login);


export default router;