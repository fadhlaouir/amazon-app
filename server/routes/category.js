const router = require('express').Router();
const Category = require('../models/category');

// POST request
router.post('/categories', async(req, res) => {
    try {
        const category = new Category();
        category.type = req.body.type;

        await category.save();

        res.json({
            success: true,
            message: "Successfuly created a new category"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
});

module.exports = router