
// Application Middleware

import express from 'express';
const app=express(); 
const PORT =3000;

// app.use((req,res,next)=>{
//     console.log('time',Date.now);
//     next();

// })
app.get('/user',(req,res,next)=>{
    res.send('user page ')
    console.log("User is working");


})
// error handling -middleware
app.use((err,req,res,next)=>{
    console.log("Error ",err);
    res.status(500).send("broke")
    
})
app.listen(PORT ,function(err){
    if(err) console.log(err);
    console.log("Server is running on Port :",PORT)
})