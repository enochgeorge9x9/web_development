const mongoose = require('mongoose');
const {Schema}  = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit','vegetable', 'dairy']
    },
    farm: {
        type: mongoose.Types.ObjectId,
        ref: 'Farm'
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;