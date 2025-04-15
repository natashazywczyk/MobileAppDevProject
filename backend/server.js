//Create express application
const express = require('express');
const app = express();
const port = 4000; //make localhost port 4000


//Added CORS Middleware to server
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Body-parser Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database Server Connection String
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.n2bkl.mongodb.net/BucketListDB');

// Wish Schema and Model
const wishSchema = new mongoose.Schema({
    title: String,
    description: String,
    wishType: String,
    dateAdded: String,
    dateGoal: String,
    wishPicture: String,
});

//Object to represent Database
//Generate model based schema
const wishModel = new mongoose.model('mywishes', wishSchema);

//Only run on specified port when running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});