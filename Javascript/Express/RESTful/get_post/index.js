const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const {v4: uuid} = require('uuid')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

let comments = [
    {
        id: uuid(),
        username: 'Boi69',
        comment: 'Check out my new vides in the moon'
    },
    {
        id: uuid(),
        username: 'Maxima',
        comment: 'Lol broke my leg today, feeling high'
    },
    {
        id: uuid(),
        username: 'Gimity',
        comment: 'Lol broke my leg today, feeling high'
    },
    {
        id:uuid(),
        username: 'GxaGam',
        comment: 'Computer programming is confusing an lot to learn'
    },
    {
        id:uuid(),
        username: 'RiderMe',
        comment: 'Bikes are better than girls or games'
    },
]

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const user = comments.find(c => c.id === id)
    res.render('comments/edit', {user})
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newComment = req.body.comment;
    const foundUser = comments.find(c => c.id === id)
    foundUser.comment = newComment;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.get('/comments', (req, res) => {
    res.render('comments/all', {comments})
})

app.get('/comments/:id', (req, res) =>{
    const {id} = req.params;
    const user = comments.find(c => c.id === id);
    res.render('comments/view', {user})

})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id:uuid()})
    res.redirect('/comments')
})

app.get('/', (req, res) => {
    res.render('getpost.ejs')
})

app.get('/tacos', (req, res) => {
    res.send('GET response to /tacos')
})
app.post('/tacos', (req, res) => {
    const { type, qty } = req.body
    res.send(`Ok, here are your ${qty} ${type} tacos`)
})

app.listen(8080, () => {
    console.log('LISTENING ON PORT 8080')
})


// GET /comments => List of comments
// POST /comments => Create a comments
// GET /comments/:id => List a comment using ID
// PATCH /comments/:id => Update a comment using ID
// DELETE /comments/:id => Delete a comment using ID