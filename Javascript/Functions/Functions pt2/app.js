//* Function Scope
// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs)
// }


// *Lexical Scope
// function heros(){
//     let heros = ['SipderMan', 'IronMan', 'Thor', 'Hulk'];
//     function callForHelp(){
//         for(let hero of heros){
//             console.log(`Help Me ${hero}`)
//         }
//     }
//     callForHelp()

// }
// heros()


//*Function Expression
// const add = function(x,y){
//     return x+y;
// }

// console.log(add(5,5))

//* Higher Order Function
//! Using functions as arguements
// function callTwice(func){
//     func()
//     func()
// }

// function rollDise(){
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll)
// }
// callTwice(rollDise)

//! return functions
// function makeBetweenFunc(min, max){
//     return function(num){
//         return num>min && num<max;
//     }
// }

// const isChild = makeBetweenFunc(0,18);
// const isAdult = makeBetweenFunc(18,40);

// //*Creating Methods
// const myMath = {
//     PI : 3.16,
//     square: function(num){
//         return num**2;
//     },
//     cube: function(num){
//         return num**3;
//     }
// }
// //! Creating methods ShortHand
// const math = {
//     PI: 3.16,
//     cube(num){
//         return num**3;
//     },
//     sqrt(num){
//         return num**2;
//     }
// }

//* 'This' Method
// const cat = {
//     name: "Blue Mango",
//     color: "violet",
//     breed: "jungle fury",
//     meow() {
//         console.log(`${this.name} is MEOWING}`)
//     }
// }

// * Try/Catch
function yell(str){
    try{
        console.log(str.toUpperCase().repeat(3))
    }catch{
        console.log("PLEASE ENTER A STRING")
    }
}