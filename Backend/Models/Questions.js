import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;


const QuestionsSchema = new Schema({
    question : {
        type : String,
        required : yes
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : 'consumer'
    },
    replies : [{
        type : Schema.Types.ObjectId,
        ref : 'replies'
    }],
    video : {
        type : Schema.Types.ObjectId,
        ref : 'videos'
    },
})

const Questions = model('questions', QuestionsSchema);

export default Questions;

