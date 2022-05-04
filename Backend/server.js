import express from "express";
import mongooseConnection from "./DB/index.js";
import router from "./Routes/route.js";
import dotnet from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());
dotnet.config();


const port = process.env.PORT || 5000;

app.use("/", router);

app.all("*", (req, res) => {
  res.send("Invalid Request. Please contact Administrator.");
});

const initializeServer = async () => {
  await mongooseConnection();
  app.listen(port, (err) => {
    console.log(`http://localhost:${port}`);
    if (err) {
      console.log(`Error Starting Application Server`);
    }
  });
};

initializeServer();


// CONST EXPRESS = REQUIRE('EXPRESS')
// CONST CORS = REQUIRE('CORS')
// CONST MONGOOSE = REQUIRE('MONGOOSE')
// CONST APP = EXPRESS()
// CONST MENTEE = REQUIRE('./MODELS/MENTEE.MODEL')
// APP.USE(CORS())
// APP.USE(EXPRESS.JSON())
// MONGOOSE.CONNECT('MONGODB://LOCALHOST:27017/GET-A-MENTOR')

// APP.GET('/', (REQ, RES) => {
//   RES.SEND('HELLO WORLD!')
// })

// APP.POST('/API/REGISTER-MENTEE', ASYNC (REQ, RES) => {
//   CONSOLE.LOG(REQ.BODY)
//   TRY{
//     CONST MENTEE = AWAIT NEW MENTEE({
//       FIRSTNAME: REQ.BODY.FIRSTNAME,
//       LASTNAME: REQ.BODY.LASTNAME,
//       EMAIL: REQ.BODY.EMAIL,
//       PASSWORD: REQ.BODY.PASSWORD,
//       PHONE: REQ.BODY.PHONENUMBER
//     })
//     // MENTEE.SAVE()
//     RES.JSON({STATUS:'OK'})
//   }
//   CATCH(ERR){
//     CONSOLE.LOG(ERR)
//     RES.JSON({STATUS:'SOMETHING IS WRONG'})
//   }
//   RES.JSON({STATUS: 'OK'})
// })

// APP.LISTEN(1337, () => {
//   CONSOLE.LOG('SERVER STARTED AT PORT 1337')
// })
