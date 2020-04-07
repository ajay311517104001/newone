var server = require('express');
var app  = server();

app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen("3000", ()=>{
    console.log("server starts");
});