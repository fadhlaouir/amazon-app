const router = require('express').Router();
const Owner = require('../models/owner');
const cloudinary = require('../middlewares/cloudinary');
const upload = require('../middlewares/multer');

// POST request
router.post('/owners', upload.single("photo"), async(req, res) => {
    try {
        const resultPhoto = await cloudinary.uploader.upload(req.file.path);
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        owner.photo = resultPhoto.secure_url;

        await owner.save();

        res.json({
            success: true,
            message: "Successfully created a new owner"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
});

// GET request
router.get("/owners", async(req, res) => {
    try {
        let owners = await Owner.find();
        res.json({
            success: true,
            owners: owners
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;