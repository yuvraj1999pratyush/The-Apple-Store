const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

const router = express.Router()

//Fetch all products
router.get('/', asyncHandler(async (req, res) => {

    const products = await Product.find({})

    res.json(products)

}))


//Fetch product by ID
router.get('/:id', asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }


}))



module.exports = router