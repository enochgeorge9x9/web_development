const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const mongoose = require('mongoose');

const Product = require('./models/product');
const Farm = require('./models/farm.js')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO CONNECTIONS SUCCESSFUL!!')
    })
    .catch(err => {
        console.log('MONGO CONNECTION LOST!!')
        console.log(err)
    })

categories = ['vegetable', 'fruit', 'dairy']


//Farm Routes
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})

app.post('/farms', async (req, res) => {
    const newFarm = new Farm(req.body);
    await newFarm.save()
    res.redirect('/farms')
})

app.get('/farms/:id', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id).populate('products')
    res.render('farms/show.ejs', { farm })
})

app.delete('/farms/:id', async(req, res) => {
    console.log('deleting')
    const {id} = req.params;
    const deleteFarm = await Farm.findByIdAndDelete(id);
    res.redirect('/farms')
})

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)
    res.render('products/new', { categories, farm })
})

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const product = new Product(req.body);
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`)
})



// Products Routes
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)

})



app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ 'category': category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }

})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm');
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    console.log(product)
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

app.listen(3000, function () {
    console.log('Listening on port 3000'.toUpperCase())
})