import jwt from 'jsonwebtoken';
import dotnet from 'dotenv';
import Courses from '../Models/Courses';
import bufferToString from '../utils/bufferToString';
import createToken from '../utils/createToken';
import Mentor from '../Models/Mentor';
import cloudinary from '../utils/cloudinary';
import Videos from '../Models/Videos';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';

const verify = jwt.verify;
dotnet.config();
const privatekey = process.env.privatekey;

const MentorApiController = {
    signUp: catchAsync(async (req, res, next) => {
        const newMentor = await Mentor.create({ ...req.body })
        createToken(newMentor)
        await newMentor.save()
        res.status(200).json({
            status: 'success',
            user: 'Mentor',
            message: 'registered successfully',
            data: newMentor
        })
    }),

    signIn: catchAsync(async (req, res, next) => {
        const { email, password } = req.body
        const foundUser = await Mentor.findByEmailAndPassword(email, password)
        createToken(foundUser)
        foundUser.save()
        res.status(200).json({
            status: 'success',
            user: 'Mentor',
            message: 'loggedIn successfully',
            data: foundUser
        })
    }),

    signOut: async (req, res, next) => {
        const token = req.headers.authorization
        const foundUser = await Mentor.findOneAndUpdate({ accessToken: token }, { accessToken: null })
        if (!foundUser) return next(new AppError('invalid credentials', 400))
        return res.json({
            status: 'success',
            'message': 'loggedOut successfully'
        })
    },

    createCourse: catchAsync(async (req, res, next) => {
        const token = req.headers.authorization
        const decoded = await verify(token, privatekey)
        const newCourse = await Courses.create({ ...req.body, Mentor: decoded.id })
        await Mentor.findByIdAndUpdate(decoded.id, { $push: { courses: newCourse._id } })
        res.json({
            status: 'success',
            message: 'course created',
            data: newCourse
        })
    }),

    addVideos: catchAsync(async (req, res, next) => {
        const { originalname, buffer } = req.file
        const videoContent = bufferToString(originalname, buffer)
        const { secure_url } = await cloudinary.v2.Mentor.upload(
            videoContent,
            {
                resource_type: "video",
                chunk_size: 6000000,
                eager: [
                    { width: 300, height: 300, crop: "pad", audio_codec: "none" },
                    { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" }],
                eager_async: true,
                eager_notification_url: "https://mysite.example.com/notify_endpoint"
            })
        const courseId = req.params.courseId
        const newVideo = await Videos.create({ ...req.body, video: secure_url, course: courseId })
        await Courses.findByIdAndUpdate(courseId, { $push: { videos: newVideo } })
        const foundCourses = await Courses.findById(courseId).populate('videos')
        res.json({
            status: 'success',
            message: 'video added',
            data: foundCourses
        })
    })
}

export default mentorApiController;