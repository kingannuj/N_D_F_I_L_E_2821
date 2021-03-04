const express=require('express');
const bodyParser=require('body-parser')
const ejs= require('ejs');
const app= express();

app.get('/',(req,res)=>{
    res.send("hello");
    
});

app.post("/",(req,res)=>{
    res.send("Post request");
});

app.listen(8080,()=>{
    console.log("Server Started");
});
