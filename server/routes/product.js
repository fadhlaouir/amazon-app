const router = require('express').Router();
const Product = require('../models/product');

const upload = require('../middlewares/upload-photo');

// POST request - create a new product
router.post('/products', upload.single("photo"), async(req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.file.location;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;

        await product.save(); // async

        res.json({
            status: true,
            message: "Successfully saved"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})


// GET request - get all products
router.get("/products", async(req, res) => {
    try {
        let products = await Product.find();
        res.json({
            success: true,
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})


// GET request - get a single product


// PUT request - Update a single product


// DELETE request - delete a single product






module.exports = router;