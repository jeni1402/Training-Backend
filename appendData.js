import fs from'fs';
fs.appendFile('hello.txt',"\n hii i just add a new data ",(err)=>{
    if(err)throw err;
    console.log("Data Appended ");
})