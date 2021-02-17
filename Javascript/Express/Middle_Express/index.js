const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next()
})

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs')
    next()
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'nopassword') {
        next()
    }else{
    res.send('SORRY, YOU REQUIRE A PASSWORD FOR THIS PAGE!')
}
}

// app.use((req,res,next) => {
//     console.log('This is my first middleware')
//     return next();
//     console.log('This is my first middleware - after calling next()')
// })

// app.use((req, res, next) => {
//     console.log('This is my second middleware')
//     next();
// })

// app.use((req, res, next) => {
//     console.log('This is my third middleware')
//     next()
// })


app.get('/', (req, res) => {
    console.log(`The requested time is ${req.requestTime}`)
    res.send('Home Page!')
})
app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})

app.get('/secret',verifyPassword, (req, res) => {
    res.send('THE SECRET IS: SPACE IS NOT REAL, ITS ALL AN IMAGINATION')
})

// app.use((req, res) => {
//     res.status(404).send('PAGE NOT FOUND')
// })

app.listen(3000, (req, res) => {
    console.log('Listening in port 3000'.toUpperCase())
})