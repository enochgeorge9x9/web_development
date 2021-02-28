const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisisthepassword'))


app.get('/greet', (req, res) => {
    console.log(req.cookies)
    const {name = 'No-Name'} = req.cookies;
    res.send(`Hey there, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Bobo')
    res.cookie('animal', 'Bobo chan')
    res.send('I send an cookie')
})

app.get('/signedFruit', (req, res) => {
    res.cookie('fruit', 'orange', {'signed':true})
    res.send('Ok your fruit was signed')
})

app.get('/verifyFruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})