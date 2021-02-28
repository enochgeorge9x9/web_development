const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to Mongoose DB');
    })
    .catch((err) => {
        console.log('Failed to Connect to Mongo DB')
        console.log(err)
    })

const userSchema = new Schema({
    username: String,
    age: Number,
    tweets: [{type: Schema.Types.ObjectId, ref:'Tweet'}]

})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)


const makeTweet = async () => {
    const user = new User({ username: 'John_byebye', age: 63 });
    const tweet = new Tweet({
        text: 'Oh boy i just turned 63 ',
        likes: 894848
    });
    tweet.user = user;
    user.tweets = tweet;
    await user.save()
    await tweet.save()
    console.log(tweet)
}

const makeTweet2 = async () => {
    const user = await User.findOne({username: 'John_byebye'})
    const tweet2 = new Tweet({
        text: 'Haha just kidding imma 21 Catfished',
        likes: 9999999
    })
    tweet2.user = user;
    user.tweets = tweet2;
    await user.save()
    await tweet2.save()
    console.log(tweet2)
}

// makeTweet()
// makeTweet2()

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user', 'username');
    console.log(t)
}

const findUser = async () => {
    const u = await (await User.findOne({username: 'John_byebye'})).populate('tweets');
    console.log(u)
}

// findTweet()
findUser()