const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('CONNECTION LOST')
        console.log(err)
    })

/*
{
    title: 'Avengers: Age of Ultron',
    year : 1976,
    score : 9.9,
    rating: 'R'
}
*/

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema)
// const avengers = new Movie({
//     title: 'Avengers: Age of Ultron',
//     year: 1976,
//     score: 9.9,
//     rating: 'R'
// })

Movie.insertMany([
    { title: 'Cats and Dogs', year: 2012, score: 8.2, rating: 'PG' },
    { title: 'Iron Man 2018', year: 2018, score: 8.5, rating: 'PG-13' },
    { title: 'Bad Boys', year: 2019, score: 9.2, rating: 'PG-13' },
    { title: 'Saw', year: 2014, score: 8.2, rating: 'R' },
    { title: 'Men in Black', year: 2015, score: 8.6, rating: 'R' }
])
    .then((data) => {
        console.log('It has been uploaded')
        console.log(data)
    })
    .catch(err => {
        console.log('Something went wrong')
    })