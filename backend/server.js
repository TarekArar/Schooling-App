const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
require("dotenv").config;

const uri = "mongodb+srv://TarekArar:tarek1999@cluster0-iuf3o.mongodb.net/test?retryWrites=true&w=majority";
mongoose
.connect(uri, {
useUnifiedTopology: true,
useNewUrlParser: true,
useCreateIndex: true
});


const connection = mongoose.connection; 

connection.once('open', () => {
    console.log("MongoDB Database connection etablished succesfully");
})


const app = express();

const port =  8000;

// Routes
app.use(cors());
app.use(express.json());
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// launching server
app.listen(port, () => {
    console.log("server is running on port ", port);
})