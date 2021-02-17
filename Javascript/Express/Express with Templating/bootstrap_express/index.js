const express = require('express');
const app = express()
const path = require('path');
const redditData = require('./data.json')
// console.log(redditData)

app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))



app.get('/', (req, res) => {
    console.log('Request for home')
    res.render('home.ejs')
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Stephen', 'Bonny', 'Kitty', 'Cute'];
    console.log('Get Request for Cats')
    res.render('cats.ejs', { cats })
})


app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    // console.log(`Get Request For ${subreddit}`)
    if(data){
        res.render('subreddit.ejs', { ...data })
    }else{
        res.render('notFound.ejs', {subreddit})
    }
    
})

app.get('/rand', (req, res) => {
    console.log('Get request for Random Page')
    const randNum = Math.floor(Math.random() * 10) + 1;
    res.render('rand.ejs', { randNum })
})

app.get('*', (req, res) => {
    res.render('notFound.ejs')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})

// console.log(__dirname)