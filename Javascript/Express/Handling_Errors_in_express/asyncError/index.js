const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const ObjectID = require('mongodb').ObjectID;
const AppError = require('./AppError');
const mongoose = require('mongoose');

const Product = require('./models/product');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO CONNECTIONS SUCCESSFUL!!')
    })
    .catch(err => {
        console.log('MONGO CONNECTION LOST!!')
        console.log(err)
    })


categories = ['vegetable', 'fruit', 'dairy']


app.get('/', (req, res) => {
    res.redirect('/products')
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => next(err))
    }
}

app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
}))



app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ 'category': category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
}))

app.get('/products/:id', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        if (!ObjectID.isValid(id)) {
            throw next(new AppError('Invalid ID', 400))
        }
        const product = await Product.findById(id);
        if (!product) {
            throw next(new AppError('Product not Found', 404))
        }
        res.render('products/show', { product })

}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product, categories })
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
        console.log(product)
        res.redirect(`/products/${product._id}`)
}))

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

const handleError = (err) =>{
    console.dir(err)
    return new AppError(`VALIDATION FAILED......${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name)
    if(err.name === 'ValidationError') err=handleError(err)
    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message)
})

app.listen(3000, function () {
    console.log('Listening on port 3000'.toUpperCase())
})