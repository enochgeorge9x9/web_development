const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('I have recieved a request from 3000')
//     res.send({ color: 'red', age: 33, alive: true })
// })

app.get('/', (req, res) => {
    console.log('Request for Home page!!!!!!!!!!!!!!')
    res.send('HOME PAGE')
})

app.get('/r/:subreddit', (req, res) => {
    console.log('Get request for subreddit page')
    const { subreddit } = req.params;
    res.send(`<h1>This is a ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    console.log(`Get request of ${postID} on ${subreddit} subreddit`)
    res.send(`<h1>Browsing Post ID: ${postID} on ${subreddit} subreddit</h1>`)
})

app.get('/dogs', (req, res) => {
    console.log('Request for Dog page')
    res.send('WOOOOF')
})

app.get('/cats', (req, res) => {
    console.log('Get Request for Cat page')
    res.send('MEOWWWW')
})

app.post('/cats', (req, res) => {
    console.log('Post Request from Cat page')
    res.send('POST Meowwwwwww')
})

app.get('/search', (req, res) => {
    console.log(req.query)
    const { q } = req.query;
    if (!q) {
        res.send('Search not found')
    }
    console.log(q)
    res.send(`<h1>Searching for : ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("This page doesn't exist")
})




app.listen(3000, () => {
    console.log('I am listening at post 3000')
})