const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Successful Connection!!!')
})
.catch(err => {
    console.log('Connection lost')
    console.log(err)
})


const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save', function(){
    this.first = 'Yo'
    this.last = 'Mama'
    console.log('Saving your file')
})

personSchema.post('save', function(){
    console.log('Saved your file')
})

const Person = new mongoose.model('Person', personSchema);

const tammy = new Person({
    first: "Tammy",
    last: "Bush"
})

const p = new Person({
    first:'Tom',
    last: 'jerry'
})


// tammy.save()
// console.log(tammy.fullName)