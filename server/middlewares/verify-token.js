const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    // it's optional => to delete Bearer from token
    let checkBearer = "Bearer ";
    if (token.startsWith(checkBearer)) {
        token = token.slice(checkBearer.length, token.length);
    }
    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    message: "Failed to authenticate",
                });
            } else {
                req.decoded = decoded; // decoded is simply user {}
                next();
            }
        });
    } else {
        res.json({
            success: false,
            message: "No token Provided",
        });
    }
};