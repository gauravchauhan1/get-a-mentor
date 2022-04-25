const express = require('express');
const app = express()
const bcrypt = require('bcrypt')

const PORT = 3000;

app.use(express.urlencoded({ extended: false}))
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('hello');
})


//Login
app.get('/login', (req, res) =>{
    res.send('Login Window')
})

app.post('/login', (req, res) =>{
    res.send('Login Window')
})


//Register
app.post('/register', async (req, res) =>{
    try{
        const hashPassword = bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now.toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect('/login');
    }catch{
        res.redirect('/register');
    }
    console.log(users)

})

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));