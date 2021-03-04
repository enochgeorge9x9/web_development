const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    // const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(pw, 12)
    // console.log(salt)
    // console.log(hash)
    return hash
}

const hashPw = hashPassword('monkey')

const login = async (pw, hashPwd) => {
    const verify = await bcrypt.compare(pw, hashPwd);
    if(verify){
        console.log('You have login in')
    }else{
        console.log('Incorrect Password')
    }
}


login('monkey','$2b$10$CEYDYGRucmOmlY08LWFZIe.l4ZG7jjY7.lPUk35b0a2QGCcEtSuGO')