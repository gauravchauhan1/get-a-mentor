import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const QuestionsSchema = new Schema({
  reply: {
    type: String,
    required: true,
    trim: true
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: "questions"
  },
  uploaderReply: {
    type: Schema.Types.ObjectId,
    ref: "uploader"
  },
  consumerReply: {
    type: Schema.Types.ObjectId,
    ref: "consumer"
  }
});

const Questions = model("questions", QuestionsSchema);

export default Questions;
