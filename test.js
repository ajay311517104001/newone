var mongoose =require('mongoose');

mongoose.set('useNewUrlParser',true)
mongoose.connect('mongodb://localhost:27017/ajay',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("yes"))
.catch((err)=> console.log(err))

