const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECTION SUCCESSFUL')
    })
    .catch(err => {
        console.log('CONNECTION LOST')
        console.log(err)
    })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Need positive number boi']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    }
})

// productSchema.methods.greet = function(){
//     console.log('HElllE amigo!!!')
//     console.log(`from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat)
    return this.save()
}

productSchema.statics.fireSale = function(){
    return this.updateMany({}, {price: 0, onSale: true})
}

const Product = new mongoose.model('Product', productSchema);

const findProduct =  async function (){
    const foundProduct = await Product.findOne({name: 'Jersey Cycles'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    await foundProduct.addCategory('Cycling');
    console.log(foundProduct)
}

// findProduct()
Product.fireSale().then(data => console.log(data))

// const bike = new Product(
//     {
//         name: 'Cycles',
//         price: 8.5,
//         categories: ['Cloths'],
//         size: 'XSSSS'
//     })
// bike.save()
//     .then(data => {
//         console.log('It worked')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('something went wrong')
//         console.log(err)
//     })

    // Product.findOneAndUpdate({name: 'Bike Helmets'}, {price: 30.7}, {new: true, runValidators: true})
