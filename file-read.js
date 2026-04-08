import fs from 'fs';
fs.readFile('hello.txt','UTF8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})