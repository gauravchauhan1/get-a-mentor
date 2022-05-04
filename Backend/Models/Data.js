import mongoose from 'mongoose';
require('mongoose-type-url');

const Schema = mongoose.Schema;

const menteeSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true,unique: true},
        password: {type: String, required: true},
        mobileNr: {type: String, required: true}
  },
    {collection: 'mentee-data'});


menteeSchema.path('mobileNr').validate(function validatePhone(){
    return(this.mobileNr > 999999999);
})

const mentorSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        mobileNr: {type: Number, match},
        LinkedIn: {type: mongoose.SchemaTypes.UrlLinkedIn, required: true, unique:true},

    }

)

const mentee = mongoose.model('MenteeData', menteeSchema);
const mentor = mongoose.model('MentorData', mentorSchema);

export default mentee;
export default mentor;