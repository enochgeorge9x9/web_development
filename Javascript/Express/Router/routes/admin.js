const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('THIS PAGE IS LOCKED')
})

router.get('/secret', (req, res) => {
    res.send('Pokemons are fake')
})

router.get('/deleteAll', (req, res) => {
    res.send('Everthing deleted')
})


module.exports = router;