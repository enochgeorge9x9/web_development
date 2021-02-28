const express = require('express');
const app = express();
const shelterRouter = require('./routes/shelters')
const dogsRouter = require('./routes/dogs')
const adminRouter = require('./routes/admin')



app.use('/shelters', shelterRouter)
app.use('/dogs', dogsRouter)
app.use('/admin', adminRouter)

app.listen(3000, (req, res) => {
    console.log('LISTENING ON PORT 3000');
})