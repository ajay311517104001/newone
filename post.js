var express = require('express');
var app     =express();
var path = require('path')
var bodyParser = require('body-parser')


var urlencodedParser = bodyParser.urlencoded({extended :false})
app.use(bodyParser())

app.get('/',function(req,res){

    res.sendFile(path.join(__dirname,'/asset/index.html')) 
})

app.get('/passed/:id',function(req,res){
     var ans = req.params.id
     res.end(ans)
})

app.post('/',urlencodedParser ,function(req,res){

    
    if(req.body){
    res.end( JSON.stringify(req.body) )
    }
    else{
        res.end('it sucks')
    }
})
app.listen(3000,()=>{
    console.log('server starts')
    
    console.log(path.join(__dirname,'asset'))

    
})