const express = require('express');
const connectDB = require('./config/db')


const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.listen(port,() =>console.log(`Listening port ${port}`))

