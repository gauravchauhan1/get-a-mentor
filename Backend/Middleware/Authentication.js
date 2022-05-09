import jwt from 'jsonwebtoken';
import mentor from '../Models/Mentor.js';
import mentee from '../Models/Mentee.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import dotnet from 'dotenv';

dotnet.config();

const privatekey = process.env.privatekey;
const verify = jwt.verify;


const Authentication = {
    mentorToken : catchAsync( async (req, res, next) => {
        const token = req.headers.authorization
        if(!token) return next(new AppError('token needed', 400 ))
        const foundUser = await mentor.findOne({accessToken : token})
        if(!foundUser) return next(new AppError('invalid credentials', 400 ))
        verify(token, privatekey, (err, _)=>{
            if(err && err.name == 'JsonWebTokenError') return next(new AppError('invalid credentials', 400 ))
            else if(err && err.name == 'TokenExpiredError') return next(new AppError('token expired', 400 ))
            next()
        })    
    }),

    menteeToken : catchAsync( async (req, res, next) => {
        const token = req.headers.authorization
        if(!token) return next(new AppError('token needed', 400 ))
        const foundUser = await mentee.findOne({accessToken : token})
        if(!foundUser) return next(new AppError('invalid credentials', 400 ))
        verify(token, privatekey, (err, _)=>{
            if(err && err.name == 'JsonWebTokenError') return next(new AppError('invalid credentials', 400 ))
            else if(err && err.name == 'TokenExpiredError') return next(new AppError('token expired', 400 ))
            next()
        })    
    })
}

export default Authentication;