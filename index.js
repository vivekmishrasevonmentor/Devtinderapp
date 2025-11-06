const express=require('express');
const app=express();

app.get("/home",(req,res)=>{
    res.send("this is home page")
})


app.get("/",(req,res)=>{
    res.send("this is main page")
})


app.get("/about/:id",(req,res)=>{
    console.log(req.query);
    console.log(req.params);
    
    
    res.send("this is about page")
})

app.get("/about/2",(req,res)=>{
    res.send("this is 2about page")
})
app.get("/a/",(req,res)=>{
    res.send("this is 2about page")
})


app.listen(3008)