import express from 'express';
import { User_register } from '../Authenticity and Authorization/Authentication.js';

import {authenticate, register, getAll, getCurrent, getById, update,_delete} from '../controller/data_controller.js';

import {Image,Hello} from '../controller/data_controller.js';
import {Data_student,Data_teacher} from '../Models/data.model.js';


const router = express.Router();

// //router.get('/', Hello);
// //router.get('/Image', Image);
// //router.post('/register/mentee', registerMentee);
// //router.post('/create/mentor', registerMentor);
// router.get('/Student', Student_data);
// router.get('/Teacher', Teacher_data);
// //router.get('/Search/:name', search_student);
// //router.get('/Search/:names', search_teacher);
// router.post('/register', User_register);
// router.post('/login', User_login);


router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);




export default router;