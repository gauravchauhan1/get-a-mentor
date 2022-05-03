const mongoose = require('mongoose')

const Mentee = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true,unique: true},
  password: {type: String, required: true},
  phone: {type: String, required: true}
},
  {collection: 'mentee-data'}
)

const model = mongoose.model('MenteeData', Mentee)
module.exports = model
