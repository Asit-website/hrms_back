const express = require("express");
require('dotenv').config();
require('./db/conn');
const app = express();
const cors = require("cors");
const port = 5000 ;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
    console.log('Listening on ', port);
});
