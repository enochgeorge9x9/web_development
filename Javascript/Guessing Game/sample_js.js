//create a variable prompt user for max number and conver to Int
//create a while loop to check if its a valid number
//create variable with random number till max which will be target number
//prompt user to guess the number
//if the guess if low prompt user its low and if its high prompt user it high unitl
//they get the correct guess
//show users how many guess they made 

let max = parseInt(prompt("Enter your Maximum Number"));
while(!max){
    max = parseInt(prompt("Enter a Valid Number"))
}

const targetNum = Math.floor(Math.random()*max + 1)
let attempts = 1

let guess = parseInt(prompt("Enter your First Guess"));
while(parseInt(guess) !== targetNum){
    if(guess === 'q'){
        break;
    }
    attempts++;
    if(guess < targetNum){
        guess = prompt("You Guess is Too Low! Try Again")
    }
    else{
        guess = prompt("You Guess is Too High! Try Again")
    }

}

if(guess === 'q'){
    console.log("YOU QUIT!!")
}else{
    console.log("CONGRATZ YOU WON")
    console.log(`You guess ${attempts} times to get Number ${targetNum}`)
}


console.log(max, targetNum)