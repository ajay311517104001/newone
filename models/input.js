var mongoose = require('mongoose')
var Schema =mongoose.Schema
mongoose.set('useNewUrlParser',true)
mongoose.connect('mongodb://localhost:27017/ajax',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log('true'))

var input=new Schema({
    cityNames :{
        type:String,
    } ,
    Names :{
        type:String,
    } ,
    age :{
        type:Number,
    } ,
    sex :{
        type:String,
    } ,
})
var cityMod=mongoose.model('choice',input)

module.exports=cityMod