import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const coursesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: [  "IT",
             "Fashion Design",
             "Marketing",
             "Finance",
             "Healthcare",
             "Education",
             "Sports",
             "Entertainment",
             "Food",
             "Travel"
          ],
    required: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "videos"
    }
  ],
  mentor: {
    type: Schema.Types.ObjectId,
    ref: "mentor"
  },
  revenue: {
    type: Number,
    required: false,
    default: 0
  }
});

const Courses = model("course", coursesSchema);

export default Courses;
