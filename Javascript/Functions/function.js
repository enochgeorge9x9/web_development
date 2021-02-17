function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("FA");
}

function greet(firstName, lastName){
    console.log(`Hey there ${firstName} ${lastName[0]}.`);
}

function repeatString(str, times){
    let result = '';
    for(let i=0; i<times; i++){
        result += str
    }
    console.log(result)
}

function add(x, y){
    return x+y;
}