const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String, 
        required: [true, 'Password cannot be blank']
    }
})

userSchema.statics.findUserAndValidate = async function(username, password) {
    const user = await this.findOne({username});
    const isValid = await bcrypt.compare(password, user.password)
    return isValid? user: false;
}


userSchema.pre('save', async function(req, res, next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12);
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User; 