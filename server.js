var express = require('express');
var path= require('path');
var bodyParser = require('body-parser');


const mongoose = require('mongoose')
const url = "mongodb+srv://nobisuakdo:@qwerty1@cluster0.dydlj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>console.log("Connected to DB"))
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/sucess');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
})

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name:stdname,
    liters:stdliters,
    date:stddate
},{ versionKey: false});



app.listen(3000,()=>console.log("Express server started"))