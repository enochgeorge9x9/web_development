// let rand = Math.random();
// if(rand<0.5){
//     console.log("YOUR NUMBER IS LESS THAN 0.5 :)")
//     console.log(rand)
// }
// else{
//     console.log("Number is still more than 0.5 :(")
// }


// const age = 8;
// const age = parseInt(prompt("Enter Your Age: "))
// 0 to 5 => Free
// 5 to 10 => Child $10
// 10 to 65 => Adult $20
// 65+ => Senior $10

// if (age<5){
//     console.log("You are Baby. You get in for FREE")
// }
// else if (age <10){
//     console.log("You are a Child. You pay a fee of $10")
// }
// else if (age <65){
//     console.log("You are a Adult. You pay a fee of $20")
// }
// else{
//     console.log("You are a Senior. You pay a feee of $10")
// }



const password = prompt("Enter your password: ");
// Password must be 6+ characters
if (password.length >= 6){
    // Password must not include space
    if (password.indexOf(" ") === -1){
        console.log("Congratz You have a Strong Password");
    }
    else{
        console.log("There Shouldn't be any space");
    }
}
else{
    console.log("You password should be 6+ characters");
}

