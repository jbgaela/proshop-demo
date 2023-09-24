import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

// @DESC:  Fetch all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// @DESC:  Fetch a products
// @route  GET /api/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Resource not found')
    }
})
export { getProducts, getProductById }