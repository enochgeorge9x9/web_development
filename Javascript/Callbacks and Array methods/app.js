// * forEach Method 
// const movies = [
//     {
//         title : 'Amadeus',
//         score: 99
//     },
//     {
//         title : 'Stand by Me',
//         score: 85
//     },
//     {
//         title : 'Parasite',
//         score: 95
//     },
//     {
//         title : 'Alien',
//         score: 90
//     }
// ]
    
// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// * Map Method
// const movies = [
//     {
//         title : 'Amadeus',
//         score: 99
//     },
//     {
//         title : 'Stand by Me',
//         score: 85
//     },
//     {
//         title : 'Parasite',
//         score: 95
//     },
//     {
//         title : 'Alien',
//         score: 90
//     }
// ]
    
// titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })

// console.log(titles)

// * Arrow Function
// const add = (x,y) =>{
//     return x+y;
// }
// console.log(add(1,2))

// const rollDice = () => {
//     return Math.floor(Math.random()*6) + 1
// }
// console.log(rollDice())

// //? Implicit Returns Only in Arrow Functions
// const rollDice2 = () =>(
//     Math.floor(Math.random()*6)+1
// )
// console.log(rollDice2())

// const add2 = (x,y) => x+y;
// console.log(add2(2,6))

// const movies = [
//     {
//         title : 'Amadeus',
//         score: 99
//     },
//     {
//         title : 'Stand by Me',
//         score: 85
//     },
//     {
//         title : 'Parasite',
//         score: 95
//     },
//     {
//         title : 'Alien',
//         score: 90
//     }
// ]

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score/10}/10`
// ))
// console.log(newMovies)
    

// * setTimeout and setInterval
// console.log("Hi there")
// // Setting a pause of 3000 ms or 3s
// setTimeout(() => (console.log("Are you still there")), 3000) 

// console.log("How are you")

// //Repeats after every 2s or 2000ms
// const id = setInterval( () =>(
//     console.log(Math.random())
//     ), 2000)
// console.log(id)


const movies =[
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 70,
        year: 2016
    },
    {
        title: 'Waterworld',
        score: 70,
        year: 2005
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1975
    },
]

//* Filter

// const goodMovies = movies.filter(m => m.score>=80);
// const goodTitles = goodMovies.map(g => g.title)
// //One Liner
// const goodMovieTitles = movies.filter(m => m.score >=80).map(g => g.title)


// const badMovies = movies.filter(m => m.score<=80);
// const recentMovies = movies.filter(m => m.year >= 2000);

// * Every and Some

// movies.some(movie => movie.year>2015);
// movies.every(movie => movie.year>2015);

// * Reduce

// const highestRated = movies.reduce((bestMovie, currMovie) =>{
//     if(currMovie.score > bestMovie.score){
//         return currMovie;
//     }
//     return bestMovie;
// })
