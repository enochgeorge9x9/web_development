// async function sing(){

// }

// const sing = async() => {
//     return 'LALALALA'
// }

const logIn = async(username, password) => {
    if(!username || !password) throw "CREDIATIONALS MISSING"
    if(password === 'enoch') return 'WELCOME ENOCH!'
    throw "Invalid Password"
}

logIn('enochgeorge', 'enoch')
.then( msg=> console.log("LOGGED IN - ", msg))
.catch( err => console.log("ERROR", err))