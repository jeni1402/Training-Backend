import fs from 'fs';

fs.unlink('hello.txt',(err)=> {if(err) throw err;})
    console.log("file deleted ");