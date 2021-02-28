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

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Winter', 'Fall']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})


const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     {name: 'Watermelon', price: 4.22, season: 'Summer'},
//     {name: 'Pinapple', price: 4.52, season: 'Winter'},
//     {name: 'Potatos', price: 5.3, season: 'Spring'},
// ])

const makeFarm = async () => {
    const farm = new Farm({
        name: 'Fresh Fram House',
        city: 'New York, NY',
    });
    const melon = await Product.findOne({ name: 'Watermelon' });
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
}

// makeFarm()

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Fresh Fram House' });
    const potato = await Product.findOne({ name: 'Potatos' });
    farm.products.push(potato)
    await farm.save()
    console.log(farm)
}

// addProduct()
Farm.findOne({ name: 'Fresh Fram House' })
    .populate('products')
    .then(farm => {
        console.log(farm)
    })