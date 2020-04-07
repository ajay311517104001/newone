var express = require('express')
var app=express()
var router =require('./routers.js')
var bodyParser=require('body-parser')
var path=require('path')
var mongoose=require('mongoose')
var city =require('./models/input.js')


var urlencodedParser =bodyParser.urlencoded({extended:false})
app.use(bodyParser())
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','hbs')
app.get('/',router)

app.post('/',urlencodedParser,router)


app.listen(3000,()=>{
    console.log("server starts")
})