const express=require('express');
const Data = require('./models/data');
const cors = require('cors');

//load env variables
require("dotenv").config({path: './.env'});

//connect to databast
require('./config/db').connect();

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/api/v1/auth",require('./routes/authentication'));
app.use("/api/v1/data",require('./routes/data'));



app.get('/health',async(req,res)=>{
    res.send('server is running');
});



module.exports = app;