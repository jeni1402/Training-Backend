import fs from 'fs';
fs.writeFile('hello.txt','hello Nodejs File Opereations',(err)=>{
if (err) throw err;
console.log("File created")
})