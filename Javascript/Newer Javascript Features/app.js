//* Default Param
// function rollDice(num=6){
//     return Math.floor(Math.random() * num) + 1;
// }

//* Spread
// const nums = [1,2,3,4,5,5,3,2,223,3,2,112];
// console.log(Math.max(nums))
// console.log(Math.max(...nums))

// //? Spread with Array Literals
// const cats = ['bobby', 'tommy'];
// const dogs = ['looly', 'tooly', 'jolly'];
// console.log([...cats,...dogs, 'tony'])

// //? Spread with Object Literals
// const feline = {legs: 4, family:'feline'}
// const canine = {isFurry: true, family:'canine'}
// let catDogs = {...feline, ...canine, family:'rabbits', eyes:'2'};
// console.log(catDogs)

// const userDetail = {
//     name:'Bob',
//     email:'bob.bob@gmail.com',
//     age: 62};

// let newUser = {...userDetail, id:"#3621ss", isAdmin:false};
// console.log(newUser)

//* Rest Param
// function sum(...nums){
//     console.log(nums.reduce((total, num) => total+num))
// }
// sum(3,2,2,2,22,2,100)

// function raceResults(gold, silver, ...everyoneElse){
//     console.log(`GOLD GOES TO: ${gold}`)
//     console.log(`SILVER GOES TO: ${silver}`)
//     console.log(`THANK YOU EVERYONE ELSE: ${everyoneElse}`)
// }
// const players = ['George', 'Micheal', 'Johnny', 'David', 'Ted', 'Batman'];
// raceResults(...players)

// * Destructuring
// //? Destructuring from an Array
// const players = ['George', 'Micheal', 'Johnny', 'David', 'Ted', 'Batman'];

// const [first, second, ...everyoneElse] = players
// console.log(first)
// console.log(second)
// console.log(everyoneElse)

// //? Destructuring from an Object
// const user = {
//     email: 'username@gmail.com',
//     password: '221122jjs',
//     firstName: 'User',
//     lastName: 'Name',
//     born: 1923,
//     died: 1987,
//     bio: 'Great Man or Women or I have no idea',
//     city: 'Moon',
//     state: 'grey'
// }

// const {firstName, bio, state, born:Birth, zip=723, city:land="Earth", died} = user;
// console.log(firstName)
// console.log(`DOB ${Birth} to ${died}`)
// console.log(zip)
// console.log(land)

// //? Destructuring from Param
const user = {
    email: 'username@gmail.com',
    password: '221122jjs',
    firstName: 'User',
    lastName: 'Name',
    born: 1923,
    died: 1987,
    bio: 'Great Man or Women or I have no idea',
    city: 'Moon',
}

function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`
}
console.log(fullName(user))


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

const titleScore = movies.map(({title, score}) => {
    return `${title} rated ${score} out of 100`
})

console.log(titleScore)