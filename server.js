const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8090;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT : ${PORT}`)
})