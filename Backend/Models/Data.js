import { delimiter } from 'ejs';
import mongoose from 'mongoose';
import validator from 'validator';
import uniqueValidator from 'mongoose-unique-validator';


const isEmail = validate.isEmail();

const Schema = mongoose.Schema;

const menteeSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {validate:[isEmail, 'Invalid email'], required: true, unique: true},
        password: {type: String, required: true},
        mobileNr: {type: validator.isMobilePhone(str[IN,[en-IN]]), required: true}
  },
    {collection: 'mentee-data'});

const mentorSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email:{validate:[isEmail, 'Invalid email'],require:true, unique:true},
        userId:{},
        mobileNr: {type: Number, required:true},
        LinkedIn: value=>validator.isURL(value,{protocols: ['https'], require_tld:true, require_protocol:true}), message: 'Must be valid URL', unique:true,
        dateOfBirth: {type:validator.isDate(input,[,delimiter])},
        Gender : {type: String, enum: ["Male","Female","Others"]},
        Address : {type: String, },
        Industry : {type: String, enum: ["IT","Business","Entrepreneur","Fashion Designing", "Modeling", "Others"]},
        Graduation : {type: String, collegeName:String, University:String, PassoutYear:Number}
    }, 
    {Collection: 'mentor-data'});
 
mentorSchema.plugin(uniqueValidator);
menteeSchema.plugin(uniqueValidator);
    
const User = Schema({
        email:{validate:[isEmail, 'Invalid email'],require:true, unique:true},
        userId:{ type:'String', require:true},
        Password:{type:'String', require:true},
        Role:{ type:'String', require:true}
    });

User.plugin(uniqueValidator);

const mentee = mongoose.model('MenteeData', menteeSchema);
const mentor = mongoose.model('MentorData', mentorSchema);
const user = mongoose.model('User',User);

export {mentee, mentor, user};