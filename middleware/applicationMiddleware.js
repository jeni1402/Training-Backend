
// Application Middleware

import express from 'express';
const app=express(); 
const PORT =3000;

// Third party middleware
import cookieParser from 'cookie-parser';

const time=((req,res,next)=>{
    req.time=Date.now()
    next();

})

app.use(cookieParser())
// 
app.get('/user',(req,res,next)=>{
    res.send(String(req.url));
})

app.get('/student',(req,res,next)=>{
    res.send("It is student page")
    
})

app.get('/set-cookie', (req, res) => {
    res.cookie('name', 'Paul');
    res.send('Cookie set');
});

// Example: read cookie
app.get('/get-cookie', (req, res) => {
    res.send(`Cookie: ${req.cookies.name}`);
});
// error handling -middleware
app.use((err,req,res,next)=>{
    console.log("Error ",err);
    res.status(500).send("broke")
    
})
app.listen(PORT ,function(err){
    if(err) console.log(err);
    console.log(`Server is running on http://localhost:${PORT} :`)
    app.get(PORT);
})