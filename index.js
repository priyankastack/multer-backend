const express=require('express');
const connectdb = require('./config/db');
require('dotenv').config();
const router=require('./router/router');
const cors=require('cors');
const app=express();
const corsOptions={
origin:" http://localhost:5175",
method:"GET,POST,PUT,PATCH,DELETE,HEAD",
credentials:true
}

app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',router);



connectdb();
app.listen(3000,(()=>console.log("Server has been started.")));