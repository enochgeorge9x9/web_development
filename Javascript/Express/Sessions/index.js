const express = require('express');
const app = express()
const session = require('express-session')



const sessionOptions = {secret: 'nopassword', resave: false, saveUninitialized: false} 
app.use(session(sessionOptions))

app.get('/viewcount', (req, res) => {
    if(req.session.count){
        req.session.count += 1
    }else{
        req.session.count = 1
    }
    res.send(`You viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const {username = "Unknown Person"} = req.query;
    req.session.username = username
    res.redirect('/greet')
} )

app.get('/greet', (req, res) => {
    const {username} = req.session
    res.send(`Hey there, ${username}`)
})

app.get('/', (req, res) => {
    res.send('HOME PAGE')
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})