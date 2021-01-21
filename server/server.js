const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require("cors");

dotenv.config();

PORT = 5000;

const app = express();
app.use(cors());

mongoose.connect(
    process.env.DATABASE, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to the database");
        }
    }
);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Require APIs
const productRoutes = require("./routes/product");
const CategorytRoutes = require("./routes/category");
const OwnertRoutes = require("./routes/owner");

app.use("/api", productRoutes);
app.use("/api", CategorytRoutes);
app.use("/api", OwnertRoutes);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on PORT ${PORT}`);
    }
});