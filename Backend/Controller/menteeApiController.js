import Courses from "../Models/Courses.js";
import Mentee from "../Models/Mentee.js";
import Mentor from "../Models/Mentor.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import jwt from "jsonwebtoken";
import createToken from "../utils/createToken.js";
import populate from "../Models/Courses.js";
import stripe from "stripe";

const verify = jwt.verify;
const privatekey = process.env.privatekey;

const Stripe = stripe;
Stripe(
  "pk_test_51Kx8yQSDHXvbXGt6F13O8DSRoMRGh3RIRowSAWZWQufnbROege73n3svBo4nakJmkmwjrZc0UIumLpAEvNEZZbnY00WEAcLtWL"
);

export default {
  signUp: catchAsync(async (req, res, next) => {
    const newMentor = await Mentee.create({ ...req.body });
    console.log(newMentor);
    createToken(newMentor);
    await newMentor.save();
    res.status(200).json({
      status: "success",
      user: "Mentee",
      message: "registered successfully",
      data: newMentor
    });
  }),

  signIn: catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const foundUser = await Mentee.findByEmailAndPassword(email, password);
    if (!foundUser) return next(new AppError("Incorrect credentials", 400));
    createToken(foundUser);
    foundUser.save();
    res.status(200).json({
      status: "success",
      user: "Mentee",
      message: "LoggedIn successfully",
      data: foundUser
    });
  }),

  signOut: catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    const foundUser = await Mentee.findOneAndUpdate(
      { accessToken: token },
      { accessToken: null }
    );
    if (!foundUser) return next(new AppError("Invalid credentials", 400));
    return res.json({
      status: "Success",
      message: "LoggedOut successfully"
    });
  }),

  getCourses: catchAsync(async (req, res, next) => {
    const foundCourses = await Courses.find({});
    res.json({
      status: "Success",
      message: "Found all courses",
      data: foundCourses
    });
  }),

  getParticularCourse: catchAsync(async (req, res, next) => {
    const courseId = req.params.courseId;
    const foundCourse = await Courses.findById(courseId)
      .populate("videos")
      .populate("Mentor");
    if (!foundCourse) return next(new AppError("invalid credentials", 400));
    res.json({
      status: "Success",
      message: "Found the course",
      data: foundCourse
    });
  }),

  buyCourse: catchAsync(async (req, res, next) => {
    const accessToken = req.headers.authorization;
    const MenteeId = await verify(accessToken, privateKey);
    const courseId = req.params.courseId;

    const { amount, source, receipt_email } = req.body;
    const charge = await stripe.charges.create({
      amount,
      currency: "INR",
      source,
      receipt_email
    });

    if (!charge) throw new Error("Transaction Unsuccessful");

    // update the data in user and in courses
    const foundMentee = await Mentee.findByIdAndUpdate(
      MenteeId.id,
      { $push: { courses: courseId } },
      { new: true }
    );
    const foundCourse = await Courses.findByIdAndUpdate(
      courseId,
      { $inc: { revenue: req.body.amount } },
      { new: true }
    );
    await Mentor.findByIdAndUpdate(foundCourse.Mentor, {
      $inc: { revenue: req.body.amount }
    });

    res.json({
      status: "Success",
      message: "Bought the course successfully",
      charge: charge,
      data: foundMentee
    });
  }),

  getUserData: catchAsync(async (req, res, next) => {
    const accessToken = req.headers.authorization;
    const userId = await verify(accessToken, privateKey);
    if (userId == null || userId == undefined) {
      return next(new AppError("token expired", 400));
    }
    const foundMentee = await Mentee.findById(userId.id).populate("courses");
    const foundMentor = await Mentor.findById(userId.id).populate({
      path: "courses",
      model: "course",
      populate: { path: "videos", model: "videos" }
    });
    if (!foundMentor && !foundMentee)
      return next(new AppError("invalid credentials", 400));
    if (foundMentee) {
      return res.json({
        status: "success",
        user: "Mentee",
        data: foundMentee
      });
    } else if (foundMentor) {
      return res.json({
        status: "success",
        user: "Mentor",
        data: foundMentor
      });
    }
  })
};
