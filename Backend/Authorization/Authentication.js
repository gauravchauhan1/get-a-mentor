import jwt from 'jsonwebtoken';
import user from '../Models/Data.js'
app.use(express.json())

export const User_login = (req,res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
    user.findOne({email:req.body.email}).then(user=>{
        if(user){
            bcrypt.compare(req.body.password, user.password).then(result=>{
                if(result){
                    const token = jwt.sign({ Email:user.email, userId:user._id, role:user.role }, JWT_SECRET );
                    res.cookie('xfcv', token);
                     if(user.role==0){ res.send('login',{layout:'blank',title:'login',error:'You do not have access '})} 
                     else{ res.send('login',{layout:'blank',title:'Login',error:'Incorrect Password'})}
                    }
                else{ res.render('login',{layout:'blank',title:'Login',error:'User dose not exist. Please register first'})}
            })
        }
    })
}

export const User_register = (req,res) =>{
    console.log(req.body)
    if(req.body.email){
        user.findOne({email:req.body.email}).then(existing_user=>{
            if(!existing_user){
                bcrypt.hash(req.body.password, 14).then(hash =>{
                    let newUser = new User({ Email:req.body.email, userName:user._id, password:hash, role:req.body.role})
                    newUser.save().then(result =>{
                        console.log(result); 
                    })
                    res.send('Registered successfully');
                } ).catch(err => {
                    res.send('Failed to register, Reason: '+err);
                })
            }
        })
    }
}

export const User_mentee = (req,res) =>{
    console.log(req.body)
    if(req.body.email){
        user
    }
}