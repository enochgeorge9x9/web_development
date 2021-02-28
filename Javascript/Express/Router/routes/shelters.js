const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('SHOWING ALL SHELTERS')
})

router.get('/:id', (req, res) => {
    res.send('VIEWING ONE SHELTER')
})

router.post('/:id', (req, res) => {
    res.send('CREATING A NEW SHELTER')
})

router.get('/:id/edit',(req, res) => {
    res.send('EDITING A NEW SHELTER')
} )


module.exports = router