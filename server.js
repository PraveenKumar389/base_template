const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const PORT = 8090;

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/post',require('./router/posts'));

// connection  DB

mongoose.connect (
    process.env.DB_CONNECTION,
    {useNewUrlParser:true , useUnifiedTopology: true , useFindAndModify:true},
    () => console.log('connect db!')
);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT : ${PORT}`)
})