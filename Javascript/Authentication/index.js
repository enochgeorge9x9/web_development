const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt')
const session = require('express-session')

const User = require('./models/user')

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully Connected to Mongoose'.toUpperCase())
    }).catch(err => {
        console.log('Something went wrong')
        console.log(err)
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
const sessionConfig = { secret: 'nopassword', saveUninitialized: true, resave: false }
app.use(session(sessionConfig))

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    // const hash = await bcrypt.hash(password, 12) 
    const newUser = new User({ username, password }) //Hashes the password in User Schema pre save middleware
    await newUser.save()
    req.session.user_id = newUser._id;
    res.redirect('/')
})


app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { password, username } = req.body;
    const validUser = await User.findUserAndValidate(username, password)
    // console.log(validUser)
    // console.log(req.body)
    if (validUser) {
        req.session.user_id = validUser._id
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

app.post('/signout', (req, res) => {
    req.session.user_id = null
    res.redirect('/login')
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('TOP SECRET HAHAHHAHA')
})


app.get('/', (req, res) => {
    res.send('Authentication')
})

app.listen(3000, () => {
    console.log('Listening on port 3000'.toUpperCase())
})