const router = require("express").Router();
const User = require("../models/user");
const verifyToken = require("../middlewares/verify-token");

const jwt = require("jsonwebtoken");

// SignUp Route
router.post("/auth/signup", async(req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            message: "Please enter mail or password",
        });
    } else {
        try {
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800, // 1 week
            });
            res.json({
                success: true,
                token: token,
                message: "Successfully created a new user",
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
});

// Profile Route
router.get("/auth/user", verifyToken, async(req, res) => {
    try {
        let foundUser = await User.findOne({ _id: req.decoded._id });
        if (foundUser) {
            res.json({
                success: true,
                user: foundUser,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Login Route
router.post("/auth/login", async(req, res) => {
    try {
        let foundUser = await User.findOne({ email: req.body.email }); // to check for email
        // if email doesn't exist
        if (!foundUser) {
            res.status(403).json({
                success: false,
                message: "Authentication failed, User not found",
            });
        } else {
            // check password
            if (foundUser.comparePassword(req.body.password)) {
                // if password is correct
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800, // 1 week
                });
                res.json({
                    success: true,
                    token: token,
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: "Authentication failed, Wrong Password",
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;