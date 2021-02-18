const express = require('express')
const morgan = require('morgan')
const AppError = require('./AppError')
const app = express()

app.use(morgan('dev'))

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next()
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'enoch') {
        return next()
    }
    // res.send('This page requires a password')
    // throw new Error('HAHA you dont have the password')
    throw new AppError('Password Required', 401);

}


app.get('/', (req, res) => {
    res.send('HOME')
})

app.get('/errors', (req, res) => {
    chicken.pit()
})

app.get('/dogs', (req, res) => {
    console.log(`THE REQUEST TIME IS: ${req.requestTime}`)
    res.send('WOOF WOOF')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('THE SECRET IS : ITS OKAY TO BE OKAY')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not the Admin', 403)
})

app.use((req, res) => {
    res.status(404).send('Page does not exist')
})

// app.use((err, req, res, next) => {
//     console.log("**********************")
//     console.log("**********Error********")
//     console.log("************************")
//     console.log(err)
//     next(err)
// })

app.use((err, req, res, next) => {
    const {status = 500, message="Something went wrong"} = err;
    res.status(status).send(message)
})

app.listen(3000, (req, res) => {
    console.log('listening on port: 3000'.toUpperCase())
})