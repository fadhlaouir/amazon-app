const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

PORT = 5000;

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0.etney.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to the database')
        }
    })

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Retrieve data from the server
app.get('/', (req, res) => {
    res.json('Hello!!')
});

// Send data from frontend to backend
app.post('/', (req, res) => {
    console.log(req.body.name);
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on PORT ${PORT}`);
    }
})