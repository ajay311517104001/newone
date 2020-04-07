var express= require('express')
var router=express.Router()
var mongoose = require('mongoose')

var city =require('./models/input.js')

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/',function(req,res){
    res.send(JSON.stringify(req.body))
    var cityNew=new city();
    cityNew.cityNames=req.body.cityName
    cityNew.Names=req.body.name
    cityNew.age=req.body.age
    cityNew.sex=req.body.sex
    cityNew.save(function(err,savedObject){
        if(err){
            console.log(err)
        }
        console.log("working fine")
    })
})
module.exports=router