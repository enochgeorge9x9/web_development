const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to Mongoose DB');
    })
    .catch((err) => {
        console.log('Failed to Connect to Mongo DB')
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String, 
    last: String, 
    addresses: [
        {
            _id: {id: false},
            street: String, 
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: 'Bahrain',
        city: 'Mananma',
        state: 'Island',
        country: 'Nowhere'
    })
    const res = await u.save();
    console.log(res)
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: 'Hamilton',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await user.save();
    console.log(res)
}


addAddress('60337b06e0b5a82ee8c52d20')

