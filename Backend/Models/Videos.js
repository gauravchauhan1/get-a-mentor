import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const videoSchema = new Schema({
  video: {
    type: String,
    required: true
  },
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
  course: {
    type: Schema.Types.ObjectId,
    ref: "course"
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "questions"
    }
  ]
});

const Videos = model("videos", videoSchema);

export default Videos;
