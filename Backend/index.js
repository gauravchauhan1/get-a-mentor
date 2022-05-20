const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const Mentee = require('./models/mentee.model')
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/get-a-mentor')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/register-mentee', async (req, res) => {
  console.log(req.body)
  try{
    const mentee = await new Mentee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phoneNumber
    })
    // mentee.save()
    res.json({status:'ok'})
  }
  catch(err){
    console.log(err)
    res.json({status:'something is wrong'})
  }
  res.json({status: 'ok'})
})

app.listen(1337, () => {
  console.log('server started at port 1337')
})
